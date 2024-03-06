import "./style.scss";

import template from "./template.hbs";
import { renderDOM } from "@/utils/renderDOM";
import Component from "@/utils/component";

export default class Home extends Component {
  constructor() {
    super({
      className: "homePage",
      login: {
        onClick: () => {
          renderDOM("login");
        },
      },
      signup: {
        onClick: () => {
          renderDOM("signup");
        },
      },
      profile: {
        onClick: () => {
          renderDOM("profile");
        },
      },
      settings: {
        onClick: () => {
          renderDOM("settings");
        },
      },
      changePass: {
        onClick: () => {
          renderDOM("password");
        },
      },
      chat: {
        onClick: () => {
          renderDOM("chat");
        },
      },
      placeholder: {
        onClick: () => {
          renderDOM("placeholder");
        },
      },
      page404: {
        onClick: () => {
          renderDOM("page404");
        },
      },
      page500: {
        onClick: () => {
          renderDOM("page500");
        },
      },
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
