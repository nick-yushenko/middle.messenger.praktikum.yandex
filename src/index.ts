import "./styles/global.scss";
import { renderDOM } from "./utils/renderDOM";
import { registerComponent } from "./utils/registerComponent";
import { Button } from "./components/button";
import { Title } from "./components/title";

registerComponent("Button", Button);
registerComponent("Title", Title);

window.addEventListener("DOMContentLoaded", () => {
  renderDOM("home");
});
