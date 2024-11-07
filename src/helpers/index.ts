export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp)
  const day = String(date.getDate()).padStart(2, "0")
  const month = String(date.getMonth() + 1).padStart(2, "0") // Los meses van de 0 a 11
  const year = date.getFullYear()
  return `${day}/${month}/${year}`
}
