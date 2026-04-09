export const EVENT = {
  name: 'MAKAN',
  tagline: 'Disfruta del descuento exclusivo para trabajadores TAI.',
  date: 'De lunes a viernes',
  time: '12:00 a 15:00',
  location: 'Makan - Recoletos',
  address: 'C. De Villalar 3, 28001 Madrid',
  maxTickets: Number(process.env.MAX_TICKETS) || 20,
  rules: [
    'Regístrate: Introduce tu correo de @taiarts.com en el formulario de abajo.',
    'Recibe tu QR: Te enviaremos un código único directamente a tu bandeja de entrada.',
    'Disfruta: Muestra el QR en nuestro local al realizar tu pedido y ¡listo!',
  ],
  disclaimer:
    '⚠️ Nota importante: Este beneficio es personal e intransferible para trabajadores de TAI. No olvides registrarte con tu correo corporativo para validar el código. ¡Te esperamos!',
  includes: 'Pausa creativa, sabor auténtico.',
} as const
