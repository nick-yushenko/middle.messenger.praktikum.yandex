enum METHODS {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE",
}

type TMode = "same-origin" | "no-cors" | "cors";
type TCredentials = "omit" | "same-origin" | "include";
type TCache =
  | "default"
  | "no-store"
  | "reload"
  | "no-cache"
  | "force-cache"
  | "only-if-cached";
type THeaders = {
  [key: string]: string;
};

interface Options {
  data?: never;
  method: METHODS;
  headers: THeaders;
  mode: TMode;
  credentials: TCredentials;
  cache: TCache;
  signal: (...args: any) => void;
  timeout: number;
}

// Тип Omit принимает два аргумента: первый — тип, второй — строка
// и удаляет из первого типа ключ, переданный вторым аргументом
type OptionsWithoutMethod = Omit<Options, "method">;
// Этот тип эквивалентен следующему:
// type OptionsWithoutMethod = { data?: any };
type HTTPMethod = (
  url: string,
  options?: OptionsWithoutMethod
) => Promise<unknown>;

export class HTTPTransport {
  get: HTTPMethod = (
    url,
    options = {} as OptionsWithoutMethod
  ): Promise<XMLHttpRequest> => {
    if (options.data) {
      url += queryStringify(options.data);
    }
    return this.request(url, { ...options, method: METHODS.GET });
  };

  put: HTTPMethod = (
    url,
    options = {} as OptionsWithoutMethod
  ): Promise<XMLHttpRequest> => {
    return this.request(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout
    );
  };

  post: HTTPMethod = (
    url,
    options = {} as OptionsWithoutMethod
  ): Promise<XMLHttpRequest> => {
    return this.request(
      url,
      { ...options, method: METHODS.POST },
      options.timeout
    );
  };

  delete: HTTPMethod = (
    url,
    options = {} as OptionsWithoutMethod
  ): Promise<XMLHttpRequest> => {
    return this.request(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout
    );
  };

  request(
    url: string,
    options: Options,
    timeout: number = 5000
  ): Promise<XMLHttpRequest> {
    const { method, data, headers = {} } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      for (const key in headers) {
        xhr.setRequestHeader(key, headers[key]);
      }

      xhr.timeout = timeout;

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = () => reject(new Error("Запрос отменен"));
      xhr.onerror = () => reject(new Error("Ошибка при подключении"));
      xhr.ontimeout = () => reject(new Error("Время ожидания истекло"));

      if (options.method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  }
}

function queryStringify(data: any) {
  // Можно делать трансформацию GET-параметров в отдельной функции
  let dataString = "?";
  for (let key in data) {
    if (dataString.endsWith("?")) dataString += `${key}=${data[key]}`;
    else dataString += `&${key}=${data[key]}`;
  }
  return dataString;
}
