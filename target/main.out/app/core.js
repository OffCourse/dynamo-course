// Compiled by ClojureScript 1.7.228 {:target :nodejs}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.nodejs');
goog.require('cljs.core.async');
cljs.nodejs.enable_util_print_BANG_.call(null);
app.core.AWS = cljs.nodejs.require.call(null,"aws-sdk");
app.core.doc = cljs.nodejs.require.call(null,"dynamodb-doc");
app.core.dynamo = app.core.doc.DynamoDB();
app.core.get_courses = (function app$core$get_courses(){
var c = cljs.core.async.chan.call(null);
var query = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"TableName","TableName",1349571255),"courses"], null);
app.core.dynamo.scan(cljs.core.clj__GT_js.call(null,query),((function (c,query){
return (function (p1__11886_SHARP_,p2__11885_SHARP_){
var c__8953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto__,c,query){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto__,c,query){
return (function (state_11904){
var state_val_11905 = (state_11904[(1)]);
if((state_val_11905 === (1))){
var inst_11900 = cljs.core.clj__GT_js.call(null,p2__11885_SHARP_);
var state_11904__$1 = state_11904;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11904__$1,(2),c,inst_11900);
} else {
if((state_val_11905 === (2))){
var inst_11902 = (state_11904[(2)]);
var state_11904__$1 = state_11904;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11904__$1,inst_11902);
} else {
return null;
}
}
});})(c__8953__auto__,c,query))
;
return ((function (switch__8841__auto__,c__8953__auto__,c,query){
return (function() {
var app$core$get_courses_$_state_machine__8842__auto__ = null;
var app$core$get_courses_$_state_machine__8842__auto____0 = (function (){
var statearr_11909 = [null,null,null,null,null,null,null];
(statearr_11909[(0)] = app$core$get_courses_$_state_machine__8842__auto__);

(statearr_11909[(1)] = (1));

return statearr_11909;
});
var app$core$get_courses_$_state_machine__8842__auto____1 = (function (state_11904){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_11904);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e11910){if((e11910 instanceof Object)){
var ex__8845__auto__ = e11910;
var statearr_11911_11913 = state_11904;
(statearr_11911_11913[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11904);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11914 = state_11904;
state_11904 = G__11914;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
app$core$get_courses_$_state_machine__8842__auto__ = function(state_11904){
switch(arguments.length){
case 0:
return app$core$get_courses_$_state_machine__8842__auto____0.call(this);
case 1:
return app$core$get_courses_$_state_machine__8842__auto____1.call(this,state_11904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$core$get_courses_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = app$core$get_courses_$_state_machine__8842__auto____0;
app$core$get_courses_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = app$core$get_courses_$_state_machine__8842__auto____1;
return app$core$get_courses_$_state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto__,c,query))
})();
var state__8955__auto__ = (function (){var statearr_11912 = f__8954__auto__.call(null);
(statearr_11912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto__);

return statearr_11912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto__,c,query))
);

return c__8953__auto__;
});})(c,query))
);

return c;
});
app.core.handler = (function app$core$handler(event,context,cb){
var c__8953__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8953__auto__){
return (function (){
var f__8954__auto__ = (function (){var switch__8841__auto__ = ((function (c__8953__auto__){
return (function (state_11934){
var state_val_11935 = (state_11934[(1)]);
if((state_val_11935 === (1))){
var inst_11929 = app.core.get_courses.call(null);
var state_11934__$1 = state_11934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11934__$1,(2),inst_11929);
} else {
if((state_val_11935 === (2))){
var inst_11931 = (state_11934[(2)]);
var inst_11932 = cb.call(null,null,inst_11931);
var state_11934__$1 = state_11934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11934__$1,inst_11932);
} else {
return null;
}
}
});})(c__8953__auto__))
;
return ((function (switch__8841__auto__,c__8953__auto__){
return (function() {
var app$core$handler_$_state_machine__8842__auto__ = null;
var app$core$handler_$_state_machine__8842__auto____0 = (function (){
var statearr_11939 = [null,null,null,null,null,null,null];
(statearr_11939[(0)] = app$core$handler_$_state_machine__8842__auto__);

(statearr_11939[(1)] = (1));

return statearr_11939;
});
var app$core$handler_$_state_machine__8842__auto____1 = (function (state_11934){
while(true){
var ret_value__8843__auto__ = (function (){try{while(true){
var result__8844__auto__ = switch__8841__auto__.call(null,state_11934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8844__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8844__auto__;
}
break;
}
}catch (e11940){if((e11940 instanceof Object)){
var ex__8845__auto__ = e11940;
var statearr_11941_11943 = state_11934;
(statearr_11941_11943[(5)] = ex__8845__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e11940;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8843__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__11944 = state_11934;
state_11934 = G__11944;
continue;
} else {
return ret_value__8843__auto__;
}
break;
}
});
app$core$handler_$_state_machine__8842__auto__ = function(state_11934){
switch(arguments.length){
case 0:
return app$core$handler_$_state_machine__8842__auto____0.call(this);
case 1:
return app$core$handler_$_state_machine__8842__auto____1.call(this,state_11934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$core$handler_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$0 = app$core$handler_$_state_machine__8842__auto____0;
app$core$handler_$_state_machine__8842__auto__.cljs$core$IFn$_invoke$arity$1 = app$core$handler_$_state_machine__8842__auto____1;
return app$core$handler_$_state_machine__8842__auto__;
})()
;})(switch__8841__auto__,c__8953__auto__))
})();
var state__8955__auto__ = (function (){var statearr_11942 = f__8954__auto__.call(null);
(statearr_11942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8953__auto__);

return statearr_11942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8955__auto__);
});})(c__8953__auto__))
);

return c__8953__auto__;
});

//# sourceMappingURL=core.js.map