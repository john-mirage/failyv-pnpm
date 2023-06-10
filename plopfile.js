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
        path: "packages/ui/src/components/faily-{{ name }}/faily-{{ name }}.ts",
        templateFile: "templates/component/component.hbs",
      },
      {
        type: "add",
        path: "packages/ui/src/components/faily-{{ name }}/faily-{{ name }}.style.ts",
        templateFile: "templates/component/component.style.hbs",
      },
      {
        type: "add",
        path: "packages/ui/src/components/faily-{{ name }}/index.ts",
        templateFile: "templates/component/index.hbs",
      },
    ],
  });
};
