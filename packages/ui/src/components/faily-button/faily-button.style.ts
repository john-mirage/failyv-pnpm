import { css } from "lit";

const componentStyle = css`
  :host {
    display: inline-block;
  }

  .button {
    box-sizing: border-box;
    margin: 0;
    display: block;
    padding: 8px 24px;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    font-family: var(--text-font-stack);
    font-size: var(--text-label-lg-font-size);
    font-weight: var(--text-label-lg-font-weight);
    text-transform: var(--text-label-lg-text-transform);
    letter-spacing: var(--text-label-lg-letter-spacing);
    line-height: var(--text-label-lg-line-height);
  }

  :host([variant="primary"]) .button {
    background-color: var(--color-primary);
    color: var(--color-on-primary);
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }

  :host([variant="secondary"]) .button {
    background-color: transparent;
    color: var(--color-primary);
  }

  @media screen and (hover: hover) {
    :host([variant="primary"]) .button:hover {
      background-color: var(--color-primary-variant);
    }

    :host([variant="secondary"]) .button:hover {
      box-shadow: 0 0 0 2px var(--color-primary);
    }
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    :host([variant="primary"]) .button {
      transition-property: background-color;
      transition-duration: 150ms;
    }

    :host([variant="secondary"]) .button {
      transition-property: box-shadow;
      transition-duration: 150ms;
    }
  }
`;

export default componentStyle;
