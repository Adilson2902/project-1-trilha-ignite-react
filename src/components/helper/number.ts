export default function FormatNumber(number:number) {
  return  new Intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    }).format(number);
}