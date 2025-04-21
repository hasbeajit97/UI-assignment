const settings = require('./config/settings.json');

const isParallel = settings.executionMode === 'parallel';
const isHeaded = settings.headMode === 'headed';

module.exports = {
  timeout: 30000,
  use: {
    headless: !isHeaded,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  workers: isParallel ? undefined : 1, // 1 = sequential
  reporter: 'html'
};
