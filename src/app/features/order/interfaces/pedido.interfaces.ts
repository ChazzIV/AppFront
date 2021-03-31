export interface IPedido {
  id?: number;
  cajero: string;
  forma_pago: string;
  importe: string;
  descuento: string;
  subtotal: string;
  iva: string;
  total: string;
  pago: string;
  cambio: string;
  created_at?: string;

}
