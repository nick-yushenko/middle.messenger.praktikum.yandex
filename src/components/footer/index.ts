import template from "./template.hbs";
import footerButton from "./footerButton.hbs";
import Component from "../../utils/component";
import "./style.scss";
import { renderDOM } from "../../utils/renderDOM";
import { registerComponent } from "../../utils/registerComponent";

export class Footer extends Component {
  constructor() {
    registerComponent("FooterButton", FooterButton);
    super({
      actions: [
        {
          name: "Настройки",
          icon: "settings-icon",
          onClick: (e: Event) => {
            if (e) {
              renderDOM("settings");
            }
          },
        },

        {
          name: "Профиль",
          icon: "profile-icon",
          onClick: (e: Event) => {
            if (e) {
              renderDOM("profile");
            }
          },
        },

        {
          name: "Диалоги",
          icon: "chat-icon",
          onClick: (e: Event) => {
            if (e) {
              renderDOM("chat");
            }
          },
        },
      ],
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}

type TFooterButton = {
  name: string;
  icon: string;
  onClick: (e: Event) => void;
};
class FooterButton extends Component {
  constructor(props: TFooterButton) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    });
  }
  render() {
    return this.compile(footerButton, this.props);
  }
}
