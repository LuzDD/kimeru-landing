export const EMPRESA = {
  nombre:      'Kimeru',
  razonSocial: 'Atlas Intelligence S.A.S',
  dominio:     'atlasintelligencesas.com',
  basePath:    '/kimeru',
  contacto: {
    email:    'luzmiduradori@gmail.com',
    whatsapp: '573136976123',
  },
  redes: {
    instagram:      'https://www.instagram.com/kimeru_agro',
    linkedin:       'https://co.linkedin.com/company/kimeru-agro',
    whatsappCanal:  'https://whatsapp.com/channel/0029VbBtTD0GE56lE4TVkQ0a',
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
    ultimaActualizacion:  '14 de mayo de 2026',
  },
}

export const LOGROS = [
  { valor: 3,  sufijo: 'M+', etiqueta: 'Personas que viven del campo en Colombia' },
  { valor: 10, sufijo: '%',  etiqueta: 'Del PIB nacional genera la agricultura' },
  { valor: 70, sufijo: 'M',  etiqueta: 'Toneladas de alimentos producidas al año' },
  { valor: 8,  sufijo: '%',  etiqueta: 'Creció el sector agropecuario en 2024' },
]

export const SEGMENTOS = [
  {
    icono:       'Smartphone',
    titulo:      'Productor',
    resumen:     'Desde su celular, en campo',
    descripcion: 'Escribe al chatbot de WhatsApp y registra qué produce, cómo, cuándo y en qué condiciones comerciales.',
    entrega: [
      'Información de precios de sus productos',
      'Referencias de cuánto le cuesta producir',
      'Oportunidades del sector agroalimentario',
    ],
  },
  {
    icono:       'Users',
    titulo:      'Asociación',
    resumen:     'Consolida a sus asociados',
    descripcion: 'Reduce la dispersión de datos entre productores y consolida la información productiva de su territorio.',
    entrega: [
      'Capacidad de mostrar volúmenes y ventanas de cosecha',
      'Información útil para negociar con empresas',
      'Datos para proyectos, convocatorias y aliados',
    ],
  },
  {
    icono:       'BarChart3',
    titulo:      'Empresa / Institución',
    resumen:     'Desde su oficina, con datos reales',
    descripcion: 'Revisa el Explorador de Abastecimiento: un dashboard con la oferta agroproductiva consolidada por territorio.',
    entrega: [
      'Volúmenes agregados y ventanas de cosecha',
      'Visibilidad de oferta estructurada para abastecimiento',
      'Indicadores clave para compras y planeación',
    ],
  },
]

export const TRACCION = {
  titulo:    'Resultados de nuestros pilotos',
  subtitulo: 'Validado en campo, en Antioquia y Nariño',
  metricas: [
    { valor: 574, sufijo: '',  etiqueta: 'Pequeños productores activos (Red de Arrieros de Occidente)' },
    { valor: 23,  sufijo: '',  etiqueta: 'Asociaciones usando Kimeru' },
    { valor: 45,  sufijo: '%', etiqueta: 'Más capacidad de negociación' },
    { valor: 2,   sufijo: '',  etiqueta: 'Departamentos en piloto activo' },
  ],
}

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
