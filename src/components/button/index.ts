import Component from "../../utils/component";

import template from "./template.hbs";

import "./style.scss";

interface TProps {
  className?: string;
  text?: string;
  type?: string;
  onClick?: () => void;
  child?: any;
}

export class Button extends Component {
  constructor(props: TProps) {
    super({
      ...props,
      type: props.type ?? "text",
      events: {
        click: props.onClick,
      },
    });
  }

  render() {
    console.log(this.props.type)
    return this.compile(template, this.props);
  }
}
