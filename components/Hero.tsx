const Hero = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                {/* Placeholder video URL - Replace with local file or hosted URL */}
                <source src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

            {/* Content */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4 max-w-6xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tighter leading-tight drop-shadow-2xl">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
                        Güvenilir Teknoloji,
                    </span>
                    <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-100 via-white to-blue-100">
                        Sürdürülebilir Çözümler
                    </span>
                </h1>
            </div>
        </div>
    );
};

export default Hero;
