import { Globals } from "../src/Globals"

describe('Globals', () => {

  describe('init', () => {
    it('should take default values if config property not exist', () => {
      Globals.init({});
      expect(Globals.DEFAULT_COV_PATH).toEqual('./coverage/coverage-summary.json');
      expect(Globals.BASE_README_PATH).toEqual('./README.md');
      expect(Globals.BADGES).toEqual({});
      expect(Globals.RETURN_ONLY_URL).toEqual(false);
      expect(Globals.BASE_URL).toEqual('![](https://img.shields.io/badge/');
      expect(Globals.BASE_URL_PATTERN).toEqual('\\!\\[]\\(https:\\/\\/img\\.shields\\.io\\/badge\\/.*prefix=&PATTERN&\\)');
    })
    
    it('should take config property if exist', () => {
      const config = {
        coverage_file_path: 'foo',
        readmeFilePath: 'bar',
        badges: {
          foo: {},
          bar: {}
        },
        returnOnlyURL: true
      }
      Globals.init(config)
      expect(Globals.DEFAULT_COV_PATH).toEqual(config.coverage_file_path);
      expect(Globals.BASE_README_PATH).toEqual(config.readmeFilePath);
      expect(Globals.BADGES).toEqual(config.badges);
      expect(Globals.RETURN_ONLY_URL).toEqual(config.returnOnlyURL);
      expect(Globals.BASE_URL).toEqual('https://img.shields.io/badge/');
      expect(Globals.BASE_URL_PATTERN).toEqual('https:\\/\\/img\\.shields\\.io\\/badge\\/.*prefix=&PATTERN&');
    })
  })

  describe('loadArgv', () => {
    it('should change config path when passing the --config option', () => {
      Globals.CONFIG_IDENTIFIER = 'bar/foo';
      process.argv = ['--config', 'foo/bar'];

      Globals.loadArgv();
      expect(Globals.CONFIG_IDENTIFIER).toEqual('foo/bar');
    })
  })
})