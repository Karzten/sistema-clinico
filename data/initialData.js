const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function cargarDatosIniciales() {
  try {
    // Crear Roles
    const adminRole = await prisma.roles.create({
      data: {
        nombre: 'Admin',
        descripcion: 'Rol de administrador',
        usu_creacion:  1,
        usu_actualizacion: 1
      },
    });

    const usuarioRole = await prisma.roles.create({
      data: {
        nombre: 'Usuario',
        descripcion: 'Rol de usuario estándar',
        usu_creacion:  1,
        usu_actualizacion: 1
      },
    });

    // Crear Permisos
    const crearUsuarioPermiso = await prisma.permisos.create({
      data: {
        nombre: 'Crear Usuario',
        descripcion: 'Permiso para crear usuarios',
        usu_creacion:  1,
        usu_actualizacion: 1
      },
    });

    const eliminarUsuarioPermiso = await prisma.permisos.create({
      data: {
        nombre: 'Eliminar Usuario',
        descripcion: 'Permiso para eliminar usuarios',
        usu_creacion:  1,
        usu_actualizacion: 1
      },
    });

    // Crear Usuarios
    const adminUsuario = await prisma.usuarios.create({
      data: {
        usuario: 'admin',
        password: 'admin', // Asegúrate de encriptar la contraseña
        correo: 'admin@example.com',
        // Otros campos de usuario
        rol: {
          connect: {
            rol_id: adminRole.rol_id,
          },
        },
        usu_creacion:  1,
        usu_actualizacion: 1
      },
    });

    const usuarioEjemplo = await prisma.usuarios.create({
      data: {
        usuario: 'usuario1',
        password: '12345678',
        correo: 'usuario1@example.com',
        // Otros campos de usuario
        rol: {
          connect: {
            rol_id: usuarioRole.rol_id,
          },
        },
        usu_creacion:  1,
        usu_actualizacion: 1
      },
    });

    console.log('Datos iniciales cargados con éxito.');
  } catch (error) {
    console.error('Error al cargar datos iniciales:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Llama a la función para cargar datos iniciales
cargarDatosIniciales();
