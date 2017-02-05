(ns inventi.revolut
  (:require [clojure.string :as st]
            [cljs-time.coerce :as dt]
            [cljs-time.format :refer [formatter parse unparse]]))

(def revolut-dt  (formatter  "dd MMMM yyyy"))
(def stmt-dt (formatter "yyyy-MM-dd"))
(def id-dt (formatter "yyyyMMdd"))

(defn stmt-date [d]
  (->>
    d
    (parse revolut-dt)
    (unparse stmt-dt)))

(defn stmt-id [d]
  (->>
    d
    (parse revolut-dt)
    (unparse id-dt)))

(defn trn->map [[date memo amount-out amount-in _ _ balance]]
  {:type (if amount-out :debit :credit)
   :date (stmt-date date)
   :id (->
         (str (stmt-id date) amount-out amount-in balance)
         (st/replace #"\," "")
         (st/replace #"\." ""))
   :amount (if amount-out (str "-" amount-out) amount-in)
   :payee memo
   :memo memo
   :orig memo})

(defn parse-stmt [csv]
  (let [stmt (rest csv)
        [from] (first stmt)
        [to] (last stmt)]
    {:from from
     :to to
     :trx (doall (map trn->map stmt))}))
