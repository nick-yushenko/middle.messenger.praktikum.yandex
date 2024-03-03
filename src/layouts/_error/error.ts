import { HelperOptions } from "handlebars";

export default function error(
  this: object,
  { fn, hash }: HelperOptions
): string {
  // TODO придумать, как сделать через хелпер уникальную страницу ошибки
  return `${fn(this, hash)}`;
}
