import template from "./template.hbs";
import Component from "../../utils/component";
import "./style.scss";

export class Footer extends Component {
  constructor() {
    super({
      actions: [
        {
          name: "Настройки",
          icon: "settings-icon",
          click: () => {
            console.log("to settings");
          },
        },

        {
          name: "Профиль",
          icon: "profile-icon",
          click: () => {
            console.log("to profile");
          },
        },

        {
          name: "Диалоги",
          icon: "chat-icon",
          click: () => {
            console.log("to chat");
          },
        },
      ],
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
