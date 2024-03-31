//	Imports ____________________________________________________________________

import * as vscode from 'vscode';

//	Initialize _________________________________________________________________



//	Exports ____________________________________________________________________

export function get (key: string, value?: any) {
	
	return vscode.workspace.getConfiguration('l13Snippets').get(key, value);
	
}

export function getJavaScriptConfig (key: string, value?: any) {
	
	return vscode.workspace.getConfiguration('l13Snippets.javascript').get(key, value);
	
}

export function getTypeScriptConfig (key: string, value?: any) {
	
	return vscode.workspace.getConfiguration('l13Snippets.typescript').get(key, value);
	
}