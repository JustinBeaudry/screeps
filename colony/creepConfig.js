let constants = require('./constants');

/**
 *
 * @param {Object} config
 * @constructor
 */
function CreepConfig(config) {
  this.creeps = typeof config === Object ? config : constants.DEFAULT_CREEP_CONFIG;
}

module.exports = CreepConfig;
