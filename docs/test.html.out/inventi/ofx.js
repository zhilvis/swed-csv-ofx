// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('inventi.ofx');
goog.require('cljs.core');
goog.require('clojure.string');
inventi.ofx.ofx_date = (function inventi$ofx$ofx_date(date){
return clojure.string.replace(date,/-/,"");
});
inventi.ofx.now = (function inventi$ofx$now(){
var d = (new Date());
return [cljs.core.str(d.getFullYear()),cljs.core.str((d.getMonth() + (1))),cljs.core.str(d.getDate())].join('');
});
inventi.ofx.ofx = (function inventi$ofx$ofx(trn_list){
return [cljs.core.str("OFXHEADER:100\n"),cljs.core.str("DATA:OFXSGML\n"),cljs.core.str("VERSION:102\n"),cljs.core.str("SECURITY:NONE\n"),cljs.core.str("ENCODING:UTF-8\n"),cljs.core.str("CHARSET:CSUNICODE\n"),cljs.core.str("COMPRESSION:NONE\n"),cljs.core.str("OLDFILEUID:NONE\n"),cljs.core.str("NEWFILEUID:NONE\n"),cljs.core.str("\n"),cljs.core.str([cljs.core.str("<OFX>\n"),cljs.core.str("<SIGNONMSGSRSV1>\n"),cljs.core.str("<SONRS>\n"),cljs.core.str("<STATUS>\n"),cljs.core.str("<CODE>0\n"),cljs.core.str("<SEVERITY>INFO\n"),cljs.core.str("<MESSAGE>OK\n"),cljs.core.str("</STATUS>\n"),cljs.core.str("<DTSERVER>"),cljs.core.str(inventi.ofx.now()),cljs.core.str("\n"),cljs.core.str("<LANGUAGE>ENG\n"),cljs.core.str("<INTU.BID>3000\n"),cljs.core.str("</SONRS>\n"),cljs.core.str("</SIGNONMSGSRSV1>\n"),cljs.core.str("<BANKMSGSRSV1>\n"),cljs.core.str("<STMTTRNRS>\n"),cljs.core.str("<TRNUID>0\n"),cljs.core.str("<STATUS>\n"),cljs.core.str("<CODE>0\n"),cljs.core.str("<SEVERITY>INFO\n"),cljs.core.str("<MESSAGE>OK\n"),cljs.core.str("</STATUS>\n"),cljs.core.str("<STMTRS>\n"),cljs.core.str("<CURDEF>EUR\n"),cljs.core.str("<BANKACCTFROM>\n"),cljs.core.str("<BANKID>1\n"),cljs.core.str("<ACCTID>10000001\n"),cljs.core.str("<ACCTTYPE>CHECKING\n"),cljs.core.str("</BANKACCTFROM>\n"),cljs.core.str("<BANKTRANLIST>\n"),cljs.core.str(trn_list),cljs.core.str("</BANKTRANLIST>\n"),cljs.core.str("<LEDGERBAL>\n"),cljs.core.str("<BALAMT>0.00\n"),cljs.core.str("<DTASOF>20160902\n"),cljs.core.str("</LEDGERBAL>\n"),cljs.core.str("</STMTRS>\n"),cljs.core.str("</STMTTRNRS>\n"),cljs.core.str("</BANKMSGSRSV1>\n"),cljs.core.str("</OFX>\n")].join(''))].join('');
});
inventi.ofx.trn_list = (function inventi$ofx$trn_list(start,end,trns){
return [cljs.core.str("<DTSTART>"),cljs.core.str(inventi.ofx.ofx_date(start)),cljs.core.str("\n"),cljs.core.str("<DTEND>"),cljs.core.str(inventi.ofx.ofx_date(end)),cljs.core.str("\n"),cljs.core.str(trns)].join('');
});
inventi.ofx.trn__GT_qfx = (function inventi$ofx$trn__GT_qfx(p__13511){
var map__13514 = p__13511;
var map__13514__$1 = ((((!((map__13514 == null)))?((((map__13514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13514):map__13514);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13514__$1,cljs.core.cst$kw$type);
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13514__$1,cljs.core.cst$kw$date);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13514__$1,cljs.core.cst$kw$id);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13514__$1,cljs.core.cst$kw$amount);
var payee = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13514__$1,cljs.core.cst$kw$payee);
var memo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13514__$1,cljs.core.cst$kw$memo);
return [cljs.core.str("<STMTTRN>\n"),cljs.core.str("<TRNTYPE>"),cljs.core.str(clojure.string.upper_case(cljs.core.name(type))),cljs.core.str("\n"),cljs.core.str("<DTPOSTED>"),cljs.core.str(inventi.ofx.ofx_date(date)),cljs.core.str("\n"),cljs.core.str("<FITID>"),cljs.core.str(id),cljs.core.str("\n"),cljs.core.str("<TRNAMT>"),cljs.core.str(amount),cljs.core.str("\n"),cljs.core.str("<NAME>"),cljs.core.str(payee),cljs.core.str("\n"),cljs.core.str("<MEMO>"),cljs.core.str(memo),cljs.core.str("\n"),cljs.core.str("</STMTTRN>\n")].join('');
});
inventi.ofx.stmt__GT_ofx = (function inventi$ofx$stmt__GT_ofx(stmt){
var map__13518 = stmt;
var map__13518__$1 = ((((!((map__13518 == null)))?((((map__13518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13518):map__13518);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13518__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13518__$1,cljs.core.cst$kw$to);
var trx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13518__$1,cljs.core.cst$kw$trx);
return inventi.ofx.ofx(inventi.ofx.trn_list(from,to,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inventi.ofx.trn__GT_qfx,trx))));
});
