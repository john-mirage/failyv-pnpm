import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import componentStyle from "./faily-text.style";
import { globalStyle, themeStyle } from "common-styles";

@customElement("faily-text")
export class FailyText extends LitElement {
  static styles = [globalStyle, themeStyle, componentStyle];

  @property()
  variant?: string;

  render() {
    return html` <slot></slot> `;
  }
}
