// неактуально для версии с использованием Component
// TODO переделать на Component
// export class Tooltip {
//   name = "tooltip";
//   indent = 5;
//
//   constructor() {
//     this.el = document.createElement("div");
//     this.el.style.position = "absolute";
//     this.el.classList.add(this.name);
//     this.container = undefined;
//     document.body.appendChild(this.el);
//
//     this.listeners = [];
//   }
//
//   delegate(eventName, element, cssSelector, callback) {
//     const fn = event => {
//       const closestTooltipBlock = event.target.closest(cssSelector);
//
//       if (!closestTooltipBlock) {
//         return;
//       }
//       this.container = closestTooltipBlock;
//       callback();
//     };
//
//     element.addEventListener(eventName, fn);
//     this.listeners.push({ fn, element, eventName });
//     return this;
//   }
//
//   onShow = () => {
//     // Элемент, на который пользователь навёл мышкой
//     const sourceEl = this.container;
//     // HTML тултипа задаём из data-аттрибута
//     this.el.innerHTML = sourceEl.getAttribute("data-tooltip");
//
//     // Добавляем класс _active, чтобы отобразить тултип
//     this.el.classList.add(`${this.name}_active`);
//
//     const sourceElRect = sourceEl.getBoundingClientRect();
//     const elRect = this.el.getBoundingClientRect();
//
//     let top = sourceElRect.bottom + this.indent;
//     const left = sourceElRect.left;
//
//     // Если тултип не влезает по высоте, то поднимаем его над элементом
//     if (top + elRect.height > document.documentElement.clientHeight) {
//       top = sourceElRect.top - elRect.height - this.indent;
//     }
//
//     this.el.style.top = `${top + window.scrollY}px`;
//     this.el.style.left = `${left + window.scrollX}px`;
//   };
//   onHide = () => {
//     console.log(1234);
//     this.el.classList.remove(`${this.name}_active`);
//   };
//
//   attach(root) {
//     this.delegate("mouseover", root, ".tooltip-block", this.onShow);
//     this.delegate("mouseout", root, "[data-tooltip]", this.onHide);
//   }
//
//   detach() {
//     for (const { fn, element, eventName } of this.listeners) {
//       element.removeEventListener(eventName, fn);
//     }
//
//     this.listeners = [];
//   }
// }
// const initTooltips = () => {
//   const tooltip = new Tooltip();
//   tooltip.attach(document.body);
// };
//
// export default initTooltips;
