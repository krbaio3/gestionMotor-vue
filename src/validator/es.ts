export const validationEs = {
  custom: {
    email: {
      required: 'Se requiere correo electrónico',
      email: 'El correo electrónico no es válido',
    },
    username: {
      required: 'Se requiere el nombre de usuario',
    },
    password: {
      required: 'Se requiere la contraseña',
      min: 'La contraseña es demasiado corta',
    },
    password_confirmation: {
      required: 'Se requiere la contraseña',
      min: 'La contraseña es demasiado corta',
      confirmed: 'La contraseña no coincide',
    },
  },
};
