//	Imports ____________________________________________________________________

import * as vscode from 'vscode';

import javascriptFuncs from './snippets/javascript.funcs';
import typescriptFuncs from './snippets/typescript.funcs';

import type { Snippet } from './types';

//	Variables __________________________________________________________________



//	Initialize _________________________________________________________________



//	Exports ____________________________________________________________________

export function activate (context: vscode.ExtensionContext) {
	
	let useFunctionBlockPadding = get('useFunctionBlockPadding');
	
	let javascriptCompletionItems = buildCompletionItems(javascriptFuncs, useFunctionBlockPadding);
	let typescriptCompletionItems = buildCompletionItems(typescriptFuncs, useFunctionBlockPadding);
	
	const javascriptProvider = vscode.languages.registerCompletionItemProvider([
		'javascript',
		'javascriptreact',
		'typescript',
		'typescriptreact',
	], {
		
		provideCompletionItems () {
			
			return javascriptCompletionItems;
			
		},
		
	});
	
	const typescriptProvider = vscode.languages.registerCompletionItemProvider([
		'typescript',
		'typescriptreact',
	], {
		
		provideCompletionItems () {
			
			return typescriptCompletionItems;
			
		},
		
	});
	
	context.subscriptions.push(javascriptProvider, typescriptProvider);
	
	context.subscriptions.push(vscode.workspace.onDidChangeConfiguration((event) => {
		
		if (event.affectsConfiguration('l13JSSnippets.useFunctionBlockPadding')) {
			useFunctionBlockPadding = get('useFunctionBlockPadding');
			javascriptCompletionItems = buildCompletionItems(javascriptFuncs, useFunctionBlockPadding);
			typescriptCompletionItems = buildCompletionItems(typescriptFuncs, useFunctionBlockPadding);
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

function buildCompletionItems (snippets: Record<string, Snippet>, useFunctionBlockPadding: boolean) {
	
	return Object.values(snippets).map((item) => {
	
		const body = useFunctionBlockPadding ? item.body : filterEmptyTab(item.body);
		const completionItem = new vscode.CompletionItem(item.prefix, vscode.CompletionItemKind.Snippet);
		
		completionItem.insertText = new vscode.SnippetString(body.join('\n'));
		
		return completionItem;
		
	});
	
}