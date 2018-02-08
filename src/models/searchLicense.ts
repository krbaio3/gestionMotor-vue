export interface vehicle {
  id: number;
  license: string;
  brand: string;
  model: string;
  version: string;
  anio: Date;
  itv: Date;
  power: number;
  cod_motor: string;
  kilometros: number;
  ficha_escaneada: boolean;
  ficha: string;
  vin: string;
  observaciones: string;
  combustible: string;
}