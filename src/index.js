//	Imports ____________________________________________________________________

const fs = require('fs');
const path = require('path');

//	Variables __________________________________________________________________

const paths = {
	JSON: '../snippets/json.json',
	JavaScript: '../snippets/javascript.json',
	TypeScript: '../snippets/typescript.json',
};

const snippets = [`## JavaScript and TypeScript Snippets

Complete list of all JavaScript and TypeScript snippets for Visual Studio Code. The rules for all these snippets are explained in the [README.md](./README.md)
`];

//	Initialize _________________________________________________________________

for (const [headline, pathname] of Object.entries(paths)) {
	const json = JSON.parse(fs.readFileSync(path.join(__dirname, pathname), 'utf-8'));
	snippets.push(`### ${headline}

| Prefix | Snippet |
| ------:| ------- |
`);
	
	for (const snippet of Object.values(json)) {
		if (snippet.prefix !== '___') snippets[snippets.length - 1] += formatSnippets(snippet);
	}
}

fs.writeFileSync(path.join(__dirname, '..', 'SNIPPETS.md'), snippets.join('\n'), 'utf-8');

//	Exports ____________________________________________________________________



//	Functions __________________________________________________________________

function formatSnippets (snippet) {
	
	const body = snippet.body.join(' ').replace(/\t/g, '').replace(/`/g, '\`');
	
	return `| \`${snippet.prefix}\` | \`${body}\` |\n`;
	
}