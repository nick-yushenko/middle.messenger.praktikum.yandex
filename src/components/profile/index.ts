import template from "./template.hbs";
import Component from "../../utils/component";
import "./style.scss";
import { renderDOM } from "../../utils/renderDOM";

export class Profile extends Component {
  constructor() {
    super({
      actions: {
        logout: () => {
          renderDOM("home");
        },
        editPassword: () => {
          renderDOM("password");
        },

        editProfile: () => {
          renderDOM("settings");
        },
      },
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
