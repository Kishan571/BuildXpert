import { useState, useEffect } from "react";
import { ChevronRight, Smartphone, Zap } from "lucide-react";

interface PreviewScreen {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  features: string[];
  color: string;
}

const screens: PreviewScreen[] = [
  {
    id: 1,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F6e56f54a9e26421cb0a635f0e9e5bac8%2F32ec369841e54d069bcd7dfba030edc2?format=webp&width=600",
    title: "Discover Services",
    subtitle: "Browse verified professionals",
    features: ["Real-time availability", "Verified ratings", "Instant booking"],
    color: "from-blue-600 to-blue-700",
  },
  {
    id: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F6e56f54a9e26421cb0a635f0e9e5bac8%2F1396713b1ff245bc85d4e2ed5bf8e73a?format=webp&width=600",
    title: "Search Services",
    subtitle: "Find by location & category",
    features: ["Location filter", "Category search", "Price comparison"],
    color: "from-cyan-600 to-teal-600",
  },
  {
    id: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F6e56f54a9e26421cb0a635f0e9e5bac8%2F6f936245bf0f41d0ac05dce8e979f832?format=webp&width=600",
    title: "Manage Bookings",
    subtitle: "Track appointments anywhere",
    features: ["Live tracking", "Notifications", "Booking history"],
    color: "from-teal-600 to-emerald-600",
  },
];

export function MobilePreview() {
  const [activeScreen, setActiveScreen] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setDirection("right");
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrevious = () => {
    setDirection("left");
    setActiveScreen((prev) => (prev - 1 + screens.length) % screens.length);
    setIsAutoPlay(false);
  };

  const handleNext = () => {
    setDirection("right");
    setActiveScreen((prev) => (prev + 1) % screens.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left: Interactive Device */}
      <div className="relative flex justify-center items-center h-full min-h-screen lg:min-h-auto">
        <div className="relative w-full max-w-sm lg:max-w-md">
          {/* Glow effect */}
          <div className="absolute -inset-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>

          {/* Device frame container */}
          <div className="relative w-full aspect-[9/19] mx-auto">
            {/* Device outer frame */}
            <div className="absolute inset-0 bg-slate-950 rounded-3xl border-8 border-slate-800 shadow-2xl overflow-hidden">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-950 rounded-b-2xl z-20 border-l border-r border-b border-slate-800"></div>

              {/* Screen area with active screen */}
              <div className="relative w-full h-full overflow-hidden bg-black">
                {screens.map((screen, idx) => {
                  const isActive = idx === activeScreen;
                  const offset = isActive
                    ? 0
                    : direction === "right"
                      ? 100
                      : -100;

                  return (
                    <div
                      key={screen.id}
                      className={`absolute inset-0 transition-all duration-700 ease-out ${
                        isActive ? "opacity-100 translate-x-0" : "opacity-0"
                      }`}
                      style={{
                        transform: isActive
                          ? "translateX(0)"
                          : `translateX(${offset}%)`,
                      }}
                    >
                      <img
                        src={screen.image}
                        alt={screen.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Screen overlay with gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>
                  );
                })}

                {/* Status bar simulation */}
                <div className="absolute top-0 left-0 right-0 h-6 bg-slate-950 z-30 flex items-center justify-between px-4 text-xs text-slate-300">
                  <span>9:41</span>
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                    <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Interactive indicators */}
              <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
                {screens.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveScreen(idx);
                      setIsAutoPlay(false);
                    }}
                    className={`transition-all duration-300 rounded-full ${
                      idx === activeScreen
                        ? "w-8 h-2 bg-gradient-to-r from-blue-400 to-cyan-400"
                        : "w-2 h-2 bg-slate-600 hover:bg-slate-500"
                    }`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <button
              onClick={handlePrevious}
              className="absolute -left-20 lg:-left-24 top-1/2 -translate-y-1/2 z-10 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 group"
            >
              <ChevronRight className="w-7 h-7 lg:w-8 lg:h-8 -scale-x-100 group-hover:-translate-x-1 transition-transform" />
            </button>

            <button
              onClick={handleNext}
              className="absolute -right-20 lg:-right-24 top-1/2 -translate-y-1/2 z-10 w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 group"
            >
              <ChevronRight className="w-7 h-7 lg:w-8 lg:h-8 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Pause/Play indicator */}
            <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 text-slate-400 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              {isAutoPlay ? "Auto-playing" : "Paused"}
            </div>
          </div>
        </div>
      </div>

      {/* Right: Details & Features */}
      <div className="space-y-8">
        {/* Screen title & description */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Live Preview
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-4xl font-bold text-white">
              {screens[activeScreen].title}
            </h3>
            <p className="text-xl text-slate-300">
              {screens[activeScreen].subtitle}
            </p>
          </div>
        </div>

        {/* Feature list with animation */}
        <div className="space-y-3">
          {screens[activeScreen].features.map((feature, idx) => (
            <div
              key={idx}
              className="group flex items-center gap-4 p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 hover:border-blue-500/50 hover:bg-blue-500/10 transition-all duration-300"
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:scale-150 transition-transform"></div>
              <span className="text-slate-300 group-hover:text-white transition-colors">
                {feature}
              </span>
              <Zap className="w-4 h-4 text-cyan-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Code snippet */}
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
          <div className="relative bg-slate-900/50 backdrop-blur-xl border border-blue-500/20 rounded-lg p-4 font-mono text-sm overflow-x-auto">
            <div className="text-slate-400">
              <span className="text-cyan-400">{"<"}</span>
              <span className="text-blue-400">buildXpert</span>
              <span className="text-cyan-400">{" />"}</span>
            </div>
            <div className="text-slate-400 mt-1">
              <span className="text-slate-500">
                // Launch your construction
              </span>
            </div>
            <div className="text-slate-400 mt-1">
              <span className="text-slate-500">// journey in seconds</span>
            </div>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-1 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${((activeScreen + 1) / screens.length) * 100}%`,
              }}
            ></div>
          </div>
          <span className="text-sm text-slate-400">
            {activeScreen + 1} / {screens.length}
          </span>
        </div>

        {/* Auto-play toggle */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="group relative w-full px-6 py-3 rounded-lg font-semibold text-white overflow-hidden disabled:opacity-50"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-slate-700 to-slate-600 group-hover:from-blue-600 group-hover:to-cyan-600 transition-all duration-300"></div>
          <div className="relative flex items-center justify-center gap-2">
            <span
              className={`w-2 h-2 rounded-full ${
                isAutoPlay ? "bg-green-400 animate-pulse" : "bg-slate-400"
              }`}
            ></span>
            {isAutoPlay ? "Auto-play: ON" : "Auto-play: OFF"}
          </div>
        </button>
      </div>
    </div>
  );
}
