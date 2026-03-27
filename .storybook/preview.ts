
import type { Preview } from '@storybook/vue3-vite'

import '../src/index.css'

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
const preview: Preview = {
 parameters: {
   controls: {
     matchers: {
       color: /(background|color)$/i,
       date: /Date$/,
     },
   },
 },
};

export default preview;
