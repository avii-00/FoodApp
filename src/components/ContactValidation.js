export default function ContactValidation(values) {
  let errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^\d{10}$/; // Assumes a 10-digit phone number format

  if (!values.name.trim()) {
    errors.name = "Name should not be empty";
  }

  if (!values.email.trim()) {
    errors.email = "Email should not be empty";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.phone.trim()) {
    errors.phone = "Phone number should not be empty";
  } else if (!phonePattern.test(values.phone)) {
    errors.phone = "Invalid phone number";
  }

  if (!values.message.trim()) {
    errors.message = "Message should not be empty";
  }

  return errors;
}
