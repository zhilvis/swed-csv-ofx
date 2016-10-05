(ns core
  (:require [clojure.string :as st]
            [ofx]))

(defn card-trn? [mem]
  (.startsWith mem "PIRKINYS"))

(defn format-date [d]
  (->
    ;(java.time.LocalDate/parse  d)
    ;(.format (java.time.format.DateTimeFormatter/ofPattern  "YYYYMMdd"))
    d))

(defn parse-card-date [mem]
  (->
    (st/split mem #" ")
    (nth  2)
    (st/replace #"\." "-")
    format-date))

(defn parse-card-memo [mem]
  (->>
    (st/split mem #" ")
    (drop 6)
    (st/join " ")))

(defn trn->map [[_ _ date payee memo amount cur kd id]]
  {:type (if (= "D" kd) :debit :credit)
   :date (if (card-trn? memo) (parse-card-date memo) (format-date date))
   :id id
   :amount (if (= "D" kd) (str "-" amount) amount)
   :payee payee
   :memo (if (card-trn? memo) (parse-card-memo memo) memo)})

(defn trn? [[_ _ date payee memo amount cur kd id]]
  (and
    (not (empty? id))
    (or (= "K" kd) (= "D" kd))))

(defn parse-stmt [csv]
  (let [stmt (filter trn? csv)
        [_ _ from] (first stmt)
        [_ _ to] (last stmt)]
    {:from (format-date from)
     :to (format-date to)
     :trx (doall (map trn->map stmt))}))

(defn gen-file [file]
  (->
    (parse-stmt file)
    (ofx/stmt->ofx)))
