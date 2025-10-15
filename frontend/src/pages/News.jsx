import { Newspaper } from 'lucide-react';

export default function News() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">News</h1>
          <p className="text-xl text-teal-100 max-w-3xl">
            Latest news and updates about ICACS 2025
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <Newspaper className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">News updates coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
