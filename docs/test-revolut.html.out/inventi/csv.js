// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('inventi.csv');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('goog.string.StringBuffer');
inventi.csv.lf = "\n";
inventi.csv.cr = "\r";
inventi.csv.eof = null;
inventi.csv.read_quoted_cell = (function inventi$csv$read_quoted_cell(reader,sb,sep,quote){
var ch = cljs.reader.read_char(reader);
while(true){
var pred__14933 = cljs.core._EQ__EQ_;
var expr__14934 = ch;
if(cljs.core.truth_((pred__14933.cljs$core$IFn$_invoke$arity$2 ? pred__14933.cljs$core$IFn$_invoke$arity$2(quote,expr__14934) : pred__14933.call(null,quote,expr__14934)))){
var next_ch = cljs.reader.read_char(reader);
var pred__14936 = cljs.core._EQ__EQ_;
var expr__14937 = next_ch;
if(cljs.core.truth_((pred__14936.cljs$core$IFn$_invoke$arity$2 ? pred__14936.cljs$core$IFn$_invoke$arity$2(quote,expr__14937) : pred__14936.call(null,quote,expr__14937)))){
sb.append(cljs.core.char$(quote));

var G__14940 = cljs.reader.read_char(reader);
ch = G__14940;
continue;
} else {
if(cljs.core.truth_((pred__14936.cljs$core$IFn$_invoke$arity$2 ? pred__14936.cljs$core$IFn$_invoke$arity$2(sep,expr__14937) : pred__14936.call(null,sep,expr__14937)))){
return cljs.core.cst$kw$sep;
} else {
if(cljs.core.truth_((pred__14936.cljs$core$IFn$_invoke$arity$2 ? pred__14936.cljs$core$IFn$_invoke$arity$2(inventi.csv.lf,expr__14937) : pred__14936.call(null,inventi.csv.lf,expr__14937)))){
return cljs.core.cst$kw$eol;
} else {
if(cljs.core.truth_((pred__14936.cljs$core$IFn$_invoke$arity$2 ? pred__14936.cljs$core$IFn$_invoke$arity$2(inventi.csv.cr,expr__14937) : pred__14936.call(null,inventi.csv.cr,expr__14937)))){
var next_next_ch = cljs.reader.read_char(reader);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_next_ch,inventi.csv.lf)){
cljs.reader.unread(reader,next_next_ch);
} else {
}

return cljs.core.cst$kw$eol;
} else {
if(cljs.core.truth_((pred__14936.cljs$core$IFn$_invoke$arity$2 ? pred__14936.cljs$core$IFn$_invoke$arity$2(inventi.csv.eof,expr__14937) : pred__14936.call(null,inventi.csv.eof,expr__14937)))){
return cljs.core.cst$kw$eof;
} else {
throw (function (){var G__14939 = [cljs.core.str("CSV error (unexpected character: %c)"),cljs.core.str(next_ch)].join('');
return Error(G__14939);
})();
}
}
}
}
}
} else {
if(cljs.core.truth_((pred__14933.cljs$core$IFn$_invoke$arity$2 ? pred__14933.cljs$core$IFn$_invoke$arity$2(inventi.csv.eof,expr__14934) : pred__14933.call(null,inventi.csv.eof,expr__14934)))){
throw Error("CSV error (unexpected end of file)");
} else {
sb.append(cljs.core.char$(ch));

var G__14941 = cljs.reader.read_char(reader);
ch = G__14941;
continue;
}
}
break;
}
});
inventi.csv.read_cell = (function inventi$csv$read_cell(reader,sb,sep,quote){
var first_ch = cljs.reader.read_char(reader);
if((first_ch === quote)){
return inventi.csv.read_quoted_cell(reader,sb,sep,quote);
} else {
var ch = first_ch;
while(true){
var pred__14945 = cljs.core._EQ_;
var expr__14946 = ch;
if(cljs.core.truth_((pred__14945.cljs$core$IFn$_invoke$arity$2 ? pred__14945.cljs$core$IFn$_invoke$arity$2(sep,expr__14946) : pred__14945.call(null,sep,expr__14946)))){
return cljs.core.cst$kw$sep;
} else {
if(cljs.core.truth_((pred__14945.cljs$core$IFn$_invoke$arity$2 ? pred__14945.cljs$core$IFn$_invoke$arity$2(inventi.csv.lf,expr__14946) : pred__14945.call(null,inventi.csv.lf,expr__14946)))){
return cljs.core.cst$kw$eol;
} else {
if(cljs.core.truth_((pred__14945.cljs$core$IFn$_invoke$arity$2 ? pred__14945.cljs$core$IFn$_invoke$arity$2(inventi.csv.cr,expr__14946) : pred__14945.call(null,inventi.csv.cr,expr__14946)))){
var next_ch = cljs.reader.read_char(reader);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_ch,inventi.csv.lf)){
cljs.reader.unread(reader,next_ch);
} else {
}

return cljs.core.cst$kw$eol;
} else {
if(cljs.core.truth_((pred__14945.cljs$core$IFn$_invoke$arity$2 ? pred__14945.cljs$core$IFn$_invoke$arity$2(inventi.csv.eof,expr__14946) : pred__14945.call(null,inventi.csv.eof,expr__14946)))){
return cljs.core.cst$kw$eof;
} else {
sb.append(cljs.core.char$(ch));

var G__14948 = cljs.reader.read_char(reader);
ch = G__14948;
continue;
}
}
}
}
break;
}
}
});
inventi.csv.read_record = (function inventi$csv$read_record(reader,sep,quote){
var record = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var cell = (new goog.string.StringBuffer());
var sentinel = inventi.csv.read_cell(reader,cell,sep,quote);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sentinel,cljs.core.cst$kw$sep)){
var G__14949 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(record,cell.toString());
record = G__14949;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(record,cell.toString())),sentinel], null);
}
break;
}
});
inventi.csv.read_csv_from = (function inventi$csv$read_csv_from(reader,sep,quote){
return (new cljs.core.LazySeq(null,(function (){
var vec__14954 = inventi.csv.read_record(reader,sep,quote);
var record = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14954,(0),null);
var sentinel = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14954,(1),null);
var G__14957 = (((sentinel instanceof cljs.core.Keyword))?sentinel.fqn:null);
switch (G__14957) {
case "eol":
return cljs.core.cons(record,inventi$csv$read_csv_from(reader,sep,quote));

break;
case "eof":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(record,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null))){
return null;
} else {
return cljs.core.cons(record,null);
}

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(sentinel)].join('')));

}
}),null,null));
});
/**
 * Reads CSV-data from input String into a lazy
 *   sequence of vectors.
 * Valid options are
 *   :separator (default \,)
 *   :quote (default \")
 */
inventi.csv.read_csv = (function inventi$csv$read_csv(var_args){
var args__7639__auto__ = [];
var len__7632__auto___14963 = arguments.length;
var i__7633__auto___14964 = (0);
while(true){
if((i__7633__auto___14964 < len__7632__auto___14963)){
args__7639__auto__.push((arguments[i__7633__auto___14964]));

var G__14965 = (i__7633__auto___14964 + (1));
i__7633__auto___14964 = G__14965;
continue;
} else {
}
break;
}

var argseq__7640__auto__ = ((((1) < args__7639__auto__.length))?(new cljs.core.IndexedSeq(args__7639__auto__.slice((1)),(0),null)):null);
return inventi.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7640__auto__);
});

inventi.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic = (function (input,options){
var map__14961 = options;
var map__14961__$1 = ((((!((map__14961 == null)))?((((map__14961.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14961.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14961):map__14961);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14961__$1,cljs.core.cst$kw$separator,",");
var quote = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__14961__$1,cljs.core.cst$kw$quote,"\"");
return inventi.csv.read_csv_from(cljs.reader.push_back_reader(input),separator,quote);
});

inventi.csv.read_csv.cljs$lang$maxFixedArity = (1);

inventi.csv.read_csv.cljs$lang$applyTo = (function (seq14959){
var G__14960 = cljs.core.first(seq14959);
var seq14959__$1 = cljs.core.next(seq14959);
return inventi.csv.read_csv.cljs$core$IFn$_invoke$arity$variadic(G__14960,seq14959__$1);
});

