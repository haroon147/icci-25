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

      {/* Live Embeds */}
      <section className="section-padding bg-background-light">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            {/* Day Indicator */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-semibold shadow-lg">
                <Radio className="h-5 w-5 animate-pulse" />
                <span>
                  {new Date() >= new Date('2025-12-08T23:50:00') ? 'Day 02 - Live Streaming' : 'Day 01 - Live Streaming'}
                </span>
              </div>
            </div>

            {/* YouTube and Facebook Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-10">
              {/* YouTube Embed */}
              <div className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-6 lg:p-8 hover:shadow-[0_20px_60px_rgba(255,0,0,0.15)] transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-red-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-red-50 rounded-xl group-hover:bg-red-100 transition-colors duration-300">
                    <Youtube className="text-red-600 h-8 w-8 lg:h-10 lg:w-10" />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-text-primary">
                      YouTube Live Stream
                    </h2>
                    <p className="text-sm text-text-secondary mt-1">Watch on YouTube</p>
                  </div>
                </div>

                <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden shadow-xl bg-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                  <iframe
                    src={streamingEmbeds.youtube}
                    className="absolute inset-0 w-full h-full rounded-2xl"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                    title="YouTube Live Stream"
                  ></iframe>
                </div>
              </div>

              {/* Facebook Embed */}
              <div className="group bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-2xl p-6 lg:p-8 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-blue-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-blue-50 rounded-xl group-hover:bg-blue-100 transition-colors duration-300">
                    <Facebook className="text-blue-600 h-8 w-8 lg:h-10 lg:w-10" />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-text-primary">
                      Facebook Live Stream
                    </h2>
                    <p className="text-sm text-text-secondary mt-1">Watch on Facebook</p>
                  </div>
                </div>

                <div className="relative w-full pt-[56.25%] rounded-2xl overflow-hidden shadow-xl bg-gray-100 group-hover:shadow-2xl transition-shadow duration-300">
                  <iframe
                    src={streamingEmbeds.facebook}
                    className="absolute inset-0 w-full h-full rounded-2xl"
                    style={{ border: "none", overflow: "hidden" }}
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen
                    allow="autoplay; encrypted-media"
                    title="Facebook Live Stream"
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
