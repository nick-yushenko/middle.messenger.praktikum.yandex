export function validation(name: string, value: string) {
  switch (name) {
    case "first_name":
    case "second_name": {
      return /^([А-ЯЁA-Z][а-яёa-z]+-?[А-ЯЁA-Zа-яёa-z]*)$/.test(value);
    }

    case "login": {
      return /^[a-zA-Z0-9_-]{3,20}$/.test(value);
    }
    case "email": {
      return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value);
    }
    case "password":
    case "old_password": {
      return /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,40}$/.test(value);
    }
    case "phone": {
      return /^\+?\d{10,15}$/.test(value);
    }
    case "message": {
      return /.+/.test(value);
    }
    default:
      return true;
  }
}

export function blurValidation(e: any) {
  if (e.target.tagName === "INPUT") {
    if (validation(e.target.name, e.target.value)) {
      e.target.classList.remove("invalid");
      if (e.target.parentNode.querySelector(".error_message"))
        e.target.parentNode.querySelector(".error_message").remove();
    } else {
      const span = document.createElement("span");
      span.className = "error_message";
      span.textContent = "Некорректное значение";
      if (!e.target.parentNode.querySelector(".error")) e.target.after(span);

      e.target.classList.add("not_valid");
    }
  }
}

export function submitValidation(e: any) {
  let isValid = true;

  if (e.target.tagName === "FORM") {
    e.preventDefault();

    const formData = new FormData(e.target);

    for (let [name, value] of formData) {
      if (!validation(name, value.toString())) isValid = false;
    }

    if (isValid) {
      const passwords = document.querySelectorAll("[name=password]");
      if (
        passwords.length > 1 &&
        (passwords[0] as HTMLInputElement).value != (passwords[1] as HTMLInputElement).value
      ) {
        (passwords[1] as HTMLInputElement).classList.add("invalid");
        console.log("Пароль не совпадает");
        return;
      }
      for (let [name, value] of formData) {
        console.log(`${name} : ${value}`);
        e.target.reset();
      }
    } else console.log("Некорректное значение");
  }
}
