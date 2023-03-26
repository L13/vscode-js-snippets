//	Imports ____________________________________________________________________

import * as vscode from 'vscode';

import javascriptFuncs from './snippets/javascript.funcs';
import typescriptFuncs from './snippets/typescript.funcs';

import type { Snippet } from './types';

//	Variables __________________________________________________________________

let javascriptCompletionItems: vscode.CompletionItem[] = null;
let typescriptCompletionItems: vscode.CompletionItem[] = null;

//	Initialize _________________________________________________________________



//	Exports ____________________________________________________________________

export function activate (context: vscode.ExtensionContext) {
	
	buildAllCompletionItems();
	
	const javascriptProvider = vscode.languages.registerCompletionItemProvider([
		'javascript',
		'javascriptreact',
		'typescript',
		'typescriptreact',
	], {
		provideCompletionItems: () => javascriptCompletionItems,
	});
	
	const typescriptProvider = vscode.languages.registerCompletionItemProvider([
		'typescript',
		'typescriptreact',
	], {
		provideCompletionItems: () => typescriptCompletionItems,
	});
	
	const changeConfiguration = vscode.workspace.onDidChangeConfiguration((event) => {
		
		if (event.affectsConfiguration('l13JSSnippets.useFunctionBlockPadding')) {
			buildAllCompletionItems();
		}
		
	});
	
	context.subscriptions.push(javascriptProvider, typescriptProvider, changeConfiguration);
	
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

function buildAllCompletionItems () {
		
	const useFunctionBlockPadding = get('useFunctionBlockPadding');
	
	javascriptCompletionItems = buildCompletionItems(javascriptFuncs, useFunctionBlockPadding);
	typescriptCompletionItems = buildCompletionItems(typescriptFuncs, useFunctionBlockPadding);
		
}