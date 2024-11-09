import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Writing',
  description: 'Everything I think about.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Writing</h1>
      <BlogPosts />
    </section>
  )
}
