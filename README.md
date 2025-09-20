# Next.js／Markdown／TypeScript／Tailwind CSS を使用したブログです

[blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) をベースにしています。

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates) feature using Markdown files as the data source.

ブログ記事は Front Matter をサポートした Markdown ファイルとして`/_posts`に保存されます。
ここに Markdown ファイルを追加すると、新しいブログ記事が作成されます。

ブログ記事の作成には、Markdown ファイルを HTML 文字列に変換するために[`remark`](https://github.com/remarkjs/remark)と[`remark-html`](https://github.com/remarkjs/remark-html)を使用し、プロパティとしてページに送信しています。
各投稿のメタデータは[`gray-matter`](https://github.com/jonschlinkert/gray-matter)で処理され、これもプロパティとしてページに送信されます。

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/blog-starter&project-name=blog-starter&repository-name=blog-starter)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example blog-starter blog-starter-app
```

```bash
yarn create next-app --example blog-starter blog-starter-app
```

```bash
pnpm create next-app --example blog-starter blog-starter-app
```

Your blog should be up and running on [http://localhost:3000](http://localhost:3000)! If it doesn't work, post on [GitHub discussions](https://github.com/vercel/next.js/discussions).

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
