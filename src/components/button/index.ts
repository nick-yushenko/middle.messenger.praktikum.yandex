import template from "./template.hbs";

import "./style.scss";
import Component from "@/utils/component";

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
    return this.compile(template, this.props);
  }
}
