"use strict";var g=function(n,r){return function(){try{return r||n((r={exports:{}}).exports,r),r.exports}catch(t){throw r=0,t}}};var o=g(function(d,u){"use strict";var h=require("@stdlib/assert-is-array"),l=require("@stdlib/array-base-resolve-getter");function c(n,r){var t,i,a,s,v,e;if(i=n.length,r.length!==i)throw new RangeError("invalid argument. The first and second arguments must have the same length.");for(t=l(r),a={},e=0;e<i;e++)s=t(r,e).toString(),v=a[s],h(v)?v.push(e):a[s]=[e];return a}u.exports=c});var f=o();module.exports=f;
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
