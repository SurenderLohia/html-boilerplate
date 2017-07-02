var appData = {
  switchItems: {
    metas: [
      {
        id: "responsive-meta",
        name: "Responsive Meta",
        isChecked: true
      },
      {
        id: "meta-info",
        name: "Basic Meta Info",
        isChecked: false
      },
    ],
    cssLibraries: [
      {
        id: "normalize",
        name: "Normalize.css",
        isChecked: false
      },
      {
        id: "basscss",
        name: "Basscss",
        isChecked: false
      },
      {
        id: "purecss",
        name: "Pure.css",
        isChecked: false
      },
      {
        id: "bulma",
        name: "Bulma",
        isChecked: false
      }
    ],
    jsLibraries: [
      {
        id: "jquery",
        name: "jQuery",
        isChecked: false
      }
    ],
    uiFrameworks: [
      {
        id: "bootstrap",
        name: "bootstrap",
        isChecked: false
      },
      {
        id: "semantic-ui",
        name: "Semantic UI",
        isChecked: false
      },
    ],
    jsFrameworks: [
      {
        id: "vue-js",
        name: "Vue JS",
        isChecked: false
      },
      {
        id: "react",
        name: "React",
        isChecked: false
      }
    ],
  },

  meta: {
    viewport: {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }
  },

  libraries: {
    js: {
      jquery: {
        name: "jquery",
        cdnPath: "https://code.jquery.com/jquery-3.2.0.min.js"
      }
    },
    css: [
      {
        id:"normalize", 
        name: "Normalize.css",
        cdnPath: "https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"
      },
      {
        id: "basscss",
        name: "Basscss",
        cdnPath: "https://unpkg.com/basscss@8.0.2/css/basscss.min.css"
      },
      {
        id: "purecss",
        name: "Pure.css",
        cdnPath: "https://unpkg.com/purecss@0.6.2/build/pure-min.css"
      },
      {
        id: "bulma",
        name: "Bulma",
        cdnPath: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.0/css/bulma.min.css"
      }
    ]
  },

  uiFrameworks: {
    bootstrap: {
      css: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",
      jquery: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js",
      js: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
    },
    semanticUi: {
      css: "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.css",
      jquery: "https://code.jquery.com/jquery-3.1.1.min.js",
      js: "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.js"
    }
  },

  jsFrameworks: {
    vueJs: {
      core: "https://unpkg.com/vue"
    },
    react: {
      core: "https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react.js",
      dom: "https://cdnjs.cloudflare.com/ajax/libs/react/15.3.1/react-dom.js",
      babel: "https://unpkg.com/babel-standalone@6.25.0/babel.min.js"
    },
  }
}

module.exports = appData;