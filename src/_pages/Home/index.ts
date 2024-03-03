import Component from "../../utils/component";

import "./style.scss";

import template from "./template.hbs";
import { renderDOM } from "../../utils/renderDOM";

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
      // profile: {
      //   onClick: () => {
      //     render('profile')
      //   },
      // },
      // settings: {
      //   onClick: () => {
      //     render('settings')
      //   },
      // },
      // changePass: {
      //   onClick: () => {
      //     render('password')
      //   },
      // },
      chat: {
        onClick: () => {
          renderDOM("chat");
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
    console.log(this);
    return this.compile(template, this.props);
  }
}
