import { css } from "lit";

const componentStyle = css`
  :host {
    font-family: "Red Hat Display", system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif,
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Noto Color Emoji";
  }

  :host([variant="button"]) {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    line-height: 24px;
  }
`;

export default componentStyle;
