import template from "./template.hbs";
import "./style.scss";
import Component from "@/utils/component";

export class Sidebar extends Component {
  constructor() {
    super({});
  }
  render() {
    return this.compile(template, this.props);
  }
}
