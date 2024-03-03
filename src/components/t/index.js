// Для простоты примера воспользуемся готовым шаблонизатором
import Handlebars from "handlebars";
import Block from "../../utils/block";
import hbsTemplate from "../button/profile.hbs?raw";

const btnTemplate = `
<div class={{className}}>
    {{child}}
</div>
`;
export class Button extends Block {
  constructor(props) {
    // Создаём враппер DOM-элемент button
    super("button", props);
  }

  render() {
    return this.compile(btnTemplate, this.props);
  }
}

const profileTemplate = `
        {{ userName }}
        {{{ button }}}
`;

export class UserProfile extends Block {
  constructor(props) {
    super("div", props);
  }

  render() {
    return this.compile(hbsTemplate, this.props);
  }
}
