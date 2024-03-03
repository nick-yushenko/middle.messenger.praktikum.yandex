import template from "./template.hbs?raw";
import "./style.scss";
import Component from "../../utils/component";
import { renderDOM } from "../../utils/renderDOM";

export class Login extends Component {
  constructor() {
    super({
      events: {
        // blur: blurValidation,
        // submit: submitValidation,
      },
      pageName: "Вход",
      buttons: {
        type: "submit",
        label: "Войти",
      },
      ref: {
        href: "",
        onClick: () => {
          renderDOM("signup");
        },
      },

      inputs: [
        {
          type: "text",
          value: "",
          placeholder: "Пользователь",
          name: "first_name",
        },
        {
          type: "text",
          value: "",
          placeholder: "Пароль",
          name: "password",
        },
      ],
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
