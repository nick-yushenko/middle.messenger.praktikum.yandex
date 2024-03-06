import Component from "../../utils/component";

import template from "./template.hbs";

import "./style.scss";

interface TProps {
  className?: string;
  hint?: string;
  type: string;
  name: string;
  value: string;
  autocomplete?: string;
  onBlur?: (e: Event) => {};
  onFocus?: (e: Event) => {};
  onChange?: (e: Event) => {};
}

export class Input extends Component {
  // TODO доделать логику всплывающих подсказок
  constructor(props: TProps) {
    // props.onFocus,  props.onChange,  props.onBlur - функции, которые пришли в Input извне

    super({
      ...props,
      events: {
        focus: props.onFocus,
        blur: props.onBlur,
        change: props.onChange,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
