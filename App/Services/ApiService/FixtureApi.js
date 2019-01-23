export default {
  // Functions return fixtures
  getRoot: () => {
    return {
      ok: true,
      data: require('../../../Resources/Fixtures/root.json')
    }
  },
  getRate: () => {
    return {
      ok: true,
      data: require('../../../Resources/Fixtures/rateLimit.json')
    }
  },
  getUser: (username) => {
    // This fixture only supports gantman or else returns skellock
    const gantmanData = require('../../../Resources/Fixtures/gantman.json')
    const skellockData = require('../../../Resources/Fixtures/skellock.json')
    return {
      ok: true,
      data: username.toLowerCase() === 'gantman' ? gantmanData : skellockData
    }
  }
}
