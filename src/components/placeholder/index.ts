import template from "./template.hbs";
import Component from "../../utils/component";
import "./style.scss";

export class Placeholder extends Component {
  constructor() {
    super({
      onMessage: (e: Event) => {
        console.log(e);
      },
      onBlur: (e: Event) => {
        console.log(e);
      },
      onSend: (e: Event) => {
        console.log(e);
      },
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
