//	Imports ____________________________________________________________________

import * as vscode from 'vscode';

import * as functions from './commands/functions';

//	Variables __________________________________________________________________



//	Initialize _________________________________________________________________



//	Exports ____________________________________________________________________

export function activate (context: vscode.ExtensionContext) {
	
	functions.activate(context);
	
}

export function deactivate () {
	
	//
	
}

//	Functions __________________________________________________________________

