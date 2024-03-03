import Component from "../../utils/component";

import "./style.module.scss";

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
      // chat: {
      //   onClick: () => {
      //     render('chat')
      //   },
      // },
      // page404: {
      //   onClick: () => {
      //     render('page404')
      //   },
      // },
      // page500: {
      //   onClick: () => {
      //     render('page500')
      //   },
      // },
    });
  }
  render() {
    console.log(this);
    return this.compile(template, this.props);
  }
}
