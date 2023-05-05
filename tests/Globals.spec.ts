import { Globals } from "../src/Globals"
import {OutputType} from "../lib/enums/OutputType";

describe('Globals', () => {

  describe('init', () => {
    it('should take default values if config property not exist', () => {
      Globals.init({});
      expect(Globals.DEFAULT_COV_PATH).toEqual('./coverage/coverage-summary.json');
      expect(Globals.BASE_README_PATH).toEqual('./README.md');
      expect(Globals.BADGES).toEqual({});
      expect(Globals.OUTPUT_TYPE).toEqual(OutputType.MARKDOWN);
      expect(Globals.BASE_URL).toEqual(Globals.MARKDOWN_BASE_URL);
      expect(Globals.BASE_URL_PATTERN).toEqual(Globals.MARKDOWN_BASE_URL_PATTERN);
    })
    
    it('should take config property if exist', () => {
      const config = {
        coverage_file_path: 'foo',
        readmeFilePath: 'bar',
        badges: {
          foo: {},
          bar: {}
        },
        outputType: 'url' as OutputType
      }
      Globals.init(config)
      expect(Globals.DEFAULT_COV_PATH).toEqual(config.coverage_file_path);
      expect(Globals.BASE_README_PATH).toEqual(config.readmeFilePath);
      expect(Globals.BADGES).toEqual(config.badges);
      expect(Globals.OUTPUT_TYPE).toEqual(OutputType.URL);
      expect(Globals.BASE_URL).toEqual(Globals.BADGE_BASE_URL);
      expect(Globals.BASE_URL_PATTERN).toEqual(Globals.BADGE_BASE_URL_PATTERN);

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