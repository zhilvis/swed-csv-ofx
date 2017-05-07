(ns inventi.core
  (:require [clojure.string :as st]
            [inventi.ofx :as ofx]))

(defn card-memo [memo]
 (->>
  (st/split memo #" ")
  (drop 6)
  (st/join " ")))

(defn card-date [mem]
  (->
    (st/split mem #" ")
    (nth  2)
    (st/replace #"\." "-")))

(defn card-trn [memo]
  {:memo (card-memo memo)
   :date (card-date memo)
   :payee (card-memo memo)})

(defn cash-trn [memo]
  {:memo (card-memo memo)
   :payee (card-memo memo)})

(defmulti parse-memo #(first (st/split % #" ")))

(defmethod parse-memo :default [mem]
  {:memo mem})

(defmethod parse-memo "MP" [memo]
  {:payee "Bank" :memo memo})

(defmethod parse-memo "TMP" [memo]
  {:payee "Bank" :memo memo})

(defmethod parse-memo "Kortelės" [memo]
  {:payee "Bank" :memo memo})

(defmethod parse-memo "Paskolos" [memo]
  {:payee "Paskola" :memo memo})

(defmethod parse-memo "Sukauptos" [memo]
  {:payee "Paskola" :memo memo})

(defmethod parse-memo "Saugumo" [memo]
  {:payee "Bank" :memo memo})

(defmethod parse-memo "VP" [memo]
  {:payee "Stocks" :memo memo})

(defmethod parse-memo "PIRKINYS" [memo]
  (card-trn memo))

(defmethod parse-memo "GRĄŽINIMAS" [memo]
  (card-trn memo))

(defmethod parse-memo "GRYNIEJI" [memo]
  (assoc (cash-trn memo) :payee "GRYNIEJI"))



(defn trn->map [[_ _ date payee memo amount cur kd id]]
  (merge
    {:type (if (= "D" kd) :debit :credit)
     :date date
     :id id
     :amount (if (= "D" kd) (str "-" amount) amount)
     :payee payee
     :memo memo
     :orig memo}
    (parse-memo memo)))

(defn trn? [[_ _ date payee memo amount cur kd id]]
  (and
    (not (empty? id))
    (or (= "K" kd) (= "D" kd))))

(defn parse-stmt [csv]
  (let [stmt (filter trn? csv)
        [_ _ from] (first stmt)
        [_ _ to] (last stmt)]
    {:from from
     :to to
     :trx (doall (map trn->map stmt))}))

(defn gen-file [file]
  (->
    (parse-stmt file)
    (ofx/stmt->ofx)))
