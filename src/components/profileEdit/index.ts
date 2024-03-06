import template from "./template.hbs";
import Component from "../../utils/component";
import "./style.scss";
import { prepareFormData } from "../../utils/prepareFormData";

export class ProfileEdit extends Component {
  constructor() {
    super({
      onSubmit: (event: Event) => {
        if (event) {
          event.preventDefault();

          console.log("Данные формы: ", prepareFormData(event));
        }
      },

      inputs: [
        {
          hint: "Почта",
          type: "email",
          value: "pochta@yandex.ru",
          name: "email",
          tabIndex: 1,
        },
        {
          hint: "Логин",
          type: "text",
          value: "ivanivanov",
          name: "login",
          tabIndex: 2,
        },
        {
          hint: "Имя",
          type: "text",
          value: "Джон",
          name: "first_name",
          tabIndex: 3,
        },
        {
          hint: "Фамилия",
          type: "text",
          value: "Уик",
          name: "second_name",
          tabIndex: 4,
        },
        {
          hint: "Имя в чате",
          type: "text",
          value: "Ivan",
          name: "display_name",
          tabIndex: 5,
        },
        {
          hint: "Телефон",
          type: "text",
          value: "+7 (999) 999 99-99",
          name: "phone",
          tabIndex: 6,
        },
      ],
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
