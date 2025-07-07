import React, { useState, useRef, useEffect } from 'react';
import { Linkedin, GraduationCap, Languages, User, Code, Music, Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';

const About: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [isMuted, setIsMuted] = useState(false);
  const [previousVolume, setPreviousVolume] = useState(0.7);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const songs = [
    {
      title: "Uncle Albert / Admiral Halsey ",
      artist: "Paul McCartney",
      album: "RAM",
      cover: "/album1.jpg",
      src: "/song1.mp3"
    },
    {
      title: "Reality Surf",
      artist: "Bladee",
      album: "333",
      cover: "/album2.jpg",
      src: "/song2.mp3"
    },
    {
      title: "Objects in the Mirror",
      artist: "Mac Miller",
      album: "Watching Movies with the Sound Off",
      cover: "/album3.jpg",
      src: "/song3.mp3"
    }
  ];

  const currentSong = songs[currentSongIndex];

  const skills = [
    'Linux', 'Windows Server', 'Docker', 'Kubernetes', 'Ansible', 
    'PowerShell', 'Scripting', 'Git', 'Java', 'SQL', 'Python', 'JavaScript'
  ];

  const languages = [
    { name: 'Dutch', level: 'Fluent' },
    { name: 'English', level: 'Fluent' },
    { name: 'French', level: 'Basic' },
    { name: 'Amazigh', level: 'Fluent' }
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      // Auto-play next song
      if (currentSongIndex < songs.length - 1) {
        setCurrentSongIndex(prev => prev + 1);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('durationchange', updateDuration);
    audio.addEventListener('ended', handleEnded);

    // Set initial volume
    audio.volume = volume;

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('durationchange', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [volume, currentSongIndex, songs.length]);

  // Reset time when song changes
  useEffect(() => {
    setCurrentTime(0);
    setDuration(0);
    if (audioRef.current) {
      audioRef.current.load();
    }
  }, [currentSongIndex]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handlePreviousSong = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(prev => prev - 1);
      setIsPlaying(false);
    }
  };

  const handleNextSong = () => {
    if (currentSongIndex < songs.length - 1) {
      setCurrentSongIndex(prev => prev + 1);
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
    if (newVolume > 0 && isMuted) {
      setIsMuted(false);
    }
  };

  const handleMuteToggle = () => {
    if (audioRef.current) {
      if (isMuted) {
        // Unmute
        setVolume(previousVolume);
        audioRef.current.volume = previousVolume;
        setIsMuted(false);
      } else {
        // Mute
        setPreviousVolume(volume);
        setVolume(0);
        audioRef.current.volume = 0;
        setIsMuted(true);
      }
    }
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * duration;
    
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="min-h-screen px-6 pt-24 pb-16">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
            About <span className="text-white">Me</span>
          </h1>
        </div>

        {/* Vertical Layout */}
        <div className="space-y-8 mb-8">
          {/* Contact */}
          <div className="glass rounded-3xl p-8 hover-lift">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-white/5 rounded-2xl mr-4">
                <User size={24} className="text-white/60" />
              </div>
              <h2 className="text-2xl font-medium text-white">Contact</h2>
            </div>
            
            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/badramri/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center group cursor-pointer"
              >
                <div className="p-2 bg-white/5 rounded-xl mr-3 group-hover:bg-white/10 transition-colors">
                  <Linkedin size={16} className="text-white/60" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-wide">LinkedIn</p>
                  <p className="text-white/80 font-medium text-sm group-hover:text-white transition-colors">badramri</p>
                </div>
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="glass rounded-3xl p-8 hover-lift">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-white/5 rounded-2xl mr-4">
                <GraduationCap size={24} className="text-white/60" />
              </div>
              <h2 className="text-2xl font-medium text-white">Education</h2>
            </div>
            <div className="space-y-8">
              <div className="relative">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Hogeschool Gent</h3>
                  <p className="text-white/70 font-medium mb-1">Bachelor, Applied Information Technology</p>
                  <p className="text-white/50 text-sm">Specialisation: IT Infrastructure Engineer</p>
                  <p className="text-white/40 text-sm mt-2">2022 - 2026</p>
                </div>
              </div>
              <div className="relative">
                <div>
                  <h3 className="text-xl font-medium text-white mb-2">Hartencollege Ninove</h3>
                  <p className="text-white/70 font-medium mb-1">TSO, Computer Management</p>
                  <p className="text-white/40 text-sm mt-2">2016 - 2022</p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="glass rounded-3xl p-8 hover-lift">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-white/5 rounded-2xl mr-4">
                <Code size={24} className="text-white/60" />
              </div>
              <h2 className="text-2xl font-medium text-white">Technical Skills</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-white/5 hover:bg-white/10 px-4 py-3 rounded-2xl text-center transition-all duration-300 cursor-default border border-white/5 hover:border-white/10"
                >
                  <span className="text-sm font-medium text-white/80 group-hover:text-white transition-colors">{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="glass rounded-3xl p-8 hover-lift">
            <div className="flex items-center mb-8">
              <div className="p-3 bg-white/5 rounded-2xl mr-4">
                <Languages size={24} className="text-white/60" />
              </div>
              <h2 className="text-2xl font-medium text-white">Languages</h2>
            </div>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-white/5 hover:bg-white/8 rounded-2xl transition-colors">
                  <span className="text-white/80 font-medium">{lang.name}</span>
                  <span className="text-sm bg-white/10 px-3 py-1 rounded-full text-white/60 font-medium">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Music Player Section */}
        <div className="glass rounded-3xl p-8 hover-lift">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-white/5 rounded-2xl mr-4">
              <Music size={24} className="text-white/60" />
            </div>
            <h2 className="text-2xl font-medium text-white">My Favorite Songs</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            {/* Album Cover */}
            <div className="w-32 h-32 rounded-2xl border border-white/10 flex-shrink-0 overflow-hidden">
              <img 
                src={currentSong.cover} 
                alt={`${currentSong.album} Album Cover`} 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Song Info and Controls */}
            <div className="flex-1 w-full">
              <div className="text-center md:text-left mb-6">
                <h3 className="text-xl font-medium text-white mb-2">{currentSong.title}</h3>
                <p className="text-white/70 font-medium mb-1">{currentSong.artist}</p>
                <p className="text-white/50 text-sm">{currentSong.album}</p>
              </div>
              
              {/* Progress Bar */}
              <div className="mb-4">
                <div 
                  className="w-full h-2 bg-white/10 rounded-full cursor-pointer group"
                  onClick={handleProgressClick}
                >
                  <div 
                    className="h-full bg-white/40 rounded-full transition-all duration-150 group-hover:bg-white/50"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs text-white/50 mt-2">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
            </div>
            
            {/* Control Buttons Column */}
            <div className="flex flex-col items-center space-y-4 flex-shrink-0">
              {/* Skip and Play/Pause Buttons */}
              <div className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={handlePreviousSong}
                  disabled={currentSongIndex === 0}
                  className={`group flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 ${
                    currentSongIndex === 0
                      ? 'bg-white/3 border-white/5 cursor-not-allowed'
                      : 'bg-white/5 hover:bg-white/8 border-white/10 hover:border-white/20'
                  }`}
                >
                  <SkipBack 
                    size={18} 
                    className={`transition-colors ${
                      currentSongIndex === 0
                        ? 'text-white/30'
                        : 'text-white/60 group-hover:text-white'
                    }`} 
                  />
                </button>

                {/* Play/Pause Button */}
                <button
                  onClick={handlePlayPause}
                  className="group flex items-center justify-center w-16 h-16 bg-white/8 hover:bg-white/12 rounded-full border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {isPlaying ? (
                    <Pause size={24} className="text-white/80 group-hover:text-white transition-colors" />
                  ) : (
                    <Play size={24} className="text-white/80 group-hover:text-white transition-colors ml-1" />
                  )}
                </button>

                {/* Next Button */}
                <button
                  onClick={handleNextSong}
                  disabled={currentSongIndex === songs.length - 1}
                  className={`group flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 ${
                    currentSongIndex === songs.length - 1
                      ? 'bg-white/3 border-white/5 cursor-not-allowed'
                      : 'bg-white/5 hover:bg-white/8 border-white/10 hover:border-white/20'
                  }`}
                >
                  <SkipForward 
                    size={18} 
                    className={`transition-colors ${
                      currentSongIndex === songs.length - 1
                        ? 'text-white/30'
                        : 'text-white/60 group-hover:text-white'
                    }`} 
                  />
                </button>
              </div>

              {/* Volume Control */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={handleMuteToggle}
                  className="group flex items-center justify-center w-8 h-8 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX size={16} className="text-white/60 group-hover:text-white transition-colors" />
                  ) : (
                    <Volume2 size={16} className="text-white/60 group-hover:text-white transition-colors" />
                  )}
                </button>
                <div className="flex-1 max-w-20">
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-full h-1 bg-white/10 rounded-full appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.4) ${volume * 100}%, rgba(255,255,255,0.1) ${volume * 100}%, rgba(255,255,255,0.1) 100%)`
                    }}
                  />
                </div>
                <span className="text-xs text-white/50 w-6 text-right">
                  {Math.round(volume * 100)}
                </span>
              </div>
            </div>
          </div>
          
          {/* Hidden Audio Element */}
          <audio
            ref={audioRef}
            src={currentSong.src}
            onPause={() => setIsPlaying(false)}
            onPlay={() => setIsPlaying(true)}
          />
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-webkit-slider-thumb:hover {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.1);
        }
        
        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.8);
          cursor: pointer;
          border: none;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        .slider::-moz-range-thumb:hover {
          background: rgba(255, 255, 255, 1);
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default About;