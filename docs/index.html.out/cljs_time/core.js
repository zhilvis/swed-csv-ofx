// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('clojure.string');
goog.require('goog.date.Interval');
goog.require('goog.date');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
cljs_time.core.deprecated = (function cljs_time$core$deprecated(message){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["DEPRECATION WARNING: ",message], 0));
});
/**
 * **Note:** Equality in goog.date.* (and also with plain
 * javascript dates) is not the same as in Joda/clj-time. Two date
 * objects representing the same instant in time in goog.date.* are not
 * equal.
 * 
 * If you need to test for equality use either `cljs-time.core/=`, or
 * optionally you can require the `cljs-time.extend` namespace which will
 * extend the goog.date.* datatypes, so that clojure.core/= works as
 * expected.
 */
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

/**
 * Interface for various date time functions
 * @interface
 */
cljs_time.core.DateTimeProtocol = function(){};

/**
 * Return the year component of the given date/time.
 */
cljs_time.core.year = (function cljs_time$core$year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.year[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.year["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.year",this$);
}
}
}
});

/**
 * Return the month component of the given date/time.
 */
cljs_time.core.month = (function cljs_time$core$month(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$month$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.month[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.month["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.month",this$);
}
}
}
});

/**
 * Return the day of month component of the given date/time.
 */
cljs_time.core.day = (function cljs_time$core$day(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.day[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.day["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day",this$);
}
}
}
});

/**
 * Return the day of week component of the given date/time. Monday is 1 and Sunday is 7
 */
cljs_time.core.day_of_week = (function cljs_time$core$day_of_week(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day-of-week",this$);
}
}
}
});

/**
 * Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.
 */
cljs_time.core.hour = (function cljs_time$core$hour(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$hour$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.hour[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.hour["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.hour",this$);
}
}
}
});

/**
 * Return the minute of hour component of the given date/time.
 */
cljs_time.core.minute = (function cljs_time$core$minute(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minute$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.minute[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.minute["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minute",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.sec = (function cljs_time$core$sec(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$sec$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.sec[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.sec["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.sec",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.second = (function cljs_time$core$second(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$second$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.second[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.second["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.second",this$);
}
}
}
});

/**
 * Return the millisecond of second component of the given date/time.
 */
cljs_time.core.milli = (function cljs_time$core$milli(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$milli$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.milli[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.milli["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.milli",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly equal to date/time 'that'.
 */
cljs_time.core.equal_QMARK_ = (function cljs_time$core$equal_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2(this$,that);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.equal_QMARK_[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__7221__auto__.call(null,this$,that));
} else {
var m__7221__auto____$1 = (cljs_time.core.equal_QMARK_["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,that) : m__7221__auto____$1.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.equal?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly after date/time 'that'.
 */
cljs_time.core.after_QMARK_ = (function cljs_time$core$after_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__7221__auto__.call(null,this$,that));
} else {
var m__7221__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,that) : m__7221__auto____$1.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.after?",this$);
}
}
}
});

/**
 * Returns true if DateTime 'this' is strictly before date/time 'that'.
 */
cljs_time.core.before_QMARK_ = (function cljs_time$core$before_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__7221__auto__.call(null,this$,that));
} else {
var m__7221__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,that) : m__7221__auto____$1.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.before?",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).
 */
cljs_time.core.plus_ = (function cljs_time$core$plus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$plus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.plus_[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$2(this$,period) : m__7221__auto__.call(null,this$,period));
} else {
var m__7221__auto____$1 = (cljs_time.core.plus_["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,period) : m__7221__auto____$1.call(null,this$,period));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.plus-",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).
 */
cljs_time.core.minus_ = (function cljs_time$core$minus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.minus_[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$2(this$,period) : m__7221__auto__.call(null,this$,period));
} else {
var m__7221__auto____$1 = (cljs_time.core.minus_["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,period) : m__7221__auto____$1.call(null,this$,period));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minus-",this$);
}
}
}
});

/**
 * Returns the first day of the month
 */
cljs_time.core.first_day_of_the_month_ = (function cljs_time$core$first_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.first_day_of_the_month_[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.first-day-of-the-month-",this$);
}
}
}
});

/**
 * Returns the last day of the month
 */
cljs_time.core.last_day_of_the_month_ = (function cljs_time$core$last_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.last_day_of_the_month_[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.last-day-of-the-month-",this$);
}
}
}
});

/**
 * Returs the number of weeks in the year
 */
cljs_time.core.week_number_of_year = (function cljs_time$core$week_number_of_year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.week_number_of_year[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.week_number_of_year["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.week-number-of-year",this$);
}
}
}
});


/**
 * Interface for in-<time unit> functions
 * @interface
 */
cljs_time.core.InTimeUnitProtocol = function(){};

/**
 * Return the time in milliseconds.
 */
cljs_time.core.in_millis = (function cljs_time$core$in_millis(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.in_millis[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.in_millis["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-millis",this$);
}
}
}
});

/**
 * Return the time in seconds.
 */
cljs_time.core.in_seconds = (function cljs_time$core$in_seconds(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.in_seconds[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-seconds",this$);
}
}
}
});

/**
 * Return the time in minutes.
 */
cljs_time.core.in_minutes = (function cljs_time$core$in_minutes(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.in_minutes[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-minutes",this$);
}
}
}
});

/**
 * Return the time in hours.
 */
cljs_time.core.in_hours = (function cljs_time$core$in_hours(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.in_hours[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.in_hours["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-hours",this$);
}
}
}
});

/**
 * Return the time in days.
 */
cljs_time.core.in_days = (function cljs_time$core$in_days(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.in_days[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.in_days["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-days",this$);
}
}
}
});

/**
 * Return the time in weeks
 */
cljs_time.core.in_weeks = (function cljs_time$core$in_weeks(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.in_weeks[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-weeks",this$);
}
}
}
});

/**
 * Return the time in months
 */
cljs_time.core.in_months = (function cljs_time$core$in_months(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.in_months[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.in_months["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-months",this$);
}
}
}
});

/**
 * Return the time in years
 */
cljs_time.core.in_years = (function cljs_time$core$in_years(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (cljs_time.core.in_years[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto__.call(null,this$));
} else {
var m__7221__auto____$1 = (cljs_time.core.in_years["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__7221__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-years",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7179__auto__,k__7180__auto__){
var self__ = this;
var this__7179__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7179__auto____$1,k__7180__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7181__auto__,k12826,else__7182__auto__){
var self__ = this;
var this__7181__auto____$1 = this;
var G__12828 = (((k12826 instanceof cljs.core.Keyword))?k12826.fqn:null);
switch (G__12828) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12826,else__7182__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7193__auto__,writer__7194__auto__,opts__7195__auto__){
var self__ = this;
var this__7193__auto____$1 = this;
var pr_pair__7196__auto__ = ((function (this__7193__auto____$1){
return (function (keyval__7197__auto__){
return cljs.core.pr_sequential_writer(writer__7194__auto__,cljs.core.pr_writer,""," ","",opts__7195__auto__,keyval__7197__auto__);
});})(this__7193__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7194__auto__,pr_pair__7196__auto__,"#cljs-time.core.Interval{",", ","}",opts__7195__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IIterable$ = true;

cljs_time.core.Interval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12825){
var self__ = this;
var G__12825__$1 = this;
return (new cljs.core.RecordIter((0),G__12825__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,cljs.core.cst$kw$end], null),cljs.core._iterator(self__.__extmap)));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7177__auto__){
var self__ = this;
var this__7177__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7173__auto__){
var self__ = this;
var this__7173__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7183__auto__){
var self__ = this;
var this__7183__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7174__auto__){
var self__ = this;
var this__7174__auto____$1 = this;
var h__6992__auto__ = self__.__hash;
if(!((h__6992__auto__ == null))){
return h__6992__auto__;
} else {
var h__6992__auto____$1 = cljs.core.hash_imap(this__7174__auto____$1);
self__.__hash = h__6992__auto____$1;

return h__6992__auto____$1;
}
});

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7175__auto__,other__7176__auto__){
var self__ = this;
var this__7175__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6545__auto__ = other__7176__auto__;
if(cljs.core.truth_(and__6545__auto__)){
var and__6545__auto____$1 = (this__7175__auto____$1.constructor === other__7176__auto__.constructor);
if(and__6545__auto____$1){
return cljs.core.equiv_map(this__7175__auto____$1,other__7176__auto__);
} else {
return and__6545__auto____$1;
}
} else {
return and__6545__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7188__auto__,k__7189__auto__){
var self__ = this;
var this__7188__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,null,cljs.core.cst$kw$end,null], null), null),k__7189__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7188__auto____$1),self__.__meta),k__7189__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7189__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7186__auto__,k__7187__auto__,G__12825){
var self__ = this;
var this__7186__auto____$1 = this;
var pred__12829 = cljs.core.keyword_identical_QMARK_;
var expr__12830 = k__7187__auto__;
if(cljs.core.truth_((pred__12829.cljs$core$IFn$_invoke$arity$2 ? pred__12829.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start,expr__12830) : pred__12829.call(null,cljs.core.cst$kw$start,expr__12830)))){
return (new cljs_time.core.Interval(G__12825,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12829.cljs$core$IFn$_invoke$arity$2 ? pred__12829.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end,expr__12830) : pred__12829.call(null,cljs.core.cst$kw$end,expr__12830)))){
return (new cljs_time.core.Interval(self__.start,G__12825,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7187__auto__,G__12825),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7191__auto__){
var self__ = this;
var this__7191__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7178__auto__,G__12825){
var self__ = this;
var this__7178__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__12825,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7184__auto__,entry__7185__auto__){
var self__ = this;
var this__7184__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7185__auto__)){
return cljs.core._assoc(this__7184__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7185__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7185__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7184__auto____$1,entry__7185__auto__);
}
});

cljs_time.core.Interval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$start,cljs.core.cst$sym$end], null);
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__7213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__7213__auto__,writer__7214__auto__){
return cljs.core._write(writer__7214__auto__,"cljs-time.core/Interval");
});

cljs_time.core.__GT_Interval = (function cljs_time$core$__GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__12827){
return (new cljs_time.core.Interval(cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__12827),cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(G__12827),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12827,cljs.core.cst$kw$start,cljs.core.array_seq([cljs.core.cst$kw$end], 0)),null));
});

/**
 * Returns an Interval representing the span between the two given DateTime.
 *   Note that intervals are closed on the left and open on the right.
 */
cljs_time.core.interval = (function cljs_time$core$interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error("Assert failed: (<= (.getTime start) (.getTime end))"));
}

return cljs_time.core.__GT_Interval(start,end);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7179__auto__,k__7180__auto__){
var self__ = this;
var this__7179__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__7179__auto____$1,k__7180__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7181__auto__,k12834,else__7182__auto__){
var self__ = this;
var this__7181__auto____$1 = this;
var G__12836 = (((k12834 instanceof cljs.core.Keyword))?k12834.fqn:null);
switch (G__12836) {
case "years":
return self__.years;

break;
case "months":
return self__.months;

break;
case "weeks":
return self__.weeks;

break;
case "days":
return self__.days;

break;
case "hours":
return self__.hours;

break;
case "minutes":
return self__.minutes;

break;
case "seconds":
return self__.seconds;

break;
case "millis":
return self__.millis;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12834,else__7182__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7193__auto__,writer__7194__auto__,opts__7195__auto__){
var self__ = this;
var this__7193__auto____$1 = this;
var pr_pair__7196__auto__ = ((function (this__7193__auto____$1){
return (function (keyval__7197__auto__){
return cljs.core.pr_sequential_writer(writer__7194__auto__,cljs.core.pr_writer,""," ","",opts__7195__auto__,keyval__7197__auto__);
});})(this__7193__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__7194__auto__,pr_pair__7196__auto__,"#cljs-time.core.Period{",", ","}",opts__7195__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$years,self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$months,self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$weeks,self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$days,self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hours,self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$minutes,self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seconds,self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$millis,self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IIterable$ = true;

cljs_time.core.Period.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12833){
var self__ = this;
var G__12833__$1 = this;
return (new cljs.core.RecordIter((0),G__12833__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$years,cljs.core.cst$kw$months,cljs.core.cst$kw$weeks,cljs.core.cst$kw$days,cljs.core.cst$kw$hours,cljs.core.cst$kw$minutes,cljs.core.cst$kw$seconds,cljs.core.cst$kw$millis], null),cljs.core._iterator(self__.__extmap)));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7177__auto__){
var self__ = this;
var this__7177__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7173__auto__){
var self__ = this;
var this__7173__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7183__auto__){
var self__ = this;
var this__7183__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7174__auto__){
var self__ = this;
var this__7174__auto____$1 = this;
var h__6992__auto__ = self__.__hash;
if(!((h__6992__auto__ == null))){
return h__6992__auto__;
} else {
var h__6992__auto____$1 = cljs.core.hash_imap(this__7174__auto____$1);
self__.__hash = h__6992__auto____$1;

return h__6992__auto____$1;
}
});

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7175__auto__,other__7176__auto__){
var self__ = this;
var this__7175__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6545__auto__ = other__7176__auto__;
if(cljs.core.truth_(and__6545__auto__)){
var and__6545__auto____$1 = (this__7175__auto____$1.constructor === other__7176__auto__.constructor);
if(and__6545__auto____$1){
return cljs.core.equiv_map(this__7175__auto____$1,other__7176__auto__);
} else {
return and__6545__auto____$1;
}
} else {
return and__6545__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7188__auto__,k__7189__auto__){
var self__ = this;
var this__7188__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$months,null,cljs.core.cst$kw$days,null,cljs.core.cst$kw$seconds,null,cljs.core.cst$kw$hours,null,cljs.core.cst$kw$years,null,cljs.core.cst$kw$minutes,null,cljs.core.cst$kw$weeks,null,cljs.core.cst$kw$millis,null], null), null),k__7189__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__7188__auto____$1),self__.__meta),k__7189__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__7189__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7186__auto__,k__7187__auto__,G__12833){
var self__ = this;
var this__7186__auto____$1 = this;
var pred__12837 = cljs.core.keyword_identical_QMARK_;
var expr__12838 = k__7187__auto__;
if(cljs.core.truth_((pred__12837.cljs$core$IFn$_invoke$arity$2 ? pred__12837.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$years,expr__12838) : pred__12837.call(null,cljs.core.cst$kw$years,expr__12838)))){
return (new cljs_time.core.Period(G__12833,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12837.cljs$core$IFn$_invoke$arity$2 ? pred__12837.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$months,expr__12838) : pred__12837.call(null,cljs.core.cst$kw$months,expr__12838)))){
return (new cljs_time.core.Period(self__.years,G__12833,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12837.cljs$core$IFn$_invoke$arity$2 ? pred__12837.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$weeks,expr__12838) : pred__12837.call(null,cljs.core.cst$kw$weeks,expr__12838)))){
return (new cljs_time.core.Period(self__.years,self__.months,G__12833,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12837.cljs$core$IFn$_invoke$arity$2 ? pred__12837.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,expr__12838) : pred__12837.call(null,cljs.core.cst$kw$days,expr__12838)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__12833,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12837.cljs$core$IFn$_invoke$arity$2 ? pred__12837.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hours,expr__12838) : pred__12837.call(null,cljs.core.cst$kw$hours,expr__12838)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__12833,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12837.cljs$core$IFn$_invoke$arity$2 ? pred__12837.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$minutes,expr__12838) : pred__12837.call(null,cljs.core.cst$kw$minutes,expr__12838)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__12833,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12837.cljs$core$IFn$_invoke$arity$2 ? pred__12837.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$seconds,expr__12838) : pred__12837.call(null,cljs.core.cst$kw$seconds,expr__12838)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__12833,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12837.cljs$core$IFn$_invoke$arity$2 ? pred__12837.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$millis,expr__12838) : pred__12837.call(null,cljs.core.cst$kw$millis,expr__12838)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__12833,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__7187__auto__,G__12833),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7191__auto__){
var self__ = this;
var this__7191__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$years,self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$months,self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$weeks,self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$days,self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hours,self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$minutes,self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seconds,self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$millis,self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7178__auto__,G__12833){
var self__ = this;
var this__7178__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__12833,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7184__auto__,entry__7185__auto__){
var self__ = this;
var this__7184__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__7185__auto__)){
return cljs.core._assoc(this__7184__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7185__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__7185__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__7184__auto____$1,entry__7185__auto__);
}
});

cljs_time.core.Period.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$years,cljs.core.cst$sym$months,cljs.core.cst$sym$weeks,cljs.core.cst$sym$days,cljs.core.cst$sym$hours,cljs.core.cst$sym$minutes,cljs.core.cst$sym$seconds,cljs.core.cst$sym$millis], null);
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__7213__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__7213__auto__,writer__7214__auto__){
return cljs.core._write(writer__7214__auto__,"cljs-time.core/Period");
});

cljs_time.core.__GT_Period = (function cljs_time$core$__GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__12835){
return (new cljs_time.core.Period(cljs.core.cst$kw$years.cljs$core$IFn$_invoke$arity$1(G__12835),cljs.core.cst$kw$months.cljs$core$IFn$_invoke$arity$1(G__12835),cljs.core.cst$kw$weeks.cljs$core$IFn$_invoke$arity$1(G__12835),cljs.core.cst$kw$days.cljs$core$IFn$_invoke$arity$1(G__12835),cljs.core.cst$kw$hours.cljs$core$IFn$_invoke$arity$1(G__12835),cljs.core.cst$kw$minutes.cljs$core$IFn$_invoke$arity$1(G__12835),cljs.core.cst$kw$seconds.cljs$core$IFn$_invoke$arity$1(G__12835),cljs.core.cst$kw$millis.cljs$core$IFn$_invoke$arity$1(G__12835),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12835,cljs.core.cst$kw$years,cljs.core.array_seq([cljs.core.cst$kw$months,cljs.core.cst$kw$weeks,cljs.core.cst$kw$days,cljs.core.cst$kw$hours,cljs.core.cst$kw$minutes,cljs.core.cst$kw$seconds,cljs.core.cst$kw$millis], 0)),null));
});

cljs_time.core.period = (function cljs_time$core$period(var_args){
var args12841 = [];
var len__7632__auto___12847 = arguments.length;
var i__7633__auto___12848 = (0);
while(true){
if((i__7633__auto___12848 < len__7632__auto___12847)){
args12841.push((arguments[i__7633__auto___12848]));

var G__12849 = (i__7633__auto___12848 + (1));
i__7633__auto___12848 = G__12849;
continue;
} else {
}
break;
}

var G__12846 = args12841.length;
switch (G__12846) {
case 2:
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7651__auto__ = (new cljs.core.IndexedSeq(args12841.slice((2)),(0),null));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7651__auto__);

}
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period(cljs.core.PersistentArrayMap.fromArray([period,value], true, false));
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(p1,v1),kvs);
});

cljs_time.core.period.cljs$lang$applyTo = (function (seq12842){
var G__12843 = cljs.core.first(seq12842);
var seq12842__$1 = cljs.core.next(seq12842);
var G__12844 = cljs.core.first(seq12842__$1);
var seq12842__$2 = cljs.core.next(seq12842__$1);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(G__12843,G__12844,seq12842__$2);
});

cljs_time.core.period.cljs$lang$maxFixedArity = (2);

cljs_time.core.period_fns = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$millis,(function (date,op,value){
var ms = (function (){var G__12851 = date.getTime();
var G__12852 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__12851,G__12852) : op.call(null,G__12851,G__12852));
})();
var G__12853 = date;
G__12853.setTime(ms);

return G__12853;
}),cljs.core.cst$kw$weeks,(function (date,op,value){
var days = (function (){var G__12854 = (0);
var G__12855 = (value * (7));
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__12854,G__12855) : op.call(null,G__12854,G__12855));
})();
var G__12856 = date;
G__12856.add((new goog.date.Interval(goog.date.Interval.DAYS,days)));

return G__12856;
})], null);
cljs_time.core.periods = new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$seconds,goog.date.Interval.SECONDS,cljs.core.cst$kw$minutes,goog.date.Interval.MINUTES,cljs.core.cst$kw$hours,goog.date.Interval.HOURS,cljs.core.cst$kw$days,goog.date.Interval.DAYS,cljs.core.cst$kw$months,goog.date.Interval.MONTHS,cljs.core.cst$kw$years,goog.date.Interval.YEARS], null);
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
var date_SINGLEQUOTE_ = date.clone();
var __GT_goog_interval = ((function (date_SINGLEQUOTE_){
return (function (op,interval,value){
if(cljs.core.truth_((function (){var and__6545__auto__ = interval;
if(cljs.core.truth_(and__6545__auto__)){
return value;
} else {
return and__6545__auto__;
}
})())){
return (new goog.date.Interval(interval,(op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2((0),value) : op.call(null,(0),value))));
} else {
return null;
}
});})(date_SINGLEQUOTE_))
;
var seq__12867_12877 = cljs.core.seq(p);
var chunk__12868_12878 = null;
var count__12869_12879 = (0);
var i__12870_12880 = (0);
while(true){
if((i__12870_12880 < count__12869_12879)){
var vec__12871_12881 = chunk__12868_12878.cljs$core$IIndexed$_nth$arity$2(null,i__12870_12880);
var k_12882 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12871_12881,(0),null);
var v_12883 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12871_12881,(1),null);
var temp__4655__auto___12884 = (cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1(k_12882) : cljs_time.core.periods.call(null,k_12882));
if(cljs.core.truth_(temp__4655__auto___12884)){
var period_12885 = temp__4655__auto___12884;
var temp__4657__auto___12886 = __GT_goog_interval(operator,period_12885,v_12883);
if(cljs.core.truth_(temp__4657__auto___12886)){
var i_12887 = temp__4657__auto___12886;
date_SINGLEQUOTE_.add(i_12887);
} else {
}
} else {
var temp__4657__auto___12888 = (cljs_time.core.period_fns.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.period_fns.cljs$core$IFn$_invoke$arity$1(k_12882) : cljs_time.core.period_fns.call(null,k_12882));
if(cljs.core.truth_(temp__4657__auto___12888)){
var f_12889 = temp__4657__auto___12888;
(f_12889.cljs$core$IFn$_invoke$arity$3 ? f_12889.cljs$core$IFn$_invoke$arity$3(date_SINGLEQUOTE_,operator,v_12883) : f_12889.call(null,date_SINGLEQUOTE_,operator,v_12883));
} else {
}
}

var G__12890 = seq__12867_12877;
var G__12891 = chunk__12868_12878;
var G__12892 = count__12869_12879;
var G__12893 = (i__12870_12880 + (1));
seq__12867_12877 = G__12890;
chunk__12868_12878 = G__12891;
count__12869_12879 = G__12892;
i__12870_12880 = G__12893;
continue;
} else {
var temp__4657__auto___12894 = cljs.core.seq(seq__12867_12877);
if(temp__4657__auto___12894){
var seq__12867_12895__$1 = temp__4657__auto___12894;
if(cljs.core.chunked_seq_QMARK_(seq__12867_12895__$1)){
var c__7368__auto___12896 = cljs.core.chunk_first(seq__12867_12895__$1);
var G__12897 = cljs.core.chunk_rest(seq__12867_12895__$1);
var G__12898 = c__7368__auto___12896;
var G__12899 = cljs.core.count(c__7368__auto___12896);
var G__12900 = (0);
seq__12867_12877 = G__12897;
chunk__12868_12878 = G__12898;
count__12869_12879 = G__12899;
i__12870_12880 = G__12900;
continue;
} else {
var vec__12874_12901 = cljs.core.first(seq__12867_12895__$1);
var k_12902 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12874_12901,(0),null);
var v_12903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12874_12901,(1),null);
var temp__4655__auto___12904 = (cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1(k_12902) : cljs_time.core.periods.call(null,k_12902));
if(cljs.core.truth_(temp__4655__auto___12904)){
var period_12905 = temp__4655__auto___12904;
var temp__4657__auto___12906__$1 = __GT_goog_interval(operator,period_12905,v_12903);
if(cljs.core.truth_(temp__4657__auto___12906__$1)){
var i_12907 = temp__4657__auto___12906__$1;
date_SINGLEQUOTE_.add(i_12907);
} else {
}
} else {
var temp__4657__auto___12908__$1 = (cljs_time.core.period_fns.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.period_fns.cljs$core$IFn$_invoke$arity$1(k_12902) : cljs_time.core.period_fns.call(null,k_12902));
if(cljs.core.truth_(temp__4657__auto___12908__$1)){
var f_12909 = temp__4657__auto___12908__$1;
(f_12909.cljs$core$IFn$_invoke$arity$3 ? f_12909.cljs$core$IFn$_invoke$arity$3(date_SINGLEQUOTE_,operator,v_12903) : f_12909.call(null,date_SINGLEQUOTE_,operator,v_12903));
} else {
}
}

var G__12910 = cljs.core.next(seq__12867_12895__$1);
var G__12911 = null;
var G__12912 = (0);
var G__12913 = (0);
seq__12867_12877 = G__12910;
chunk__12868_12878 = G__12911;
count__12869_12879 = G__12912;
i__12870_12880 = G__12913;
continue;
}
} else {
}
}
break;
}

return date_SINGLEQUOTE_;
});
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)) : cljs_time.core._EQ_.call(null,d,(0))))){
return (7);
} else {
return d;
}
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,(1)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
var G__12914 = this$__$1.getYear();
var G__12915 = this$__$1.getMonth();
var G__12916 = this$__$1.getDate();
return goog.date.getWeekNumber(G__12914,G__12915,G__12916);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)) : cljs_time.core._EQ_.call(null,d,(0))))){
return (7);
} else {
return d;
}
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,(1)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
var G__12917 = this$__$1.getYear();
var G__12918 = this$__$1.getMonth();
var G__12919 = this$__$1.getDate();
return goog.date.getWeekNumber(G__12917,G__12918,G__12919);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)) : cljs_time.core._EQ_.call(null,d,(0))))){
return (7);
} else {
return d;
}
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$equal_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() === that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$week_number_of_year$arity$1 = (function (this$){
var this$__$1 = this;
var G__12920 = this$__$1.getYear();
var G__12921 = this$__$1.getMonth();
var G__12922 = this$__$1.getDate();
return goog.date.getWeekNumber(G__12920,G__12921,G__12922);
});
cljs_time.core.utc = {"id": "UTC", "std_offset": (0), "names": new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null), "transitions": cljs.core.PersistentVector.EMPTY};
cljs_time.core.default_ms_fn = (function cljs_time$core$default_ms_fn(){
return (function (){
return (new goog.date.UtcDateTime()).getTime();
});
});
cljs_time.core.offset_ms_fn = (function cljs_time$core$offset_ms_fn(offset){
return (function (){
return ((new goog.date.UtcDateTime()).getTime() + offset);
});
});
cljs_time.core.static_ms_fn = (function cljs_time$core$static_ms_fn(ms){
return (function (){
return ms;
});
});
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.default_ms_fn();
/**
 * Returns a DateTime for the current instant in the UTC time zone.
 */
cljs_time.core.now = (function cljs_time$core$now(){
var G__12924 = (new goog.date.UtcDateTime());
G__12924.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__12924;
});
/**
 * Returns a local DateTime for the current instant without date or time zone
 *   in the current time zone.
 */
cljs_time.core.time_now = (function cljs_time$core$time_now(){
var G__12926 = (new goog.date.DateTime());
G__12926.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__12926;
});
cljs_time.core.at_midnight = (function cljs_time$core$at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__12928 = datetime__$1;
G__12928.setHours((0));

G__12928.setMinutes((0));

G__12928.setSeconds((0));

G__12928.setMilliseconds((0));

return G__12928;
});
/**
 * Returns a DateTime for today at midnight in the UTC time zone.
 */
cljs_time.core.today_at_midnight = (function cljs_time$core$today_at_midnight(){
return cljs_time.core.at_midnight(cljs_time.core.now());
});
/**
 * Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
 */
cljs_time.core.epoch = (function cljs_time$core$epoch(){
var G__12930 = (new goog.date.UtcDateTime());
G__12930.setTime((0));

return G__12930;
});
/**
 * Constructs and returns a new DateTime at midnight in UTC.
 * 
 *   Specify the year, month of year, day of month. Note that month and day are
 *   1-indexed. Any number of least-significant components can be ommited, in
 *   which case they will default to 1.
 */
cljs_time.core.date_midnight = (function cljs_time$core$date_midnight(var_args){
var args12931 = [];
var len__7632__auto___12934 = arguments.length;
var i__7633__auto___12935 = (0);
while(true){
if((i__7633__auto___12935 < len__7632__auto___12934)){
args12931.push((arguments[i__7633__auto___12935]));

var G__12936 = (i__7633__auto___12935 + (1));
i__7633__auto___12935 = G__12936;
continue;
} else {
}
break;
}

var G__12933 = args12931.length;
switch (G__12933) {
case 1:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12931.length)].join('')));

}
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3(year,(1),(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3(year,month,(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});

cljs_time.core.date_midnight.cljs$lang$maxFixedArity = 3;

/**
 * Constructs and returns a new DateTime in UTC.
 * 
 *   Specify the year, month of year, day of month, hour of day, minute if hour,
 *   second of minute, and millisecond of second. Note that month and day are
 *   1-indexed while hour, second, minute, and millis are 0-indexed.
 * 
 *   Any number of least-significant components can be ommited, in which case
 *   they will default to 1 or 0 as appropriate.
 */
cljs_time.core.date_time = (function cljs_time$core$date_time(var_args){
var args12938 = [];
var len__7632__auto___12941 = arguments.length;
var i__7633__auto___12942 = (0);
while(true){
if((i__7633__auto___12942 < len__7632__auto___12941)){
args12938.push((arguments[i__7633__auto___12942]));

var G__12943 = (i__7633__auto___12942 + (1));
i__7633__auto___12942 = G__12943;
continue;
} else {
}
break;
}

var G__12940 = args12938.length;
switch (G__12940) {
case 1:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12938.length)].join('')));

}
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.date_time.cljs$lang$maxFixedArity = 7;

/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month of year, day of month, hour of day, minute of hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.local_date_time = (function cljs_time$core$local_date_time(var_args){
var args12945 = [];
var len__7632__auto___12948 = arguments.length;
var i__7633__auto___12949 = (0);
while(true){
if((i__7633__auto___12949 < len__7632__auto___12948)){
args12945.push((arguments[i__7633__auto___12949]));

var G__12950 = (i__7633__auto___12949 + (1));
i__7633__auto___12949 = G__12950;
continue;
} else {
}
break;
}

var G__12947 = args12945.length;
switch (G__12947) {
case 1:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12945.length)].join('')));

}
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.local_date_time.cljs$lang$maxFixedArity = 7;

/**
 * Constructs and returns a new local DateTime.
 * Specify the year, month, and day. Does not deal with timezones.
 */
cljs_time.core.local_date = (function cljs_time$core$local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
 * Constructs and returns a new local DateTime representing today's date.
 *   local DateTime objects do not deal with timezones at all.
 */
cljs_time.core.today = (function cljs_time$core$today(){
var G__12953 = (new goog.date.Date());
G__12953.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__12953;
});
/**
 * Returns a timezone map for the given offset, specified either in hours or
 *   hours and minutes.
 */
cljs_time.core.time_zone_for_offset = (function cljs_time$core$time_zone_for_offset(var_args){
var args12954 = [];
var len__7632__auto___12957 = arguments.length;
var i__7633__auto___12958 = (0);
while(true){
if((i__7633__auto___12958 < len__7632__auto___12957)){
args12954.push((arguments[i__7633__auto___12958]));

var G__12959 = (i__7633__auto___12958 + (1));
i__7633__auto___12958 = G__12959;
continue;
} else {
}
break;
}

var G__12956 = args12954.length;
switch (G__12956) {
case 1:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12954.length)].join('')));

}
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2(hours,null);
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
var sign = (((hours < (0)))?cljs.core.cst$kw$_DASH_:cljs.core.cst$kw$_PLUS_);
var fmt = [cljs.core.str("UTC%s%02d"),cljs.core.str((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1,minutes], 0)):cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1], 0)));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,tz_name,cljs.core.cst$kw$offset,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__6557__auto__ = minutes;
if(cljs.core.truth_(or__6557__auto__)){
return or__6557__auto__;
} else {
return (0);
}
})(),(0)], null),cljs.core.cst$kw$rules,"-",cljs.core.cst$kw$names,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$cljs_DASH_time$core_SLASH_time_DASH_zone], null));
});

cljs_time.core.time_zone_for_offset.cljs$lang$maxFixedArity = 2;

/**
 * Returns the default timezone map for the current environment.
 */
cljs_time.core.default_time_zone = (function cljs_time$core$default_time_zone(){
var offset = (function (){var G__12962 = (new goog.date.DateTime());
G__12962.setTime((cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0 ? cljs_time.core._STAR_ms_fn_STAR_.cljs$core$IFn$_invoke$arity$0() : cljs_time.core._STAR_ms_fn_STAR_.call(null)));

return G__12962;
})().getTimezoneOffset();
var hours = (((-1) * offset) / (60));
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((hours | (0)),cljs.core.mod(hours,(1)));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to in the default
 *   (local) timezone.
 */
cljs_time.core.to_default_time_zone = (function cljs_time$core$to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
});
/**
 * Assuming `dt` is in the Local timezone, returns a UtcDateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to in the UTC
 *   timezone.
 */
cljs_time.core.to_utc_time_zone = (function cljs_time$core$to_utc_time_zone(dt){
var G__12964 = dt.getTime();
return goog.date.UtcDateTime.fromTimestamp(G__12964);
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the default (local) timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_default_time_zone = (function cljs_time$core$from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
 * Assuming `dt` is in the local timezone, returns a UtcDateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the UTC timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_utc_time_zone = (function cljs_time$core$from_utc_time_zone(dt){
var year = dt.getYear();
var month = dt.getMonth();
var date = dt.getDate();
if(cljs.core.truth_((function (){var G__12967 = goog.date.Date;
var G__12968 = cljs.core.type(dt);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__12967,G__12968) : cljs_time.core._EQ_.call(null,G__12967,G__12968));
})())){
return (new goog.date.UtcDateTime(year,month,date));
} else {
return (new goog.date.UtcDateTime(year,month,date,dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
}
});
/**
 * Given a number, returns a Period representing that many years.
 *   Without an argument, returns a Period representing only years.
 */
cljs_time.core.years = (function cljs_time$core$years(var_args){
var args12969 = [];
var len__7632__auto___12972 = arguments.length;
var i__7633__auto___12973 = (0);
while(true){
if((i__7633__auto___12973 < len__7632__auto___12972)){
args12969.push((arguments[i__7633__auto___12973]));

var G__12974 = (i__7633__auto___12973 + (1));
i__7633__auto___12973 = G__12974;
continue;
} else {
}
break;
}

var G__12971 = args12969.length;
switch (G__12971) {
case 0:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12969.length)].join('')));

}
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$years,n);
});

cljs_time.core.years.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many months.
 *   Without an argument, returns a Period representing only months.
 */
cljs_time.core.months = (function cljs_time$core$months(var_args){
var args12976 = [];
var len__7632__auto___12979 = arguments.length;
var i__7633__auto___12980 = (0);
while(true){
if((i__7633__auto___12980 < len__7632__auto___12979)){
args12976.push((arguments[i__7633__auto___12980]));

var G__12981 = (i__7633__auto___12980 + (1));
i__7633__auto___12980 = G__12981;
continue;
} else {
}
break;
}

var G__12978 = args12976.length;
switch (G__12978) {
case 0:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12976.length)].join('')));

}
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$months,n);
});

cljs_time.core.months.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many weeks.
 *   Without an argument, returns a Period representing only weeks.
 */
cljs_time.core.weeks = (function cljs_time$core$weeks(var_args){
var args12983 = [];
var len__7632__auto___12986 = arguments.length;
var i__7633__auto___12987 = (0);
while(true){
if((i__7633__auto___12987 < len__7632__auto___12986)){
args12983.push((arguments[i__7633__auto___12987]));

var G__12988 = (i__7633__auto___12987 + (1));
i__7633__auto___12987 = G__12988;
continue;
} else {
}
break;
}

var G__12985 = args12983.length;
switch (G__12985) {
case 0:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12983.length)].join('')));

}
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$weeks,n);
});

cljs_time.core.weeks.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many days.
 *   Without an argument, returns a Period representing only days.
 */
cljs_time.core.days = (function cljs_time$core$days(var_args){
var args12990 = [];
var len__7632__auto___12993 = arguments.length;
var i__7633__auto___12994 = (0);
while(true){
if((i__7633__auto___12994 < len__7632__auto___12993)){
args12990.push((arguments[i__7633__auto___12994]));

var G__12995 = (i__7633__auto___12994 + (1));
i__7633__auto___12994 = G__12995;
continue;
} else {
}
break;
}

var G__12992 = args12990.length;
switch (G__12992) {
case 0:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12990.length)].join('')));

}
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,n);
});

cljs_time.core.days.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many hours.
 *   Without an argument, returns a Period representing only hours.
 */
cljs_time.core.hours = (function cljs_time$core$hours(var_args){
var args12997 = [];
var len__7632__auto___13000 = arguments.length;
var i__7633__auto___13001 = (0);
while(true){
if((i__7633__auto___13001 < len__7632__auto___13000)){
args12997.push((arguments[i__7633__auto___13001]));

var G__13002 = (i__7633__auto___13001 + (1));
i__7633__auto___13001 = G__13002;
continue;
} else {
}
break;
}

var G__12999 = args12997.length;
switch (G__12999) {
case 0:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12997.length)].join('')));

}
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hours,n);
});

cljs_time.core.hours.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many minutes.
 *   Without an argument, returns a Period representing only minutes.
 */
cljs_time.core.minutes = (function cljs_time$core$minutes(var_args){
var args13004 = [];
var len__7632__auto___13007 = arguments.length;
var i__7633__auto___13008 = (0);
while(true){
if((i__7633__auto___13008 < len__7632__auto___13007)){
args13004.push((arguments[i__7633__auto___13008]));

var G__13009 = (i__7633__auto___13008 + (1));
i__7633__auto___13008 = G__13009;
continue;
} else {
}
break;
}

var G__13006 = args13004.length;
switch (G__13006) {
case 0:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13004.length)].join('')));

}
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$minutes,n);
});

cljs_time.core.minutes.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many seconds.
 *   Without an argument, returns a Period representing only seconds.
 */
cljs_time.core.seconds = (function cljs_time$core$seconds(var_args){
var args13011 = [];
var len__7632__auto___13014 = arguments.length;
var i__7633__auto___13015 = (0);
while(true){
if((i__7633__auto___13015 < len__7632__auto___13014)){
args13011.push((arguments[i__7633__auto___13015]));

var G__13016 = (i__7633__auto___13015 + (1));
i__7633__auto___13015 = G__13016;
continue;
} else {
}
break;
}

var G__13013 = args13011.length;
switch (G__13013) {
case 0:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13011.length)].join('')));

}
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$seconds,n);
});

cljs_time.core.seconds.cljs$lang$maxFixedArity = 1;

/**
 * Given a number, returns a Period representing that many milliseconds.
 *   Without an argument, returns a Period representing only milliseconds.
 */
cljs_time.core.millis = (function cljs_time$core$millis(var_args){
var args13018 = [];
var len__7632__auto___13021 = arguments.length;
var i__7633__auto___13022 = (0);
while(true){
if((i__7633__auto___13022 < len__7632__auto___13021)){
args13018.push((arguments[i__7633__auto___13022]));

var G__13023 = (i__7633__auto___13022 + (1));
i__7633__auto___13022 = G__13023;
continue;
} else {
}
break;
}

var G__13020 = args13018.length;
switch (G__13020) {
case 0:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13018.length)].join('')));

}
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$millis,n);
});

cljs_time.core.millis.cljs$lang$maxFixedArity = 1;

/**
 * Returns a new date/time corresponding to the given date/time moved
 *   forwards by the given Period(s).
 */
cljs_time.core.plus = (function cljs_time$core$plus(var_args){
var args13025 = [];
var len__7632__auto___13031 = arguments.length;
var i__7633__auto___13032 = (0);
while(true){
if((i__7633__auto___13032 < len__7632__auto___13031)){
args13025.push((arguments[i__7633__auto___13032]));

var G__13033 = (i__7633__auto___13032 + (1));
i__7633__auto___13032 = G__13033;
continue;
} else {
}
break;
}

var G__13030 = args13025.length;
switch (G__13030) {
case 2:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7651__auto__ = (new cljs.core.IndexedSeq(args13025.slice((2)),(0),null));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7651__auto__);

}
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.plus_(dt,p);
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus_,cljs_time.core.plus_(dt,p),ps);
});

cljs_time.core.plus.cljs$lang$applyTo = (function (seq13026){
var G__13027 = cljs.core.first(seq13026);
var seq13026__$1 = cljs.core.next(seq13026);
var G__13028 = cljs.core.first(seq13026__$1);
var seq13026__$2 = cljs.core.next(seq13026__$1);
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic(G__13027,G__13028,seq13026__$2);
});

cljs_time.core.plus.cljs$lang$maxFixedArity = (2);

/**
 * Returns a new date/time object corresponding to the given date/time
 *   moved backwards by the given Period(s).
 */
cljs_time.core.minus = (function cljs_time$core$minus(var_args){
var args13035 = [];
var len__7632__auto___13041 = arguments.length;
var i__7633__auto___13042 = (0);
while(true){
if((i__7633__auto___13042 < len__7632__auto___13041)){
args13035.push((arguments[i__7633__auto___13042]));

var G__13043 = (i__7633__auto___13042 + (1));
i__7633__auto___13042 = G__13043;
continue;
} else {
}
break;
}

var G__13040 = args13035.length;
switch (G__13040) {
case 2:
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7651__auto__ = (new cljs.core.IndexedSeq(args13035.slice((2)),(0),null));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7651__auto__);

}
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.minus_(dt,p);
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.minus_,cljs_time.core.minus_(dt,p),ps);
});

cljs_time.core.minus.cljs$lang$applyTo = (function (seq13036){
var G__13037 = cljs.core.first(seq13036);
var seq13036__$1 = cljs.core.next(seq13036);
var G__13038 = cljs.core.first(seq13036__$1);
var seq13036__$2 = cljs.core.next(seq13036__$1);
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic(G__13037,G__13038,seq13036__$2);
});

cljs_time.core.minus.cljs$lang$maxFixedArity = (2);

/**
 * Returns a DateTime a supplied period before the present.
 * 
 *   e.g. `(-> 5 years ago)`
 */
cljs_time.core.ago = (function cljs_time$core$ago(period){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
 * Returns a DateTime for yesterday relative to now
 */
cljs_time.core.yesterday = (function cljs_time$core$yesterday(){
return cljs_time.core.ago(cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1)));
});
/**
 * Returns a DateTime a supplied period after the present.
 *   e.g. `(-> 30 minutes from-now)`
 */
cljs_time.core.from_now = (function cljs_time$core$from_now(period){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
 * Returns the earliest of the supplied DateTimes
 */
cljs_time.core.earliest = (function cljs_time$core$earliest(var_args){
var args13045 = [];
var len__7632__auto___13048 = arguments.length;
var i__7633__auto___13049 = (0);
while(true){
if((i__7633__auto___13049 < len__7632__auto___13048)){
args13045.push((arguments[i__7633__auto___13049]));

var G__13050 = (i__7633__auto___13049 + (1));
i__7633__auto___13049 = G__13050;
continue;
} else {
}
break;
}

var G__13047 = args13045.length;
switch (G__13047) {
case 2:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13045.length)].join('')));

}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_time.core.earliest,dts);
});

cljs_time.core.earliest.cljs$lang$maxFixedArity = 2;

/**
 * Returns the latest of the supplied DateTimes
 */
cljs_time.core.latest = (function cljs_time$core$latest(var_args){
var args13052 = [];
var len__7632__auto___13055 = arguments.length;
var i__7633__auto___13056 = (0);
while(true){
if((i__7633__auto___13056 < len__7632__auto___13055)){
args13052.push((arguments[i__7633__auto___13056]));

var G__13057 = (i__7633__auto___13056 + (1));
i__7633__auto___13056 = G__13057;
continue;
} else {
}
break;
}

var G__13054 = args13052.length;
switch (G__13054) {
case 2:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13052.length)].join('')));

}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_time.core.latest,dts);
});

cljs_time.core.latest.cljs$lang$maxFixedArity = 2;

/**
 * Returns the start DateTime of an Interval.
 */
cljs_time.core.start = (function cljs_time$core$start(in$){
return cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns the end DateTime of an Interval.
 */
cljs_time.core.end = (function cljs_time$core$end(in$){
return cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns an Interval with an end DateTime the specified Period after the end
 *   of the given Interval
 */
cljs_time.core.extend = (function cljs_time$core$extend(var_args){
var args__7639__auto__ = [];
var len__7632__auto___13061 = arguments.length;
var i__7633__auto___13062 = (0);
while(true){
if((i__7633__auto___13062 < len__7632__auto___13061)){
args__7639__auto__.push((arguments[i__7633__auto___13062]));

var G__13063 = (i__7633__auto___13062 + (1));
i__7633__auto___13062 = G__13063;
continue;
} else {
}
break;
}

var argseq__7640__auto__ = ((((1) < args__7639__auto__.length))?(new cljs.core.IndexedSeq(args__7639__auto__.slice((1)),(0),null)):null);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7640__auto__);
});

cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic = (function (in$,by){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(in$,cljs.core.cst$kw$end,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus,cljs_time.core.end(in$),by));
});

cljs_time.core.extend.cljs$lang$maxFixedArity = (1);

cljs_time.core.extend.cljs$lang$applyTo = (function (seq13059){
var G__13060 = cljs.core.first(seq13059);
var seq13059__$1 = cljs.core.next(seq13059);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic(G__13060,seq13059__$1);
});

cljs_time.core.month_range = (function cljs_time$core$month_range(p__13066){
var map__13069 = p__13066;
var map__13069__$1 = ((((!((map__13069 == null)))?((((map__13069.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13069.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13069):map__13069);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13069__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13069__$1,cljs.core.cst$kw$end);
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (map__13069,map__13069__$1,start,end){
return (function (p1__13065_SHARP_){
return cljs.core.not(cljs_time.core.after_QMARK_(p1__13065_SHARP_,end));
});})(map__13069,map__13069__$1,start,end))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__13069,map__13069__$1,start,end){
return (function (p1__13064_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((p1__13064_SHARP_ + (1))));
});})(map__13069,map__13069__$1,start,end))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
cljs_time.core.total_days_in_whole_months = (function cljs_time$core$total_days_in_whole_months(interval){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13071_SHARP_){
return p1__13071_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range(interval));
});
/**
 * Returns the number of months in the given Interval.
 * 
 *   For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
 *   returns 1 month.
 * 
 *   Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
 */
cljs_time.core.in_months_ = (function cljs_time$core$in_months_(p__13072){
var map__13075 = p__13072;
var map__13075__$1 = ((((!((map__13075 == null)))?((((map__13075.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13075.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13075):map__13075);
var interval = map__13075__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13075__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13075__$1,cljs.core.cst$kw$end);
return cljs.core.count(cljs_time.core.total_days_in_whole_months(interval));
});
/**
 * Returns the number of standard years in the given Interval.
 */
cljs_time.core.in_years_ = (function cljs_time$core$in_years_(p__13077){
var map__13080 = p__13077;
var map__13080__$1 = ((((!((map__13080 == null)))?((((map__13080.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13080.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13080):map__13080);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13080__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13080__$1,cljs.core.cst$kw$end);
var sm = cljs_time.core.month(start);
var sd = cljs_time.core.day(start);
var em = cljs_time.core.month(end);
var ed = cljs_time.core.day(end);
var d1 = (cljs.core.truth_((function (){var and__6545__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(sm,(2)) : cljs_time.core._EQ_.call(null,sm,(2)));
if(cljs.core.truth_(and__6545__auto__)){
var and__6545__auto____$1 = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(sd,(29)) : cljs_time.core._EQ_.call(null,sd,(29)));
if(cljs.core.truth_(and__6545__auto____$1)){
var and__6545__auto____$2 = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(em,(2)) : cljs_time.core._EQ_.call(null,em,(2)));
if(cljs.core.truth_(and__6545__auto____$2)){
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(ed,(28)) : cljs_time.core._EQ_.call(null,ed,(28)));
} else {
return and__6545__auto____$2;
}
} else {
return and__6545__auto____$1;
}
} else {
return and__6545__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year(end) - cljs_time.core.year(start)) - d1);
});
cljs_time.core.conversion_error = (function cljs_time$core$conversion_error(from,to){
var from__$1 = clojure.string.capitalize(cljs.core.name(from));
var to__$1 = cljs.core.name(to);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s cannot be converted to %s",cljs.core.array_seq([from__$1,to__$1], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$unsupported_DASH_operation], null));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__13082){
var map__13083 = p__13082;
var map__13083__$1 = ((((!((map__13083 == null)))?((((map__13083.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13083.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13083):map__13083);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13083__$1,cljs.core.cst$kw$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13083__$1,cljs.core.cst$kw$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13083__$1,cljs.core.cst$kw$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13083__$1,cljs.core.cst$kw$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13083__$1,cljs.core.cst$kw$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13083__$1,cljs.core.cst$kw$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13083__$1,cljs.core.cst$kw$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13083__$1,cljs.core.cst$kw$years);
var map__13085 = this;
var map__13085__$1 = ((((!((map__13085 == null)))?((((map__13085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13085):map__13085);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13085__$1,cljs.core.cst$kw$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13085__$1,cljs.core.cst$kw$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13085__$1,cljs.core.cst$kw$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13085__$1,cljs.core.cst$kw$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13085__$1,cljs.core.cst$kw$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13085__$1,cljs.core.cst$kw$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13085__$1,cljs.core.cst$kw$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13085__$1,cljs.core.cst$kw$years);
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$months,cljs.core.cst$kw$millis);
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$years,cljs.core.cst$kw$millis);
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis(this$__$1) / (1000)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds(this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes(this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours(this$__$1) / (24)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days(this$__$1) / (7)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__13087){
var map__13088 = p__13087;
var map__13088__$1 = ((((!((map__13088 == null)))?((((map__13088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13088):map__13088);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13088__$1,cljs.core.cst$kw$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13088__$1,cljs.core.cst$kw$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13088__$1,cljs.core.cst$kw$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13088__$1,cljs.core.cst$kw$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13088__$1,cljs.core.cst$kw$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13088__$1,cljs.core.cst$kw$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13088__$1,cljs.core.cst$kw$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13088__$1,cljs.core.cst$kw$years);
var map__13090 = this;
var map__13090__$1 = ((((!((map__13090 == null)))?((((map__13090.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13090.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13090):map__13090);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13090__$1,cljs.core.cst$kw$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13090__$1,cljs.core.cst$kw$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13090__$1,cljs.core.cst$kw$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13090__$1,cljs.core.cst$kw$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13090__$1,cljs.core.cst$kw$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13090__$1,cljs.core.cst$kw$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13090__$1,cljs.core.cst$kw$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13090__$1,cljs.core.cst$kw$years);
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$millis,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$seconds,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$minutes,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$hours,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$days,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$weeks,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__6557__auto__ = years__$1;
if(cljs.core.truth_(or__6557__auto__)){
return or__6557__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__13092){
var map__13093 = p__13092;
var map__13093__$1 = ((((!((map__13093 == null)))?((((map__13093.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13093.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13093):map__13093);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13093__$1,cljs.core.cst$kw$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13093__$1,cljs.core.cst$kw$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13093__$1,cljs.core.cst$kw$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13093__$1,cljs.core.cst$kw$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13093__$1,cljs.core.cst$kw$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13093__$1,cljs.core.cst$kw$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13093__$1,cljs.core.cst$kw$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13093__$1,cljs.core.cst$kw$years);
var map__13095 = this;
var map__13095__$1 = ((((!((map__13095 == null)))?((((map__13095.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13095.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13095):map__13095);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13095__$1,cljs.core.cst$kw$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13095__$1,cljs.core.cst$kw$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13095__$1,cljs.core.cst$kw$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13095__$1,cljs.core.cst$kw$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13095__$1,cljs.core.cst$kw$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13095__$1,cljs.core.cst$kw$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13095__$1,cljs.core.cst$kw$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13095__$1,cljs.core.cst$kw$years);
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$millis,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$seconds,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$minutes,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$hours,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$days,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$weeks,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__13097){
var map__13098 = p__13097;
var map__13098__$1 = ((((!((map__13098 == null)))?((((map__13098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13098):map__13098);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13098__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13098__$1,cljs.core.cst$kw$end);
var map__13100 = this;
var map__13100__$1 = ((((!((map__13100 == null)))?((((map__13100.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13100.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13100):map__13100);
var start__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13100__$1,cljs.core.cst$kw$start);
var end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13100__$1,cljs.core.cst$kw$end);
return (end__$1.getTime() - start__$1.getTime());
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis(this$__$1) / (1000)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds(this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes(this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours(this$__$1) / (24)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days(this$__$1) / (7)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_months_(this$__$1);
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_years_(this$__$1);
});
/**
 * With 2 arguments: Returns true if the given Interval contains the given
 *   DateTime. Note that if the DateTime is exactly equal to the
 *   end of the interval, this function returns false.
 * 
 *   With 3 arguments: Returns true if the start DateTime is
 *   equal to or before and the end DateTime is equal to or after the test
 *   DateTime.
 */
cljs_time.core.within_QMARK_ = (function cljs_time$core$within_QMARK_(var_args){
var args13102 = [];
var len__7632__auto___13108 = arguments.length;
var i__7633__auto___13109 = (0);
while(true){
if((i__7633__auto___13109 < len__7632__auto___13108)){
args13102.push((arguments[i__7633__auto___13109]));

var G__13110 = (i__7633__auto___13109 + (1));
i__7633__auto___13109 = G__13110;
continue;
} else {
}
break;
}

var G__13104 = args13102.length;
switch (G__13104) {
case 2:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13102.length)].join('')));

}
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__13105,date){
var map__13106 = p__13105;
var map__13106__$1 = ((((!((map__13106 == null)))?((((map__13106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13106):map__13106);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13106__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13106__$1,cljs.core.cst$kw$end);
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3(start,end,date);
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,date){
var or__6557__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,date) : cljs_time.core._EQ_.call(null,start,date));
if(cljs.core.truth_(or__6557__auto__)){
return or__6557__auto__;
} else {
var and__6545__auto__ = cljs_time.core.before_QMARK_(start,date);
if(cljs.core.truth_(and__6545__auto__)){
return cljs_time.core.after_QMARK_(end,date);
} else {
return and__6545__auto__;
}
}
});

cljs_time.core.within_QMARK_.cljs$lang$maxFixedArity = 3;

/**
 * With 2 arguments: Returns true of the two given Intervals overlap.
 *   Note that intervals that satisfy abuts? do not satisfy overlaps?
 * 
 *   With 4 arguments: Returns true if the range specified by start-a and end-a
 *   overlaps with the range specified by start-b and end-b.
 */
cljs_time.core.overlaps_QMARK_ = (function cljs_time$core$overlaps_QMARK_(var_args){
var args13112 = [];
var len__7632__auto___13121 = arguments.length;
var i__7633__auto___13122 = (0);
while(true){
if((i__7633__auto___13122 < len__7632__auto___13121)){
args13112.push((arguments[i__7633__auto___13122]));

var G__13123 = (i__7633__auto___13122 + (1));
i__7633__auto___13122 = G__13123;
continue;
} else {
}
break;
}

var G__13114 = args13112.length;
switch (G__13114) {
case 2:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13112.length)].join('')));

}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__13115,p__13116){
var map__13117 = p__13115;
var map__13117__$1 = ((((!((map__13117 == null)))?((((map__13117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13117):map__13117);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13117__$1,cljs.core.cst$kw$start);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13117__$1,cljs.core.cst$kw$end);
var map__13118 = p__13116;
var map__13118__$1 = ((((!((map__13118 == null)))?((((map__13118.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13118.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13118):map__13118);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13118__$1,cljs.core.cst$kw$start);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13118__$1,cljs.core.cst$kw$end);
var and__6545__auto__ = cljs.core.not((function (){var or__6557__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_a,end_b) : cljs_time.core._EQ_.call(null,start_a,end_b));
if(cljs.core.truth_(or__6557__auto__)){
return or__6557__auto__;
} else {
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_a,start_b) : cljs_time.core._EQ_.call(null,end_a,start_b));
}
})());
if(and__6545__auto__){
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4(start_a,end_a,start_b,end_b);
} else {
return and__6545__auto__;
}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (start_a,end_a,start_b,end_b){
var or__6557__auto__ = (function (){var and__6545__auto__ = cljs_time.core.before_QMARK_(start_b,end_a);
if(cljs.core.truth_(and__6545__auto__)){
return cljs_time.core.after_QMARK_(end_b,start_a);
} else {
return and__6545__auto__;
}
})();
if(cljs.core.truth_(or__6557__auto__)){
return or__6557__auto__;
} else {
var or__6557__auto____$1 = (function (){var and__6545__auto__ = cljs_time.core.after_QMARK_(end_b,start_a);
if(cljs.core.truth_(and__6545__auto__)){
return cljs_time.core.before_QMARK_(start_b,end_a);
} else {
return and__6545__auto__;
}
})();
if(cljs.core.truth_(or__6557__auto____$1)){
return or__6557__auto____$1;
} else {
var or__6557__auto____$2 = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_a,end_b) : cljs_time.core._EQ_.call(null,start_a,end_b));
if(cljs.core.truth_(or__6557__auto____$2)){
return or__6557__auto____$2;
} else {
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_b,end_a) : cljs_time.core._EQ_.call(null,start_b,end_a));
}
}
}
});

cljs_time.core.overlaps_QMARK_.cljs$lang$maxFixedArity = 4;

/**
 * Returns an Interval representing the overlap of the specified Intervals.
 *  Returns nil if the Intervals do not overlap.
 *  The first argument must not be nil.
 *  If the second argument is nil then the overlap of the first argument
 *  and a zero duration interval with both start and end times equal to the
 *  current time is returned.
 */
cljs_time.core.overlap = (function cljs_time$core$overlap(i_a,i_b){
if((i_b == null)){
var n = cljs_time.core.now();
return cljs_time$core$overlap(i_a,cljs_time.core.interval(n,n));
} else {
if(cljs.core.truth_(cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2(i_a,i_b))){
return cljs_time.core.interval(cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2(cljs_time.core.start(i_a),cljs_time.core.start(i_b)),cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2(cljs_time.core.end(i_a),cljs_time.core.end(i_b)));
} else {
return null;

}
}
});
/**
 * Returns true if Interval a abuts b, i.e. then end of a is exactly the
 *   beginning of b.
 */
cljs_time.core.abuts_QMARK_ = (function cljs_time$core$abuts_QMARK_(p__13127,p__13128){
var map__13133 = p__13127;
var map__13133__$1 = ((((!((map__13133 == null)))?((((map__13133.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13133.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13133):map__13133);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13133__$1,cljs.core.cst$kw$start);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13133__$1,cljs.core.cst$kw$end);
var map__13134 = p__13128;
var map__13134__$1 = ((((!((map__13134 == null)))?((((map__13134.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13134.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13134):map__13134);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13134__$1,cljs.core.cst$kw$start);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13134__$1,cljs.core.cst$kw$end);
var or__6557__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_a,end_b) : cljs_time.core._EQ_.call(null,start_a,end_b));
if(cljs.core.truth_(or__6557__auto__)){
return or__6557__auto__;
} else {
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_a,start_b) : cljs_time.core._EQ_.call(null,end_a,start_b));
}
});
cljs_time.core.date_QMARK_ = (function cljs_time$core$date_QMARK_(x){
if(!((x == null))){
if((false) || (x.cljs_time$core$DateTimeProtocol$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,x);
}
});
cljs_time.core.interval_QMARK_ = (function cljs_time$core$interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function cljs_time$core$period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function cljs_time$core$period_type_QMARK_(type,x){
var and__6545__auto__ = cljs_time.core.period_QMARK_(x);
if(cljs.core.truth_(and__6545__auto__)){
return cljs.core.contains_QMARK_(x,type);
} else {
return and__6545__auto__;
}
});
/**
 * Returns true if the given value is an instance of Years
 */
cljs_time.core.years_QMARK_ = (function cljs_time$core$years_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$years,val);
});
/**
 * Returns true if the given value is an instance of Months
 */
cljs_time.core.months_QMARK_ = (function cljs_time$core$months_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$months,val);
});
/**
 * Returns true if the given value is an instance of Weeks
 */
cljs_time.core.weeks_QMARK_ = (function cljs_time$core$weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$weeks,val);
});
/**
 * Returns true if the given value is an instance of Days
 */
cljs_time.core.days_QMARK_ = (function cljs_time$core$days_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$days,val);
});
/**
 * Returns true if the given value is an instance of Hours
 */
cljs_time.core.hours_QMARK_ = (function cljs_time$core$hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$hours,val);
});
/**
 * Returns true if the given value is an instance of Minutes
 */
cljs_time.core.minutes_QMARK_ = (function cljs_time$core$minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$minutes,val);
});
/**
 * Returns true if the given value is an instance of Seconds
 */
cljs_time.core.seconds_QMARK_ = (function cljs_time$core$seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$seconds,val);
});
cljs_time.core.mins_ago = (function cljs_time$core$mins_ago(d){
return cljs_time.core.in_minutes(cljs_time.core.interval(d,cljs_time.core.now()));
});
cljs_time.core.last_day_of_the_month = (function cljs_time$core$last_day_of_the_month(var_args){
var args13139 = [];
var len__7632__auto___13142 = arguments.length;
var i__7633__auto___13143 = (0);
while(true){
if((i__7633__auto___13143 < len__7632__auto___13142)){
args13139.push((arguments[i__7633__auto___13143]));

var G__13144 = (i__7633__auto___13143 + (1));
i__7633__auto___13143 = G__13144;
continue;
} else {
}
break;
}

var G__13141 = args13139.length;
switch (G__13141) {
case 1:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13139.length)].join('')));

}
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.last_day_of_the_month_(dt);
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2(year,month));
});

cljs_time.core.last_day_of_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.number_of_days_in_the_month = (function cljs_time$core$number_of_days_in_the_month(var_args){
var args13146 = [];
var len__7632__auto___13149 = arguments.length;
var i__7633__auto___13150 = (0);
while(true){
if((i__7633__auto___13150 < len__7632__auto___13149)){
args13146.push((arguments[i__7633__auto___13150]));

var G__13151 = (i__7633__auto___13150 + (1));
i__7633__auto___13150 = G__13151;
continue;
} else {
}
break;
}

var G__13148 = args13146.length;
switch (G__13148) {
case 1:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13146.length)].join('')));

}
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(dt),cljs_time.core.month(dt));
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2(year,month).getDate();
});

cljs_time.core.number_of_days_in_the_month.cljs$lang$maxFixedArity = 2;

cljs_time.core.first_day_of_the_month = (function cljs_time$core$first_day_of_the_month(var_args){
var args13153 = [];
var len__7632__auto___13156 = arguments.length;
var i__7633__auto___13157 = (0);
while(true){
if((i__7633__auto___13157 < len__7632__auto___13156)){
args13153.push((arguments[i__7633__auto___13157]));

var G__13158 = (i__7633__auto___13157 + (1));
i__7633__auto___13157 = G__13158;
continue;
} else {
}
break;
}

var G__13155 = args13153.length;
switch (G__13155) {
case 1:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13153.length)].join('')));

}
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.first_day_of_the_month_(dt);
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2(year,month));
});

cljs_time.core.first_day_of_the_month.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
cljs_time.core.IToPeriod = function(){};

cljs_time.core.__GT_period = (function cljs_time$core$__GT_period(obj){
if((!((obj == null))) && (!((obj.cljs_time$core$IToPeriod$__GT_period$arity$1 == null)))){
return obj.cljs_time$core$IToPeriod$__GT_period$arity$1(obj);
} else {
var x__7220__auto__ = (((obj == null))?null:obj);
var m__7221__auto__ = (cljs_time.core.__GT_period[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$1(obj) : m__7221__auto__.call(null,obj));
} else {
var m__7221__auto____$1 = (cljs_time.core.__GT_period["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$1(obj) : m__7221__auto____$1.call(null,obj));
} else {
throw cljs.core.missing_protocol("IToPeriod.->period",obj);
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (p__13160){
var map__13161 = p__13160;
var map__13161__$1 = ((((!((map__13161 == null)))?((((map__13161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13161):map__13161);
var interval = map__13161__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13161__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13161__$1,cljs.core.cst$kw$end);
var map__13163 = this;
var map__13163__$1 = ((((!((map__13163 == null)))?((((map__13163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13163):map__13163);
var interval__$1 = map__13163__$1;
var start__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13163__$1,cljs.core.cst$kw$start);
var end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13163__$1,cljs.core.cst$kw$end);
var years = cljs_time.core.in_years(interval__$1);
var start_year = cljs_time.core.year(start__$1);
var leap_years = cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_year,(start_year + years)))));
var start_month = cljs_time.core.month(start__$1);
var days_in_months = cljs_time.core.total_days_in_whole_months(interval__$1);
var months = (cljs.core.count(days_in_months) - (years * (12)));
var days_to_remove = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,days_in_months);
var days = (cljs_time.core.in_days(interval__$1) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours(interval__$1) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes(interval__$1) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds(interval__$1) - seconds_to_remove);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$years,years,cljs.core.array_seq([cljs.core.cst$kw$months,months,cljs.core.cst$kw$days,days,cljs.core.cst$kw$hours,hours,cljs.core.cst$kw$minutes,minutes,cljs.core.cst$kw$seconds,seconds,cljs.core.cst$kw$millis,(cljs_time.core.in_millis(interval__$1) - ((1000) * (seconds + seconds_to_remove)))], 0));
});

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$ = true;

cljs_time.core.Period.prototype.cljs_time$core$IToPeriod$__GT_period$arity$1 = (function (period){
var period__$1 = this;
return period__$1;
});
cljs_time.core.today_at = (function cljs_time$core$today_at(var_args){
var args13165 = [];
var len__7632__auto___13169 = arguments.length;
var i__7633__auto___13170 = (0);
while(true){
if((i__7633__auto___13170 < len__7632__auto___13169)){
args13165.push((arguments[i__7633__auto___13170]));

var G__13171 = (i__7633__auto___13170 + (1));
i__7633__auto___13170 = G__13171;
continue;
} else {
}
break;
}

var G__13167 = args13165.length;
switch (G__13167) {
case 4:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13165.length)].join('')));

}
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var G__13168 = (new goog.date.UtcDateTime());
G__13168.setHours(hours);

G__13168.setMinutes(minutes);

G__13168.setSeconds(seconds);

G__13168.setMilliseconds(millis);

return G__13168;
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4(hours,minutes,seconds,(0));
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3(hours,minutes,(0));
});

cljs_time.core.today_at.cljs$lang$maxFixedArity = 4;

cljs_time.core.do_at_STAR_ = (function cljs_time$core$do_at_STAR_(base_date_time,body_fn){
var _STAR_ms_fn_STAR_13174 = cljs_time.core._STAR_ms_fn_STAR_;
cljs_time.core._STAR_ms_fn_STAR_ = cljs_time.core.static_ms_fn(base_date_time.getTime());

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {cljs_time.core._STAR_ms_fn_STAR_ = _STAR_ms_fn_STAR_13174;
}});
/**
 * Floors the given date-time dt to the given time unit dt-fn,
 *  e.g. (floor (now) hour) returns (now) for all units
 *  up to and including the hour
 */
cljs_time.core.floor = (function cljs_time$core$floor(dt,dt_fn){
var dt_fns = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs_time.core.year,cljs_time.core.month,cljs_time.core.day,cljs_time.core.hour,cljs_time.core.minute,cljs_time.core.second,cljs_time.core.milli], null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs_time.core.date_time,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.apply,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,dt_fn),dt_fns),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt_fn], null)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [dt], null))));
});
