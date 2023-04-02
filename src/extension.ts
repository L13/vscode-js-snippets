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
	
	buildJavaScriptCompletionItems();
	buildTypeScriptCompletionItems();
	
	const javascriptProvider = vscode.languages.registerCompletionItemProvider([
		'javascript',
		'javascriptreact',
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
		
		if (event.affectsConfiguration('l13Snippets.javascript.useFunctionBlockPadding')) {
			buildJavaScriptCompletionItems();
		}
		
		if (event.affectsConfiguration('l13Snippets.typescript.useFunctionBlockPadding')) {
			buildTypeScriptCompletionItems();
		}
		
	});
	
	context.subscriptions.push(javascriptProvider, typescriptProvider, changeConfiguration);
	
}

//	Functions __________________________________________________________________

function getJavaScriptConfig (key: string, value?: any) {
	
	return vscode.workspace.getConfiguration('l13Snippets.javascript').get(key, value);
	
}

function getTypeScriptConfig (key: string, value?: any) {
	
	return vscode.workspace.getConfiguration('l13Snippets.typescript').get(key, value);
	
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

function buildJavaScriptCompletionItems () {
		
	const useFunctionBlockPadding = getJavaScriptConfig('useFunctionBlockPadding');
	
	javascriptCompletionItems = buildCompletionItems(javascriptFuncs, useFunctionBlockPadding);
	typescriptCompletionItems = [
		...javascriptCompletionItems,
		...buildCompletionItems(typescriptFuncs, useFunctionBlockPadding),
	];
		
}

function buildTypeScriptCompletionItems () {
		
	const useFunctionBlockPadding = getTypeScriptConfig('useFunctionBlockPadding');
	
	typescriptCompletionItems = [
		...buildCompletionItems(javascriptFuncs, useFunctionBlockPadding),
		...buildCompletionItems(typescriptFuncs, useFunctionBlockPadding),
	];
		
}