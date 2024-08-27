// Name: Reveal password
// Shortcut:

import "@johnlindquist/kit";

let js = `
document.activeElement.type = document.activeElement.type === 'password' ? 'text' : 'password';
`;

let value = await applescript(`
tell application "Google Chrome" to tell window 1
	get execute active tab javascript "

${js}

"
end tell
`);