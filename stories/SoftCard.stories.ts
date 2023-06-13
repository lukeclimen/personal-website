import Card from '../components/Card/SoftCard';

import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta: Meta<typeof Card> = {
  title: 'Components/Cards/SoftCard',
  component: Card,
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
  args: {
    cardTitle: 'Lorem, ipsum dolor.',
    cardText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste labore
          officiis temporibus aliquid hic alias eaque, ratione, ea numquam
          exercitationem vitae nam repellendus esse ducimus impedit blanditiis
          totam. Natus, dolores.`,
    cardButton: {
        buttonText: 'Hey Jennie wassup?',
    }
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

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
