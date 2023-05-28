import BeforeAfterPicture from '../components/BeforeAfterPicture/BeforeAfterPicture';

import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta: Meta<typeof BeforeAfterPicture> = {
  title: 'Components/BeforeAfterPicture',
  component: BeforeAfterPicture,
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;
type Story = StoryObj<typeof BeforeAfterPicture>;

export const Desktop: Story = {
  parameters: {
    layout: 'centered',
  },
};
