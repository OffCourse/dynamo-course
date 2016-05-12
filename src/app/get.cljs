(ns app.get
  (:refer-clojure :exclude [get])
  (:require [app.db :as db]
            [cljs.core.async :refer [<! chan >!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defmulti get (fn [{:keys [type]}] (keyword type)))

(defmethod get :courses [{:keys [course-ids] :as event}]
  (go
    (let [db (<! (db/s3->))]
      (:courses db))))

(defmethod get :course [{:keys [course-id] :as event}]
  (go
    (let [courses (<! (get {:type :courses}))]
      (merge (first courses)))))

(defmethod get :collection [{:keys [type collection] :as event}]
  (go
    (let [courses (<! (get {:type :courses}))
          ids (map :course-id courses)]
      (assoc collection :course-ids ids))))

(defmethod get :default [event]
  (go
    (let [db (<! (db/s3->))]
      db)))
