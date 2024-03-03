import "./styles/global.scss";
import { renderDOM } from "./utils/renderDOM";
import { registerComponent } from "./utils/registerComponent";
import { Button } from "./components/button";
import { Title } from "./components/title";
import { Link } from "./components/link";
import { Scroll } from "./components/scroll";
import { Input } from "./components/input";

registerComponent("Button", Button);
registerComponent("Input", Input);
registerComponent("Scroll", Scroll);
registerComponent("Link", Link);
registerComponent("Title", Title);

window.addEventListener("DOMContentLoaded", () => {
  renderDOM("home");
});
