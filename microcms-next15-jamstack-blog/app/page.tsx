import Link from 'next/link';
import { client } from '../libs/microcms';

//ブログ記事の型定義
type Props = {
  id: string;
  title: string;
  body: string;
};

//microCMSからブログ記事を取得
async function getBlogPosts(): Promise<Props[]> {
  const data = await client.get({
    endpoint: 'blog',
    queries: {
      fields: 'id,title',
      limit: 5,
    },
  });
  return data.contents;
}

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <main>
      <h1>ブログ記事一覧</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`blog/${post.id}`}>
             {post.title}
             {post.body}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}