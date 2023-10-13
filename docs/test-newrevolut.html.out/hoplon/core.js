// Compiled by ClojureScript 1.9.93 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14476_SHARP_,p2__14477_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__14476_SHARP_,p2__14477_SHARP_.getAttribute("static-id"),p2__14477_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,jQuery("[static-id]").get());
/**
 * Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var args14478 = [];
var len__7632__auto___14483 = arguments.length;
var i__7633__auto___14484 = (0);
while(true){
if((i__7633__auto___14484 < len__7632__auto___14483)){
args14478.push((arguments[i__7633__auto___14484]));

var G__14485 = (i__7633__auto___14484 + (1));
i__7633__auto___14484 = G__14485;
continue;
} else {
}
break;
}

var G__14480 = args14478.length;
switch (G__14480) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14478.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__14481_14487 = init;
var G__14482_14488 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref) : cljs.core.deref.call(null,ref));
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__14481_14487,G__14482_14488) : f.call(null,G__14481_14487,G__14482_14488));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__14495 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__14496 = cljs.core.seq(vec__14495);
var first__14497 = cljs.core.first(seq__14496);
var seq__14496__$1 = cljs.core.next(seq__14496);
var f = first__14497;
var more = seq__14496__$1;
var vec__14498 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14498,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14498,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(f1),cljs.core.str("."),cljs.core.str("1fd28c3290a54639a30771acbbf2a5e7")].join(''),f2], null)))));
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__6557__auto__ = (function (){var and__6545__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__6545__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__6545__auto__;
}
})();
if(cljs.core.truth_(or__6557__auto__)){
return or__6557__auto__;
} else {
var G__14501 = (i + (1));
var G__14502 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__14501;
ret = G__14502;
continue;
}
break;
}
});
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(typeof x === 'string'){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(x) : hoplon.core.$text.call(null,x));
} else {
if(typeof x === 'number'){
var G__14504 = [cljs.core.str(x)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__14504) : hoplon.core.$text.call(null,G__14504));
} else {
return x;

}
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,old,new$){
var new$__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.flatten(new$));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__14531 = new$__$1;
var vec__14533 = G__14531;
var seq__14534 = cljs.core.seq(vec__14533);
var first__14535 = cljs.core.first(seq__14534);
var seq__14534__$1 = cljs.core.next(seq__14534);
var x = first__14535;
var xs = seq__14534__$1;
var G__14532 = hoplon.core.child_vec(this$);
var vec__14536 = G__14532;
var seq__14537 = cljs.core.seq(vec__14536);
var first__14538 = cljs.core.first(seq__14537);
var seq__14537__$1 = cljs.core.next(seq__14537);
var k = first__14538;
var ks = seq__14537__$1;
var kids = vec__14536;
var G__14531__$1 = G__14531;
var G__14532__$1 = G__14532;
while(true){
var vec__14539 = G__14531__$1;
var seq__14540 = cljs.core.seq(vec__14539);
var first__14541 = cljs.core.first(seq__14540);
var seq__14540__$1 = cljs.core.next(seq__14540);
var x__$1 = first__14541;
var xs__$1 = seq__14540__$1;
var vec__14542 = G__14532__$1;
var seq__14543 = cljs.core.seq(vec__14542);
var first__14544 = cljs.core.first(seq__14543);
var seq__14543__$1 = cljs.core.next(seq__14543);
var k__$1 = first__14544;
var ks__$1 = seq__14543__$1;
var kids__$1 = vec__14542;
if(cljs.core.truth_((function (){var or__6557__auto__ = x__$1;
if(cljs.core.truth_(or__6557__auto__)){
return or__6557__auto__;
} else {
return k__$1;
}
})())){
var G__14545 = xs__$1;
var G__14546 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,hoplon.core.__GT_node(x__$1));

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,hoplon.core.__GT_node(k__$1));
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,hoplon.core.__GT_node(x__$1),hoplon.core.__GT_node(k__$1));

return kids__$2;
})()
)));
G__14531__$1 = G__14545;
G__14532__$1 = G__14546;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_14549 = (function (){var G__14548 = hoplon.core.child_vec(this$__$1);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14548) : cljs.core.atom.call(null,G__14548));
})();
this$__$1.hoplonKids = kids_14549;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_14549,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

var kids_14552 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1));
var i_14553 = cljs.core.count((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(kids_14552) : cljs.core.deref.call(null,kids_14552)));
if(cljs.core.truth_(javelin.core.cell_QMARK_(x__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(x__$1,((function (kids_14552,i_14553,x__$1,this$__$1){
return (function (p1__14551_SHARP_,p2__14550_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14552,cljs.core.assoc,i_14553,p2__14550_SHARP_);
});})(kids_14552,i_14553,x__$1,this$__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_14552,cljs.core.assoc,i_14553,x__$1);
}

return x__$1;
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__14554_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__14554_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

if(cljs.core.not(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__14555_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.array_seq([p1__14555_SHARP_], 0)));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__14556_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__14556_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_14557 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_14558 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__14559 = (function (){var and__6545__auto__ = attr_14558;
if(cljs.core.truth_(and__6545__auto__)){
return cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(attr_14558) : cljs.core.deref.call(null,attr_14558)),kk_14557);
} else {
return and__6545__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__14559)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_14558,cljs.core.assoc,kk_14557,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__14560_SHARP_){
return p1__14560_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__14561_SHARP_){
return p1__14561_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__14562_SHARP_){
return p1__14562_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__14563_SHARP_){
return p1__14563_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.ICustomElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7221__auto__.call(null,this$,kvs));
} else {
var m__7221__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7221__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7221__auto__.call(null,this$,kvs));
} else {
var m__7221__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__7221__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("ICustomElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7221__auto__.call(null,this$,child));
} else {
var m__7221__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7221__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7221__auto__.call(null,this$,child));
} else {
var m__7221__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__7221__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("ICustomElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7221__auto__.call(null,this$,new$,existing));
} else {
var m__7221__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7221__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__7220__auto__ = (((this$ == null))?null:this$);
var m__7221__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__7220__auto__)]);
if(!((m__7221__auto__ == null))){
return (m__7221__auto__.cljs$core$IFn$_invoke$arity$3 ? m__7221__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7221__auto__.call(null,this$,new$,existing));
} else {
var m__7221__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__7221__auto____$1 == null))){
return (m__7221__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__7221__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__7221__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("ICustomElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var args14564 = [];
var len__7632__auto___14571 = arguments.length;
var i__7633__auto___14572 = (0);
while(true){
if((i__7633__auto___14572 < len__7632__auto___14571)){
args14564.push((arguments[i__7633__auto___14572]));

var G__14573 = (i__7633__auto___14572 + (1));
i__7633__auto___14572 = G__14573;
continue;
} else {
}
break;
}

var G__14570 = args14564.length;
switch (G__14570) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7651__auto__ = (new cljs.core.IndexedSeq(args14564.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7651__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14565){
var G__14566 = cljs.core.first(seq14565);
var seq14565__$1 = cljs.core.next(seq14565);
var G__14567 = cljs.core.first(seq14565__$1);
var seq14565__$2 = cljs.core.next(seq14565__$1);
var G__14568 = cljs.core.first(seq14565__$2);
var seq14565__$3 = cljs.core.next(seq14565__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14566,G__14567,G__14568,seq14565__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var args14575 = [];
var len__7632__auto___14582 = arguments.length;
var i__7633__auto___14583 = (0);
while(true){
if((i__7633__auto___14583 < len__7632__auto___14582)){
args14575.push((arguments[i__7633__auto___14583]));

var G__14584 = (i__7633__auto___14583 + (1));
i__7633__auto___14583 = G__14584;
continue;
} else {
}
break;
}

var G__14581 = args14575.length;
switch (G__14581) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7651__auto__ = (new cljs.core.IndexedSeq(args14575.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7651__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq14576){
var G__14577 = cljs.core.first(seq14576);
var seq14576__$1 = cljs.core.next(seq14576);
var G__14578 = cljs.core.first(seq14576__$1);
var seq14576__$2 = cljs.core.next(seq14576__$1);
var G__14579 = cljs.core.first(seq14576__$2);
var seq14576__$3 = cljs.core.next(seq14576__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14577,G__14578,G__14579,seq14576__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});
hoplon.core.is_ie8 = cljs.core.not((window["Node"]));
hoplon.core.node_QMARK_ = ((cljs.core.not(hoplon.core.is_ie8))?(function (p1__14586_SHARP_){
return (p1__14586_SHARP_ instanceof Node);
}):(function (p1__14587_SHARP_){
try{return p1__14587_SHARP_.nodeType;
}catch (e14588){if((e14588 instanceof Error)){
var _ = e14588;
return null;
} else {
throw e14588;

}
}}));
hoplon.core.vector_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.vector_QMARK_:(function (p1__14589_SHARP_){
try{return cljs.core.vector_QMARK_(p1__14589_SHARP_);
}catch (e14590){if((e14590 instanceof Error)){
var _ = e14590;
return null;
} else {
throw e14590;

}
}}));
hoplon.core.seq_QMARK__STAR_ = ((cljs.core.not(hoplon.core.is_ie8))?cljs.core.seq_QMARK_:(function (p1__14591_SHARP_){
try{return cljs.core.seq_QMARK_(p1__14591_SHARP_);
}catch (e14592){if((e14592 instanceof Error)){
var _ = e14592;
return null;
} else {
throw e14592;

}
}}));
hoplon.core.safe_nth = (function hoplon$core$safe_nth(var_args){
var args14593 = [];
var len__7632__auto___14597 = arguments.length;
var i__7633__auto___14598 = (0);
while(true){
if((i__7633__auto___14598 < len__7632__auto___14597)){
args14593.push((arguments[i__7633__auto___14598]));

var G__14599 = (i__7633__auto___14598 + (1));
i__7633__auto___14598 = G__14599;
continue;
} else {
}
break;
}

var G__14595 = args14593.length;
switch (G__14595) {
case 2:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14593.length)].join('')));

}
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$2 = (function (coll,index){
return hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3(coll,index,null);
});

hoplon.core.safe_nth.cljs$core$IFn$_invoke$arity$3 = (function (coll,index,not_found){
try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(coll,index,not_found);
}catch (e14596){if((e14596 instanceof Error)){
var _ = e14596;
return not_found;
} else {
throw e14596;

}
}});

hoplon.core.safe_nth.cljs$lang$maxFixedArity = 3;

hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var args14601 = [];
var len__7632__auto___14604 = arguments.length;
var i__7633__auto___14605 = (0);
while(true){
if((i__7633__auto___14605 < len__7632__auto___14604)){
args14601.push((arguments[i__7633__auto___14605]));

var G__14606 = (i__7633__auto___14605 + (1));
i__7633__auto___14605 = G__14606;
continue;
} else {
}
break;
}

var G__14603 = args14601.length;
switch (G__14603) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14601.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((function hoplon$core$when_dom_$_doit(){
if(cljs.core.truth_(document.documentElement.contains(this$))){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(hoplon$core$when_dom_$_doit,(20));
}
}));
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__14624 = args;
var vec__14625 = G__14624;
var seq__14626 = cljs.core.seq(vec__14625);
var first__14627 = cljs.core.first(seq__14626);
var seq__14626__$1 = cljs.core.next(seq__14626);
var arg = first__14627;
var args__$1 = seq__14626__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__14624__$1 = G__14624;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__14628 = G__14624__$1;
var seq__14629 = cljs.core.seq(vec__14628);
var first__14630 = cljs.core.first(seq__14629);
var seq__14629__$1 = cljs.core.next(seq__14629);
var arg__$1 = first__14630;
var args__$2 = seq__14629__$1;
if(cljs.core.not(arg__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__14631 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__14624__$1,attr__$2,kids__$2,vec__14628,seq__14629,first__14630,seq__14629__$1,arg__$1,args__$2,attr,kids,G__14624,vec__14625,seq__14626,first__14627,seq__14626__$1,arg,args__$1){
return (function (p1__14608_SHARP_,p2__14609_SHARP_,p3__14610_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__14608_SHARP_,p2__14609_SHARP_,p3__14610_SHARP_);
});})(attr__$1,kids__$1,G__14624__$1,attr__$2,kids__$2,vec__14628,seq__14629,first__14630,seq__14629__$1,arg__$1,args__$2,attr,kids,G__14624,vec__14625,seq__14626,first__14627,seq__14626__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__14632 = kids__$2;
var G__14633 = args__$2;
attr__$1 = G__14631;
kids__$1 = G__14632;
G__14624__$1 = G__14633;
continue;
} else {
if((arg__$1 instanceof cljs.core.Keyword)){
var G__14634 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__14635 = kids__$2;
var G__14636 = cljs.core.rest(args__$2);
attr__$1 = G__14634;
kids__$1 = G__14635;
G__14624__$1 = G__14636;
continue;
} else {
if(cljs.core.truth_((hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.seq_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.seq_QMARK__STAR_.call(null,arg__$1)))){
var G__14637 = attr__$2;
var G__14638 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__14639 = args__$2;
attr__$1 = G__14637;
kids__$1 = G__14638;
G__14624__$1 = G__14639;
continue;
} else {
if(cljs.core.truth_((hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.vector_QMARK__STAR_.cljs$core$IFn$_invoke$arity$1(arg__$1) : hoplon.core.vector_QMARK__STAR_.call(null,arg__$1)))){
var G__14640 = attr__$2;
var G__14641 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,cljs.core.flatten(arg__$1));
var G__14642 = args__$2;
attr__$1 = G__14640;
kids__$1 = G__14641;
G__14624__$1 = G__14642;
continue;
} else {
var G__14643 = attr__$2;
var G__14644 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__14645 = args__$2;
attr__$1 = G__14643;
kids__$1 = G__14644;
G__14624__$1 = G__14645;
continue;

}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
var this$__$1 = this$;
cljs.core.reduce_kv(((function (this$__$1){
return (function (this$__$2,k,v){
var this$__$3 = this$__$2;
if(cljs.core.truth_(javelin.core.cell_QMARK_(v))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(v,((function (this$__$3,this$__$1){
return (function (p1__14647_SHARP_,p2__14646_SHARP_){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,p2__14646_SHARP_) : hoplon.core.do_BANG_.call(null,this$__$3,k,p2__14646_SHARP_));
});})(this$__$3,this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(v)){
(hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.on_BANG_.call(null,this$__$3,k,v));
} else {
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$3,k,v) : hoplon.core.do_BANG_.call(null,this$__$3,k,v));

}
}

return this$__$3;
});})(this$__$1))
,this$__$1,attr);

return this$__$1;
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__14648){
var vec__14656 = p__14648;
var seq__14657 = cljs.core.seq(vec__14656);
var first__14658 = cljs.core.first(seq__14657);
var seq__14657__$1 = cljs.core.next(seq__14657);
var child_cell = first__14658;
var _ = seq__14657__$1;
var kids = vec__14656;
var this$__$1 = this$;
var seq__14659_14663 = cljs.core.seq(cljs.core.flatten(kids));
var chunk__14660_14664 = null;
var count__14661_14665 = (0);
var i__14662_14666 = (0);
while(true){
if((i__14662_14666 < count__14661_14665)){
var x_14667 = chunk__14660_14664.cljs$core$IIndexed$_nth$arity$2(null,i__14662_14666);
var temp__4657__auto___14668 = hoplon.core.__GT_node(x_14667);
if(cljs.core.truth_(temp__4657__auto___14668)){
var x_14669__$1 = temp__4657__auto___14668;
hoplon.core.append_child_BANG_(this$__$1,x_14669__$1);
} else {
}

var G__14670 = seq__14659_14663;
var G__14671 = chunk__14660_14664;
var G__14672 = count__14661_14665;
var G__14673 = (i__14662_14666 + (1));
seq__14659_14663 = G__14670;
chunk__14660_14664 = G__14671;
count__14661_14665 = G__14672;
i__14662_14666 = G__14673;
continue;
} else {
var temp__4657__auto___14674 = cljs.core.seq(seq__14659_14663);
if(temp__4657__auto___14674){
var seq__14659_14675__$1 = temp__4657__auto___14674;
if(cljs.core.chunked_seq_QMARK_(seq__14659_14675__$1)){
var c__7368__auto___14676 = cljs.core.chunk_first(seq__14659_14675__$1);
var G__14677 = cljs.core.chunk_rest(seq__14659_14675__$1);
var G__14678 = c__7368__auto___14676;
var G__14679 = cljs.core.count(c__7368__auto___14676);
var G__14680 = (0);
seq__14659_14663 = G__14677;
chunk__14660_14664 = G__14678;
count__14661_14665 = G__14679;
i__14662_14666 = G__14680;
continue;
} else {
var x_14681 = cljs.core.first(seq__14659_14675__$1);
var temp__4657__auto___14682__$1 = hoplon.core.__GT_node(x_14681);
if(cljs.core.truth_(temp__4657__auto___14682__$1)){
var x_14683__$1 = temp__4657__auto___14682__$1;
hoplon.core.append_child_BANG_(this$__$1,x_14683__$1);
} else {
}

var G__14684 = cljs.core.next(seq__14659_14675__$1);
var G__14685 = null;
var G__14686 = (0);
var G__14687 = (0);
seq__14659_14663 = G__14684;
chunk__14660_14664 = G__14685;
count__14661_14665 = G__14686;
i__14662_14666 = G__14687;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
Element.prototype.cljs$core$IPrintWithWriter$ = true;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.array_seq(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = true;

Element.prototype.call = (function() { 
var G__14720__delegate = function (self__,args){
var self____$1 = this;
var this$ = self____$1;
var vec__14689 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14689,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14689,(1),null);
var G__14692 = this$;
hoplon.core.add_attributes_BANG_(G__14692,attr);

hoplon.core.add_children_BANG_(G__14692,kids);

return G__14692;
};
var G__14720 = function (self__,var_args){
var args = null;
if (arguments.length > 1) {
var G__14721__i = 0, G__14721__a = new Array(arguments.length -  1);
while (G__14721__i < G__14721__a.length) {G__14721__a[G__14721__i] = arguments[G__14721__i + 1]; ++G__14721__i;}
  args = new cljs.core.IndexedSeq(G__14721__a,0);
} 
return G__14720__delegate.call(this,self__,args);};
G__14720.cljs$lang$maxFixedArity = 1;
G__14720.cljs$lang$applyTo = (function (arglist__14722){
var self__ = cljs.core.first(arglist__14722);
var args = cljs.core.rest(arglist__14722);
return G__14720__delegate(self__,args);
});
G__14720.cljs$core$IFn$_invoke$arity$variadic = G__14720__delegate;
return G__14720;
})()
;

Element.prototype.apply = (function (self__,args14688){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args14688)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__14723__delegate = function (args){
var this$ = this;
var vec__14693 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14693,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14693,(1),null);
var G__14696 = this$;
hoplon.core.add_attributes_BANG_(G__14696,attr);

hoplon.core.add_children_BANG_(G__14696,kids);

return G__14696;
};
var G__14723 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14724__i = 0, G__14724__a = new Array(arguments.length -  0);
while (G__14724__i < G__14724__a.length) {G__14724__a[G__14724__i] = arguments[G__14724__i + 0]; ++G__14724__i;}
  args = new cljs.core.IndexedSeq(G__14724__a,0);
} 
return G__14723__delegate.call(this,args);};
G__14723.cljs$lang$maxFixedArity = 0;
G__14723.cljs$lang$applyTo = (function (arglist__14725){
var args = cljs.core.seq(arglist__14725);
return G__14723__delegate(args);
});
G__14723.cljs$core$IFn$_invoke$arity$variadic = G__14723__delegate;
return G__14723;
})()
;

Element.prototype.hoplon$core$ICustomElement$ = true;

Element.prototype.hoplon$core$ICustomElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = jQuery(this$__$1);
var seq__14697 = cljs.core.seq(kvs);
var chunk__14699 = null;
var count__14700 = (0);
var i__14701 = (0);
while(true){
if((i__14701 < count__14700)){
var vec__14703 = chunk__14699.cljs$core$IIndexed$_nth$arity$2(null,i__14701);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14703,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14703,(1),null);
var k_14726__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14726__$1);
} else {
e.attr(k_14726__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14726__$1:v));
}

var G__14727 = seq__14697;
var G__14728 = chunk__14699;
var G__14729 = count__14700;
var G__14730 = (i__14701 + (1));
seq__14697 = G__14727;
chunk__14699 = G__14728;
count__14700 = G__14729;
i__14701 = G__14730;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14697);
if(temp__4657__auto__){
var seq__14697__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14697__$1)){
var c__7368__auto__ = cljs.core.chunk_first(seq__14697__$1);
var G__14731 = cljs.core.chunk_rest(seq__14697__$1);
var G__14732 = c__7368__auto__;
var G__14733 = cljs.core.count(c__7368__auto__);
var G__14734 = (0);
seq__14697 = G__14731;
chunk__14699 = G__14732;
count__14700 = G__14733;
i__14701 = G__14734;
continue;
} else {
var vec__14706 = cljs.core.first(seq__14697__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14706,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14706,(1),null);
var k_14735__$1 = cljs.core.name(k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,v)){
e.removeAttr(k_14735__$1);
} else {
e.attr(k_14735__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_14735__$1:v));
}

var G__14736 = cljs.core.next(seq__14697__$1);
var G__14737 = null;
var G__14738 = (0);
var G__14739 = (0);
seq__14697 = G__14736;
chunk__14699 = G__14737;
count__14700 = G__14738;
i__14701 = G__14739;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = jQuery(this$__$1);
var seq__14709 = cljs.core.seq(kvs);
var chunk__14710 = null;
var count__14711 = (0);
var i__14712 = (0);
while(true){
if((i__14712 < count__14711)){
var vec__14713 = chunk__14710.cljs$core$IIndexed$_nth$arity$2(null,i__14712);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14713,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14713,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__14740 = seq__14709;
var G__14741 = chunk__14710;
var G__14742 = count__14711;
var G__14743 = (i__14712 + (1));
seq__14709 = G__14740;
chunk__14710 = G__14741;
count__14711 = G__14742;
i__14712 = G__14743;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14709);
if(temp__4657__auto__){
var seq__14709__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14709__$1)){
var c__7368__auto__ = cljs.core.chunk_first(seq__14709__$1);
var G__14744 = cljs.core.chunk_rest(seq__14709__$1);
var G__14745 = c__7368__auto__;
var G__14746 = cljs.core.count(c__7368__auto__);
var G__14747 = (0);
seq__14709 = G__14744;
chunk__14710 = G__14745;
count__14711 = G__14746;
i__14712 = G__14747;
continue;
} else {
var vec__14716 = cljs.core.first(seq__14709__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14716,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14716,(1),null);
e.css(cljs.core.name(k),[cljs.core.str(v)].join(''));

var G__14748 = cljs.core.next(seq__14709__$1);
var G__14749 = null;
var G__14750 = (0);
var G__14751 = (0);
seq__14709 = G__14748;
chunk__14710 = G__14749;
count__14711 = G__14750;
i__14712 = G__14751;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$ICustomElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
if(cljs.core.not(hoplon.core.is_ie8)){
return this$__$1.appendChild(child);
} else {
try{return this$__$1.appendChild(child);
}catch (e14719){if((e14719 instanceof Error)){
var _ = e14719;
return null;
} else {
throw e14719;

}
}}
});

Element.prototype.hoplon$core$ICustomElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$ICustomElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$ICustomElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.make_singleton_ctor = (function hoplon$core$make_singleton_ctor(tag){
return (function() { 
var G__14758__delegate = function (args){
var vec__14755 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14755,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14755,(1),null);
var elem = (document.getElementsByTagName(tag)[(0)]);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
elem.hoplonKids = null;

elem.innerHTML = "";

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__14758 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14759__i = 0, G__14759__a = new Array(arguments.length -  0);
while (G__14759__i < G__14759__a.length) {G__14759__a[G__14759__i] = arguments[G__14759__i + 0]; ++G__14759__i;}
  args = new cljs.core.IndexedSeq(G__14759__a,0);
} 
return G__14758__delegate.call(this,args);};
G__14758.cljs$lang$maxFixedArity = 0;
G__14758.cljs$lang$applyTo = (function (arglist__14760){
var args = cljs.core.seq(arglist__14760);
return G__14758__delegate(args);
});
G__14758.cljs$core$IFn$_invoke$arity$variadic = G__14758__delegate;
return G__14758;
})()
;
});
hoplon.core.make_elem_ctor = (function hoplon$core$make_elem_ctor(tag){
return (function() { 
var G__14761__delegate = function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(hoplon.core.ensure_kids_BANG_(document.createElement(tag)),args);
};
var G__14761 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14762__i = 0, G__14762__a = new Array(arguments.length -  0);
while (G__14762__i < G__14762__a.length) {G__14762__a[G__14762__i] = arguments[G__14762__i + 0]; ++G__14762__i;}
  args = new cljs.core.IndexedSeq(G__14762__a,0);
} 
return G__14761__delegate.call(this,args);};
G__14761.cljs$lang$maxFixedArity = 0;
G__14761.cljs$lang$applyTo = (function (arglist__14763){
var args = cljs.core.seq(arglist__14763);
return G__14761__delegate(args);
});
G__14761.cljs$core$IFn$_invoke$arity$variadic = G__14761__delegate;
return G__14761;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__7639__auto__ = [];
var len__7632__auto___14768 = arguments.length;
var i__7633__auto___14769 = (0);
while(true){
if((i__7633__auto___14769 < len__7632__auto___14768)){
args__7639__auto__.push((arguments[i__7633__auto___14769]));

var G__14770 = (i__7633__auto___14769 + (1));
i__7633__auto___14769 = G__14770;
continue;
} else {
}
break;
}

var argseq__7640__auto__ = ((((0) < args__7639__auto__.length))?(new cljs.core.IndexedSeq(args__7639__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__7640__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__14765 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14765,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14765,(1),null);
return hoplon.core.add_attributes_BANG_((document.getElementsByTagName("html")[(0)]),attrs);
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq14764){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14764));
});

hoplon.core.body = hoplon.core.make_singleton_ctor("body");
hoplon.core.head = hoplon.core.make_singleton_ctor("head");
hoplon.core.a = hoplon.core.make_elem_ctor("a");
hoplon.core.abbr = hoplon.core.make_elem_ctor("abbr");
hoplon.core.acronym = hoplon.core.make_elem_ctor("acronym");
hoplon.core.address = hoplon.core.make_elem_ctor("address");
hoplon.core.applet = hoplon.core.make_elem_ctor("applet");
hoplon.core.area = hoplon.core.make_elem_ctor("area");
hoplon.core.article = hoplon.core.make_elem_ctor("article");
hoplon.core.aside = hoplon.core.make_elem_ctor("aside");
hoplon.core.audio = hoplon.core.make_elem_ctor("audio");
hoplon.core.b = hoplon.core.make_elem_ctor("b");
hoplon.core.base = hoplon.core.make_elem_ctor("base");
hoplon.core.basefont = hoplon.core.make_elem_ctor("basefont");
hoplon.core.bdi = hoplon.core.make_elem_ctor("bdi");
hoplon.core.bdo = hoplon.core.make_elem_ctor("bdo");
hoplon.core.big = hoplon.core.make_elem_ctor("big");
hoplon.core.blockquote = hoplon.core.make_elem_ctor("blockquote");
hoplon.core.br = hoplon.core.make_elem_ctor("br");
hoplon.core.button = hoplon.core.make_elem_ctor("button");
hoplon.core.canvas = hoplon.core.make_elem_ctor("canvas");
hoplon.core.caption = hoplon.core.make_elem_ctor("caption");
hoplon.core.center = hoplon.core.make_elem_ctor("center");
hoplon.core.cite = hoplon.core.make_elem_ctor("cite");
hoplon.core.code = hoplon.core.make_elem_ctor("code");
hoplon.core.col = hoplon.core.make_elem_ctor("col");
hoplon.core.colgroup = hoplon.core.make_elem_ctor("colgroup");
hoplon.core.command = hoplon.core.make_elem_ctor("command");
hoplon.core.data = hoplon.core.make_elem_ctor("data");
hoplon.core.datalist = hoplon.core.make_elem_ctor("datalist");
hoplon.core.dd = hoplon.core.make_elem_ctor("dd");
hoplon.core.del = hoplon.core.make_elem_ctor("del");
hoplon.core.details = hoplon.core.make_elem_ctor("details");
hoplon.core.dfn = hoplon.core.make_elem_ctor("dfn");
hoplon.core.dialog = hoplon.core.make_elem_ctor("dialog");
hoplon.core.dir = hoplon.core.make_elem_ctor("dir");
hoplon.core.div = hoplon.core.make_elem_ctor("div");
hoplon.core.dl = hoplon.core.make_elem_ctor("dl");
hoplon.core.dt = hoplon.core.make_elem_ctor("dt");
hoplon.core.em = hoplon.core.make_elem_ctor("em");
hoplon.core.embed = hoplon.core.make_elem_ctor("embed");
hoplon.core.eventsource = hoplon.core.make_elem_ctor("eventsource");
hoplon.core.fieldset = hoplon.core.make_elem_ctor("fieldset");
hoplon.core.figcaption = hoplon.core.make_elem_ctor("figcaption");
hoplon.core.figure = hoplon.core.make_elem_ctor("figure");
hoplon.core.font = hoplon.core.make_elem_ctor("font");
hoplon.core.footer = hoplon.core.make_elem_ctor("footer");
hoplon.core.form = hoplon.core.make_elem_ctor("form");
hoplon.core.frame = hoplon.core.make_elem_ctor("frame");
hoplon.core.frameset = hoplon.core.make_elem_ctor("frameset");
hoplon.core.h1 = hoplon.core.make_elem_ctor("h1");
hoplon.core.h2 = hoplon.core.make_elem_ctor("h2");
hoplon.core.h3 = hoplon.core.make_elem_ctor("h3");
hoplon.core.h4 = hoplon.core.make_elem_ctor("h4");
hoplon.core.h5 = hoplon.core.make_elem_ctor("h5");
hoplon.core.h6 = hoplon.core.make_elem_ctor("h6");
hoplon.core.header = hoplon.core.make_elem_ctor("header");
hoplon.core.hgroup = hoplon.core.make_elem_ctor("hgroup");
hoplon.core.hr = hoplon.core.make_elem_ctor("hr");
hoplon.core.i = hoplon.core.make_elem_ctor("i");
hoplon.core.iframe = hoplon.core.make_elem_ctor("iframe");
hoplon.core.img = hoplon.core.make_elem_ctor("img");
hoplon.core.input = hoplon.core.make_elem_ctor("input");
hoplon.core.ins = hoplon.core.make_elem_ctor("ins");
hoplon.core.isindex = hoplon.core.make_elem_ctor("isindex");
hoplon.core.kbd = hoplon.core.make_elem_ctor("kbd");
hoplon.core.keygen = hoplon.core.make_elem_ctor("keygen");
hoplon.core.label = hoplon.core.make_elem_ctor("label");
hoplon.core.legend = hoplon.core.make_elem_ctor("legend");
hoplon.core.li = hoplon.core.make_elem_ctor("li");
hoplon.core.link = hoplon.core.make_elem_ctor("link");
hoplon.core.main = hoplon.core.make_elem_ctor("main");
hoplon.core.html_map = hoplon.core.make_elem_ctor("map");
hoplon.core.mark = hoplon.core.make_elem_ctor("mark");
hoplon.core.menu = hoplon.core.make_elem_ctor("menu");
hoplon.core.menuitem = hoplon.core.make_elem_ctor("menuitem");
hoplon.core.html_meta = hoplon.core.make_elem_ctor("meta");
hoplon.core.meter = hoplon.core.make_elem_ctor("meter");
hoplon.core.nav = hoplon.core.make_elem_ctor("nav");
hoplon.core.noframes = hoplon.core.make_elem_ctor("noframes");
hoplon.core.noscript = hoplon.core.make_elem_ctor("noscript");
hoplon.core.object = hoplon.core.make_elem_ctor("object");
hoplon.core.ol = hoplon.core.make_elem_ctor("ol");
hoplon.core.optgroup = hoplon.core.make_elem_ctor("optgroup");
hoplon.core.option = hoplon.core.make_elem_ctor("option");
hoplon.core.output = hoplon.core.make_elem_ctor("output");
hoplon.core.p = hoplon.core.make_elem_ctor("p");
hoplon.core.param = hoplon.core.make_elem_ctor("param");
hoplon.core.pre = hoplon.core.make_elem_ctor("pre");
hoplon.core.progress = hoplon.core.make_elem_ctor("progress");
hoplon.core.q = hoplon.core.make_elem_ctor("q");
hoplon.core.rp = hoplon.core.make_elem_ctor("rp");
hoplon.core.rt = hoplon.core.make_elem_ctor("rt");
hoplon.core.rtc = hoplon.core.make_elem_ctor("rtc");
hoplon.core.ruby = hoplon.core.make_elem_ctor("ruby");
hoplon.core.s = hoplon.core.make_elem_ctor("s");
hoplon.core.samp = hoplon.core.make_elem_ctor("samp");
hoplon.core.script = hoplon.core.make_elem_ctor("script");
hoplon.core.section = hoplon.core.make_elem_ctor("section");
hoplon.core.select = hoplon.core.make_elem_ctor("select");
hoplon.core.small = hoplon.core.make_elem_ctor("small");
hoplon.core.source = hoplon.core.make_elem_ctor("source");
hoplon.core.span = hoplon.core.make_elem_ctor("span");
hoplon.core.strike = hoplon.core.make_elem_ctor("strike");
hoplon.core.strong = hoplon.core.make_elem_ctor("strong");
hoplon.core.style = hoplon.core.make_elem_ctor("style");
hoplon.core.sub = hoplon.core.make_elem_ctor("sub");
hoplon.core.summary = hoplon.core.make_elem_ctor("summary");
hoplon.core.sup = hoplon.core.make_elem_ctor("sup");
hoplon.core.table = hoplon.core.make_elem_ctor("table");
hoplon.core.tbody = hoplon.core.make_elem_ctor("tbody");
hoplon.core.td = hoplon.core.make_elem_ctor("td");
hoplon.core.textarea = hoplon.core.make_elem_ctor("textarea");
hoplon.core.tfoot = hoplon.core.make_elem_ctor("tfoot");
hoplon.core.th = hoplon.core.make_elem_ctor("th");
hoplon.core.thead = hoplon.core.make_elem_ctor("thead");
hoplon.core.html_time = hoplon.core.make_elem_ctor("time");
hoplon.core.title = hoplon.core.make_elem_ctor("title");
hoplon.core.tr = hoplon.core.make_elem_ctor("tr");
hoplon.core.track = hoplon.core.make_elem_ctor("track");
hoplon.core.tt = hoplon.core.make_elem_ctor("tt");
hoplon.core.u = hoplon.core.make_elem_ctor("u");
hoplon.core.ul = hoplon.core.make_elem_ctor("ul");
hoplon.core.html_var = hoplon.core.make_elem_ctor("var");
hoplon.core.video = hoplon.core.make_elem_ctor("video");
hoplon.core.wbr = hoplon.core.make_elem_ctor("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__14771_SHARP_){
return document.createTextNode(p1__14771_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__14772_SHARP_){
return document.createComment(p1__14772_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
var G__14780 = (function (){
var G__14781 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__14782 = (0);
return setTimeout(G__14781,G__14782);
});
return jQuery(G__14780);
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return jQuery(document).trigger("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return jQuery(document).on("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return jQuery("body").on("submit",(function (p1__14783_SHARP_){
var e = (function (){var G__14784 = p1__14783_SHARP_.target;
return jQuery(G__14784);
})();
if(cljs.core.truth_((function (){var or__6557__auto__ = e.attr("action");
if(cljs.core.truth_(or__6557__auto__)){
return or__6557__auto__;
} else {
return e.attr("method");
}
})())){
return null;
} else {
return p1__14783_SHARP_.preventDefault();
}
}));
}));
hoplon.core.text_val_BANG_ = (function hoplon$core$text_val_BANG_(var_args){
var args14785 = [];
var len__7632__auto___14788 = arguments.length;
var i__7633__auto___14789 = (0);
while(true){
if((i__7633__auto___14789 < len__7632__auto___14788)){
args14785.push((arguments[i__7633__auto___14789]));

var G__14790 = (i__7633__auto___14789 + (1));
i__7633__auto___14789 = G__14790;
continue;
} else {
}
break;
}

var G__14787 = args14785.length;
switch (G__14787) {
case 1:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14785.length)].join('')));

}
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.core.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.core.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.core.check_val_BANG_ = (function hoplon$core$check_val_BANG_(var_args){
var args14792 = [];
var len__7632__auto___14795 = arguments.length;
var i__7633__auto___14796 = (0);
while(true){
if((i__7633__auto___14796 < len__7632__auto___14795)){
args14792.push((arguments[i__7633__auto___14796]));

var G__14797 = (i__7633__auto___14796 + (1));
i__7633__auto___14796 = G__14797;
continue;
} else {
}
break;
}

var G__14794 = args14792.length;
switch (G__14794) {
case 1:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14792.length)].join('')));

}
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.core.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.core.check_val_BANG_.cljs$lang$maxFixedArity = 2;

if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__7482__auto__ = (function (){var G__14799 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14799) : cljs.core.atom.call(null,G__14799));
})();
var prefer_table__7483__auto__ = (function (){var G__14800 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14800) : cljs.core.atom.call(null,G__14800));
})();
var method_cache__7484__auto__ = (function (){var G__14801 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14801) : cljs.core.atom.call(null,G__14801));
})();
var cached_hierarchy__7485__auto__ = (function (){var G__14802 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14802) : cljs.core.atom.call(null,G__14802));
})();
var hierarchy__7486__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__7482__auto__,prefer_table__7483__auto__,method_cache__7484__auto__,cached_hierarchy__7485__auto__,hierarchy__7486__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__7482__auto__,prefer_table__7483__auto__,method_cache__7484__auto__,cached_hierarchy__7485__auto__,hierarchy__7486__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__7486__auto__,method_table__7482__auto__,prefer_table__7483__auto__,method_cache__7484__auto__,cached_hierarchy__7485__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__14803 = elem;
var G__14804 = cljs.core.cst$kw$attr;
var G__14805 = cljs.core.PersistentArrayMap.fromArray([key,val], true, false);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__14803,G__14804,G__14805) : hoplon.core.do_BANG_.call(null,G__14803,G__14804,G__14805));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_(elem,key,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__14806__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.core.check_val_BANG_:hoplon.core.text_val_BANG_),e,args);
};
var G__14806 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__14807__i = 0, G__14807__a = new Array(arguments.length -  2);
while (G__14807__i < G__14807__a.length) {G__14807__a[G__14807__i] = arguments[G__14807__i + 2]; ++G__14807__i;}
  args = new cljs.core.IndexedSeq(G__14807__a,0);
} 
return G__14806__delegate.call(this,elem,_,args);};
G__14806.cljs$lang$maxFixedArity = 2;
G__14806.cljs$lang$applyTo = (function (arglist__14808){
var elem = cljs.core.first(arglist__14808);
arglist__14808 = cljs.core.next(arglist__14808);
var _ = cljs.core.first(arglist__14808);
var args = cljs.core.rest(arglist__14808);
return G__14806__delegate(elem,_,args);
});
G__14806.cljs$core$IFn$_invoke$arity$variadic = G__14806__delegate;
return G__14806;
})()
);
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var __GT_map = ((function (elem__$1){
return (function (p1__14809_SHARP_){
return cljs.core.zipmap(p1__14809_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});})(elem__$1))
;
var clmap = ((cljs.core.map_QMARK_(kvs))?kvs:__GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs))));
var seq__14810 = cljs.core.seq(clmap);
var chunk__14811 = null;
var count__14812 = (0);
var i__14813 = (0);
while(true){
if((i__14813 < count__14812)){
var vec__14814 = chunk__14811.cljs$core$IIndexed$_nth$arity$2(null,i__14813);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14814,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14814,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__14820 = seq__14810;
var G__14821 = chunk__14811;
var G__14822 = count__14812;
var G__14823 = (i__14813 + (1));
seq__14810 = G__14820;
chunk__14811 = G__14821;
count__14812 = G__14822;
i__14813 = G__14823;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14810);
if(temp__4657__auto__){
var seq__14810__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14810__$1)){
var c__7368__auto__ = cljs.core.chunk_first(seq__14810__$1);
var G__14824 = cljs.core.chunk_rest(seq__14810__$1);
var G__14825 = c__7368__auto__;
var G__14826 = cljs.core.count(c__7368__auto__);
var G__14827 = (0);
seq__14810 = G__14824;
chunk__14811 = G__14825;
count__14812 = G__14826;
i__14813 = G__14827;
continue;
} else {
var vec__14817 = cljs.core.first(seq__14810__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14817,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14817,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__14828 = cljs.core.next(seq__14810__$1);
var G__14829 = null;
var G__14830 = (0);
var G__14831 = (0);
seq__14810 = G__14828;
chunk__14811 = G__14829;
count__14812 = G__14830;
i__14813 = G__14831;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__14832 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__14833 = (0);
return setTimeout(G__14832,G__14833);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$focus,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$focus,v));

return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,cljs.core.cst$kw$select,v) : hoplon.core.do_BANG_.call(null,elem,cljs.core.cst$kw$select,v));
} else {
return null;
}
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str(v)].join(''));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__7482__auto__ = (function (){var G__14834 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14834) : cljs.core.atom.call(null,G__14834));
})();
var prefer_table__7483__auto__ = (function (){var G__14835 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14835) : cljs.core.atom.call(null,G__14835));
})();
var method_cache__7484__auto__ = (function (){var G__14836 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14836) : cljs.core.atom.call(null,G__14836));
})();
var cached_hierarchy__7485__auto__ = (function (){var G__14837 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14837) : cljs.core.atom.call(null,G__14837));
})();
var hierarchy__7486__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__7482__auto__,prefer_table__7483__auto__,method_cache__7484__auto__,cached_hierarchy__7485__auto__,hierarchy__7486__auto__){
return (function (elem,key,val){
var temp__4655__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__4655__auto__)){
var n = temp__4655__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__7482__auto__,prefer_table__7483__auto__,method_cache__7484__auto__,cached_hierarchy__7485__auto__,hierarchy__7486__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__7486__auto__,method_table__7482__auto__,prefer_table__7483__auto__,method_cache__7484__auto__,cached_hierarchy__7485__auto__));
})();
}
jQuery.Event.prototype.cljs$core$IDeref$ = true;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__14838 = this$__$1.target;
return jQuery(G__14838);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = (function (){var G__14853 = cljs.core.List.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14853) : cljs.core.atom.call(null,G__14853));
})();
var items_seq = javelin.core.formula(((function (on_deck){
return (function (G__14854,G__14855){
return (G__14854.cljs$core$IFn$_invoke$arity$1 ? G__14854.cljs$core$IFn$_invoke$arity$1(G__14855) : G__14854.call(null,G__14855));
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__14839_SHARP_){
return javelin.core.formula(((function (on_deck,items_seq){
return (function (G__14857,G__14858,G__14856){
return (G__14856.cljs$core$IFn$_invoke$arity$2 ? G__14856.cljs$core$IFn$_invoke$arity$2(G__14857,G__14858) : G__14856.call(null,G__14857,G__14858));
});})(on_deck,items_seq))
).call(null,items_seq,p1__14839_SHARP_,hoplon.core.safe_nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__14840_SHARP_){
var x = cljs.core.first((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(p1__14840_SHARP_) : cljs.core.deref.call(null,p1__14840_SHARP_)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__14840_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__14859 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__14860 = null;
var count__14861 = (0);
var i__14862 = (0);
while(true){
if((i__14862 < count__14861)){
var i = chunk__14860.cljs$core$IIndexed$_nth$arity$2(null,i__14862);
var e_14865 = (function (){var or__6557__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__6557__auto__)){
return or__6557__auto__;
} else {
var G__14863 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14863) : tpl.call(null,G__14863));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14865);

var G__14866 = seq__14859;
var G__14867 = chunk__14860;
var G__14868 = count__14861;
var G__14869 = (i__14862 + (1));
seq__14859 = G__14866;
chunk__14860 = G__14867;
count__14861 = G__14868;
i__14862 = G__14869;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq(seq__14859);
if(temp__4657__auto__){
var seq__14859__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14859__$1)){
var c__7368__auto__ = cljs.core.chunk_first(seq__14859__$1);
var G__14870 = cljs.core.chunk_rest(seq__14859__$1);
var G__14871 = c__7368__auto__;
var G__14872 = cljs.core.count(c__7368__auto__);
var G__14873 = (0);
seq__14859 = G__14870;
chunk__14860 = G__14871;
count__14861 = G__14872;
i__14862 = G__14873;
continue;
} else {
var i = cljs.core.first(seq__14859__$1);
var e_14874 = (function (){var or__6557__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__6557__auto__)){
return or__6557__auto__;
} else {
var G__14864 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__14864) : tpl.call(null,G__14864));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_14874);

var G__14875 = cljs.core.next(seq__14859__$1);
var G__14876 = null;
var G__14877 = (0);
var G__14878 = (0);
seq__14859 = G__14875;
chunk__14860 = G__14876;
count__14861 = G__14877;
i__14862 = G__14878;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__7472__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__7472__auto__)){
var e_14879 = cljs.core.peek((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(current) : cljs.core.deref.call(null,current)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_14879);

var G__14880 = (_ + (1));
_ = G__14880;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__7639__auto__ = [];
var len__7632__auto___14891 = arguments.length;
var i__7633__auto___14892 = (0);
while(true){
if((i__7633__auto___14892 < len__7632__auto___14891)){
args__7639__auto__.push((arguments[i__7633__auto___14892]));

var G__14893 = (i__7633__auto___14892 + (1));
i__7633__auto___14892 = G__14893;
continue;
} else {
}
break;
}

var argseq__7640__auto__ = ((((0) < args__7639__auto__.length))?(new cljs.core.IndexedSeq(args__7639__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__7640__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__14882){
var vec__14883 = p__14882;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14883,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = javelin.core.formula(((function (c,vec__14883,default$){
return (function (G__14886,G__14888,G__14887){
var or__6557__auto__ = (function (){var and__6545__auto__ = (G__14886.cljs$core$IFn$_invoke$arity$1 ? G__14886.cljs$core$IFn$_invoke$arity$1(G__14887) : G__14886.call(null,G__14887));
if(cljs.core.truth_(and__6545__auto__)){
return G__14887;
} else {
return and__6545__auto__;
}
})();
if(cljs.core.truth_(or__6557__auto__)){
return or__6557__auto__;
} else {
return G__14888;
}
});})(c,vec__14883,default$))
).call(null,cljs.core.seq,default$,c);
jQuery(window).on("hashchange",((function (_,c,vec__14883,default$){
return (function (){
var G__14889 = c;
var G__14890 = window.location.hash;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__14889,G__14890) : cljs.core.reset_BANG_.call(null,G__14889,G__14890));
});})(_,c,vec__14883,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq14881){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq14881));
});

