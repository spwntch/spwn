import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

export const playBasic = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  
  // Check if title is present
  const title = await canvas.findByText('Welcome to Spawntech');
  expect(title).toBeInTheDocument();
  
  // Check if subtitle is present
  const subTitle = await canvas.findByText('Pioneering the Future of Software Development');
  expect(subTitle).toBeInTheDocument();
  
  // Check if body content is present
  const body = await canvas.findByText('Spawntech is at the forefront of transforming software development, blending advanced DevOps, precise UX implementation, and customized development.');
  expect(body).toBeInTheDocument();

  // Check if tags are present
  const tags = ['DevOps', 'UX/UI', 'Lean Innovation', 'Node.js'];
  for (const tag of tags) {
    const tagElement = await canvas.findByText(tag);
    expect(tagElement).toBeInTheDocument();
  }
  
  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playVerticalSplit = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if layout is vertical
  const container = canvasElement.querySelector('.split-vertical');
  expect(container).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playHorizontalFlip = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if layout is flipped horizontally
  const container = canvasElement.querySelector('.flip-horizontal');
  expect(container).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};

export const playVerticalFlip = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);

  // Check if layout is flipped vertically
  const container = canvasElement.querySelector('.flip-vertical');
  expect(container).toBeInTheDocument();

  // Accessibility check
  const results = await axe(canvasElement);
  expect(results).toHaveNoViolations();
};
