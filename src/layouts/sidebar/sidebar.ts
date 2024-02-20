import { HelperOptions } from 'handlebars';

// TODO пока что не используется - весь сайдбар в partials
export default function sidebar(this: object, { fn }: HelperOptions): string {

    return `
     ${fn(this)}
    `
}