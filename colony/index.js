let constants = require('./constants');

/**
 *
 * @class Colony
 * @prop {StructureSpawn} spawn - single spawns instance
 * @prop [{Creep}] creeps - array of creeps in colony
 * @prop {Number} state - current colony state as enum
 * @prop {Number} behavior - current behavior state as enum
 * @prop {Object} config - object representing options to generate colony with
 * @description Colony is a config based creep generator and management library that focuses on lifecycle and maintaining state
 */
class Colony {

  constructor() {
    this.spawn    = null;
    this.creeps   = [];
    this.state    = constants.COLONY_STATES.STOP;
    this.behavior = constants.COLONY_BEHAVIOR_STATES.DEFAULT;
  }

  /**
   *
   * @param config
   * @memberof Colony
   * @void
   */
  public init(config) {
    if (this.state > constants.COLONY_STATES.STOP) {
      throw new Error('Invalid state transition. Colony is already init\'ed. Stop and re-init.');
    }
    this.config = config || constants.DEFAULT_CONFIG;
    this.spawn  = Game.spawns[this.config.spawn];
    this.state  = constants.COLONY_STATES.INIT;
  }

  /**
   * @memberof Colony
   * @void
   */
  public start() {
    if (this.state < constants.COLONY_STATES.INIT) {
      throw new Error('Invalid state transition. Colony must be init\'ed before being started.');
    }
    this.createCreeps();
    this.state = constants.COLONY_STATES.START;
  }

  /**
   * @memberof Colony
   * @void
   */
  public run() {
    if (this.state < constants.COLONY_STATES.START) {
      throw new Error('Invalid state transition. Colony must be started before being run.');
    }
    // contains run loops for all creeps
    this.state = constants.COLONY_STATES.RUN;
  }

  /**
   * @memberof Colony
   * @private
   * @param {StructureSpawn} spawn
   * @param {CreepConfig} creepConfig
   * @return {Number}
   */
  private calculateCost(spawn, creepConfig) {

  }

  private calculateCreepFromCost(cost, creepConfig) {

  }

  /**
   * @memberof Colony
   * @private
   * @void
   */
  private createCreeps() {
    if (this.state < constants.COLONY_STATES.INIT) {
      throw new Error('Invalid state for method call.');
    }
    // Calculate amount and role of new creeps based on energy level
    let cost = this.calculateCost(this.spawn, new CreepConfig(this.config.creeps));
  }
}

module.exports = Colony;
