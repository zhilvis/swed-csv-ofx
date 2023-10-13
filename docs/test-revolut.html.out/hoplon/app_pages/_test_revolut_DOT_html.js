// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._test_revolut_DOT_html');
goog.require('cljs.core');
goog.require('hoplon.app_pages._index_DOT_html');
goog.require('javelin.core');
goog.require('inventi.csv');
goog.require('hoplon.core');
goog.require('inventi.ofx');
goog.require('inventi.revolut');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
hoplon.app_pages._test_revolut_DOT_html.f = [cljs.core.str("Completed Date;Reference;Paid Out  (EUR);Paid In  (EUR);Exchange Out;Exchange In; Balance  (EUR)\r\n"),cljs.core.str("2017 January 26;Top-Up by *3030;;200;;;1,526.84\r\n"),cljs.core.str("2017 January 25;Amazon Services-Kindle;9.15;;USD 9.81;;1,326.84\r\n"),cljs.core.str("2017 January 24;Maxima Lt, X-422 Gedim;0.52;;;;1,335.99\r\n"),cljs.core.str("2017 January 24;Maxima Lt, X-422 Gedim;5.79;;;;1,336.51\r\n"),cljs.core.str("2017 January 23;Coffee 1, Kavos Baras;1.80;;;;1,342.30\r\n"),cljs.core.str("2017 January 23;Dailu;5.20;;;;1,344.10\r\n"),cljs.core.str("2017 January 23;Drogas 3;2.19;;;;1,349.30\r\n"),cljs.core.str("2017 January 23;Maxima Lt, X-097 Minda;6.79;;;;1,351.49\r\n"),cljs.core.str("November 30;To Gabriele Kybartaite;10,00;;;;134,95\r\n")].join('');
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.file_name,"test-revolut-data.csv") : cljs.core.reset_BANG_.call(null,hoplon.app_pages._index_DOT_html.file_name,"test-revolut-data.csv"));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.file,hoplon.app_pages._test_revolut_DOT_html.f) : cljs.core.reset_BANG_.call(null,hoplon.app_pages._index_DOT_html.file,hoplon.app_pages._test_revolut_DOT_html.f));
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__15193 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$href,"style.css",cljs.core.cst$kw$rel,"stylesheet") : hoplon.core.link.call(null,cljs.core.cst$kw$href,"style.css",cljs.core.cst$kw$rel,"stylesheet"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__15193) : hoplon.core.head.call(null,G__15193));
})(),(function (){var G__15194 = hoplon.app_pages._index_DOT_html.statement.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$statement,hoplon.app_pages._index_DOT_html.stmt], 0));
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$1(G__15194) : hoplon.core.body.call(null,G__15194));
})()], 0));
