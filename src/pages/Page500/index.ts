import Component from "../../utils/component";

import "./style.scss";

import template from "./template.hbs";
import { renderDOM } from "../../utils/renderDOM";

export default class Page500 extends Component {
  constructor() {
    super({
      onCancel: () => {
        renderDOM("home");
      },
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
