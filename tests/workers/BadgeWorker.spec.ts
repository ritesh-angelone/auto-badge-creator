import { createMock } from "ts-auto-mock";
import { Badge } from "../../src/workers/BadgeWorker"
import { BadgeStatsInterface } from "../../src/interfaces/BadgeStatsInterface";
import {Globals} from "../../src/Globals";

describe('Badge', () => {

  describe('#create', () => {
    it('should return a string', () => {
      const statsMock: BadgeStatsInterface = createMock<BadgeStatsInterface>();
      const result = Badge.create({}, statsMock)
      expect(typeof result).toEqual('string');
      expect(result.length).toBeGreaterThan(0);
    })

    it('should append options to string', () => {
      const statsMock: BadgeStatsInterface = createMock<BadgeStatsInterface>();
      const optionsObj = {
        style: "flat-square",
        logo: "Kotlin",
        logoColor: "blue",
      }
      const testString = `?style=${optionsObj.style}&logo=${optionsObj.logo}&logoColor=${optionsObj.logoColor}`;
      const result = Badge.create(optionsObj, statsMock, "statements")
      expect(result).toMatch(testString);
    })

    it('should append stats to string', () => {
      const statsObj = {
        coverage: 70,
        color: 'green'
      }
      const testString = `Statements-${statsObj.coverage}${encodeURI('%')}-${statsObj.color}.svg`;
      const result = Badge.create({}, statsObj, "statements")
      expect(result).toMatch(testString);
    })

    it('should append prefix to string', () => {
      const statsMock: BadgeStatsInterface = createMock<BadgeStatsInterface>();
      const testString = `prefix=$statements$`;
      const result = Badge.create({}, statsMock, "statements")
      expect(result).toMatch(testString);
    })

    it('should return only url if returnOnlyURL is true', () => {
      Globals.init({returnOnlyURL: true});
      const statsMock: BadgeStatsInterface = createMock<BadgeStatsInterface>();
      const testString: RegExp = /!\[\]\(.*\)/;
      const result = Badge.create({}, statsMock)
      expect(result).not.toMatch(testString);
    })

    it('should return full markdown if returnOnlyURL is false', () => {
      Globals.init({returnOnlyURL: false});
      const statsMock: BadgeStatsInterface = createMock<BadgeStatsInterface>();
      const testString: RegExp = /!\[\]\(.*\)/;
      const result = Badge.create({}, statsMock)
      expect(result).toMatch(testString);
    })
  })
})