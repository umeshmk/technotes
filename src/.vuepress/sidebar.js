module.exports = {
  sidebar: {
    '/visual-studio-code/': [
      'vscode.md',
      'get-started.md',
      'user-guide.md',
      'language-javascript.md',
      'extensions.md',
      'settings.md',
    ],

    // '/windows10/': ['Windows10.md', 'Wsl.md'],

    // "/php/": [
    //   // "1 - Basic syntax & Data Types.md",
    //   "",
    //   "2 - Variables.md",
    //   "3 - Constants.md",
    //   "4 - Operators.md",
    //   "5 - Control Structures.md",
    //   "6 - Functions.md",
    //   "7 - Classes & Objects.md",
    //   "8 - Features - Cookies & Sessions.md",
    //   "Cryptography.md",
    //   "Deployment.md",
    //   "Php - The right way.md",
    //   "PSR Standards.md",
    //   "Testing.md",
    // ],
    '/terminal/': ['Zsh.md', 'Bash.md', 'Bash-script.md', 'WindowsTerminal.md'],

    '/laravel/v6/': [
      {
        title: 'Laravel (Deprecated)',
        collapsable: false,
        children: [
          '1-GettingStarted.md',
          '2-ArchitecturalConcepts.md',
          '3-Basics.md',
          '4-Frontend.md',
        ],
      },
      {
        title: 'Security',
        collapsable: false,
        children: [
          '5-Security/1-Authentication.md',
          '5-Security/2-Api_authentication_incomplete.md',
          '5-Security/3-Authorization.md',
          '5-Security/Others.md',
        ],
      },
      {
        title: 'Digging deeper',
        collapsable: false,
        children: [
          '6-Digging-deeper/1-Artisan-console.md',
          // "6-Digging-deeper/2-Broadcast_incomplete.md",
          '6-Digging-deeper/3-Cache+Collections.md',
          '6-Digging-deeper/4-Events.md',
          // "6-Digging-deeper/5-Notifications-incomplete.md",
          // "6-Digging-deeper/6-Packagedev+Queues+Taskschedule-incomplete .md",
          '6-Digging-deeper/7-Filestorage+Mail.md',
        ],
      },
      {
        title: 'Database',
        collapsable: false,
        children: ['7-Database.md', '8-EloquentORM.md'],
      },
    ],
    '/others/': [
      'design-patterns/',
      'design-patterns/solid.md',
      'windows10/Windows10.md',
      'windows10/Wsl.md',
      'documentation/vuepress.md',
      'documentation/markdown.md',
      'documentation/it-basics.md',
      // 'graphql/',
    ],
    '/html/': [
      // '',
      // 'Html 5.md',
      'css/styled-components.md',
      'css/css-modules.md',
      'css/methodology.md',
      'css/postcss.md',
      'css/sass.md',
      'Forms.md',
      'seo.md',
    ],
    '/css/': [
      // '',
      // 'Layout.md',
      // 'css3.md',
      'styled-components.md',
      'css-modules.md',
      'postcss.md',
      'sass.md',
      'methodology.md',
      // "Tailwind-cheetsheet.md",
      // 'Tailwind-core.md',
    ],
    '/javascript/': [
      '',
      'asynchronous.md',
      'dom.md',
      'animations.md',
      'style-guide.md',
      'Json.md',
    ],
    '/tools/': [
      'webpack.md',
      'webpack-guide.md',
      // 'vite.md',
      // 'snowpack.md'
    ],
    '/surveys/': ['', 'github.md'],
    '/resources/': [''],
    '/oop/': [''],
    '/typescript/': [
      '',
      'narrowing.md',
      'function.md',
      'object.md',
      'type-manipulation.md',
      'class.md',
      // "react.md",
    ],
    '/react/': [
      '',
      'react-hooks.md',
      'redux.md',
      // 'react-query.md',
      'awesome-react-components.md',
      'awesome-react.md',
    ],
    // '/design-patterns/': ['', 'solid.md'],
    '/datastructures-&-algorithms/': [
      '',
      'resources.md',
      'dsa/Data structures.md',
      'dsa/Algorithms.md',
      'dsa/examples.md',
      'dsa/Big O.md',
      'dsa/Cracking the coding interview.md',
    ],
    '/graphql/': [''],
    '/testing/': [
      '',
      // 'jest.md',
      'cypress.md',
    ],
  },
};
