import '@uidev-styles/uidev.direct.scss';
import {storybookApp} from '@storybook/vue3/dist/esm/client/preview/render'
import uidevComponent from '@uidev/index.js';
import {uidevGrid}    from '@uidev/index.js';
import urDataGrid     from '@grid/urDataGrid/urDataGrid';

storybookApp.use(uidevComponent);
storybookApp.use(uidevGrid);
storybookApp.component('ur-grid', urDataGrid);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
