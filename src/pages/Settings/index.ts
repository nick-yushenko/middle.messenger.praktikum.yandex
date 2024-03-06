import Component from "../../utils/component";

import "./style.scss";

import template from "./template.hbs";

export default class Settings extends Component {
  constructor() {
    super({});
  }
  render() {
    return this.compile(template, this.props);
  }
}
