// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._test_citadele_DOT_html');
goog.require('cljs.core');
goog.require('hoplon.app_pages._index_DOT_html');
goog.require('javelin.core');
goog.require('inventi.csv');
goog.require('hoplon.core');
goog.require('inventi.ofx');
goog.require('inventi.revolut');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
hoplon.app_pages._test_citadele_DOT_html.f = [cljs.core.str("Citadele,,,,,\r\n"),cljs.core.str("2023-07-01,ET23182H54T58Q,\"Taste map Vilnius LT SZA58234\",-7.5\r\n"),cljs.core.str("2023-07-01,ET23182YXKHKQ8,\"Wolt Lithuania LT R0066053\",-28.09\r\n"),cljs.core.str("2023-07-01,ET2318247N2CLF,\"EXPRESS MARKET PC24 VILNIUS LT 36847007\",-9.12\r\n")].join('');
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.file_name,"test-citadele-data.csv") : cljs.core.reset_BANG_.call(null,hoplon.app_pages._index_DOT_html.file_name,"test-citadele-data.csv"));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.file,hoplon.app_pages._test_citadele_DOT_html.f) : cljs.core.reset_BANG_.call(null,hoplon.app_pages._index_DOT_html.file,hoplon.app_pages._test_citadele_DOT_html.f));
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__15193 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$href,"style.css",cljs.core.cst$kw$rel,"stylesheet") : hoplon.core.link.call(null,cljs.core.cst$kw$href,"style.css",cljs.core.cst$kw$rel,"stylesheet"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__15193) : hoplon.core.head.call(null,G__15193));
})(),(function (){var G__15194 = hoplon.app_pages._index_DOT_html.statement.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$statement,hoplon.app_pages._index_DOT_html.stmt], 0));
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$1(G__15194) : hoplon.core.body.call(null,G__15194));
})()], 0));
