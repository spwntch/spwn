import '@/tailwind/styles';

import { Decorator, Parameters } from '@storybook/react';
import { withThemeToggle } from '@/react-storybook';

export const parameters: Parameters = {
  backgrounds: {
    default: 'light',
    values: [
      { name: 'light', value: '#ffffff' },
      { name: 'dark', value: '#000000' },
    ],
    disable: true,
  },
  layout: 'centered',
  controls: { exclude: ['children'] },
  options: {
    storySort: {
      order: [
        'components',
        'typography',
        ['brand', ['Brand Provider', 'Logo', '*']],
      ],
    },
  },
};

export const decorators: Decorator[] = [withThemeToggle];
