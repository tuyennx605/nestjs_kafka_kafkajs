import { readFileSync } from 'fs';
import * as yaml from 'js-yaml';
import { join } from 'path';

// const YAML_CONFIG_FILENAME = '../../config/config.dev.yaml';

const YAML_CONFIG_FILENAME = `env/config.${process.env.NODE_ENV || 'dev'}.yaml`;
const YAML_CONFIG_DEFAULT = 'env/config.default.yaml';

export default () => {
  // load file default
  const loadDataDefault = yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_DEFAULT), 'utf8'),
  ) as Record<string, any>;

  // load file by env
   const loadDataEnv = yaml.load(
    readFileSync(join(__dirname, YAML_CONFIG_FILENAME), 'utf8'),
  ) as Record<string, any>;

  return Object.assign({}, loadDataDefault, loadDataEnv);
};