import { PropsWithChildren } from 'react';
import { IContent, IImage } from '../../../types';
import ImageContainer from '../../containers/image-container/image-container';
import { ContentContainer } from '../../containers/content-container/content-container';

interface ImageContentHeroProps extends PropsWithChildren {
  image: IImage;
  innerContent?: IContent;
}

export const ImageContentHero = ({
  image,
  innerContent,
  children,
}: ImageContentHeroProps) => {
  return (
    <div className="h-screen w-full">
      <ImageContainer image={image}>
        {innerContent && (
          <ContentContainer innerContent={innerContent}>
            {children}
          </ContentContainer>
        )}
      </ImageContainer>
    </div>
  );
};
