/*
## Open [https://scriptkit.com](https://scriptkit.com) in your browser
*/

// Name: ScriptKit-info

import "@johnlindquist/kit"

const html = md(`
# ScriptKit
* [Scripts](https://www.scriptkit.com/scripts)
* [ScriptKit](https://scriptkit.com)
* [API](https://github.com/johnlindquist/kit/blob/main/API.md)
* [Guide](https://github.com/johnlindquist/kit/blob/main/GUIDE.md)
`)

await div(html)
