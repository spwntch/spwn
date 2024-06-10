import { IMdxDoc } from '@/react-mdx';
import { ArticleCard } from '../../cards/post-card/article-card';
import { cn } from '@/react-ui';
import styles from './article-grid.module.css';

interface Props {
  articles: IMdxDoc[];
  onClickPost: (slug: string) => void;
}

export const ArticleGrid = ({ articles: posts, onClickPost }: Props) => {
  if (!posts?.length) return <div>no posts</div>;
  return (
    <div className={cn(styles['grid-container'])}>
      {posts.map((post, index) => (
        <ArticleCard
          key={index}
          {...post.meta}
          onClick={onClickPost}
          className="w-full"
        />
      ))}
    </div>
  );
};
