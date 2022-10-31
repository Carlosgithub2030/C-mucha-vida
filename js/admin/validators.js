export const validateImagen = (valor, campo) => {
  // que no este vacio
  if (valor.trim().length < 2) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  campo.classList = "form-control is-valid";
  return true;
};


export const validateName = (valor, campo) => {
  // que no este vacio
  if (valor.trim().length < 2) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  campo.classList = "form-control is-valid";
  return true;
};

export const validateMedico = (valor, campo) => {
  // que no este vacio
  if (valor.trim().length < 2) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  campo.classList = "form-control is-valid";
  return true;
};

export const validateFecha = (valor, campo) => {
  // que no este vacio
  if (valor.trim().length < 2) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  campo.classList = "form-control is-valid";
  return true;
};

export const validateHora = (valor, campo) => {
  // que no este vacio
  if (valor.trim().length < 2) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  campo.classList = "form-control is-valid";
  return true;
};

export const validateEdad = (valor, campo) => {
  // que no este vacio
  if (valor.trim().length < 2) {
    campo.classList = "form-control is-invalid";
    return false;
  }

  campo.classList = "form-control is-valid";
  return true;
};






