import { FileText } from 'lucide-react';

export default function CallForPapers() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Call for Papers</h1>
          <p className="text-xl text-green-100 max-w-3xl">
            Submit your original research and contribute to advancing computer science
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Paper Submission</h2>
            <p className="text-lg text-gray-600 mb-6">
              We invite submissions of original research papers in all areas of computer science.
            </p>
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Paper submission form coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
