// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('javelin.core');
goog.require('cljs.core');
goog.require('tailrecursion.priority_map');




javelin.core._STAR_tx_STAR_ = null;
javelin.core.last_rank = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)) : cljs.core.atom.call(null,(0)));
/**
 * Like tree-seq but traversal is breadth-first instead of depth-first.
 */
javelin.core.bf_seq = (function javelin$core$bf_seq(branch_QMARK_,children,root){
var walk = (function javelin$core$bf_seq_$_walk(queue){
var temp__4657__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__4657__auto__)){
var node = temp__4657__auto__;
return (new cljs.core.LazySeq(null,((function (node,temp__4657__auto__){
return (function (){
return cljs.core.cons(node,javelin$core$bf_seq_$_walk(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.pop(queue),(cljs.core.truth_((branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : branch_QMARK_.call(null,node)))?(children.cljs$core$IFn$_invoke$arity$1 ? children.cljs$core$IFn$_invoke$arity$1(node) : children.call(null,node)):null))));
});})(node,temp__4657__auto__))
,null,null));
} else {
return null;
}
});
return walk(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,root));
});
javelin.core.propagate_STAR_ = (function javelin$core$propagate_STAR_(pri_map){
while(true){
var temp__4657__auto__ = cljs.core.first(cljs.core.peek(pri_map));
if(cljs.core.truth_(temp__4657__auto__)){
var next = temp__4657__auto__;
var popq = cljs.core.pop(pri_map);
var old = next.prev;
var new$ = (function (){var temp__4655__auto__ = next.thunk;
if(cljs.core.truth_(temp__4655__auto__)){
var f = temp__4655__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return next.state;
}
})();
var diff_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new$,old);
if(diff_QMARK_){
next.prev = new$;

cljs.core._notify_watches(next,old,new$);
} else {
}

var G__14036 = ((!(diff_QMARK_))?popq:cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__){
return (function (p1__14034_SHARP_,p2__14035_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14034_SHARP_,p2__14035_SHARP_,p2__14035_SHARP_.rank);
});})(pri_map,popq,old,new$,diff_QMARK_,next,temp__4657__auto__))
,popq,next.sinks));
pri_map = G__14036;
continue;
} else {
return null;
}
break;
}
});
javelin.core.deref_STAR_ = (function javelin$core$deref_STAR_(x){
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(x) : javelin.core.cell_QMARK_.call(null,x)))){
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x));
} else {
return x;
}
});
javelin.core.next_rank = (function javelin$core$next_rank(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(javelin.core.last_rank,cljs.core.inc);
});
javelin.core.cell__GT_pm = (function javelin$core$cell__GT_pm(c){
return tailrecursion.priority_map.priority_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([c,c.rank], 0));
});
javelin.core.add_sync_BANG_ = (function javelin$core$add_sync_BANG_(c){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(javelin.core._STAR_tx_STAR_,cljs.core.assoc,c,c.rank);
});
javelin.core.safe_nth = (function javelin$core$safe_nth(c,i){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(c,i);
}catch (e14038){if((e14038 instanceof Error)){
var _ = e14038;
return null;
} else {
throw e14038;

}
}});
javelin.core.propagate_BANG_ = (function javelin$core$propagate_BANG_(c){
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
var G__14041 = c;
javelin.core.add_sync_BANG_(G__14041);

return G__14041;
} else {
var G__14042 = c;
javelin.core.propagate_STAR_(javelin.core.cell__GT_pm(G__14042));

return G__14042;
}
});
javelin.core.destroy_cell_BANG_ = (function javelin$core$destroy_cell_BANG_(var_args){
var args__7639__auto__ = [];
var len__7632__auto___14053 = arguments.length;
var i__7633__auto___14054 = (0);
while(true){
if((i__7633__auto___14054 < len__7632__auto___14053)){
args__7639__auto__.push((arguments[i__7633__auto___14054]));

var G__14055 = (i__7633__auto___14054 + (1));
i__7633__auto___14054 = G__14055;
continue;
} else {
}
break;
}

var argseq__7640__auto__ = ((((1) < args__7639__auto__.length))?(new cljs.core.IndexedSeq(args__7639__auto__.slice((1)),(0),null)):null);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7640__auto__);
});

javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__14045){
var vec__14046 = p__14045;
var keep_watches_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14046,(0),null);
var srcs = this$.sources;
this$.sources = cljs.core.PersistentVector.EMPTY;

this$.update = null;

this$.thunk = null;

if(cljs.core.truth_(keep_watches_QMARK_)){
} else {
this$.watches = cljs.core.PersistentArrayMap.EMPTY;
}

var seq__14049 = cljs.core.seq(srcs);
var chunk__14050 = null;
var count__14051 = (0);
var i__14052 = (0);
while(true){
if((i__14052 < count__14051)){
var src = chunk__14050.cljs$core$IIndexed$_nth$arity$2(null,i__14052);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__14056 = seq__14049;
var G__14057 = chunk__14050;
var G__14058 = count__14051;
var G__14059 = (i__14052 + (1));
seq__14049 = G__14056;
chunk__14050 = G__14057;
count__14051 = G__14058;
i__14052 = G__14059;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14049);
if(temp__4657__auto__){
var seq__14049__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14049__$1)){
var c__7368__auto__ = cljs.core.chunk_first(seq__14049__$1);
var G__14060 = cljs.core.chunk_rest(seq__14049__$1);
var G__14061 = c__7368__auto__;
var G__14062 = cljs.core.count(c__7368__auto__);
var G__14063 = (0);
seq__14049 = G__14060;
chunk__14050 = G__14061;
count__14051 = G__14062;
i__14052 = G__14063;
continue;
} else {
var src = cljs.core.first(seq__14049__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(src) : javelin.core.cell_QMARK_.call(null,src)))){
src.sinks = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(src.sinks,this$);
} else {
}

var G__14064 = cljs.core.next(seq__14049__$1);
var G__14065 = null;
var G__14066 = (0);
var G__14067 = (0);
seq__14049 = G__14064;
chunk__14050 = G__14065;
count__14051 = G__14066;
i__14052 = G__14067;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.destroy_cell_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.destroy_cell_BANG_.cljs$lang$applyTo = (function (seq14043){
var G__14044 = cljs.core.first(seq14043);
var seq14043__$1 = cljs.core.next(seq14043);
return javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14044,seq14043__$1);
});

javelin.core.set_formula_BANG_ = (function javelin$core$set_formula_BANG_(var_args){
var args__7639__auto__ = [];
var len__7632__auto___14088 = arguments.length;
var i__7633__auto___14089 = (0);
while(true){
if((i__7633__auto___14089 < len__7632__auto___14088)){
args__7639__auto__.push((arguments[i__7633__auto___14089]));

var G__14090 = (i__7633__auto___14089 + (1));
i__7633__auto___14089 = G__14090;
continue;
} else {
}
break;
}

var argseq__7640__auto__ = ((((1) < args__7639__auto__.length))?(new cljs.core.IndexedSeq(args__7639__auto__.slice((1)),(0),null)):null);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7640__auto__);
});

javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,p__14072){
var vec__14073 = p__14072;
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14073,(0),null);
var sources = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14073,(1),null);
javelin.core.destroy_cell_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.array_seq([true], 0));

if(cljs.core.truth_(f)){
this$.sources = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(sources),f);

var seq__14076_14091 = cljs.core.seq(this$.sources);
var chunk__14077_14092 = null;
var count__14078_14093 = (0);
var i__14079_14094 = (0);
while(true){
if((i__14079_14094 < count__14078_14093)){
var source_14095 = chunk__14077_14092.cljs$core$IIndexed$_nth$arity$2(null,i__14079_14094);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_14095) : javelin.core.cell_QMARK_.call(null,source_14095)))){
source_14095.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_14095.sinks,this$);

if((source_14095.rank > this$.rank)){
var seq__14080_14096 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__14076_14091,chunk__14077_14092,count__14078_14093,i__14079_14094,source_14095,vec__14073,f,sources){
return (function (p1__14068_SHARP_){
return p1__14068_SHARP_.sinks;
});})(seq__14076_14091,chunk__14077_14092,count__14078_14093,i__14079_14094,source_14095,vec__14073,f,sources))
,source_14095));
var chunk__14081_14097 = null;
var count__14082_14098 = (0);
var i__14083_14099 = (0);
while(true){
if((i__14083_14099 < count__14082_14098)){
var dep_14100 = chunk__14081_14097.cljs$core$IIndexed$_nth$arity$2(null,i__14083_14099);
dep_14100.rank = javelin.core.next_rank();

var G__14101 = seq__14080_14096;
var G__14102 = chunk__14081_14097;
var G__14103 = count__14082_14098;
var G__14104 = (i__14083_14099 + (1));
seq__14080_14096 = G__14101;
chunk__14081_14097 = G__14102;
count__14082_14098 = G__14103;
i__14083_14099 = G__14104;
continue;
} else {
var temp__4657__auto___14105 = cljs.core.seq(seq__14080_14096);
if(temp__4657__auto___14105){
var seq__14080_14106__$1 = temp__4657__auto___14105;
if(cljs.core.chunked_seq_QMARK_(seq__14080_14106__$1)){
var c__7368__auto___14107 = cljs.core.chunk_first(seq__14080_14106__$1);
var G__14108 = cljs.core.chunk_rest(seq__14080_14106__$1);
var G__14109 = c__7368__auto___14107;
var G__14110 = cljs.core.count(c__7368__auto___14107);
var G__14111 = (0);
seq__14080_14096 = G__14108;
chunk__14081_14097 = G__14109;
count__14082_14098 = G__14110;
i__14083_14099 = G__14111;
continue;
} else {
var dep_14112 = cljs.core.first(seq__14080_14106__$1);
dep_14112.rank = javelin.core.next_rank();

var G__14113 = cljs.core.next(seq__14080_14106__$1);
var G__14114 = null;
var G__14115 = (0);
var G__14116 = (0);
seq__14080_14096 = G__14113;
chunk__14081_14097 = G__14114;
count__14082_14098 = G__14115;
i__14083_14099 = G__14116;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__14117 = seq__14076_14091;
var G__14118 = chunk__14077_14092;
var G__14119 = count__14078_14093;
var G__14120 = (i__14079_14094 + (1));
seq__14076_14091 = G__14117;
chunk__14077_14092 = G__14118;
count__14078_14093 = G__14119;
i__14079_14094 = G__14120;
continue;
} else {
var temp__4657__auto___14121 = cljs.core.seq(seq__14076_14091);
if(temp__4657__auto___14121){
var seq__14076_14122__$1 = temp__4657__auto___14121;
if(cljs.core.chunked_seq_QMARK_(seq__14076_14122__$1)){
var c__7368__auto___14123 = cljs.core.chunk_first(seq__14076_14122__$1);
var G__14124 = cljs.core.chunk_rest(seq__14076_14122__$1);
var G__14125 = c__7368__auto___14123;
var G__14126 = cljs.core.count(c__7368__auto___14123);
var G__14127 = (0);
seq__14076_14091 = G__14124;
chunk__14077_14092 = G__14125;
count__14078_14093 = G__14126;
i__14079_14094 = G__14127;
continue;
} else {
var source_14128 = cljs.core.first(seq__14076_14122__$1);
if(cljs.core.truth_((javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell_QMARK_.cljs$core$IFn$_invoke$arity$1(source_14128) : javelin.core.cell_QMARK_.call(null,source_14128)))){
source_14128.sinks = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(source_14128.sinks,this$);

if((source_14128.rank > this$.rank)){
var seq__14084_14129 = cljs.core.seq(javelin.core.bf_seq(cljs.core.identity,((function (seq__14076_14091,chunk__14077_14092,count__14078_14093,i__14079_14094,source_14128,seq__14076_14122__$1,temp__4657__auto___14121,vec__14073,f,sources){
return (function (p1__14068_SHARP_){
return p1__14068_SHARP_.sinks;
});})(seq__14076_14091,chunk__14077_14092,count__14078_14093,i__14079_14094,source_14128,seq__14076_14122__$1,temp__4657__auto___14121,vec__14073,f,sources))
,source_14128));
var chunk__14085_14130 = null;
var count__14086_14131 = (0);
var i__14087_14132 = (0);
while(true){
if((i__14087_14132 < count__14086_14131)){
var dep_14133 = chunk__14085_14130.cljs$core$IIndexed$_nth$arity$2(null,i__14087_14132);
dep_14133.rank = javelin.core.next_rank();

var G__14134 = seq__14084_14129;
var G__14135 = chunk__14085_14130;
var G__14136 = count__14086_14131;
var G__14137 = (i__14087_14132 + (1));
seq__14084_14129 = G__14134;
chunk__14085_14130 = G__14135;
count__14086_14131 = G__14136;
i__14087_14132 = G__14137;
continue;
} else {
var temp__4657__auto___14138__$1 = cljs.core.seq(seq__14084_14129);
if(temp__4657__auto___14138__$1){
var seq__14084_14139__$1 = temp__4657__auto___14138__$1;
if(cljs.core.chunked_seq_QMARK_(seq__14084_14139__$1)){
var c__7368__auto___14140 = cljs.core.chunk_first(seq__14084_14139__$1);
var G__14141 = cljs.core.chunk_rest(seq__14084_14139__$1);
var G__14142 = c__7368__auto___14140;
var G__14143 = cljs.core.count(c__7368__auto___14140);
var G__14144 = (0);
seq__14084_14129 = G__14141;
chunk__14085_14130 = G__14142;
count__14086_14131 = G__14143;
i__14087_14132 = G__14144;
continue;
} else {
var dep_14145 = cljs.core.first(seq__14084_14139__$1);
dep_14145.rank = javelin.core.next_rank();

var G__14146 = cljs.core.next(seq__14084_14139__$1);
var G__14147 = null;
var G__14148 = (0);
var G__14149 = (0);
seq__14084_14129 = G__14146;
chunk__14085_14130 = G__14147;
count__14086_14131 = G__14148;
i__14087_14132 = G__14149;
continue;
}
} else {
}
}
break;
}
} else {
}
} else {
}

var G__14150 = cljs.core.next(seq__14076_14122__$1);
var G__14151 = null;
var G__14152 = (0);
var G__14153 = (0);
seq__14076_14091 = G__14150;
chunk__14077_14092 = G__14151;
count__14078_14093 = G__14152;
i__14079_14094 = G__14153;
continue;
}
} else {
}
}
break;
}

var compute_14154 = ((function (vec__14073,f,sources){
return (function (p1__14069_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_(cljs.core.peek(p1__14069_SHARP_)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(javelin.core.deref_STAR_,cljs.core.pop(p1__14069_SHARP_)));
});})(vec__14073,f,sources))
;
this$.thunk = ((function (compute_14154,vec__14073,f,sources){
return (function (){
return this$.state = compute_14154(this$.sources);
});})(compute_14154,vec__14073,f,sources))
;
} else {
}

return javelin.core.propagate_BANG_(this$);
});

javelin.core.set_formula_BANG_.cljs$lang$maxFixedArity = (1);

javelin.core.set_formula_BANG_.cljs$lang$applyTo = (function (seq14070){
var G__14071 = cljs.core.first(seq14070);
var seq14070__$1 = cljs.core.next(seq14070);
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14071,seq14070__$1);
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
*/
javelin.core.Cell = (function (meta,state,rank,prev,sources,sinks,thunk,watches,update){
this.meta = meta;
this.state = state;
this.rank = rank;
this.prev = prev;
this.sources = sources;
this.sinks = sinks;
this.thunk = thunk;
this.watches = watches;
this.update = update;
this.cljs$lang$protocol_mask$partition0$ = 2147909632;
this.cljs$lang$protocol_mask$partition1$ = 98306;
})
javelin.core.Cell.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,w,_){
var self__ = this;
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(w,cljs.core.array_seq(["#<Cell: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([self__.state], 0)),">"], 0));
});

javelin.core.Cell.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this$,meta__$1){
var self__ = this;
var this$__$1 = this;
return (new javelin.core.Cell(meta__$1,self__.state,self__.rank,self__.prev,self__.sources,self__.sinks,self__.thunk,self__.watches,self__.update));
});

javelin.core.Cell.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.meta;
});

javelin.core.Cell.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_((javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.lens_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.lens_QMARK_.call(null,this$__$1)))){
this$__$1.update.call(null,x);
} else {
if(cljs.core.truth_((javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1 ? javelin.core.input_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : javelin.core.input_QMARK_.call(null,this$__$1)))){
this$__$1.state = x;

javelin.core.propagate_BANG_(this$__$1);
} else {
throw (new Error("can't swap! or reset! formula cell"));

}
}

return this$__$1.state;
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var self__ = this;
var this$__$1 = this;
var G__14156 = this$__$1;
var G__14157 = (function (){var G__14158 = this$__$1.state;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__14158) : f.call(null,G__14158));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14156,G__14157) : cljs.core.reset_BANG_.call(null,G__14156,G__14157));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var self__ = this;
var this$__$1 = this;
var G__14161 = this$__$1;
var G__14162 = (function (){var G__14163 = this$__$1.state;
var G__14164 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14163,G__14164) : f.call(null,G__14163,G__14164));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14161,G__14162) : cljs.core.reset_BANG_.call(null,G__14161,G__14162));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var self__ = this;
var this$__$1 = this;
var G__14168 = this$__$1;
var G__14169 = (function (){var G__14170 = this$__$1.state;
var G__14171 = a;
var G__14172 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__14170,G__14171,G__14172) : f.call(null,G__14170,G__14171,G__14172));
})();
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14168,G__14169) : cljs.core.reset_BANG_.call(null,G__14168,G__14169));
});

javelin.core.Cell.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var self__ = this;
var this$__$1 = this;
var G__14173 = this$__$1;
var G__14174 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.state,a,b,xs);
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14173,G__14174) : cljs.core.reset_BANG_.call(null,G__14173,G__14174));
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,o,n){
var self__ = this;
var this$__$1 = this;
var seq__14175 = cljs.core.seq(self__.watches);
var chunk__14176 = null;
var count__14177 = (0);
var i__14178 = (0);
while(true){
if((i__14178 < count__14177)){
var vec__14179 = chunk__14176.cljs$core$IIndexed$_nth$arity$2(null,i__14178);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14179,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14179,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__14185 = seq__14175;
var G__14186 = chunk__14176;
var G__14187 = count__14177;
var G__14188 = (i__14178 + (1));
seq__14175 = G__14185;
chunk__14176 = G__14186;
count__14177 = G__14187;
i__14178 = G__14188;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14175);
if(temp__4657__auto__){
var seq__14175__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14175__$1)){
var c__7368__auto__ = cljs.core.chunk_first(seq__14175__$1);
var G__14189 = cljs.core.chunk_rest(seq__14175__$1);
var G__14190 = c__7368__auto__;
var G__14191 = cljs.core.count(c__7368__auto__);
var G__14192 = (0);
seq__14175 = G__14189;
chunk__14176 = G__14190;
count__14177 = G__14191;
i__14178 = G__14192;
continue;
} else {
var vec__14182 = cljs.core.first(seq__14175__$1);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14182,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14182,(1),null);
(f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(key,this$__$1,o,n) : f.call(null,key,this$__$1,o,n));

var G__14193 = cljs.core.next(seq__14175__$1);
var G__14194 = null;
var G__14195 = (0);
var G__14196 = (0);
seq__14175 = G__14193;
chunk__14176 = G__14194;
count__14177 = G__14195;
i__14178 = G__14196;
continue;
}
} else {
return null;
}
}
break;
}
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,f){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.watches,k,f);
});

javelin.core.Cell.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return this$__$1.watches = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.watches,k);
});

javelin.core.Cell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$meta,cljs.core.cst$sym$state,cljs.core.cst$sym$rank,cljs.core.cst$sym$prev,cljs.core.cst$sym$sources,cljs.core.cst$sym$sinks,cljs.core.cst$sym$thunk,cljs.core.cst$sym$watches,cljs.core.cst$sym$update], null);
});

javelin.core.Cell.cljs$lang$type = true;

javelin.core.Cell.cljs$lang$ctorStr = "javelin.core/Cell";

javelin.core.Cell.cljs$lang$ctorPrWriter = (function (this__7163__auto__,writer__7164__auto__,opt__7165__auto__){
return cljs.core._write(writer__7164__auto__,"javelin.core/Cell");
});

javelin.core.__GT_Cell = (function javelin$core$__GT_Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update){
return (new javelin.core.Cell(meta,state,rank,prev,sources,sinks,thunk,watches,update));
});

javelin.core.cell_QMARK_ = (function javelin$core$cell_QMARK_(c){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(c),javelin.core.Cell)){
return c;
} else {
return null;
}
});
javelin.core.formula_QMARK_ = (function javelin$core$formula_QMARK_(c){
if(cljs.core.truth_((function (){var and__6545__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6545__auto__)){
return c.thunk;
} else {
return and__6545__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.lens_QMARK_ = (function javelin$core$lens_QMARK_(c){
if(cljs.core.truth_((function (){var and__6545__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6545__auto__)){
return c.update;
} else {
return and__6545__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.input_QMARK_ = (function javelin$core$input_QMARK_(c){
if(cljs.core.truth_((function (){var and__6545__auto__ = javelin.core.cell_QMARK_(c);
if(cljs.core.truth_(and__6545__auto__)){
return cljs.core.not(javelin.core.formula_QMARK_(c));
} else {
return and__6545__auto__;
}
})())){
return c;
} else {
return null;
}
});
javelin.core.set_cell_BANG_ = (function javelin$core$set_cell_BANG_(c,x){
c.state = x;

return javelin.core.set_formula_BANG_(c);
});
javelin.core.formula = (function javelin$core$formula(f){
return (function() { 
var G__14197__delegate = function (sources){
return javelin.core.set_formula_BANG_.cljs$core$IFn$_invoke$arity$variadic((javelin.core.cell.cljs$core$IFn$_invoke$arity$1 ? javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$javelin$core_SLASH_none) : javelin.core.cell.call(null,cljs.core.cst$kw$javelin$core_SLASH_none)),cljs.core.array_seq([f,sources], 0));
};
var G__14197 = function (var_args){
var sources = null;
if (arguments.length > 0) {
var G__14198__i = 0, G__14198__a = new Array(arguments.length -  0);
while (G__14198__i < G__14198__a.length) {G__14198__a[G__14198__i] = arguments[G__14198__i + 0]; ++G__14198__i;}
  sources = new cljs.core.IndexedSeq(G__14198__a,0);
} 
return G__14197__delegate.call(this,sources);};
G__14197.cljs$lang$maxFixedArity = 0;
G__14197.cljs$lang$applyTo = (function (arglist__14199){
var sources = cljs.core.seq(arglist__14199);
return G__14197__delegate(sources);
});
G__14197.cljs$core$IFn$_invoke$arity$variadic = G__14197__delegate;
return G__14197;
})()
;
});
javelin.core.lens = (function javelin$core$lens(c,f){
var c__$1 = javelin.core.formula(cljs.core.identity).call(null,c);
c__$1.update = f;

return c__$1;
});
javelin.core.cell = (function javelin$core$cell(var_args){
var args14200 = [];
var len__7632__auto___14208 = arguments.length;
var i__7633__auto___14209 = (0);
while(true){
if((i__7633__auto___14209 < len__7632__auto___14208)){
args14200.push((arguments[i__7633__auto___14209]));

var G__14210 = (i__7633__auto___14209 + (1));
i__7633__auto___14209 = G__14210;
continue;
} else {
}
break;
}

var G__14204 = args14200.length;
switch (G__14204) {
case 1:
return javelin.core.cell.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var argseq__7651__auto__ = (new cljs.core.IndexedSeq(args14200.slice((1)),(0),null));
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7651__auto__);

}
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$1 = (function (x){
return javelin.core.set_formula_BANG_((new javelin.core.Cell(null,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic = (function (x,p__14205){
var map__14206 = p__14205;
var map__14206__$1 = ((((!((map__14206 == null)))?((((map__14206.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14206.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14206):map__14206);
var meta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14206__$1,cljs.core.cst$kw$meta);
return javelin.core.set_formula_BANG_((new javelin.core.Cell(meta,x,javelin.core.next_rank(),x,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,cljs.core.PersistentArrayMap.EMPTY,null)));
});

javelin.core.cell.cljs$lang$applyTo = (function (seq14201){
var G__14202 = cljs.core.first(seq14201);
var seq14201__$1 = cljs.core.next(seq14201);
return javelin.core.cell.cljs$core$IFn$_invoke$arity$variadic(G__14202,seq14201__$1);
});

javelin.core.cell.cljs$lang$maxFixedArity = (1);

javelin.core.lift = javelin.core.formula;
javelin.core.dosync_STAR_ = (function javelin$core$dosync_STAR_(thunk){
var bind = (function (p1__14212_SHARP_){
var _STAR_tx_STAR_14216 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = (function (){var G__14217 = tailrecursion.priority_map.priority_map();
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14217) : cljs.core.atom.call(null,G__14217));
})();

try{return (p1__14212_SHARP_.cljs$core$IFn$_invoke$arity$0 ? p1__14212_SHARP_.cljs$core$IFn$_invoke$arity$0() : p1__14212_SHARP_.call(null));
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_14216;
}});
var prop = ((function (bind){
return (function (){
var tx = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(javelin.core._STAR_tx_STAR_) : cljs.core.deref.call(null,javelin.core._STAR_tx_STAR_));
var _STAR_tx_STAR_14218 = javelin.core._STAR_tx_STAR_;
javelin.core._STAR_tx_STAR_ = null;

try{return javelin.core.propagate_STAR_(tx);
}finally {javelin.core._STAR_tx_STAR_ = _STAR_tx_STAR_14218;
}});})(bind))
;
if(cljs.core.truth_(javelin.core._STAR_tx_STAR_)){
return (thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));
} else {
return bind(((function (bind,prop){
return (function (){
(thunk.cljs$core$IFn$_invoke$arity$0 ? thunk.cljs$core$IFn$_invoke$arity$0() : thunk.call(null));

return prop();
});})(bind,prop))
);
}
});
javelin.core.alts_BANG_ = (function javelin$core$alts_BANG_(var_args){
var args__7639__auto__ = [];
var len__7632__auto___14226 = arguments.length;
var i__7633__auto___14227 = (0);
while(true){
if((i__7633__auto___14227 < len__7632__auto___14226)){
args__7639__auto__.push((arguments[i__7633__auto___14227]));

var G__14228 = (i__7633__auto___14227 + (1));
i__7633__auto___14227 = G__14228;
continue;
} else {
}
break;
}

var argseq__7640__auto__ = ((((0) < args__7639__auto__.length))?(new cljs.core.IndexedSeq(args__7639__auto__.slice((0)),(0),null)):null);
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__7640__auto__);
});

javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (cells){
var olds = (function (){var G__14225 = cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(cells),cljs.core.cst$kw$javelin$core_SLASH_none);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14225) : cljs.core.atom.call(null,G__14225));
})();
var tag_neq = ((function (olds){
return (function (p1__14219_SHARP_,p2__14220_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__14219_SHARP_,p2__14220_SHARP_),p2__14220_SHARP_],null));
});})(olds))
;
var diff = ((function (olds,tag_neq){
return (function (p1__14222_SHARP_,p2__14221_SHARP_){
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.map.cljs$core$IFn$_invoke$arity$3(tag_neq,p1__14222_SHARP_,p2__14221_SHARP_))));
});})(olds,tag_neq))
;
var proc = ((function (olds,tag_neq,diff){
return (function() { 
var G__14229__delegate = function (rest__14223_SHARP_){
var news = diff((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(olds) : cljs.core.deref.call(null,olds)),rest__14223_SHARP_);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(olds,rest__14223_SHARP_) : cljs.core.reset_BANG_.call(null,olds,rest__14223_SHARP_));

return news;
};
var G__14229 = function (var_args){
var rest__14223_SHARP_ = null;
if (arguments.length > 0) {
var G__14230__i = 0, G__14230__a = new Array(arguments.length -  0);
while (G__14230__i < G__14230__a.length) {G__14230__a[G__14230__i] = arguments[G__14230__i + 0]; ++G__14230__i;}
  rest__14223_SHARP_ = new cljs.core.IndexedSeq(G__14230__a,0);
} 
return G__14229__delegate.call(this,rest__14223_SHARP_);};
G__14229.cljs$lang$maxFixedArity = 0;
G__14229.cljs$lang$applyTo = (function (arglist__14231){
var rest__14223_SHARP_ = cljs.core.seq(arglist__14231);
return G__14229__delegate(rest__14223_SHARP_);
});
G__14229.cljs$core$IFn$_invoke$arity$variadic = G__14229__delegate;
return G__14229;
})()
;})(olds,tag_neq,diff))
;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(javelin.core.formula(proc),cells);
});

javelin.core.alts_BANG_.cljs$lang$maxFixedArity = (0);

javelin.core.alts_BANG_.cljs$lang$applyTo = (function (seq14224){
return javelin.core.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14224));
});

javelin.core.cell_map = (function javelin$core$cell_map(f,c){
var cseq = javelin.core.formula(cljs.core.seq).call(null,c);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cseq){
return (function (p1__14232_SHARP_){
return javelin.core.formula(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,javelin.core.safe_nth)).call(null,cseq,p1__14232_SHARP_);
});})(cseq))
,cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cseq) : cljs.core.deref.call(null,cseq)))));
});
javelin.core.cell_doseq_STAR_ = (function javelin$core$cell_doseq_STAR_(items_seq,f){
var pool_size = javelin.core.cell.cljs$core$IFn$_invoke$arity$1((0));
var cur_count = javelin.core.formula(cljs.core.count).call(null,items_seq);
var ith_item = ((function (pool_size,cur_count){
return (function (p1__14233_SHARP_){
return javelin.core.formula(javelin.core.safe_nth).call(null,items_seq,p1__14233_SHARP_);
});})(pool_size,cur_count))
;
return javelin.core.formula(((function (pool_size,cur_count,ith_item){
return (function (pool_size__$1,cur_count__$1,f__$1,ith_item__$1,reset_pool_size_BANG_){
if((pool_size__$1 < cur_count__$1)){
var seq__14240_14246 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(pool_size__$1,cur_count__$1));
var chunk__14241_14247 = null;
var count__14242_14248 = (0);
var i__14243_14249 = (0);
while(true){
if((i__14243_14249 < count__14242_14248)){
var i_14250 = chunk__14241_14247.cljs$core$IIndexed$_nth$arity$2(null,i__14243_14249);
var G__14244_14251 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_14250) : ith_item__$1.call(null,i_14250));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__14244_14251) : f__$1.call(null,G__14244_14251));

var G__14252 = seq__14240_14246;
var G__14253 = chunk__14241_14247;
var G__14254 = count__14242_14248;
var G__14255 = (i__14243_14249 + (1));
seq__14240_14246 = G__14252;
chunk__14241_14247 = G__14253;
count__14242_14248 = G__14254;
i__14243_14249 = G__14255;
continue;
} else {
var temp__4657__auto___14256 = cljs.core.seq(seq__14240_14246);
if(temp__4657__auto___14256){
var seq__14240_14257__$1 = temp__4657__auto___14256;
if(cljs.core.chunked_seq_QMARK_(seq__14240_14257__$1)){
var c__7368__auto___14258 = cljs.core.chunk_first(seq__14240_14257__$1);
var G__14259 = cljs.core.chunk_rest(seq__14240_14257__$1);
var G__14260 = c__7368__auto___14258;
var G__14261 = cljs.core.count(c__7368__auto___14258);
var G__14262 = (0);
seq__14240_14246 = G__14259;
chunk__14241_14247 = G__14260;
count__14242_14248 = G__14261;
i__14243_14249 = G__14262;
continue;
} else {
var i_14263 = cljs.core.first(seq__14240_14257__$1);
var G__14245_14264 = (ith_item__$1.cljs$core$IFn$_invoke$arity$1 ? ith_item__$1.cljs$core$IFn$_invoke$arity$1(i_14263) : ith_item__$1.call(null,i_14263));
(f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__14245_14264) : f__$1.call(null,G__14245_14264));

var G__14265 = cljs.core.next(seq__14240_14257__$1);
var G__14266 = null;
var G__14267 = (0);
var G__14268 = (0);
seq__14240_14246 = G__14265;
chunk__14241_14247 = G__14266;
count__14242_14248 = G__14267;
i__14243_14249 = G__14268;
continue;
}
} else {
}
}
break;
}

return (reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1 ? reset_pool_size_BANG_.cljs$core$IFn$_invoke$arity$1(cur_count__$1) : reset_pool_size_BANG_.call(null,cur_count__$1));
} else {
return null;
}
});})(pool_size,cur_count,ith_item))
).call(null,pool_size,cur_count,f,ith_item,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,pool_size));
});
