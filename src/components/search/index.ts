import template from "./template.hbs";

import "./style.scss";
import Component from "@/utils/component";

type TProps = {
  onChange?: (val: Event) => void;
};

export class Search extends Component {
  constructor(props: TProps) {
    super({ ...props });
  }

  render() {
    return this.compile(template, this.props);
  }
}
