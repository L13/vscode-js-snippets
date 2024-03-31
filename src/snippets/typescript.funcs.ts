/* eslint-disable no-template-curly-in-string */
/* eslint-disable key-spacing */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
export default {
	"async function NAME (): Promise {}":		{ "prefix": "afP_",	"body": ["async function ${1:name} ($2): Promise<$3> {", "\t", "\t$0", "\t", "}"], "description": "" },
	"export async function NAME (): Promise {}":{ "prefix": "eafP_",	"body": ["export async function ${1:name} ($2): Promise<$3> {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"declare function NAME ();":				{ "prefix": "df1",	"body": ["declare function ${1:name} ($0);"], "description": "" },
	
	"public constructor () {}":					{ "prefix": "pc_",	"body": ["public constructor ($1) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private constructor () {}":				{ "prefix": "_c_",	"body": ["private constructor ($1) {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"public NAME () {}":						{ "prefix": "p_",	"body": ["public ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public async NAME () {}":					{ "prefix": "pa_",	"body": ["public async ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public async NAME (): Promise {}":			{ "prefix": "paP_",	"body": ["public async ${1:name} ($2): Promise<$3> {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"private NAME () {}":						{ "prefix": "__",	"body": ["private ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private async NAME () {}":					{ "prefix": "_a_",	"body": ["private async ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private async NAME (): Promise {}":		{ "prefix": "_aP_",	"body": ["private async ${1:name} ($2): Promise<$3> {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"public get set NAME () {}":				{ "prefix": "pg_s_",	"body": ["private _${1:name} = ${0:null};", "", "public get ${1:name} () {", "\t", "\treturn this._${1:name};", "\t", "}", "", "public set ${1:name} (value) {", "\t", "\tthis._${1:name} = value;", "\t", "}"], "description": "" },
	"public get NAME () {}":					{ "prefix": "pg_",	"body": ["public get ${1:name} () {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public set NAME (value) {}":				{ "prefix": "ps_",	"body": ["public set ${1:name} (${2:value}) {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"private get set NAME () {}":				{ "prefix": "_g_s_",	"body": ["private _${1:name} = ${0:null};", "", "private get ${1:name} () {", "\t", "\treturn this._${1:name};", "\t", "}", "", "private set ${1:name} (value) {", "\t", "\tthis._${1:name} = value;", "\t", "}"], "description": "" },
	"private get NAME () {}":					{ "prefix": "_g_",	"body": ["private get ${1:name} () {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private set NAME (value) {}":				{ "prefix": "_s_",	"body": ["private set ${1:name} (${2:value}) {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"public static NAME () {}":					{ "prefix": "ps_",	"body": ["public static ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public static async NAME () {}":			{ "prefix": "psa_",	"body": ["public static async ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public static async NAME (): Promise {}":	{ "prefix": "psaP_",	"body": ["public static async ${1:name} ($2): Promise<$3> {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"private static NAME () {}":				{ "prefix": "_s_",	"body": ["private static ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private static async NAME () {}":			{ "prefix": "_sa_",	"body": ["private static async ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"private static async NAME (): Promise {}":	{ "prefix": "_saP_",	"body": ["private static async ${1:name} ($2): Promise<$3> {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"public toJSON () {}":						{ "prefix": "ptJ_",	"body": ["public toJSON () {", "\t", "\t$0", "\t", "}"], "description": "" },
	"public toString () {}":					{ "prefix": "ptS_",	"body": ["public toString () {", "\t", "\t{0", "\t", "}"], "description": "" },
	"public valueOf () {}":						{ "prefix": "pvO_",	"body": ["public valueOf () {", "\t", "\t$0", "\t", "}"], "description": "" },
};