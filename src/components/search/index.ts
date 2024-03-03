import Component from "../../utils/component";

import template from "./template.hbs?raw";
import field from "./field.hbs?raw";

import "./style.scss";

type TEvents = Record<string, () => void>;

type TProps = {
  events: TEvents;
};

class SearchField extends Component {
  constructor(props: TEvents) {
    super({
      ...props,
    });
  }

  render() {
    return this.compile(field, this.props);
  }
}
export class Search extends Component {
  constructor(props: TProps) {
    const { events, ...restProps } = props;
    const field = new SearchField(events);

    super({ ...restProps, field });
  }

  render() {
    return this.compile(template, this.props);
  }
}
