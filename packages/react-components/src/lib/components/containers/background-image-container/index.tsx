import { PropsWithChildren } from 'react';
import { cn } from '../../../utils';
import { BackroundPattern } from './background-pattern';

interface Props {
  className?: string;
  src?: string;
  darkenImage?: boolean;
  showBackgroundPattern?: boolean;
}

export const BackgroundImageContainer = ({
  className,
  src = '/images/guy-sitting-at-tech-control-station.webp',
  darkenImage,
  showBackgroundPattern,
  children,
}: Props & PropsWithChildren) => {
  return (
    <div
      className={cn(
        'h-full w-full relative isolate overflow-hidden pt-48 sm:pt-64',
        className
      )}
    >
      <img
        src={src}
        alt=""
        className={cn(
          'absolute inset-0 -z-10 h-full w-full object-cover',
          darkenImage && 'brightness-50'
        )}
        width={1280}
        height={720}
      />
      {showBackgroundPattern && <BackroundPattern />}
      <div
        className={cn(
          'mx-auto max-w-7xl px-6 lg:px-8',
          darkenImage && 'text-white'
        )}
      >
        <div className="mx-auto max-w-3xl lg:mx-0">{children}</div>
      </div>
    </div>
  );
};

export default BackgroundImageContainer;
