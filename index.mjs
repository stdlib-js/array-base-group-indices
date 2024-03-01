// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.1-esm/index.mjs";function e(e,n){var o,i,d,m,l,a;if(i=e.length,n.length!==i)throw new RangeError(r("1nJFI"));for(o=s(n),d={},a=0;a<i;a++)l=d[m=o(n,a).toString()],t(l)?l.push(a):d[m]=[a];return d}export{e as default};
//# sourceMappingURL=index.mjs.map
