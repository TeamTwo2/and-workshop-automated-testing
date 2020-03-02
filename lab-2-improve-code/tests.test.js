const greeting = require('./src/index');

describe('Greeting Test', () => {
  describe('Requirement 1', () => {
    it('is a func', () => {
      expect(typeof greeting).toEqual('function');
    });
  });

  describe('Requirement 2', () => {
    it("shows correct out put when in put is null", () => {
      expect(greeting()).toEqual('Hello, my friend.');
    });
  });

  describe('Requirement 3', () => {
    it("shows correct out put when in put is 'test'", () => {
      expect(greeting('test')).toEqual('Hello, test.');
    });
  });

  describe('Requirement 4', () => {
    it("shows correct out put when in put is 'TEST'", () => {
      expect(greeting('TEST')).toEqual('HELLO TEST!');
    });
  });

  describe('Requirement 5', () => {
    it("shows correct out put when in put is '['test', 'test2']'", () => {
      expect(greeting(['test', 'test2'])).toEqual('Hello, test, and test2.');
    });
  });
  describe('Requirement 6', () => {
    it("shows correct out put when in put is '['test', 'test2', 'test3']'", () => {
      expect(greeting(['test', 'test2', 'test3'])).toEqual('Hello, test, test2, and test3.');
    });
  });
});
