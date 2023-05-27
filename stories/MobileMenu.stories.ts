import MobileNavbar from '../components/MobileNavbar';

import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta: Meta<typeof MobileNavbar> = {
  title: 'Components/Navbar/MobileNavbar',
  component: MobileNavbar,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MobileNavbar>;

export const Default: Story = {};
