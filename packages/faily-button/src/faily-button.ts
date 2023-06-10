import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import componentStyle from "./faily-button.style";

@customElement("faily-button")
export class FailyButton extends LitElement {
  static styles = componentStyle;

  @property()
  variant?: string;

  render() {
    return html`
      <button>
        <faily-text>
          <slot></slot>
        </faily-text>
      </button>
    `;
  }
}
