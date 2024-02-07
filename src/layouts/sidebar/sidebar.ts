import { HelperOptions } from 'handlebars';

export default function sidebar(this: object, { fn }: HelperOptions): string {
    console.log(this)
    return `
    <div class="sidebar">
        ${fn(this)}
    </div>
    `
}