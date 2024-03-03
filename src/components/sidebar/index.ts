import template from "./template.hbs";
import Component from "../../utils/component";
import "./style.scss";

export class Sidebar extends Component {
  constructor() {
    super({});
  }
  render() {
    return this.compile(template, this.props);
  }
}
