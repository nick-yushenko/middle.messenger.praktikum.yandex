import template from "./template.hbs";
import "./style.scss";
import Component from "@/utils/component";

export class PasswordEdit extends Component {
  constructor() {
    super({
      onSubmit: (event: Event) => {
        if (event) {
          event.preventDefault();

          const button = event.target as HTMLButtonElement;
          const form = button.closest("form") as HTMLFormElement | null;

          if (form) {
            const formData = new FormData(form);
            // Преобразование FormData в обычный объект
            const formDataObject: Record<string, string> = {};
            formData.forEach((value, name) => {
              formDataObject[name] = value.toString();
            });

            console.log("Данные формы: ", formDataObject);
          }
        }
      },

      inputs: [
        {
          hint: "Старый пароль",
          type: "password",
          value: "",
          name: "oldPassword",
          tabIndex: 1,
          autocomplete: "current-password",
        },
        {
          hint: "Новый пароль",
          type: "password",
          value: "",
          name: "newPassword",
          tabIndex: 2,
          autocomplete: "current-password",
        },
        {
          hint: "Повторите новый пароль",
          type: "password",
          value: "",
          name: "newPassword",
          tabIndex: 3,
          autocomplete: "current-password",
        },
      ],
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
