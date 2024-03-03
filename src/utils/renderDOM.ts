import Home from "../_pages/Home";
import Component from "./component";
import { Login } from "../_pages/Login";
import {SignUp} from "../_pages/SignUp";

type TRoutes = Record<string, new (...args: any[]) => Component<any>>;

export const ROUTES: TRoutes = {
  home: Home,
  login: Login,
  signup: SignUp,
  // Другие маршруты
  // signup: SignUp,
  // profile: Profile,
  // chat: ChatPage,
  // settings: Settings,
  // password: PasswordChange,
  // page500: Page500,
  // page404: Page404,
};

export const renderDOM = (name: keyof typeof ROUTES, query: string = "#root") => {
  const root = document.querySelector(query);

  if (!root) {
    console.error(new Error(`Не удалось найти корневой элемент - ${query}`));
    return;
  }

  console.log(name);
  root.innerHTML = "";
  const Page = ROUTES[name];
  const page = new Page();

  root.append(page.getContent()!);

  page.dispatchComponentDidMount();
  // const btn = new Button({
  //   text: "test",
  //   child: new Button({ text: "work" }),
  // });
  //
  // console.log(btn.getContent());
  // root.append(btn.getContent() as Node);
  return;
};
