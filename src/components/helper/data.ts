export default function FormatDate(date: Date) {
    return new Intl.DateTimeFormat('pt-BR').format(date);
  }