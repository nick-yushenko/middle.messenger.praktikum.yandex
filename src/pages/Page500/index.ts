import "./style.scss";

import template from "./template.hbs";
import { renderDOM } from "@/utils/renderDOM";
import Component from "@/utils/component";

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
