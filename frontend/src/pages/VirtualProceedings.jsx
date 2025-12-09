import { Youtube, Facebook, Radio } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function VirtualProceedings() {
  // Day01 and Day02 streaming links
  const day01Links = {
    youtube: "https://www.youtube.com/embed/5s0Ydizx9lI",
    facebook: "https://www.facebook.com/plugins/video.php?href=YOUR_FACEBOOK_LIVE_LINK_DAY01", 
  };

  const day02Links = {
    youtube: "https://www.youtube.com/embed/qsgv-UX0wts",
    facebook: "https://www.facebook.com/plugins/video.php?href=YOUR_FACEBOOK_LIVE_LINK_DAY02", 
  };

  // Get current streaming links based on date
  const getStreamingEmbeds = () => {
    const cutoffDate = new Date('2025-12-08T23:50:00'); // December 8, 2025 11:50 PM
    const now = new Date();
    
    return now >= cutoffDate ? day02Links : day01Links;
  };

  const [streamingEmbeds, setStreamingEmbeds] = useState(getStreamingEmbeds());

  // Update links when date changes (check every minute)
  useEffect(() => {
    const interval = setInterval(() => {
      setStreamingEmbeds(getStreamingEmbeds());
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background-white min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white section-padding-lg overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://moellim.com/wp-content/uploads/2025/02/Riphah-International-University-Lahore-900x580-1.webp)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Radio className="h-8 w-8 animate-pulse text-red-500" />
              <span className="px-4 py-2 bg-red-500 text-white rounded-full font-bold text-sm uppercase tracking-wider animate-pulse">
                LIVE
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-hero mb-4 sm:mb-6 font-bold leading-tight">
              Virtual Proceedings – Live Streaming
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-white/90">
              Join the conference proceedings live and watch the sessions in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Live Embeds - Day 02 and Day 01 Tracks */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            {/* Day 02 Indicator */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-semibold shadow-lg">
                <Radio className="h-5 w-5 animate-pulse" />
                <span>Day 02 - Live Streaming (09-DEC-2025)</span>
              </div>
            </div>

            {/* Day 02 Track Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
              {/* Track 1 Session 2 */}
              <div className="group bg-gradient-to-br from-white to-red-50 rounded-2xl shadow-xl p-5 lg:p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-red-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors duration-300">
                    <Radio className="text-red-600 h-5 w-5 animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-text-primary">
                      Track 1 - Session 2
                    </h3>
                    <p className="text-xs text-text-secondary mt-1">ICCI 2025 - Day 2</p>
                  </div>
                </div>

                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg bg-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                  <iframe
                    src="https://www.youtube.com/embed/hWghzGY_0Ew"
                    className="absolute inset-0 w-full h-full rounded-xl"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="ICCI 2025 - Day 2 - Track 1 Session 2 Live (09-DEC-2025)"
                  ></iframe>
                </div>
              </div>

              {/* Track 2 */}
              <div className="group bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-xl p-5 lg:p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                    <Radio className="text-blue-600 h-5 w-5 animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-text-primary">
                      Track 2 
                    </h3>
                    <p className="text-xs text-text-secondary mt-1">ICCI 2025 - Day 2</p>
                  </div>
                </div>

                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg bg-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                  <iframe
                    src="https://www.youtube.com/embed/gGPmGNCP3QI"
                    className="absolute inset-0 w-full h-full rounded-xl"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="ICCI 2025 - Day 2 - Track 2 Live (09-DEC-2025)"
                  ></iframe>
                </div>
              </div>

              {/* Track 1 Session 3 */}
              <div className="group bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl p-5 lg:p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                    <Radio className="text-green-600 h-5 w-5 animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-text-primary">
                      Track 1 - Session 3
                    </h3>
                    <p className="text-xs text-text-secondary mt-1">ICCI 2025 - Day 2</p>
                  </div>
                </div>

                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg bg-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                  <iframe
                    src="https://www.youtube.com/embed/XFPwaMqsTj0"
                    className="absolute inset-0 w-full h-full rounded-xl"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="ICCI 2025 - Day 2 - Track 1 Session 3 Live (09-DEC-2025)"
                  ></iframe>
                </div>
              </div>

              {/* Track 3MT */}
              <div className="group bg-gradient-to-br from-white to-purple-50 rounded-2xl shadow-xl p-5 lg:p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
                    <Radio className="text-purple-600 h-5 w-5 animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-text-primary">
                      Track 3MT
                    </h3>
                    <p className="text-xs text-text-secondary mt-1">ICCI 2025 - Day 2</p>
                  </div>
                </div>

                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg bg-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                  <iframe
                    src="https://www.youtube.com/embed/W3Q1NypX0dU"
                    className="absolute inset-0 w-full h-full rounded-xl"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="ICCI 2025 - Day 2 - Track 3MT Live (09-DEC-2025)"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Day 01 Indicator */}
            <div className="text-center mb-8 mt-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-semibold shadow-lg">
                <Radio className="h-5 w-5 animate-pulse" />
                <span>Day 01 - Live Streaming (08-DEC-2025)</span>
              </div>
            </div>

            {/* Day 01 Track Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Day 1 Live */}
              <div className="group bg-gradient-to-br from-white to-orange-50 rounded-2xl shadow-xl p-5 lg:p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-orange-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors duration-300">
                    <Radio className="text-orange-600 h-5 w-5 animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-text-primary">
                      Day 1 Live
                    </h3>
                    <p className="text-xs text-text-secondary mt-1">ICCI 2025 - Day 1</p>
                  </div>
                </div>

                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg bg-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                  <iframe
                    src="https://www.youtube.com/embed/5s0Ydizx9lI?start=7104"
                    className="absolute inset-0 w-full h-full rounded-xl"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="ICCI 2025 - Day 1 Live (08-DEC-2025)"
                  ></iframe>
                </div>
              </div>

              {/* Day 1 - Track 2 */}
              <div className="group bg-gradient-to-br from-white to-indigo-50 rounded-2xl shadow-xl p-5 lg:p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-indigo-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors duration-300">
                    <Radio className="text-indigo-600 h-5 w-5 animate-pulse" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg lg:text-xl font-bold text-text-primary">
                      Day 1 - Track 2
                    </h3>
                    <p className="text-xs text-text-secondary mt-1">ICCI 2025 - Day 1</p>
                  </div>
                </div>

                <div className="relative w-full pt-[56.25%] rounded-xl overflow-hidden shadow-lg bg-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                  <iframe
                    src="https://www.youtube.com/embed/s_9fZ5SGS_4?start=7693"
                    className="absolute inset-0 w-full h-full rounded-xl"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="ICCI 2025 - Day 1 - Track 2 Live (08-DEC-2025)"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Additional Info */}
      <section className="section-padding bg-background-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-section mb-4 font-semibold text-text-primary">
              Conference Information
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <div className="bg-background-light rounded-xl p-8 shadow-lg">
              <p className="text-text-secondary text-lg leading-relaxed mb-4">
                The virtual proceedings are streamed live across multiple platforms for worldwide accessibility.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-4">
                All sessions will be available on-demand after the event.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                For support, please contact our technical team.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
