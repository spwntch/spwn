import { cn } from '@spwntch/ui';
import { IMdxDoc } from '../../types';
import styles from './article-mdx.module.css';

interface IArticleProps extends IMdxDoc {
  backTo?: { label?: string; href: string };
  onBackTo?: (href: string) => void;
  onToc?: (href: string) => void;
}

export const ArticleMdx = ({
  backTo,
  // meta,
  toc,
  content,
  onBackTo,
  // onToc,
}: IArticleProps) => {
  return (
    <div className={cn(styles.container)}>
      <article className={cn(styles.article)}>
        {backTo && onBackTo && (
          <button onClick={() => onBackTo(backTo.href)}>
            {backTo.label || 'Back'}
          </button>
        )}
        <div className={cn(styles['prose-content'])}>{content}</div>
        {toc?.length && (
          <div className={cn(styles.toc)}>{/* TOC content */}</div>
        )}
      </article>
    </div>
  );
};
