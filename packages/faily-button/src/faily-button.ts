import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import componentStyle from "./faily-button.style";
import { globalStyle, themeStyle } from "common-styles";

@customElement("faily-button")
export class FailyButton extends LitElement {
  static styles = [globalStyle, themeStyle, componentStyle];

  @property()
  variant?: string;

  render() {
    return html`
      <button class="button">
        <faily-text variant="button">
          <slot></slot>
        </faily-text>
      </button>
    `;
  }
}
