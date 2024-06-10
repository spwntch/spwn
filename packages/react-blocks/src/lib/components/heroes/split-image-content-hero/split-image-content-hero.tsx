import {
  ContentContainer,
  IContent,
  IImage,
  ImageContainer,
  SplitLayout,
} from '@/react-components';
import React from 'react';
import styles from './split-image-content-hero.module.css';

interface SplitImageContentHeroProps {
  image: IImage;
  innerContent?: IContent;
  split?: 'horizontal' | 'vertical';
  flip?: boolean;
  className?: string;
}

export const SplitImageContentHero: React.FC<SplitImageContentHeroProps> = ({
  image,
  innerContent,
  split = 'horizontal',
  flip,
  className,
}) => {
  const imagePane = <ImageContainer image={image} className={className} />;
  const contentPane = innerContent && (
    <ContentContainer innerContent={innerContent} />
  );

  return (
    <div className={styles['container']}>
      <SplitLayout
        split={split}
        flip={flip}
        className="h-full"
        containers={[imagePane, contentPane]}
      />
    </div>
  );
};