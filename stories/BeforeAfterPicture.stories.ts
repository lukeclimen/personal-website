import BeforeAfterPicture from '../components/BeforeAfterPicture/BeforeAfterPicture';
import BeforeImage from '../public/assets/shrubs-before.jpg';
import AfterImage from '../public/assets/shrubs-after.jpg';

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

export const Main: Story = {
  args: {
    beforeImageLink: 'https://i.postimg.cc/hz5szmBj/shrubs-before.jpg',
    afterImageLink: 'https://i.postimg.cc/JDnKzqSv/shrubs-after.jpg',
  },
};
