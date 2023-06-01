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
      defaultViewport: 'iphonex',
    },
  },
  argtypes: {
    selected: {
      type: String,
      control: 'radio',
      options: ['/', '/about', '/blog', '/portfolio', '/contact'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SoftNavbar>;

export const Mobile: Story = {
  args: {
    selected: '/',
  },
};
