(ns inventi.citadele
    (:require [clojure.string :as st]
              [cljs-time.coerce :as dt]
              [cljs-time.format :refer [formatter parse unparse]]))


(def citadele-dt  (formatter  "dd.MM.yyyy"))
(def stmt-dt (formatter "yyyy-MM-dd"))

(defn stmt-date [d]
  (->>
    d
    (parse citadele-dt)
    (unparse stmt-dt)))

;01.01.2021,PIRKINYS,28/12/2020 420845******9176 MCC-5511 REF: 741316,CITYBEE VILNIUS GB 31758141,ET210018J67WK8,-0.14
(defn trn->map [[date trx-type payment-ref payee trx-id amount]]
  {:type (if (st/starts-with? amount "-") :debit :credit)
   :date (stmt-date (str date))
   :id trx-id
   :amount amount
   :payee payee
   :memo (str trx-type " " payment-ref)
   :orig payment-ref})

(defn parse-stmt [csv]
  (let [stmt (rest csv)
        [from] (first stmt)
        [to] (last stmt)]
    {:from from
     :to to
     :trx (doall (map trn->map stmt))}))
