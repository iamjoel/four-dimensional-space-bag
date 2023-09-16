import "@johnlindquist/kit"

await term(`ifconfig -a | grep -e "inet [0-9]" | cut -d" " -f 2`)
// notify('success')