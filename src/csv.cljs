;; clone from clojure.data.csv with cljs changes
(ns csv
  (:require [cljs.reader :refer [push-back-reader read-char unread]])
  (:import goog.string.StringBuffer))

(def ^{:private true} lf  \newline)
(def ^{:private true} cr  \return)
(def ^{:private true} eof nil)

(defn- read-quoted-cell [reader sb sep quote]
  (loop [ch (read-char reader)]
    (condp == ch
      quote (let [next-ch (read-char reader)]
              (condp == next-ch
                quote (do (.append sb (char quote))
                          (recur (read-char reader)))
                sep :sep
                lf  :eol
                cr  (let [next-next-ch (read-char reader)]
                      (when (not= next-next-ch lf)
                        (unread reader next-next-ch))
                      :eol)
                eof :eof
                (throw (js/Error (str "CSV error (unexpected character: %c)" next-ch)))))
      eof (throw (js/Error "CSV error (unexpected end of file)"))
      (do (.append sb (char ch))
          (recur (read-char reader))))))

(defn- read-cell [reader sb sep quote]
  (let [first-ch (read-char reader)]
    (if (== first-ch quote)
      (read-quoted-cell reader sb sep quote)
      (loop [ch first-ch]
        (condp = ch
          sep :sep
          lf  :eol
          cr (let [next-ch (read-char reader)]
               (when (not= next-ch lf)
                 (unread reader next-ch))
               :eol)
          eof :eof
          (do
            (.append sb (char ch))
            (recur (read-char reader))))))))

(defn- read-record [reader sep quote]
  (loop [record (transient [])]
    (let [cell (StringBuffer.)
          sentinel (read-cell reader cell sep quote)]
      (if (= sentinel :sep)
        (recur (conj! record (.toString cell)))
        [(persistent! (conj! record (.toString cell))) sentinel]))))

(defn read-csv-from [reader sep quote]
    (lazy-seq
      (let [[record sentinel] (read-record reader sep quote)]
        (case sentinel
          :eol (cons record (read-csv-from reader sep quote))
          :eof (when-not (= record [""])
                 (cons record nil))))))

(defn read-csv
  "Reads CSV-data from input String into a lazy
  sequence of vectors.
   Valid options are
     :separator (default \\,)
     :quote (default \\\")"
  [input & options]
  (let [{:keys [separator quote] :or {separator \, quote \"}} options]
    (read-csv-from (push-back-reader input) separator quote)))
