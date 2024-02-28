import { HelperOptions } from 'handlebars';

// TODO дублирует app - после добавления стейта и улучшения маршрутизации уйдет в компоненты
export default function profile(this: object, { fn }: HelperOptions): string {
    return `
    <div class="app">
        ${fn(this)}
    </div>
    `
}
