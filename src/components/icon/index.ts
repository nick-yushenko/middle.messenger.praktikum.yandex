import template from "./template.hbs";
import Component from "@/utils/component";

interface TProps {
  className?: string;
  name: string;
  width: number;
  height: number;
}

export class Icon extends Component {
  constructor(props: TProps) {
    super({
      ...props,
    });
  }
  render() {
    return this.compile(template, this.props);
  }
}
