import template from "./template.hbs";
import Component from "../../utils/component";
import "./style.scss";

export class Messenger extends Component {
  constructor() {
    super({
      onMessage: (e: Event) => {
        // const inputValue = (e.target as HTMLInputElement).value;
        console.log(e);
      },
      onBlur: (e: Event) => {
        // const inputValue = (e.target as HTMLInputElement).value;
        console.log(e);
      },
      onSend: (e: Event) => {
        console.log(e);
        // e.preventDefault();
        console.log(e);
      },
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
