import template from "./template.hbs";
import "./style.scss";
import Component from "../../utils/component";
// import { renderDOM } from "../../utils/renderDOM";
import { blurValidation } from "../../utils/validation";
import { renderDOM } from "../../utils/renderDOM";
import { prepareFormData } from "../../utils/prepareFormData";

export class Login extends Component {
  isValid = false;

  constructor() {
    super({
      events: {
        blur: blurValidation,
        submit: (event: Event) => {
          if (event) {
            event.preventDefault();

            console.log("Данные формы: ", prepareFormData(event));
          }
        },
        cancel: () => {
          renderDOM("signup");
        },
      },

      title: "Вход",
      primaryBtnText: "Войти",
      secondaryBtnText: "Создать аккаунт",

      inputs: [
        {
          hint: "Логин",
          type: "text",
          value: "",
          name: "login",
          tabIndex: 1,
          autocomplete: "login",
        },
        {
          hint: "Пароль",
          type: "password",
          value: "",
          name: "password",
          tabIndex: 2,
          autocomplete: "current-password",
        },
      ],
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
