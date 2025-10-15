import { Calendar } from 'lucide-react';

export default function Program() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Program</h1>
          <p className="text-xl text-indigo-100 max-w-3xl">
            Conference schedule and program details
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Program schedule coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
