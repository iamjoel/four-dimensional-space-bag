// Group: Search
// Name: Google
// Shortcut: cmd g
// Description: Google it
// Author: Joel

import "@johnlindquist/kit"
let q = await arg("Query...")
browse(`https://www.google.com/search?q=${q}`)
