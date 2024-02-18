import { HelperOptions } from 'handlebars';

export default function scroll(this: object, { fn, hash }: HelperOptions): string {
    return `
    <div class="scrollable ${hash.className}">
        ${fn(this)}
    </div>
    `
}