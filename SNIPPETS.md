## JavaScript and TypeScript Snippets

Complete list of all JavaScript and TypeScript snippets for Visual Studio Code. The rules for all these snippets are explained in the [README.md](./README.md)

### JSON

| Prefix | Snippet |
| -----: | ------- |
| `__` | `"${1:key}": { $0 }` |
| `_` | `{ $0 }` |
| `_$` | `"${1:key}": [ $0 ]` |
| `_1` | `"${1:key}": ${0:null}` |
| `_b1` | `"${1:key}": ${0:false}` |
| `_n1` | `"${1:key}": ${0:0}` |
| `_s1` | `"${1:key}": "$0"` |
| `f` | `false` |
| `n` | `null` |
| `t` | `true` |

### JavaScript

| Prefix | Snippet |
| -----: | ------- |
| `_` | `${1:name} ($2) { $0 }` |
| `$_` | `($1) => { $0 }` |
| `$1` | `($1) => $0` |
| `a_` | `async ${1:name} ($2) { $0 }` |
| `a` | `await ` |
| `a$_` | `async ($1) => { $0 }` |
| `a$1` | `async ($1) => $0` |
| `af_` | `async function ${1:name} ($2) { $0 }` |
| `AiA$` | `Array.isArray($0)` |
| `au_1` | `await using { ${1:name} } = $0;` |
| `au1` | `await using ${1:name} = $0;` |
| `b` | `break$0;` |
| `c_` | `constructor ($1) { $0 }` |
| `c_1` | `const { $0 } = ${1:null};` |
| `c_b` | `case $0: { break; }` |
| `c` | `continue$0;` |
| `c1` | `const ${1:name} = ${0:null};` |
| `ca$` | `console.assert($0);` |
| `cb` | `case $0: break;` |
| `cc$` | `console.clear();` |
| `cc$` | `console.count($0);` |
| `cd$` | `console.debug($0);` |
| `cd$` | `console.dir($0);` |
| `ce$` | `console.error($0);` |
| `cg$` | `console.group($0);` |
| `cgC$` | `console.groupCollapsed($0);` |
| `cgE$` | `console.groupEnd($0);` |
| `ci$` | `console.info($0);` |
| `cl$` | `console.log($0);` |
| `ct$` | `console.table($0);` |
| `ct$` | `console.time($0);` |
| `ct$` | `console.trace($0);` |
| `ctE$` | `console.timeEnd($0);` |
| `ctL$` | `console.timeLog($0);` |
| `cw$` | `console.warn($0);` |
| `d_w` | `do { } while (${0:condition});` |
| `d` | `delete ` |
| `da` | `default as ${0:name}` |
| `e_` | `else { $0 }` |
| `e_` | `export { $0 };` |
| `e_f1` | `export { ${0:name} } from '${1:path}';` |
| `e1` | `else $0;` |
| `eaf_` | `export async function ${1:name} ($2) { $0 }` |
| `ec_` | `export class ${1:name} { $0 }` |
| `ec1` | `export const ${1:name} = ${0:null};` |
| `ece_` | `export class ${1:name} extends ${2:parent} { $0 }` |
| `ed_` | `export default { $0 };` |
| `ed1` | `export default $0;` |
| `edaf_` | `export default async function ($1) { $0 }` |
| `edc_` | `export default class { $0 }` |
| `edce_` | `export default class extends ${1:parent} { $0 }` |
| `edf_` | `export default function ($1) { $0 }` |
| `ef_` | `export function ${1:name} ($2) { $0 }` |
| `ef1` | `export * from '${0:path}';` |
| `ei_` | `else if ($0) { }` |
| `ei1` | `else if ($1) §0;` |
| `el1` | `export let ${1:name} = ${0:null};` |
| `ev1` | `export var ${1:name} = ${0:null};` |
| `f_` | `function ${1:name} ($2) { $0 }` |
| `f` | `false` |
| `faco_` | `for await (const ${1:value} of ${0:object}) { }` |
| `faco1` | `for await (const ${1:value} of ${2:object}) $0;` |
| `falo_` | `for await (let ${1:value} of ${0:object}) { }` |
| `falo1` | `for await (let ${1:value} of ${2:object}) $0;` |
| `favo_` | `for await (var ${1:value} of ${0:object}) { }` |
| `favo1` | `for await (var ${1:value} of ${2:object}) $0;` |
| `fci_` | `for (const ${1:key} in ${0:object}) { }` |
| `fci1` | `for (const ${1:key} in ${2:object}) $0;` |
| `fco_` | `for (const ${1:value} of ${0:object}) { }` |
| `fco1` | `for (const ${1:value} of ${2:object}) $0;` |
| `fl_` | `for (let i = 0; ${0:condition}; i++) { }` |
| `fl1` | `for (let i = 0; ${1:condition}; i++) $0;` |
| `fli_` | `for (let ${1:key} in ${0:object}) { }` |
| `fli1` | `for (let ${1:key} in ${2:object}) $0;` |
| `flo_` | `for (let ${1:value} of ${0:object}) { }` |
| `flo1` | `for (let ${1:value} of ${2:object}) $0;` |
| `fvi_` | `for (var ${1:key} in ${0:object}) { }` |
| `fvi1` | `for (var ${1:key} in ${2:object}) $0;` |
| `fvo_` | `for (var ${1:value} of ${0:object}) { }` |
| `fvo1` | `for (var ${1:value} of ${2:object}) $0;` |
| `g_` | `get ${1:name} () { $0 }` |
| `g_s_` | `get ${1:name} () { $0 } set ${1:name} (value) { }` |
| `i_` | `if (${0:condition}) { }` |
| `i_f1` | `import { ${0:name} } from '${1:path}';` |
| `i` | `${1:identifier} instanceof ${0:constructor}` |
| `i1` | `if (${1:condition}) $0;` |
| `iaf1` | `import * as ${0:name} from '${1:path}';` |
| `if1` | `import ${0:name} from '${1:path}';` |
| `ir1` | `if (${0:condition}) return;` |
| `Jp$` | `JSON.parse($0)` |
| `Js$` | `JSON.stringify($0)` |
| `Js$n` | `JSON.stringify($0, null, '\t')` |
| `l_1` | `let { $0 } = ${1:null};` |
| `l1` | `let ${1:name} = ${0:null};` |
| `m_` | `module ${1:name} { $0 }` |
| `n` | `null` |
| `n$` | `new ${1:Name}($0)` |
| `nA$` | `new Array($0)` |
| `nD$` | `new Date($0)` |
| `nP$_` | `new Promise((resolve, reject) => { $0 })` |
| `nPf_` | `new Promise(function (resolve, reject) { $0 })` |
| `nRE$` | `new RegExp($0)` |
| `Oa$` | `Object.assign($0)` |
| `Oc$` | `Object.create($0)` |
| `Oe$` | `Object.entries($0)` |
| `Ok$` | `Object.keys($0)` |
| `Ov$` | `Object.values($0)` |
| `Pa$` | `Promise.all($0)` |
| `Pr$` | `Promise.reject($0)` |
| `Pr$` | `Promise.resolve($0)` |
| `r_` | `return { $0 };` |
| `r` | `return$0;` |
| `s_` | `set ${1:name} (${2:value}) { $0 }` |
| `s_` | `static ${1:name} ($2) { $0 }` |
| `s_c_b` | `switch (${1:value}) { case $0: { break; } }` |
| `s_c_bd` | `switch (${1:value}) { case $0: { break; } default: }` |
| `s_cb` | `switch (${1:value}) { case $0: break; }` |
| `s_cbd` | `switch (${1:value}) { case $0: break; default: }` |
| `s_d` | `switch (${0:value}) { default: }` |
| `s` | `super.` |
| `s$` | `super($0);` |
| `S$` | `Symbol($0)` |
| `sa_` | `static async ${1:name} ($2) { $0 }` |
| `SaD` | `Symbol.asyncDispose` |
| `Sd` | `Symbol.dispose` |
| `Sf$` | `Symbol.for($0)` |
| `SkF$` | `Symbol.keyFor($0)` |
| `t_c_` | `try { $0 } catch (error) { }` |
| `t_c_f_` | `try { $0 } catch (error) { } finally { }` |
| `t_f_` | `try { $0 } finally { }` |
| `t` | `true` |
| `t$` | `this.$0()` |
| `tb` | `typeof $0 === '${1\|boolean,bigint\|}'` |
| `tf` | `typeof $0 === 'function'` |
| `tJ_` | `toJSON () { $0 }` |
| `tn` | `typeof $0 === 'number'` |
| `tnE$` | `throw new Error($0)` |
| `tnEE$` | `throw new EvalError($0)` |
| `tnRE$` | `throw new ${1\|RangeError,ReferenceError\|}($0)` |
| `tnSE$` | `throw new SyntaxError($0)` |
| `tnTE$` | `throw new TypeError($0)` |
| `tnUE$` | `throw new URIError($0)` |
| `to` | `typeof $0 === 'object'` |
| `tS_` | `toString () { $0 }` |
| `ts` | `typeof $0 === '${1\|string,symbol\|}'` |
| `tu` | `typeof $0 === 'undefined'` |
| `u_1` | `using { ${1:name} } = $0;` |
| `u` | `undefined` |
| `u1` | `using ${1:name} = $0;` |
| `v_1` | `var { $0 } = ${1:null};` |
| `v` | `void ` |
| `v1` | `var ${1:name} = ${0:null};` |
| `vO_` | `valueOf () { $0 }` |
| `w_` | `while (${0:condition}) { }` |
| `w1` | `while (${1:condition}) $0;` |
| `y` | `yield` |

### TypeScript

| Prefix | Snippet |
| -----: | ------- |
| `__` | `private ${1:name} ($2) { $0 }` |
| `_1` | `private ${1:name} = ${0:null};` |
| `_a_` | `private async ${1:name} ($2) { $0 }` |
| `_aP_` | `private async ${1:name} ($2): Promise<$3> { $0 }` |
| `_c_` | `private constructor ($1) { $0 }` |
| `_g_` | `private get ${1:name} () { $0 }` |
| `_g_s_` | `private _${1:name} = ${0:null}; private get ${1:name} () { return this._${1:name}; } private set ${1:name} (value) { this._${1:name} = value; }` |
| `_i` | `{ [${1:K} in ${2:T}]: $0; }` |
| `_ia` | `{ [${1:K} in ${2:T} as ${3:P}]: $0; }` |
| `_ik` | `{ [${1:K} in keyof ${2:T}]: $0; }` |
| `_ika` | `{ [${1:K} in keyof ${2:T} as ${3:P}]: $0; }` |
| `_r1` | `private readonly ${1:name} = ${0:null};` |
| `_s_` | `private set ${1:name} (${2:value}) { $0 }` |
| `_s_` | `private static ${1:name} ($2) { $0 }` |
| `_s1` | `private static ${1:name} = ${0:null};` |
| `_sa_` | `private static async ${1:name} ($2) { $0 }` |
| `_saP_` | `private static async ${1:name} ($2): Promise<$3> { $0 }` |
| `ac` | `as const` |
| `acs` | `as const satisfies ` |
| `afP_` | `async function ${1:name} ($2): Promise<$3> { $0 }` |
| `ai` | `asserts ${1:T} is ${0:T}` |
| `ce_` | `const enum ${1:name} { $0 };` |
| `ce1` | `const enum ${1:name} { $0 };` |
| `dc_` | `declare class ${1:name} { $0 }` |
| `dc1` | `declare const ${1:name} = ${0:null};` |
| `df1` | `declare function ${1:name} ($0);` |
| `dl1` | `declare let ${1:name} = ${0:null};` |
| `dm_` | `declare module ${1:name} { $0 }` |
| `dn_` | `declare namespace ${1:name} { $0 }` |
| `dv1` | `declare var ${1:name} = ${0:null};` |
| `e_` | `enum ${1:name} { $0 };` |
| `e` | `${1:T} extends ${0:any}` |
| `e1` | `enum ${1:name} { $0 };` |
| `eafP_` | `export async function ${1:name} ($2): Promise<$3> { $0 }` |
| `ean1` | `export as namespace $0;` |
| `ece_` | `export const enum ${1:name} { $0 };` |
| `ece1` | `export const enum ${1:name} { $0 };` |
| `ee_` | `export enum ${1:name} { $0 };` |
| `ee1` | `export enum ${1:name} { $0 };` |
| `ei_` | `export interface ${1:name} { $0 }` |
| `eie_` | `export interface ${1:name} extends ${2:name} { $0 }` |
| `ek` | `${1:T} extends keyof ${0:any}` |
| `er` | `${1:T} extends readonly ${0:any}[]` |
| `et_` | `export type ${1:T} = { $0 };` |
| `et1` | `export type ${1:T} = ${0:null};` |
| `i_` | `interface ${1:name} { $0 }` |
| `ie_` | `interface ${1:name} extends ${2:name} { $0 }` |
| `it_f1` | `import type { ${0:name} } from '${1:path}';` |
| `k` | `keyof ` |
| `n_` | `namespace ${1:name} { $0 }` |
| `p_` | `public ${1:name} ($2) { $0 }` |
| `p1` | `public ${1:name} = ${0:null};` |
| `pa_` | `public async ${1:name} ($2) { $0 }` |
| `paP_` | `public async ${1:name} ($2): Promise<$3> { $0 }` |
| `pc_` | `public constructor ($1) { $0 }` |
| `pg_` | `public get ${1:name} () { $0 }` |
| `pg_s_` | `private _${1:name} = ${0:null}; public get ${1:name} () { return this._${1:name}; } public set ${1:name} (value) { this._${1:name} = value; }` |
| `pr1` | `public readonly ${1:name} = ${0:null};` |
| `ps_` | `public set ${1:name} (${2:value}) { $0 }` |
| `ps_` | `public static ${1:name} ($2) { $0 }` |
| `ps1` | `public static ${1:name} = ${0:null};` |
| `psa_` | `public static async ${1:name} ($2) { $0 }` |
| `psaP_` | `public static async ${1:name} ($2): Promise<$3> { $0 }` |
| `ptJ_` | `public toJSON () { $0 }` |
| `ptS_` | `public toString () { {0 }` |
| `pvO_` | `public valueOf () { $0 }` |
| `r1` | `readonly ${1:name} = ${0:null};` |
| `t_` | `type ${1:T} = { $0 };` |
| `t1` | `type ${1:T} = ${0:null};` |
| `tr1` | `type ${1:T} = readonly [$0];` |