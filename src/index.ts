import "./styles/global.scss";
import "./assets/icons/index";
import { renderDOM } from "./utils/renderDOM";
import { registerComponent } from "./utils/registerComponent";
import { Button } from "./components/button";
import { Title } from "./components/title";
import { Link } from "./components/link";
import { Scroll } from "./components/scroll";
import { Input } from "./components/input";
import { Icon } from "./components/icon";
import { Footer } from "./components/footer";
import { Sidebar } from "./components/sidebar";
import { Search } from "./components/search";
import { Messenger } from "./components/messenger";

registerComponent("Button", Button);
registerComponent("Input", Input);
registerComponent("Scroll", Scroll);
registerComponent("Link", Link);
registerComponent("Title", Title);
registerComponent("Icon", Icon);
registerComponent("Footer", Footer);
registerComponent("Sidebar", Sidebar);
registerComponent("Search", Search);
registerComponent("Messenger", Messenger);

window.addEventListener("DOMContentLoaded", () => {
  renderDOM("home");
});
