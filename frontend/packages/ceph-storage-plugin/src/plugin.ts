import * as _ from 'lodash';
import { ModelDefinition, Plugin } from '@console/plugin-sdk';
import * as models from './models';

const plugin: Plugin<ModelDefinition> = [
  {
    type: 'ModelDefinition',
    properties: {
      models: _.values(models),
    },
  },
];

export default plugin;
