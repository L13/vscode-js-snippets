//	Imports ____________________________________________________________________

const fs = require('fs');
const path = require('path');

//	Variables __________________________________________________________________

const paths = {
	JSON: [
		'../snippets/json.json',
	],
	JavaScript: [
		'../snippets/javascript.funcs.json',
		'../snippets/javascript.json',
	],
	TypeScript: [
		'../snippets/typescript.funcs.json',
		'../snippets/typescript.json',
	],
};

const contents = [`## JavaScript and TypeScript Snippets

Complete list of all JavaScript and TypeScript snippets for Visual Studio Code. The rules for all these snippets are explained in the [README.md](./README.md)`];

//	Initialize _________________________________________________________________

for (const [headline, pathnames] of Object.entries(paths)) {
	contents.push(`
### ${headline}

| Prefix | Snippet |
| ------:| ------- |`);
	let json = {};
	for (const pathname of pathnames) {
		const result = JSON.parse(fs.readFileSync(path.join(__dirname, pathname), 'utf-8'))
		json = { ...json, ...result };
	}
	const snippets = [];
	for (const snippet of Object.values(json)) {
		if (snippet.prefix !== '___') snippets.push(formatSnippets(snippet));
	}
	contents.push(snippets.sort().join('\n'));
}

fs.writeFileSync(path.join(__dirname, '..', 'SNIPPETS.md'), contents.join('\n'), 'utf-8');

//	Exports ____________________________________________________________________



//	Functions __________________________________________________________________

function formatSnippets (snippet) {
	
	const body = snippet.body.join(' ').replace(/\t/g, '').replace(/`/g, '\`');
	
	return `| \`${snippet.prefix}\` | \`${body}\` |`;
	
}