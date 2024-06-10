import { ContentContainer, ImageContainer, List } from '@/react-components';
import { H3, P } from '@/react-typography';
import { Button, Card } from '@/react-ui';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { withFullPage } from '../../../storybook/storybook-decorators';
import { MultiPanelHero } from './multi-panel-hero';

const componentDescription = `
### Overview
The \`MultiPanelHero\` component uses the \`MultiPanelLayout\` component to create a hero section with a main panel and up to three sub-panels. This layout can be configured to be horizontal or vertical and can be flipped.

### Props
- \`containers\`: An array of up to four elements to be placed in the hero sections.
- \`flip\`: A boolean to flip the layout.
- \`mainPaneCoverage\`: Percentage coverage of the main panel (default is 50%).
- \`orientation\`: Orientation of the layout, either \`horizontal\` or \`vertical\`.

### Example
\`\`\`
<MultiPanelHero containers={[<div>Main Panel</div>, <div>Sub Panel 1</div>, <div>Sub Panel 2</div>]} flip={true} orientation="vertical" />
\`\`\`

### Notes
This component is flexible and adapts to different screen sizes.
`;

const meta: Meta<typeof MultiPanelHero> = {
  title: 'blocks/heroes/multi-panel-hero',
  component: MultiPanelHero,
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
    className: {
      description: 'Additional class name(s) for the container',
      control: 'text',
    },
    containers: {
      description:
        'An array of up to four elements to be placed in the hero sections',
      control: 'object',
    },
    flip: {
      description: 'A boolean to flip the layout',
      control: 'boolean',
    },
    mainPaneCoverage: {
      description: 'Percentage coverage of the main panel (default is 50%)',
      control: 'number',
    },
    orientation: {
      description: 'Orientation of the layout',
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof MultiPanelHero>;

const innerContent = {
  title: { content: 'Discover Remote Furniture' },
  subTitle: { content: 'Crafted for Remote Landscapes' },
  tags: ['Remote', 'Furniture', 'Craftsmanship', 'Landscapes'],
};

const mainPanel = (
  <ImageContainer
    image={{
      src: '/images/furniture-4.webp',
      alt: 'Abstract Image 1',
      darken: true,
    }}
    className="h-full w-full relative text-white"
  >
    <ContentContainer
      innerContent={innerContent}
      hAlign="center"
      vAlign="bottom"
    />
  </ImageContainer>
);

const subPanel1 = (
  <ImageContainer
    image={{ src: '/images/landscape-4.webp', alt: 'Landscape Image 4' }}
    className="m-8"
  >
    <div className="relative p-6 w-96 mx-auto ">
      <Card className="p-4  ">
        <H3>Our Mission</H3>
        <P className="m-0 p-0">
          To bring the beauty and tranquility of remote landscapes into your
          home with our bespoke furniture collections.
        </P>
        <Button className="mt-3">Learn More</Button>
      </Card>
    </div>
  </ImageContainer>
);

const subPanel2 = (
  <ImageContainer
    image={{ src: '/images/landscape-1.webp', alt: 'Landscape Image 1' }}
    className="m-8"
  >
    <div className="relative p-6 w-96 mx-auto ">
      <Card className="p-4  ">
        <H3 className="mb-4">Why Choose Us?</H3>
        <List
          bullets={[
            { body: 'Expert Craftsmanship' },
            { body: 'Sustainable Materials' },
            { body: 'Custom Designs' },
            { body: 'Exceptional Comfort' },
          ]}
          className="m-0 p-0"
        />
      </Card>
    </div>
  </ImageContainer>
);

const subPanel3 = (
  <ImageContainer
    image={{ src: '/images/landscape-2.webp', alt: 'Landscape Image 2' }}
    className="m-8"
  >
    <div className="relative p-6 w-96 mx-auto ">
      <Card className="p-4  ">
        <H3>Contact Us</H3>
        <P className="m-0 p-0">
          Interested in our collections? Reach out to us for more information
          and custom orders.
        </P>
        <Button className="mt-3">Get in Touch</Button>
      </Card>
    </div>
  </ImageContainer>
);

const defaultArgs = {
  containers: [mainPanel, subPanel1, subPanel2, subPanel3] as [
    React.ReactNode,
    React.ReactNode,
    React.ReactNode,
    React.ReactNode
  ],
  mainPaneCoverage: 50,
  orientation: 'horizontal' as 'horizontal' | 'vertical',
};

/**
 * Basic MultiPanelHero example.
 * Demonstrates a basic usage of the MultiPanelHero component.
 */
export const Basic: Story = {
  args: defaultArgs,
};

/**
 * Vertical MultiPanelHero example.
 * Demonstrates the MultiPanelHero component with a vertical orientation.
 */
export const Vertical: Story = {
  args: {
    ...defaultArgs,
    orientation: 'vertical',
  },
};

/**
 * Flipped MultiPanelHero example.
 * Demonstrates the MultiPanelHero component with a flipped layout.
 */
export const Flipped: Story = {
  args: {
    ...defaultArgs,
    flip: true,
  },
};

/**
 * Wide Main Panel MultiPanelHero example.
 * Demonstrates the MultiPanelHero component with a wider main panel.
 */
export const WideMain: Story = {
  args: {
    ...defaultArgs,
    mainPaneCoverage: 70,
  },
};

/**
 * Narrow Main Panel MultiPanelHero example.
 * Demonstrates the MultiPanelHero component with a narrower main panel.
 */
export const NarrowMain: Story = {
  args: {
    ...defaultArgs,
    mainPaneCoverage: 30,
  },
};

/**
 * Two Sub Panels MultiPanelHero example.
 * Demonstrates the MultiPanelHero component with two sub-panels.
 */
export const TwoSubPanels: Story = {
  args: {
    ...defaultArgs,
    containers: [mainPanel, subPanel1, subPanel2] as [
      React.ReactNode,
      React.ReactNode,
      React.ReactNode
    ],
  },
};

/**
 * One Sub Panel MultiPanelHero example.
 * Demonstrates the MultiPanelHero component with one sub-panel.
 */
export const OneSubPanel: Story = {
  args: {
    ...defaultArgs,
    containers: [mainPanel, subPanel1] as [React.ReactNode, React.ReactNode],
  },
};
