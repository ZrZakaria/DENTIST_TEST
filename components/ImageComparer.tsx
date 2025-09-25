
import React, { useState, useRef, useCallback } from 'react';
import { PauseSliderIcon } from './Icons.tsx';

interface ImageComparerProps {
    before: string;
    after: string;
}

export const ImageComparer: React.FC<ImageComparerProps> = ({ before, after }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!isDragging || !containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = (x / rect.width) * 100;
        setSliderPosition(percent);
    }, [isDragging]);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);
    
    const handleMouseMove = (e: React.MouseEvent) => handleMove(e.clientX);
    const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);

    return (
        <div 
            ref={containerRef}
            className="relative w-full aspect-[4/3] select-none cursor-ew-resize overflow-hidden rounded-t-2xl group"
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchEnd={handleMouseUp}
            onTouchCancel={handleMouseUp}
            onTouchMove={handleTouchMove}
        >
            <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable="false" />
            <div 
                className="absolute inset-0 w-full h-full object-cover overflow-hidden pointer-events-none" 
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
                <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover pointer-events-none" draggable="false" />
            </div>

            <div 
                className="absolute top-0 bottom-0 w-1 bg-white/50 pointer-events-none"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
                <div 
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center cursor-ew-resize transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                    onMouseDown={handleMouseDown}
                    onTouchStart={() => setIsDragging(true)}
                >
                    <PauseSliderIcon />
                </div>
            </div>
            
            <span className="absolute top-4 left-4 bg-black/50 text-white text-xs font-bold px-3 py-1 rounded-full pointer-events-none">AVANT</span>
            <span className="absolute top-4 right-4 bg-brand-lime-dark text-white text-xs font-bold px-3 py-1 rounded-full pointer-events-none">APRÈS</span>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white text-sm font-semibold px-4 py-2 rounded-lg pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                &larr; Glissez pour comparer &rarr;
            </div>
        </div>
    );
};