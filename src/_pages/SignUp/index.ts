import template from "./template.hbs";
import "./style.scss";
import Component from "../../utils/component";
// import { renderDOM } from "../../utils/renderDOM";
import { blurValidation, submitValidation } from "../../utils/validation";
import { renderDOM } from "../../utils/renderDOM";

export class SignUp extends Component {
  constructor() {
    super({
      events: {
        blur: blurValidation,

        submit: (e: any) => {
          alert("submi");

          submitValidation(e);
        },
        cancel: () => {
          renderDOM("login");
        },
      },

      title: "Вход",
      primaryBtnText: "Создать аккаунт",
      secondaryBtnText: "Уже есть аккаунт",
      inputs: [
        {
          hint: "Имя",
          type: "text",
          value: "",
          name: "first_name",
        },
        {
          hint: "Фамилия",
          type: "text",
          value: "",
          name: "second_name",
        },
        {
          hint: "Логин",
          type: "text",
          value: "",
          name: "login",
        },
        {
          hint: "E-mail",
          type: "email",
          value: "",
          name: "email",
        },
        {
          hint: "Телефон",
          type: "text",
          value: "",
          name: "phone",
        },
        {
          hint: "Пароль",
          type: "password",
          value: "",
          name: "password",
        },
      ],
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
