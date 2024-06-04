import { Card } from '@/react-ui';
import { Meta, StoryObj } from '@storybook/react';
import BackgroundImageContainer from './background-image-container';
import { playBasic, playMultipleItems, playAccessibilityTest, playEmptyContainer, playLargeNumberOfItems } from './background-image-container.specs';

const componentDescription = `
### Overview
The \`BackgroundImageContainer\` component displays a background image with optional darkening and a background pattern. 

It serves as a versatile container for displaying content with a styled background.

### Props
- \`className\`: Additional class name(s) for the container.
- \`src\`: The URL of the background image.
- \`darkenImage\`: Whether to darken the background image.
- \`showBackgroundPattern\`: Whether to show a background pattern.
- \`children\`: The content to be displayed inside the container.

### Example
\`\`\`
<BackgroundImageContainer src="/path/to/image.jpg" darkenImage showBackgroundPattern>
  <Content />
</BackgroundImageContainer>
\`\`\`

### Notes
This component is flexible and can be used in various sections of a webpage to enhance the visual appeal by adding a background image.
`;

const meta: Meta<typeof BackgroundImageContainer> = {
  title: 'components/containers/background-image-container',
  component: BackgroundImageContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: componentDescription,
      },
    },
  },
  argTypes: {
    className: {
      description: 'Additional class name(s) for the container',
      type: 'string',
    },
    src: {
      description: 'The URL of the background image',
      type: 'string',
      defaultValue: '/images/guy-sitting-at-tech-control-station.webp',
    },
    darkenImage: {
      description: 'Whether to darken the background image',
      type: 'boolean',
      defaultValue: false,
    },
    showBackgroundPattern: {
      description: 'Whether to show a background pattern',
      type: 'boolean',
      defaultValue: false,
    },
    children: {
      description: 'The content to be displayed inside the container',
      type: 'string',
    },
  },
};

export default meta;

type Story = StoryObj<typeof BackgroundImageContainer>;

/**
 * Basic BackgroundImageContainer example.
 * Demonstrates a basic usage of the BackgroundImageContainer component.
 */
export const Basic: Story = {
  args: {
    src: '/images/guy-sitting-at-tech-control-station.webp',
    darkenImage: false,
    showBackgroundPattern: false,
    children: (
      <div className="h-screen flex items-center justify-center">
        <Card className="p-4 opacity-50">Your Content Here</Card>
      </div>
    ),
  },
  play: playBasic,
};

/**
 * Darkened BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component with a darkened background image.
 */
export const Darkened: Story = {
  args: {
    src: '/images/guy-sitting-at-tech-control-station.webp',
    darkenImage: true,
    showBackgroundPattern: false,
    children: (
      <div className="h-screen flex items-center justify-center">
        <Card className="p-4 opacity-50">Your Content Here</Card>
      </div>
    ),
  },
  play: playAccessibilityTest,
};

/**
 * Patterned BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component with a background pattern.
 */
export const Patterned: Story = {
  args: {
    src: '/images/guy-sitting-at-tech-control-station.webp',
    darkenImage: false,
    showBackgroundPattern: true,
    children: (
      <div className="h-screen flex items-center justify-center">
        <Card className="p-4 opacity-50">Your Content Here</Card>
      </div>
    ),
  },
  play: playAccessibilityTest,
};

/**
 * Multiple Items BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component with multiple items inside.
 */
export const MultipleItems: Story = {
  args: {
    src: '/images/guy-sitting-at-tech-control-station.webp',
    darkenImage: false,
    showBackgroundPattern: false,
    children: (
      <div className="h-screen flex items-center justify-center">
        <Card className="p-4 opacity-50">Content item 1</Card>
        <Card className="p-4 opacity-50">Content item 2</Card>
        <Card className="p-4 opacity-50">Content item 3</Card>
      </div>
    ),
  },
  play: playMultipleItems,
};

/**
 * Empty BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component with no content inside.
 */
export const EmptyContainer: Story = {
  args: {
    src: '/images/guy-sitting-at-tech-control-station.webp',
    darkenImage: false,
    showBackgroundPattern: false,
    children: <div className="h-screen flex items-center justify-center"></div>,
  },
  play: playEmptyContainer,
};

/**
 * Large Number of Items BackgroundImageContainer example.
 * Demonstrates the BackgroundImageContainer component with a large number of items inside.
 */
export const LargeNumberOfItems: Story = {
  args: {
    src: '/images/guy-sitting-at-tech-control-station.webp',
    darkenImage: false,
    showBackgroundPattern: false,
    children: (
      <div className="h-screen flex flex-wrap items-center justify-center">
        {[...Array(50).keys()].map((i) => (
          <Card key={i} className="p-4 opacity-50">
            Content item {i}
          </Card>
        ))}
      </div>
    ),
  },
  play: playLargeNumberOfItems,
};