import { css } from "lit";

const themeStyle = css`
  :host {
    --color-primary: #4ade80;
    --color-on-primary: #052e16;
    --color-primary-variant: #86efac;

    --color-background: hsl(210, 11%, 11%);
    --color-on-background: hsl(210, 14%, 80%);
    --color-outline: hsl(210, 11%, 15%);

    --color-on-surface-variant: hsl(210, 7%, 52%);

    --text-font-stack: "Red Hat Display", system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
      "Segoe UI Symbol", "Noto Color Emoji";

    --text-label-lg-font-size: 12px;
    --text-label-lg-font-weight: 700;
    --text-label-lg-text-transform: uppercase;
    --text-label-lg-letter-spacing: 1px;
    --text-label-lg-line-height: 24px;

    --text-label-md-font-size: 12px;
    --text-label-md-font-weight: 600;
    --text-label-md-text-transform: uppercase;
    --text-label-md-letter-spacing: 0.6px;
    --text-label-md-line-height: 24px;

    --text-body-md-font-size: 14px;
    --text-body-md-font-weight: 500;
    --text-body-md-text-transform: normal;
    --text-body-md-letter-spacing: 0;
    --text-body-md-line-height: 24px;
  }
`;

export default themeStyle;
