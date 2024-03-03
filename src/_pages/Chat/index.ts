import Component from "../../utils/component";

import "./style.scss";

import template from "./template.hbs";
import { renderDOM } from "../../utils/renderDOM";

export default class Chat extends Component {
  constructor() {
    super({});
  }
  render() {
    return this.compile(template, this.props);
  }
}
