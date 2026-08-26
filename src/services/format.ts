export function currencyBRL(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export function currencyUS(value: number) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' })
}