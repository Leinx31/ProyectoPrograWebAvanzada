const appData = {
  // Configuración de Roles para la simulación RBAC
  roles: ['Administrador', 'Docente', 'Estudiante'],
  currentRole: 'Administrador',

  // Datos para los indicadores del Dashboard principal
  indicadores: {
    totalProducciones: 124,
    totalUsuarios: 45,
    categoriasActivas: 8,
    investigacionesEnCurso: 12
  },

  // Datos para simular las tablas y mantenimientos
  usuarios: [
    { id: 1, nombre: 'Álvaro Cordero', correo: 'acordero@ucenfotec.ac.cr', rol: 'Docente' },
    { id: 2, nombre: 'Ana Delgado', correo: 'adelgado@ucenfotec.ac.cr', rol: 'Administrador' },
    { id: 3, nombre: 'Carlos Mendoza', correo: 'cmendoza@ucenfotec.ac.cr', rol: 'Estudiante' }
  ],

  categorias: [
    { id: 1, nombre: 'Artículo Científico' },
    { id: 2, nombre: 'Tesis de Grado' },
    { id: 3, nombre: 'Proyecto de Investigación' },
    { id: 4, nombre: 'Manual Técnico' }
  ],

  areasConocimiento: [
    { id: 1, nombre: 'Ingeniería de Software' },
    { id: 2, nombre: 'Ciberseguridad' },
    { id: 3, nombre: 'Inteligencia Artificial' }
  ],

  tecnologias: [
    { id: 1, nombre: 'JavaScript Vanilla' },
    { id: 2, nombre: 'Python' },
    { id: 3, nombre: 'Docker' }
  ],

  tiposInvestigacion: [
    { id: 1, nombre: 'Aplicada' },
    { id: 2, nombre: 'Pura' }
  ],

  carreras: [
    { id: 1, nombre: 'Ingeniería del Software' },
    { id: 2, nombre: 'Desarrollo de Software' }
  ],

  lineasInvestigacion: [
    { id: 1, nombre: 'Desarrollo Web Avanzado' },
    { id: 2, nombre: 'Automatización de Procesos' }
  ],

  producciones: [
    {
      id: 1,
      titulo: 'Optimización de Algoritmos en Redes Mesh',
      autor: 'Álvaro Cordero',
      categoria: 'Artículo Científico',
      area: 'Ciberseguridad',
      tecnologia: 'Python',
      fecha: '2026-03-15',
      estado: 'Publicado'
    },
    {
      id: 2,
      titulo: 'Plataforma Web para Gestión Académica',
      autor: 'Carlos Mendoza',
      categoria: 'Tesis de Grado',
      area: 'Ingeniería de Software',
      tecnologia: 'JavaScript Vanilla',
      fecha: '2026-06-20',
      estado: 'En Revisión'
    }
  ]
};