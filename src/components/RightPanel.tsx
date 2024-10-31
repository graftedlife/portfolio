export default function RightPanel() {
  const recentUpdates = [
    { id: 1, title: 'New Blog Post', date: '2023-08-20' },
    { id: 2, title: 'Conference Talk', date: '2023-08-15' },
    { id: 3, title: 'Project Update', date: '2023-08-10' },
  ]

  const tags = [
    'React', 'TypeScript', 'Web Development', 'UI/UX', 'JavaScript',
    'Design Systems', 'Performance', 'Accessibility'
  ]

  return (
    <aside className="w-80 border-l border-gray-200 bg-white p-6">
      <div className="space-y-8">
        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Updates</h3>
          <div className="space-y-4">
            {recentUpdates.map((update) => (
              <div key={update.id} className="flex items-start">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900">{update.title}</p>
                  <p className="text-sm text-gray-500">{update.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-lg font-medium text-gray-900 mb-4">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>
      </div>
    </aside>
  )
}