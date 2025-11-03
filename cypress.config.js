const { defineConfig } = require('cypress')
module.exports = defineConfig({
  projectId: '1v1r9t',
  e2e: {
    baseUrl: 'http://localhost:5173',
    supportFile: false,
    video: false
  }
})
