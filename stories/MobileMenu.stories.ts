import MobileMenu from '../components/MobileMenu';

import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta: Meta<typeof MobileMenu> = {
  title: 'Components/Navbar/MobileMenu',
  component: MobileMenu,
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
};

export default meta;
type Story = StoryObj<typeof MobileMenu>;

export const Default: Story = {};
