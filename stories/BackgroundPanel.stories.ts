import BackgroundPanel from '../components/BackgroundPanel';

import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta: Meta<typeof BackgroundPanel> = {
  title: 'Components/BackgroundPanel',
  component: BackgroundPanel,
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
};

export default meta;
type Story = StoryObj<typeof BackgroundPanel>;

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphonex',
    },
  },
};

export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
};

export const Desktop: Story = {
  parameters: {},
};
