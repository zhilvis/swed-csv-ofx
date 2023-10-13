// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('inventi.citadele');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
inventi.citadele.trn__GT_map = (function inventi$citadele$trn__GT_map(p__13490){
var vec__13494 = p__13490;
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13494,(0),null);
var trx_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13494,(1),null);
var payment_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13494,(2),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13494,(3),null);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,((clojure.string.starts_with_QMARK_(amount,"-"))?cljs.core.cst$kw$debit:cljs.core.cst$kw$credit),cljs.core.cst$kw$date,[cljs.core.str(date)].join(''),cljs.core.cst$kw$id,trx_id,cljs.core.cst$kw$amount,amount,cljs.core.cst$kw$payee,clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.drop_last.cljs$core$IFn$_invoke$arity$2((3),clojure.string.split.cljs$core$IFn$_invoke$arity$2(payment_ref,/[ .]/))),cljs.core.cst$kw$memo,payment_ref,cljs.core.cst$kw$orig,payment_ref], null);
});
inventi.citadele.parse_stmt = (function inventi$citadele$parse_stmt(csv){
var stmt = cljs.core.rest(csv);
var vec__13503 = cljs.core.first(stmt);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13503,(0),null);
var vec__13506 = cljs.core.last(stmt);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13506,(0),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$from,from,cljs.core.cst$kw$to,to,cljs.core.cst$kw$trx,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inventi.citadele.trn__GT_map,stmt))], null);
});
