import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { SplitLayout } from './split-layout';
import { Card } from '@/react-ui';
import { withFullPage } from '../../../storybook/storybook-decorators';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';
import { expect } from '@storybook/jest';

expect.extend(toHaveNoViolations);

const componentDescription = `
### Overview
The \`SplitLayout\` component divides the container into two sections, allowing users to place other components in each section.

### Props
- \`split\`: Specifies how the container should be split ('horizontal', 'vertical').
- \`flip\`: Reverses the order of the split panes.
- \`containers\`: An array of two elements to be placed in the split sections.

### Example
\`\`\`
<SplitLayout split="horizontal" containers={[<div>Pane One Content</div>, <div>Pane Two Content</div>]} />
\`\`\`

### Notes
This component is flexible and can be used to create various layouts such as split screens.
`;

const meta: Meta<typeof SplitLayout> = {
  title: 'components/layouts/split-layout',
  component: SplitLayout,
  decorators: [withFullPage],
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
    split: {
      description: 'Specifies how the container should be split',
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    flip: {
      description: 'Reverses the order of the split panes',
      control: 'boolean',
    },
    className: {
      description: 'Additional class name(s) for the container',
      control: 'text',
    },
  },
};

export default meta;

type Story = StoryObj<typeof SplitLayout>;

const paneOne = (
  <div className="bg-gray-200 h-full w-full flex items-center justify-center">
    <Card className="p-4">Pane One Content</Card>
  </div>
);
const paneTwo = (
  <div className="bg-gray-300 h-full w-full flex items-center justify-center">
    <Card className="p-4">Pane Two Content</Card>
  </div>
);

const args = {
  split: 'horizontal' as 'horizontal' | 'vertical',
  containers: [paneOne, paneTwo],
};

/**
 * Basic SplitLayout example.
 * Demonstrates a basic usage of the SplitLayout component with a horizontal split.
 */
export const Basic: Story = {
  args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check if Pane One and Pane Two are present
    const paneOneContent = await canvas.findByText('Pane One Content');
    const paneTwoContent = await canvas.findByText('Pane Two Content');
    expect(paneOneContent).toBeInTheDocument();
    expect(paneTwoContent).toBeInTheDocument();

    // Accessibility check
    const results = await axe(canvasElement);
    expect(results).toHaveNoViolations();
  },
};

/**
 * Flipped Horizontal SplitLayout example.
 * Demonstrates the SplitLayout component with a flipped horizontal split.
 */
export const FlippedHorizontalSplit: Story = {
  args: {
    split: 'horizontal',
    containers: [paneOne, paneTwo],
    flip: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check if Pane One and Pane Two are present
    const paneOneContent = await canvas.findByText('Pane One Content');
    const paneTwoContent = await canvas.findByText('Pane Two Content');
    expect(paneOneContent).toBeInTheDocument();
    expect(paneTwoContent).toBeInTheDocument();

    // Accessibility check
    const results = await axe(canvasElement);
    expect(results).toHaveNoViolations();
  },
};

/**
 * Vertical SplitLayout example.
 * Demonstrates the SplitLayout component with a vertical split.
 */
export const VerticalSplit: Story = {
  args: {
    split: 'vertical',
    containers: [paneOne, paneTwo],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check if Pane One and Pane Two are present
    const paneOneContent = await canvas.findByText('Pane One Content');
    const paneTwoContent = await canvas.findByText('Pane Two Content');
    expect(paneOneContent).toBeInTheDocument();
    expect(paneTwoContent).toBeInTheDocument();

    // Accessibility check
    const results = await axe(canvasElement);
    expect(results).toHaveNoViolations();
  },
};

/**
 * Flipped Vertical SplitLayout example.
 * Demonstrates the SplitLayout component with a flipped vertical split.
 */
export const FlippedVerticalSplit: Story = {
  args: {
    split: 'vertical',
    containers: [paneOne, paneTwo],
    flip: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Check if Pane One and Pane Two are present
    const paneOneContent = await canvas.findByText('Pane One Content');
    const paneTwoContent = await canvas.findByText('Pane Two Content');
    expect(paneOneContent).toBeInTheDocument();
    expect(paneTwoContent).toBeInTheDocument();

    // Accessibility check
    const results = await axe(canvasElement);
    expect(results).toHaveNoViolations();
  },
};
