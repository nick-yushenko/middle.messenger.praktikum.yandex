import { EventBus } from "./eventBus";
import { v4 as makeUUID } from "uuid";
import Handlebars from "handlebars";

class Block {
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render",
  };

  _id = null;
  _element = null;
  _meta = null;
  _eventBus = null;
  props = null;
  children = null;

  /** JSDoc
   * @param {string} tag
   * @param {Object} propsAndChildren
   *
   * @returns {void}
   */
  constructor(tag = "div", propsAndChildren = {}) {
    const { children, props } = this._getChildren(propsAndChildren);

    const eventBus = new EventBus();

    this.children = children;
    this._meta = {
      tag,
      props,
    };

    this._id = makeUUID();

    this.props = this._makePropsProxy(props);

    this._eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  _getChildren(propsAndChildren) {
    const children = {};
    const props = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props };
  }
  _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }
  _createResources() {
    const { tag } = this._meta;
    this._element = this._createDocumentElement(tag);
  }

  init() {
    this._createResources();
    this._eventBus?.().emit(Block.EVENTS.FLOW_RENDER);
  }

  _componentDidMount() {
    this.componentDidMount();
    Object.values(this.children).forEach(child => {
      child.dispatchComponentDidMount();
    });
  }

  componentDidMount(oldProps) {}

  dispatchComponentDidMount() {
    this._eventBus?.().emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidUpdate(oldProps, newProps) {
    // Вызов рендера после обновления пропсов

    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) {
      return;
    }
    this._eventBus?.().emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidUpdate(oldProps, newProps) {
    // Метод будет вызван непосредственно перед ререндером при изменении компонента
    // Здесь можно добавить пользовательскую логику обновления компонента
    // Например, проверка изменения конкретных свойств и выполнение дополнительных действий

    // Важно вернуть true, чтобы вызвался рендер после обновления пропсов
    return true;
  }

  setProps = nextProps => {
    if (!nextProps) {
      return;
    }
    const proxyProps = this._makePropsProxy(nextProps);
    Object.assign(this.props, proxyProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    const block = this.render();
    this._removeEvents();
    this._element.innerHTML = "";
    this._element.appendChild(block);
    this._addEvents();
  }

  render() {
    // Переопределяется пользователем. Необходимо вернуть разметку
    return this._createDocumentElement("template");
  }

  compile(template, props) {
    const propsAndStubs = { ...props };

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    const fragment = this._createDocumentElement("template");
    const compiledTemplate = Handlebars.compile(template, propsAndStubs);
    fragment.innerHTML = compiledTemplate(propsAndStubs);

    Object.values(this.children).forEach(child => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      stub.replaceWith(child.getContent());
    });

    return fragment.content;
  }

  _addEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach(eventName => {
      this._element?.addEventListener(eventName, events[eventName]);
    });
  }
  _removeEvents() {
    const { events = {} } = this.props;

    Object.keys(events).forEach(eventName => {
      this._element?.removeEventListener(eventName, events[eventName]);
    });
  }

  getContent() {
    return this.element;
  }

  _makePropsProxy(props) {
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop, value) {
        const oldTarget = { ...target };
        target[prop] = value;
        self._eventBus?.().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
        return true;
      },
    });
  }

  _createDocumentElement(tag) {
    // TODO сделать метод, который через фрагменты в цикле создаёт сразу несколько блоков
    const element = document.createElement(tag);
    element.setAttribute("data-id", this._id);
    return element;
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }
}

export default Block;
