export interface Cotacao {
  id: number;
  codigoMoeda: string;
  nomeFormatado: string;
  valor: number;
  dataHoraConsulta: Date;
}
