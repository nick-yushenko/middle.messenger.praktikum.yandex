import { EventBus } from "./eventBus";
import { v4 as makeUUID } from "uuid";
// import Handlebars from "handlebars";
import isEmpty from "./mydash/isEmpty";

interface EventMap {
  [eventName: string]: (event: Event) => void;
}

class Component<Props extends Record<string, any> = any> {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  public id: string;
  private _element: HTMLElement | null = null;
  protected props: Props;
  protected refs: Record<string, Component> = {};
  public children: Record<string, Component>;
  private _eventBus: () => EventBus;
  // private _meta: Record<string, any>;

  /** JSDoc
   * @param {string} tag
   * @param {Object} propsAndChildren
   *
   * @returns {void}
   */
  // constructor(tag: string = "div", propsAndChildren: Props = {} as Props) {
  constructor(propsAndChildren: Props = {} as Props) {
    const { children, props } = this._getChildrenAndProps(propsAndChildren);

    const eventBus = new EventBus();

    this.children = children;

    // this._meta = {
    //   tag,
    //   props,
    // };

    this.id = makeUUID();

    this.props = this._makePropsProxy(props);

    this._eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Component.EVENTS.INIT);
  }

  private _getChildrenAndProps(propsAndChildren: Props) {
    const children: Record<string, Component> = {};
    const props: Record<string, unknown> = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Component) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }
  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  // private _createResources() {
  //   // const { tag } = this._meta;
  //
  //   this._element = this.createDocumentElement("div");
  // }
  public init() {
    // this._createResources();
    this._eventBus().emit(Component.EVENTS.FLOW_RENDER);
  }

  private _componentDidMount() {
    this.componentDidMount();
    Object.values(this.children).forEach(child => {
      child.dispatchComponentDidMount();
    });
  }

  // @ts-ignore
  public componentDidMount(oldProps?: Props) {}

  public dispatchComponentDidMount() {
    this._eventBus?.().emit(Component.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: Props, newProps: Props) {
    // Вызов рендера после обновления пропсов

    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._eventBus?.().emit(Component.EVENTS.FLOW_RENDER);
  }

  // @ts-ignore
  public componentDidUpdate(oldProps: Props, newProps: Props) {
    // Метод будет вызван непосредственно перед ререндером при изменении компонента
    // Здесь можно добавить пользовательскую логику обновления компонента
    // Например, проверка изменения конкретных свойств и выполнение дополнительных действий

    // Важно вернуть true, чтобы вызвался рендер после обновления пропсов
    return true;
  }

  public setProps(nextProps: Props): void {
    if (!isEmpty(nextProps)) {
      return;
    }
    const proxyProps = this._makePropsProxy(nextProps);
    Object.assign(this.props, proxyProps);
  }

  public get element() {
    return this._element;
  }

  private _render(): void {
    const block = this.render();
    this._removeEvents();

    const newElement = block.firstElementChild as HTMLElement;

    if (this._element) {
      this._element.replaceWith(newElement);
    } else {
      console.error("нет блока для _render");
      // TODO протестить
      // this._element = new HTMLElement();
      // this._element.replaceWith(newElement);
    }

    this._element = newElement;

    this._addEvents();
  }

  public render(): DocumentFragment {
    // Переопределяется пользователем. Необходимо вернуть разметку
    return new DocumentFragment();
  }

  protected compile(template: (context: unknown) => string, context: any) {
    const contextAndStubs = { ...context, __refs: this.refs };

    const html = template(contextAndStubs);

    const temp = document.createElement("template");

    temp.innerHTML = html;

    contextAndStubs.__children?.forEach(({ embed }: any) => {
      embed(temp.content);
    });

    return temp.content;
  }

  // реализцаия для текстовых шаблонов (.hbs?raw)
  // public compile(template: string | unknown, props: Props) {
  //   // TODO сейчас неверная типизация фрагмента
  //   const propsAndStubs: Props = { ...props };
  //
  //   Object.entries(this.children).forEach(([key, child]) => {
  //     // @ts-ignore
  //     propsAndStubs[key] = `<div data-id="${child.id}"></div>`;
  //   });
  //
  //   const fragment = this.createDocumentElement("template");
  //   const compiledTemplate = Handlebars.compile(template, propsAndStubs);
  //   fragment.innerHTML = compiledTemplate(propsAndStubs);
  //
  //   Object.values(this.children).forEach(child => {
  //     // @ts-ignore
  //     const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
  //     stub.replaceWith(child.getContent());
  //   });
  //
  //   // @ts-ignore
  //   return fragment.content;
  // }

  private _addEvents(): void {
    const { events = {} } = this.props;

    if (events && typeof events === "object")
      Object.keys(events).forEach(eventName => {
        const typedEvents = events as EventMap;
        this._element?.addEventListener(eventName, typedEvents[eventName]);
      });
  }
  _removeEvents() {
    const { events = {} } = this.props;

    if (events && typeof events === "object")
      Object.keys(events).forEach(eventName => {
        const typedEvents = events as EventMap;
        this._element?.removeEventListener(eventName, typedEvents[eventName]);
      });
  }

  public getContent() {
    return this.element;
  }

  private _makePropsProxy(props: any) {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldTarget = { ...target };
        target[prop] = value;
        self._eventBus?.().emit(Component.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
    });
  }

  // private createDocumentElement(tag: string): HTMLElement | HTMLTemplateElement {
  //   // TODO сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
  //   const element = document.createElement(tag);
  //   element.setAttribute("data-id", this.id);
  //   return element;
  // }
}

export default Component;
