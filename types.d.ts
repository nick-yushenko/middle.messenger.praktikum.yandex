// declare module "*hbs" {}
// declare module "*hbs?raw" {}

declare module "*.hbs" {
  import { TemplateDelegate } from "handlebars";
  const template: TemplateDelegate;
  export default template;
}
