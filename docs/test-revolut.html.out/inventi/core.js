// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('inventi.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('inventi.ofx');
inventi.core.card_memo = (function inventi$core$card_memo(memo){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.drop.cljs$core$IFn$_invoke$arity$2((6),clojure.string.split.cljs$core$IFn$_invoke$arity$2(memo,/ /)));
});
inventi.core.card_date = (function inventi$core$card_date(mem){
return clojure.string.replace(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(mem,/ /),(2)),/\./,"-");
});
inventi.core.card_trn = (function inventi$core$card_trn(memo){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$memo,inventi.core.card_memo(memo),cljs.core.cst$kw$date,inventi.core.card_date(memo),cljs.core.cst$kw$payee,inventi.core.card_memo(memo)], null);
});
inventi.core.cash_trn = (function inventi$core$cash_trn(memo){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$memo,inventi.core.card_memo(memo),cljs.core.cst$kw$payee,inventi.core.card_memo(memo)], null);
});
if(typeof inventi.core.parse_memo !== 'undefined'){
} else {
inventi.core.parse_memo = (function (){var method_table__7482__auto__ = (function (){var G__13523 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13523) : cljs.core.atom.call(null,G__13523));
})();
var prefer_table__7483__auto__ = (function (){var G__13524 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13524) : cljs.core.atom.call(null,G__13524));
})();
var method_cache__7484__auto__ = (function (){var G__13525 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13525) : cljs.core.atom.call(null,G__13525));
})();
var cached_hierarchy__7485__auto__ = (function (){var G__13526 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__13526) : cljs.core.atom.call(null,G__13526));
})();
var hierarchy__7486__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("inventi.core","parse-memo"),((function (method_table__7482__auto__,prefer_table__7483__auto__,method_cache__7484__auto__,cached_hierarchy__7485__auto__,hierarchy__7486__auto__){
return (function (p1__13522_SHARP_){
return cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__13522_SHARP_,/ /));
});})(method_table__7482__auto__,prefer_table__7483__auto__,method_cache__7484__auto__,cached_hierarchy__7485__auto__,hierarchy__7486__auto__))
,cljs.core.cst$kw$default,hierarchy__7486__auto__,method_table__7482__auto__,prefer_table__7483__auto__,method_cache__7484__auto__,cached_hierarchy__7485__auto__));
})();
}
inventi.core.parse_memo.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (mem){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$memo,mem], null);
}));
inventi.core.parse_memo.cljs$core$IMultiFn$_add_method$arity$3(null,"MP",(function (memo){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$payee,"Bank",cljs.core.cst$kw$memo,memo], null);
}));
inventi.core.parse_memo.cljs$core$IMultiFn$_add_method$arity$3(null,"TMP",(function (memo){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$payee,"Bank",cljs.core.cst$kw$memo,memo], null);
}));
inventi.core.parse_memo.cljs$core$IMultiFn$_add_method$arity$3(null,"Kortel\u0117s",(function (memo){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$payee,"Bank",cljs.core.cst$kw$memo,memo], null);
}));
inventi.core.parse_memo.cljs$core$IMultiFn$_add_method$arity$3(null,"Paskolos",(function (memo){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$payee,"Paskola",cljs.core.cst$kw$memo,memo], null);
}));
inventi.core.parse_memo.cljs$core$IMultiFn$_add_method$arity$3(null,"Sukauptos",(function (memo){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$payee,"Paskola",cljs.core.cst$kw$memo,memo], null);
}));
inventi.core.parse_memo.cljs$core$IMultiFn$_add_method$arity$3(null,"Saugumo",(function (memo){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$payee,"Bank",cljs.core.cst$kw$memo,memo], null);
}));
inventi.core.parse_memo.cljs$core$IMultiFn$_add_method$arity$3(null,"VP",(function (memo){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$payee,"Stocks",cljs.core.cst$kw$memo,memo], null);
}));
inventi.core.parse_memo.cljs$core$IMultiFn$_add_method$arity$3(null,"PIRKINYS",(function (memo){
return inventi.core.card_trn(memo);
}));
inventi.core.parse_memo.cljs$core$IMultiFn$_add_method$arity$3(null,"GR\u0104\u017DINIMAS",(function (memo){
return inventi.core.card_trn(memo);
}));
inventi.core.parse_memo.cljs$core$IMultiFn$_add_method$arity$3(null,"GRYNIEJI",(function (memo){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inventi.core.cash_trn(memo),cljs.core.cst$kw$payee,"GRYNIEJI");
}));
inventi.core.trn__GT_map = (function inventi$core$trn__GT_map(p__13527){
var vec__13531 = p__13527;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13531,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13531,(1),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13531,(2),null);
var payee = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13531,(3),null);
var memo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13531,(4),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13531,(5),null);
var cur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13531,(6),null);
var kd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13531,(7),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13531,(8),null);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$type,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("D",kd))?cljs.core.cst$kw$debit:cljs.core.cst$kw$credit),cljs.core.cst$kw$date,date,cljs.core.cst$kw$id,id,cljs.core.cst$kw$amount,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("D",kd))?[cljs.core.str("-"),cljs.core.str(amount)].join(''):amount),cljs.core.cst$kw$payee,payee,cljs.core.cst$kw$memo,memo,cljs.core.cst$kw$orig,memo], null),(inventi.core.parse_memo.cljs$core$IFn$_invoke$arity$1 ? inventi.core.parse_memo.cljs$core$IFn$_invoke$arity$1(memo) : inventi.core.parse_memo.call(null,memo))], 0));
});
inventi.core.trn_QMARK_ = (function inventi$core$trn_QMARK_(p__13534){
var vec__13538 = p__13534;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13538,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13538,(1),null);
var date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13538,(2),null);
var payee = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13538,(3),null);
var memo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13538,(4),null);
var amount = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13538,(5),null);
var cur = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13538,(6),null);
var kd = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13538,(7),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13538,(8),null);
return (!(cljs.core.empty_QMARK_(id))) && ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("K",kd)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("D",kd)));
});
inventi.core.parse_stmt = (function inventi$core$parse_stmt(csv){
var stmt = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(inventi.core.trn_QMARK_,csv);
var vec__13547 = cljs.core.first(stmt);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13547,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13547,(1),null);
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13547,(2),null);
var vec__13550 = cljs.core.last(stmt);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13550,(0),null);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13550,(1),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13550,(2),null);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$from,from,cljs.core.cst$kw$to,to,cljs.core.cst$kw$trx,cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inventi.core.trn__GT_map,stmt))], null);
});
inventi.core.gen_file = (function inventi$core$gen_file(file){
return inventi.ofx.stmt__GT_ofx(inventi.core.parse_stmt(file));
});
