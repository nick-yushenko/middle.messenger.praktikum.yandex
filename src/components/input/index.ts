import Component from "../../utils/component";

import template from "./template.hbs";

import "./style.scss";
import { classNames, removeClass } from "../../utils/classnames";

interface TProps {
  className?: string;
  hint: string;
  type: string;
  name: string;
  value: string | null;
  onBlur?: () => {};
  onFocus?: () => {};
  onChange?: () => {};
}

export class Input extends Component {
  // TODO доделать логику всплывающих подсказок
  static CLASSES = {
    focused: "focused",
    filled: "filled",
  };
  constructor(props: TProps) {
    if (props.value) classNames(props.className, Input.CLASSES.filled);

    super({
      ...props,
      events: {
        blur: () => {
          this.setProps({
            className: removeClass(this.props.className, Input.CLASSES.focused),
          });

          props.onBlur?.();
        },
        focus: () => {
          this.setProps({
            className: classNames(this.props.className, Input.CLASSES.focused),
          });

          props.onFocus?.();
        },
        change: (e: Event) => {
          const inputValue = (e.target as HTMLInputElement).value;
          console.log(inputValue);
          if (inputValue.length === 0)
            this.setProps({
              className: removeClass(
                this.props.className,
                Input.CLASSES.filled
              ),
            });
          else
            this.setProps({
              className: classNames(this.props.className, Input.CLASSES.filled),
            });
          props.onChange?.();
        },
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
