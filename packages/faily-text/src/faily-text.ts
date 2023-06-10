import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import componentStyle from "./faily-text.style";

@customElement("faily-text")
export class FailyText extends LitElement {
  static styles = componentStyle;

  @property()
  name?: string = "World";

  render() {
    return html`<p>Hello, ${this.name}!</p>`;
  }
}
