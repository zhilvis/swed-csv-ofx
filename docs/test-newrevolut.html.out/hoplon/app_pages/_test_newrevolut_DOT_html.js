// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._test_newrevolut_DOT_html');
goog.require('cljs.core');
goog.require('hoplon.app_pages._index_DOT_html');
goog.require('javelin.core');
goog.require('inventi.csv');
goog.require('hoplon.core');
goog.require('inventi.ofx');
goog.require('inventi.revolut');
goog.require('cljs_time.coerce');
goog.require('cljs_time.format');
hoplon.app_pages._test_newrevolut_DOT_html.f = [cljs.core.str("Type,Product,Started Date,Completed Date,Description,Amount,Fee,Currency,State,Balance\r\n"),cljs.core.str("CARD_PAYMENT,Current,2021-06-30 17:35:04,2021-07-01 08:06:47,Wolt,-15.88,0.00,EUR,COMPLETED,227.77\r\n"),cljs.core.str("TRANSFER,Current,2021-07-02 11:33:03,2021-07-02 11:33:03,To Gabriele Kybartaite,-10.00,0.00,EUR,COMPLETED,171.67\r\n"),cljs.core.str("TRANSFER,Current,2021-07-02 11:38:10,2021-07-02 11:38:10,From Gabriele Kybartaite,10.00,0.00,EUR,COMPLETED,181.67\r\n"),cljs.core.str("TOPUP,Current,2021-07-04 11:46:00,2021-07-04 11:46:00,Payment from <C5><BD>ilvinas Kybartas,500.00,0.00,EUR,COMPLETED,681.67\r\n"),cljs.core.str("CARD_REFUND,Current,2021-07-05 00:00:00,2021-07-06 10:15:19,Refund from Pagrindinis.barbora.lt,0.34,0.00,EUR,COMPLETED,320.53\r\n"),cljs.core.str("CARD_PAYMENT,Current,2022-08-22 07:59:28,,Uscustoms Esta Appl Pm,-21.01,0.00,EUR,PENDING,\r\n"),cljs.core.str("CARD_PAYMENT,Current,2022-08-21 08:22:16,2022-08-22 09:54:55,www.aboutyou.lt,-387.20,0.00,EUR,COMPLETED,534.91\r\n"),cljs.core.str("CARD_PAYMENT,Current,2022-08-21 16:38:38,2022-08-22 12:15:47,Rimi Zirmunu,-2.77,0.00,EUR,COMPLETED,532.14\r\n")].join('');
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.file_name,"test-revolut-data.csv") : cljs.core.reset_BANG_.call(null,hoplon.app_pages._index_DOT_html.file_name,"test-revolut-data.csv"));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(hoplon.app_pages._index_DOT_html.file,hoplon.app_pages._test_newrevolut_DOT_html.f) : cljs.core.reset_BANG_.call(null,hoplon.app_pages._index_DOT_html.file,hoplon.app_pages._test_newrevolut_DOT_html.f));
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__15193 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$href,"style.css",cljs.core.cst$kw$rel,"stylesheet") : hoplon.core.link.call(null,cljs.core.cst$kw$href,"style.css",cljs.core.cst$kw$rel,"stylesheet"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__15193) : hoplon.core.head.call(null,G__15193));
})(),(function (){var G__15194 = hoplon.app_pages._index_DOT_html.statement.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$statement,hoplon.app_pages._index_DOT_html.stmt], 0));
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$1(G__15194) : hoplon.core.body.call(null,G__15194));
})()], 0));
