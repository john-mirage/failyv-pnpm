module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "Adds a new component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the component ?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "packages/faily-{{ name }}/tsconfig.json",
        templateFile: "templates/component/tsconfig.hbs",
      },
      {
        type: "add",
        path: "packages/faily-{{ name }}/package.json",
        templateFile: "templates/component/package.hbs",
      },
      {
        type: "add",
        path: "packages/faily-{{ name }}/.eslintrc.js",
        templateFile: "templates/component/eslintrc.hbs",
      },
      {
        type: "add",
        path: "packages/faily-{{ name }}/src/faily-{{ name }}.ts",
        templateFile: "templates/component/src/component.hbs",
      },
      {
        type: "add",
        path: "packages/faily-{{ name }}/src/faily-{{ name }}.style.ts",
        templateFile: "templates/component/src/component.style.hbs",
      },
    ],
  });
};
