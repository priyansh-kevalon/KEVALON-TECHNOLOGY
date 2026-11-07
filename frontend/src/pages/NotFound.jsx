import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16">
      <div className="w-20 h-20 rounded-2xl bg-card border border-secondary/30 flex items-center justify-center text-accent text-3xl font-black font-heading mb-6 shadow-glow-accent">
        404
      </div>
      <h1 className="text-3xl sm:text-5xl font-bold font-heading text-white">
        Coordinates Not Found
      </h1>
      <p className="mt-3 text-gray-400 max-w-md text-sm sm:text-base">
        The system page you are trying to reach does not exist or has been relocated to another sector.
      </p>
      <div className="mt-8 flex gap-4">
        <Button to="/" variant="accent" icon={Home}>
          Return to Base (Home)
        </Button>
      </div>
    </div>
  );
}
