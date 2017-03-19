var appData = {
  switchItems: [
    {
      id: "responsive-meta",
      name: "Responsive Meta",
      isChecked: true
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

  libaries: {
    js: {
      jquery: {
        name: "jquery",
        cdnPath: "cdn path"
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