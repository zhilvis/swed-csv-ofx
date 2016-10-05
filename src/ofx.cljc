(ns ofx
  (:require [clojure.string :as st]))

(defn ofx [trn-list]
  (str
    "OFXHEADER:100\n"
    "DATA:OFXSGML\n"
    "VERSION:102\n"
    "SECURITY:NONE\n"
    "ENCODING:UTF-8\n"
    "CHARSET:CSUNICODE\n"
    "COMPRESSION:NONE\n"
    "OLDFILEUID:NONE\n"
    "NEWFILEUID:NONE\n"
    "\n"
    (str
      "<OFX>\n"

      "<SIGNONMSGSRSV1>\n"
      "<SONRS>\n"
      "<STATUS>\n"
      "<CODE>0\n"
      "<SEVERITY>INFO\n"
      "<MESSAGE>OK\n"
      "</STATUS>\n"
      "<DTSERVER>20160902151723.000[3]\n"
      "<LANGUAGE>ENG\n"
      "<INTU.BID>3000\n"
      "</SONRS>\n"
      "</SIGNONMSGSRSV1>\n"

      "<BANKMSGSRSV1>\n"
      "<STMTTRNRS>\n"
      "<TRNUID>0\n"
      "<STATUS>\n"
      "<CODE>0\n"
      "<SEVERITY>INFO\n"
      "<MESSAGE>OK\n"
      "</STATUS>\n"
      "<STMTRS>\n"
      "<CURDEF>USD\n"

      "<BANKACCTFROM>\n"
      "<BANKID>1\n"
      "<ACCTID>10000001\n"
      "<ACCTTYPE>CHECKING\n"
      "</BANKACCTFROM>\n"

      "<BANKTRANLIST>\n"
      trn-list
      "</BANKTRANLIST>\n"

      "<LEDGERBAL>\n"
      "<BALAMT>0.00\n"
      "<DTASOF>20160902130000.000 [3]\n"
      "</LEDGERBAL>\n"
      "</STMTRS>\n"
      "</STMTTRNRS>\n"
      "</BANKMSGSRSV1>\n"
      "</OFX>\n")))

(defn trn-list [start end trns]
  (str
    "<DTSTART>" start "\n"
    "<DTEND>" end "\n"
    trns))

(defn trn->qfx [{:keys [type date id amount payee memo]}]
  (str
    "<STMTTRN>\n"
    "<TRNTYPE>" (st/upper-case (name type)) "\n"
    "<DTPOSTED>" date "\n"
    "<FITID>" id "\n"
    "<TRNAMT>" amount "\n"
    "<NAME>"payee "\n"
    "<MEMO>" memo "\n"
    "</STMTTRN>\n"))

(defn stmt->ofx [stmt]
  (let [{:keys [from to trx]} stmt]
    (ofx
      (trn-list from to
        (apply str (map trn->qfx trx))))))
