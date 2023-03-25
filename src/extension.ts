//	Imports ____________________________________________________________________

import * as vscode from 'vscode';

import javascriptFuncs from './snippets/javascript.funcs';
import typescriptFuncs from './snippets/typescript.funcs';

//	Variables __________________________________________________________________



//	Initialize _________________________________________________________________



//	Exports ____________________________________________________________________

export function activate (context: vscode.ExtensionContext) {
	
	const useFunctionBlockPadding = get('useFunctionBlockPadding');

	function buildSnippet (item: { prefix: string, body: string[] }) {
		
		const snippet = new vscode.CompletionItem(item.prefix);
		const body = useFunctionBlockPadding ? item.body : filterEmptyTab(item.body);
		
		snippet.insertText = new vscode.SnippetString(body.join('\n'));
		
		return snippet;
		
	}
	
	const javascriptProvider = vscode.languages.registerCompletionItemProvider([
		'javascript',
		'javascriptreact',
	], {
		
		provideCompletionItems () {
			
			return Object.values(javascriptFuncs).map(buildSnippet);
			
		},
		
	});
	
	const typescriptProvider = vscode.languages.registerCompletionItemProvider([
		'javascript',
		'javascriptreact',
		'typescript',
		'typescriptreact',
	], {
		
		provideCompletionItems () {
			
			return Object.values(typescriptFuncs).map(buildSnippet);
			
		},
		
	});
	
	context.subscriptions.push(javascriptProvider, typescriptProvider);
	
}

//	Functions __________________________________________________________________

function get (key: string, value?: any) {
	
	return vscode.workspace.getConfiguration('l13JSSnippets').get(key, value);
	
}

function filterEmptyTab (body: string[]) {
	
	return body.filter((value) => value !== '\t');
	
}