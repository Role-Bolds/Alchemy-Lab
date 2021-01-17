import "mocha";
import * as chai from "chai";
import { Config } from "../../src/lib/Config";

chai.should();

describe("-- Configuration settings", () => {
  describe("Token", () => {
    it("should be string", () => {
      const config = new Config();
      config.should.have.property("token").be.a("string");
    });
    it("should have proper length", () => {
      const config = new Config();
      config.should.have.property("token").have.lengthOf(59);
    });
  });
  describe("Prefix", () => {
    it("should have a list", () => {
      const config = new Config();
      config.should.have.property("prefix");
      chai.assert.isArray(config.prefix);
    });
  });
  describe("Debug", () => {
    it("should have boolean", () => {
      const config = new Config();
      config.should.have.property("debug").be.a("boolean");
    });
  });
});
