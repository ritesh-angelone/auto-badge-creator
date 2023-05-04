import { DependencyOptionsInterface } from '../interfaces/DependencyOptionsInterface';
import { FileUtils } from '../utils/FileUtils';
import { Globals } from '../Globals';
import { cosmiconfig } from 'cosmiconfig';
import type {CosmiconfigResult} from "cosmiconfig/dist/types";

export class SetupValidation {
  static scan() {
    console.info('\nStep 2 -> Setup check process started');

    return Promise.all([
      this.checkFileExists(Globals.DEFAULT_COV_PATH, '❌ No Coverage file found', '✅ Coverage file exist'),
      this.checkFileExists(Globals.BASE_README_PATH, '❌ No README file found', '✅ README file exist'),
    ])
      .then((messages) => {
        console.info(messages.join('\n'));
      })
      .catch((errors) => {
        console.error(errors);
      });
  }

  static async loadConfig(): Promise<void> {
    console.info('\nStep 1 -> Loading Configurations process started');
    await Globals.loadArgv();
    const configExist = await SetupValidation.checkIfConfigFileExists();
    if (!configExist) return;
    const parsedConfig: DependencyOptionsInterface = await this.getParsedConfig();
    Globals.init(parsedConfig);
  }

  private static getParsedConfig(): Promise<DependencyOptionsInterface> {
    return new Promise(async (resolve, reject) => {
      try {
        const cosmicConfig = cosmiconfig(Globals.CONFIG_IDENTIFIER);
        const config: CosmiconfigResult = await cosmicConfig.search();
        console.info('✅ Configuration loaded');
        resolve(config?.config as DependencyOptionsInterface);
      } catch(error) {
        console.error(error);
        console.error(`❌ Parsing configuration file failed. Configuration is incorrect.`);
        reject({});
      }
    });
  }

  private static async checkIfConfigFileExists(): Promise<boolean> {
    let configExists: boolean = false;
    const config = cosmiconfig(Globals.CONFIG_IDENTIFIER);
    return await config
        .search()
        .then((result) => {
          // result.config is the parsed configuration object.
          // result.filepath is the path to the config file that was found.
          // result.isEmpty is true if there was nothing to parse in the config file.
          if (result?.isEmpty || !result?.config) {
            console.error(`❌ No Config found\nSkip...`);
          } else {
            console.info(`✅ Config found: ${result.filepath}`);
            configExists = true;
          }
          return configExists;
        })
        .catch((error) => {
          console.error(error);
          return configExists;
        });
  }

  private static checkFileExists(path: string, rejectMessage: string, resolveMessage: string) {
    return new Promise((resolve, reject) => {
      const fileExist = FileUtils.checkFileExist(path);
      if (!fileExist) reject(rejectMessage);
      resolve(resolveMessage);
    });
  }
}
