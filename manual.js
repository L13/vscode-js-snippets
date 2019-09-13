//	Imports ____________________________________________________________________

const fs = require('fs');
const path = require('path');

//	Variables __________________________________________________________________

const paths = {
	JavaScript: './snippets/javascript.json',
	TypeScript: './snippets/typescript.json',
};

const snippets = [];

//	Initialize _________________________________________________________________

for (const [headline, pathname] of Object.entries(paths)) {
	const json = JSON.parse(fs.readFileSync(path.join(__dirname, pathname), 'utf-8'));
	snippets.push(`### ${headline}

| Prefix | Snippet |
| ------:| ------- |
`);
	
	for (const [key, snippet] of Object.entries(json)) {
		if (snippet.prefix !== '___') snippets[snippets.length - 1] += formatSnippets(snippet);
	}
}

fs.writeFileSync(path.join(__dirname, 'SNIPPETS.md'), snippets.join('\n'), 'utf-8');

//	Exports ____________________________________________________________________



//	Functions __________________________________________________________________

function formatSnippets (snippet) {
	
	const body = snippet.body.join(' ').replace(/\t/g, '').replace(/`/g, '\`');
	
	return `| \`${snippet.prefix}\` | \`${body}\` |\n`;
	
}