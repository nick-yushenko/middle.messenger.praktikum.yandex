import { HelperOptions } from 'handlebars';

export default function app(this: object, { fn }: HelperOptions): string {
    return `
    <div class="app">
        ${fn(this)}
    </div>
    `
}
