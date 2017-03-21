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
        id: "normalizer",
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
        name: "react",
        isChecked: false
      },
      {
        id: "angular",
        name: "Angular",
        isChecked: false
      },
      {
        id: "ember",
        name: "Ember",
        isChecked: false
      },
      {
        id: "backbone",
        name: "Backbone.js",
        isChecked: false
      },
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
  }
}

module.exports = appData;