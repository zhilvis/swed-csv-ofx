// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.app_pages._index_DOT_html');
goog.require('cljs.core');
goog.require('inventi.citadele');
goog.require('inventi.core');
goog.require('javelin.core');
goog.require('inventi.csv');
goog.require('hoplon.core');
goog.require('inventi.ofx');
goog.require('inventi.revolut');
goog.require('inventi.n26');
goog.require('clojure.string');
hoplon.app_pages._index_DOT_html.file = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
hoplon.app_pages._index_DOT_html.file_name = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
hoplon.app_pages._index_DOT_html.stmt = javelin.core.formula((function (G__14994,G__14992,G__14989,G__14991,G__14995,G__14990,G__14993){
if(cljs.core.truth_(G__14989)){
if(cljs.core.truth_((G__14990.cljs$core$IFn$_invoke$arity$2 ? G__14990.cljs$core$IFn$_invoke$arity$2(G__14989,"Type") : G__14990.call(null,G__14989,"Type")))){
var G__14996 = (G__14992.cljs$core$IFn$_invoke$arity$5 ? G__14992.cljs$core$IFn$_invoke$arity$5(G__14989,cljs.core.cst$kw$separator,",",cljs.core.cst$kw$quote,"\"") : G__14992.call(null,G__14989,cljs.core.cst$kw$separator,",",cljs.core.cst$kw$quote,"\""));
return (G__14991.cljs$core$IFn$_invoke$arity$1 ? G__14991.cljs$core$IFn$_invoke$arity$1(G__14996) : G__14991.call(null,G__14996));
} else {
if(cljs.core.truth_((G__14990.cljs$core$IFn$_invoke$arity$2 ? G__14990.cljs$core$IFn$_invoke$arity$2(G__14989,"Citadele") : G__14990.call(null,G__14989,"Citadele")))){
var G__14997 = (G__14992.cljs$core$IFn$_invoke$arity$5 ? G__14992.cljs$core$IFn$_invoke$arity$5(G__14989,cljs.core.cst$kw$separator,",",cljs.core.cst$kw$quote,"\"") : G__14992.call(null,G__14989,cljs.core.cst$kw$separator,",",cljs.core.cst$kw$quote,"\""));
return (G__14993.cljs$core$IFn$_invoke$arity$1 ? G__14993.cljs$core$IFn$_invoke$arity$1(G__14997) : G__14993.call(null,G__14997));
} else {
if(cljs.core.truth_((G__14990.cljs$core$IFn$_invoke$arity$2 ? G__14990.cljs$core$IFn$_invoke$arity$2(G__14989,"\"Date\"") : G__14990.call(null,G__14989,"\"Date\"")))){
var G__14998 = (G__14992.cljs$core$IFn$_invoke$arity$5 ? G__14992.cljs$core$IFn$_invoke$arity$5(G__14989,cljs.core.cst$kw$separator,",",cljs.core.cst$kw$quote,"\"") : G__14992.call(null,G__14989,cljs.core.cst$kw$separator,",",cljs.core.cst$kw$quote,"\""));
return (G__14994.cljs$core$IFn$_invoke$arity$1 ? G__14994.cljs$core$IFn$_invoke$arity$1(G__14998) : G__14994.call(null,G__14998));
} else {
var G__14999 = (G__14992.cljs$core$IFn$_invoke$arity$1 ? G__14992.cljs$core$IFn$_invoke$arity$1(G__14989) : G__14992.call(null,G__14989));
return (G__14995.cljs$core$IFn$_invoke$arity$1 ? G__14995.cljs$core$IFn$_invoke$arity$1(G__14999) : G__14995.call(null,G__14999));
}
}
}
} else {
return null;
}
})).call(null,inventi.n26.parse_stmt,inventi.csv.read_csv,hoplon.app_pages._index_DOT_html.file,inventi.revolut.parse_stmt,inventi.core.parse_stmt,clojure.string.starts_with_QMARK_,inventi.citadele.parse_stmt);
hoplon.app_pages._index_DOT_html.ofx = javelin.core.formula((function (G__15001,G__15000){
if(cljs.core.truth_(G__15000)){
return (new Blob([(G__15001.cljs$core$IFn$_invoke$arity$1 ? G__15001.cljs$core$IFn$_invoke$arity$1(G__15000) : G__15001.call(null,G__15000))]));
} else {
return null;
}
})).call(null,inventi.ofx.stmt__GT_ofx,hoplon.app_pages._index_DOT_html.stmt);
hoplon.app_pages._index_DOT_html.ofx_file_name = javelin.core.formula((function (G__15003,G__15002){
if(cljs.core.truth_(G__15002)){
return (G__15003.cljs$core$IFn$_invoke$arity$3 ? G__15003.cljs$core$IFn$_invoke$arity$3(G__15002,".csv",".ofx") : G__15003.call(null,G__15002,".csv",".ofx"));
} else {
return null;
}
})).call(null,clojure.string.replace,hoplon.app_pages._index_DOT_html.file_name);
hoplon.app_pages._index_DOT_html.read_file_BANG_ = (function hoplon$app_pages$_index_DOT_html$read_file_BANG_(files){
var f = (files[(0)]);
var r = (new FileReader());
var G__15008_15012 = hoplon.app_pages._index_DOT_html.file_name;
var G__15009_15013 = f.name;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15008_15012,G__15009_15013) : cljs.core.reset_BANG_.call(null,G__15008_15012,G__15009_15013));

r.onload = ((function (f,r){
return (function (){
var G__15010 = hoplon.app_pages._index_DOT_html.file;
var G__15011 = r.result;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__15010,G__15011) : cljs.core.reset_BANG_.call(null,G__15010,G__15011));
});})(f,r))
;

return r.readAsText(f);
});
/**
 * @param {...*} var_args
 */
hoplon.app_pages._index_DOT_html.statement = (function() { 
var hoplon$app_pages$_index_DOT_html$statement__delegate = function (args__14335__auto__){
var vec__15090 = hoplon.core.parse_args(args__14335__auto__);
var map__15093 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15090,(0),null);
var map__15093__$1 = ((((!((map__15093 == null)))?((((map__15093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__15093):map__15093);
var statement__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15093__$1,cljs.core.cst$kw$statement);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15090,(1),null);
return hoplon.core.loop_tpl_STAR_(javelin.core.formula(((function (vec__15090,map__15093,map__15093__$1,statement__$1,_){
return (function (G__15095){
return cljs.core.cst$kw$trx.cljs$core$IFn$_invoke$arity$1(G__15095);
});})(vec__15090,map__15093,map__15093__$1,statement__$1,_))
).call(null,statement__$1),((function (vec__15090,map__15093,map__15093__$1,statement__$1,_){
return (function (item__14365__auto__){
var vec__15096 = javelin.core.cell_map(cljs.core.identity,javelin.core.formula(((function (vec__15090,map__15093,map__15093__$1,statement__$1,_){
return (function (t){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [t], null);
});})(vec__15090,map__15093,map__15093__$1,statement__$1,_))
).call(null,item__14365__auto__));
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15096,(0),null);
var G__15132 = (function (){var G__15138 = (function (){var G__15153 = cljs.core.cst$kw$class;
var G__15154 = "amount";
var G__15155 = javelin.core.formula(((function (G__15153,G__15154,vec__15096,t,vec__15090,map__15093,map__15093__$1,statement__$1,_){
return (function (G__15156){
return cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(G__15156);
});})(G__15153,G__15154,vec__15096,t,vec__15090,map__15093,map__15093__$1,statement__$1,_))
).call(null,t);
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__15153,G__15154,G__15155) : hoplon.core.span.call(null,G__15153,G__15154,G__15155));
})();
var G__15139 = (function (){var G__15158 = cljs.core.cst$kw$class;
var G__15159 = "date";
var G__15160 = javelin.core.formula(((function (G__15158,G__15159,G__15138,vec__15096,t,vec__15090,map__15093,map__15093__$1,statement__$1,_){
return (function (G__15161){
return cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(G__15161);
});})(G__15158,G__15159,G__15138,vec__15096,t,vec__15090,map__15093,map__15093__$1,statement__$1,_))
).call(null,t);
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$3(G__15158,G__15159,G__15160) : hoplon.core.span.call(null,G__15158,G__15159,G__15160));
})();
var G__15140 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__15141 = (hoplon.core.b.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.b.cljs$core$IFn$_invoke$arity$1("payee:  ") : hoplon.core.b.call(null,"payee:  "));
var G__15142 = javelin.core.formula(((function (G__15138,G__15139,G__15140,G__15141,vec__15096,t,vec__15090,map__15093,map__15093__$1,statement__$1,_){
return (function (G__15162){
return cljs.core.cst$kw$payee.cljs$core$IFn$_invoke$arity$1(G__15162);
});})(G__15138,G__15139,G__15140,G__15141,vec__15096,t,vec__15090,map__15093,map__15093__$1,statement__$1,_))
).call(null,t);
var G__15143 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__15144 = (hoplon.core.b.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.b.cljs$core$IFn$_invoke$arity$1("memo:  ") : hoplon.core.b.call(null,"memo:  "));
var G__15145 = javelin.core.formula(((function (G__15138,G__15139,G__15140,G__15141,G__15142,G__15143,G__15144,vec__15096,t,vec__15090,map__15093,map__15093__$1,statement__$1,_){
return (function (G__15163){
return cljs.core.cst$kw$memo.cljs$core$IFn$_invoke$arity$1(G__15163);
});})(G__15138,G__15139,G__15140,G__15141,G__15142,G__15143,G__15144,vec__15096,t,vec__15090,map__15093,map__15093__$1,statement__$1,_))
).call(null,t);
var G__15146 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__15147 = (hoplon.core.b.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.b.cljs$core$IFn$_invoke$arity$1("original text:  ") : hoplon.core.b.call(null,"original text:  "));
var G__15148 = javelin.core.formula(((function (G__15138,G__15139,G__15140,G__15141,G__15142,G__15143,G__15144,G__15145,G__15146,G__15147,vec__15096,t,vec__15090,map__15093,map__15093__$1,statement__$1,_){
return (function (G__15164){
return cljs.core.cst$kw$orig.cljs$core$IFn$_invoke$arity$1(G__15164);
});})(G__15138,G__15139,G__15140,G__15141,G__15142,G__15143,G__15144,G__15145,G__15146,G__15147,vec__15096,t,vec__15090,map__15093,map__15093__$1,statement__$1,_))
).call(null,t);
var G__15149 = (hoplon.core.br.cljs$core$IFn$_invoke$arity$0 ? hoplon.core.br.cljs$core$IFn$_invoke$arity$0() : hoplon.core.br.call(null));
var G__15150 = (hoplon.core.b.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.b.cljs$core$IFn$_invoke$arity$1("ID:  ") : hoplon.core.b.call(null,"ID:  "));
var G__15151 = javelin.core.formula(((function (G__15138,G__15139,G__15140,G__15141,G__15142,G__15143,G__15144,G__15145,G__15146,G__15147,G__15148,G__15149,G__15150,vec__15096,t,vec__15090,map__15093,map__15093__$1,statement__$1,_){
return (function (G__15165){
return cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(G__15165);
});})(G__15138,G__15139,G__15140,G__15141,G__15142,G__15143,G__15144,G__15145,G__15146,G__15147,G__15148,G__15149,G__15150,vec__15096,t,vec__15090,map__15093,map__15093__$1,statement__$1,_))
).call(null,t);
return (hoplon.core.p.cljs$core$IFn$_invoke$arity$14 ? hoplon.core.p.cljs$core$IFn$_invoke$arity$14(G__15138,G__15139,G__15140,G__15141,G__15142,G__15143,G__15144,G__15145,G__15146,G__15147,G__15148,G__15149,G__15150,G__15151) : hoplon.core.p.call(null,G__15138,G__15139,G__15140,G__15141,G__15142,G__15143,G__15144,G__15145,G__15146,G__15147,G__15148,G__15149,G__15150,G__15151));
})();
return (hoplon.core.span.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.span.cljs$core$IFn$_invoke$arity$1(G__15132) : hoplon.core.span.call(null,G__15132));
});})(vec__15090,map__15093,map__15093__$1,statement__$1,_))
);
};
var hoplon$app_pages$_index_DOT_html$statement = function (var_args){
var args__14335__auto__ = null;
if (arguments.length > 0) {
var G__15166__i = 0, G__15166__a = new Array(arguments.length -  0);
while (G__15166__i < G__15166__a.length) {G__15166__a[G__15166__i] = arguments[G__15166__i + 0]; ++G__15166__i;}
  args__14335__auto__ = new cljs.core.IndexedSeq(G__15166__a,0);
} 
return hoplon$app_pages$_index_DOT_html$statement__delegate.call(this,args__14335__auto__);};
hoplon$app_pages$_index_DOT_html$statement.cljs$lang$maxFixedArity = 0;
hoplon$app_pages$_index_DOT_html$statement.cljs$lang$applyTo = (function (arglist__15167){
var args__14335__auto__ = cljs.core.seq(arglist__15167);
return hoplon$app_pages$_index_DOT_html$statement__delegate(args__14335__auto__);
});
hoplon$app_pages$_index_DOT_html$statement.cljs$core$IFn$_invoke$arity$variadic = hoplon$app_pages$_index_DOT_html$statement__delegate;
return hoplon$app_pages$_index_DOT_html$statement;
})()
;
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__15169 = (hoplon.core.link.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.link.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$href,"style.css",cljs.core.cst$kw$rel,"stylesheet") : hoplon.core.link.call(null,cljs.core.cst$kw$href,"style.css",cljs.core.cst$kw$rel,"stylesheet"));
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__15169) : hoplon.core.head.call(null,G__15169));
})(),(function (){var G__15174 = (function (){var G__15177 = cljs.core.cst$kw$type;
var G__15178 = "file";
var G__15179 = cljs.core.cst$kw$change;
var G__15180 = ((function (G__15177,G__15178,G__15179){
return (function (p1__15168_SHARP_){
return hoplon.app_pages._index_DOT_html.read_file_BANG_(p1__15168_SHARP_.target.files);
});})(G__15177,G__15178,G__15179))
;
return (hoplon.core.input.cljs$core$IFn$_invoke$arity$4 ? hoplon.core.input.cljs$core$IFn$_invoke$arity$4(G__15177,G__15178,G__15179,G__15180) : hoplon.core.input.call(null,G__15177,G__15178,G__15179,G__15180));
})();
var G__15175 = (function (){var con__14373__auto__ = (new cljs.core.Delay(((function (G__15174){
return (function (){
var G__15182 = cljs.core.cst$kw$download;
var G__15183 = hoplon.app_pages._index_DOT_html.ofx_file_name;
var G__15184 = cljs.core.cst$kw$href;
var G__15185 = javelin.core.formula(((function (G__15182,G__15183,G__15184,G__15174){
return (function (G__15187){
return URL.createObjectURL(G__15187);
});})(G__15182,G__15183,G__15184,G__15174))
).call(null,hoplon.app_pages._index_DOT_html.ofx);
var G__15186 = (function (){var t__14434__auto__ = document.createTextNode("");
javelin.core.formula(((function (t__14434__auto__,G__15182,G__15183,G__15184,G__15185,G__15174){
return (function (G__15189,G__15188){
return G__15188.nodeValue = [cljs.core.str("Download "),cljs.core.str(G__15189),cljs.core.str(" file")].join('');
});})(t__14434__auto__,G__15182,G__15183,G__15184,G__15185,G__15174))
).call(null,hoplon.app_pages._index_DOT_html.ofx_file_name,t__14434__auto__);

return t__14434__auto__;
})();
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__15182,G__15183,G__15184,G__15185,G__15186) : hoplon.core.a.call(null,G__15182,G__15183,G__15184,G__15185,G__15186));
});})(G__15174))
,null));
var alt__14374__auto__ = (new cljs.core.Delay(((function (con__14373__auto__,G__15174){
return (function (){
return null;
});})(con__14373__auto__,G__15174))
,null));
var tpl__14375__auto__ = ((function (con__14373__auto__,alt__14374__auto__,G__15174){
return (function (p__14376__auto__){
var G__15190 = (function (){var or__6557__auto__ = (cljs.core.truth_(p__14376__auto__)?con__14373__auto__:alt__14374__auto__);
if(cljs.core.truth_(or__6557__auto__)){
return or__6557__auto__;
} else {
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$0 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$0() : cljs.core.atom.call(null));
}
})();
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__15190) : cljs.core.deref.call(null,G__15190));
});})(con__14373__auto__,alt__14374__auto__,G__15174))
;
return javelin.core.formula(tpl__14375__auto__).call(null,hoplon.app_pages._index_DOT_html.ofx);
})();
var G__15176 = hoplon.app_pages._index_DOT_html.statement.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$statement,hoplon.app_pages._index_DOT_html.stmt], 0));
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$3(G__15174,G__15175,G__15176) : hoplon.core.body.call(null,G__15174,G__15175,G__15176));
})()], 0));
