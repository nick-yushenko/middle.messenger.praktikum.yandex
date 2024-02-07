import { HelperOptions } from 'handlebars';

export default function chat(this: object, { fn }: HelperOptions): string {
    return `
    <div class="chat">
        ${fn(this)}
    </div>
    `
}