// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('inventi.n26');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
inventi.n26.trn__GT_map = (function inventi$n26$trn__GT_map(p__14968){
var vec__14972 = p__14968;
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14972,(0),null);
var payee = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14972,(1),null);
var account = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14972,(2),null);
var trx_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14972,(3),null);
var payment_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14972,(4),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14972,(5),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14972,(6),null);
var amount_foreign_curency = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14972,(7),null);
var currency = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14972,(8),null);
var rate = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14972,(9),null);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,((clojure.string.starts_with_QMARK_(amount,"-"))?cljs.core.cst$kw$debit:cljs.core.cst$kw$credit),cljs.core.cst$kw$date,date,cljs.core.cst$kw$id,clojure.string.replace(clojure.string.replace(clojure.string.replace(clojure.string.replace([cljs.core.str(date),cljs.core.str(payee),cljs.core.str(amount)].join(''),/\,/,""),/\./,""),/\-/,""),/\ /,""),cljs.core.cst$kw$amount,amount,cljs.core.cst$kw$payee,payee,cljs.core.cst$kw$memo,payment_ref,cljs.core.cst$kw$orig,payment_ref], null);
});
inventi.n26.parse_stmt = (function inventi$n26$parse_stmt(csv){
var stmt = cljs.core.rest(csv);
var vec__14981 = cljs.core.first(stmt);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14981,(0),null);
var vec__14984 = cljs.core.last(stmt);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14984,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$from,from,cljs.core.cst$kw$to,to,cljs.core.cst$kw$trx,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inventi.n26.trn__GT_map,stmt))], null);
});
