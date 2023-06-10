import { css } from "lit";

const componentStyle = css`
  .container {
    display: flex;
    flex-direction: column;
    gap: 8px;
    font-family: var(--text-font-stack);
  }

  .label {
    font-size: var(--text-label-md-font-size);
    font-weight: var(--text-label-md-font-weight);
    text-transform: var(--text-label-md-text-transform);
    letter-spacing: var(--text-label-md-letter-spacing);
    line-height: var(--text-label-md-line-height);
    color: var(--color-on-surface-variant);
  }

  .input {
    font-family: inherit;
    font-size: var(--text-body-md-font-size);
    font-weight: var(--text-body-md-font-weight);
    text-transform: var(--text-body-md-text-transform);
    letter-spacing: var(--text-body-md-letter-spacing);
    line-height: var(--text-body-md-line-height);
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 48px;
    margin: 0;
    padding: 0 16px;
    border: none;
    border-radius: 4px;
    box-shadow: 0 0 0 2px var(--color-outline);
    background-color: var(--color-background);
    color: var(--color-on-background);
    outline: none;
  }

  .input:focus-visible {
    box-shadow: 0 0 0 2px var(--color-primary);
  }

  @media screen and (prefers-reduced-motion: no-preference) {
    .input {
      transition-property: box-shadow;
      transition-duration: 150ms;
    }
  }
`;

export default componentStyle;
