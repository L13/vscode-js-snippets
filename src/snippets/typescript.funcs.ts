/* eslint-disable no-template-curly-in-string */
/* eslint-disable key-spacing */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
export default {
	"function NAME (): boolean {}":				{ "prefix": "fb_",	"body": ["function ${1:name} ($2): boolean {", "\t", "\t$0", "\t", "}"], "description": "" },
	"function NAME (): bigint {}":				{ "prefix": "fb_",	"body": ["function ${1:name} ($2): bigint {", "\t", "\t$0", "\t", "}"], "description": "" },
	"function NAME (): number {}":				{ "prefix": "fn_",	"body": ["function ${1:name} ($2): number {", "\t", "\t$0", "\t", "}"], "description": "" },
	"function NAME (): string {}":				{ "prefix": "fa_",	"body": ["function ${1:name} ($2): string {", "\t", "\t$0", "\t", "}"], "description": "" },
	"function NAME (): void {}":				{ "prefix": "fv_",	"body": ["function ${1:name} ($2): void {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"export function NAME (): boolean {}":		{ "prefix": "efb_",	"body": ["export function ${1:name} ($2): boolean {", "\t", "\t$0", "\t", "}"], "description": "" },
	"export function NAME (): bigint {}":		{ "prefix": "efb_",	"body": ["export function ${1:name} ($2): bigint {", "\t", "\t$0", "\t", "}"], "description": "" },
	"export function NAME (): number {}":		{ "prefix": "efn_",	"body": ["export function ${1:name} ($2): number {", "\t", "\t$0", "\t", "}"], "description": "" },
	"export function NAME (): string {}":		{ "prefix": "efa_",	"body": ["export function ${1:name} ($2): string {", "\t", "\t$0", "\t", "}"], "description": "" },
	"export function NAME (): void {}":			{ "prefix": "efv_",	"body": ["export function ${1:name} ($2): void {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"async function NAME (): boolean {}":		{ "prefix": "afb_",	"body": ["async function ${1:name} ($2):Promise<boolean> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"async function NAME (): bigint {}":		{ "prefix": "afb_",	"body": ["async function ${1:name} ($2):Promise<bigint> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"async function NAME (): number {}":		{ "prefix": "afn_",	"body": ["async function ${1:name} ($2):Promise<number> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"async function NAME (): string {}":		{ "prefix": "afa_",	"body": ["async function ${1:name} ($2):Promise<string> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"async function NAME (): void {}":			{ "prefix": "afv_",	"body": ["async function ${1:name} ($2):Promise<void> {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"export async function NAME (): boolean {}":{ "prefix": "eafb_",	"body": ["export async function ${1:name} ($2):Promise<boolean> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"export async function NAME (): bigint {}":	{ "prefix": "eafb_",	"body": ["export async function ${1:name} ($2):Promise<bigint> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"export async function NAME (): number {}":	{ "prefix": "eafn_",	"body": ["export async function ${1:name} ($2):Promise<number> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"export async function NAME (): string {}":	{ "prefix": "eafa_",	"body": ["export async function ${1:name} ($2):Promise<string> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"export async function NAME (): void {}":	{ "prefix": "eafv_",	"body": ["export async function ${1:name} ($2):Promise<void> {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"public constructor () {}":					{ "prefix": "pc_",	"body": ["public constructor ($1) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private constructor () {}":				{ "prefix": "_c_",	"body": ["private constructor ($1) {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"public NAME () {}":						{ "prefix": "p_",	"body": ["public ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public NAME (): boolean {}":				{ "prefix": "pb_",	"body": ["public ${1:name} ($2): boolean {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public NAME (): bigint {}":				{ "prefix": "pb_",	"body": ["public ${1:name} ($2): bigint {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public NAME (): number {}":				{ "prefix": "pn_",	"body": ["public ${1:name} ($2): number {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public NAME (): string {}":				{ "prefix": "ps_",	"body": ["public ${1:name} ($2): string {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public NAME (): void {}":					{ "prefix": "pv_",	"body": ["public ${1:name} ($2): void {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"public async NAME () {}":					{ "prefix": "pa_",	"body": ["public async ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public async NAME (): boolean {}":			{ "prefix": "pab_",	"body": ["public async ${1:name} ($2):Promise<boolean> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public async NAME (): bigint {}":			{ "prefix": "pab_",	"body": ["public async ${1:name} ($2):Promise<bigint> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public async NAME (): number {}":			{ "prefix": "pan_",	"body": ["public async ${1:name} ($2):Promise<number> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public async NAME (): string {}":			{ "prefix": "pas_",	"body": ["public async ${1:name} ($2):Promise<string> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public async NAME (): void {}":			{ "prefix": "pav_",	"body": ["public async ${1:name} ($2):Promise<void> {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"private NAME () {}":						{ "prefix": "__",	"body": ["private ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private NAME (): boolean {}":				{ "prefix": "_b_",	"body": ["private ${1:name} ($2): boolean {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private NAME (): bigint {}":				{ "prefix": "_b_",	"body": ["private ${1:name} ($2): bigint {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private NAME (): number {}":				{ "prefix": "_n_",	"body": ["private ${1:name} ($2): number {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private NAME (): string {}":				{ "prefix": "_s_",	"body": ["private ${1:name} ($2): string {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private NAME (): void {}":					{ "prefix": "_v_",	"body": ["private ${1:name} ($2): void {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"private async NAME () {}":					{ "prefix": "_a_",	"body": ["private async ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private async NAME (): boolean {}":		{ "prefix": "_ab_",	"body": ["private async ${1:name} ($2):Promise<boolean> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private async NAME (): bigint {}":			{ "prefix": "_ab_",	"body": ["private async ${1:name} ($2):Promise<bigint> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private async NAME (): number {}":			{ "prefix": "_an_",	"body": ["private async ${1:name} ($2):Promise<number> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private async NAME (): string {}":			{ "prefix": "_as_",	"body": ["private async ${1:name} ($2):Promise<string> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private async NAME (): void {}":			{ "prefix": "_av_",	"body": ["private async ${1:name} ($2):Promise<void> {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"public get set NAME () {}":				{ "prefix": "pg_s_",	"body": ["private _${1:name} = ${0:null};", "", "public get ${1:name} () {", "\t", "\treturn this._${1:name};", "\t", "}", "", "public set ${1:name} (value) {", "\t", "\tthis._${1:name} = value;", "\t", "}"], "description": "" },
	"public get set NAME (): boolean {}":		{ "prefix": "pbg_s_",	"body": ["private _${1:name}: boolean = ${0:false};", "", "public get ${1:name} (): boolean {", "\t", "\treturn this._${1:name};", "\t", "}", "", "public set ${1:name} (value: boolean) {", "\t", "\tthis._${1:name} = value;", "\t", "}"], "description": "" },
	"public get set NAME (): bigint {}":		{ "prefix": "pbg_s_",	"body": ["private _${1:name}: bigint = ${0:0n};", "", "public get ${1:name} (): bigint {", "\t", "\treturn this._${1:name};", "\t", "}", "", "public set ${1:name} (value: bigint) {", "\t", "\tthis._${1:name} = value;", "\t", "}"], "description": "" },
	"public get set NAME (): number {}":		{ "prefix": "png_s_",	"body": ["private _${1:name}: number = ${0:0};", "", "public get ${1:name} (): number {", "\t", "\treturn this._${1:name};", "\t", "}", "", "public set ${1:name} (value: number) {", "\t", "\tthis._${1:name} = value;", "\t", "}"], "description": "" },
	"public get set NAME (): string {}":		{ "prefix": "psg_s_",	"body": ["private _${1:name}: string = '$0';", "", "public get ${1:name} (): string {", "\t", "\treturn this._${1:name};", "\t", "}", "", "public set ${1:name} (value: string) {", "\t", "\tthis._${1:name} = value;", "\t", "}"], "description": "" },
		
	"public get NAME () {}":					{ "prefix": "pg_",	"body": ["public get ${1:name} () {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public get NAME (): boolean {}":			{ "prefix": "pgb_",	"body": ["public get ${1:name} (): boolean {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public get NAME (): bigint {}":			{ "prefix": "pgb_",	"body": ["public get ${1:name} (): bigint {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public get NAME (): number {}":			{ "prefix": "pgn_",	"body": ["public get ${1:name} (): number {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public get NAME (): string {}":			{ "prefix": "pgs_",	"body": ["public get ${1:name} (): string {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"public set NAME (value) {}":				{ "prefix": "ps_",	"body": ["public set ${1:name} (value) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public set NAME (value: boolean) {}":		{ "prefix": "psb_",	"body": ["public set ${1:name} (value: boolean) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public set NAME (value: bigint) {}":		{ "prefix": "psb_",	"body": ["public set ${1:name} (value: bigint) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public set NAME (value: number) {}":		{ "prefix": "psn_",	"body": ["public set ${1:name} (value: number) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public set NAME (value: string) {}":		{ "prefix": "pss_",	"body": ["public set ${1:name} (value: string) {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"private get set NAME () {}":				{ "prefix": "_g_s_",	"body": ["private _${1:name} = ${0:null};", "", "private get ${1:name} () {", "\t", "\treturn this._${1:name};", "\t", "}", "", "private set ${1:name} (value) {", "\t", "\tthis._${1:name} = value;", "\t", "}"], "description": "" },
	"private get set NAME (): boolean {}":		{ "prefix": "_bg_s_",	"body": ["private _${1:name} = ${0:false};", "", "private get ${1:name} (): boolean {", "\t", "\treturn this._${1:name};", "\t", "}", "", "private set ${1:name} (value: boolean) {", "\t", "\tthis._${1:name} = value;", "\t", "}"], "description": "" },
	"private get set NAME (): bigint {}":		{ "prefix": "_bg_s_",	"body": ["private _${1:name} = ${0:false};", "", "private get ${1:name} (): bigint {", "\t", "\treturn this._${1:name};", "\t", "}", "", "private set ${1:name} (value: bigint) {", "\t", "\tthis._${1:name} = value;", "\t", "}"], "description": "" },
	"private get set NAME (): number {}":		{ "prefix": "_ng_s_",	"body": ["private _${1:name} = ${0:0};", "", "private get ${1:name} (): number {", "\t", "\treturn this._${1:name};", "\t", "}", "", "private set ${1:name} (value: number) {", "\t", "\tthis._${1:name} = value;", "\t", "}"], "description": "" },
	"private get set NAME (): string {}":		{ "prefix": "_sg_s_",	"body": ["private _${1:name} = '$0';", "", "private get ${1:name} (): string {", "\t", "\treturn this._${1:name};", "\t", "}", "", "private set ${1:name} (value: string) {", "\t", "\tthis._${1:name} = value;", "\t", "}"], "description": "" },
	
	"private get NAME () {}":					{ "prefix": "_g_",	"body": ["private get ${1:name} () {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private get NAME (): boolean {}":			{ "prefix": "_gb_",	"body": ["private get ${1:name} (): boolean {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private get NAME (): bigint {}":			{ "prefix": "_gb_",	"body": ["private get ${1:name} (): bigint {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private get NAME (): number {}":			{ "prefix": "_gn_",	"body": ["private get ${1:name} (): number {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private get NAME (): string {}":			{ "prefix": "_gs_",	"body": ["private get ${1:name} (): string {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"private set NAME (value) {}":				{ "prefix": "_s_",	"body": ["private set ${1:name} (value) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private set NAME (value: boolean) {}":		{ "prefix": "_sb_",	"body": ["private set ${1:name} (value: boolean) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private set NAME (value: bigint) {}":		{ "prefix": "_sb_",	"body": ["private set ${1:name} (value: bigint) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private set NAME (value: number) {}":		{ "prefix": "_sn_",	"body": ["private set ${1:name} (value: number) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private set NAME (value: string) {}":		{ "prefix": "_ss_",	"body": ["private set ${1:name} (value: string) {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"public static NAME () {}":					{ "prefix": "ps_",	"body": ["public static ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public static NAME (): boolean {}":		{ "prefix": "psb_",	"body": ["public static ${1:name} ($2): boolean {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public static NAME (): bigint {}":			{ "prefix": "psb_",	"body": ["public static ${1:name} ($2): bigint {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public static NAME (): number {}":			{ "prefix": "psn_",	"body": ["public static ${1:name} ($2): number {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public static NAME (): string {}":			{ "prefix": "pss_",	"body": ["public static ${1:name} ($2): string {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public static NAME (): void {}":			{ "prefix": "psv_",	"body": ["public static ${1:name} ($2): void {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"public static async NAME () {}":			{ "prefix": "psa_",	"body": ["public static async ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public static async NAME (): boolean {}":	{ "prefix": "psab_",	"body": ["public static async ${1:name} ($2):Promise<boolean> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public static async NAME (): bigint {}":	{ "prefix": "psab_",	"body": ["public static async ${1:name} ($2):Promise<bigint> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public static async NAME (): number {}":	{ "prefix": "psan_",	"body": ["public static async ${1:name} ($2):Promise<number> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public static async NAME (): string {}":	{ "prefix": "psas_",	"body": ["public static async ${1:name} ($2):Promise<string> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public static async NAME (): void {}":		{ "prefix": "psav_",	"body": ["public static async ${1:name} ($2):Promise<void> {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"private static NAME () {}":				{ "prefix": "_s_",	"body": ["private static ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private static NAME (): boolean {}":		{ "prefix": "_sb_",	"body": ["private static ${1:name} ($2): boolean {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private static NAME (): bigint {}":		{ "prefix": "_sb_",	"body": ["private static ${1:name} ($2): bigint {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private static NAME (): number {}":		{ "prefix": "_sn_",	"body": ["private static ${1:name} ($2): number {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private static NAME (): string {}":		{ "prefix": "_ss_",	"body": ["private static ${1:name} ($2): string {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private static NAME (): void {}":			{ "prefix": "_sv_",	"body": ["private static ${1:name} ($2): void {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"private static async NAME () {}":			{ "prefix": "_sa_",	"body": ["private static async ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private static async NAME (): boolean {}":	{ "prefix": "_sab_",	"body": ["private static async ${1:name} ($2):Promise<boolean> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private static async NAME (): bigint {}":	{ "prefix": "_sab_",	"body": ["private static async ${1:name} ($2):Promise<bigint> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private static async NAME (): number {}":	{ "prefix": "_san_",	"body": ["private static async ${1:name} ($2):Promise<number> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private static async NAME (): string {}":	{ "prefix": "_sas_",	"body": ["private static async ${1:name} ($2):Promise<string> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private static async NAME (): void {}":	{ "prefix": "_sav_",	"body": ["private static async ${1:name} ($2):Promise<void> {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"public valueOf (): boolean {}":			{ "prefix": "pvOb_",	"body": ["public valueOf (): boolean {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public valueOf (): bigint {}":				{ "prefix": "pvOb_",	"body": ["public valueOf (): bigint {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public valueOf (): number {}":				{ "prefix": "pvOn_",	"body": ["public valueOf (): number {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public valueOf (): string {}":				{ "prefix": "pvOs_",	"body": ["public valueOf (): string {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"public toJSON () {}":						{ "prefix": "ptJ_",	"body": ["public toJSON (): string {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public toJSON (): boolean {}":				{ "prefix": "ptJb_",	"body": ["public toJSON (): boolean {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public toJSON (): bigint {}":				{ "prefix": "ptJb_",	"body": ["public toJSON (): bigint {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public toJSON (): number {}":				{ "prefix": "ptJn_",	"body": ["public toJSON (): number {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public toJSON (): string {}":				{ "prefix": "ptJs_",	"body": ["public toJSON (): string {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"public toString () {}":					{ "prefix": "ptS_",	"body": ["public toString () {", "\t", "\treturn '[object ${0:name}]';", "\t", "}"], "description": "" },
	"public toString (): string {}":			{ "prefix": "ptSs_",	"body": ["public toString (): string {", "\t", "\treturn '[object ${0:name}]';", "\t", "}"], "description": "" },
};