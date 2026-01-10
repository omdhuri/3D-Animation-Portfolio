'use client';

import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 120;

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadCount = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = `/assets/frame_${String(i).padStart(3, '0')}.png`;

      img.onload = () => {
        loadCount++;
        const progress = Math.round((loadCount / FRAME_COUNT) * 100);
        setLoadProgress(progress);

        if (loadCount === FRAME_COUNT) {
          console.log(`✅ All ${FRAME_COUNT} frames loaded`);
          setIsLoaded(true);
        }
      };

      loadedImages[i] = img;
    }

    setImages(loadedImages);
  }, []);

  // Render frame to canvas
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index] || !images[index].complete) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const img = images[index];
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerX = (canvas.width - img.width * ratio) / 2;
    const centerY = (canvas.height - img.height * ratio) / 2;

    ctx.drawImage(img, 0, 0, img.width, img.height,
      centerX, centerY, img.width * ratio, img.height * ratio);
  };

  // Handle scroll - SIMPLE calculation
  useEffect(() => {
    if (!isLoaded) return;

    const handleScroll = () => {
      // Animation plays during first 300vh of scroll
      const animationHeight = window.innerHeight * 3; // 300vh
      const scrollProgress = Math.min(1, window.scrollY / animationHeight);
      const frameIndex = Math.floor(scrollProgress * (FRAME_COUNT - 1));

      console.log(`Scroll: ${window.scrollY}px, Progress: ${(scrollProgress * 100).toFixed(0)}%, Frame: ${frameIndex}`);

      renderFrame(frameIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    renderFrame(0); // Initial render
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoaded, images]);

  // Handle canvas resize
  useEffect(() => {
    const updateSize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;

        if (isLoaded) {
          const animationHeight = window.innerHeight * 3;
          const scrollProgress = Math.min(1, window.scrollY / animationHeight);
          const frameIndex = Math.floor(scrollProgress * (FRAME_COUNT - 1));
          renderFrame(frameIndex);
        }
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, [isLoaded, images]);

  return (
    <>
      {/* Fixed canvas background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-screen bg-black z-0"
      />

      {/* Loading screen */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
          <div className="text-white text-2xl mb-4">Loading Experience</div>
          <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            {loadProgress}%
          </div>
          <div className="text-gray-500 mt-2">Preloading {FRAME_COUNT} frames...</div>
        </div>
      )}
    </>
  );
}
