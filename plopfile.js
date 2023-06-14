module.exports = function (plop) {
  plop.setGenerator("application", {
    description: "Adds a new application",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the application ?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "apps/{{ name }}/vite.config.ts",
        templateFile: "templates/application/vite.config.ts.hbs",
      },
      {
        type: "add",
        path: "apps/{{ name }}/tsconfig.json",
        templateFile: "templates/application/tsconfig.json.hbs",
      },
      {
        type: "add",
        path: "apps/{{ name }}/tailwind.config.js",
        templateFile: "templates/application/tailwind.config.js.hbs",
      },
      {
        type: "add",
        path: "apps/{{ name }}/postcss.config.js",
        templateFile: "templates/application/postcss.config.js.hbs",
      },
      {
        type: "add",
        path: "apps/{{ name }}/package.json",
        templateFile: "templates/application/package.json.hbs",
      },
      {
        type: "add",
        path: "apps/{{ name }}/index.html",
        templateFile: "templates/application/index.html.hbs",
      },
      {
        type: "add",
        path: "apps/{{ name }}/.eslintrc.js",
        templateFile: "templates/application/.eslintrc.js.hbs",
      },
      {
        type: "add",
        path: "apps/{{ name }}/src/index.tsx",
        templateFile: "templates/application/src/index.tsx.hbs",
      },
      {
        type: "add",
        path: "apps/{{ name }}/src/index.css",
        templateFile: "templates/application/src/index.css.hbs",
      },
      {
        type: "add",
        path: "apps/{{ name }}/src/components/app/app.tsx",
        templateFile: "templates/application/src/components/app/app.tsx.hbs",
      },
      {
        type: "add",
        path: "apps/{{ name }}/src/components/app/index.tsx",
        templateFile: "templates/application/src/components/app/index.tsx.hbs",
      },
    ],
  });
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
        path: "packages/ui/src/components/{{ name }}/{{ name }}.ts",
        templateFile: "templates/component/component.tsx.hbs",
      },
      {
        type: "add",
        path: "packages/ui/src/components/{{ name }}/index.ts",
        templateFile: "templates/component/index.tsx.hbs",
      },
    ],
  });
};
