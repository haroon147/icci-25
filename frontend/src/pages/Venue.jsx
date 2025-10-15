import { MapPin } from 'lucide-react';

export default function Venue() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold mb-6">Venue</h1>
          <p className="text-xl text-red-100 max-w-3xl">
            Conference location and venue information
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Venue information coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
