// Name: IP

import "@johnlindquist/kit"
const ip = await npm("ip")
// const copy = await npm('copy-to-clipboard')

const ipAddr = ip.address()
// await copy(ipAddr)
await div(`${ipAddr}`)
