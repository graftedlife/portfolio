import React from 'react';

interface Publication {
  id: number;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  abstract: string;
  link: string;
  tags: string[];
}

interface Talk {
  id: number;
  title: string;
  event: string;
  date: string;
  description: string;
  slides?: string;
  video?: string;
  tags: string[];
}

export default function Publications() {
  const publications: Publication[] = [
    {
      id: 1,
      title: "Modern Web Architecture: A Case Study",
      authors: ["John Doe", "Jane Smith"],
      venue: "International Conference on Web Engineering",
      year: 2023,
      abstract: "This paper presents a comprehensive analysis of modern web architecture patterns...",
      link: "https://example.com/paper1",
      tags: ["Web Architecture", "Case Study", "Performance"]
    },
    {
      id: 2,
      title: "Optimizing React Applications at Scale",
      authors: ["John Doe", "Bob Johnson"],
      venue: "Journal of Web Technologies",
      year: 2022,
      abstract: "An in-depth study of optimization techniques for large-scale React applications...",
      link: "https://example.com/paper2",
      tags: ["React", "Performance", "Optimization"]
    }
  ];

  const talks: Talk[] = [
    {
      id: 1,
      title: "Building Scalable Frontend Applications",
      event: "ReactConf 2023",
      date: "2023-06-15",
      description: "A deep dive into architecture patterns for scaling frontend applications...",
      slides: "https://example.com/slides1",
      video: "https://example.com/video1",
      tags: ["React", "Architecture", "Scaling"]
    },
    {
      id: 2,
      title: "The Future of Web Development",
      event: "WebTech Summit",
      date: "2023-04-20",
      description: "Exploring upcoming trends and technologies in web development...",
      slides: "https://example.com/slides2",
      tags: ["Web Development", "Trends", "Future Tech"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Publications & Talks</h1>
        <p className="text-lg text-gray-600">
          A collection of my research publications and conference presentations in web development
          and software engineering.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Publications</h2>
        <div className="space-y-6">
          {publications.map((pub) => (
            <article key={pub.id} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <a href={pub.link} className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                  {pub.title}
                </a>
              </h3>
              <p className="text-gray-600 mb-2">{pub.authors.join(', ')}</p>
              <p className="text-gray-500 mb-4">
                {pub.venue} • {pub.year}
              </p>
              <p className="text-gray-600 mb-4">{pub.abstract}</p>
              <div className="flex flex-wrap gap-2">
                {pub.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Conference Talks</h2>
        <div className="space-y-6">
          {talks.map((talk) => (
            <article key={talk.id} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{talk.title}</h3>
              <p className="text-gray-600 mb-2">{talk.event}</p>
              <p className="text-gray-500 mb-4">{talk.date}</p>
              <p className="text-gray-600 mb-4">{talk.description}</p>
              <div className="flex gap-4 mb-4">
                {talk.slides && (
                  <a
                    href={talk.slides}
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Slides
                  </a>
                )}
                {talk.video && (
                  <a
                    href={talk.video}
                    className="text-blue-600 hover:text-blue-800 flex items-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Watch Video
                  </a>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {talk.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}