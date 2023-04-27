function ValidationLogin(values) {
  let error = {};

  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.email === "") {
    error.email = "¡Complete el campo porfavor!";
  } else if (!email_pattern.test(values.email)) {
    error.email = "Su E-mail no coincide";
  } else {
    error.email = "";
  }

  // Validaciónes para La contraseña
  if (values.password === "") {
    error.password =
      "El capo de contraseña no debe estar vacio, porfavor digite una contraseña";
  } else if (!password_pattern.test(values.password)) {
    error.password =
      "La contraseña debe contener almenos 8 caracteres entre ellos: Numeros, letras minusculas y mayusculas.";
  } else {
    error.password = "";
  }

  return error;
}

export default ValidationLogin;
