import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { ifDefined } from "lit/directives/if-defined.js";
import componentStyle from "./faily-text-input.style";
import globalStyle from "../../styles/global.style";
import themeStyle from "../../styles/theme.style";

export class FailyTextInput extends LitElement {
  static styles = [globalStyle, themeStyle, componentStyle];

  @property()
  label?: string;

  @property()
  placeholder?: string;

  render() {
    return html`
      <label class="container">
        <span class="label">${this.label}</span>
        <input
          class="input"
          placeholder=${ifDefined(this.placeholder)}
          type="text"
        />
      </label>
    `;
  }
}

export default FailyTextInput;
