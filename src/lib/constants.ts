export const EMPRESA = {
  nombre:      'Kimeru',
  razonSocial: 'Atlas Intelligence S.A.S',
  dominio:     'atlasintelligencesas.com',
  basePath:    '/kimeru',
  contacto: {
    email:    'contacto@atlasintelligencesas.com',
    whatsapp: '', // número colombiano sin +, ej: "573001234567" — pendiente de Lucy
  },
  redes: {
    instagram: 'https://www.instagram.com/kimeru_agro',
    linkedin:  'https://co.linkedin.com/company/kimeru-agro',
  },
  urls: {
    base:          'https://atlasintelligencesas.com/kimeru',
    privacidad:    'https://atlasintelligencesas.com/kimeru/privacidad',
    terminos:      'https://atlasintelligencesas.com/kimeru/terminos',
    eliminarDatos: 'https://atlasintelligencesas.com/kimeru/eliminar-datos',
    ogImage:       'https://atlasintelligencesas.com/kimeru/og-image.png',
    logo:          'https://atlasintelligencesas.com/kimeru/logo-kimeru.png',
  },
  legal: {
    ley:                  'Ley 1581 de 2012',
    jurisdiccion:         'Colombia',
    plazoEliminacion:     '15 días hábiles',
    ultimaActualizacion:  '29 de junio de 2025',
  },
}

export const LOGROS = [
  { valor: 500, sufijo: '+', etiqueta: 'Agricultores conectados' },
  { valor: 12,  sufijo: '',  etiqueta: 'Municipios alcanzados' },
  { valor: 30,  sufijo: '%', etiqueta: 'Aumento promedio en ingresos' },
  { valor: 2,   sufijo: '',  etiqueta: 'Años de impacto' },
]

export const PASOS = [
  {
    numero:      '01',
    titulo:      'Te registras vía WhatsApp',
    descripcion: 'Solo necesitas tu número de WhatsApp. Sin apps, sin contraseñas, sin complicaciones.',
    icono:       'MessageCircle',
  },
  {
    numero:      '02',
    titulo:      'Recibes análisis de precios y mercado',
    descripcion: 'Información actualizada adaptada a tu cultivo y tu región colombiana.',
    icono:       'TrendingUp',
  },
  {
    numero:      '03',
    titulo:      'Vendes mejor',
    descripcion: 'Toma decisiones con datos concretos y mejora tus ingresos de forma sostenida.',
    icono:       'ShoppingBag',
  },
]
