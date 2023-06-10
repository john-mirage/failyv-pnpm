import type { Preview } from "@storybook/web-components";

import { FailyButton, FailyIcon, FailyTextInput } from "ui";

customElements.define("faily-button", FailyButton);
customElements.define("faily-icon", FailyIcon);
customElements.define("faily-text-input", FailyTextInput);

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
