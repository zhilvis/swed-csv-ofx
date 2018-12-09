(ns inventi.revolut
  (:require [clojure.string :as st]
            [cljs-time.core :refer [now year]]
            [cljs-time.coerce :as dt]
            [cljs-time.format :refer [formatter parse unparse]]))

(def revolut-dt  (formatter  "yyyy MMMM dd"))
(def stmt-dt (formatter "yyyy-MM-dd"))
(def id-dt (formatter "yyyyMMdd"))

(defn parse-dt [d]
  (if (js/isNaN (first d))
    (parse revolut-dt (str (year (now)) d))
    (parse revolut-dt d)))

(defn stmt-date [d]
  (->>
      d
      parse-dt
      (unparse stmt-dt)))

(defn stmt-id [d]
  (->>
    d
    parse-dt
    (unparse id-dt)))

(defn trn->map [[date memo amount-out amount-in _ _ balance]]
  {:type (if (empty? amount-in) :debit :credit)
   :date (stmt-date date)
   :id (->
         (str (stmt-id date) amount-out amount-in balance)
         (st/replace #"\," "")
         (st/replace #"\." ""))
   :amount (if (empty? amount-in) (str "-" amount-out) amount-in)
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
