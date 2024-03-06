import Component from "@/utils/component";
import { Login } from "@/pages/Login";
import { SignUp } from "@/pages/SignUp";
import Home from "@/pages/Home";
import Profile from "@/components/profile";
import Chat from "@/pages/Chat";
import PlaceholderPage from "@/pages/PlaceholderPage";
import Password from "@/pages/Password";
import Settings from "@/pages/Settings";
import Page500 from "@/pages/Page500";
import Page404 from "@/pages/Page404";

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
  return;
};
