import { HelperOptions } from 'handlebars';

export default function messenger(this: object, { fn }: HelperOptions): string {
    return `
    <div class="messenger">
        ${fn(this)}
    </div>
    `
}
