import React, { useState } from 'react';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readTime: string;
}

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('');

  const posts: Post[] = [
    {
      id: 1,
      title: 'Understanding React Server Components',
      excerpt: 'An in-depth look at the future of React with Server Components...',
      date: '2023-08-20',
      author: 'John Doe',
      category: 'React',
      tags: ['React', 'Server Components', 'Performance'],
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Building Type-safe APIs with TypeScript',
      excerpt: 'Learn how to leverage TypeScript to build robust and type-safe APIs...',
      date: '2023-08-15',
      author: 'Jane Smith',
      category: 'TypeScript',
      tags: ['TypeScript', 'API', 'Backend'],
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Modern CSS Layout Techniques',
      excerpt: 'Exploring the latest CSS features for building complex layouts...',
      date: '2023-08-10',
      author: 'John Doe',
      category: 'CSS',
      tags: ['CSS', 'Layout', 'Design'],
      readTime: '6 min read'
    }
  ];

  const categories = ['all', ...new Set(posts.map(post => post.category))];
  const tags = [...new Set(posts.flatMap(post => post.tags))];

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesCategory && matchesTag;
  });

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog</h1>
        <p className="text-lg text-gray-600">
          Thoughts, tutorials, and insights about web development, software engineering,
          and technology.
        </p>
      </section>

      <section className="mb-8">
        <div className="flex flex-wrap gap-4">
          <div className="flex-1">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Category
            </label>
            <select
              id="category"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label htmlFor="tag" className="block text-sm font-medium text-gray-700 mb-2">
              Filter by Tag
            </label>
            <select
              id="tag"
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option value="">All Tags</option>
              {tags.map((tag) => (
                <option key={tag} value={tag}>{tag}</option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section>
        <div className="space-y-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                  {post.category}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}