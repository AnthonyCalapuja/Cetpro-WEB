export interface Program {
  id: string;
  title: string;
  category: 'Estética y Cuidado Personal' | 'Gastronomía' | 'Tecnología' | 'Textil y Confección' | 'Hostelería' | 'Artes y Emprendimiento';
  shortDescription: string;
  description: string;
  image: string;
  iconName: string;
  cycle: 'Auxiliar Técnico' | 'Técnico';
  duration: string;
  credits: string;
  skills: string[];
}

export const PROGRAMS: Program[] = [
  {
    id: 'estilismo',
    title: 'Estilismo',
    category: 'Estética y Cuidado Personal',
    shortDescription: 'Capacita en la gestión integral de la imagen personal, cortes, peinados y cosmetología.',
    description: 'Capacita en la gestión integral de la imagen personal. Abarca desde cortes, peinados y colorimetría avanzada, hasta maquillaje profesional, cosmetología facial básica y estética de manos y pies (manicure/pedicure).',
    image: '/images/programas/Programa Estilismo.jpg',
    iconName: 'Sparkles',
    cycle: 'Técnico',
    duration: '1760 horas',
    credits: '80 Créditos',
    skills: ['Colorimetría avanzada', 'Maquillaje profesional', 'Cosmetología facial', 'Manicure & Pedicure', 'Tratamientos capilares']
  },
  {
    id: 'cocina',
    title: 'Cocina',
    category: 'Gastronomía',
    shortDescription: 'Dominio de técnicas culinarias, manipulación de alimentos y gastronomía peruana e internacional.',
    description: 'Enfocada en el dominio de técnicas culinarias, manipulación higiénica de alimentos (normas BPA y HACCP), elaboración de platos de la gastronomía peruana e internacional, diseño de menús y costeo de recetas.',
    image: '/images/programas/Programa Cocina.jpg',
    iconName: 'Utensils',
    cycle: 'Técnico',
    duration: '1760 horas',
    credits: '80 Créditos',
    skills: ['Gastronomía peruana e internacional', 'Normas BPA y HACCP', 'Costeo de recetas', 'Diseño de cartas y menús', 'Técnicas de corte y cocción']
  },
  {
    id: 'ti',
    title: 'Plataformas y Servicios de Tecnologías de la Información',
    category: 'Tecnología',
    shortDescription: 'Soporte técnico, mantenimiento de equipos, redes LAN, servidores y atención Help Desk.',
    description: 'Prepara para brindar soporte técnico informático, ensamblaje y mantenimiento de equipos, instalación de redes LAN, gestión de sistemas operativos, servidores y atención en mesas de ayuda (Help Desk).',
    image: '/images/programas/Programa Servicios de Tecnologías de la Información.jpg',
    iconName: 'Monitor',
    cycle: 'Técnico',
    duration: '1760 horas',
    credits: '80 Créditos',
    skills: ['Mantenimiento y ensamblaje', 'Instalación de redes LAN', 'Sistemas operativos & Servidores', 'Atención Help Desk', 'Seguridad informática básica']
  },
  {
    id: 'peluqueria-barberia',
    title: 'Peluquería y Barbería',
    category: 'Estética y Cuidado Personal',
    shortDescription: 'Atención del cabello y estética masculina/femenina, cortes modernos y perfilado de barba.',
    description: 'Orientada a la atención práctica del cabello y la estética masculina/femenina. Incluye técnicas de corte, perfilado y diseño de barba, tratamientos de restauración capilar y aplicación de colorimetría básica.',
    image: '/images/programas/Programa Peluquería y Barbería.jpg',
    iconName: 'Scissors',
    cycle: 'Auxiliar Técnico',
    duration: '950 horas',
    credits: '40 Créditos',
    skills: ['Corte de varón y perfilado de barba', 'Corte dama clásico y moderno', 'Restauración capilar', 'Colorimetría básica', 'Bioseguridad en salón']
  },
  {
    id: 'panaderia-pasteleria',
    title: 'Panadería y Pastelería',
    category: 'Gastronomía',
    shortDescription: 'Elaboración de panes comerciales y artesanales, postres tradicionales y pastelería fina.',
    description: 'Cubre la elaboración de panes comerciales y artesanales, procesos de fermentación y horneado, producción de postres tradicionales peruanos, pastelería fina, decoración de tortas y costeo de insumos.',
    image: '/images/programas/Programa Panadería y Pastelería.jpg',
    iconName: 'Cake',
    cycle: 'Auxiliar Técnico',
    duration: '950 horas',
    credits: '40 Créditos',
    skills: ['Panadería artesanal y comercial', 'Pastelería fina y postres peruanos', 'Decoración de tortas', 'Control de fermentación', 'Costeo de masa e insumos']
  },
  {
    id: 'estampados',
    title: 'Estampados de Prendas de Vestir',
    category: 'Textil y Confección',
    shortDescription: 'Impresión textil manual e industrial, serigrafía, sublimación, plastisol y acabados.',
    description: 'Se centra en la impresión textil manual e industrial: grabado y revelado de mallas serigráficas, aplicación de tintas (plastisol, al agua), sublimación, transfers y acabados especiales sobre tela.',
    image: '/images/programas/Programa Estampado de Ropa.jpg',
    iconName: 'Shirt',
    cycle: 'Auxiliar Técnico',
    duration: '950 horas',
    credits: '40 Créditos',
    skills: ['Serigrafía textil', 'Revelado de mallas', 'Tintas plastisol y al agua', 'Sublimación & Transfer', 'Control de calidad de estampado']
  },
  {
    id: 'recepcion-hosteleria',
    title: 'Recepción para Servicios de Hostelería',
    category: 'Hostelería',
    shortDescription: 'Atención al huésped, gestión de reservas, Check-in/Check-out y atención al cliente.',
    description: 'Prepara para la atención directa al huésped en alojamientos y hoteles: gestión de reservas, flujos de check-in y check-out, caja, resolución de consultas y estándares de servicio al cliente.',
    image: '/images/programas/Programa Recepción para Servicio de Hostelería.jpg',
    iconName: 'Hotel',
    cycle: 'Auxiliar Técnico',
    duration: '950 horas',
    credits: '40 Créditos',
    skills: ['Gestión de reservas hotelera', 'Procesos Check-in / Check-out', 'Facturación y caja', 'Servicio al cliente premium', 'Protocolo de bienvenida']
  },
  {
    id: 'costura-acabados',
    title: 'Costura y Acabados',
    category: 'Textil y Confección',
    shortDescription: 'Operatividad de maquinaria industrial de confección, control de calidad y empaque final.',
    description: 'Se enfoca en la operatividad de maquinaria industrial de confección (recta, remalladora, recubridora) para la unión de prendas, junto con el control de calidad, pulido de hilos, planchado y empaque final.',
    image: '/images/programas/Programa Costura y Acabados.jpg',
    iconName: 'Needle',
    cycle: 'Auxiliar Técnico',
    duration: '950 horas',
    credits: '40 Créditos',
    skills: ['Manejo de máquinas industriales', 'Remalle y recubierto', 'Control de calidad textil', 'Planchado industrial', 'Empaque y etiquetado']
  },
  {
    id: 'corte-ensamblaje',
    title: 'Corte y Ensamblaje',
    category: 'Textil y Confección',
    shortDescription: 'Optimización de tizado, tendido de telas, corte industrial y habilitado de prendas.',
    description: 'Orientada a la fase estructural del proceso textil: optimización de tizado, tendido de telas, corte con herramientas e instrumentos industriales y el habilitado ordenado de piezas para costura.',
    image: '/images/programas/Programa Corte y Ensamblaje.jpg',
    iconName: 'Ruler',
    cycle: 'Auxiliar Técnico',
    duration: '950 horas',
    credits: '40 Créditos',
    skills: ['Tizado y optimización de tela', 'Tendido industrial', 'Uso de cortadora vertical/circular', 'Habilitado de piezas', 'Interpretación de patrones']
  },
  {
    id: 'artesania-manualidades',
    title: 'Artesanía y Manualidades',
    category: 'Artes y Emprendimiento',
    shortDescription: 'Bisutería, cerámica al frío, pirograbado, empaques creativos y artículos decorativos.',
    description: 'Desarrolla competencias para la producción de artículos decorativos y utilitarios mediante técnicas manuales de bisutería, cerámica al frío, pirograbado, empaques creativos y decoración temática para emprendimientos.',
    image: '/images/programas/Programa Artesanía y Manualidades.jpg',
    iconName: 'Palette',
    cycle: 'Auxiliar Técnico',
    duration: '950 horas',
    credits: '40 Créditos',
    skills: ['Bisutería fina', 'Moldeado en cerámica al frío', 'Pirograbado en madera y cuero', 'Empaques de regalo creativos', 'Emprendimiento artesanal']
  }
];

export const PROGRAM_COMPARISON = [
  {
    feature: 'Duración Total',
    auxiliar: '40 Créditos / 950 horas',
    tecnico: '80 Créditos / 1760 horas',
  },
  {
    feature: 'Requisito de Ingreso',
    auxiliar: 'Edad mínima cumplida (sin grado académico obligatorio previo)',
    tecnico: 'Primaria completa o Ciclo Intermedio de EBA',
  },
  {
    feature: 'Enfoque Laboral',
    auxiliar: 'Ejecución de operaciones rutinarias bajo supervisión técnica',
    tecnico: 'Autonomía operativa, supervisión de procesos y solución de problemas',
  },
  {
    feature: 'Resultado / Título Oficial',
    auxiliar: 'Título a Nombre de la Nación de Auxiliar Técnico',
    tecnico: 'Título a Nombre de la Nación de Técnico',
  }
];
