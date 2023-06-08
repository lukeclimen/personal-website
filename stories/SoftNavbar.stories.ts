import SoftNavbar from '../components/Navbar/SoftNavbar';

import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta: Meta<typeof SoftNavbar> = {
  title: 'Components/Navbar/SoftNavbar',
  component: SoftNavbar,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
    backgrounds: {
      default: 'black',
      values: [
        {
          name: 'black',
          value: '#000',
        },
      ],
    },
  },
  argTypes: {
    defaultSelected: {
      type: 'string',
      required: true,
      control: 'radio',
      options: ['/', '/about', '/blog', '/portfolio', '/contact'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SoftNavbar>;

export const Mobile: Story = {
  args: {
    defaultSelected: '/',
  },
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
};

export const Tablet: Story = {
  args: {
    defaultSelected: '/',
  },
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
};

export const Desktop: Story = {
  args: {
    defaultSelected: '/',
  },
  parameters: {},
};
