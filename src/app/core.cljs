(ns app.core
  (:require [cljs.nodejs :as nodejs]
            [clojure.walk :as walk]
            [cljs.core.async :refer [<! chan >!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(nodejs/enable-util-print!)
(def AWS (nodejs/require "aws-sdk"))
(def doc (nodejs/require "dynamodb-doc"))
(def dynamo (.DynamoDB doc))

(defn convert-js [event]
  (-> event
      js->clj
      walk/keywordize-keys))


(defn handle-db-response [response]
  (-> response
      js->clj
      walk/keywordize-keys
      :Items))

(defn get-courses []
  (let [c (chan)
        query {:TableName "courses"}]
    (.scan dynamo (clj->js query) #(go (>! c
                                           (if %1
                                             (println %1)
                                             (handle-db-response %2)))))
    c))

(defmulti get-data
  (fn [{:keys [type] :as event}] (keyword type)))

(defmethod get-data :courses [{:keys [type] :as event}]
  (go
    {:type :courses
     type (<! (get-courses))}))

(defmethod get-data :collection [{:keys [type collection] :as event}]
  (go
    (let [courses (<! (get-courses))
          ids (map :course-id courses)
          collection (assoc collection :course-ids ids)]
      {:type :collection
       type collection})))

(defn ^:export handler [event context cb]
  (go
    (let [event (convert-js event)
          data (<! (get-data event))]
      (cb nil (clj->js data)))))

(defn -main [] identity)
(set! *main-cli-fn* -main)
