import React from 'react';

interface AudioPlayerProps {
  src: string;
  title?: string;
}

export default function AudioPlayer({ src, title }: AudioPlayerProps) {
  return (
    <div className="my-6 w-full max-w-md">
      {title && (
        <p className="mb-2 text-sm font-medium text-gray-700">{title}</p>
      )}
      <audio 
        controls 
        className="w-full h-12 rounded-lg border border-gray-300 bg-white shadow-sm 
                   [&::-webkit-media-controls-panel]:bg-gray-50 
                   [&::-webkit-media-controls-current-time-display]:text-gray-700
                   [&::-webkit-media-controls-time-remaining-display]:text-gray-700"
      >
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
