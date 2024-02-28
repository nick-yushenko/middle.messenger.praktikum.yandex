import { HelperOptions } from "handlebars";

export default function app(this: object, { fn }: HelperOptions): string {
  return `
    <main class="app">
        ${fn(this)}
    </main>
    `;
}
