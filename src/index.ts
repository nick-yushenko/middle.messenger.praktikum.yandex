import "./styles/global.scss";
import "./assets/icons/index";

import { renderDOM } from "./utils/renderDOM";
import { registerComponent } from "@/utils/registerComponent";

import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Scroll } from "@/components/scroll";
import { Link } from "@/components/link";
import { Title } from "@/components/title";
import { Icon } from "@/components/icon";
import { Footer } from "@/components/footer";
import { Sidebar } from "@/components/sidebar";
import { Search } from "@/components/search";
import { Messenger } from "@/components/messenger";
import Profile from "@/components/profile";
import { ProfileEdit } from "@/components/profileEdit";
import { PasswordEdit } from "@/components/passwordEdit";
import { Placeholder } from "@/components/placeholder";

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
registerComponent("Profile", Profile);
registerComponent("ProfileEdit", ProfileEdit);
registerComponent("PasswordEdit", PasswordEdit);
registerComponent("Placeholder", Placeholder);

window.addEventListener("DOMContentLoaded", () => {
  renderDOM("home");
});
