export interface Articulo {
  titulo: string;
  youtubeId: string;
  /** segundo de inicio opcional */
  start?: number;
}

export const articulos: Articulo[] = [
  { titulo: 'Cuidado de la salud dental', youtubeId: 'XzQg3V8ZpbE', start: 166 },
  { titulo: 'Exploración y diagnóstico en la odontología', youtubeId: 'lOXKf_rUjuQ' },
  { titulo: 'Consecuencias de la pérdida de un diente', youtubeId: 'fypm0ouaf7k' },
  { titulo: 'Los implantes dentales', youtubeId: 'In_pibuIu_E' },
  { titulo: 'Bruxismo', youtubeId: '25nlbuBB_c0' },
  { titulo: 'Higiene dental', youtubeId: 'hu4iwAPZ7-w' },
  { titulo: 'Alimentación y salud dental', youtubeId: '2L2w_ZTjDZs' },
  { titulo: 'Uso correcto del hilo dental', youtubeId: 'jK5imyP1VQ4' },
  { titulo: 'Salud dental y embarazo', youtubeId: 'KmL9utlZ6jQ' },
];
