import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import componentStyle from "./faily-text.style";
import globalStyle from "../../styles/global.style";
import themeStyle from "../../styles/theme.style";

class FailyText extends LitElement {
  static styles = [globalStyle, themeStyle, componentStyle];

  @property()
  variant?: string;

  render() {
    return html` <slot></slot> `;
  }
}

export default FailyText;
