import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import componentStyle from "./faily-icon.style";
import globalStyle from "../../styles/global.style";
import themeStyle from "../../styles/theme.style";

class FailyIcon extends LitElement {
  static styles = [globalStyle, themeStyle, componentStyle];

  @property()
  name?: string = "World";

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}

export default FailyIcon;
