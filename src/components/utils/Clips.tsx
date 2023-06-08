const Clips = ({ imgsrc, clip }) => {
  return (
    <div className="relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300 lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14 ">
      <img
        src={imgsrc}
        className="inset-0 flex h-full w-full object-cover absolute top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-500 "
      />
      <div className="icon-style text-slate-900 w-8 h-8 md:w-5 md:h-5 flex items-center justify-center rounded-full bg-white blur-effect-theme absolute top-11 left-11 lg:top-8 lg:left-9 sm:top-4 sm:left-5 right-0 opacity-100 z-[100] ">
        <div className="md:w-3 md:h-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <video
        autoPlay={true}
        loop={true}
        muted={true}
        playsInline={true}
        className="absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0 group-hover:opacity-100 group-hover:z-50 rounded-xl "
      >
        <source type="video/mp4" src={clip} />
      </video>
    </div>
  );
};

export default Clips;
