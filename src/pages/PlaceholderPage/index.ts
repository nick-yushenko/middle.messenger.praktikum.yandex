import "./style.scss";

import template from "./template.hbs";
import Component from "@/utils/component";

export default class PlaceholderPage extends Component {
  constructor() {
    super({});
  }
  render() {
    return this.compile(template, this.props);
  }
}
