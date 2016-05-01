// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__11727__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__11727 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11728__i = 0, G__11728__a = new Array(arguments.length -  0);
while (G__11728__i < G__11728__a.length) {G__11728__a[G__11728__i] = arguments[G__11728__i + 0]; ++G__11728__i;}
  args = new cljs.core.IndexedSeq(G__11728__a,0);
} 
return G__11727__delegate.call(this,args);};
G__11727.cljs$lang$maxFixedArity = 0;
G__11727.cljs$lang$applyTo = (function (arglist__11729){
var args = cljs.core.seq(arglist__11729);
return G__11727__delegate(args);
});
G__11727.cljs$core$IFn$_invoke$arity$variadic = G__11727__delegate;
return G__11727;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__11730__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__11730 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11731__i = 0, G__11731__a = new Array(arguments.length -  0);
while (G__11731__i < G__11731__a.length) {G__11731__a[G__11731__i] = arguments[G__11731__i + 0]; ++G__11731__i;}
  args = new cljs.core.IndexedSeq(G__11731__a,0);
} 
return G__11730__delegate.call(this,args);};
G__11730.cljs$lang$maxFixedArity = 0;
G__11730.cljs$lang$applyTo = (function (arglist__11732){
var args = cljs.core.seq(arglist__11732);
return G__11730__delegate(args);
});
G__11730.cljs$core$IFn$_invoke$arity$variadic = G__11730__delegate;
return G__11730;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map