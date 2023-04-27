function ValidationRegister(values) {
  let error = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.nombres === "") {
    error.nombres = "¡Complete el campo porfavor!";
  } else {
    error.nombres = "";
  }

  if (values.apellidos === "") {
    error.apellidos = "¡Complete el campo porfavor!";
  } else {
    error.apellidos = "";
  }

  if (values.telefono === "") {
    error.telefono = "¡Complete el campo porfavor!";
  } else {
    error.telefono = "";
  }

  if (values.ficha === "") {
    error.ficha = "¡Complete el campo porfavor!";
  } else {
    error.ficha = "";
  }

  if (values.genero === "") {
    error.genero = "¡Complete el campo porfavor!";
  } else {
    error.genero = "";
  }

  if (values.fechaNacimiento === "") {
    error.fechaNacimiento = "¡Complete el campo porfavor!";
  } else {
    error.fechaNacimiento = "";
  }

  if (values.tipoDocumento === "") {
    error.tipoDocumento = "¡Complete el campo porfavor!";
  } else {
    error.tipoDocumento = "";
  }

  if (values.numeroIden === "") {
    error.numeroIden = "¡Complete el campo porfavor!";
  } else {
    error.numeroIden = "";
  }

  if (values.usuario === "") {
    error.usuario = "¡Complete el campo porfavor!";
  } else {
    error.usuario = "";
  }

  if (values.correo === "") {
    error.correo = "¡Complete el campo porfavor!";
  } else if (!email_pattern.test(values.correo)) {
    error.correo = "Debe ingresar una direccion de Email correcta, (@).";
  } else {
    error.correo = "";
  }

  // Validaciónes para La contraseña
  if (values.passw === "") {
    error.passw = "El campo no debe estar vacio, digite una contraseña.";
  } else if (!password_pattern.test(values.passw)) {
    error.passw =
      "La contraseña debe contener almenos 8 caracteres entre ellos: Numeros, letras minusculas y mayusculas.";
  } else {
    error.passw = "";
  }

  if (values.confPass === "") {
    error.confPass = "El campo no debe estar vacio, digite una contraseña.";
  } else if (!password_pattern.test(values.confPass)) {
    error.passw =
      "La contraseña debe contener almenos 8 caracteres entre ellos: Numeros, letras minusculas y mayusculas.";
  } else {
    error.confPass = "";
  }

  return error;
}

export default ValidationRegister;
