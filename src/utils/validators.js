export const nameValidator = fieldValue => {
  if (fieldValue.trim() === '') {
    return `Name is required`
  }

  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return 'Invalid character'
  }

  if (fieldValue.trim().length < 3) {
    return `Name needs to be at least three characters`;
  }
  return false
}

export const emailValidator = email => {
  if (/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
    return false;
  }

  if (email.trim() === '') {
    return 'Email is required'
  }

  return 'Please enter a valid email'
}

export const passwordValidator = (password1, password2) => {
  if (password1.trim() === '' || password2.trim() === '') {
    return 'Passwords is required'
  }

  if (password1 !== password2) {
    return 'Passwords did not match'
  }

  return false;
}
