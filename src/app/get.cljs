(ns app.get
  (:refer-clojure :exclude [get])
  (:require [app.db :as db]
            [com.rpl.specter :refer [ALL select-first]]
            [cljs.core.async :refer [<! chan >!]]
            [clojure.set :as set])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(defmulti get (fn [{:keys [type]}] (keyword type)))

(defmethod get :course [{:keys [course] :as event}]
  (let [{:keys [course-slug curator]} course]
    (go
      (let [courses (-> (<! (db/s3->))
                        :courses)]
        (select-first [ALL #(and (= (:course-slug %) course-slug)
                                 (= (:curator %) curator))] courses)))))

(defmethod get :courses [{:keys [course-ids] :as event}]
  (go
    (let [db (<! (db/s3->))]
      (->> (:courses db)
           (filter (fn [{:keys [course-id]}] (contains? (into #{} course-ids) course-id))))
      )))

(defn course-tags [course]
  (->> course
       :checkpoints
       (map :tags)
       (apply set/union)
       (into #{})))

(defn filter-courses [courses {:keys [collection-name collection-type]}]
  (case (keyword collection-type)
    :curators (filter (fn [course] (= collection-name (:curator course))) courses)
    :flags (filter (fn [course] (set/superset? (into #{} (:flags course)) #{collection-name})) courses)
    :tags (filter (fn [course] (set/superset? (course-tags course) #{collection-name})) courses)
    courses))

(defmethod get :collection [{:keys [type collection] :as event}]
  (go
    (-> (<! (db/s3->))
        :courses
        (filter-courses collection))))

(defmethod get :default [event]
  (go
    (let [db (<! (db/s3->))]
      db)))
