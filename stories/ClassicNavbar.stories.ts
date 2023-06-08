import ClassicNavbar from '../components/Navbar/ClassicNavbar';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof ClassicNavbar> = {
  title: 'Components/Navbar/ClassicNavbar',
  component: ClassicNavbar,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof ClassicNavbar>;

export const Default: Story = {
  args: {},
};
