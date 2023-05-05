import { BadgeOptionsObjectInterface } from './BadgeOptionsInterface';
import { OutputType } from '../enums/OutputType';

export interface DependencyOptionsInterface {
  badges?: ConfigBadge;
  coverage_file_path?: string;
  readmeFilePath?: string;
  outputType?: OutputType;
}

export interface ConfigBadge {
  [key: string]: BadgeOptionsObjectInterface;
}
