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
        name: "Normalizer",
        isChecked: false
      },
      {
        id: "basscss",
        name: "Basscss",
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
        id:"normalizer", 
        name: "normalizer",
        cdnPath: "cdn path"
      },
      {
        id: "basscss",
        name: "Basscss",
        cdnPath: "cdn path"
      }
    ]
  }
}

module.exports = appData;