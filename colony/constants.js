/**
 *
 */
let CreepConfig = require('./creepConfig');

/**
 *
 * @type {{parts: *[]}}
 * @const
 */
const DEFAULT_CREEP_CONFIG = {
  parts: [WORK, MOVE, CARRY]
};

/**
 *
 * @type {{debug: boolean, spawn: string, creeps: {parts: *[]}}}
 * @const
 */
const DEFAULT_CONFIG = {
  debug: true,
  spawn: 'Spawn1', // @TODO:  Enable multiple Spawns
  creeps: new CreepConfig(DEFAULT_CREEP_CONFIG)
};

/**
 *
 * @type {{STOP: number, INIT: number, START: number, RUN: number}}
 * @const
 * @enum
 */
const COLONY_STATES = {
  STOP  : 0,
  INIT  : 1,
  START : 2,
  RUN   : 3
};

/**
 *
 * @type {{DEFAULT: number, ATTACK: number}}
 * @const
 * @enum
 */
const COLONY_BEHAVIOR_STATES = {
  DEFAULT : 0,  // This is the default state and maintains and expands the colony
  ATTACK  : 1   // This is an experimental state to focus primarily on attacking whilst still maintaining the colony
};

module.exports = {
  DEFAULT_CONFIG          : DEFAULT_CONFIG,
  DEFAULT_CREEP_CONFIG    : DEFAULT_CREEP_CONFIG,
  COLONY_STATES           : COLONY_STATES,
  COLONY_BEHAVIOR_STATES  : COLONY_BEHAVIOR_STATES
};