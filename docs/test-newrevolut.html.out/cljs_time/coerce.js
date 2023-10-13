// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.coerce');
goog.require('cljs.core');
goog.require('cljs_time.core');
goog.require('cljs_time.format');
goog.require('goog.date.UtcDateTime');

/**
 * @interface
 */
cljs_time.coerce.ICoerce = function(){};

/**
 * Convert `obj` to a goog.date.DateTime instance.
 */
cljs_time.coerce.to_date_time = (function cljs_time$coerce$to_date_time(obj){
if((!((obj == null))) && (!((obj.cljs_time$coerce$ICoerce$to_date_time$arity$1 == null)))){
return obj.cljs_time$coerce$ICoerce$to_date_time$arity$1(obj);
} else {
var x__7220__auto__ = (((obj == null))?null:obj);
var m__7221__auto__ = (cljs_time.coerce.to_date_time[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__7221__auto__.call(null,obj));
} else {
var m__7221__auto____$1 = (cljs_time.coerce.to_date_time["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(obj) : m__7221__auto____$1.call(null,obj));
} else {
throw cljs.core.missing_protocol("ICoerce.to-date-time",obj);
}
}
}
});

/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.from_long = (function cljs_time$coerce$from_long(millis){
var G__13452 = millis;
if((G__13452 == null)){
return null;
} else {
return (goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1 ? goog.date.UtcDateTime.fromTimestamp.cljs$core$IFn$_invoke$arity$1(G__13452) : goog.date.UtcDateTime.fromTimestamp.call(null,G__13452));
}
});
/**
 * Returns DateTime instance from string using formatters in cljs-time.format,
 *   returning first which parses
 */
cljs_time.coerce.from_string = (function cljs_time$coerce$from_string(s){
if(cljs.core.truth_(s)){
return cljs.core.first((function (){var iter__7337__auto__ = (function cljs_time$coerce$from_string_$_iter__13463(s__13464){
return (new cljs.core.LazySeq(null,(function (){
var s__13464__$1 = s__13464;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__13464__$1);
if(temp__4657__auto__){
var s__13464__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13464__$2)){
var c__7335__auto__ = cljs.core.chunk_first(s__13464__$2);
var size__7336__auto__ = cljs.core.count(c__7335__auto__);
var b__13466 = cljs.core.chunk_buffer(size__7336__auto__);
if((function (){var i__13465 = (0);
while(true){
if((i__13465 < size__7336__auto__)){
var f = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7335__auto__,i__13465);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e13471){if((e13471 instanceof Error)){
var _ = e13471;
return null;
} else {
throw e13471;

}
}})();
if(cljs.core.truth_(d)){
cljs.core.chunk_append(b__13466,d);

var G__13473 = (i__13465 + (1));
i__13465 = G__13473;
continue;
} else {
var G__13474 = (i__13465 + (1));
i__13465 = G__13474;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13466),cljs_time$coerce$from_string_$_iter__13463(cljs.core.chunk_rest(s__13464__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13466),null);
}
} else {
var f = cljs.core.first(s__13464__$2);
var d = (function (){try{return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(f,s);
}catch (e13472){if((e13472 instanceof Error)){
var _ = e13472;
return null;
} else {
throw e13472;

}
}})();
if(cljs.core.truth_(d)){
return cljs.core.cons(d,cljs_time$coerce$from_string_$_iter__13463(cljs.core.rest(s__13464__$2)));
} else {
var G__13475 = cljs.core.rest(s__13464__$2);
s__13464__$1 = G__13475;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7337__auto__(cljs.core.vals(cljs_time.format.formatters));
})());
} else {
return null;
}
});
/**
 * Returns a DateTime instance in the UTC time zone corresponding to the given
 *   js Date object.
 */
cljs_time.coerce.from_date = (function cljs_time$coerce$from_date(date){
var G__13477 = date;
var G__13477__$1 = (((G__13477 == null))?null:G__13477.getTime());
if((G__13477__$1 == null)){
return null;
} else {
return cljs_time.coerce.from_long(G__13477__$1);
}
});
/**
 * Convert `obj` to the number of milliseconds after the Unix epoch.
 */
cljs_time.coerce.to_long = (function cljs_time$coerce$to_long(obj){
var G__13479 = obj;
var G__13479__$1 = (((G__13479 == null))?null:cljs_time.coerce.to_date_time(G__13479));
if((G__13479__$1 == null)){
return null;
} else {
return G__13479__$1.getTime();
}
});
/**
 * Convert `obj` to Unix epoch.
 */
cljs_time.coerce.to_epoch = (function cljs_time$coerce$to_epoch(obj){
var G__13481 = obj;
var G__13481__$1 = (((G__13481 == null))?null:cljs_time.coerce.to_long(G__13481));
if((G__13481__$1 == null)){
return null;
} else {
return (G__13481__$1 / (1000));
}
});
/**
 * Convert `obj` to a JavaScript Date instance.
 */
cljs_time.coerce.to_date = (function cljs_time$coerce$to_date(obj){
var G__13483 = obj;
var G__13483__$1 = (((G__13483 == null))?null:cljs_time.coerce.to_date_time(G__13483));
var G__13483__$2 = (((G__13483__$1 == null))?null:G__13483__$1.getTime());
if((G__13483__$2 == null)){
return null;
} else {
return (new Date(G__13483__$2));
}
});
/**
 * Returns a string representation of obj in UTC time-zone
 *   using "yyyy-MM-dd'T'HH:mm:ss.SSSZZ" date-time representation.
 */
cljs_time.coerce.to_string = (function cljs_time$coerce$to_string(obj){
var G__13485 = obj;
var G__13485__$1 = (((G__13485 == null))?null:cljs_time.coerce.to_date_time(G__13485));
if((G__13485__$1 == null)){
return null;
} else {
return cljs_time.format.unparse(cljs.core.cst$kw$date_DASH_time.cljs$core$IFn$_invoke$arity$1(cljs_time.format.formatters),G__13485__$1);
}
});
/**
 * Convert `obj` to a goog.date.Date instance
 */
cljs_time.coerce.to_local_date = (function cljs_time$coerce$to_local_date(obj){
if(cljs.core.truth_(obj)){
var temp__4655__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__4655__auto__)){
var dt = temp__4655__auto__;
return (new goog.date.Date(dt.getYear(),dt.getMonth(),dt.getDate()));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Convert `obj` to a goog.date.DateTime instance
 */
cljs_time.coerce.to_local_date_time = (function cljs_time$coerce$to_local_date_time(obj){
if(cljs.core.truth_(obj)){
var temp__4655__auto__ = cljs_time.coerce.to_date_time(obj);
if(cljs.core.truth_(temp__4655__auto__)){
var dt = temp__4655__auto__;
var G__13487 = (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate()));
G__13487.setHours(dt.getHours());

G__13487.setMinutes(dt.getMinutes());

G__13487.setSeconds(dt.getSeconds());

G__13487.setMilliseconds(dt.getMilliseconds());

return G__13487;
} else {
return null;
}
} else {
return null;
}
});
(cljs_time.coerce.ICoerce["null"] = true);

(cljs_time.coerce.to_date_time["null"] = (function (_){
return null;
}));

Date.prototype.cljs_time$coerce$ICoerce$ = true;

Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date){
var date__$1 = this;
return cljs_time.coerce.from_date(date__$1);
});

goog.date.Date.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.Date.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date){
var local_date__$1 = this;
if(cljs.core.truth_(local_date__$1)){
return cljs_time.core.to_utc_time_zone(local_date__$1);
} else {
return null;
}
});

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.DateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (local_date_time){
var local_date_time__$1 = this;
if(cljs.core.truth_(local_date_time__$1)){
return cljs_time.core.to_utc_time_zone(local_date_time__$1);
} else {
return null;
}
});

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$ = true;

goog.date.UtcDateTime.prototype.cljs_time$coerce$ICoerce$to_date_time$arity$1 = (function (date_time){
var date_time__$1 = this;
return date_time__$1;
});

(cljs_time.coerce.ICoerce["number"] = true);

(cljs_time.coerce.to_date_time["number"] = (function (long$){
return cljs_time.coerce.from_long(long$);
}));

(cljs_time.coerce.ICoerce["string"] = true);

(cljs_time.coerce.to_date_time["string"] = (function (string){
return cljs_time.coerce.from_string(string);
}));
