import template from "./template.hbs";
import "./style.scss";
import Component from "../../utils/component";
// import { renderDOM } from "../../utils/renderDOM";
import { blurValidation, submitValidation } from "../../utils/validation";
import { renderDOM } from "../../utils/renderDOM";

export class Login extends Component {
  constructor() {
    super({
      events: {
        blur: blurValidation,

        submit: (e: any) => {
          submitValidation(e);
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
        },
        {
          hint: "Пароль",
          type: "password",
          value: "",
          name: "password",
          tabIndex: 2,
        },
      ],
    });
  }

  render() {
    console.log(this._getChildrenAndProps(this.props));

    return this.compile(template, this.props);
  }
}
