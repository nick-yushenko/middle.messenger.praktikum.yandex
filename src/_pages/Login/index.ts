import template from "./template.hbs";
import "./style.scss";
import Component from "../../utils/component";
// import { renderDOM } from "../../utils/renderDOM";
import { blurValidation, submitValidation } from "../../utils/validation";

export class Login extends Component {
  constructor() {
    super({
      events: {
        blur: blurValidation,
        submit: (e: any) => {
          alert("submi");

          submitValidation(e);
        },
        cancel: () => {
          alert("cancel");
        },
      },
      title: "Вход",
      primaryBtnText: "Войти",
      secondaryBtnText: "Создать аккаунт",
      buttons: {
        type: "submit",
        label: "Войти",
      },
      // ref: {
      //   href: "",
      //   onClick: () => {
      //     renderDOM("signup");
      //   },
      // },

      // inputs: [
      //   {
      //     type: "text",
      //     value: "",
      //     placeholder: "Пользователь",
      //     name: "first_name",
      //   },
      //   {
      //     type: "text",
      //     value: "",
      //     placeholder: "Пароль",
      //     name: "password",
      //   },
      // ],
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
