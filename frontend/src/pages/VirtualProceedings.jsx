import { Youtube, Facebook, Linkedin, Radio } from 'lucide-react';

export default function VirtualProceedings() {
  const streamingEmbeds = {
    youtube: "https://www.youtube.com/embed/VIDEO_ID", // Replace VIDEO_ID
    facebook: "https://www.facebook.com/plugins/video.php?href=YOUR_FACEBOOK_LIVE_LINK", 
    linkedin: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:YOUR_ID", // Optional
  };

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
     {/* Live Embeds */}
     <section className="section-padding bg-background-light">
  <div className="container-custom">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">

      {/* YouTube Embed – Bigger */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-[0_10px_45px_rgba(0,0,0,0.14)]
                      transition-all duration-400 scale-[1.03]">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-text-primary">
          <Youtube className="text-red-600 h-10 w-10" />
          YouTube Live Stream
        </h2>

        <div className="relative w-full pt-[60%] rounded-3xl overflow-hidden shadow-xl">
          <iframe
            src={streamingEmbeds.youtube}
            className="absolute inset-0 w-full h-full rounded-3xl"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Facebook Embed – Bigger */}
      <div className="bg-white rounded-3xl shadow-2xl p-10 hover:shadow-[0_10px_45px_rgba(0,0,0,0.14)]
                      transition-all duration-400 scale-[1.03]">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-text-primary">
          <Facebook className="text-blue-600 h-10 w-10" />
          Facebook Live Stream
        </h2>

        <div className="relative w-full pt-[60%] rounded-3xl overflow-hidden shadow-xl">
          <iframe
            src={streamingEmbeds.facebook}
            className="absolute inset-0 w-full h-full rounded-3xl"
            style={{ border: "none", overflow: "hidden" }}
            frameBorder="0"
            scrolling="no"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>

    {/* LinkedIn – Slightly Smaller */}
    <div className="max-w-3xl mx-auto mt-20">
      <div className="bg-white rounded-3xl shadow-xl p-8 hover:shadow-[0_8px_35px_rgba(0,0,0,0.10)]
                      transition-all duration-400 scale-[0.97]">
        <h2 className="text-xl font-bold mb-5 flex items-center gap-3 text-text-primary">
          <Linkedin className="text-blue-700 h-7 w-7" />
          LinkedIn Live Stream
        </h2>

        <div className="relative w-full pt-[62%] rounded-2xl overflow-hidden shadow-md">
          <iframe
            src={streamingEmbeds.linkedin}
            className="absolute inset-0 w-full h-full rounded-2xl"
            allowFullScreen
          ></iframe>
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
