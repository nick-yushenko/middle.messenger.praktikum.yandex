export class EventBus {
  // ключи объекта - имена событий, значения - массивы с обработчиками
  private readonly listeners: Record<string, Array<(args?: unknown) => void>>;

  constructor() {
    this.listeners = {};
  }

  on(event: string, callback: (...args: any[]) => void) {
    // Подписки на событие

    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  }

  off(event: string, callback: () => void) {
    // Отписка от события
    if (!this.listeners[event]) {
      throw new Error(`Событие ${event} не существует`);
    }
    this.listeners[event] = this.listeners[event].filter(listener => listener !== callback);
  }

  emit(event: string, ...args: unknown[]) {
    if (!this.listeners[event]) throw new Error(`Событие ${event} не существует`);

    this.listeners[event].forEach(listener => {
      if (typeof listener === "function") {
        listener(...args);
      } else throw new Error("Callback не является функцией");
    });
  }
}
