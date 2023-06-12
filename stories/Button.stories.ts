import Button from '../components/Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    buttonText: 'Lorem, ipsum dolor.',
  },
};

export const Ghost: Story = {
  args: {
    buttonText: 'Lorem, ipsum dolor.',
    ghost: true
  },
};
