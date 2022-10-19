export const handleOptions = (options: any) => {
  const arr = []
  options?.map((item: any) => {
    arr.push({ label: item.nome, value: item.codigo })
  })
  return arr
}
