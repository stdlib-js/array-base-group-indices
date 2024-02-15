// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.1.0-esm/index.mjs";function r(r,s){var n,a,i,d,h,m;if(a=r.length,s.length!==a)throw new RangeError("invalid argument. The first and second arguments must have the same length.");for(n=t(s),i={},m=0;m<a;m++)h=i[d=n(s,m).toString()],e(h)?h.push(m):i[d]=[m];return i}export{r as default};
//# sourceMappingURL=index.mjs.map
