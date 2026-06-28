import { ChevronLeft, ChevronRight, Radio, Trophy, Medal, ExternalLink, Users, Mic2, FileText, Timer } from 'lucide-react';
import { useMemo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { icci25HighlightImages } from '../../data/icci25Highlights';

const msResults = [
  { rank: 'winner', title: '1st Winner - MS', name: 'Ms. Farwa Khan', image: '/icci-pictures/3mt award/ms/Ms.-Farwa-Khan-1st-winner.jpg' },
  { rank: 'runner-up', title: '1st Runner-Up - MS', name: 'Ms. Ayesha Mariam', image: '/icci-pictures/3mt award/ms/Ms.-Ayesha-mariam-1st-Runner-up.jpg' },
  { rank: 'runner-up', title: '2nd Runner-Up - MS', name: 'Mr. Moiz Khan', image: '/icci-pictures/3mt award/ms/Mr.-Moiz-Khan-2nd-runner-up.jpg' },
];

const phdResults = [
  { rank: 'winner', title: '1st Winner - PhD', name: 'Mr. Muhammad Mohsin', image: '/icci-pictures/3mt award/phd/Mr.-Muhammad-Mohsin-1st-winner.jpg' },
  { rank: 'runner-up', title: '1st Runner-Up - PhD', name: 'Ms. Abida Rashid', image: '/icci-pictures/3mt award/phd/Ms.--Abida-Rashid-1st-Runer-Up.jpg' },
  { rank: 'runner-up', title: '2nd Runner-Up - PhD', name: 'Ms. Nadia Qureshi', image: '/icci-pictures/3mt award/phd/Ms.--Nadia-Qureshi-2nd-Runer-Up.jpg' },
];

const stats = [
  { label: 'Participants', value: '500+', icon: Users },
  { label: 'Speakers', value: '30+', icon: Mic2 },
  { label: 'Papers', value: '30+', icon: FileText },
  { label: '3MT Entries', value: '45+', icon: Timer },
];

const ResultCard = ({ result }) => {
  const isWinner = result.rank === 'winner';
  return (
    <div className={`relative group overflow-hidden rounded-2xl transition-all duration-300 ${
      isWinner ? 'md:scale-105 border-2 border-yellow-400 shadow-2xl z-10' : 'border border-gray-100 shadow-md hover:shadow-lg'
    } bg-white`}>
      {isWinner && (
        <div className="absolute top-0 right-0 bg-yellow-400 text-white px-4 py-1 rounded-bl-xl font-bold flex items-center gap-2 z-20">
          <Trophy className="h-4 w-4" /> Winner
        </div>
      )}
      <div className="aspect-[4/5] overflow-hidden">
        <img src={result.image} alt={result.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
      </div>
      <div className={`p-5 ${isWinner ? 'bg-gradient-to-b from-white to-yellow-50' : ''}`}>
        <p className={`text-xs font-bold uppercase tracking-wider mb-1 ${isWinner ? 'text-yellow-600' : 'text-gray-500'}`}>{result.title}</p>
        <h3 className="text-xl font-bold text-slate-900 leading-tight">{result.name}</h3>
      </div>
    </div>
  );
};

export default function Highlights() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const allSlides = useMemo(() => icci25HighlightImages, []);

  // Automatic Carousel Logic (1 second interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % allSlides.length);
    }, 1000);
    return () => clearInterval(timer);
  }, [allSlides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % allSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + allSlides.length) % allSlides.length);

  return (
    <div className="bg-[#F8FAFC] min-h-screen">
      {/* Hero & Stats Section */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://moellim.com/wp-content/uploads/2025/02/Riphah-International-University-Lahore-900x580-1.webp" 
            className="w-full h-full object-cover opacity-10"
            alt="background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-[#F8FAFC]"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-black text-primary tracking-tighter mb-4">ICCI-25</h1>
            <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
              Highlighting the breakthroughs and bright minds of the International Conference on Computing and Innovation.
            </p>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center transition-transform hover:-translate-y-1">
                <stat.icon className="h-6 w-6 text-accent mb-3" />
                <span className="text-3xl font-black text-slate-900">{stat.value}</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom pb-24">
        {/* Gallery Carousel */}
        <div className="mb-24">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Event Highlights</h2>
              <div className="w-12 h-1.5 bg-accent mt-2 rounded-full"></div>
            </div>
          </div>
          
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 group aspect-video md:aspect-[21/9]">
            <img
              src={allSlides[currentSlide]}
              alt="Highlight"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all"><ChevronLeft /></button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-all"><ChevronRight /></button>
          </div>
        </div>

        {/* 3MT Results */}
        {['MS', 'PhD'].map((level) => {
          const results = level === 'MS' ? msResults : phdResults;
          return (
            <div key={level} className="mb-32">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-slate-900">3MT Awards: {level} Category</h2>
                <p className="text-slate-500 mt-2">Recognizing the most impactful three-minute thesis presentations.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                <div className="order-2 md:order-1 opacity-90"><ResultCard result={results[1]} /></div>
                <div className="order-1 md:order-2"><ResultCard result={results[0]} /></div>
                <div className="order-3 md:order-3 opacity-90"><ResultCard result={results[2]} /></div>
              </div>
            </div>
          );
        })}

        {/* Footer Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link to="/icci-25/virtual-proceedings" className="group bg-slate-900 p-8 rounded-3xl text-white flex justify-between items-center hover:bg-slate-800 transition-all">
            <div>
              <div className="flex items-center gap-2 text-red-400 mb-2 font-bold uppercase text-xs tracking-widest">
                <Radio className="h-4 w-4 animate-pulse" /> Archive Available
              </div>
              <h3 className="text-2xl font-bold">Virtual Proceedings</h3>
            </div>
            <div className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-all">
              <ExternalLink className="h-5 w-5" />
            </div>
          </Link>
          <Link to="/icci-25/gallery" className="group bg-white border border-slate-200 p-8 rounded-3xl flex justify-between items-center hover:shadow-xl transition-all">
            <div>
              <span className="text-accent mb-2 block font-bold uppercase text-xs tracking-widest">Visual Log</span>
              <h3 className="text-2xl font-bold text-slate-900">Full Photo Gallery</h3>
            </div>
            <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
              <ChevronRight className="h-5 w-5" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
