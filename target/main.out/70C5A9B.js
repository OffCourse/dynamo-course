goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11799__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11799 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11800__i = 0, G__11800__a = new Array(arguments.length -  0);
while (G__11800__i < G__11800__a.length) {G__11800__a[G__11800__i] = arguments[G__11800__i + 0]; ++G__11800__i;}
  args = new cljs.core.IndexedSeq(G__11800__a,0);
} 
return G__11799__delegate.call(this,args);};
G__11799.cljs$lang$maxFixedArity = 0;
G__11799.cljs$lang$applyTo = (function (arglist__11801){
var args = cljs.core.seq(arglist__11801);
return G__11799__delegate(args);
});
G__11799.cljs$core$IFn$_invoke$arity$variadic = G__11799__delegate;
return G__11799;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11802__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11802 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11803__i = 0, G__11803__a = new Array(arguments.length -  0);
while (G__11803__i < G__11803__a.length) {G__11803__a[G__11803__i] = arguments[G__11803__i + 0]; ++G__11803__i;}
  args = new cljs.core.IndexedSeq(G__11803__a,0);
} 
return G__11802__delegate.call(this,args);};
G__11802.cljs$lang$maxFixedArity = 0;
G__11802.cljs$lang$applyTo = (function (arglist__11804){
var args = cljs.core.seq(arglist__11804);
return G__11802__delegate(args);
});
G__11802.cljs$core$IFn$_invoke$arity$variadic = G__11802__delegate;
return G__11802;
})()
;

return null;
});
