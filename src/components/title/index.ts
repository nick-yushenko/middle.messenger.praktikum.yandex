import Component from "../../utils/component";

import h1 from "./h1.hbs";
import h2 from "./h3.hbs";
import h3 from "./h3.hbs";

import "./title.scss";

type TTitle = "h1" | "h2" | "h3";

interface TProps {
  className?: string;
  text?: string;
  tag: TTitle;
}

export class Title extends Component {
  constructor(props: TProps) {
    super({
      ...props,
    });
  }

  render() {
    switch (this.props.tag) {
      case "h1":
        return this.compile(h1, this.props);
      case "h2":
        return this.compile(h2, this.props);
      case "h3":
        return this.compile(h3, this.props);
      default:
        return this.compile(h1, this.props);
    }
  }
}
