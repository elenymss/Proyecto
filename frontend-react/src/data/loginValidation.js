function ValidationLogin(values) {
  let error = {};

  const correo_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passw_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.correo === "") {
    error.correo = "¡Complete el campo porfavor!";
  } else if (!correo_pattern.test(values.correo)) {
    error.correo = "Su direccion de correo no coincide";
  } else {
    error.correo = "";
  }

  // Validaciónes para La contraseña
  if (values.passw === "") {
    error.passw =
      "El capo de contraseña no debe estar vacio, porfavor digite una contraseña";
  } else if (!passw_pattern.test(values.passw)) {
    error.passw =
      "La contraseña debe contener almenos 8 caracteres entre ellos: Numeros, letras minusculas y mayusculas.";
  } else {
    error.passw = "";
  }

  return error;
}

export default ValidationLogin;
