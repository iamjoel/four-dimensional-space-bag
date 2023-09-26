import "@johnlindquist/kit"
// import flexRuleMap from './tailwind-rules'
// Name: Style to tailwind css name
// Shortcut: cmd 2

/*
* css name order rule: from outer to inner, from vertical to horizontal, from top left to right bottom, from important to unimportant
* absolute; z-index; top; bottom; left; right;
* margin: top;bottom;left;
* border
* box-shadow
* display
* flex: items-center; justify-center;
* padding
* font-size, font-weight, color, hover: color
* children space: space-y
*/

const style = `
display: flex;
padding: 0px 10px;
align-items: center;
gap: 4px;
flex: 1 0 0;
`



const res = style.split(";").map((s) => s.trim()).filter((s) => s.length > 0).map((s) => {
  const [key, value] = s.split(":").map((s) => s.trim())
  return `* key: ${key}, value: ${value}`
})

// flexRuleMap['align-items']['flex-start'] + 
div(md(res.join("\n")))