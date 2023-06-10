import type { Meta, StoryObj } from "@storybook/web-components";

import { html } from "lit";
import { FailyButton, FailyIcon, FailyText } from "ui";

customElements.define("faily-button", FailyButton);
customElements.define("faily-icon", FailyIcon);
customElements.define("faily-text", FailyText);

const meta: Meta = {
  component: "faily-button",
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () => html`<faily-button>button</faily-button>`,
};
