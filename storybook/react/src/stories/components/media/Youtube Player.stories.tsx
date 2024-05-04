import { YoutubePlayer } from '@/react-components';
import type { Meta, StoryObj } from '@storybook/react';
import { BasicDocs } from '../../../lib/docs-templates';

const meta: Meta<typeof YoutubePlayer> = {
  component: YoutubePlayer,
  parameters: { docs: { page: BasicDocs } },
  args: {
    youtubeId: '1xgP-dR4dzI',
    placeholderImage: '/brand/youtube-placeholder.webp'
  },
};
export default meta;
type Story = StoryObj<typeof YoutubePlayer>;

export const youtubePlayer: Story = {};
