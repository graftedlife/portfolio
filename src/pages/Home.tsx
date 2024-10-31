export default function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: 'Building Modern Web Applications',
      excerpt: 'Learn about the latest trends in web development...',
      date: '2023-08-20',
    },
    {
      id: 2,
      title: 'The Future of TypeScript',
      excerpt: 'Exploring upcoming features in TypeScript 5.0...',
      date: '2023-08-15',
    },
    {
      id: 3,
      title: 'Optimizing React Performance',
      excerpt: 'Best practices for building fast React applications...',
      date: '2023-08-10',
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome!</h1>
        <p className="text-lg text-gray-600">
          I'm a passionate software developer specializing in modern web technologies.
          With expertise in React, TypeScript, and UI/UX design, I create elegant
          solutions to complex problems.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Posts</h2>
        <div className="grid gap-6">
          {featuredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <time className="text-sm text-gray-500">{post.date}</time>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}