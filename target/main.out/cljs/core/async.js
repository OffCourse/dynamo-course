// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args8998 = [];
var len__7513__auto___9004 = arguments.length;
var i__7514__auto___9005 = (0);
while(true){
if((i__7514__auto___9005 < len__7513__auto___9004)){
args8998.push((arguments[i__7514__auto___9005]));

var G__9006 = (i__7514__auto___9005 + (1));
i__7514__auto___9005 = G__9006;
continue;
} else {
}
break;
}

var G__9000 = args8998.length;
switch (G__9000) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args8998.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async9001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9001 = (function (f,blockable,meta9002){
this.f = f;
this.blockable = blockable;
this.meta9002 = meta9002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9003,meta9002__$1){
var self__ = this;
var _9003__$1 = this;
return (new cljs.core.async.t_cljs$core$async9001(self__.f,self__.blockable,meta9002__$1));
});

cljs.core.async.t_cljs$core$async9001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9003){
var self__ = this;
var _9003__$1 = this;
return self__.meta9002;
});

cljs.core.async.t_cljs$core$async9001.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9001.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9001.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async9001.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async9001.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta9002","meta9002",-1704589318,null)], null);
});

cljs.core.async.t_cljs$core$async9001.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9001";

cljs.core.async.t_cljs$core$async9001.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async9001");
});

cljs.core.async.__GT_t_cljs$core$async9001 = (function cljs$core$async$__GT_t_cljs$core$async9001(f__$1,blockable__$1,meta9002){
return (new cljs.core.async.t_cljs$core$async9001(f__$1,blockable__$1,meta9002));
});

}

return (new cljs.core.async.t_cljs$core$async9001(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args9010 = [];
var len__7513__auto___9013 = arguments.length;
var i__7514__auto___9014 = (0);
while(true){
if((i__7514__auto___9014 < len__7513__auto___9013)){
args9010.push((arguments[i__7514__auto___9014]));

var G__9015 = (i__7514__auto___9014 + (1));
i__7514__auto___9014 = G__9015;
continue;
} else {
}
break;
}

var G__9012 = args9010.length;
switch (G__9012) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9010.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args9017 = [];
var len__7513__auto___9020 = arguments.length;
var i__7514__auto___9021 = (0);
while(true){
if((i__7514__auto___9021 < len__7513__auto___9020)){
args9017.push((arguments[i__7514__auto___9021]));

var G__9022 = (i__7514__auto___9021 + (1));
i__7514__auto___9021 = G__9022;
continue;
} else {
}
break;
}

var G__9019 = args9017.length;
switch (G__9019) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9017.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args9024 = [];
var len__7513__auto___9027 = arguments.length;
var i__7514__auto___9028 = (0);
while(true){
if((i__7514__auto___9028 < len__7513__auto___9027)){
args9024.push((arguments[i__7514__auto___9028]));

var G__9029 = (i__7514__auto___9028 + (1));
i__7514__auto___9028 = G__9029;
continue;
} else {
}
break;
}

var G__9026 = args9024.length;
switch (G__9026) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9024.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_9031 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_9031);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_9031,ret){
return (function (){
return fn1.call(null,val_9031);
});})(val_9031,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args9032 = [];
var len__7513__auto___9035 = arguments.length;
var i__7514__auto___9036 = (0);
while(true){
if((i__7514__auto___9036 < len__7513__auto___9035)){
args9032.push((arguments[i__7514__auto___9036]));

var G__9037 = (i__7514__auto___9036 + (1));
i__7514__auto___9036 = G__9037;
continue;
} else {
}
break;
}

var G__9034 = args9032.length;
switch (G__9034) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9032.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__7358__auto___9039 = n;
var x_9040 = (0);
while(true){
if((x_9040 < n__7358__auto___9039)){
(a[x_9040] = (0));

var G__9041 = (x_9040 + (1));
x_9040 = G__9041;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__9042 = (i + (1));
i = G__9042;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async9046 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9046 = (function (alt_flag,flag,meta9047){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta9047 = meta9047;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9046.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9048,meta9047__$1){
var self__ = this;
var _9048__$1 = this;
return (new cljs.core.async.t_cljs$core$async9046(self__.alt_flag,self__.flag,meta9047__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async9046.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9048){
var self__ = this;
var _9048__$1 = this;
return self__.meta9047;
});})(flag))
;

cljs.core.async.t_cljs$core$async9046.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9046.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async9046.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9046.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async9046.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta9047","meta9047",1160875109,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async9046.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9046.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9046";

cljs.core.async.t_cljs$core$async9046.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async9046");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async9046 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async9046(alt_flag__$1,flag__$1,meta9047){
return (new cljs.core.async.t_cljs$core$async9046(alt_flag__$1,flag__$1,meta9047));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async9046(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async9052 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async9052 = (function (alt_handler,flag,cb,meta9053){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta9053 = meta9053;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async9052.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9054,meta9053__$1){
var self__ = this;
var _9054__$1 = this;
return (new cljs.core.async.t_cljs$core$async9052(self__.alt_handler,self__.flag,self__.cb,meta9053__$1));
});

cljs.core.async.t_cljs$core$async9052.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9054){
var self__ = this;
var _9054__$1 = this;
return self__.meta9053;
});

cljs.core.async.t_cljs$core$async9052.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async9052.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async9052.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async9052.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async9052.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta9053","meta9053",-1200045369,null)], null);
});

cljs.core.async.t_cljs$core$async9052.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async9052.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async9052";

cljs.core.async.t_cljs$core$async9052.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async9052");
});

cljs.core.async.__GT_t_cljs$core$async9052 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async9052(alt_handler__$1,flag__$1,cb__$1,meta9053){
return (new cljs.core.async.t_cljs$core$async9052(alt_handler__$1,flag__$1,cb__$1,meta9053));
});

}

return (new cljs.core.async.t_cljs$core$async9052(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9055_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9055_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9056_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9056_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__6455__auto__ = wport;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return port;
}
})()], null));
} else {
var G__9057 = (i + (1));
i = G__9057;
continue;
}
} else {
return null;
}
break;
}
})();
var or__6455__auto__ = ret;
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__6443__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__6443__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__6443__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___9063 = arguments.length;
var i__7514__auto___9064 = (0);
while(true){
if((i__7514__auto___9064 < len__7513__auto___9063)){
args__7520__auto__.push((arguments[i__7514__auto___9064]));

var G__9065 = (i__7514__auto___9064 + (1));
i__7514__auto___9064 = G__9065;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((1) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7521__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__9060){
var map__9061 = p__9060;
var map__9061__$1 = ((((!((map__9061 == null)))?((((map__9061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9061):map__9061);
var opts = map__9061__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq9058){
var G__9059 = cljs.core.first.call(null,seq9058);
var seq9058__$1 = cljs.core.next.call(null,seq9058);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__9059,seq9058__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args9066 = [];
var len__7513__auto___9116 = arguments.length;
var i__7514__auto___9117 = (0);
while(true){
if((i__7514__auto___9117 < len__7513__auto___9116)){
args9066.push((arguments[i__7514__auto___9117]));

var G__9118 = (i__7514__auto___9117 + (1));
i__7514__auto___9117 = G__9118;
continue;
} else {
}
break;
}

var G__9068 = args9066.length;
switch (G__9068) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9066.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8953__auto___9120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto___9120){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto___9120){
return (function (state_9092){
var state_val_9093 = (state_9092[(1)]);
if((state_val_9093 === (7))){
var inst_9088 = (state_9092[(2)]);
var state_9092__$1 = state_9092;
var statearr_9094_9121 = state_9092__$1;
(statearr_9094_9121[(2)] = inst_9088);

(statearr_9094_9121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9093 === (1))){
var state_9092__$1 = state_9092;
var statearr_9095_9122 = state_9092__$1;
(statearr_9095_9122[(2)] = null);

(statearr_9095_9122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9093 === (4))){
var inst_9071 = (state_9092[(7)]);
var inst_9071__$1 = (state_9092[(2)]);
var inst_9072 = (inst_9071__$1 == null);
var state_9092__$1 = (function (){var statearr_9096 = state_9092;
(statearr_9096[(7)] = inst_9071__$1);

return statearr_9096;
})();
if(cljs.core.truth_(inst_9072)){
var statearr_9097_9123 = state_9092__$1;
(statearr_9097_9123[(1)] = (5));

} else {
var statearr_9098_9124 = state_9092__$1;
(statearr_9098_9124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9093 === (13))){
var state_9092__$1 = state_9092;
var statearr_9099_9125 = state_9092__$1;
(statearr_9099_9125[(2)] = null);

(statearr_9099_9125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9093 === (6))){
var inst_9071 = (state_9092[(7)]);
var state_9092__$1 = state_9092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9092__$1,(11),to,inst_9071);
} else {
if((state_val_9093 === (3))){
var inst_9090 = (state_9092[(2)]);
var state_9092__$1 = state_9092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9092__$1,inst_9090);
} else {
if((state_val_9093 === (12))){
var state_9092__$1 = state_9092;
var statearr_9100_9126 = state_9092__$1;
(statearr_9100_9126[(2)] = null);

(statearr_9100_9126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9093 === (2))){
var state_9092__$1 = state_9092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9092__$1,(4),from);
} else {
if((state_val_9093 === (11))){
var inst_9081 = (state_9092[(2)]);
var state_9092__$1 = state_9092;
if(cljs.core.truth_(inst_9081)){
var statearr_9101_9127 = state_9092__$1;
(statearr_9101_9127[(1)] = (12));

} else {
var statearr_9102_9128 = state_9092__$1;
(statearr_9102_9128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9093 === (9))){
var state_9092__$1 = state_9092;
var statearr_9103_9129 = state_9092__$1;
(statearr_9103_9129[(2)] = null);

(statearr_9103_9129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9093 === (5))){
var state_9092__$1 = state_9092;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9104_9130 = state_9092__$1;
(statearr_9104_9130[(1)] = (8));

} else {
var statearr_9105_9131 = state_9092__$1;
(statearr_9105_9131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9093 === (14))){
var inst_9086 = (state_9092[(2)]);
var state_9092__$1 = state_9092;
var statearr_9106_9132 = state_9092__$1;
(statearr_9106_9132[(2)] = inst_9086);

(statearr_9106_9132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9093 === (10))){
var inst_9078 = (state_9092[(2)]);
var state_9092__$1 = state_9092;
var statearr_9107_9133 = state_9092__$1;
(statearr_9107_9133[(2)] = inst_9078);

(statearr_9107_9133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9093 === (8))){
var inst_9075 = cljs.core.async.close_BANG_.call(null,to);
var state_9092__$1 = state_9092;
var statearr_9108_9134 = state_9092__$1;
(statearr_9108_9134[(2)] = inst_9075);

(statearr_9108_9134[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__8953__auto___9120))
;
return ((function (switch__8841__auto__,c__8953__auto___9120){
return (function() {
var cljs$core$async$state_machine__8842__auto__ = null;
var cljs$core$async$state_machine__8842__auto____0 = (function (){
var statearr_9112 = [null,null,null,null,null,null,null,null];
(statearr_9112[(0)] = cljs$core$async$state_machine__8842__auto__);

(statearr_9112[(1)] = (1));

return statearr_9112;
});
var cljs$core$async$state_machine__8842__auto____1 = (function (state_9092){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_9092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e9113){if((e9113 instanceof Object)){
var ex__8845__auto__ = e9113;
var statearr_9114_9135 = state_9092;
(statearr_9114_9135[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9136 = state_9092;
state_9092 = G__9136;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$state_machine__8842__auto__ = function(state_9092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8842__auto____1.call(this,state_9092);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8842__auto____0;
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8842__auto____1;
return cljs$core$async$state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto___9120))
})();
var state__8955__auto__ = (function (){var statearr_9115 = f__8954__auto__.call(null);
(statearr_9115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto___9120);

return statearr_9115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto___9120))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__9320){
var vec__9321 = p__9320;
var v = cljs.core.nth.call(null,vec__9321,(0),null);
var p = cljs.core.nth.call(null,vec__9321,(1),null);
var job = vec__9321;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8953__auto___9503 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto___9503,res,vec__9321,v,p,job,jobs,results){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto___9503,res,vec__9321,v,p,job,jobs,results){
return (function (state_9326){
var state_val_9327 = (state_9326[(1)]);
if((state_val_9327 === (1))){
var state_9326__$1 = state_9326;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9326__$1,(2),res,v);
} else {
if((state_val_9327 === (2))){
var inst_9323 = (state_9326[(2)]);
var inst_9324 = cljs.core.async.close_BANG_.call(null,res);
var state_9326__$1 = (function (){var statearr_9328 = state_9326;
(statearr_9328[(7)] = inst_9323);

return statearr_9328;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9326__$1,inst_9324);
} else {
return null;
}
}
});})(c__8953__auto___9503,res,vec__9321,v,p,job,jobs,results))
;
return ((function (switch__8841__auto__,c__8953__auto___9503,res,vec__9321,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____0 = (function (){
var statearr_9332 = [null,null,null,null,null,null,null,null];
(statearr_9332[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__);

(statearr_9332[(1)] = (1));

return statearr_9332;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____1 = (function (state_9326){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_9326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e9333){if((e9333 instanceof Object)){
var ex__8845__auto__ = e9333;
var statearr_9334_9504 = state_9326;
(statearr_9334_9504[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9505 = state_9326;
state_9326 = G__9505;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__ = function(state_9326){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____1.call(this,state_9326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto___9503,res,vec__9321,v,p,job,jobs,results))
})();
var state__8955__auto__ = (function (){var statearr_9335 = f__8954__auto__.call(null);
(statearr_9335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto___9503);

return statearr_9335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto___9503,res,vec__9321,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__9336){
var vec__9337 = p__9336;
var v = cljs.core.nth.call(null,vec__9337,(0),null);
var p = cljs.core.nth.call(null,vec__9337,(1),null);
var job = vec__9337;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__7358__auto___9506 = n;
var __9507 = (0);
while(true){
if((__9507 < n__7358__auto___9506)){
var G__9338_9508 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__9338_9508) {
case "compute":
var c__8953__auto___9510 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9507,c__8953__auto___9510,G__9338_9508,n__7358__auto___9506,jobs,results,process,async){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (__9507,c__8953__auto___9510,G__9338_9508,n__7358__auto___9506,jobs,results,process,async){
return (function (state_9351){
var state_val_9352 = (state_9351[(1)]);
if((state_val_9352 === (1))){
var state_9351__$1 = state_9351;
var statearr_9353_9511 = state_9351__$1;
(statearr_9353_9511[(2)] = null);

(statearr_9353_9511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9352 === (2))){
var state_9351__$1 = state_9351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9351__$1,(4),jobs);
} else {
if((state_val_9352 === (3))){
var inst_9349 = (state_9351[(2)]);
var state_9351__$1 = state_9351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9351__$1,inst_9349);
} else {
if((state_val_9352 === (4))){
var inst_9341 = (state_9351[(2)]);
var inst_9342 = process.call(null,inst_9341);
var state_9351__$1 = state_9351;
if(cljs.core.truth_(inst_9342)){
var statearr_9354_9512 = state_9351__$1;
(statearr_9354_9512[(1)] = (5));

} else {
var statearr_9355_9513 = state_9351__$1;
(statearr_9355_9513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9352 === (5))){
var state_9351__$1 = state_9351;
var statearr_9356_9514 = state_9351__$1;
(statearr_9356_9514[(2)] = null);

(statearr_9356_9514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9352 === (6))){
var state_9351__$1 = state_9351;
var statearr_9357_9515 = state_9351__$1;
(statearr_9357_9515[(2)] = null);

(statearr_9357_9515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9352 === (7))){
var inst_9347 = (state_9351[(2)]);
var state_9351__$1 = state_9351;
var statearr_9358_9516 = state_9351__$1;
(statearr_9358_9516[(2)] = inst_9347);

(statearr_9358_9516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9507,c__8953__auto___9510,G__9338_9508,n__7358__auto___9506,jobs,results,process,async))
;
return ((function (__9507,switch__8841__auto__,c__8953__auto___9510,G__9338_9508,n__7358__auto___9506,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____0 = (function (){
var statearr_9362 = [null,null,null,null,null,null,null];
(statearr_9362[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__);

(statearr_9362[(1)] = (1));

return statearr_9362;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____1 = (function (state_9351){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_9351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e9363){if((e9363 instanceof Object)){
var ex__8845__auto__ = e9363;
var statearr_9364_9517 = state_9351;
(statearr_9364_9517[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9518 = state_9351;
state_9351 = G__9518;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__ = function(state_9351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____1.call(this,state_9351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__;
})()
;})(__9507,switch__8841__auto__,c__8953__auto___9510,G__9338_9508,n__7358__auto___9506,jobs,results,process,async))
})();
var state__8955__auto__ = (function (){var statearr_9365 = f__8954__auto__.call(null);
(statearr_9365[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto___9510);

return statearr_9365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(__9507,c__8953__auto___9510,G__9338_9508,n__7358__auto___9506,jobs,results,process,async))
);


break;
case "async":
var c__8953__auto___9519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__9507,c__8953__auto___9519,G__9338_9508,n__7358__auto___9506,jobs,results,process,async){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (__9507,c__8953__auto___9519,G__9338_9508,n__7358__auto___9506,jobs,results,process,async){
return (function (state_9378){
var state_val_9379 = (state_9378[(1)]);
if((state_val_9379 === (1))){
var state_9378__$1 = state_9378;
var statearr_9380_9520 = state_9378__$1;
(statearr_9380_9520[(2)] = null);

(statearr_9380_9520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9379 === (2))){
var state_9378__$1 = state_9378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9378__$1,(4),jobs);
} else {
if((state_val_9379 === (3))){
var inst_9376 = (state_9378[(2)]);
var state_9378__$1 = state_9378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9378__$1,inst_9376);
} else {
if((state_val_9379 === (4))){
var inst_9368 = (state_9378[(2)]);
var inst_9369 = async.call(null,inst_9368);
var state_9378__$1 = state_9378;
if(cljs.core.truth_(inst_9369)){
var statearr_9381_9521 = state_9378__$1;
(statearr_9381_9521[(1)] = (5));

} else {
var statearr_9382_9522 = state_9378__$1;
(statearr_9382_9522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9379 === (5))){
var state_9378__$1 = state_9378;
var statearr_9383_9523 = state_9378__$1;
(statearr_9383_9523[(2)] = null);

(statearr_9383_9523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9379 === (6))){
var state_9378__$1 = state_9378;
var statearr_9384_9524 = state_9378__$1;
(statearr_9384_9524[(2)] = null);

(statearr_9384_9524[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9379 === (7))){
var inst_9374 = (state_9378[(2)]);
var state_9378__$1 = state_9378;
var statearr_9385_9525 = state_9378__$1;
(statearr_9385_9525[(2)] = inst_9374);

(statearr_9385_9525[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__9507,c__8953__auto___9519,G__9338_9508,n__7358__auto___9506,jobs,results,process,async))
;
return ((function (__9507,switch__8841__auto__,c__8953__auto___9519,G__9338_9508,n__7358__auto___9506,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____0 = (function (){
var statearr_9389 = [null,null,null,null,null,null,null];
(statearr_9389[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__);

(statearr_9389[(1)] = (1));

return statearr_9389;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____1 = (function (state_9378){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_9378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e9390){if((e9390 instanceof Object)){
var ex__8845__auto__ = e9390;
var statearr_9391_9526 = state_9378;
(statearr_9391_9526[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9390;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9527 = state_9378;
state_9378 = G__9527;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__ = function(state_9378){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____1.call(this,state_9378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__;
})()
;})(__9507,switch__8841__auto__,c__8953__auto___9519,G__9338_9508,n__7358__auto___9506,jobs,results,process,async))
})();
var state__8955__auto__ = (function (){var statearr_9392 = f__8954__auto__.call(null);
(statearr_9392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto___9519);

return statearr_9392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(__9507,c__8953__auto___9519,G__9338_9508,n__7358__auto___9506,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__9528 = (__9507 + (1));
__9507 = G__9528;
continue;
} else {
}
break;
}

var c__8953__auto___9529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto___9529,jobs,results,process,async){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto___9529,jobs,results,process,async){
return (function (state_9414){
var state_val_9415 = (state_9414[(1)]);
if((state_val_9415 === (1))){
var state_9414__$1 = state_9414;
var statearr_9416_9530 = state_9414__$1;
(statearr_9416_9530[(2)] = null);

(statearr_9416_9530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9415 === (2))){
var state_9414__$1 = state_9414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9414__$1,(4),from);
} else {
if((state_val_9415 === (3))){
var inst_9412 = (state_9414[(2)]);
var state_9414__$1 = state_9414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9414__$1,inst_9412);
} else {
if((state_val_9415 === (4))){
var inst_9395 = (state_9414[(7)]);
var inst_9395__$1 = (state_9414[(2)]);
var inst_9396 = (inst_9395__$1 == null);
var state_9414__$1 = (function (){var statearr_9417 = state_9414;
(statearr_9417[(7)] = inst_9395__$1);

return statearr_9417;
})();
if(cljs.core.truth_(inst_9396)){
var statearr_9418_9531 = state_9414__$1;
(statearr_9418_9531[(1)] = (5));

} else {
var statearr_9419_9532 = state_9414__$1;
(statearr_9419_9532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9415 === (5))){
var inst_9398 = cljs.core.async.close_BANG_.call(null,jobs);
var state_9414__$1 = state_9414;
var statearr_9420_9533 = state_9414__$1;
(statearr_9420_9533[(2)] = inst_9398);

(statearr_9420_9533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9415 === (6))){
var inst_9400 = (state_9414[(8)]);
var inst_9395 = (state_9414[(7)]);
var inst_9400__$1 = cljs.core.async.chan.call(null,(1));
var inst_9401 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_9402 = [inst_9395,inst_9400__$1];
var inst_9403 = (new cljs.core.PersistentVector(null,2,(5),inst_9401,inst_9402,null));
var state_9414__$1 = (function (){var statearr_9421 = state_9414;
(statearr_9421[(8)] = inst_9400__$1);

return statearr_9421;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9414__$1,(8),jobs,inst_9403);
} else {
if((state_val_9415 === (7))){
var inst_9410 = (state_9414[(2)]);
var state_9414__$1 = state_9414;
var statearr_9422_9534 = state_9414__$1;
(statearr_9422_9534[(2)] = inst_9410);

(statearr_9422_9534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9415 === (8))){
var inst_9400 = (state_9414[(8)]);
var inst_9405 = (state_9414[(2)]);
var state_9414__$1 = (function (){var statearr_9423 = state_9414;
(statearr_9423[(9)] = inst_9405);

return statearr_9423;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9414__$1,(9),results,inst_9400);
} else {
if((state_val_9415 === (9))){
var inst_9407 = (state_9414[(2)]);
var state_9414__$1 = (function (){var statearr_9424 = state_9414;
(statearr_9424[(10)] = inst_9407);

return statearr_9424;
})();
var statearr_9425_9535 = state_9414__$1;
(statearr_9425_9535[(2)] = null);

(statearr_9425_9535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});})(c__8953__auto___9529,jobs,results,process,async))
;
return ((function (switch__8841__auto__,c__8953__auto___9529,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____0 = (function (){
var statearr_9429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_9429[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__);

(statearr_9429[(1)] = (1));

return statearr_9429;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____1 = (function (state_9414){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_9414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e9430){if((e9430 instanceof Object)){
var ex__8845__auto__ = e9430;
var statearr_9431_9536 = state_9414;
(statearr_9431_9536[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9537 = state_9414;
state_9414 = G__9537;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__ = function(state_9414){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____1.call(this,state_9414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto___9529,jobs,results,process,async))
})();
var state__8955__auto__ = (function (){var statearr_9432 = f__8954__auto__.call(null);
(statearr_9432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto___9529);

return statearr_9432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto___9529,jobs,results,process,async))
);


var c__8953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto__,jobs,results,process,async){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto__,jobs,results,process,async){
return (function (state_9470){
var state_val_9471 = (state_9470[(1)]);
if((state_val_9471 === (7))){
var inst_9466 = (state_9470[(2)]);
var state_9470__$1 = state_9470;
var statearr_9472_9538 = state_9470__$1;
(statearr_9472_9538[(2)] = inst_9466);

(statearr_9472_9538[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9471 === (20))){
var state_9470__$1 = state_9470;
var statearr_9473_9539 = state_9470__$1;
(statearr_9473_9539[(2)] = null);

(statearr_9473_9539[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9471 === (1))){
var state_9470__$1 = state_9470;
var statearr_9474_9540 = state_9470__$1;
(statearr_9474_9540[(2)] = null);

(statearr_9474_9540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9471 === (4))){
var inst_9435 = (state_9470[(7)]);
var inst_9435__$1 = (state_9470[(2)]);
var inst_9436 = (inst_9435__$1 == null);
var state_9470__$1 = (function (){var statearr_9475 = state_9470;
(statearr_9475[(7)] = inst_9435__$1);

return statearr_9475;
})();
if(cljs.core.truth_(inst_9436)){
var statearr_9476_9541 = state_9470__$1;
(statearr_9476_9541[(1)] = (5));

} else {
var statearr_9477_9542 = state_9470__$1;
(statearr_9477_9542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9471 === (15))){
var inst_9448 = (state_9470[(8)]);
var state_9470__$1 = state_9470;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9470__$1,(18),to,inst_9448);
} else {
if((state_val_9471 === (21))){
var inst_9461 = (state_9470[(2)]);
var state_9470__$1 = state_9470;
var statearr_9478_9543 = state_9470__$1;
(statearr_9478_9543[(2)] = inst_9461);

(statearr_9478_9543[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9471 === (13))){
var inst_9463 = (state_9470[(2)]);
var state_9470__$1 = (function (){var statearr_9479 = state_9470;
(statearr_9479[(9)] = inst_9463);

return statearr_9479;
})();
var statearr_9480_9544 = state_9470__$1;
(statearr_9480_9544[(2)] = null);

(statearr_9480_9544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9471 === (6))){
var inst_9435 = (state_9470[(7)]);
var state_9470__$1 = state_9470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9470__$1,(11),inst_9435);
} else {
if((state_val_9471 === (17))){
var inst_9456 = (state_9470[(2)]);
var state_9470__$1 = state_9470;
if(cljs.core.truth_(inst_9456)){
var statearr_9481_9545 = state_9470__$1;
(statearr_9481_9545[(1)] = (19));

} else {
var statearr_9482_9546 = state_9470__$1;
(statearr_9482_9546[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9471 === (3))){
var inst_9468 = (state_9470[(2)]);
var state_9470__$1 = state_9470;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9470__$1,inst_9468);
} else {
if((state_val_9471 === (12))){
var inst_9445 = (state_9470[(10)]);
var state_9470__$1 = state_9470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9470__$1,(14),inst_9445);
} else {
if((state_val_9471 === (2))){
var state_9470__$1 = state_9470;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9470__$1,(4),results);
} else {
if((state_val_9471 === (19))){
var state_9470__$1 = state_9470;
var statearr_9483_9547 = state_9470__$1;
(statearr_9483_9547[(2)] = null);

(statearr_9483_9547[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9471 === (11))){
var inst_9445 = (state_9470[(2)]);
var state_9470__$1 = (function (){var statearr_9484 = state_9470;
(statearr_9484[(10)] = inst_9445);

return statearr_9484;
})();
var statearr_9485_9548 = state_9470__$1;
(statearr_9485_9548[(2)] = null);

(statearr_9485_9548[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9471 === (9))){
var state_9470__$1 = state_9470;
var statearr_9486_9549 = state_9470__$1;
(statearr_9486_9549[(2)] = null);

(statearr_9486_9549[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9471 === (5))){
var state_9470__$1 = state_9470;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9487_9550 = state_9470__$1;
(statearr_9487_9550[(1)] = (8));

} else {
var statearr_9488_9551 = state_9470__$1;
(statearr_9488_9551[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9471 === (14))){
var inst_9448 = (state_9470[(8)]);
var inst_9450 = (state_9470[(11)]);
var inst_9448__$1 = (state_9470[(2)]);
var inst_9449 = (inst_9448__$1 == null);
var inst_9450__$1 = cljs.core.not.call(null,inst_9449);
var state_9470__$1 = (function (){var statearr_9489 = state_9470;
(statearr_9489[(8)] = inst_9448__$1);

(statearr_9489[(11)] = inst_9450__$1);

return statearr_9489;
})();
if(inst_9450__$1){
var statearr_9490_9552 = state_9470__$1;
(statearr_9490_9552[(1)] = (15));

} else {
var statearr_9491_9553 = state_9470__$1;
(statearr_9491_9553[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9471 === (16))){
var inst_9450 = (state_9470[(11)]);
var state_9470__$1 = state_9470;
var statearr_9492_9554 = state_9470__$1;
(statearr_9492_9554[(2)] = inst_9450);

(statearr_9492_9554[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9471 === (10))){
var inst_9442 = (state_9470[(2)]);
var state_9470__$1 = state_9470;
var statearr_9493_9555 = state_9470__$1;
(statearr_9493_9555[(2)] = inst_9442);

(statearr_9493_9555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9471 === (18))){
var inst_9453 = (state_9470[(2)]);
var state_9470__$1 = state_9470;
var statearr_9494_9556 = state_9470__$1;
(statearr_9494_9556[(2)] = inst_9453);

(statearr_9494_9556[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9471 === (8))){
var inst_9439 = cljs.core.async.close_BANG_.call(null,to);
var state_9470__$1 = state_9470;
var statearr_9495_9557 = state_9470__$1;
(statearr_9495_9557[(2)] = inst_9439);

(statearr_9495_9557[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8953__auto__,jobs,results,process,async))
;
return ((function (switch__8841__auto__,c__8953__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____0 = (function (){
var statearr_9499 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_9499[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__);

(statearr_9499[(1)] = (1));

return statearr_9499;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____1 = (function (state_9470){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_9470);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e9500){if((e9500 instanceof Object)){
var ex__8845__auto__ = e9500;
var statearr_9501_9558 = state_9470;
(statearr_9501_9558[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9470);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9500;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9559 = state_9470;
state_9470 = G__9559;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__ = function(state_9470){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____1.call(this,state_9470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8842__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto__,jobs,results,process,async))
})();
var state__8955__auto__ = (function (){var statearr_9502 = f__8954__auto__.call(null);
(statearr_9502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto__);

return statearr_9502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto__,jobs,results,process,async))
);

return c__8953__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args9560 = [];
var len__7513__auto___9563 = arguments.length;
var i__7514__auto___9564 = (0);
while(true){
if((i__7514__auto___9564 < len__7513__auto___9563)){
args9560.push((arguments[i__7514__auto___9564]));

var G__9565 = (i__7514__auto___9564 + (1));
i__7514__auto___9564 = G__9565;
continue;
} else {
}
break;
}

var G__9562 = args9560.length;
switch (G__9562) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9560.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args9567 = [];
var len__7513__auto___9570 = arguments.length;
var i__7514__auto___9571 = (0);
while(true){
if((i__7514__auto___9571 < len__7513__auto___9570)){
args9567.push((arguments[i__7514__auto___9571]));

var G__9572 = (i__7514__auto___9571 + (1));
i__7514__auto___9571 = G__9572;
continue;
} else {
}
break;
}

var G__9569 = args9567.length;
switch (G__9569) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9567.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args9574 = [];
var len__7513__auto___9627 = arguments.length;
var i__7514__auto___9628 = (0);
while(true){
if((i__7514__auto___9628 < len__7513__auto___9627)){
args9574.push((arguments[i__7514__auto___9628]));

var G__9629 = (i__7514__auto___9628 + (1));
i__7514__auto___9628 = G__9629;
continue;
} else {
}
break;
}

var G__9576 = args9574.length;
switch (G__9576) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9574.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8953__auto___9631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto___9631,tc,fc){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto___9631,tc,fc){
return (function (state_9602){
var state_val_9603 = (state_9602[(1)]);
if((state_val_9603 === (7))){
var inst_9598 = (state_9602[(2)]);
var state_9602__$1 = state_9602;
var statearr_9604_9632 = state_9602__$1;
(statearr_9604_9632[(2)] = inst_9598);

(statearr_9604_9632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9603 === (1))){
var state_9602__$1 = state_9602;
var statearr_9605_9633 = state_9602__$1;
(statearr_9605_9633[(2)] = null);

(statearr_9605_9633[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9603 === (4))){
var inst_9579 = (state_9602[(7)]);
var inst_9579__$1 = (state_9602[(2)]);
var inst_9580 = (inst_9579__$1 == null);
var state_9602__$1 = (function (){var statearr_9606 = state_9602;
(statearr_9606[(7)] = inst_9579__$1);

return statearr_9606;
})();
if(cljs.core.truth_(inst_9580)){
var statearr_9607_9634 = state_9602__$1;
(statearr_9607_9634[(1)] = (5));

} else {
var statearr_9608_9635 = state_9602__$1;
(statearr_9608_9635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9603 === (13))){
var state_9602__$1 = state_9602;
var statearr_9609_9636 = state_9602__$1;
(statearr_9609_9636[(2)] = null);

(statearr_9609_9636[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9603 === (6))){
var inst_9579 = (state_9602[(7)]);
var inst_9585 = p.call(null,inst_9579);
var state_9602__$1 = state_9602;
if(cljs.core.truth_(inst_9585)){
var statearr_9610_9637 = state_9602__$1;
(statearr_9610_9637[(1)] = (9));

} else {
var statearr_9611_9638 = state_9602__$1;
(statearr_9611_9638[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9603 === (3))){
var inst_9600 = (state_9602[(2)]);
var state_9602__$1 = state_9602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9602__$1,inst_9600);
} else {
if((state_val_9603 === (12))){
var state_9602__$1 = state_9602;
var statearr_9612_9639 = state_9602__$1;
(statearr_9612_9639[(2)] = null);

(statearr_9612_9639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9603 === (2))){
var state_9602__$1 = state_9602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9602__$1,(4),ch);
} else {
if((state_val_9603 === (11))){
var inst_9579 = (state_9602[(7)]);
var inst_9589 = (state_9602[(2)]);
var state_9602__$1 = state_9602;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9602__$1,(8),inst_9589,inst_9579);
} else {
if((state_val_9603 === (9))){
var state_9602__$1 = state_9602;
var statearr_9613_9640 = state_9602__$1;
(statearr_9613_9640[(2)] = tc);

(statearr_9613_9640[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9603 === (5))){
var inst_9582 = cljs.core.async.close_BANG_.call(null,tc);
var inst_9583 = cljs.core.async.close_BANG_.call(null,fc);
var state_9602__$1 = (function (){var statearr_9614 = state_9602;
(statearr_9614[(8)] = inst_9582);

return statearr_9614;
})();
var statearr_9615_9641 = state_9602__$1;
(statearr_9615_9641[(2)] = inst_9583);

(statearr_9615_9641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9603 === (14))){
var inst_9596 = (state_9602[(2)]);
var state_9602__$1 = state_9602;
var statearr_9616_9642 = state_9602__$1;
(statearr_9616_9642[(2)] = inst_9596);

(statearr_9616_9642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9603 === (10))){
var state_9602__$1 = state_9602;
var statearr_9617_9643 = state_9602__$1;
(statearr_9617_9643[(2)] = fc);

(statearr_9617_9643[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9603 === (8))){
var inst_9591 = (state_9602[(2)]);
var state_9602__$1 = state_9602;
if(cljs.core.truth_(inst_9591)){
var statearr_9618_9644 = state_9602__$1;
(statearr_9618_9644[(1)] = (12));

} else {
var statearr_9619_9645 = state_9602__$1;
(statearr_9619_9645[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});})(c__8953__auto___9631,tc,fc))
;
return ((function (switch__8841__auto__,c__8953__auto___9631,tc,fc){
return (function() {
var cljs$core$async$state_machine__8842__auto__ = null;
var cljs$core$async$state_machine__8842__auto____0 = (function (){
var statearr_9623 = [null,null,null,null,null,null,null,null,null];
(statearr_9623[(0)] = cljs$core$async$state_machine__8842__auto__);

(statearr_9623[(1)] = (1));

return statearr_9623;
});
var cljs$core$async$state_machine__8842__auto____1 = (function (state_9602){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_9602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e9624){if((e9624 instanceof Object)){
var ex__8845__auto__ = e9624;
var statearr_9625_9646 = state_9602;
(statearr_9625_9646[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9624;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9647 = state_9602;
state_9602 = G__9647;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$state_machine__8842__auto__ = function(state_9602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8842__auto____1.call(this,state_9602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8842__auto____0;
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8842__auto____1;
return cljs$core$async$state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto___9631,tc,fc))
})();
var state__8955__auto__ = (function (){var statearr_9626 = f__8954__auto__.call(null);
(statearr_9626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto___9631);

return statearr_9626;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto___9631,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto__){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto__){
return (function (state_9711){
var state_val_9712 = (state_9711[(1)]);
if((state_val_9712 === (7))){
var inst_9707 = (state_9711[(2)]);
var state_9711__$1 = state_9711;
var statearr_9713_9734 = state_9711__$1;
(statearr_9713_9734[(2)] = inst_9707);

(statearr_9713_9734[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9712 === (1))){
var inst_9691 = init;
var state_9711__$1 = (function (){var statearr_9714 = state_9711;
(statearr_9714[(7)] = inst_9691);

return statearr_9714;
})();
var statearr_9715_9735 = state_9711__$1;
(statearr_9715_9735[(2)] = null);

(statearr_9715_9735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9712 === (4))){
var inst_9694 = (state_9711[(8)]);
var inst_9694__$1 = (state_9711[(2)]);
var inst_9695 = (inst_9694__$1 == null);
var state_9711__$1 = (function (){var statearr_9716 = state_9711;
(statearr_9716[(8)] = inst_9694__$1);

return statearr_9716;
})();
if(cljs.core.truth_(inst_9695)){
var statearr_9717_9736 = state_9711__$1;
(statearr_9717_9736[(1)] = (5));

} else {
var statearr_9718_9737 = state_9711__$1;
(statearr_9718_9737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9712 === (6))){
var inst_9694 = (state_9711[(8)]);
var inst_9691 = (state_9711[(7)]);
var inst_9698 = (state_9711[(9)]);
var inst_9698__$1 = f.call(null,inst_9691,inst_9694);
var inst_9699 = cljs.core.reduced_QMARK_.call(null,inst_9698__$1);
var state_9711__$1 = (function (){var statearr_9719 = state_9711;
(statearr_9719[(9)] = inst_9698__$1);

return statearr_9719;
})();
if(inst_9699){
var statearr_9720_9738 = state_9711__$1;
(statearr_9720_9738[(1)] = (8));

} else {
var statearr_9721_9739 = state_9711__$1;
(statearr_9721_9739[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9712 === (3))){
var inst_9709 = (state_9711[(2)]);
var state_9711__$1 = state_9711;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9711__$1,inst_9709);
} else {
if((state_val_9712 === (2))){
var state_9711__$1 = state_9711;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9711__$1,(4),ch);
} else {
if((state_val_9712 === (9))){
var inst_9698 = (state_9711[(9)]);
var inst_9691 = inst_9698;
var state_9711__$1 = (function (){var statearr_9722 = state_9711;
(statearr_9722[(7)] = inst_9691);

return statearr_9722;
})();
var statearr_9723_9740 = state_9711__$1;
(statearr_9723_9740[(2)] = null);

(statearr_9723_9740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9712 === (5))){
var inst_9691 = (state_9711[(7)]);
var state_9711__$1 = state_9711;
var statearr_9724_9741 = state_9711__$1;
(statearr_9724_9741[(2)] = inst_9691);

(statearr_9724_9741[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9712 === (10))){
var inst_9705 = (state_9711[(2)]);
var state_9711__$1 = state_9711;
var statearr_9725_9742 = state_9711__$1;
(statearr_9725_9742[(2)] = inst_9705);

(statearr_9725_9742[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9712 === (8))){
var inst_9698 = (state_9711[(9)]);
var inst_9701 = cljs.core.deref.call(null,inst_9698);
var state_9711__$1 = state_9711;
var statearr_9726_9743 = state_9711__$1;
(statearr_9726_9743[(2)] = inst_9701);

(statearr_9726_9743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});})(c__8953__auto__))
;
return ((function (switch__8841__auto__,c__8953__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8842__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8842__auto____0 = (function (){
var statearr_9730 = [null,null,null,null,null,null,null,null,null,null];
(statearr_9730[(0)] = cljs$core$async$reduce_$_state_machine__8842__auto__);

(statearr_9730[(1)] = (1));

return statearr_9730;
});
var cljs$core$async$reduce_$_state_machine__8842__auto____1 = (function (state_9711){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_9711);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e9731){if((e9731 instanceof Object)){
var ex__8845__auto__ = e9731;
var statearr_9732_9744 = state_9711;
(statearr_9732_9744[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9711);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9745 = state_9711;
state_9711 = G__9745;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8842__auto__ = function(state_9711){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8842__auto____1.call(this,state_9711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8842__auto____0;
cljs$core$async$reduce_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8842__auto____1;
return cljs$core$async$reduce_$_state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto__))
})();
var state__8955__auto__ = (function (){var statearr_9733 = f__8954__auto__.call(null);
(statearr_9733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto__);

return statearr_9733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto__))
);

return c__8953__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args9746 = [];
var len__7513__auto___9798 = arguments.length;
var i__7514__auto___9799 = (0);
while(true){
if((i__7514__auto___9799 < len__7513__auto___9798)){
args9746.push((arguments[i__7514__auto___9799]));

var G__9800 = (i__7514__auto___9799 + (1));
i__7514__auto___9799 = G__9800;
continue;
} else {
}
break;
}

var G__9748 = args9746.length;
switch (G__9748) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args9746.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto__){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto__){
return (function (state_9773){
var state_val_9774 = (state_9773[(1)]);
if((state_val_9774 === (7))){
var inst_9755 = (state_9773[(2)]);
var state_9773__$1 = state_9773;
var statearr_9775_9802 = state_9773__$1;
(statearr_9775_9802[(2)] = inst_9755);

(statearr_9775_9802[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (1))){
var inst_9749 = cljs.core.seq.call(null,coll);
var inst_9750 = inst_9749;
var state_9773__$1 = (function (){var statearr_9776 = state_9773;
(statearr_9776[(7)] = inst_9750);

return statearr_9776;
})();
var statearr_9777_9803 = state_9773__$1;
(statearr_9777_9803[(2)] = null);

(statearr_9777_9803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (4))){
var inst_9750 = (state_9773[(7)]);
var inst_9753 = cljs.core.first.call(null,inst_9750);
var state_9773__$1 = state_9773;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9773__$1,(7),ch,inst_9753);
} else {
if((state_val_9774 === (13))){
var inst_9767 = (state_9773[(2)]);
var state_9773__$1 = state_9773;
var statearr_9778_9804 = state_9773__$1;
(statearr_9778_9804[(2)] = inst_9767);

(statearr_9778_9804[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (6))){
var inst_9758 = (state_9773[(2)]);
var state_9773__$1 = state_9773;
if(cljs.core.truth_(inst_9758)){
var statearr_9779_9805 = state_9773__$1;
(statearr_9779_9805[(1)] = (8));

} else {
var statearr_9780_9806 = state_9773__$1;
(statearr_9780_9806[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (3))){
var inst_9771 = (state_9773[(2)]);
var state_9773__$1 = state_9773;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9773__$1,inst_9771);
} else {
if((state_val_9774 === (12))){
var state_9773__$1 = state_9773;
var statearr_9781_9807 = state_9773__$1;
(statearr_9781_9807[(2)] = null);

(statearr_9781_9807[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (2))){
var inst_9750 = (state_9773[(7)]);
var state_9773__$1 = state_9773;
if(cljs.core.truth_(inst_9750)){
var statearr_9782_9808 = state_9773__$1;
(statearr_9782_9808[(1)] = (4));

} else {
var statearr_9783_9809 = state_9773__$1;
(statearr_9783_9809[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (11))){
var inst_9764 = cljs.core.async.close_BANG_.call(null,ch);
var state_9773__$1 = state_9773;
var statearr_9784_9810 = state_9773__$1;
(statearr_9784_9810[(2)] = inst_9764);

(statearr_9784_9810[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (9))){
var state_9773__$1 = state_9773;
if(cljs.core.truth_(close_QMARK_)){
var statearr_9785_9811 = state_9773__$1;
(statearr_9785_9811[(1)] = (11));

} else {
var statearr_9786_9812 = state_9773__$1;
(statearr_9786_9812[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (5))){
var inst_9750 = (state_9773[(7)]);
var state_9773__$1 = state_9773;
var statearr_9787_9813 = state_9773__$1;
(statearr_9787_9813[(2)] = inst_9750);

(statearr_9787_9813[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (10))){
var inst_9769 = (state_9773[(2)]);
var state_9773__$1 = state_9773;
var statearr_9788_9814 = state_9773__$1;
(statearr_9788_9814[(2)] = inst_9769);

(statearr_9788_9814[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_9774 === (8))){
var inst_9750 = (state_9773[(7)]);
var inst_9760 = cljs.core.next.call(null,inst_9750);
var inst_9750__$1 = inst_9760;
var state_9773__$1 = (function (){var statearr_9789 = state_9773;
(statearr_9789[(7)] = inst_9750__$1);

return statearr_9789;
})();
var statearr_9790_9815 = state_9773__$1;
(statearr_9790_9815[(2)] = null);

(statearr_9790_9815[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});})(c__8953__auto__))
;
return ((function (switch__8841__auto__,c__8953__auto__){
return (function() {
var cljs$core$async$state_machine__8842__auto__ = null;
var cljs$core$async$state_machine__8842__auto____0 = (function (){
var statearr_9794 = [null,null,null,null,null,null,null,null];
(statearr_9794[(0)] = cljs$core$async$state_machine__8842__auto__);

(statearr_9794[(1)] = (1));

return statearr_9794;
});
var cljs$core$async$state_machine__8842__auto____1 = (function (state_9773){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_9773);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e9795){if((e9795 instanceof Object)){
var ex__8845__auto__ = e9795;
var statearr_9796_9816 = state_9773;
(statearr_9796_9816[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9773);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e9795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__9817 = state_9773;
state_9773 = G__9817;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$state_machine__8842__auto__ = function(state_9773){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8842__auto____1.call(this,state_9773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8842__auto____0;
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8842__auto____1;
return cljs$core$async$state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto__))
})();
var state__8955__auto__ = (function (){var statearr_9797 = f__8954__auto__.call(null);
(statearr_9797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto__);

return statearr_9797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto__))
);

return c__8953__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__7110__auto__ = (((_ == null))?null:_);
var m__7111__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,_);
} else {
var m__7111__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__7110__auto__ = (((m == null))?null:m);
var m__7111__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__7111__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__7110__auto__ = (((m == null))?null:m);
var m__7111__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,m,ch);
} else {
var m__7111__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__7110__auto__ = (((m == null))?null:m);
var m__7111__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,m);
} else {
var m__7111__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10039 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10039 = (function (mult,ch,cs,meta10040){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta10040 = meta10040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10041,meta10040__$1){
var self__ = this;
var _10041__$1 = this;
return (new cljs.core.async.t_cljs$core$async10039(self__.mult,self__.ch,self__.cs,meta10040__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10041){
var self__ = this;
var _10041__$1 = this;
return self__.meta10040;
});})(cs))
;

cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10039.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async10039.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta10040","meta10040",1177524771,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async10039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10039";

cljs.core.async.t_cljs$core$async10039.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async10039");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async10039 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async10039(mult__$1,ch__$1,cs__$1,meta10040){
return (new cljs.core.async.t_cljs$core$async10039(mult__$1,ch__$1,cs__$1,meta10040));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async10039(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8953__auto___10260 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto___10260,cs,m,dchan,dctr,done){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto___10260,cs,m,dchan,dctr,done){
return (function (state_10172){
var state_val_10173 = (state_10172[(1)]);
if((state_val_10173 === (7))){
var inst_10168 = (state_10172[(2)]);
var state_10172__$1 = state_10172;
var statearr_10174_10261 = state_10172__$1;
(statearr_10174_10261[(2)] = inst_10168);

(statearr_10174_10261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (20))){
var inst_10073 = (state_10172[(7)]);
var inst_10083 = cljs.core.first.call(null,inst_10073);
var inst_10084 = cljs.core.nth.call(null,inst_10083,(0),null);
var inst_10085 = cljs.core.nth.call(null,inst_10083,(1),null);
var state_10172__$1 = (function (){var statearr_10175 = state_10172;
(statearr_10175[(8)] = inst_10084);

return statearr_10175;
})();
if(cljs.core.truth_(inst_10085)){
var statearr_10176_10262 = state_10172__$1;
(statearr_10176_10262[(1)] = (22));

} else {
var statearr_10177_10263 = state_10172__$1;
(statearr_10177_10263[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (27))){
var inst_10044 = (state_10172[(9)]);
var inst_10115 = (state_10172[(10)]);
var inst_10113 = (state_10172[(11)]);
var inst_10120 = (state_10172[(12)]);
var inst_10120__$1 = cljs.core._nth.call(null,inst_10113,inst_10115);
var inst_10121 = cljs.core.async.put_BANG_.call(null,inst_10120__$1,inst_10044,done);
var state_10172__$1 = (function (){var statearr_10178 = state_10172;
(statearr_10178[(12)] = inst_10120__$1);

return statearr_10178;
})();
if(cljs.core.truth_(inst_10121)){
var statearr_10179_10264 = state_10172__$1;
(statearr_10179_10264[(1)] = (30));

} else {
var statearr_10180_10265 = state_10172__$1;
(statearr_10180_10265[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (1))){
var state_10172__$1 = state_10172;
var statearr_10181_10266 = state_10172__$1;
(statearr_10181_10266[(2)] = null);

(statearr_10181_10266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (24))){
var inst_10073 = (state_10172[(7)]);
var inst_10090 = (state_10172[(2)]);
var inst_10091 = cljs.core.next.call(null,inst_10073);
var inst_10053 = inst_10091;
var inst_10054 = null;
var inst_10055 = (0);
var inst_10056 = (0);
var state_10172__$1 = (function (){var statearr_10182 = state_10172;
(statearr_10182[(13)] = inst_10053);

(statearr_10182[(14)] = inst_10054);

(statearr_10182[(15)] = inst_10055);

(statearr_10182[(16)] = inst_10056);

(statearr_10182[(17)] = inst_10090);

return statearr_10182;
})();
var statearr_10183_10267 = state_10172__$1;
(statearr_10183_10267[(2)] = null);

(statearr_10183_10267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (39))){
var state_10172__$1 = state_10172;
var statearr_10187_10268 = state_10172__$1;
(statearr_10187_10268[(2)] = null);

(statearr_10187_10268[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (4))){
var inst_10044 = (state_10172[(9)]);
var inst_10044__$1 = (state_10172[(2)]);
var inst_10045 = (inst_10044__$1 == null);
var state_10172__$1 = (function (){var statearr_10188 = state_10172;
(statearr_10188[(9)] = inst_10044__$1);

return statearr_10188;
})();
if(cljs.core.truth_(inst_10045)){
var statearr_10189_10269 = state_10172__$1;
(statearr_10189_10269[(1)] = (5));

} else {
var statearr_10190_10270 = state_10172__$1;
(statearr_10190_10270[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (15))){
var inst_10053 = (state_10172[(13)]);
var inst_10054 = (state_10172[(14)]);
var inst_10055 = (state_10172[(15)]);
var inst_10056 = (state_10172[(16)]);
var inst_10069 = (state_10172[(2)]);
var inst_10070 = (inst_10056 + (1));
var tmp10184 = inst_10053;
var tmp10185 = inst_10054;
var tmp10186 = inst_10055;
var inst_10053__$1 = tmp10184;
var inst_10054__$1 = tmp10185;
var inst_10055__$1 = tmp10186;
var inst_10056__$1 = inst_10070;
var state_10172__$1 = (function (){var statearr_10191 = state_10172;
(statearr_10191[(13)] = inst_10053__$1);

(statearr_10191[(14)] = inst_10054__$1);

(statearr_10191[(18)] = inst_10069);

(statearr_10191[(15)] = inst_10055__$1);

(statearr_10191[(16)] = inst_10056__$1);

return statearr_10191;
})();
var statearr_10192_10271 = state_10172__$1;
(statearr_10192_10271[(2)] = null);

(statearr_10192_10271[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (21))){
var inst_10094 = (state_10172[(2)]);
var state_10172__$1 = state_10172;
var statearr_10196_10272 = state_10172__$1;
(statearr_10196_10272[(2)] = inst_10094);

(statearr_10196_10272[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (31))){
var inst_10120 = (state_10172[(12)]);
var inst_10124 = done.call(null,null);
var inst_10125 = cljs.core.async.untap_STAR_.call(null,m,inst_10120);
var state_10172__$1 = (function (){var statearr_10197 = state_10172;
(statearr_10197[(19)] = inst_10124);

return statearr_10197;
})();
var statearr_10198_10273 = state_10172__$1;
(statearr_10198_10273[(2)] = inst_10125);

(statearr_10198_10273[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (32))){
var inst_10112 = (state_10172[(20)]);
var inst_10115 = (state_10172[(10)]);
var inst_10113 = (state_10172[(11)]);
var inst_10114 = (state_10172[(21)]);
var inst_10127 = (state_10172[(2)]);
var inst_10128 = (inst_10115 + (1));
var tmp10193 = inst_10112;
var tmp10194 = inst_10113;
var tmp10195 = inst_10114;
var inst_10112__$1 = tmp10193;
var inst_10113__$1 = tmp10194;
var inst_10114__$1 = tmp10195;
var inst_10115__$1 = inst_10128;
var state_10172__$1 = (function (){var statearr_10199 = state_10172;
(statearr_10199[(22)] = inst_10127);

(statearr_10199[(20)] = inst_10112__$1);

(statearr_10199[(10)] = inst_10115__$1);

(statearr_10199[(11)] = inst_10113__$1);

(statearr_10199[(21)] = inst_10114__$1);

return statearr_10199;
})();
var statearr_10200_10274 = state_10172__$1;
(statearr_10200_10274[(2)] = null);

(statearr_10200_10274[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (40))){
var inst_10140 = (state_10172[(23)]);
var inst_10144 = done.call(null,null);
var inst_10145 = cljs.core.async.untap_STAR_.call(null,m,inst_10140);
var state_10172__$1 = (function (){var statearr_10201 = state_10172;
(statearr_10201[(24)] = inst_10144);

return statearr_10201;
})();
var statearr_10202_10275 = state_10172__$1;
(statearr_10202_10275[(2)] = inst_10145);

(statearr_10202_10275[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (33))){
var inst_10131 = (state_10172[(25)]);
var inst_10133 = cljs.core.chunked_seq_QMARK_.call(null,inst_10131);
var state_10172__$1 = state_10172;
if(inst_10133){
var statearr_10203_10276 = state_10172__$1;
(statearr_10203_10276[(1)] = (36));

} else {
var statearr_10204_10277 = state_10172__$1;
(statearr_10204_10277[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (13))){
var inst_10063 = (state_10172[(26)]);
var inst_10066 = cljs.core.async.close_BANG_.call(null,inst_10063);
var state_10172__$1 = state_10172;
var statearr_10205_10278 = state_10172__$1;
(statearr_10205_10278[(2)] = inst_10066);

(statearr_10205_10278[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (22))){
var inst_10084 = (state_10172[(8)]);
var inst_10087 = cljs.core.async.close_BANG_.call(null,inst_10084);
var state_10172__$1 = state_10172;
var statearr_10206_10279 = state_10172__$1;
(statearr_10206_10279[(2)] = inst_10087);

(statearr_10206_10279[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (36))){
var inst_10131 = (state_10172[(25)]);
var inst_10135 = cljs.core.chunk_first.call(null,inst_10131);
var inst_10136 = cljs.core.chunk_rest.call(null,inst_10131);
var inst_10137 = cljs.core.count.call(null,inst_10135);
var inst_10112 = inst_10136;
var inst_10113 = inst_10135;
var inst_10114 = inst_10137;
var inst_10115 = (0);
var state_10172__$1 = (function (){var statearr_10207 = state_10172;
(statearr_10207[(20)] = inst_10112);

(statearr_10207[(10)] = inst_10115);

(statearr_10207[(11)] = inst_10113);

(statearr_10207[(21)] = inst_10114);

return statearr_10207;
})();
var statearr_10208_10280 = state_10172__$1;
(statearr_10208_10280[(2)] = null);

(statearr_10208_10280[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (41))){
var inst_10131 = (state_10172[(25)]);
var inst_10147 = (state_10172[(2)]);
var inst_10148 = cljs.core.next.call(null,inst_10131);
var inst_10112 = inst_10148;
var inst_10113 = null;
var inst_10114 = (0);
var inst_10115 = (0);
var state_10172__$1 = (function (){var statearr_10209 = state_10172;
(statearr_10209[(20)] = inst_10112);

(statearr_10209[(10)] = inst_10115);

(statearr_10209[(11)] = inst_10113);

(statearr_10209[(27)] = inst_10147);

(statearr_10209[(21)] = inst_10114);

return statearr_10209;
})();
var statearr_10210_10281 = state_10172__$1;
(statearr_10210_10281[(2)] = null);

(statearr_10210_10281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (43))){
var state_10172__$1 = state_10172;
var statearr_10211_10282 = state_10172__$1;
(statearr_10211_10282[(2)] = null);

(statearr_10211_10282[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (29))){
var inst_10156 = (state_10172[(2)]);
var state_10172__$1 = state_10172;
var statearr_10212_10283 = state_10172__$1;
(statearr_10212_10283[(2)] = inst_10156);

(statearr_10212_10283[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (44))){
var inst_10165 = (state_10172[(2)]);
var state_10172__$1 = (function (){var statearr_10213 = state_10172;
(statearr_10213[(28)] = inst_10165);

return statearr_10213;
})();
var statearr_10214_10284 = state_10172__$1;
(statearr_10214_10284[(2)] = null);

(statearr_10214_10284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (6))){
var inst_10104 = (state_10172[(29)]);
var inst_10103 = cljs.core.deref.call(null,cs);
var inst_10104__$1 = cljs.core.keys.call(null,inst_10103);
var inst_10105 = cljs.core.count.call(null,inst_10104__$1);
var inst_10106 = cljs.core.reset_BANG_.call(null,dctr,inst_10105);
var inst_10111 = cljs.core.seq.call(null,inst_10104__$1);
var inst_10112 = inst_10111;
var inst_10113 = null;
var inst_10114 = (0);
var inst_10115 = (0);
var state_10172__$1 = (function (){var statearr_10215 = state_10172;
(statearr_10215[(20)] = inst_10112);

(statearr_10215[(10)] = inst_10115);

(statearr_10215[(11)] = inst_10113);

(statearr_10215[(29)] = inst_10104__$1);

(statearr_10215[(21)] = inst_10114);

(statearr_10215[(30)] = inst_10106);

return statearr_10215;
})();
var statearr_10216_10285 = state_10172__$1;
(statearr_10216_10285[(2)] = null);

(statearr_10216_10285[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (28))){
var inst_10112 = (state_10172[(20)]);
var inst_10131 = (state_10172[(25)]);
var inst_10131__$1 = cljs.core.seq.call(null,inst_10112);
var state_10172__$1 = (function (){var statearr_10217 = state_10172;
(statearr_10217[(25)] = inst_10131__$1);

return statearr_10217;
})();
if(inst_10131__$1){
var statearr_10218_10286 = state_10172__$1;
(statearr_10218_10286[(1)] = (33));

} else {
var statearr_10219_10287 = state_10172__$1;
(statearr_10219_10287[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (25))){
var inst_10115 = (state_10172[(10)]);
var inst_10114 = (state_10172[(21)]);
var inst_10117 = (inst_10115 < inst_10114);
var inst_10118 = inst_10117;
var state_10172__$1 = state_10172;
if(cljs.core.truth_(inst_10118)){
var statearr_10220_10288 = state_10172__$1;
(statearr_10220_10288[(1)] = (27));

} else {
var statearr_10221_10289 = state_10172__$1;
(statearr_10221_10289[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (34))){
var state_10172__$1 = state_10172;
var statearr_10222_10290 = state_10172__$1;
(statearr_10222_10290[(2)] = null);

(statearr_10222_10290[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (17))){
var state_10172__$1 = state_10172;
var statearr_10223_10291 = state_10172__$1;
(statearr_10223_10291[(2)] = null);

(statearr_10223_10291[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (3))){
var inst_10170 = (state_10172[(2)]);
var state_10172__$1 = state_10172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10172__$1,inst_10170);
} else {
if((state_val_10173 === (12))){
var inst_10099 = (state_10172[(2)]);
var state_10172__$1 = state_10172;
var statearr_10224_10292 = state_10172__$1;
(statearr_10224_10292[(2)] = inst_10099);

(statearr_10224_10292[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (2))){
var state_10172__$1 = state_10172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10172__$1,(4),ch);
} else {
if((state_val_10173 === (23))){
var state_10172__$1 = state_10172;
var statearr_10225_10293 = state_10172__$1;
(statearr_10225_10293[(2)] = null);

(statearr_10225_10293[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (35))){
var inst_10154 = (state_10172[(2)]);
var state_10172__$1 = state_10172;
var statearr_10226_10294 = state_10172__$1;
(statearr_10226_10294[(2)] = inst_10154);

(statearr_10226_10294[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (19))){
var inst_10073 = (state_10172[(7)]);
var inst_10077 = cljs.core.chunk_first.call(null,inst_10073);
var inst_10078 = cljs.core.chunk_rest.call(null,inst_10073);
var inst_10079 = cljs.core.count.call(null,inst_10077);
var inst_10053 = inst_10078;
var inst_10054 = inst_10077;
var inst_10055 = inst_10079;
var inst_10056 = (0);
var state_10172__$1 = (function (){var statearr_10227 = state_10172;
(statearr_10227[(13)] = inst_10053);

(statearr_10227[(14)] = inst_10054);

(statearr_10227[(15)] = inst_10055);

(statearr_10227[(16)] = inst_10056);

return statearr_10227;
})();
var statearr_10228_10295 = state_10172__$1;
(statearr_10228_10295[(2)] = null);

(statearr_10228_10295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (11))){
var inst_10053 = (state_10172[(13)]);
var inst_10073 = (state_10172[(7)]);
var inst_10073__$1 = cljs.core.seq.call(null,inst_10053);
var state_10172__$1 = (function (){var statearr_10229 = state_10172;
(statearr_10229[(7)] = inst_10073__$1);

return statearr_10229;
})();
if(inst_10073__$1){
var statearr_10230_10296 = state_10172__$1;
(statearr_10230_10296[(1)] = (16));

} else {
var statearr_10231_10297 = state_10172__$1;
(statearr_10231_10297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (9))){
var inst_10101 = (state_10172[(2)]);
var state_10172__$1 = state_10172;
var statearr_10232_10298 = state_10172__$1;
(statearr_10232_10298[(2)] = inst_10101);

(statearr_10232_10298[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (5))){
var inst_10051 = cljs.core.deref.call(null,cs);
var inst_10052 = cljs.core.seq.call(null,inst_10051);
var inst_10053 = inst_10052;
var inst_10054 = null;
var inst_10055 = (0);
var inst_10056 = (0);
var state_10172__$1 = (function (){var statearr_10233 = state_10172;
(statearr_10233[(13)] = inst_10053);

(statearr_10233[(14)] = inst_10054);

(statearr_10233[(15)] = inst_10055);

(statearr_10233[(16)] = inst_10056);

return statearr_10233;
})();
var statearr_10234_10299 = state_10172__$1;
(statearr_10234_10299[(2)] = null);

(statearr_10234_10299[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (14))){
var state_10172__$1 = state_10172;
var statearr_10235_10300 = state_10172__$1;
(statearr_10235_10300[(2)] = null);

(statearr_10235_10300[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (45))){
var inst_10162 = (state_10172[(2)]);
var state_10172__$1 = state_10172;
var statearr_10236_10301 = state_10172__$1;
(statearr_10236_10301[(2)] = inst_10162);

(statearr_10236_10301[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (26))){
var inst_10104 = (state_10172[(29)]);
var inst_10158 = (state_10172[(2)]);
var inst_10159 = cljs.core.seq.call(null,inst_10104);
var state_10172__$1 = (function (){var statearr_10237 = state_10172;
(statearr_10237[(31)] = inst_10158);

return statearr_10237;
})();
if(inst_10159){
var statearr_10238_10302 = state_10172__$1;
(statearr_10238_10302[(1)] = (42));

} else {
var statearr_10239_10303 = state_10172__$1;
(statearr_10239_10303[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (16))){
var inst_10073 = (state_10172[(7)]);
var inst_10075 = cljs.core.chunked_seq_QMARK_.call(null,inst_10073);
var state_10172__$1 = state_10172;
if(inst_10075){
var statearr_10240_10304 = state_10172__$1;
(statearr_10240_10304[(1)] = (19));

} else {
var statearr_10241_10305 = state_10172__$1;
(statearr_10241_10305[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (38))){
var inst_10151 = (state_10172[(2)]);
var state_10172__$1 = state_10172;
var statearr_10242_10306 = state_10172__$1;
(statearr_10242_10306[(2)] = inst_10151);

(statearr_10242_10306[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (30))){
var state_10172__$1 = state_10172;
var statearr_10243_10307 = state_10172__$1;
(statearr_10243_10307[(2)] = null);

(statearr_10243_10307[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (10))){
var inst_10054 = (state_10172[(14)]);
var inst_10056 = (state_10172[(16)]);
var inst_10062 = cljs.core._nth.call(null,inst_10054,inst_10056);
var inst_10063 = cljs.core.nth.call(null,inst_10062,(0),null);
var inst_10064 = cljs.core.nth.call(null,inst_10062,(1),null);
var state_10172__$1 = (function (){var statearr_10244 = state_10172;
(statearr_10244[(26)] = inst_10063);

return statearr_10244;
})();
if(cljs.core.truth_(inst_10064)){
var statearr_10245_10308 = state_10172__$1;
(statearr_10245_10308[(1)] = (13));

} else {
var statearr_10246_10309 = state_10172__$1;
(statearr_10246_10309[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (18))){
var inst_10097 = (state_10172[(2)]);
var state_10172__$1 = state_10172;
var statearr_10247_10310 = state_10172__$1;
(statearr_10247_10310[(2)] = inst_10097);

(statearr_10247_10310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (42))){
var state_10172__$1 = state_10172;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10172__$1,(45),dchan);
} else {
if((state_val_10173 === (37))){
var inst_10044 = (state_10172[(9)]);
var inst_10140 = (state_10172[(23)]);
var inst_10131 = (state_10172[(25)]);
var inst_10140__$1 = cljs.core.first.call(null,inst_10131);
var inst_10141 = cljs.core.async.put_BANG_.call(null,inst_10140__$1,inst_10044,done);
var state_10172__$1 = (function (){var statearr_10248 = state_10172;
(statearr_10248[(23)] = inst_10140__$1);

return statearr_10248;
})();
if(cljs.core.truth_(inst_10141)){
var statearr_10249_10311 = state_10172__$1;
(statearr_10249_10311[(1)] = (39));

} else {
var statearr_10250_10312 = state_10172__$1;
(statearr_10250_10312[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10173 === (8))){
var inst_10055 = (state_10172[(15)]);
var inst_10056 = (state_10172[(16)]);
var inst_10058 = (inst_10056 < inst_10055);
var inst_10059 = inst_10058;
var state_10172__$1 = state_10172;
if(cljs.core.truth_(inst_10059)){
var statearr_10251_10313 = state_10172__$1;
(statearr_10251_10313[(1)] = (10));

} else {
var statearr_10252_10314 = state_10172__$1;
(statearr_10252_10314[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8953__auto___10260,cs,m,dchan,dctr,done))
;
return ((function (switch__8841__auto__,c__8953__auto___10260,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8842__auto__ = null;
var cljs$core$async$mult_$_state_machine__8842__auto____0 = (function (){
var statearr_10256 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10256[(0)] = cljs$core$async$mult_$_state_machine__8842__auto__);

(statearr_10256[(1)] = (1));

return statearr_10256;
});
var cljs$core$async$mult_$_state_machine__8842__auto____1 = (function (state_10172){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_10172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e10257){if((e10257 instanceof Object)){
var ex__8845__auto__ = e10257;
var statearr_10258_10315 = state_10172;
(statearr_10258_10315[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10172);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10257;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10316 = state_10172;
state_10172 = G__10316;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8842__auto__ = function(state_10172){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8842__auto____1.call(this,state_10172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8842__auto____0;
cljs$core$async$mult_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8842__auto____1;
return cljs$core$async$mult_$_state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto___10260,cs,m,dchan,dctr,done))
})();
var state__8955__auto__ = (function (){var statearr_10259 = f__8954__auto__.call(null);
(statearr_10259[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto___10260);

return statearr_10259;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto___10260,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args10317 = [];
var len__7513__auto___10320 = arguments.length;
var i__7514__auto___10321 = (0);
while(true){
if((i__7514__auto___10321 < len__7513__auto___10320)){
args10317.push((arguments[i__7514__auto___10321]));

var G__10322 = (i__7514__auto___10321 + (1));
i__7514__auto___10321 = G__10322;
continue;
} else {
}
break;
}

var G__10319 = args10317.length;
switch (G__10319) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10317.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__7110__auto__ = (((m == null))?null:m);
var m__7111__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,m,ch);
} else {
var m__7111__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__7110__auto__ = (((m == null))?null:m);
var m__7111__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,m,ch);
} else {
var m__7111__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__7110__auto__ = (((m == null))?null:m);
var m__7111__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,m);
} else {
var m__7111__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__7110__auto__ = (((m == null))?null:m);
var m__7111__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,m,state_map);
} else {
var m__7111__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__7110__auto__ = (((m == null))?null:m);
var m__7111__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,m,mode);
} else {
var m__7111__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__7520__auto__ = [];
var len__7513__auto___10334 = arguments.length;
var i__7514__auto___10335 = (0);
while(true){
if((i__7514__auto___10335 < len__7513__auto___10334)){
args__7520__auto__.push((arguments[i__7514__auto___10335]));

var G__10336 = (i__7514__auto___10335 + (1));
i__7514__auto___10335 = G__10336;
continue;
} else {
}
break;
}

var argseq__7521__auto__ = ((((3) < args__7520__auto__.length))?(new cljs.core.IndexedSeq(args__7520__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__7521__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__10328){
var map__10329 = p__10328;
var map__10329__$1 = ((((!((map__10329 == null)))?((((map__10329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10329):map__10329);
var opts = map__10329__$1;
var statearr_10331_10337 = state;
(statearr_10331_10337[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__10329,map__10329__$1,opts){
return (function (val){
var statearr_10332_10338 = state;
(statearr_10332_10338[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__10329,map__10329__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_10333_10339 = state;
(statearr_10333_10339[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq10324){
var G__10325 = cljs.core.first.call(null,seq10324);
var seq10324__$1 = cljs.core.next.call(null,seq10324);
var G__10326 = cljs.core.first.call(null,seq10324__$1);
var seq10324__$2 = cljs.core.next.call(null,seq10324__$1);
var G__10327 = cljs.core.first.call(null,seq10324__$2);
var seq10324__$3 = cljs.core.next.call(null,seq10324__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__10325,G__10326,G__10327,seq10324__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async10503 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10503 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta10504){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta10504 = meta10504;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10505,meta10504__$1){
var self__ = this;
var _10505__$1 = this;
return (new cljs.core.async.t_cljs$core$async10503(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta10504__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10503.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_10505){
var self__ = this;
var _10505__$1 = this;
return self__.meta10504;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10503.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10503.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10503.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async10503.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10503.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10503.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10503.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10503.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10503.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta10504","meta10504",2598305,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async10503.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10503.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10503";

cljs.core.async.t_cljs$core$async10503.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async10503");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async10503 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async10503(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10504){
return (new cljs.core.async.t_cljs$core$async10503(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta10504));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async10503(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8953__auto___10666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto___10666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto___10666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_10603){
var state_val_10604 = (state_10603[(1)]);
if((state_val_10604 === (7))){
var inst_10521 = (state_10603[(2)]);
var state_10603__$1 = state_10603;
var statearr_10605_10667 = state_10603__$1;
(statearr_10605_10667[(2)] = inst_10521);

(statearr_10605_10667[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (20))){
var inst_10533 = (state_10603[(7)]);
var state_10603__$1 = state_10603;
var statearr_10606_10668 = state_10603__$1;
(statearr_10606_10668[(2)] = inst_10533);

(statearr_10606_10668[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (27))){
var state_10603__$1 = state_10603;
var statearr_10607_10669 = state_10603__$1;
(statearr_10607_10669[(2)] = null);

(statearr_10607_10669[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (1))){
var inst_10509 = (state_10603[(8)]);
var inst_10509__$1 = calc_state.call(null);
var inst_10511 = (inst_10509__$1 == null);
var inst_10512 = cljs.core.not.call(null,inst_10511);
var state_10603__$1 = (function (){var statearr_10608 = state_10603;
(statearr_10608[(8)] = inst_10509__$1);

return statearr_10608;
})();
if(inst_10512){
var statearr_10609_10670 = state_10603__$1;
(statearr_10609_10670[(1)] = (2));

} else {
var statearr_10610_10671 = state_10603__$1;
(statearr_10610_10671[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (24))){
var inst_10556 = (state_10603[(9)]);
var inst_10563 = (state_10603[(10)]);
var inst_10577 = (state_10603[(11)]);
var inst_10577__$1 = inst_10556.call(null,inst_10563);
var state_10603__$1 = (function (){var statearr_10611 = state_10603;
(statearr_10611[(11)] = inst_10577__$1);

return statearr_10611;
})();
if(cljs.core.truth_(inst_10577__$1)){
var statearr_10612_10672 = state_10603__$1;
(statearr_10612_10672[(1)] = (29));

} else {
var statearr_10613_10673 = state_10603__$1;
(statearr_10613_10673[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (4))){
var inst_10524 = (state_10603[(2)]);
var state_10603__$1 = state_10603;
if(cljs.core.truth_(inst_10524)){
var statearr_10614_10674 = state_10603__$1;
(statearr_10614_10674[(1)] = (8));

} else {
var statearr_10615_10675 = state_10603__$1;
(statearr_10615_10675[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (15))){
var inst_10550 = (state_10603[(2)]);
var state_10603__$1 = state_10603;
if(cljs.core.truth_(inst_10550)){
var statearr_10616_10676 = state_10603__$1;
(statearr_10616_10676[(1)] = (19));

} else {
var statearr_10617_10677 = state_10603__$1;
(statearr_10617_10677[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (21))){
var inst_10555 = (state_10603[(12)]);
var inst_10555__$1 = (state_10603[(2)]);
var inst_10556 = cljs.core.get.call(null,inst_10555__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10557 = cljs.core.get.call(null,inst_10555__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10558 = cljs.core.get.call(null,inst_10555__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_10603__$1 = (function (){var statearr_10618 = state_10603;
(statearr_10618[(9)] = inst_10556);

(statearr_10618[(13)] = inst_10557);

(statearr_10618[(12)] = inst_10555__$1);

return statearr_10618;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_10603__$1,(22),inst_10558);
} else {
if((state_val_10604 === (31))){
var inst_10585 = (state_10603[(2)]);
var state_10603__$1 = state_10603;
if(cljs.core.truth_(inst_10585)){
var statearr_10619_10678 = state_10603__$1;
(statearr_10619_10678[(1)] = (32));

} else {
var statearr_10620_10679 = state_10603__$1;
(statearr_10620_10679[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (32))){
var inst_10562 = (state_10603[(14)]);
var state_10603__$1 = state_10603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10603__$1,(35),out,inst_10562);
} else {
if((state_val_10604 === (33))){
var inst_10555 = (state_10603[(12)]);
var inst_10533 = inst_10555;
var state_10603__$1 = (function (){var statearr_10621 = state_10603;
(statearr_10621[(7)] = inst_10533);

return statearr_10621;
})();
var statearr_10622_10680 = state_10603__$1;
(statearr_10622_10680[(2)] = null);

(statearr_10622_10680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (13))){
var inst_10533 = (state_10603[(7)]);
var inst_10540 = inst_10533.cljs$lang$protocol_mask$partition0$;
var inst_10541 = (inst_10540 & (64));
var inst_10542 = inst_10533.cljs$core$ISeq$;
var inst_10543 = (inst_10541) || (inst_10542);
var state_10603__$1 = state_10603;
if(cljs.core.truth_(inst_10543)){
var statearr_10623_10681 = state_10603__$1;
(statearr_10623_10681[(1)] = (16));

} else {
var statearr_10624_10682 = state_10603__$1;
(statearr_10624_10682[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (22))){
var inst_10562 = (state_10603[(14)]);
var inst_10563 = (state_10603[(10)]);
var inst_10561 = (state_10603[(2)]);
var inst_10562__$1 = cljs.core.nth.call(null,inst_10561,(0),null);
var inst_10563__$1 = cljs.core.nth.call(null,inst_10561,(1),null);
var inst_10564 = (inst_10562__$1 == null);
var inst_10565 = cljs.core._EQ_.call(null,inst_10563__$1,change);
var inst_10566 = (inst_10564) || (inst_10565);
var state_10603__$1 = (function (){var statearr_10625 = state_10603;
(statearr_10625[(14)] = inst_10562__$1);

(statearr_10625[(10)] = inst_10563__$1);

return statearr_10625;
})();
if(cljs.core.truth_(inst_10566)){
var statearr_10626_10683 = state_10603__$1;
(statearr_10626_10683[(1)] = (23));

} else {
var statearr_10627_10684 = state_10603__$1;
(statearr_10627_10684[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (36))){
var inst_10555 = (state_10603[(12)]);
var inst_10533 = inst_10555;
var state_10603__$1 = (function (){var statearr_10628 = state_10603;
(statearr_10628[(7)] = inst_10533);

return statearr_10628;
})();
var statearr_10629_10685 = state_10603__$1;
(statearr_10629_10685[(2)] = null);

(statearr_10629_10685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (29))){
var inst_10577 = (state_10603[(11)]);
var state_10603__$1 = state_10603;
var statearr_10630_10686 = state_10603__$1;
(statearr_10630_10686[(2)] = inst_10577);

(statearr_10630_10686[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (6))){
var state_10603__$1 = state_10603;
var statearr_10631_10687 = state_10603__$1;
(statearr_10631_10687[(2)] = false);

(statearr_10631_10687[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (28))){
var inst_10573 = (state_10603[(2)]);
var inst_10574 = calc_state.call(null);
var inst_10533 = inst_10574;
var state_10603__$1 = (function (){var statearr_10632 = state_10603;
(statearr_10632[(15)] = inst_10573);

(statearr_10632[(7)] = inst_10533);

return statearr_10632;
})();
var statearr_10633_10688 = state_10603__$1;
(statearr_10633_10688[(2)] = null);

(statearr_10633_10688[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (25))){
var inst_10599 = (state_10603[(2)]);
var state_10603__$1 = state_10603;
var statearr_10634_10689 = state_10603__$1;
(statearr_10634_10689[(2)] = inst_10599);

(statearr_10634_10689[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (34))){
var inst_10597 = (state_10603[(2)]);
var state_10603__$1 = state_10603;
var statearr_10635_10690 = state_10603__$1;
(statearr_10635_10690[(2)] = inst_10597);

(statearr_10635_10690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (17))){
var state_10603__$1 = state_10603;
var statearr_10636_10691 = state_10603__$1;
(statearr_10636_10691[(2)] = false);

(statearr_10636_10691[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (3))){
var state_10603__$1 = state_10603;
var statearr_10637_10692 = state_10603__$1;
(statearr_10637_10692[(2)] = false);

(statearr_10637_10692[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (12))){
var inst_10601 = (state_10603[(2)]);
var state_10603__$1 = state_10603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10603__$1,inst_10601);
} else {
if((state_val_10604 === (2))){
var inst_10509 = (state_10603[(8)]);
var inst_10514 = inst_10509.cljs$lang$protocol_mask$partition0$;
var inst_10515 = (inst_10514 & (64));
var inst_10516 = inst_10509.cljs$core$ISeq$;
var inst_10517 = (inst_10515) || (inst_10516);
var state_10603__$1 = state_10603;
if(cljs.core.truth_(inst_10517)){
var statearr_10638_10693 = state_10603__$1;
(statearr_10638_10693[(1)] = (5));

} else {
var statearr_10639_10694 = state_10603__$1;
(statearr_10639_10694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (23))){
var inst_10562 = (state_10603[(14)]);
var inst_10568 = (inst_10562 == null);
var state_10603__$1 = state_10603;
if(cljs.core.truth_(inst_10568)){
var statearr_10640_10695 = state_10603__$1;
(statearr_10640_10695[(1)] = (26));

} else {
var statearr_10641_10696 = state_10603__$1;
(statearr_10641_10696[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (35))){
var inst_10588 = (state_10603[(2)]);
var state_10603__$1 = state_10603;
if(cljs.core.truth_(inst_10588)){
var statearr_10642_10697 = state_10603__$1;
(statearr_10642_10697[(1)] = (36));

} else {
var statearr_10643_10698 = state_10603__$1;
(statearr_10643_10698[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (19))){
var inst_10533 = (state_10603[(7)]);
var inst_10552 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10533);
var state_10603__$1 = state_10603;
var statearr_10644_10699 = state_10603__$1;
(statearr_10644_10699[(2)] = inst_10552);

(statearr_10644_10699[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (11))){
var inst_10533 = (state_10603[(7)]);
var inst_10537 = (inst_10533 == null);
var inst_10538 = cljs.core.not.call(null,inst_10537);
var state_10603__$1 = state_10603;
if(inst_10538){
var statearr_10645_10700 = state_10603__$1;
(statearr_10645_10700[(1)] = (13));

} else {
var statearr_10646_10701 = state_10603__$1;
(statearr_10646_10701[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (9))){
var inst_10509 = (state_10603[(8)]);
var state_10603__$1 = state_10603;
var statearr_10647_10702 = state_10603__$1;
(statearr_10647_10702[(2)] = inst_10509);

(statearr_10647_10702[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (5))){
var state_10603__$1 = state_10603;
var statearr_10648_10703 = state_10603__$1;
(statearr_10648_10703[(2)] = true);

(statearr_10648_10703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (14))){
var state_10603__$1 = state_10603;
var statearr_10649_10704 = state_10603__$1;
(statearr_10649_10704[(2)] = false);

(statearr_10649_10704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (26))){
var inst_10563 = (state_10603[(10)]);
var inst_10570 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_10563);
var state_10603__$1 = state_10603;
var statearr_10650_10705 = state_10603__$1;
(statearr_10650_10705[(2)] = inst_10570);

(statearr_10650_10705[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (16))){
var state_10603__$1 = state_10603;
var statearr_10651_10706 = state_10603__$1;
(statearr_10651_10706[(2)] = true);

(statearr_10651_10706[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (38))){
var inst_10593 = (state_10603[(2)]);
var state_10603__$1 = state_10603;
var statearr_10652_10707 = state_10603__$1;
(statearr_10652_10707[(2)] = inst_10593);

(statearr_10652_10707[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (30))){
var inst_10556 = (state_10603[(9)]);
var inst_10563 = (state_10603[(10)]);
var inst_10557 = (state_10603[(13)]);
var inst_10580 = cljs.core.empty_QMARK_.call(null,inst_10556);
var inst_10581 = inst_10557.call(null,inst_10563);
var inst_10582 = cljs.core.not.call(null,inst_10581);
var inst_10583 = (inst_10580) && (inst_10582);
var state_10603__$1 = state_10603;
var statearr_10653_10708 = state_10603__$1;
(statearr_10653_10708[(2)] = inst_10583);

(statearr_10653_10708[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (10))){
var inst_10509 = (state_10603[(8)]);
var inst_10529 = (state_10603[(2)]);
var inst_10530 = cljs.core.get.call(null,inst_10529,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_10531 = cljs.core.get.call(null,inst_10529,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_10532 = cljs.core.get.call(null,inst_10529,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_10533 = inst_10509;
var state_10603__$1 = (function (){var statearr_10654 = state_10603;
(statearr_10654[(7)] = inst_10533);

(statearr_10654[(16)] = inst_10530);

(statearr_10654[(17)] = inst_10532);

(statearr_10654[(18)] = inst_10531);

return statearr_10654;
})();
var statearr_10655_10709 = state_10603__$1;
(statearr_10655_10709[(2)] = null);

(statearr_10655_10709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (18))){
var inst_10547 = (state_10603[(2)]);
var state_10603__$1 = state_10603;
var statearr_10656_10710 = state_10603__$1;
(statearr_10656_10710[(2)] = inst_10547);

(statearr_10656_10710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (37))){
var state_10603__$1 = state_10603;
var statearr_10657_10711 = state_10603__$1;
(statearr_10657_10711[(2)] = null);

(statearr_10657_10711[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10604 === (8))){
var inst_10509 = (state_10603[(8)]);
var inst_10526 = cljs.core.apply.call(null,cljs.core.hash_map,inst_10509);
var state_10603__$1 = state_10603;
var statearr_10658_10712 = state_10603__$1;
(statearr_10658_10712[(2)] = inst_10526);

(statearr_10658_10712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8953__auto___10666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8841__auto__,c__8953__auto___10666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8842__auto__ = null;
var cljs$core$async$mix_$_state_machine__8842__auto____0 = (function (){
var statearr_10662 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10662[(0)] = cljs$core$async$mix_$_state_machine__8842__auto__);

(statearr_10662[(1)] = (1));

return statearr_10662;
});
var cljs$core$async$mix_$_state_machine__8842__auto____1 = (function (state_10603){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_10603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e10663){if((e10663 instanceof Object)){
var ex__8845__auto__ = e10663;
var statearr_10664_10713 = state_10603;
(statearr_10664_10713[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10714 = state_10603;
state_10603 = G__10714;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8842__auto__ = function(state_10603){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8842__auto____1.call(this,state_10603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8842__auto____0;
cljs$core$async$mix_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8842__auto____1;
return cljs$core$async$mix_$_state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto___10666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8955__auto__ = (function (){var statearr_10665 = f__8954__auto__.call(null);
(statearr_10665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto___10666);

return statearr_10665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto___10666,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__7110__auto__ = (((p == null))?null:p);
var m__7111__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__7111__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__7110__auto__ = (((p == null))?null:p);
var m__7111__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,p,v,ch);
} else {
var m__7111__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args10715 = [];
var len__7513__auto___10718 = arguments.length;
var i__7514__auto___10719 = (0);
while(true){
if((i__7514__auto___10719 < len__7513__auto___10718)){
args10715.push((arguments[i__7514__auto___10719]));

var G__10720 = (i__7514__auto___10719 + (1));
i__7514__auto___10719 = G__10720;
continue;
} else {
}
break;
}

var G__10717 = args10715.length;
switch (G__10717) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10715.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__7110__auto__ = (((p == null))?null:p);
var m__7111__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,p);
} else {
var m__7111__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__7110__auto__ = (((p == null))?null:p);
var m__7111__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__7110__auto__)]);
if(!((m__7111__auto__ == null))){
return m__7111__auto__.call(null,p,v);
} else {
var m__7111__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__7111__auto____$1 == null))){
return m__7111__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args10723 = [];
var len__7513__auto___10848 = arguments.length;
var i__7514__auto___10849 = (0);
while(true){
if((i__7514__auto___10849 < len__7513__auto___10848)){
args10723.push((arguments[i__7514__auto___10849]));

var G__10850 = (i__7514__auto___10849 + (1));
i__7514__auto___10849 = G__10850;
continue;
} else {
}
break;
}

var G__10725 = args10723.length;
switch (G__10725) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10723.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__6455__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__6455__auto__)){
return or__6455__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__6455__auto__,mults){
return (function (p1__10722_SHARP_){
if(cljs.core.truth_(p1__10722_SHARP_.call(null,topic))){
return p1__10722_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__10722_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__6455__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async10726 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async10726 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta10727){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta10727 = meta10727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async10726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_10728,meta10727__$1){
var self__ = this;
var _10728__$1 = this;
return (new cljs.core.async.t_cljs$core$async10726(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta10727__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10726.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_10728){
var self__ = this;
var _10728__$1 = this;
return self__.meta10727;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10726.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async10726.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10726.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async10726.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10726.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10726.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10726.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10726.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta10727","meta10727",551895868,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async10726.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async10726.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async10726";

cljs.core.async.t_cljs$core$async10726.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async10726");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async10726 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async10726(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10727){
return (new cljs.core.async.t_cljs$core$async10726(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta10727));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async10726(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8953__auto___10852 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto___10852,mults,ensure_mult,p){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto___10852,mults,ensure_mult,p){
return (function (state_10800){
var state_val_10801 = (state_10800[(1)]);
if((state_val_10801 === (7))){
var inst_10796 = (state_10800[(2)]);
var state_10800__$1 = state_10800;
var statearr_10802_10853 = state_10800__$1;
(statearr_10802_10853[(2)] = inst_10796);

(statearr_10802_10853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (20))){
var state_10800__$1 = state_10800;
var statearr_10803_10854 = state_10800__$1;
(statearr_10803_10854[(2)] = null);

(statearr_10803_10854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (1))){
var state_10800__$1 = state_10800;
var statearr_10804_10855 = state_10800__$1;
(statearr_10804_10855[(2)] = null);

(statearr_10804_10855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (24))){
var inst_10779 = (state_10800[(7)]);
var inst_10788 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_10779);
var state_10800__$1 = state_10800;
var statearr_10805_10856 = state_10800__$1;
(statearr_10805_10856[(2)] = inst_10788);

(statearr_10805_10856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (4))){
var inst_10731 = (state_10800[(8)]);
var inst_10731__$1 = (state_10800[(2)]);
var inst_10732 = (inst_10731__$1 == null);
var state_10800__$1 = (function (){var statearr_10806 = state_10800;
(statearr_10806[(8)] = inst_10731__$1);

return statearr_10806;
})();
if(cljs.core.truth_(inst_10732)){
var statearr_10807_10857 = state_10800__$1;
(statearr_10807_10857[(1)] = (5));

} else {
var statearr_10808_10858 = state_10800__$1;
(statearr_10808_10858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (15))){
var inst_10773 = (state_10800[(2)]);
var state_10800__$1 = state_10800;
var statearr_10809_10859 = state_10800__$1;
(statearr_10809_10859[(2)] = inst_10773);

(statearr_10809_10859[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (21))){
var inst_10793 = (state_10800[(2)]);
var state_10800__$1 = (function (){var statearr_10810 = state_10800;
(statearr_10810[(9)] = inst_10793);

return statearr_10810;
})();
var statearr_10811_10860 = state_10800__$1;
(statearr_10811_10860[(2)] = null);

(statearr_10811_10860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (13))){
var inst_10755 = (state_10800[(10)]);
var inst_10757 = cljs.core.chunked_seq_QMARK_.call(null,inst_10755);
var state_10800__$1 = state_10800;
if(inst_10757){
var statearr_10812_10861 = state_10800__$1;
(statearr_10812_10861[(1)] = (16));

} else {
var statearr_10813_10862 = state_10800__$1;
(statearr_10813_10862[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (22))){
var inst_10785 = (state_10800[(2)]);
var state_10800__$1 = state_10800;
if(cljs.core.truth_(inst_10785)){
var statearr_10814_10863 = state_10800__$1;
(statearr_10814_10863[(1)] = (23));

} else {
var statearr_10815_10864 = state_10800__$1;
(statearr_10815_10864[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (6))){
var inst_10781 = (state_10800[(11)]);
var inst_10779 = (state_10800[(7)]);
var inst_10731 = (state_10800[(8)]);
var inst_10779__$1 = topic_fn.call(null,inst_10731);
var inst_10780 = cljs.core.deref.call(null,mults);
var inst_10781__$1 = cljs.core.get.call(null,inst_10780,inst_10779__$1);
var state_10800__$1 = (function (){var statearr_10816 = state_10800;
(statearr_10816[(11)] = inst_10781__$1);

(statearr_10816[(7)] = inst_10779__$1);

return statearr_10816;
})();
if(cljs.core.truth_(inst_10781__$1)){
var statearr_10817_10865 = state_10800__$1;
(statearr_10817_10865[(1)] = (19));

} else {
var statearr_10818_10866 = state_10800__$1;
(statearr_10818_10866[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (25))){
var inst_10790 = (state_10800[(2)]);
var state_10800__$1 = state_10800;
var statearr_10819_10867 = state_10800__$1;
(statearr_10819_10867[(2)] = inst_10790);

(statearr_10819_10867[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (17))){
var inst_10755 = (state_10800[(10)]);
var inst_10764 = cljs.core.first.call(null,inst_10755);
var inst_10765 = cljs.core.async.muxch_STAR_.call(null,inst_10764);
var inst_10766 = cljs.core.async.close_BANG_.call(null,inst_10765);
var inst_10767 = cljs.core.next.call(null,inst_10755);
var inst_10741 = inst_10767;
var inst_10742 = null;
var inst_10743 = (0);
var inst_10744 = (0);
var state_10800__$1 = (function (){var statearr_10820 = state_10800;
(statearr_10820[(12)] = inst_10766);

(statearr_10820[(13)] = inst_10742);

(statearr_10820[(14)] = inst_10744);

(statearr_10820[(15)] = inst_10741);

(statearr_10820[(16)] = inst_10743);

return statearr_10820;
})();
var statearr_10821_10868 = state_10800__$1;
(statearr_10821_10868[(2)] = null);

(statearr_10821_10868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (3))){
var inst_10798 = (state_10800[(2)]);
var state_10800__$1 = state_10800;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10800__$1,inst_10798);
} else {
if((state_val_10801 === (12))){
var inst_10775 = (state_10800[(2)]);
var state_10800__$1 = state_10800;
var statearr_10822_10869 = state_10800__$1;
(statearr_10822_10869[(2)] = inst_10775);

(statearr_10822_10869[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (2))){
var state_10800__$1 = state_10800;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10800__$1,(4),ch);
} else {
if((state_val_10801 === (23))){
var state_10800__$1 = state_10800;
var statearr_10823_10870 = state_10800__$1;
(statearr_10823_10870[(2)] = null);

(statearr_10823_10870[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (19))){
var inst_10781 = (state_10800[(11)]);
var inst_10731 = (state_10800[(8)]);
var inst_10783 = cljs.core.async.muxch_STAR_.call(null,inst_10781);
var state_10800__$1 = state_10800;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10800__$1,(22),inst_10783,inst_10731);
} else {
if((state_val_10801 === (11))){
var inst_10741 = (state_10800[(15)]);
var inst_10755 = (state_10800[(10)]);
var inst_10755__$1 = cljs.core.seq.call(null,inst_10741);
var state_10800__$1 = (function (){var statearr_10824 = state_10800;
(statearr_10824[(10)] = inst_10755__$1);

return statearr_10824;
})();
if(inst_10755__$1){
var statearr_10825_10871 = state_10800__$1;
(statearr_10825_10871[(1)] = (13));

} else {
var statearr_10826_10872 = state_10800__$1;
(statearr_10826_10872[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (9))){
var inst_10777 = (state_10800[(2)]);
var state_10800__$1 = state_10800;
var statearr_10827_10873 = state_10800__$1;
(statearr_10827_10873[(2)] = inst_10777);

(statearr_10827_10873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (5))){
var inst_10738 = cljs.core.deref.call(null,mults);
var inst_10739 = cljs.core.vals.call(null,inst_10738);
var inst_10740 = cljs.core.seq.call(null,inst_10739);
var inst_10741 = inst_10740;
var inst_10742 = null;
var inst_10743 = (0);
var inst_10744 = (0);
var state_10800__$1 = (function (){var statearr_10828 = state_10800;
(statearr_10828[(13)] = inst_10742);

(statearr_10828[(14)] = inst_10744);

(statearr_10828[(15)] = inst_10741);

(statearr_10828[(16)] = inst_10743);

return statearr_10828;
})();
var statearr_10829_10874 = state_10800__$1;
(statearr_10829_10874[(2)] = null);

(statearr_10829_10874[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (14))){
var state_10800__$1 = state_10800;
var statearr_10833_10875 = state_10800__$1;
(statearr_10833_10875[(2)] = null);

(statearr_10833_10875[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (16))){
var inst_10755 = (state_10800[(10)]);
var inst_10759 = cljs.core.chunk_first.call(null,inst_10755);
var inst_10760 = cljs.core.chunk_rest.call(null,inst_10755);
var inst_10761 = cljs.core.count.call(null,inst_10759);
var inst_10741 = inst_10760;
var inst_10742 = inst_10759;
var inst_10743 = inst_10761;
var inst_10744 = (0);
var state_10800__$1 = (function (){var statearr_10834 = state_10800;
(statearr_10834[(13)] = inst_10742);

(statearr_10834[(14)] = inst_10744);

(statearr_10834[(15)] = inst_10741);

(statearr_10834[(16)] = inst_10743);

return statearr_10834;
})();
var statearr_10835_10876 = state_10800__$1;
(statearr_10835_10876[(2)] = null);

(statearr_10835_10876[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (10))){
var inst_10742 = (state_10800[(13)]);
var inst_10744 = (state_10800[(14)]);
var inst_10741 = (state_10800[(15)]);
var inst_10743 = (state_10800[(16)]);
var inst_10749 = cljs.core._nth.call(null,inst_10742,inst_10744);
var inst_10750 = cljs.core.async.muxch_STAR_.call(null,inst_10749);
var inst_10751 = cljs.core.async.close_BANG_.call(null,inst_10750);
var inst_10752 = (inst_10744 + (1));
var tmp10830 = inst_10742;
var tmp10831 = inst_10741;
var tmp10832 = inst_10743;
var inst_10741__$1 = tmp10831;
var inst_10742__$1 = tmp10830;
var inst_10743__$1 = tmp10832;
var inst_10744__$1 = inst_10752;
var state_10800__$1 = (function (){var statearr_10836 = state_10800;
(statearr_10836[(13)] = inst_10742__$1);

(statearr_10836[(14)] = inst_10744__$1);

(statearr_10836[(15)] = inst_10741__$1);

(statearr_10836[(17)] = inst_10751);

(statearr_10836[(16)] = inst_10743__$1);

return statearr_10836;
})();
var statearr_10837_10877 = state_10800__$1;
(statearr_10837_10877[(2)] = null);

(statearr_10837_10877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (18))){
var inst_10770 = (state_10800[(2)]);
var state_10800__$1 = state_10800;
var statearr_10838_10878 = state_10800__$1;
(statearr_10838_10878[(2)] = inst_10770);

(statearr_10838_10878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10801 === (8))){
var inst_10744 = (state_10800[(14)]);
var inst_10743 = (state_10800[(16)]);
var inst_10746 = (inst_10744 < inst_10743);
var inst_10747 = inst_10746;
var state_10800__$1 = state_10800;
if(cljs.core.truth_(inst_10747)){
var statearr_10839_10879 = state_10800__$1;
(statearr_10839_10879[(1)] = (10));

} else {
var statearr_10840_10880 = state_10800__$1;
(statearr_10840_10880[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8953__auto___10852,mults,ensure_mult,p))
;
return ((function (switch__8841__auto__,c__8953__auto___10852,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8842__auto__ = null;
var cljs$core$async$state_machine__8842__auto____0 = (function (){
var statearr_10844 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10844[(0)] = cljs$core$async$state_machine__8842__auto__);

(statearr_10844[(1)] = (1));

return statearr_10844;
});
var cljs$core$async$state_machine__8842__auto____1 = (function (state_10800){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_10800);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e10845){if((e10845 instanceof Object)){
var ex__8845__auto__ = e10845;
var statearr_10846_10881 = state_10800;
(statearr_10846_10881[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10800);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10882 = state_10800;
state_10800 = G__10882;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$state_machine__8842__auto__ = function(state_10800){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8842__auto____1.call(this,state_10800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8842__auto____0;
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8842__auto____1;
return cljs$core$async$state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto___10852,mults,ensure_mult,p))
})();
var state__8955__auto__ = (function (){var statearr_10847 = f__8954__auto__.call(null);
(statearr_10847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto___10852);

return statearr_10847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto___10852,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args10883 = [];
var len__7513__auto___10886 = arguments.length;
var i__7514__auto___10887 = (0);
while(true){
if((i__7514__auto___10887 < len__7513__auto___10886)){
args10883.push((arguments[i__7514__auto___10887]));

var G__10888 = (i__7514__auto___10887 + (1));
i__7514__auto___10887 = G__10888;
continue;
} else {
}
break;
}

var G__10885 = args10883.length;
switch (G__10885) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10883.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args10890 = [];
var len__7513__auto___10893 = arguments.length;
var i__7514__auto___10894 = (0);
while(true){
if((i__7514__auto___10894 < len__7513__auto___10893)){
args10890.push((arguments[i__7514__auto___10894]));

var G__10895 = (i__7514__auto___10894 + (1));
i__7514__auto___10894 = G__10895;
continue;
} else {
}
break;
}

var G__10892 = args10890.length;
switch (G__10892) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10890.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args10897 = [];
var len__7513__auto___10968 = arguments.length;
var i__7514__auto___10969 = (0);
while(true){
if((i__7514__auto___10969 < len__7513__auto___10968)){
args10897.push((arguments[i__7514__auto___10969]));

var G__10970 = (i__7514__auto___10969 + (1));
i__7514__auto___10969 = G__10970;
continue;
} else {
}
break;
}

var G__10899 = args10897.length;
switch (G__10899) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10897.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__8953__auto___10972 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto___10972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto___10972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_10938){
var state_val_10939 = (state_10938[(1)]);
if((state_val_10939 === (7))){
var state_10938__$1 = state_10938;
var statearr_10940_10973 = state_10938__$1;
(statearr_10940_10973[(2)] = null);

(statearr_10940_10973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (1))){
var state_10938__$1 = state_10938;
var statearr_10941_10974 = state_10938__$1;
(statearr_10941_10974[(2)] = null);

(statearr_10941_10974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (4))){
var inst_10902 = (state_10938[(7)]);
var inst_10904 = (inst_10902 < cnt);
var state_10938__$1 = state_10938;
if(cljs.core.truth_(inst_10904)){
var statearr_10942_10975 = state_10938__$1;
(statearr_10942_10975[(1)] = (6));

} else {
var statearr_10943_10976 = state_10938__$1;
(statearr_10943_10976[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (15))){
var inst_10934 = (state_10938[(2)]);
var state_10938__$1 = state_10938;
var statearr_10944_10977 = state_10938__$1;
(statearr_10944_10977[(2)] = inst_10934);

(statearr_10944_10977[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (13))){
var inst_10927 = cljs.core.async.close_BANG_.call(null,out);
var state_10938__$1 = state_10938;
var statearr_10945_10978 = state_10938__$1;
(statearr_10945_10978[(2)] = inst_10927);

(statearr_10945_10978[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (6))){
var state_10938__$1 = state_10938;
var statearr_10946_10979 = state_10938__$1;
(statearr_10946_10979[(2)] = null);

(statearr_10946_10979[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (3))){
var inst_10936 = (state_10938[(2)]);
var state_10938__$1 = state_10938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10938__$1,inst_10936);
} else {
if((state_val_10939 === (12))){
var inst_10924 = (state_10938[(8)]);
var inst_10924__$1 = (state_10938[(2)]);
var inst_10925 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_10924__$1);
var state_10938__$1 = (function (){var statearr_10947 = state_10938;
(statearr_10947[(8)] = inst_10924__$1);

return statearr_10947;
})();
if(cljs.core.truth_(inst_10925)){
var statearr_10948_10980 = state_10938__$1;
(statearr_10948_10980[(1)] = (13));

} else {
var statearr_10949_10981 = state_10938__$1;
(statearr_10949_10981[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (2))){
var inst_10901 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_10902 = (0);
var state_10938__$1 = (function (){var statearr_10950 = state_10938;
(statearr_10950[(9)] = inst_10901);

(statearr_10950[(7)] = inst_10902);

return statearr_10950;
})();
var statearr_10951_10982 = state_10938__$1;
(statearr_10951_10982[(2)] = null);

(statearr_10951_10982[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (11))){
var inst_10902 = (state_10938[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10938,(10),Object,null,(9));
var inst_10911 = chs__$1.call(null,inst_10902);
var inst_10912 = done.call(null,inst_10902);
var inst_10913 = cljs.core.async.take_BANG_.call(null,inst_10911,inst_10912);
var state_10938__$1 = state_10938;
var statearr_10952_10983 = state_10938__$1;
(statearr_10952_10983[(2)] = inst_10913);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10938__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (9))){
var inst_10902 = (state_10938[(7)]);
var inst_10915 = (state_10938[(2)]);
var inst_10916 = (inst_10902 + (1));
var inst_10902__$1 = inst_10916;
var state_10938__$1 = (function (){var statearr_10953 = state_10938;
(statearr_10953[(10)] = inst_10915);

(statearr_10953[(7)] = inst_10902__$1);

return statearr_10953;
})();
var statearr_10954_10984 = state_10938__$1;
(statearr_10954_10984[(2)] = null);

(statearr_10954_10984[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (5))){
var inst_10922 = (state_10938[(2)]);
var state_10938__$1 = (function (){var statearr_10955 = state_10938;
(statearr_10955[(11)] = inst_10922);

return statearr_10955;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10938__$1,(12),dchan);
} else {
if((state_val_10939 === (14))){
var inst_10924 = (state_10938[(8)]);
var inst_10929 = cljs.core.apply.call(null,f,inst_10924);
var state_10938__$1 = state_10938;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10938__$1,(16),out,inst_10929);
} else {
if((state_val_10939 === (16))){
var inst_10931 = (state_10938[(2)]);
var state_10938__$1 = (function (){var statearr_10956 = state_10938;
(statearr_10956[(12)] = inst_10931);

return statearr_10956;
})();
var statearr_10957_10985 = state_10938__$1;
(statearr_10957_10985[(2)] = null);

(statearr_10957_10985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (10))){
var inst_10906 = (state_10938[(2)]);
var inst_10907 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_10938__$1 = (function (){var statearr_10958 = state_10938;
(statearr_10958[(13)] = inst_10906);

return statearr_10958;
})();
var statearr_10959_10986 = state_10938__$1;
(statearr_10959_10986[(2)] = inst_10907);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10938__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_10939 === (8))){
var inst_10920 = (state_10938[(2)]);
var state_10938__$1 = state_10938;
var statearr_10960_10987 = state_10938__$1;
(statearr_10960_10987[(2)] = inst_10920);

(statearr_10960_10987[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
});})(c__8953__auto___10972,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8841__auto__,c__8953__auto___10972,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8842__auto__ = null;
var cljs$core$async$state_machine__8842__auto____0 = (function (){
var statearr_10964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_10964[(0)] = cljs$core$async$state_machine__8842__auto__);

(statearr_10964[(1)] = (1));

return statearr_10964;
});
var cljs$core$async$state_machine__8842__auto____1 = (function (state_10938){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_10938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e10965){if((e10965 instanceof Object)){
var ex__8845__auto__ = e10965;
var statearr_10966_10988 = state_10938;
(statearr_10966_10988[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e10965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__10989 = state_10938;
state_10938 = G__10989;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$state_machine__8842__auto__ = function(state_10938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8842__auto____1.call(this,state_10938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8842__auto____0;
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8842__auto____1;
return cljs$core$async$state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto___10972,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8955__auto__ = (function (){var statearr_10967 = f__8954__auto__.call(null);
(statearr_10967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto___10972);

return statearr_10967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto___10972,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args10991 = [];
var len__7513__auto___11047 = arguments.length;
var i__7514__auto___11048 = (0);
while(true){
if((i__7514__auto___11048 < len__7513__auto___11047)){
args10991.push((arguments[i__7514__auto___11048]));

var G__11049 = (i__7514__auto___11048 + (1));
i__7514__auto___11048 = G__11049;
continue;
} else {
}
break;
}

var G__10993 = args10991.length;
switch (G__10993) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10991.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8953__auto___11051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto___11051,out){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto___11051,out){
return (function (state_11023){
var state_val_11024 = (state_11023[(1)]);
if((state_val_11024 === (7))){
var inst_11003 = (state_11023[(7)]);
var inst_11002 = (state_11023[(8)]);
var inst_11002__$1 = (state_11023[(2)]);
var inst_11003__$1 = cljs.core.nth.call(null,inst_11002__$1,(0),null);
var inst_11004 = cljs.core.nth.call(null,inst_11002__$1,(1),null);
var inst_11005 = (inst_11003__$1 == null);
var state_11023__$1 = (function (){var statearr_11025 = state_11023;
(statearr_11025[(7)] = inst_11003__$1);

(statearr_11025[(9)] = inst_11004);

(statearr_11025[(8)] = inst_11002__$1);

return statearr_11025;
})();
if(cljs.core.truth_(inst_11005)){
var statearr_11026_11052 = state_11023__$1;
(statearr_11026_11052[(1)] = (8));

} else {
var statearr_11027_11053 = state_11023__$1;
(statearr_11027_11053[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11024 === (1))){
var inst_10994 = cljs.core.vec.call(null,chs);
var inst_10995 = inst_10994;
var state_11023__$1 = (function (){var statearr_11028 = state_11023;
(statearr_11028[(10)] = inst_10995);

return statearr_11028;
})();
var statearr_11029_11054 = state_11023__$1;
(statearr_11029_11054[(2)] = null);

(statearr_11029_11054[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11024 === (4))){
var inst_10995 = (state_11023[(10)]);
var state_11023__$1 = state_11023;
return cljs.core.async.ioc_alts_BANG_.call(null,state_11023__$1,(7),inst_10995);
} else {
if((state_val_11024 === (6))){
var inst_11019 = (state_11023[(2)]);
var state_11023__$1 = state_11023;
var statearr_11030_11055 = state_11023__$1;
(statearr_11030_11055[(2)] = inst_11019);

(statearr_11030_11055[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11024 === (3))){
var inst_11021 = (state_11023[(2)]);
var state_11023__$1 = state_11023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11023__$1,inst_11021);
} else {
if((state_val_11024 === (2))){
var inst_10995 = (state_11023[(10)]);
var inst_10997 = cljs.core.count.call(null,inst_10995);
var inst_10998 = (inst_10997 > (0));
var state_11023__$1 = state_11023;
if(cljs.core.truth_(inst_10998)){
var statearr_11032_11056 = state_11023__$1;
(statearr_11032_11056[(1)] = (4));

} else {
var statearr_11033_11057 = state_11023__$1;
(statearr_11033_11057[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11024 === (11))){
var inst_10995 = (state_11023[(10)]);
var inst_11012 = (state_11023[(2)]);
var tmp11031 = inst_10995;
var inst_10995__$1 = tmp11031;
var state_11023__$1 = (function (){var statearr_11034 = state_11023;
(statearr_11034[(11)] = inst_11012);

(statearr_11034[(10)] = inst_10995__$1);

return statearr_11034;
})();
var statearr_11035_11058 = state_11023__$1;
(statearr_11035_11058[(2)] = null);

(statearr_11035_11058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11024 === (9))){
var inst_11003 = (state_11023[(7)]);
var state_11023__$1 = state_11023;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11023__$1,(11),out,inst_11003);
} else {
if((state_val_11024 === (5))){
var inst_11017 = cljs.core.async.close_BANG_.call(null,out);
var state_11023__$1 = state_11023;
var statearr_11036_11059 = state_11023__$1;
(statearr_11036_11059[(2)] = inst_11017);

(statearr_11036_11059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11024 === (10))){
var inst_11015 = (state_11023[(2)]);
var state_11023__$1 = state_11023;
var statearr_11037_11060 = state_11023__$1;
(statearr_11037_11060[(2)] = inst_11015);

(statearr_11037_11060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11024 === (8))){
var inst_11003 = (state_11023[(7)]);
var inst_11004 = (state_11023[(9)]);
var inst_10995 = (state_11023[(10)]);
var inst_11002 = (state_11023[(8)]);
var inst_11007 = (function (){var cs = inst_10995;
var vec__11000 = inst_11002;
var v = inst_11003;
var c = inst_11004;
return ((function (cs,vec__11000,v,c,inst_11003,inst_11004,inst_10995,inst_11002,state_val_11024,c__8953__auto___11051,out){
return (function (p1__10990_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__10990_SHARP_);
});
;})(cs,vec__11000,v,c,inst_11003,inst_11004,inst_10995,inst_11002,state_val_11024,c__8953__auto___11051,out))
})();
var inst_11008 = cljs.core.filterv.call(null,inst_11007,inst_10995);
var inst_10995__$1 = inst_11008;
var state_11023__$1 = (function (){var statearr_11038 = state_11023;
(statearr_11038[(10)] = inst_10995__$1);

return statearr_11038;
})();
var statearr_11039_11061 = state_11023__$1;
(statearr_11039_11061[(2)] = null);

(statearr_11039_11061[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__8953__auto___11051,out))
;
return ((function (switch__8841__auto__,c__8953__auto___11051,out){
return (function() {
var cljs$core$async$state_machine__8842__auto__ = null;
var cljs$core$async$state_machine__8842__auto____0 = (function (){
var statearr_11043 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11043[(0)] = cljs$core$async$state_machine__8842__auto__);

(statearr_11043[(1)] = (1));

return statearr_11043;
});
var cljs$core$async$state_machine__8842__auto____1 = (function (state_11023){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_11023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e11044){if((e11044 instanceof Object)){
var ex__8845__auto__ = e11044;
var statearr_11045_11062 = state_11023;
(statearr_11045_11062[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11063 = state_11023;
state_11023 = G__11063;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$state_machine__8842__auto__ = function(state_11023){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8842__auto____1.call(this,state_11023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8842__auto____0;
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8842__auto____1;
return cljs$core$async$state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto___11051,out))
})();
var state__8955__auto__ = (function (){var statearr_11046 = f__8954__auto__.call(null);
(statearr_11046[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto___11051);

return statearr_11046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto___11051,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args11064 = [];
var len__7513__auto___11113 = arguments.length;
var i__7514__auto___11114 = (0);
while(true){
if((i__7514__auto___11114 < len__7513__auto___11113)){
args11064.push((arguments[i__7514__auto___11114]));

var G__11115 = (i__7514__auto___11114 + (1));
i__7514__auto___11114 = G__11115;
continue;
} else {
}
break;
}

var G__11066 = args11064.length;
switch (G__11066) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11064.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8953__auto___11117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto___11117,out){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto___11117,out){
return (function (state_11090){
var state_val_11091 = (state_11090[(1)]);
if((state_val_11091 === (7))){
var inst_11072 = (state_11090[(7)]);
var inst_11072__$1 = (state_11090[(2)]);
var inst_11073 = (inst_11072__$1 == null);
var inst_11074 = cljs.core.not.call(null,inst_11073);
var state_11090__$1 = (function (){var statearr_11092 = state_11090;
(statearr_11092[(7)] = inst_11072__$1);

return statearr_11092;
})();
if(inst_11074){
var statearr_11093_11118 = state_11090__$1;
(statearr_11093_11118[(1)] = (8));

} else {
var statearr_11094_11119 = state_11090__$1;
(statearr_11094_11119[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11091 === (1))){
var inst_11067 = (0);
var state_11090__$1 = (function (){var statearr_11095 = state_11090;
(statearr_11095[(8)] = inst_11067);

return statearr_11095;
})();
var statearr_11096_11120 = state_11090__$1;
(statearr_11096_11120[(2)] = null);

(statearr_11096_11120[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11091 === (4))){
var state_11090__$1 = state_11090;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11090__$1,(7),ch);
} else {
if((state_val_11091 === (6))){
var inst_11085 = (state_11090[(2)]);
var state_11090__$1 = state_11090;
var statearr_11097_11121 = state_11090__$1;
(statearr_11097_11121[(2)] = inst_11085);

(statearr_11097_11121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11091 === (3))){
var inst_11087 = (state_11090[(2)]);
var inst_11088 = cljs.core.async.close_BANG_.call(null,out);
var state_11090__$1 = (function (){var statearr_11098 = state_11090;
(statearr_11098[(9)] = inst_11087);

return statearr_11098;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11090__$1,inst_11088);
} else {
if((state_val_11091 === (2))){
var inst_11067 = (state_11090[(8)]);
var inst_11069 = (inst_11067 < n);
var state_11090__$1 = state_11090;
if(cljs.core.truth_(inst_11069)){
var statearr_11099_11122 = state_11090__$1;
(statearr_11099_11122[(1)] = (4));

} else {
var statearr_11100_11123 = state_11090__$1;
(statearr_11100_11123[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11091 === (11))){
var inst_11067 = (state_11090[(8)]);
var inst_11077 = (state_11090[(2)]);
var inst_11078 = (inst_11067 + (1));
var inst_11067__$1 = inst_11078;
var state_11090__$1 = (function (){var statearr_11101 = state_11090;
(statearr_11101[(8)] = inst_11067__$1);

(statearr_11101[(10)] = inst_11077);

return statearr_11101;
})();
var statearr_11102_11124 = state_11090__$1;
(statearr_11102_11124[(2)] = null);

(statearr_11102_11124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11091 === (9))){
var state_11090__$1 = state_11090;
var statearr_11103_11125 = state_11090__$1;
(statearr_11103_11125[(2)] = null);

(statearr_11103_11125[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11091 === (5))){
var state_11090__$1 = state_11090;
var statearr_11104_11126 = state_11090__$1;
(statearr_11104_11126[(2)] = null);

(statearr_11104_11126[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11091 === (10))){
var inst_11082 = (state_11090[(2)]);
var state_11090__$1 = state_11090;
var statearr_11105_11127 = state_11090__$1;
(statearr_11105_11127[(2)] = inst_11082);

(statearr_11105_11127[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11091 === (8))){
var inst_11072 = (state_11090[(7)]);
var state_11090__$1 = state_11090;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11090__$1,(11),out,inst_11072);
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
}
}
}
});})(c__8953__auto___11117,out))
;
return ((function (switch__8841__auto__,c__8953__auto___11117,out){
return (function() {
var cljs$core$async$state_machine__8842__auto__ = null;
var cljs$core$async$state_machine__8842__auto____0 = (function (){
var statearr_11109 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11109[(0)] = cljs$core$async$state_machine__8842__auto__);

(statearr_11109[(1)] = (1));

return statearr_11109;
});
var cljs$core$async$state_machine__8842__auto____1 = (function (state_11090){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_11090);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e11110){if((e11110 instanceof Object)){
var ex__8845__auto__ = e11110;
var statearr_11111_11128 = state_11090;
(statearr_11111_11128[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11090);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11110;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11129 = state_11090;
state_11090 = G__11129;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$state_machine__8842__auto__ = function(state_11090){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8842__auto____1.call(this,state_11090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8842__auto____0;
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8842__auto____1;
return cljs$core$async$state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto___11117,out))
})();
var state__8955__auto__ = (function (){var statearr_11112 = f__8954__auto__.call(null);
(statearr_11112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto___11117);

return statearr_11112;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto___11117,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11137 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11137 = (function (map_LT_,f,ch,meta11138){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11138 = meta11138;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11139,meta11138__$1){
var self__ = this;
var _11139__$1 = this;
return (new cljs.core.async.t_cljs$core$async11137(self__.map_LT_,self__.f,self__.ch,meta11138__$1));
});

cljs.core.async.t_cljs$core$async11137.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11139){
var self__ = this;
var _11139__$1 = this;
return self__.meta11138;
});

cljs.core.async.t_cljs$core$async11137.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11137.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11137.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11137.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11137.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async11140 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11140 = (function (map_LT_,f,ch,meta11138,_,fn1,meta11141){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta11138 = meta11138;
this._ = _;
this.fn1 = fn1;
this.meta11141 = meta11141;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11142,meta11141__$1){
var self__ = this;
var _11142__$1 = this;
return (new cljs.core.async.t_cljs$core$async11140(self__.map_LT_,self__.f,self__.ch,self__.meta11138,self__._,self__.fn1,meta11141__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async11140.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11142){
var self__ = this;
var _11142__$1 = this;
return self__.meta11141;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11140.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async11140.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11140.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async11140.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__11130_SHARP_){
return f1.call(null,(((p1__11130_SHARP_ == null))?null:self__.f.call(null,p1__11130_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async11140.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11138","meta11138",-580293278,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async11137","cljs.core.async/t_cljs$core$async11137",-1403845424,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta11141","meta11141",1539402718,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async11140.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11140.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11140";

cljs.core.async.t_cljs$core$async11140.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async11140");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async11140 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11140(map_LT___$1,f__$1,ch__$1,meta11138__$1,___$2,fn1__$1,meta11141){
return (new cljs.core.async.t_cljs$core$async11140(map_LT___$1,f__$1,ch__$1,meta11138__$1,___$2,fn1__$1,meta11141));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async11140(self__.map_LT_,self__.f,self__.ch,self__.meta11138,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__6443__auto__ = ret;
if(cljs.core.truth_(and__6443__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__6443__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async11137.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11137.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async11137.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11138","meta11138",-580293278,null)], null);
});

cljs.core.async.t_cljs$core$async11137.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11137.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11137";

cljs.core.async.t_cljs$core$async11137.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async11137");
});

cljs.core.async.__GT_t_cljs$core$async11137 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async11137(map_LT___$1,f__$1,ch__$1,meta11138){
return (new cljs.core.async.t_cljs$core$async11137(map_LT___$1,f__$1,ch__$1,meta11138));
});

}

return (new cljs.core.async.t_cljs$core$async11137(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async11146 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11146 = (function (map_GT_,f,ch,meta11147){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta11147 = meta11147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11148,meta11147__$1){
var self__ = this;
var _11148__$1 = this;
return (new cljs.core.async.t_cljs$core$async11146(self__.map_GT_,self__.f,self__.ch,meta11147__$1));
});

cljs.core.async.t_cljs$core$async11146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11148){
var self__ = this;
var _11148__$1 = this;
return self__.meta11147;
});

cljs.core.async.t_cljs$core$async11146.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11146.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11146.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11146.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11146.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11146.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async11146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11147","meta11147",-718621259,null)], null);
});

cljs.core.async.t_cljs$core$async11146.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11146.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11146";

cljs.core.async.t_cljs$core$async11146.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async11146");
});

cljs.core.async.__GT_t_cljs$core$async11146 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async11146(map_GT___$1,f__$1,ch__$1,meta11147){
return (new cljs.core.async.t_cljs$core$async11146(map_GT___$1,f__$1,ch__$1,meta11147));
});

}

return (new cljs.core.async.t_cljs$core$async11146(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async11152 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async11152 = (function (filter_GT_,p,ch,meta11153){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta11153 = meta11153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async11152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11154,meta11153__$1){
var self__ = this;
var _11154__$1 = this;
return (new cljs.core.async.t_cljs$core$async11152(self__.filter_GT_,self__.p,self__.ch,meta11153__$1));
});

cljs.core.async.t_cljs$core$async11152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11154){
var self__ = this;
var _11154__$1 = this;
return self__.meta11153;
});

cljs.core.async.t_cljs$core$async11152.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async11152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11152.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async11152.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async11152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async11152.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async11152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async11152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta11153","meta11153",-629945059,null)], null);
});

cljs.core.async.t_cljs$core$async11152.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async11152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async11152";

cljs.core.async.t_cljs$core$async11152.cljs$lang$ctorPrWriter = (function (this__7053__auto__,writer__7054__auto__,opt__7055__auto__){
return cljs.core._write.call(null,writer__7054__auto__,"cljs.core.async/t_cljs$core$async11152");
});

cljs.core.async.__GT_t_cljs$core$async11152 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async11152(filter_GT___$1,p__$1,ch__$1,meta11153){
return (new cljs.core.async.t_cljs$core$async11152(filter_GT___$1,p__$1,ch__$1,meta11153));
});

}

return (new cljs.core.async.t_cljs$core$async11152(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args11155 = [];
var len__7513__auto___11199 = arguments.length;
var i__7514__auto___11200 = (0);
while(true){
if((i__7514__auto___11200 < len__7513__auto___11199)){
args11155.push((arguments[i__7514__auto___11200]));

var G__11201 = (i__7514__auto___11200 + (1));
i__7514__auto___11200 = G__11201;
continue;
} else {
}
break;
}

var G__11157 = args11155.length;
switch (G__11157) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11155.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8953__auto___11203 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto___11203,out){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto___11203,out){
return (function (state_11178){
var state_val_11179 = (state_11178[(1)]);
if((state_val_11179 === (7))){
var inst_11174 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
var statearr_11180_11204 = state_11178__$1;
(statearr_11180_11204[(2)] = inst_11174);

(statearr_11180_11204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (1))){
var state_11178__$1 = state_11178;
var statearr_11181_11205 = state_11178__$1;
(statearr_11181_11205[(2)] = null);

(statearr_11181_11205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (4))){
var inst_11160 = (state_11178[(7)]);
var inst_11160__$1 = (state_11178[(2)]);
var inst_11161 = (inst_11160__$1 == null);
var state_11178__$1 = (function (){var statearr_11182 = state_11178;
(statearr_11182[(7)] = inst_11160__$1);

return statearr_11182;
})();
if(cljs.core.truth_(inst_11161)){
var statearr_11183_11206 = state_11178__$1;
(statearr_11183_11206[(1)] = (5));

} else {
var statearr_11184_11207 = state_11178__$1;
(statearr_11184_11207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (6))){
var inst_11160 = (state_11178[(7)]);
var inst_11165 = p.call(null,inst_11160);
var state_11178__$1 = state_11178;
if(cljs.core.truth_(inst_11165)){
var statearr_11185_11208 = state_11178__$1;
(statearr_11185_11208[(1)] = (8));

} else {
var statearr_11186_11209 = state_11178__$1;
(statearr_11186_11209[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (3))){
var inst_11176 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11178__$1,inst_11176);
} else {
if((state_val_11179 === (2))){
var state_11178__$1 = state_11178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11178__$1,(4),ch);
} else {
if((state_val_11179 === (11))){
var inst_11168 = (state_11178[(2)]);
var state_11178__$1 = state_11178;
var statearr_11187_11210 = state_11178__$1;
(statearr_11187_11210[(2)] = inst_11168);

(statearr_11187_11210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (9))){
var state_11178__$1 = state_11178;
var statearr_11188_11211 = state_11178__$1;
(statearr_11188_11211[(2)] = null);

(statearr_11188_11211[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (5))){
var inst_11163 = cljs.core.async.close_BANG_.call(null,out);
var state_11178__$1 = state_11178;
var statearr_11189_11212 = state_11178__$1;
(statearr_11189_11212[(2)] = inst_11163);

(statearr_11189_11212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (10))){
var inst_11171 = (state_11178[(2)]);
var state_11178__$1 = (function (){var statearr_11190 = state_11178;
(statearr_11190[(8)] = inst_11171);

return statearr_11190;
})();
var statearr_11191_11213 = state_11178__$1;
(statearr_11191_11213[(2)] = null);

(statearr_11191_11213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11179 === (8))){
var inst_11160 = (state_11178[(7)]);
var state_11178__$1 = state_11178;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11178__$1,(11),out,inst_11160);
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
}
}
}
});})(c__8953__auto___11203,out))
;
return ((function (switch__8841__auto__,c__8953__auto___11203,out){
return (function() {
var cljs$core$async$state_machine__8842__auto__ = null;
var cljs$core$async$state_machine__8842__auto____0 = (function (){
var statearr_11195 = [null,null,null,null,null,null,null,null,null];
(statearr_11195[(0)] = cljs$core$async$state_machine__8842__auto__);

(statearr_11195[(1)] = (1));

return statearr_11195;
});
var cljs$core$async$state_machine__8842__auto____1 = (function (state_11178){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_11178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e11196){if((e11196 instanceof Object)){
var ex__8845__auto__ = e11196;
var statearr_11197_11214 = state_11178;
(statearr_11197_11214[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11196;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11215 = state_11178;
state_11178 = G__11215;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$state_machine__8842__auto__ = function(state_11178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8842__auto____1.call(this,state_11178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8842__auto____0;
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8842__auto____1;
return cljs$core$async$state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto___11203,out))
})();
var state__8955__auto__ = (function (){var statearr_11198 = f__8954__auto__.call(null);
(statearr_11198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto___11203);

return statearr_11198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto___11203,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args11216 = [];
var len__7513__auto___11219 = arguments.length;
var i__7514__auto___11220 = (0);
while(true){
if((i__7514__auto___11220 < len__7513__auto___11219)){
args11216.push((arguments[i__7514__auto___11220]));

var G__11221 = (i__7514__auto___11220 + (1));
i__7514__auto___11220 = G__11221;
continue;
} else {
}
break;
}

var G__11218 = args11216.length;
switch (G__11218) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11216.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto__){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto__){
return (function (state_11388){
var state_val_11389 = (state_11388[(1)]);
if((state_val_11389 === (7))){
var inst_11384 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
var statearr_11390_11431 = state_11388__$1;
(statearr_11390_11431[(2)] = inst_11384);

(statearr_11390_11431[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (20))){
var inst_11354 = (state_11388[(7)]);
var inst_11365 = (state_11388[(2)]);
var inst_11366 = cljs.core.next.call(null,inst_11354);
var inst_11340 = inst_11366;
var inst_11341 = null;
var inst_11342 = (0);
var inst_11343 = (0);
var state_11388__$1 = (function (){var statearr_11391 = state_11388;
(statearr_11391[(8)] = inst_11342);

(statearr_11391[(9)] = inst_11343);

(statearr_11391[(10)] = inst_11340);

(statearr_11391[(11)] = inst_11365);

(statearr_11391[(12)] = inst_11341);

return statearr_11391;
})();
var statearr_11392_11432 = state_11388__$1;
(statearr_11392_11432[(2)] = null);

(statearr_11392_11432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (1))){
var state_11388__$1 = state_11388;
var statearr_11393_11433 = state_11388__$1;
(statearr_11393_11433[(2)] = null);

(statearr_11393_11433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (4))){
var inst_11329 = (state_11388[(13)]);
var inst_11329__$1 = (state_11388[(2)]);
var inst_11330 = (inst_11329__$1 == null);
var state_11388__$1 = (function (){var statearr_11394 = state_11388;
(statearr_11394[(13)] = inst_11329__$1);

return statearr_11394;
})();
if(cljs.core.truth_(inst_11330)){
var statearr_11395_11434 = state_11388__$1;
(statearr_11395_11434[(1)] = (5));

} else {
var statearr_11396_11435 = state_11388__$1;
(statearr_11396_11435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (15))){
var state_11388__$1 = state_11388;
var statearr_11400_11436 = state_11388__$1;
(statearr_11400_11436[(2)] = null);

(statearr_11400_11436[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (21))){
var state_11388__$1 = state_11388;
var statearr_11401_11437 = state_11388__$1;
(statearr_11401_11437[(2)] = null);

(statearr_11401_11437[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (13))){
var inst_11342 = (state_11388[(8)]);
var inst_11343 = (state_11388[(9)]);
var inst_11340 = (state_11388[(10)]);
var inst_11341 = (state_11388[(12)]);
var inst_11350 = (state_11388[(2)]);
var inst_11351 = (inst_11343 + (1));
var tmp11397 = inst_11342;
var tmp11398 = inst_11340;
var tmp11399 = inst_11341;
var inst_11340__$1 = tmp11398;
var inst_11341__$1 = tmp11399;
var inst_11342__$1 = tmp11397;
var inst_11343__$1 = inst_11351;
var state_11388__$1 = (function (){var statearr_11402 = state_11388;
(statearr_11402[(8)] = inst_11342__$1);

(statearr_11402[(9)] = inst_11343__$1);

(statearr_11402[(10)] = inst_11340__$1);

(statearr_11402[(14)] = inst_11350);

(statearr_11402[(12)] = inst_11341__$1);

return statearr_11402;
})();
var statearr_11403_11438 = state_11388__$1;
(statearr_11403_11438[(2)] = null);

(statearr_11403_11438[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (22))){
var state_11388__$1 = state_11388;
var statearr_11404_11439 = state_11388__$1;
(statearr_11404_11439[(2)] = null);

(statearr_11404_11439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (6))){
var inst_11329 = (state_11388[(13)]);
var inst_11338 = f.call(null,inst_11329);
var inst_11339 = cljs.core.seq.call(null,inst_11338);
var inst_11340 = inst_11339;
var inst_11341 = null;
var inst_11342 = (0);
var inst_11343 = (0);
var state_11388__$1 = (function (){var statearr_11405 = state_11388;
(statearr_11405[(8)] = inst_11342);

(statearr_11405[(9)] = inst_11343);

(statearr_11405[(10)] = inst_11340);

(statearr_11405[(12)] = inst_11341);

return statearr_11405;
})();
var statearr_11406_11440 = state_11388__$1;
(statearr_11406_11440[(2)] = null);

(statearr_11406_11440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (17))){
var inst_11354 = (state_11388[(7)]);
var inst_11358 = cljs.core.chunk_first.call(null,inst_11354);
var inst_11359 = cljs.core.chunk_rest.call(null,inst_11354);
var inst_11360 = cljs.core.count.call(null,inst_11358);
var inst_11340 = inst_11359;
var inst_11341 = inst_11358;
var inst_11342 = inst_11360;
var inst_11343 = (0);
var state_11388__$1 = (function (){var statearr_11407 = state_11388;
(statearr_11407[(8)] = inst_11342);

(statearr_11407[(9)] = inst_11343);

(statearr_11407[(10)] = inst_11340);

(statearr_11407[(12)] = inst_11341);

return statearr_11407;
})();
var statearr_11408_11441 = state_11388__$1;
(statearr_11408_11441[(2)] = null);

(statearr_11408_11441[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (3))){
var inst_11386 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11388__$1,inst_11386);
} else {
if((state_val_11389 === (12))){
var inst_11374 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
var statearr_11409_11442 = state_11388__$1;
(statearr_11409_11442[(2)] = inst_11374);

(statearr_11409_11442[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (2))){
var state_11388__$1 = state_11388;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11388__$1,(4),in$);
} else {
if((state_val_11389 === (23))){
var inst_11382 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
var statearr_11410_11443 = state_11388__$1;
(statearr_11410_11443[(2)] = inst_11382);

(statearr_11410_11443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (19))){
var inst_11369 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
var statearr_11411_11444 = state_11388__$1;
(statearr_11411_11444[(2)] = inst_11369);

(statearr_11411_11444[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (11))){
var inst_11340 = (state_11388[(10)]);
var inst_11354 = (state_11388[(7)]);
var inst_11354__$1 = cljs.core.seq.call(null,inst_11340);
var state_11388__$1 = (function (){var statearr_11412 = state_11388;
(statearr_11412[(7)] = inst_11354__$1);

return statearr_11412;
})();
if(inst_11354__$1){
var statearr_11413_11445 = state_11388__$1;
(statearr_11413_11445[(1)] = (14));

} else {
var statearr_11414_11446 = state_11388__$1;
(statearr_11414_11446[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (9))){
var inst_11376 = (state_11388[(2)]);
var inst_11377 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_11388__$1 = (function (){var statearr_11415 = state_11388;
(statearr_11415[(15)] = inst_11376);

return statearr_11415;
})();
if(cljs.core.truth_(inst_11377)){
var statearr_11416_11447 = state_11388__$1;
(statearr_11416_11447[(1)] = (21));

} else {
var statearr_11417_11448 = state_11388__$1;
(statearr_11417_11448[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (5))){
var inst_11332 = cljs.core.async.close_BANG_.call(null,out);
var state_11388__$1 = state_11388;
var statearr_11418_11449 = state_11388__$1;
(statearr_11418_11449[(2)] = inst_11332);

(statearr_11418_11449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (14))){
var inst_11354 = (state_11388[(7)]);
var inst_11356 = cljs.core.chunked_seq_QMARK_.call(null,inst_11354);
var state_11388__$1 = state_11388;
if(inst_11356){
var statearr_11419_11450 = state_11388__$1;
(statearr_11419_11450[(1)] = (17));

} else {
var statearr_11420_11451 = state_11388__$1;
(statearr_11420_11451[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (16))){
var inst_11372 = (state_11388[(2)]);
var state_11388__$1 = state_11388;
var statearr_11421_11452 = state_11388__$1;
(statearr_11421_11452[(2)] = inst_11372);

(statearr_11421_11452[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11389 === (10))){
var inst_11343 = (state_11388[(9)]);
var inst_11341 = (state_11388[(12)]);
var inst_11348 = cljs.core._nth.call(null,inst_11341,inst_11343);
var state_11388__$1 = state_11388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11388__$1,(13),out,inst_11348);
} else {
if((state_val_11389 === (18))){
var inst_11354 = (state_11388[(7)]);
var inst_11363 = cljs.core.first.call(null,inst_11354);
var state_11388__$1 = state_11388;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11388__$1,(20),out,inst_11363);
} else {
if((state_val_11389 === (8))){
var inst_11342 = (state_11388[(8)]);
var inst_11343 = (state_11388[(9)]);
var inst_11345 = (inst_11343 < inst_11342);
var inst_11346 = inst_11345;
var state_11388__$1 = state_11388;
if(cljs.core.truth_(inst_11346)){
var statearr_11422_11453 = state_11388__$1;
(statearr_11422_11453[(1)] = (10));

} else {
var statearr_11423_11454 = state_11388__$1;
(statearr_11423_11454[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__8953__auto__))
;
return ((function (switch__8841__auto__,c__8953__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8842__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8842__auto____0 = (function (){
var statearr_11427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11427[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8842__auto__);

(statearr_11427[(1)] = (1));

return statearr_11427;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8842__auto____1 = (function (state_11388){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_11388);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e11428){if((e11428 instanceof Object)){
var ex__8845__auto__ = e11428;
var statearr_11429_11455 = state_11388;
(statearr_11429_11455[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11388);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11456 = state_11388;
state_11388 = G__11456;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8842__auto__ = function(state_11388){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8842__auto____1.call(this,state_11388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8842__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8842__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto__))
})();
var state__8955__auto__ = (function (){var statearr_11430 = f__8954__auto__.call(null);
(statearr_11430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto__);

return statearr_11430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto__))
);

return c__8953__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args11457 = [];
var len__7513__auto___11460 = arguments.length;
var i__7514__auto___11461 = (0);
while(true){
if((i__7514__auto___11461 < len__7513__auto___11460)){
args11457.push((arguments[i__7514__auto___11461]));

var G__11462 = (i__7514__auto___11461 + (1));
i__7514__auto___11461 = G__11462;
continue;
} else {
}
break;
}

var G__11459 = args11457.length;
switch (G__11459) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11457.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args11464 = [];
var len__7513__auto___11467 = arguments.length;
var i__7514__auto___11468 = (0);
while(true){
if((i__7514__auto___11468 < len__7513__auto___11467)){
args11464.push((arguments[i__7514__auto___11468]));

var G__11469 = (i__7514__auto___11468 + (1));
i__7514__auto___11468 = G__11469;
continue;
} else {
}
break;
}

var G__11466 = args11464.length;
switch (G__11466) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11464.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args11471 = [];
var len__7513__auto___11522 = arguments.length;
var i__7514__auto___11523 = (0);
while(true){
if((i__7514__auto___11523 < len__7513__auto___11522)){
args11471.push((arguments[i__7514__auto___11523]));

var G__11524 = (i__7514__auto___11523 + (1));
i__7514__auto___11523 = G__11524;
continue;
} else {
}
break;
}

var G__11473 = args11471.length;
switch (G__11473) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11471.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8953__auto___11526 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto___11526,out){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto___11526,out){
return (function (state_11497){
var state_val_11498 = (state_11497[(1)]);
if((state_val_11498 === (7))){
var inst_11492 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
var statearr_11499_11527 = state_11497__$1;
(statearr_11499_11527[(2)] = inst_11492);

(statearr_11499_11527[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (1))){
var inst_11474 = null;
var state_11497__$1 = (function (){var statearr_11500 = state_11497;
(statearr_11500[(7)] = inst_11474);

return statearr_11500;
})();
var statearr_11501_11528 = state_11497__$1;
(statearr_11501_11528[(2)] = null);

(statearr_11501_11528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (4))){
var inst_11477 = (state_11497[(8)]);
var inst_11477__$1 = (state_11497[(2)]);
var inst_11478 = (inst_11477__$1 == null);
var inst_11479 = cljs.core.not.call(null,inst_11478);
var state_11497__$1 = (function (){var statearr_11502 = state_11497;
(statearr_11502[(8)] = inst_11477__$1);

return statearr_11502;
})();
if(inst_11479){
var statearr_11503_11529 = state_11497__$1;
(statearr_11503_11529[(1)] = (5));

} else {
var statearr_11504_11530 = state_11497__$1;
(statearr_11504_11530[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (6))){
var state_11497__$1 = state_11497;
var statearr_11505_11531 = state_11497__$1;
(statearr_11505_11531[(2)] = null);

(statearr_11505_11531[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (3))){
var inst_11494 = (state_11497[(2)]);
var inst_11495 = cljs.core.async.close_BANG_.call(null,out);
var state_11497__$1 = (function (){var statearr_11506 = state_11497;
(statearr_11506[(9)] = inst_11494);

return statearr_11506;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11497__$1,inst_11495);
} else {
if((state_val_11498 === (2))){
var state_11497__$1 = state_11497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11497__$1,(4),ch);
} else {
if((state_val_11498 === (11))){
var inst_11477 = (state_11497[(8)]);
var inst_11486 = (state_11497[(2)]);
var inst_11474 = inst_11477;
var state_11497__$1 = (function (){var statearr_11507 = state_11497;
(statearr_11507[(7)] = inst_11474);

(statearr_11507[(10)] = inst_11486);

return statearr_11507;
})();
var statearr_11508_11532 = state_11497__$1;
(statearr_11508_11532[(2)] = null);

(statearr_11508_11532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (9))){
var inst_11477 = (state_11497[(8)]);
var state_11497__$1 = state_11497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11497__$1,(11),out,inst_11477);
} else {
if((state_val_11498 === (5))){
var inst_11474 = (state_11497[(7)]);
var inst_11477 = (state_11497[(8)]);
var inst_11481 = cljs.core._EQ_.call(null,inst_11477,inst_11474);
var state_11497__$1 = state_11497;
if(inst_11481){
var statearr_11510_11533 = state_11497__$1;
(statearr_11510_11533[(1)] = (8));

} else {
var statearr_11511_11534 = state_11497__$1;
(statearr_11511_11534[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (10))){
var inst_11489 = (state_11497[(2)]);
var state_11497__$1 = state_11497;
var statearr_11512_11535 = state_11497__$1;
(statearr_11512_11535[(2)] = inst_11489);

(statearr_11512_11535[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11498 === (8))){
var inst_11474 = (state_11497[(7)]);
var tmp11509 = inst_11474;
var inst_11474__$1 = tmp11509;
var state_11497__$1 = (function (){var statearr_11513 = state_11497;
(statearr_11513[(7)] = inst_11474__$1);

return statearr_11513;
})();
var statearr_11514_11536 = state_11497__$1;
(statearr_11514_11536[(2)] = null);

(statearr_11514_11536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
});})(c__8953__auto___11526,out))
;
return ((function (switch__8841__auto__,c__8953__auto___11526,out){
return (function() {
var cljs$core$async$state_machine__8842__auto__ = null;
var cljs$core$async$state_machine__8842__auto____0 = (function (){
var statearr_11518 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_11518[(0)] = cljs$core$async$state_machine__8842__auto__);

(statearr_11518[(1)] = (1));

return statearr_11518;
});
var cljs$core$async$state_machine__8842__auto____1 = (function (state_11497){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_11497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e11519){if((e11519 instanceof Object)){
var ex__8845__auto__ = e11519;
var statearr_11520_11537 = state_11497;
(statearr_11520_11537[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11538 = state_11497;
state_11497 = G__11538;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$state_machine__8842__auto__ = function(state_11497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8842__auto____1.call(this,state_11497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8842__auto____0;
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8842__auto____1;
return cljs$core$async$state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto___11526,out))
})();
var state__8955__auto__ = (function (){var statearr_11521 = f__8954__auto__.call(null);
(statearr_11521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto___11526);

return statearr_11521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto___11526,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args11539 = [];
var len__7513__auto___11609 = arguments.length;
var i__7514__auto___11610 = (0);
while(true){
if((i__7514__auto___11610 < len__7513__auto___11609)){
args11539.push((arguments[i__7514__auto___11610]));

var G__11611 = (i__7514__auto___11610 + (1));
i__7514__auto___11610 = G__11611;
continue;
} else {
}
break;
}

var G__11541 = args11539.length;
switch (G__11541) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11539.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8953__auto___11613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto___11613,out){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto___11613,out){
return (function (state_11579){
var state_val_11580 = (state_11579[(1)]);
if((state_val_11580 === (7))){
var inst_11575 = (state_11579[(2)]);
var state_11579__$1 = state_11579;
var statearr_11581_11614 = state_11579__$1;
(statearr_11581_11614[(2)] = inst_11575);

(statearr_11581_11614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11580 === (1))){
var inst_11542 = (new Array(n));
var inst_11543 = inst_11542;
var inst_11544 = (0);
var state_11579__$1 = (function (){var statearr_11582 = state_11579;
(statearr_11582[(7)] = inst_11543);

(statearr_11582[(8)] = inst_11544);

return statearr_11582;
})();
var statearr_11583_11615 = state_11579__$1;
(statearr_11583_11615[(2)] = null);

(statearr_11583_11615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11580 === (4))){
var inst_11547 = (state_11579[(9)]);
var inst_11547__$1 = (state_11579[(2)]);
var inst_11548 = (inst_11547__$1 == null);
var inst_11549 = cljs.core.not.call(null,inst_11548);
var state_11579__$1 = (function (){var statearr_11584 = state_11579;
(statearr_11584[(9)] = inst_11547__$1);

return statearr_11584;
})();
if(inst_11549){
var statearr_11585_11616 = state_11579__$1;
(statearr_11585_11616[(1)] = (5));

} else {
var statearr_11586_11617 = state_11579__$1;
(statearr_11586_11617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11580 === (15))){
var inst_11569 = (state_11579[(2)]);
var state_11579__$1 = state_11579;
var statearr_11587_11618 = state_11579__$1;
(statearr_11587_11618[(2)] = inst_11569);

(statearr_11587_11618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11580 === (13))){
var state_11579__$1 = state_11579;
var statearr_11588_11619 = state_11579__$1;
(statearr_11588_11619[(2)] = null);

(statearr_11588_11619[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11580 === (6))){
var inst_11544 = (state_11579[(8)]);
var inst_11565 = (inst_11544 > (0));
var state_11579__$1 = state_11579;
if(cljs.core.truth_(inst_11565)){
var statearr_11589_11620 = state_11579__$1;
(statearr_11589_11620[(1)] = (12));

} else {
var statearr_11590_11621 = state_11579__$1;
(statearr_11590_11621[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11580 === (3))){
var inst_11577 = (state_11579[(2)]);
var state_11579__$1 = state_11579;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11579__$1,inst_11577);
} else {
if((state_val_11580 === (12))){
var inst_11543 = (state_11579[(7)]);
var inst_11567 = cljs.core.vec.call(null,inst_11543);
var state_11579__$1 = state_11579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11579__$1,(15),out,inst_11567);
} else {
if((state_val_11580 === (2))){
var state_11579__$1 = state_11579;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11579__$1,(4),ch);
} else {
if((state_val_11580 === (11))){
var inst_11559 = (state_11579[(2)]);
var inst_11560 = (new Array(n));
var inst_11543 = inst_11560;
var inst_11544 = (0);
var state_11579__$1 = (function (){var statearr_11591 = state_11579;
(statearr_11591[(7)] = inst_11543);

(statearr_11591[(10)] = inst_11559);

(statearr_11591[(8)] = inst_11544);

return statearr_11591;
})();
var statearr_11592_11622 = state_11579__$1;
(statearr_11592_11622[(2)] = null);

(statearr_11592_11622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11580 === (9))){
var inst_11543 = (state_11579[(7)]);
var inst_11557 = cljs.core.vec.call(null,inst_11543);
var state_11579__$1 = state_11579;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11579__$1,(11),out,inst_11557);
} else {
if((state_val_11580 === (5))){
var inst_11543 = (state_11579[(7)]);
var inst_11547 = (state_11579[(9)]);
var inst_11552 = (state_11579[(11)]);
var inst_11544 = (state_11579[(8)]);
var inst_11551 = (inst_11543[inst_11544] = inst_11547);
var inst_11552__$1 = (inst_11544 + (1));
var inst_11553 = (inst_11552__$1 < n);
var state_11579__$1 = (function (){var statearr_11593 = state_11579;
(statearr_11593[(12)] = inst_11551);

(statearr_11593[(11)] = inst_11552__$1);

return statearr_11593;
})();
if(cljs.core.truth_(inst_11553)){
var statearr_11594_11623 = state_11579__$1;
(statearr_11594_11623[(1)] = (8));

} else {
var statearr_11595_11624 = state_11579__$1;
(statearr_11595_11624[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11580 === (14))){
var inst_11572 = (state_11579[(2)]);
var inst_11573 = cljs.core.async.close_BANG_.call(null,out);
var state_11579__$1 = (function (){var statearr_11597 = state_11579;
(statearr_11597[(13)] = inst_11572);

return statearr_11597;
})();
var statearr_11598_11625 = state_11579__$1;
(statearr_11598_11625[(2)] = inst_11573);

(statearr_11598_11625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11580 === (10))){
var inst_11563 = (state_11579[(2)]);
var state_11579__$1 = state_11579;
var statearr_11599_11626 = state_11579__$1;
(statearr_11599_11626[(2)] = inst_11563);

(statearr_11599_11626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11580 === (8))){
var inst_11543 = (state_11579[(7)]);
var inst_11552 = (state_11579[(11)]);
var tmp11596 = inst_11543;
var inst_11543__$1 = tmp11596;
var inst_11544 = inst_11552;
var state_11579__$1 = (function (){var statearr_11600 = state_11579;
(statearr_11600[(7)] = inst_11543__$1);

(statearr_11600[(8)] = inst_11544);

return statearr_11600;
})();
var statearr_11601_11627 = state_11579__$1;
(statearr_11601_11627[(2)] = null);

(statearr_11601_11627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__8953__auto___11613,out))
;
return ((function (switch__8841__auto__,c__8953__auto___11613,out){
return (function() {
var cljs$core$async$state_machine__8842__auto__ = null;
var cljs$core$async$state_machine__8842__auto____0 = (function (){
var statearr_11605 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11605[(0)] = cljs$core$async$state_machine__8842__auto__);

(statearr_11605[(1)] = (1));

return statearr_11605;
});
var cljs$core$async$state_machine__8842__auto____1 = (function (state_11579){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_11579);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e11606){if((e11606 instanceof Object)){
var ex__8845__auto__ = e11606;
var statearr_11607_11628 = state_11579;
(statearr_11607_11628[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11579);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11629 = state_11579;
state_11579 = G__11629;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$state_machine__8842__auto__ = function(state_11579){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8842__auto____1.call(this,state_11579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8842__auto____0;
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8842__auto____1;
return cljs$core$async$state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto___11613,out))
})();
var state__8955__auto__ = (function (){var statearr_11608 = f__8954__auto__.call(null);
(statearr_11608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto___11613);

return statearr_11608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto___11613,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args11630 = [];
var len__7513__auto___11704 = arguments.length;
var i__7514__auto___11705 = (0);
while(true){
if((i__7514__auto___11705 < len__7513__auto___11704)){
args11630.push((arguments[i__7514__auto___11705]));

var G__11706 = (i__7514__auto___11705 + (1));
i__7514__auto___11705 = G__11706;
continue;
} else {
}
break;
}

var G__11632 = args11630.length;
switch (G__11632) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11630.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8953__auto___11708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto___11708,out){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto___11708,out){
return (function (state_11674){
var state_val_11675 = (state_11674[(1)]);
if((state_val_11675 === (7))){
var inst_11670 = (state_11674[(2)]);
var state_11674__$1 = state_11674;
var statearr_11676_11709 = state_11674__$1;
(statearr_11676_11709[(2)] = inst_11670);

(statearr_11676_11709[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11675 === (1))){
var inst_11633 = [];
var inst_11634 = inst_11633;
var inst_11635 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_11674__$1 = (function (){var statearr_11677 = state_11674;
(statearr_11677[(7)] = inst_11635);

(statearr_11677[(8)] = inst_11634);

return statearr_11677;
})();
var statearr_11678_11710 = state_11674__$1;
(statearr_11678_11710[(2)] = null);

(statearr_11678_11710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11675 === (4))){
var inst_11638 = (state_11674[(9)]);
var inst_11638__$1 = (state_11674[(2)]);
var inst_11639 = (inst_11638__$1 == null);
var inst_11640 = cljs.core.not.call(null,inst_11639);
var state_11674__$1 = (function (){var statearr_11679 = state_11674;
(statearr_11679[(9)] = inst_11638__$1);

return statearr_11679;
})();
if(inst_11640){
var statearr_11680_11711 = state_11674__$1;
(statearr_11680_11711[(1)] = (5));

} else {
var statearr_11681_11712 = state_11674__$1;
(statearr_11681_11712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11675 === (15))){
var inst_11664 = (state_11674[(2)]);
var state_11674__$1 = state_11674;
var statearr_11682_11713 = state_11674__$1;
(statearr_11682_11713[(2)] = inst_11664);

(statearr_11682_11713[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11675 === (13))){
var state_11674__$1 = state_11674;
var statearr_11683_11714 = state_11674__$1;
(statearr_11683_11714[(2)] = null);

(statearr_11683_11714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11675 === (6))){
var inst_11634 = (state_11674[(8)]);
var inst_11659 = inst_11634.length;
var inst_11660 = (inst_11659 > (0));
var state_11674__$1 = state_11674;
if(cljs.core.truth_(inst_11660)){
var statearr_11684_11715 = state_11674__$1;
(statearr_11684_11715[(1)] = (12));

} else {
var statearr_11685_11716 = state_11674__$1;
(statearr_11685_11716[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11675 === (3))){
var inst_11672 = (state_11674[(2)]);
var state_11674__$1 = state_11674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11674__$1,inst_11672);
} else {
if((state_val_11675 === (12))){
var inst_11634 = (state_11674[(8)]);
var inst_11662 = cljs.core.vec.call(null,inst_11634);
var state_11674__$1 = state_11674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11674__$1,(15),out,inst_11662);
} else {
if((state_val_11675 === (2))){
var state_11674__$1 = state_11674;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11674__$1,(4),ch);
} else {
if((state_val_11675 === (11))){
var inst_11642 = (state_11674[(10)]);
var inst_11638 = (state_11674[(9)]);
var inst_11652 = (state_11674[(2)]);
var inst_11653 = [];
var inst_11654 = inst_11653.push(inst_11638);
var inst_11634 = inst_11653;
var inst_11635 = inst_11642;
var state_11674__$1 = (function (){var statearr_11686 = state_11674;
(statearr_11686[(11)] = inst_11652);

(statearr_11686[(12)] = inst_11654);

(statearr_11686[(7)] = inst_11635);

(statearr_11686[(8)] = inst_11634);

return statearr_11686;
})();
var statearr_11687_11717 = state_11674__$1;
(statearr_11687_11717[(2)] = null);

(statearr_11687_11717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11675 === (9))){
var inst_11634 = (state_11674[(8)]);
var inst_11650 = cljs.core.vec.call(null,inst_11634);
var state_11674__$1 = state_11674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11674__$1,(11),out,inst_11650);
} else {
if((state_val_11675 === (5))){
var inst_11635 = (state_11674[(7)]);
var inst_11642 = (state_11674[(10)]);
var inst_11638 = (state_11674[(9)]);
var inst_11642__$1 = f.call(null,inst_11638);
var inst_11643 = cljs.core._EQ_.call(null,inst_11642__$1,inst_11635);
var inst_11644 = cljs.core.keyword_identical_QMARK_.call(null,inst_11635,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_11645 = (inst_11643) || (inst_11644);
var state_11674__$1 = (function (){var statearr_11688 = state_11674;
(statearr_11688[(10)] = inst_11642__$1);

return statearr_11688;
})();
if(cljs.core.truth_(inst_11645)){
var statearr_11689_11718 = state_11674__$1;
(statearr_11689_11718[(1)] = (8));

} else {
var statearr_11690_11719 = state_11674__$1;
(statearr_11690_11719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11675 === (14))){
var inst_11667 = (state_11674[(2)]);
var inst_11668 = cljs.core.async.close_BANG_.call(null,out);
var state_11674__$1 = (function (){var statearr_11692 = state_11674;
(statearr_11692[(13)] = inst_11667);

return statearr_11692;
})();
var statearr_11693_11720 = state_11674__$1;
(statearr_11693_11720[(2)] = inst_11668);

(statearr_11693_11720[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11675 === (10))){
var inst_11657 = (state_11674[(2)]);
var state_11674__$1 = state_11674;
var statearr_11694_11721 = state_11674__$1;
(statearr_11694_11721[(2)] = inst_11657);

(statearr_11694_11721[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_11675 === (8))){
var inst_11642 = (state_11674[(10)]);
var inst_11634 = (state_11674[(8)]);
var inst_11638 = (state_11674[(9)]);
var inst_11647 = inst_11634.push(inst_11638);
var tmp11691 = inst_11634;
var inst_11634__$1 = tmp11691;
var inst_11635 = inst_11642;
var state_11674__$1 = (function (){var statearr_11695 = state_11674;
(statearr_11695[(7)] = inst_11635);

(statearr_11695[(14)] = inst_11647);

(statearr_11695[(8)] = inst_11634__$1);

return statearr_11695;
})();
var statearr_11696_11722 = state_11674__$1;
(statearr_11696_11722[(2)] = null);

(statearr_11696_11722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
});})(c__8953__auto___11708,out))
;
return ((function (switch__8841__auto__,c__8953__auto___11708,out){
return (function() {
var cljs$core$async$state_machine__8842__auto__ = null;
var cljs$core$async$state_machine__8842__auto____0 = (function (){
var statearr_11700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_11700[(0)] = cljs$core$async$state_machine__8842__auto__);

(statearr_11700[(1)] = (1));

return statearr_11700;
});
var cljs$core$async$state_machine__8842__auto____1 = (function (state_11674){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_11674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e11701){if((e11701 instanceof Object)){
var ex__8845__auto__ = e11701;
var statearr_11702_11723 = state_11674;
(statearr_11702_11723[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11724 = state_11674;
state_11674 = G__11724;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
cljs$core$async$state_machine__8842__auto__ = function(state_11674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8842__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8842__auto____1.call(this,state_11674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8842__auto____0;
cljs$core$async$state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8842__auto____1;
return cljs$core$async$state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto___11708,out))
})();
var state__8955__auto__ = (function (){var statearr_11703 = f__8954__auto__.call(null);
(statearr_11703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto___11708);

return statearr_11703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto___11708,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map