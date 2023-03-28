## JavaScript and TypeScript Snippets

Complete list of all JavaScript and TypeScript snippets for Visual Studio Code. The rules for all these snippets are explained in the [README.md](./README.md)

### JSON

| Prefix | Snippet |
| ------:| ------- |
| `_$` | `"${1:key}": [ $0 ]` |
| `_1` | `"${1:key}": ${0:null}` |
| `__` | `"${1:key}": { $0 }` |
| `_` | `{ $0 }` |
| `_b1` | `"${1:key}": ${0:false}` |
| `_n1` | `"${1:key}": ${0:0}` |
| `_s1` | `"${1:key}": "$0"` |
| `f` | `false` |
| `n` | `null` |
| `t` | `true` |

### JavaScript

| Prefix | Snippet |
| ------:| ------- |
| `$1` | `($1) => $0` |
| `$_` | `($1) => {  $0  }` |
| `AiA$` | `Array.isArray($0)` |
| `Jp$` | `JSON.parse($0)` |
| `Js$` | `JSON.stringify($0)` |
| `Js$n` | `JSON.stringify($0, null, '\t')` |
| `Oa$` | `Object.assign($0)` |
| `Oc$` | `Object.create($0)` |
| `Oe$` | `Object.entries($0)` |
| `Ok$` | `Object.keys($0)` |
| `Ov$` | `Object.values($0)` |
| `Pa$` | `Promise.all($0)` |
| `Pr$` | `Promise.reject($0)` |
| `Pr$` | `Promise.resolve($0)` |
| `S$` | `Symbol($0)` |
| `Sf$` | `Symbol.for($0)` |
| `SkF$` | `Symbol.keyFor($0)` |
| `_` | `${1:name} ($2) {  $0  }` |
| `a$1` | `async ($1) => $0` |
| `a$_` | `async ($1) => {  $0  }` |
| `a_` | `async ${1:name} ($2) {  $0  }` |
| `a` | `await ` |
| `af_` | `async function ${1:name} ($2) {  $0  }` |
| `b` | `break$0;` |
| `c1` | `const ${1:name} = ${0:null};` |
| `c_1` | `const { $0 } = ${1:null};` |
| `c_` | `constructor ($1) {  $0  }` |
| `c_b` | `case $0: {  break; }` |
| `c` | `continue$0;` |
| `ca$` | `console.assert($0);` |
| `cb` | `case $0:  break;` |
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
| `ctE$` | `console.timeLog($0);` |
| `cw$` | `console.warn($0);` |
| `d_w` | `do {  } while (${0:condition});` |
| `d` | `delete ` |
| `da` | `default as ${0:name}` |
| `e1` | `else $0;` |
| `e_` | `else { $0 }` |
| `e_` | `export { $0 };` |
| `e_f1` | `export { ${0:name} } from '${1:path}';` |
| `eaf_` | `export async function ${1:name} ($2) {  $0  }` |
| `ec1` | `export const ${1:name} = ${0:null};` |
| `ec_` | `export class ${1:name} {  $0  }` |
| `ece_` | `export class ${1:name} extends ${2:parent} {  $0  }` |
| `ed1` | `export default $0;` |
| `ed_` | `export default { $0 };` |
| `edaf_` | `export default async function ($1) {  $0  }` |
| `edc_` | `export default class {  $0  }` |
| `edce_` | `export default class extends ${1:parent} {  $0  }` |
| `edf_` | `export default function ($1) {  $0  }` |
| `ef1` | `export * from '${0:path}';` |
| `ef_` | `export function ${1:name} ($2) {  $0  }` |
| `ei1` | `else if ($1) §0;` |
| `ei_` | `else if ($0) {  }` |
| `el1` | `export let ${1:name} = ${0:null};` |
| `ev1` | `export var ${1:name} = ${0:null};` |
| `f_` | `function ${1:name} ($2) {  $0  }` |
| `f` | `false` |
| `faco1` | `for await (const ${1:value} of ${2:object}) $0;` |
| `faco_` | `for await (const ${1:value} of ${0:object}) {  }` |
| `falo1` | `for await (let ${1:value} of ${2:object}) $0;` |
| `falo_` | `for await (let ${1:value} of ${0:object}) {  }` |
| `favo1` | `for await (var ${1:value} of ${2:object}) $0;` |
| `favo_` | `for await (var ${1:value} of ${0:object}) {  }` |
| `fci1` | `for (const ${1:key} in ${2:object}) $0;` |
| `fci_` | `for (const ${1:key} in ${0:object}) {  }` |
| `fco1` | `for (const ${1:value} of ${2:object}) $0;` |
| `fco_` | `for (const ${1:value} of ${0:object}) {  }` |
| `fl1` | `for (let i = 0; ${1:condition}; i++) $0;` |
| `fl_` | `for (let i = 0; ${0:condition}; i++) {  }` |
| `fli1` | `for (let ${1:key} in ${2:object}) $0;` |
| `fli_` | `for (let ${1:key} in ${0:object}) {  }` |
| `flo1` | `for (let ${1:value} of ${2:object}) $0;` |
| `flo_` | `for (let ${1:value} of ${0:object}) {  }` |
| `fvi1` | `for (var ${1:key} in ${2:object}) $0;` |
| `fvi_` | `for (var ${1:key} in ${0:object}) {  }` |
| `fvo1` | `for (var ${1:value} of ${2:object}) $0;` |
| `fvo_` | `for (var ${1:value} of ${0:object}) {  }` |
| `g_` | `get ${1:name} () {  $0  }` |
| `g_s_` | `get ${1:name} () {  $0  }  set ${1:name} (value) {  }` |
| `i1` | `if (${1:condition}) $0;` |
| `i_` | `if (${0:condition}) {  }` |
| `i_f1` | `import { ${0:name} } from '${1:path}';` |
| `i` | `${1:identifier} instanceof ${0:constructor}` |
| `iaf1` | `import * as ${0:name} from '${1:path}';` |
| `if1` | `import ${0:name} from '${1:path}';` |
| `ir1` | `if (${0:condition}) return;` |
| `l1` | `let ${1:name} = ${0:null};` |
| `l_1` | `let { $0 } = ${1:null};` |
| `m_` | `module ${1:name} {  $0  }` |
| `n$` | `new ${1:Name}($0)` |
| `nA$` | `new Array($0)` |
| `nD$` | `new Date($0)` |
| `nP$_` | `new Promise((resolve, reject) => {  $0  })` |
| `nPf_` | `new Promise(function (resolve, reject) {  $0  })` |
| `nRE$` | `new RegExp($0)` |
| `n` | `null` |
| `r_` | `return { $0 };` |
| `r` | `return$0;` |
| `s$` | `super($0);` |
| `s_` | `set ${1:name} (value) {  $0  }` |
| `s_` | `static ${1:name} ($2) {  $0  }` |
| `s_c_b` | `switch (${1:value}) { case $0: {  break; } }` |
| `s_c_bd` | `switch (${1:value}) { case $0: {  break; } default:  }` |
| `s_cb` | `switch (${1:value}) { case $0:  break; }` |
| `s_cbd` | `switch (${1:value}) { case $0:  break; default:  }` |
| `s_d` | `switch (${0:value}) {  default:  }` |
| `s` | `super.` |
| `sa_` | `static async ${1:name} ($2) {  $0  }` |
| `tJ_` | `toJSON () {  $0  }` |
| `tS_` | `toString () {  return '[object ${0:name}]';  }` |
| `t_c_` | `try { $0 } catch (error) {  }` |
| `t_c_f_` | `try { $0 } catch (error) {  } finally {  }` |
| `t_f_` | `try { $0 } finally {  }` |
| `t` | `true` |
| `tb` | `typeof $0 !== 'bigint'` |
| `tb` | `typeof $0 !== 'boolean'` |
| `tb` | `typeof $0 === 'bigint'` |
| `tb` | `typeof $0 === 'boolean'` |
| `tf` | `typeof $0 !== 'function'` |
| `tf` | `typeof $0 === 'function'` |
| `tnE$` | `throw new Error(${0:message})` |
| `tnEE$` | `throw new EvalError(${0:message})` |
| `tnRE$` | `throw new RangeError(${0:message})` |
| `tnRE$` | `throw new ReferenceError(${0:message})` |
| `tnSE$` | `throw new SyntaxError(${0:message})` |
| `tnTE$` | `throw new TypeError(${0:message})` |
| `tnUE$` | `throw new URIError(${0:message})` |
| `tn` | `typeof $0 !== 'number'` |
| `tn` | `typeof $0 === 'number'` |
| `to` | `typeof $0 !== 'object'` |
| `to` | `typeof $0 === 'object'` |
| `ts` | `typeof $0 !== 'string'` |
| `ts` | `typeof $0 !== 'symbol'` |
| `ts` | `typeof $0 === 'string'` |
| `ts` | `typeof $0 === 'symbol'` |
| `tu` | `typeof $0 !== 'undefined'` |
| `tu` | `typeof $0 === 'undefined'` |
| `u` | `undefined` |
| `v1` | `var ${1:name} = ${0:null};` |
| `vO_` | `valueOf () {  $0  }` |
| `v_1` | `var { $0 } = ${1:null};` |
| `v` | `void ` |
| `w1` | `while (${1:condition}) $0;` |
| `w_` | `while (${0:condition}) {  }` |
| `y` | `yield` |

### TypeScript

| Prefix | Snippet |
| ------:| ------- |
| `_1` | `private ${1:name} = ${0:null};` |
| `__` | `private ${1:name} ($2) {  $0  }` |
| `_a_` | `private async ${1:name} ($2) {  $0  }` |
| `_ab_` | `private async ${1:name} ($2):Promise<bigint> {  $0  }` |
| `_ab_` | `private async ${1:name} ($2):Promise<boolean> {  $0  }` |
| `_an_` | `private async ${1:name} ($2):Promise<number> {  $0  }` |
| `_as_` | `private async ${1:name} ($2):Promise<string> {  $0  }` |
| `_av_` | `private async ${1:name} ($2):Promise<void> {  $0  }` |
| `_b1` | `private ${1:name}: bigint = ${0:0n};` |
| `_b1` | `private ${1:name}: boolean = ${0:false};` |
| `_b_` | `private ${1:name} ($2): bigint {  $0  }` |
| `_b_` | `private ${1:name} ($2): boolean {  $0  }` |
| `_bg_s_` | `private _${1:name} = ${0:false};  private get ${1:name} (): bigint {  return this._${1:name};  }  private set ${1:name} (value: bigint) {  this._${1:name} = value;  }` |
| `_bg_s_` | `private _${1:name} = ${0:false};  private get ${1:name} (): boolean {  return this._${1:name};  }  private set ${1:name} (value: boolean) {  this._${1:name} = value;  }` |
| `_c_` | `private constructor ($1) {  $0  }` |
| `_g_` | `private get ${1:name} () {  $0  }` |
| `_g_s_` | `private _${1:name} = ${0:null};  private get ${1:name} () {  return this._${1:name};  }  private set ${1:name} (value) {  this._${1:name} = value;  }` |
| `_gb_` | `private get ${1:name} (): bigint {  $0  }` |
| `_gb_` | `private get ${1:name} (): boolean {  $0  }` |
| `_gn_` | `private get ${1:name} (): number {  $0  }` |
| `_gs_` | `private get ${1:name} (): string {  $0  }` |
| `_n1` | `private ${1:name}: number = ${0:0};` |
| `_n_` | `private ${1:name} ($2): number {  $0  }` |
| `_ng_s_` | `private _${1:name} = ${0:0};  private get ${1:name} (): number {  return this._${1:name};  }  private set ${1:name} (value: number) {  this._${1:name} = value;  }` |
| `_r1` | `private readonly ${1:name} = ${0:null};` |
| `_rb1` | `private readonly ${1:name}: bigint = ${0:0n};` |
| `_rb1` | `private readonly ${1:name}: boolean = ${0:false};` |
| `_rn1` | `private readonly ${1:name}: number = ${0:0};` |
| `_rs1` | `private readonly ${1:name}: string = '$0';` |
| `_s1` | `private ${1:name}: string = '$0';` |
| `_s1` | `private static ${1:name} = ${0:null};` |
| `_s_` | `private ${1:name} ($2): string {  $0  }` |
| `_s_` | `private set ${1:name} (value) {  $0  }` |
| `_s_` | `private static ${1:name} ($2) {  $0  }` |
| `_sa_` | `private static async ${1:name} ($2) {  $0  }` |
| `_sab_` | `private static async ${1:name} ($2):Promise<bigint> {  $0  }` |
| `_sab_` | `private static async ${1:name} ($2):Promise<boolean> {  $0  }` |
| `_san_` | `private static async ${1:name} ($2):Promise<number> {  $0  }` |
| `_sas_` | `private static async ${1:name} ($2):Promise<string> {  $0  }` |
| `_sav_` | `private static async ${1:name} ($2):Promise<void> {  $0  }` |
| `_sb1` | `private static ${1:name}: bigint = ${0:0n};` |
| `_sb1` | `private static ${1:name}: boolean = ${0:false};` |
| `_sb_` | `private set ${1:name} (value: bigint) {  $0  }` |
| `_sb_` | `private set ${1:name} (value: boolean) {  $0  }` |
| `_sb_` | `private static ${1:name} ($2): bigint {  $0  }` |
| `_sb_` | `private static ${1:name} ($2): boolean {  $0  }` |
| `_sg_s_` | `private _${1:name} = '$0';  private get ${1:name} (): string {  return this._${1:name};  }  private set ${1:name} (value: string) {  this._${1:name} = value;  }` |
| `_sn1` | `private static ${1:name}: number = ${0:0};` |
| `_sn_` | `private set ${1:name} (value: number) {  $0  }` |
| `_sn_` | `private static ${1:name} ($2): number {  $0  }` |
| `_ss1` | `private static ${1:name}: string = '$0';` |
| `_ss_` | `private set ${1:name} (value: string) {  $0  }` |
| `_ss_` | `private static ${1:name} ($2): string {  $0  }` |
| `_sv_` | `private static ${1:name} ($2): void {  $0  }` |
| `_v_` | `private ${1:name} ($2): void {  $0  }` |
| `ac` | `as const` |
| `acs` | `as const satisfies ` |
| `afa_` | `async function ${1:name} ($2):Promise<string> {  $0  }` |
| `afb_` | `async function ${1:name} ($2):Promise<bigint> {  $0  }` |
| `afb_` | `async function ${1:name} ($2):Promise<boolean> {  $0  }` |
| `afn_` | `async function ${1:name} ($2):Promise<number> {  $0  }` |
| `afv_` | `async function ${1:name} ($2):Promise<void> {  $0  }` |
| `ai` | `asserts ${1:name} is ${0:type}` |
| `cb1` | `const ${1:name}: bigint = ${0:0n};` |
| `cb1` | `const ${1:name}: boolean = ${0:false};` |
| `ce1` | `const enum ${1:name} { $0 };` |
| `ce_` | `const enum ${1:name} { $0 };` |
| `cn1` | `const ${1:name}: number = ${0:0};` |
| `cs1` | `const ${1:name}: string = '$0';` |
| `dc1` | `declare const ${1:name} = ${0:null};` |
| `dc_` | `declare class ${1:name} {  $0  }` |
| `dcb1` | `declare const ${1:name}: bigint = ${0:0n};` |
| `dcb1` | `declare const ${1:name}: boolean = ${0:false};` |
| `dcn1` | `declare const ${1:name}: number = ${0:0};` |
| `dcs1` | `declare const ${1:name}: string = '$0';` |
| `df1` | `declare function ${1:name} ($0);` |
| `dfb1` | `declare function ${1:name} ($0): bigint;` |
| `dfb1` | `declare function ${1:name} ($0): boolean;` |
| `dfn1` | `declare function ${1:name} ($0): number;` |
| `dfs1` | `declare function ${1:name} ($0): string;` |
| `dfv1` | `declare function ${1:name} ($0): void;` |
| `dl1` | `declare let ${1:name} = ${0:null};` |
| `dlb1` | `declare let ${1:name}: bigint = ${0:0n};` |
| `dlb1` | `declare let ${1:name}: boolean = ${0:false};` |
| `dln1` | `declare let ${1:name}: number = ${0:0};` |
| `dls1` | `declare var ${1:name}: string = '$0';` |
| `dm_` | `declare module ${1:name} {  $0  }` |
| `dn_` | `declare namespace ${1:name} {  $0  }` |
| `dv1` | `declare var ${1:name} = ${0:null};` |
| `dvb1` | `declare var ${1:name}: bigint = ${0:0n};` |
| `dvb1` | `declare var ${1:name}: boolean = ${0:false};` |
| `dvn1` | `declare var ${1:name}: number = ${0:0};` |
| `dvs1` | `declare var ${1:name}: string = '$0';` |
| `e1` | `enum ${1:name} { $0 };` |
| `e_` | `enum ${1:name} { $0 };` |
| `eafa_` | `export async function ${1:name} ($2):Promise<string> {  $0  }` |
| `eafb_` | `export async function ${1:name} ($2):Promise<bigint> {  $0  }` |
| `eafb_` | `export async function ${1:name} ($2):Promise<boolean> {  $0  }` |
| `eafn_` | `export async function ${1:name} ($2):Promise<number> {  $0  }` |
| `eafv_` | `export async function ${1:name} ($2):Promise<void> {  $0  }` |
| `ean1` | `export as namespace $0;` |
| `ecb1` | `export const ${1:name}: bigint = ${0:0n};` |
| `ecb1` | `export const ${1:name}: boolean = ${0:false};` |
| `ece1` | `export const enum ${1:name} { $0 };` |
| `ece_` | `export const enum ${1:name} { $0 };` |
| `ecn1` | `export const ${1:name}: number = ${0:0};` |
| `ecs1` | `export const ${1:name}: string = '$0';` |
| `ee1` | `export enum ${1:name} { $0 };` |
| `ee_` | `export enum ${1:name} { $0 };` |
| `efa_` | `export function ${1:name} ($2): string {  $0  }` |
| `efb_` | `export function ${1:name} ($2): bigint {  $0  }` |
| `efb_` | `export function ${1:name} ($2): boolean {  $0  }` |
| `efn_` | `export function ${1:name} ($2): number {  $0  }` |
| `efv_` | `export function ${1:name} ($2): void {  $0  }` |
| `ei_` | `export interface ${1:name} {  $0  }` |
| `eie_` | `export interface ${1:name} extends ${2:name} {  $0  }` |
| `elb1` | `export let ${1:name}: bigint = ${0:0n};` |
| `elb1` | `export let ${1:name}: boolean = ${0:false};` |
| `eln1` | `export let ${1:name}: number = ${0:0};` |
| `els1` | `export let ${1:name}: string = '$0';` |
| `et1` | `export type ${1:name} = ${0:null};` |
| `et_` | `export type ${1:name} = { $0 };` |
| `fa_` | `function ${1:name} ($2): string {  $0  }` |
| `fb_` | `function ${1:name} ($2): bigint {  $0  }` |
| `fb_` | `function ${1:name} ($2): boolean {  $0  }` |
| `fn_` | `function ${1:name} ($2): number {  $0  }` |
| `fv_` | `function ${1:name} ($2): void {  $0  }` |
| `i_` | `interface ${1:name} {  $0  }` |
| `ie_` | `interface ${1:name} extends ${2:name} {  $0  }` |
| `it_f1` | `import type { ${0:name} } from '${1:path}';` |
| `lb1` | `let ${1:name}: boolean = ${0:0n};` |
| `lb1` | `let ${1:name}: boolean = ${0:false};` |
| `ln1` | `let ${1:name}: number = ${0:0};` |
| `ls1` | `let ${1:name}: string = '$0';` |
| `n_` | `namespace ${1:name} {  $0  }` |
| `p1` | `public ${1:name} = ${0:null};` |
| `p_` | `public ${1:name} ($2) {  $0  }` |
| `pa_` | `public async ${1:name} ($2) {  $0  }` |
| `pab_` | `public async ${1:name} ($2):Promise<bigint> {  $0  }` |
| `pab_` | `public async ${1:name} ($2):Promise<boolean> {  $0  }` |
| `pan_` | `public async ${1:name} ($2):Promise<number> {  $0  }` |
| `pas_` | `public async ${1:name} ($2):Promise<string> {  $0  }` |
| `pav_` | `public async ${1:name} ($2):Promise<void> {  $0  }` |
| `pb1` | `public ${1:name}: bigint = ${0:0n};` |
| `pb1` | `public ${1:name}: boolean = ${0:false};` |
| `pb_` | `public ${1:name} ($2): bigint {  $0  }` |
| `pb_` | `public ${1:name} ($2): boolean {  $0  }` |
| `pbg_s_` | `private _${1:name}: bigint = ${0:0n};  public get ${1:name} (): bigint {  return this._${1:name};  }  public set ${1:name} (value: bigint) {  this._${1:name} = value;  }` |
| `pbg_s_` | `private _${1:name}: boolean = ${0:false};  public get ${1:name} (): boolean {  return this._${1:name};  }  public set ${1:name} (value: boolean) {  this._${1:name} = value;  }` |
| `pc_` | `public constructor ($1) {  $0  }` |
| `pg_` | `public get ${1:name} () {  $0  }` |
| `pg_s_` | `private _${1:name} = ${0:null};  public get ${1:name} () {  return this._${1:name};  }  public set ${1:name} (value) {  this._${1:name} = value;  }` |
| `pgb_` | `public get ${1:name} (): bigint {  $0  }` |
| `pgb_` | `public get ${1:name} (): boolean {  $0  }` |
| `pgn_` | `public get ${1:name} (): number {  $0  }` |
| `pgs_` | `public get ${1:name} (): string {  $0  }` |
| `pn1` | `public ${1:name}: number = ${0:0};` |
| `pn_` | `public ${1:name} ($2): number {  $0  }` |
| `png_s_` | `private _${1:name}: number = ${0:0};  public get ${1:name} (): number {  return this._${1:name};  }  public set ${1:name} (value: number) {  this._${1:name} = value;  }` |
| `pr1` | `public readonly ${1:name} = ${0:null};` |
| `prb1` | `public readonly ${1:name}: bigint = ${0:0n};` |
| `prb1` | `public readonly ${1:name}: boolean = ${0:false};` |
| `prn1` | `public readonly ${1:name}: number = ${0:0};` |
| `prs1` | `public readonly ${1:name}: string = '$0';` |
| `ps1` | `public ${1:name}: string = '$0';` |
| `ps1` | `public static ${1:name} = ${0:null};` |
| `ps_` | `public ${1:name} ($2): string {  $0  }` |
| `ps_` | `public set ${1:name} (value) {  $0  }` |
| `ps_` | `public static ${1:name} ($2) {  $0  }` |
| `psa_` | `public static async ${1:name} ($2) {  $0  }` |
| `psab_` | `public static async ${1:name} ($2):Promise<bigint> {  $0  }` |
| `psab_` | `public static async ${1:name} ($2):Promise<boolean> {  $0  }` |
| `psan_` | `public static async ${1:name} ($2):Promise<number> {  $0  }` |
| `psas_` | `public static async ${1:name} ($2):Promise<string> {  $0  }` |
| `psav_` | `public static async ${1:name} ($2):Promise<void> {  $0  }` |
| `psb1` | `public static ${1:name}: bigint = ${0:0n};` |
| `psb1` | `public static ${1:name}: boolean = ${0:false};` |
| `psb_` | `public set ${1:name} (value: bigint) {  $0  }` |
| `psb_` | `public set ${1:name} (value: boolean) {  $0  }` |
| `psb_` | `public static ${1:name} ($2): bigint {  $0  }` |
| `psb_` | `public static ${1:name} ($2): boolean {  $0  }` |
| `psg_s_` | `private _${1:name}: string = '$0';  public get ${1:name} (): string {  return this._${1:name};  }  public set ${1:name} (value: string) {  this._${1:name} = value;  }` |
| `psn1` | `public static ${1:name}: number = ${0:0};` |
| `psn_` | `public set ${1:name} (value: number) {  $0  }` |
| `psn_` | `public static ${1:name} ($2): number {  $0  }` |
| `pss1` | `public static ${1:name}: string = '$0';` |
| `pss_` | `public set ${1:name} (value: string) {  $0  }` |
| `pss_` | `public static ${1:name} ($2): string {  $0  }` |
| `psv_` | `public static ${1:name} ($2): void {  $0  }` |
| `ptJ_` | `public toJSON (): string {  $0  }` |
| `ptJb_` | `public toJSON (): bigint {  $0  }` |
| `ptJb_` | `public toJSON (): boolean {  $0  }` |
| `ptJn_` | `public toJSON (): number {  $0  }` |
| `ptJs_` | `public toJSON (): string {  $0  }` |
| `ptS_` | `public toString () {  return '[object ${0:name}]';  }` |
| `ptSs_` | `public toString (): string {  return '[object ${0:name}]';  }` |
| `pvOb_` | `public valueOf (): bigint {  $0  }` |
| `pvOb_` | `public valueOf (): boolean {  $0  }` |
| `pvOn_` | `public valueOf (): number {  $0  }` |
| `pvOs_` | `public valueOf (): string {  $0  }` |
| `pv_` | `public ${1:name} ($2): void {  $0  }` |
| `r1` | `readonly ${1:name} = ${0:null};` |
| `rb1` | `readonly ${1:name}: bigint = ${0:0n};` |
| `rb1` | `readonly ${1:name}: boolean = ${0:false};` |
| `rn1` | `readonly ${1:name}: number = ${0:0};` |
| `rs1` | `readonly ${1:name}: string = '$0';` |
| `t1` | `type ${1:name} = ${0:null};` |
| `t_` | `type ${1:name} = { $0 };` |
| `tr1` | `type ${1:name} = readonly [$0];` |