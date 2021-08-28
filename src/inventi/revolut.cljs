(ns inventi.revolut
  (:require [clojure.string :as st]
            [cljs-time.core :refer [now year]]
            [cljs-time.coerce :as dt]
            [cljs-time.format :refer [formatter parse unparse]]))

(def revolut-dt  (formatter  "yyyy-MM-dd hh:mm:ss"))
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

;Type,Started Date,Completed Date,Description,Amount,Fee,Currency,Original Amount,Original Currency,Settled Amount,Settled Currency,State,Balance
(defn trn->map [[_ date _ memo amount _ _ _ _ _ _ _ balance]]
  {:type (if (st/starts-with? amount "-") :debit :credit)
   :date (stmt-date date)
   :id (->
         (str (stmt-id date) amount balance)
         (st/replace #"\," "")
         (st/replace #"\." ""))
   :amount amount
   :payee memo
   :memo memo
   :orig memo})

(defn completed? [[_ _ _ _ _ _ _ _ _ _ _ state]]
  (= state "Completed"))

(defn parse-stmt [csv]
  (let [stmt (filter completed? (rest csv))
        [_ from] (first stmt)
        [_ to] (last stmt)]
    {:from from
     :to to
     :trx (doall (map trn->map stmt))}))
