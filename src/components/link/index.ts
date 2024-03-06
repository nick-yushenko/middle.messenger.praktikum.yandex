import template from "./template.hbs";
import "./style.scss";
import Component from "@/utils/component";

interface TProps {
  className?: string;
  href: string;
  ref_name: string;
  onClick?: () => void;
  event?: () => void;
}

export class Link extends Component {
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
