"use strict";var g=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var o=g(function(d,u){"use strict";var h=require("@stdlib/assert-is-array"),l=require("@stdlib/array-base-resolve-getter");function c(a,r){var v,n,t,i,s,e;if(n=a.length,r.length!==n)throw new RangeError("invalid argument. The first and second arguments must have the same length.");for(v=l(r),t={},e=0;e<n;e++)i=v(r,e).toString(),s=t[i],h(s)?s.push(e):t[i]=[e];return t}u.exports=c});var f=o();module.exports=f;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
