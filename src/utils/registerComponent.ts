/* eslint-disable no-extra-semi */
import Handlebars from "handlebars";
import { HelperOptions } from "handlebars";
import Component from "./component";
export function registerComponent<Props extends Record<string, any>>(
  name: string,
  Element: new (props: Props) => Component<Props>
) {
  if (name in Handlebars.helpers) {
    throw `Компонент ${name} ранее был зарегистрирован`;
  }

  Handlebars.registerHelper(name, function (this: unknown, { hash, data, fn }: HelperOptions) {
    const component = new Element(hash);
    const dataAttribute = `data-id="${component.id}"`;

    if ("ref" in hash) {
      (data.root.__refs = data.root.__refs || {})[hash.ref] = component;
    }

    (data.root.__children = data.root.__children || []).push({
      component,
      embed(fragment: DocumentFragment) {
        const stub = fragment.querySelector(`[${dataAttribute}]`);

        if (!stub) {
          return;
        }

        component.getContent()?.append(...Array.from(stub.childNodes));

        stub.replaceWith(component.getContent()!);
      },
    });

    const contents = fn ? fn(this) : "";

    return `<div ${dataAttribute}>${contents}</div>`;
  });
}
