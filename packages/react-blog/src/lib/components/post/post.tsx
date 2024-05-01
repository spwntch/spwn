import { IMdxDoc } from '@/react-mdx';
import { PostHeader } from './post-header';
import { PostToc } from './post-toc';

interface IPostProps extends IMdxDoc {
  backTo?: { label?: string; href: string };
  onBackTo?: (href: string) => void;
  onToc: (href: string) => void;
}

export const Post = ({
  backTo,
  meta,
  toc,
  content,
  onBackTo,
  onToc,
}: IPostProps) => {
  return (
    <div className="flex flex-col mx-auto max-w-6xl">
      <div>
        <PostHeader backTo={backTo} {...meta} onBackTo={onBackTo} />
      </div>
      <div className="">
        <article className="prose text-foreground prose-headings:text-foreground py-1 md:py-4 px-2 flex gap-6">
          <div className="flex-1">{content}</div>
          {toc?.length && <PostToc toc={toc} onClickToc={onToc} />}
        </article>
      </div>
    </div>
  );
};
