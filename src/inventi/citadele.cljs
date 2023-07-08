(ns inventi.citadele
    (:require [clojure.string :as st]
              [cljs-time.coerce :as dt]
              [cljs-time.format :refer [formatter parse unparse]]))


;"2023-07-01,ET23182H54T58Q,\"Taste map Vilnius LT SZA58234\",-7.5\r\n"
(defn trn->map [[date trx-id payment-ref amount]]
  {:type (if (st/starts-with? amount "-") :debit :credit)
   :date (str date)
   :id trx-id
   :amount amount
   :payee (st/join " " (drop-last 3 (st/split payment-ref #"[ .]")))
   :memo payment-ref
   :orig payment-ref})

(defn parse-stmt [csv]
  (let [stmt (rest csv)
        [from] (first stmt)
        [to] (last stmt)]
    {:from from
     :to to
     :trx (doall (map trn->map stmt))}))
