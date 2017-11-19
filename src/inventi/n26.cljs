(ns inventi.n26
    (:require [clojure.string :as st]
              [cljs-time.coerce :as dt]
              [cljs-time.format :refer [formatter parse unparse]]))

(defn trn->map [[date payee account trx-type payment-ref category amount amount-foreign-curency currency rate]]
  {:type (if (st/starts-with? amount "-") :debit :credit)
   :date date
   :id (->
         (str date payee amount)
         (st/replace #"\," "")
         (st/replace #"\." "")
         (st/replace #"\-" "")
         (st/replace #"\ " ""))
   :amount amount
   :payee payee
   :memo payment-ref
   :orig payment-ref})

(defn parse-stmt [csv]
  (let [stmt (rest csv)
        [from] (first stmt)
        [to] (last stmt)]
    {:from from
     :to to
     :trx (doall (map trn->map stmt))}))
