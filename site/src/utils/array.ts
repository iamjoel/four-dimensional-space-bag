export const chunk = (arr: any[], size: number = 1) => {
  return [arr.slice(0, size), arr.slice(size)]
}

export const concat = (arr: any[], ...rest: any[]) => {
  // 声明式
  const toConcat = rest.flatMap((item: any) => {
      if(Array.isArray(item)) {
        return item
      }
      return item
  })

  return [...arr, ...toConcat]

  // 命令式
  // let res = [...arr]
  // rest.forEach((item: any) => {
  //   if(Array.isArray(item)) {
  //     res = [...res, ...item]
  //     return
  //   }
  //   res = [...res, item]
  // })
  // return res
}
