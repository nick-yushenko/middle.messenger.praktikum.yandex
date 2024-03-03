import Component from "../../utils/component";

import template from "./template.hbs";

import "./style.scss";

interface TProps {
  className?: string;
  text?: string;
  href?: string;
  onClick?: () => void;
  child?: any;
}

export class Button extends Component {
  constructor(props: TProps) {
    super({
      ...props,
      events: {
        click: props.onClick,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
