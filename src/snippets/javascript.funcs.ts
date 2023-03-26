/* eslint-disable no-template-curly-in-string */
/* eslint-disable key-spacing */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/quotes */
export default {
	"function NAME () {}":						{ "prefix": "f_",	"body": ["function ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"async function NAME () {}":				{ "prefix": "af_",	"body": ["async function ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"() =>":									{ "prefix": "$1",	"body": ["($1) => $0"], "description": "" },
	"async () =>":								{ "prefix": "a$1",	"body": ["async ($1) => $0"], "description": "" },
	"() => {}":									{ "prefix": "$_",	"body": ["($1) => {", "\t", "\t$0", "\t", "}"], "description": "" },
	"async () => {}":							{ "prefix": "a$_",	"body": ["async ($1) => {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"export function NAME () {}":				{ "prefix": "ef_",	"body": ["export function ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"export async function () {}":				{ "prefix": "eaf_",	"body": ["export async function ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"export default function () {}":			{ "prefix": "edf_",	"body": ["export default function ($1) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"export default async function () {}":		{ "prefix": "edaf_",	"body": ["export default async function ($1) {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"constructor () {}":						{ "prefix": "c_",	"body": ["constructor ($1) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"get NAME () {}":							{ "prefix": "g_",	"body": ["get ${1:name} () {", "\t", "\t$0", "\t", "}"], "description": "" },
	"set NAME () {}":							{ "prefix": "s_",	"body": ["set ${1:name} (value) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"get set NAME () {}":						{ "prefix": "g_s_",	"body": ["get ${1:name} () {", "\t", "\t$0", "\t", "}", "", "set ${1:name} (value) {", "\t", "}"], "description": "" },
	"NAME () {}":								{ "prefix": "_",	"body": ["${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"static NAME () {}":						{ "prefix": "s_",	"body": ["static ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"async NAME () {}":							{ "prefix": "a_",	"body": ["async ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
	"static async NAME () {}":					{ "prefix": "sa_",	"body": ["static async ${1:name} ($2) {", "\t", "\t$0", "\t", "}"], "description": "" },
		
	"valueOf () {}":							{ "prefix": "vO_",	"body": ["valueOf () {", "\t", "\t$0", "\t", "}"], "description": "" },
	"toString () {}":							{ "prefix": "tS_",	"body": ["toString () {", "\t", "\treturn '[object ${0:name}]';", "\t", "}"], "description": "" },
	"toJSON () {}":								{ "prefix": "tJ_",	"body": ["toJSON () {", "\t", "\t$0", "\t", "}"], "description": "" },
	
	"new Promise(() => {})":					{ "prefix": "nP$_",	"body": ["new Promise((resolve, reject) => {", "\t", "\t$0", "\t", "})"], "description": "" },
	"new Promise(function () {})":				{ "prefix": "nPf_",	"body": ["new Promise(function (resolve, reject) {", "\t", "\t$0", "\t", "})"], "description": "" },
};