export const number = value => {
  const visa = new RegExp("^4[0-9]{12}(?:[0-9]{3})?$");
  const amex = new RegExp("^3[47][0-9]{13}$");
  const mastercard = new RegExp("^5[1-5][0-9]{14}$");
  const discover = new RegExp("^(?:6(?:011|5[0-9][0-9])[0-9]{12})$");

  let isValid = false;

  if (visa.test(value)) {
    isValid = true;
  } else if (mastercard.test(value)) {
    isValid = true;
  } else if (amex.test(value)) {
    isValid = true;
  } else if (discover.test(value)) {
    isValid = true;
  }

  return isValid ? undefined : "Invalid card number";
};
