'use strict';

module.exports = class Role {
  constructor() {
    this.name = new String();
  }

  run(creep) {
    throw new Error('Not Implemented');
  }
};
