(ns app.core
  (:require [cljs.nodejs :as nodejs]
            [cljs.core.async :refer [<! chan >!]])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(nodejs/enable-util-print!)
(def AWS (nodejs/require "aws-sdk"))
(def doc (nodejs/require "dynamodb-doc"))
(def dynamo (.DynamoDB doc))

(defn get-courses []
  (let [c (chan)
        query {:TableName "courses"}]
    (.scan dynamo (clj->js query) #(go (>! c (clj->js %2))))
    c))

(defn handler [event context cb]
  (go
    (cb nil (<! (get-courses)))))
