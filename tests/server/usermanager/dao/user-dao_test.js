"use strict";

const expect = require('chai').expect;

  const userDAO = require(process.cwd() + '/server/api/user-manager/dao/user-dao');

describe('userDAO', () => {
  before((done) => {
    setupMongoose(mongoose, done);
  });

  afterEach(() => {
    userDAO.remove();
  })

  describe('getAll', () => {

  })

  describe('createNew', () => {

  })

  describe('removeById', () => {

  })
})
