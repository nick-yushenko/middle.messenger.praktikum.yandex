import Component from "../../utils/component";

import template from "./template.hbs";

import "./style.scss";

interface TProps {
  className?: string;
  text?: string;
  href?: string;
  events?: {
    click: (e: any) => void;
  };
  child?: any;
}

export class Button extends Component {
  constructor(props: TProps) {
    super({
      ...props,
      events: {
        click: props.events?.click,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
