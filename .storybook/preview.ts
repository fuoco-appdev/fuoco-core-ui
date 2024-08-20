import type { Preview } from '@storybook/react'

const preview: Preview = {
  parameters: {
    darkMode: {
      darkClass: 'dark',
      lightClass: 'light',
      stylePreview: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
