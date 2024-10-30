import React from 'react';

interface CategoryItem {
  id: number;
  title: string;
  type: 'blog' | 'publication' | 'talk';
  date: string;
  tags: string[];
}

interface Category {
  name: string;
  description: string;
  items: CategoryItem[];
}

export default function Categories() {
  const categories: Category[] = [
    {
      name: 'Web Development',
      description: 'Articles and talks about modern web development techniques and best practices.',
      items: [
        {
          id: 1,
          title: 'Understanding React Server Components',
          type: 'blog',
          date: '2023-08-20',
          tags: ['React', 'Performance']
        },
        {
          id: 2,
          title: 'Modern Web Architecture',
          type: 'publication',
          date: '2023-07-15',
          tags: ['Architecture', 'Best Practices']
        }
      ]
    },
    {
      name: 'TypeScript',
      description: 'Deep dives into TypeScript features and advanced typing techniques.',
      items: [
        {
          id: 3,
          title: 'Advanced TypeScript Patterns',
          type: 'blog',
          date: '2023-08-10',
          tags: ['TypeScript', 'Patterns']
        },
        {
          id: 4,
          title: 'Type-Safe API Design',
          type: 'talk',
          date: '2023-06-25',
          tags: ['API', 'TypeScript']
        }
      ]
    }
  ];

  const getTypeIcon = (type: CategoryItem['type']) => {
    switch (type) {
      case 'blog':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
          </svg>
        );
      case 'publication':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        );
      case 'talk':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  const getTypeColor = (type: CategoryItem['type']) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'publication':
        return 'bg-purple-100 text-purple-800';
      case 'talk':
        return 'bg-green-100 text-green-800';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Categories</h1>
        <p className="text-lg text-gray-600">
          Browse content by category to find exactly what you're looking for.
        </p>
      </section>

      <section className="space-y-12">
        {categories.map((category) => (
          <div key={category.name} className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h2>
            <p className="text-gray-600 mb-6">{category.description}</p>
            
            <div className="space-y-4">
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                >
                  <div className={`flex-shrink-0 p-2 rounded-lg ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900 truncate">
                        {item.title}
                      </h3>
                      <span className="text-sm text-gray-500">{item.date}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}