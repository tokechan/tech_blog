import { client } from "../../../libs/microcms";
import styles from "./page.module.css";
import dayjs from "dayjs";

//ブログ記事の型定義
type Props = {
    id: string;
    title: string;
    body: string;
    publishedAt: string;
    category: { name: string };
};

//microCMSからブログ記事を取得
async function getBlogPost(id: string): Promise<Props> {
    const data = await client.get({
        endpoint: `blog/${id}`,
    });
    return data;
}

//記事詳細ページの生成
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;//IDを取得
    const post = await getBlogPost(id);//ブログ記事を取得


    //dayjsで日付をフォーマット
    const formattedDate = dayjs(post.publishedAt).format('YY.MM.DD');

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.date}>{formattedDate}</div>
            <div className={styles.category}>カテゴリー: {post.category && post.category.name}</div>
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </main>
    );
}


//静的パスを生成
export async function generateStaticParams() {
    const contentIds = await client.getAllContentIds({ endpoint: 'blog' });
    return contentIds.map((contentId) => ({
        id: contentId,
    }));
}