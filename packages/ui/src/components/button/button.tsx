import type { Component } from "solid-js";

const Button: Component = () => {
  return (
    <button class="py-6 px-24 bg-primary rounded-4 hover-device:hover:shadow-button transition-shadow">
      <span class="text-label-lg text-on-primary capitalize">valider</span>
    </button>
  );
};

export default Button;
