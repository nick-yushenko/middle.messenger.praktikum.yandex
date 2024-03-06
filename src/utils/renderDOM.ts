import Home from "../pages/Home";
import Component from "./component";
import { Login } from "../pages/Login";
import { SignUp } from "../pages/SignUp";
import Page404 from "../pages/Page404";
import Page500 from "../pages/Page500";
import Chat from "../pages/Chat";
import Profile from "../pages/Profile";
import PlaceholderPage from "../pages/PlaceholderPage";
import Settings from "../pages/Settings";
import Password from "../pages/Password";

type TRoutes = Record<string, new (...args: any[]) => Component<any>>;

export const ROUTES: TRoutes = {
  home: Home,
  login: Login,
  signup: SignUp,
  // signup: SignUp,
  profile: Profile,
  chat: Chat,
  placeholder: PlaceholderPage,
  settings: Settings,
  password: Password,
  page500: Page500,
  page404: Page404,
};

export const renderDOM = (
  name: keyof typeof ROUTES,
  query: string = "#root"
) => {
  const root = document.querySelector(query);

  if (!root) {
    console.error(new Error(`Не удалось найти корневой элемент - ${query}`));
    return;
  }

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
