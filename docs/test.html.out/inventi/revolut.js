// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('inventi.revolut');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs_time.core');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
inventi.revolut.revolut_dt = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd hh:mm:ss");
inventi.revolut.stmt_dt = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyy-MM-dd");
inventi.revolut.id_dt = cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("yyyyMMdd");
inventi.revolut.parse_dt = (function inventi$revolut$parse_dt(d){
if(cljs.core.truth_((function (){var G__14897 = cljs.core.first(d);
return isNaN(G__14897);
})())){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(inventi.revolut.revolut_dt,[cljs.core.str(cljs_time.core.year(cljs_time.core.now())),cljs.core.str(d)].join(''));
} else {
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(inventi.revolut.revolut_dt,d);
}
});
inventi.revolut.stmt_date = (function inventi$revolut$stmt_date(d){
return cljs_time.format.unparse(inventi.revolut.stmt_dt,inventi.revolut.parse_dt(d));
});
inventi.revolut.stmt_id = (function inventi$revolut$stmt_id(d){
return cljs_time.format.unparse(inventi.revolut.id_dt,inventi.revolut.parse_dt(d));
});
inventi.revolut.trn__GT_map = (function inventi$revolut$trn__GT_map(p__14898){
var vec__14902 = p__14898;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(1),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(2),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(3),null);
var memo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(4),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(5),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(6),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(7),null);
var ___$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(8),null);
var balance = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14902,(9),null);
return new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,((clojure.string.starts_with_QMARK_(amount,"-"))?cljs.core.cst$kw$debit:cljs.core.cst$kw$credit),cljs.core.cst$kw$date,inventi.revolut.stmt_date(date),cljs.core.cst$kw$id,clojure.string.replace(clojure.string.replace([cljs.core.str(inventi.revolut.stmt_id(date)),cljs.core.str(amount),cljs.core.str(balance)].join(''),/\,/,""),/\./,""),cljs.core.cst$kw$amount,amount,cljs.core.cst$kw$payee,memo,cljs.core.cst$kw$memo,memo,cljs.core.cst$kw$orig,memo], null);
});
inventi.revolut.completed_QMARK_ = (function inventi$revolut$completed_QMARK_(p__14905){
var vec__14909 = p__14905;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14909,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14909,(1),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14909,(2),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14909,(3),null);
var ___$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14909,(4),null);
var ___$5 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14909,(5),null);
var ___$6 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14909,(6),null);
var ___$7 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14909,(7),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14909,(8),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(state,"COMPLETED");
});
inventi.revolut.parse_stmt = (function inventi$revolut$parse_stmt(csv){
var stmt = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inventi.revolut.completed_QMARK_,cljs.core.rest(csv));
var vec__14918 = cljs.core.first(stmt);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14918,(0),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14918,(1),null);
var vec__14921 = cljs.core.last(stmt);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14921,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14921,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$from,from,cljs.core.cst$kw$to,to,cljs.core.cst$kw$trx,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inventi.revolut.trn__GT_map,stmt))], null);
});
