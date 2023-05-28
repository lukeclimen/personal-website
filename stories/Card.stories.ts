import Card from '../components/Card';

import type { Meta, StoryObj } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Desktop: Story = {
  parameters: {
    layout: 'centered',
  },
  args: {
    cardTitle: 'Lorem, ipsum dolor.',
    cardText: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste labore
          officiis temporibus aliquid hic alias eaque, ratione, ea numquam
          exercitationem vitae nam repellendus esse ducimus impedit blanditiis
          totam. Natus, dolores.`,
  },
};

export const Mobile: Story = {
  parameters: {
    layout: 'centered',
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      defaultViewport: 'iphonex',
    },
  },
  args: {
    cardTitle: 'Lorem, ipsum dolor.',
    cardText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          magni corrupti culpa aliquam minus nesciunt consequatur animi sunt
          suscipit. Dolor?`,
  },
};
