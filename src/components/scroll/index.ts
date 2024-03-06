import template from "./template.hbs";
import "./style.scss";
import Component from "@/utils/component";

interface TProps {
  className?: string;
  onScroll?: () => void;
  event?: () => void;
  children: Component;
}

export class Scroll extends Component {
  constructor(props: TProps) {
    super({
      ...props,
      events: {
        scroll: props.onScroll,
      },
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
