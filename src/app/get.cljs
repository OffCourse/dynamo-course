(ns app.get
  (:refer-clojure :exclude [get])
  (:require [app.db :as db]
            [com.rpl.specter :refer [ALL select-first]]
            [cljs.core.async :refer [<! chan >!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defmulti get (fn [{:keys [type]}] (keyword type)))

(defmethod get :course [{:keys [course] :as event}]
  (let [{:keys [course-slug curator]} course]
    (go
      (let [courses (<! (get {:type :courses}))]
        (select-first [ALL #(and (= (:course-slug %) course-slug)
                                 (= (:curator %) curator))] courses)))))

(defmethod get :courses [{:keys [course-ids] :as event}]
  (go
    (let [db (<! (db/s3->))]
      (:courses db))))

(defmethod get :collection [{:keys [type collection] :as event}]
  (go
    (let [{:keys [collection-type collection-name]} collection
          courses (<! (get {:type :courses}))
          ids (map :course-id courses)]
      (assoc collection :course-ids ids))))

(defmethod get :default [event]
  (go
    (let [db (<! (db/s3->))]
      db)))
