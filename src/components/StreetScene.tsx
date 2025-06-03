import React from 'react';

const StreetScene: React.FC = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Street with perspective */}
      <div className="absolute bottom-0 w-full h-[50%] md:h-[45%] bg-slate-800">
        {/* Road with perspective lines */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Left perspective line */}
          <div
            className="absolute top-0 left-[15%] md:left-[20%] w-[1px] md:w-[2px] h-full bg-white/30"
            style={{ transform: 'perspective(1000px) rotateY(30deg)' }}
          />
          {/* Right perspective line */}
          <div
            className="absolute top-0 right-[15%] md:right-[20%] w-[1px] md:w-[2px] h-full bg-white/30"
            style={{ transform: 'perspective(1000px) rotateY(-30deg)' }}
          />
        </div>

        {/* Center line */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] md:h-[2px] bg-white/40">
          <div
            className="absolute inset-0 bg-[length:30px_1px] md:bg-[length:40px_2px] bg-repeat-x"
            style={{
              backgroundImage:
                'linear-gradient(to right, transparent 0, transparent 15px, white 15px, white 30px)',
            }}
          />
        </div>

        {/* Crosswalk */}
        <div className="absolute top-[35%] left-1/2 -translate-x-1/2 w-[80px] md:w-[120px] h-[30px] md:h-[40px]">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-[8px] md:w-[10px] bg-white/90"
              style={{
                left: `${i * 14}px`,
                transform: 'perspective(1000px) rotateY(-5deg)',
              }}
            />
          ))}
        </div>

        {/* Sidewalk */}
        <div className="absolute bottom-0 w-full h-[20%] md:h-[15%] bg-slate-700">
          <div
            className="absolute inset-0 bg-[length:15px_15px] md:bg-[length:20px_20px] bg-repeat"
            style={{
              backgroundImage:
                'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1)), linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 75%, rgba(255,255,255,0.1) 75%, rgba(255,255,255,0.1))',
            }}
          />
        </div>
      </div>

      {/* Traffic lights */}
      <div className="absolute top-[20%] md:top-[25%] left-[10%] md:left-[15%] w-[20px] md:w-[30px] h-[60px] md:h-[90px] bg-slate-900 rounded-lg shadow-lg">
        <div className="absolute inset-0.5 bg-slate-800 rounded-lg">
          <div className="absolute top-1 md:top-2 left-1/2 -translate-x-1/2 w-4 md:w-6 h-4 md:h-6 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.7)]" />
          <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-4 md:w-6 h-4 md:h-6 bg-yellow-500 rounded-full opacity-30" />
          <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 w-4 md:w-6 h-4 md:h-6 bg-green-500 rounded-full opacity-30" />
        </div>
      </div>

      <div className="absolute top-[20%] md:top-[25%] right-[10%] md:right-[15%] w-[20px] md:w-[30px] h-[60px] md:h-[90px] bg-slate-900 rounded-lg shadow-lg">
        <div className="absolute inset-0.5 bg-slate-800 rounded-lg">
          <div className="absolute top-1 md:top-2 left-1/2 -translate-x-1/2 w-4 md:w-6 h-4 md:h-6 bg-red-500 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.7)]" />
          <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-4 md:w-6 h-4 md:h-6 bg-yellow-500 rounded-full opacity-30" />
          <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 w-4 md:w-6 h-4 md:h-6 bg-green-500 rounded-full opacity-30" />
        </div>
      </div>

      {/* Buildings background */}
      <div className="absolute top-0 left-0 w-full h-[50%] md:h-[55%] overflow-hidden">
        {/* Left building */}
        <div className="absolute top-0 left-[5%] md:left-[10%] w-[30%] md:w-[25%] h-[70%] md:h-[80%] bg-slate-900">
          <div
            className="absolute inset-0 bg-[length:30px_30px] md:bg-[length:40px_40px] bg-repeat"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            }}
          />
        </div>
        {/* Right building */}
        <div className="absolute top-0 right-[5%] md:right-[10%] w-[30%] md:w-[25%] h-[70%] md:h-[80%] bg-slate-900">
          <div
            className="absolute inset-0 bg-[length:30px_30px] md:bg-[length:40px_40px] bg-repeat"
            style={{
              backgroundImage:
                'linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StreetScene;
