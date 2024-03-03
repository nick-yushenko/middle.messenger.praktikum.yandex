import Component from "../../utils/component";

import template from "./template.hbs";
import { renderDOM } from "../../utils/renderDOM";

export default class Home extends Component {
  constructor() {
    super({
      // login: {
      //   onClick: () => {
      //     console.log("er");
      //     renderDOM("login");
      //     // render('login')
      //   },
      // },
      className: "homePage",
      buttons: [
        {
          href: "",
          text: "text",
          events: {
            click: () => {
              renderDOM("login");
            },
          },
        },
      ],
      // signup: {
      //   onClick: () => {
      //     render('signup')
      //   },
      // },
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
    return this.compile(template, this.props);
  }
}
