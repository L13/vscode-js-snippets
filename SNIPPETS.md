## JavaScript and TypeScript Snippets

Complete list of all JavaScript and TypeScript snippets for Visual Studio Code. The rules for all these snippets are explained in the [README.md](./README.md)

### JavaScript

| Prefix | Snippet |
| ------:| ------- |
| `a` | `await ` |
| `c` | `continue` |
| `d` | `delete ` |
| `f` | `false` |
| `i` | `${1:identifier} instanceof ${0:constructor}` |
| `n` | `null` |
| `t` | `true` |
| `r` | `return ` |
| `s` | `static ` |
| `u` | `undefined` |
| `v` | `void` |
| `i1` | `if (${0:condition}) ;` |
| `i_` | `if (${0:condition}) {  }` |
| `ir1` | `if (${0:condition}) return;` |
| `e1` | `else $0;` |
| `e_` | `else { $0 }` |
| `ei1` | `else if ($0) ;` |
| `ei_` | `else if ($0) {  }` |
| `s_` | `switch (${0:value}) {  }` |
| `s_cb` | `switch (${1:value}) { case $0:  break; }` |
| `s_d` | `switch (${0:value}) {  default:  }` |
| `cb` | `case $0:  break;` |
| `d_w` | `do {  } while (${0:condition});` |
| `fl1` | `for (let i = 0; ${0:condition}; i++) ;` |
| `fl_` | `for (let i = 0; ${0:condition}; i++) {  }` |
| `fci1` | `for (const ${1:key} in ${0:object}) ;` |
| `fci_` | `for (const ${1:key} in ${0:object}) {  }` |
| `fco1` | `for (const ${1:value} of ${0:object}) ;` |
| `fco_` | `for (const ${1:value} of ${0:object}) {  }` |
| `fli1` | `for (let ${1:key} in ${0:object}) ;` |
| `fli_` | `for (let ${1:key} in ${0:object}) {  }` |
| `flo1` | `for (let ${1:value} of ${0:object}) ;` |
| `flo_` | `for (let ${1:value} of ${0:object}) {  }` |
| `fvi1` | `for (var ${1:key} in ${0:object}) ;` |
| `fvi_` | `for (var ${1:key} in ${0:object}) {  }` |
| `fvo1` | `for (var ${1:value} of ${0:object}) ;` |
| `fvo_` | `for (var ${1:value} of ${0:object}) {  }` |
| `l1` | `let ${1:name} = ${0:null};` |
| `c1` | `const ${1:name} = ${0:null};` |
| `w1` | `while (${0:condition}) ;` |
| `w_` | `while (${0:condition}) {  }` |
| `t_c_` | `try { $0 } catch (error) {  }` |
| `t_f_` | `try { $0 } finally {  }` |
| `t_c_f_` | `try { $0 } catch (error) {  } finally {  }` |
| `teb` | `typeof $0 === 'boolean'` |
| `tef` | `typeof $0 === 'function'` |
| `ten` | `typeof $0 === 'number'` |
| `teo` | `typeof $0 === 'object'` |
| `tes` | `typeof $0 === 'string'` |
| `tes` | `typeof $0 === 'symbol'` |
| `teu` | `typeof $0 === 'undefined'` |
| `tnb` | `typeof $0 !== 'boolean'` |
| `tnf` | `typeof $0 !== 'function'` |
| `tnn` | `typeof $0 !== 'number'` |
| `tno` | `typeof $0 !== 'object'` |
| `tns` | `typeof $0 !== 'string'` |
| `tns` | `typeof $0 !== 'symbol'` |
| `tnu` | `typeof $0 !== 'undefined'` |
| `f_` | `function ${1:name} ($2) {  $0  }` |
| `af_` | `async function ${1:name} ($2) {  $0  }` |
| `$1` | `($1) => $0` |
| `$_` | `($1) => {  $0  }` |
| `m_` | `module ${1:name} {  $0  }` |
| `i_f1` | `import { ${0:name} } from '${1:path}';` |
| `iaf1` | `import * as ${0:name} from '${1:path}';` |
| `ef1` | `export ${0:name} from '${1:path}';` |
| `e_f1` | `export { ${0:name} } from '${1:path}';` |
| `eaf1` | `export * as ${0:name} from '${1:path}';` |
| `ed1` | `export default $0;` |
| `ed_` | `export default { $0 }` |
| `ec1` | `export const ${1:name} = ${2:value};` |
| `el1` | `export let ${1:name} = ${2:value};` |
| `ev1` | `export var ${1:name} = ${2:value};` |
| `ef_` | `export function ${1:name} ($2) {  $0  }` |
| `edf_` | `export default function ($2) {  $0  }` |
| `c_` | `class ${1:name} {  $0  }` |
| `ce_` | `class ${1:name} extends ${2:parent} {  $0  }` |
| `ec_` | `export class ${1:name} {  $0  }` |
| `ece_` | `export class ${1:name} extends ${2:parent} {  $0  }` |
| `edc_` | `export default class {  $0  }` |
| `edce_` | `export default class extends ${1:parent} {  $0  }` |
| `c_` | `constructor ($1) {  $0  }` |
| `s$` | `super($0);` |
| `g_` | `get ${1:name} () {  $0  }` |
| `s_` | `set ${1:name} (value) {  $0  }` |
| `_` | `${1:name} ($2) {  $0  }` |
| `a_` | `async ${1:name} ($2) {  $0  }` |
| `vO_` | `valueOf () {  $0  }` |
| `tS_` | `toString () {  return '[object ${0:name}]';  }` |
| `tJ_` | `toJSON () {  $0  }` |
| `tnE$` | `throw new Error(${0:message})` |
| `tnEE$` | `throw new EvalError(${0:message})` |
| `tnRE$` | `throw new RangeError(${0:message})` |
| `tnRE$` | `throw new ReferenceError(${0:message})` |
| `tnSE$` | `throw new SyntaxError(${0:message})` |
| `tnTE$` | `throw new TypeError(${0:message})` |
| `tnUE$` | `throw new URIError(${0:message})` |
| `ca$` | `console.assert($0);` |
| `ce$` | `console.error($0);` |
| `ci$` | `console.info($0);` |
| `cl$` | `console.log($0);` |
| `cw$` | `console.warn($0);` |
| `Jp$` | `JSON.parse($0)` |
| `Js$` | `JSON.stringify($0)` |
| `nP$_` | `new Promise((resolve, reject) => {  $0  });` |
| `nPf_` | `new Promise(function (resolve, reject) {  $0  });` |

### TypeScript

| Prefix | Snippet |
| ------:| ------- |
| `t1` | `type ${1:name} = ${0:value};` |
| `t_` | `type ${1:name} = { $0 };` |
| `et1` | `export type ${1:name} = ${0:value};` |
| `et_` | `export type ${1:name} = { $0 };` |
| `i_` | `interface ${1:name} {  $0  }` |
| `ie_` | `interface ${1:name} extends ${2:name} {  $0  }` |
| `ei_` | `export interface ${1:name} {  $0  }` |
| `eie_` | `export interface ${1:name} extends ${2:name} {  $0  }` |
| `n_` | `namespace ${1:name} {  $0  }` |
| `la1` | `let ${1:name}:any = ${0:null};` |
| `lb1` | `let ${1:name}:boolean = ${0:false};` |
| `ln1` | `let ${1:name}:number = ${0:0};` |
| `ls1` | `let ${1:name}:string = '$0';` |
| `lo1` | `let ${1:name}:object = {$0};` |
| `lRE1` | `let ${1:name}:RegExp = /$0/;` |
| `lD1` | `let ${1:name}:Date = new Date($0);` |
| `lA1` | `let ${1:name}:Array<$2> = [$0];` |
| `ela1` | `export let ${1:name}:any = ${0:null};` |
| `elb1` | `export let ${1:name}:boolean = ${0:false};` |
| `eln1` | `export let ${1:name}:number = ${0:0};` |
| `els1` | `export let ${1:name}:string = '$0';` |
| `elo1` | `export let ${1:name}:object = {$0};` |
| `elRE1` | `export let ${1:name}:RegExp = /$0/;` |
| `elD1` | `export let ${1:name}:Date = new Date($0);` |
| `elA1` | `export let ${1:name}:Array<$2> = [$0];` |
| `ca1` | `const ${1:name}:any = ${0:null};` |
| `cb1` | `const ${1:name}:boolean = ${0:false};` |
| `cn1` | `const ${1:name}:number = ${0:0};` |
| `cs1` | `const ${1:name}:string = '$0';` |
| `co1` | `const ${1:name}:object = {$0};` |
| `cRE1` | `const ${1:name}:RegExp = /$0/;` |
| `cD1` | `const ${1:name}:Date = new Date($0);` |
| `cA1` | `const ${1:name}:Array<$2> = [$0];` |
| `eca1` | `export const ${1:name}:any = ${0:null};` |
| `ecb1` | `export const ${1:name}:boolean = ${0:false};` |
| `ecn1` | `export const ${1:name}:number = ${0:0};` |
| `ecs1` | `export const ${1:name}:string = '$0';` |
| `eco1` | `export const ${1:name}:object = {$0};` |
| `ecRE1` | `export const ${1:name}:RegExp = /$0/;` |
| `ecD1` | `export const ${1:name}:Date = new Date($0);` |
| `ecA1` | `export const ${1:name}:Array<$2> = [$0];` |
| `e1` | `enum ${1:name} { $0 };` |
| `e_` | `enum ${1:name} { $0 };` |
| `ce1` | `const enum ${1:name} { $0 };` |
| `ce_` | `const enum ${1:name} { $0 };` |
| `fa_` | `function ${1:name} ($2) :any {  $0  }` |
| `fb_` | `function ${1:name} ($2) :boolean {  $0  }` |
| `fn_` | `function ${1:name} ($2) :number {  $0  }` |
| `fn_` | `function ${1:name} ($2) :never {  $0  }` |
| `fa_` | `function ${1:name} ($2) :string {  $0  }` |
| `fo_` | `function ${1:name} ($2) :object {  $0  }` |
| `fv_` | `function ${1:name} ($2) :void {  $0  }` |
| `efa_` | `export function ${1:name} ($2) :any {  $0  }` |
| `efb_` | `export function ${1:name} ($2) :boolean {  $0  }` |
| `efn_` | `export function ${1:name} ($2) :number {  $0  }` |
| `efn_` | `export function ${1:name} ($2) :never {  $0  }` |
| `efa_` | `export function ${1:name} ($2) :string {  $0  }` |
| `efo_` | `export function ${1:name} ($2) :object {  $0  }` |
| `efv_` | `export function ${1:name} ($2) :void {  $0  }` |
| `afa_` | `async function ${1:name} ($2) :any {  $0  }` |
| `afb_` | `async function ${1:name} ($2) :boolean {  $0  }` |
| `afn_` | `async function ${1:name} ($2) :number {  $0  }` |
| `afn_` | `async function ${1:name} ($2) :never {  $0  }` |
| `afa_` | `async function ${1:name} ($2) :string {  $0  }` |
| `afo_` | `async function ${1:name} ($2) :object {  $0  }` |
| `afv_` | `async function ${1:name} ($2) :void {  $0  }` |
| `pc_` | `public constructor ($1) {  $0  }` |
| `_c_` | `private constructor ($1) {  $0  }` |
| `p1` | `public ${0:name};` |
| `pa1` | `public ${1:name}:any = ${0:null};` |
| `pb1` | `public ${1:name}:boolean = ${0:false};` |
| `pn1` | `public ${1:name}:number = ${0:0};` |
| `ps1` | `public ${1:name}:string = '$0';` |
| `po1` | `public ${1:name}:object = {$0};` |
| `pRE1` | `public ${1:name}:RegExp = /$0/;` |
| `pD1` | `public ${1:name}:Date = new Date($0);` |
| `pA1` | `public ${1:name}:Array<$2> = [$0];` |
| `pr1` | `public readonly ${0:name};` |
| `pra1` | `public readonly ${1:name}:any = ${0:null};` |
| `prb1` | `public readonly ${1:name}:boolean = ${0:false};` |
| `prn1` | `public readonly ${1:name}:number = ${0:0};` |
| `prs1` | `public readonly ${1:name}:string = '$0';` |
| `pro1` | `public readonly ${1:name}:object = {$0};` |
| `prRE1` | `public readonly ${1:name}:RegExp = /$0/;` |
| `prD1` | `public readonly ${1:name}:Date = new Date($0);` |
| `prA1` | `public readonly ${1:name}:Array<$2> = [$0];` |
| `_1` | `private ${0:name};` |
| `_a1` | `private ${1:name}:any = ${0:null};` |
| `_b1` | `private ${1:name}:boolean = ${0:false};` |
| `_n1` | `private ${1:name}:number = ${0:0};` |
| `_s1` | `private ${1:name}:string = '$0';` |
| `_o1` | `private ${1:name}:object = {$0};` |
| `_RE1` | `private ${1:name}:RegExp = /$0/;` |
| `_D1` | `private ${1:name}:Date = new Date($0);` |
| `_A1` | `private ${1:name}:Array<$2> = [$0];` |
| `p_` | `public ${1:name} ($2) {  $0  }` |
| `pv_` | `public ${1:name} ($2) :void {  $0  }` |
| `pa_` | `public ${1:name} ($2) :any {  $0  }` |
| `pb_` | `public ${1:name} ($2) :boolean {  $0  }` |
| `pn_` | `public ${1:name} ($2) :number {  $0  }` |
| `pn_` | `public ${1:name} ($2) :never {  $0  }` |
| `ps_` | `public ${1:name} ($2) :string {  $0  }` |
| `po_` | `public ${1:name} ($2) :object {  $0  }` |
| `__` | `private ${1:name} ($2) {  $0  }` |
| `_v_` | `private ${1:name} ($2) :void {  $0  }` |
| `_a_` | `private ${1:name} ($2) :any {  $0  }` |
| `_b_` | `private ${1:name} ($2) :boolean {  $0  }` |
| `_n_` | `private ${1:name} ($2) :number {  $0  }` |
| `_n_` | `private ${1:name} ($2) :never {  $0  }` |
| `_s_` | `private ${1:name} ($2) :string {  $0  }` |
| `_o_` | `private ${1:name} ($2) :object {  $0  }` |
| `pg_` | `public get ${1:name} () {  $0  }` |
| `pga_` | `public get ${1:name} () :any {  $0  }` |
| `pgb_` | `public get ${1:name} () :boolean {  $0  }` |
| `pgn_` | `public get ${1:name} () :number {  $0  }` |
| `pgs_` | `public get ${1:name} () :string {  $0  }` |
| `pgo_` | `public get ${1:name} () :object {  $0  }` |
| `ps_` | `public set ${1:name} (value) {  $0  }` |
| `psa_` | `public set ${1:name} (value:any) {  $0  }` |
| `psb_` | `public set ${1:name} (value:boolean) {  $0  }` |
| `psn_` | `public set ${1:name} (value:number) {  $0  }` |
| `pss_` | `public set ${1:name} (value:string) {  $0  }` |
| `pso_` | `public set ${1:name} (value:object) {  $0  }` |
| `_g_` | `private get ${1:name} () {  $0  }` |
| `_ga_` | `private get ${1:name} () :any {  $0  }` |
| `_gb_` | `private get ${1:name} () :boolean {  $0  }` |
| `_gn_` | `private get ${1:name} () :number {  $0  }` |
| `_gs_` | `private get ${1:name} () :string {  $0  }` |
| `_go_` | `private get ${1:name} () :object {  $0  }` |
| `_s_` | `private set ${1:name} (value) {  $0  }` |
| `_sa_` | `private set ${1:name} (value:any) {  $0  }` |
| `_sb_` | `private set ${1:name} (value:boolean) {  $0  }` |
| `_sn_` | `private set ${1:name} (value:number) {  $0  }` |
| `_ss_` | `private set ${1:name} (value:string) {  $0  }` |
| `_so_` | `private set ${1:name} (value:object) {  $0  }` |
| `ps_` | `public static ${1:name} ($2) {  $0  }` |
| `psv_` | `public static ${1:name} ($2) :void {  $0  }` |
| `psa_` | `public static ${1:name} ($2) :any {  $0  }` |
| `psb_` | `public static ${1:name} ($2) :boolean {  $0  }` |
| `psn_` | `public static ${1:name} ($2) :number {  $0  }` |
| `psn_` | `public static ${1:name} ($2) :never {  $0  }` |
| `pss_` | `public static ${1:name} ($2) :string {  $0  }` |
| `pso_` | `public static ${1:name} ($2) :object {  $0  }` |
| `_s_` | `private static ${1:name} ($2) {  $0  }` |
| `_sa_` | `private static ${1:name} ($2) :any {  $0  }` |
| `_sb_` | `private static ${1:name} ($2) :boolean {  $0  }` |
| `_sn_` | `private static ${1:name} ($2) :number {  $0  }` |
| `_sn_` | `private static ${1:name} ($2) :never {  $0  }` |
| `_ss_` | `private static ${1:name} ($2) :string {  $0  }` |
| `_so_` | `private static ${1:name} ($2) :object {  $0  }` |
| `pvOb_` | `public valueOf () :boolean {  $0  }` |
| `pvOn_` | `public valueOf () :number {  $0  }` |
| `pvOs_` | `public valueOf () :string {  $0  }` |
| `ptJ_` | `public toJSON () :string {  $0  }` |
| `ptS_` | `public toString () :string {  return '[object ${0:name}]';  }` |
