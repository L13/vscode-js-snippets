//	Imports ____________________________________________________________________

import * as vscode from 'vscode';

import javascriptFuncs from './snippets/javascript.funcs';
import typescriptFuncs from './snippets/typescript.funcs';

import type { Snippet } from './types';

//	Variables __________________________________________________________________

let useFunctionBlockPadding = true;

//	Initialize _________________________________________________________________



//	Exports ____________________________________________________________________

export function activate (context: vscode.ExtensionContext) {
	
	useFunctionBlockPadding = get('useFunctionBlockPadding');
	
	let cacheJavaScriptSnippets = buildSnippets(javascriptFuncs);
	let cacheTypeScriptSnippets = buildSnippets(typescriptFuncs);
	
	const javascriptProvider = vscode.languages.registerCompletionItemProvider([
		'javascript',
		'javascriptreact',
		'typescript',
		'typescriptreact',
	], {
		
		provideCompletionItems () {
			
			return cacheJavaScriptSnippets;
			
		},
		
	});
	
	const typescriptProvider = vscode.languages.registerCompletionItemProvider([
		'typescript',
		'typescriptreact',
	], {
		
		provideCompletionItems () {
			
			return cacheTypeScriptSnippets;
			
		},
		
	});
	
	context.subscriptions.push(javascriptProvider, typescriptProvider);
	
	context.subscriptions.push(vscode.workspace.onDidChangeConfiguration((event) => {
		
		if (event.affectsConfiguration('l13JSSnippets.useFunctionBlockPadding')) {
			useFunctionBlockPadding = get('useFunctionBlockPadding');
			cacheJavaScriptSnippets = buildSnippets(javascriptFuncs);
			cacheTypeScriptSnippets = buildSnippets(typescriptFuncs);
		}
		
	}));
	
}

//	Functions __________________________________________________________________

function get (key: string, value?: any) {
	
	return vscode.workspace.getConfiguration('l13JSSnippets').get(key, value);
	
}

function filterEmptyTab (body: string[]) {
	
	return body.filter((value) => value !== '\t');
	
}

function buildSnippet (item: Snippet) {
	
	const body = useFunctionBlockPadding ? item.body : filterEmptyTab(item.body);
	const snippet = new vscode.CompletionItem(item.prefix, vscode.CompletionItemKind.Snippet);
	
	snippet.insertText = new vscode.SnippetString(body.join('\n'));
	
	return snippet;
	
}

function buildSnippets (snippets: Record<string, Snippet>) {
	
	return Object.values(snippets).map(buildSnippet);
	
}