import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import componentStyle from "./faily-button.style";
import globalStyle from "../../styles/global.style";
import themeStyle from "../../styles/theme.style";

class FailyButton extends LitElement {
  static styles = [globalStyle, themeStyle, componentStyle];

  @property()
  variant?: string;

  render() {
    return html`
      <button class="button">
        <slot></slot>
      </button>
    `;
  }
}

export default FailyButton;
