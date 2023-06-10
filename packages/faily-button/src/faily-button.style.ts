import { css } from "lit";

const componentStyle = css`
  :host {
    display: inline-block;
  }

  .button {
    box-sizing: border-box;
    display: block;
    padding: 8px 24px;
    cursor: pointer;
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    border: none;
  }
`;

export default componentStyle;
