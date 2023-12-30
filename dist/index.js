"use strict";var g=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var o=g(function(d,u){
var h=require('@stdlib/assert-is-array/dist'),l=require('@stdlib/array-base-resolve-getter/dist');function c(a,r){var v,n,t,i,s,e;if(n=a.length,r.length!==n)throw new RangeError("invalid argument. The first and second arguments must have the same length.");for(v=l(r),t={},e=0;e<n;e++)i=v(r,e).toString(),s=t[i],h(s)?s.push(e):t[i]=[e];return t}u.exports=c
});var f=o();module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
