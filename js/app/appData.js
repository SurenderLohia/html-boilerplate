var appData = {
  switchItems: [
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
    {
      id: "jquery",
      name: "jQuery",
      isChecked: false
    }
  ],

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

    css: {
      normalizer: {
        name: "normalizer",
        cdnPath: "cdn path"
      }
    }
  }
}

module.exports = appData;