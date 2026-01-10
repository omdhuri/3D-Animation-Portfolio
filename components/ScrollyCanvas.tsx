'use client';

import { useEffect, useRef, useState } from 'react';

const FRAME_COUNT = 120;
const CRITICAL_FRAMES = 30; // Load these first for quick start

export default function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [loadError, setLoadError] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  // Progressive image loading
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = new Array(FRAME_COUNT);
    let loadCount = 0;
    let errorCount = 0;
    const MAX_ERRORS = 10; // Fail graciously if too many errors

    const handleImageLoad = (index: number) => {
      loadCount++;
      const progress = Math.round((loadCount / FRAME_COUNT) * 100);
      setLoadProgress(progress);

      // Mark as loaded when critical frames are ready
      if (loadCount >= CRITICAL_FRAMES && !isLoaded) {
        setIsLoaded(true);
      }

      if (loadCount === FRAME_COUNT) {
        setIsLoaded(true);
      }
    };

    const handleImageError = (index: number) => {
      errorCount++;
      if (process.env.NODE_ENV === 'development') {
        console.warn(`Failed to load frame ${index}`);
      }

      if (errorCount >= MAX_ERRORS) {
        setLoadError(true);
        setIsLoaded(true); // Proceed anyway with available frames
      }

      // Try loading with retry (in case of transient network issue)
      setTimeout(() => {
        if (loadedImages[index] && !loadedImages[index].complete) {
          loadedImages[index].src = `/assets/frame_${String(index).padStart(3, '0')}.png`;
        }
      }, 1000);
    };

    const loadImage = (index: number) => {
      const img = new Image();
      img.src = `/assets/frame_${String(index).padStart(3, '0')}.png`;
      img.onload = () => handleImageLoad(index);
      img.onerror = () => handleImageError(index);
      loadedImages[index] = img;
    };

    // Load critical frames first (0-30)
    for (let i = 0; i < CRITICAL_FRAMES; i++) {
      loadImage(i);
    }

    // Then load remaining frames in background
    setTimeout(() => {
      for (let i = CRITICAL_FRAMES; i < FRAME_COUNT; i++) {
        loadImage(i);
      }
    }, 100);

    setImages(loadedImages);

    return () => {
      // Cleanup: revoke object URLs if any
      loadedImages.forEach((img) => {
        if (img && img.src) {
          try {
            URL.revokeObjectURL(img.src);
          } catch (e) {
            // Ignore cleanup errors
          }
        }
      });
    };
  }, []);

  // Render frame to canvas
  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index] || !images[index].complete) return;

    const ctx = canvas.getContext('2d', { alpha: false }); // Performance optimization
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const img = images[index];
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);
    const centerX = (canvas.width - img.width * ratio) / 2;
    const centerY = (canvas.height - img.height * ratio) / 2;

    ctx.drawImage(
      img,
      0,
      0,
      img.width,
      img.height,
      centerX,
      centerY,
      img.width * ratio,
      img.height * ratio
    );
  };

  // Handle scroll with optimizations
  useEffect(() => {
    if (!isLoaded) return;

    let ticking = false; // RequestAnimationFrame throttling

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const animationHeight = window.innerHeight * 3; // 300vh
          const scrollProgress = Math.min(1, window.scrollY / animationHeight);
          const frameIndex = Math.floor(scrollProgress * (FRAME_COUNT - 1));

          // Only log in development
          if (process.env.NODE_ENV === 'development') {
            // Removed excessive logging
          }

          renderFrame(frameIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    renderFrame(0); // Initial render
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoaded, images]);

  // Handle canvas resize with debouncing
  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;

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

    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateSize, 200);
    };

    updateSize();
    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
    };
  }, [isLoaded, images]);

  return (
    <>
      {/* Fixed canvas background */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-screen bg-black z-0"
        aria-hidden="true"
      />

      {/* Loading screen */}
      {!isLoaded && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center">
          <div className="text-white text-2xl mb-4">
            {loadError ? 'Loading with errors...' : 'Preparing Experience'}
          </div>
          <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            {loadProgress}%
          </div>
          <div className="text-gray-500 mt-2">
            {loadProgress < 25
              ? 'Loading critical frames...'
              : loadProgress < 100
                ? `Loading ${FRAME_COUNT} frames...`
                : 'Almost there...'}
          </div>
          {loadError && (
            <div className="text-yellow-500 text-sm mt-4 max-w-md text-center">
              Some frames failed to load. The experience may be degraded.
            </div>
          )}
        </div>
      )}
    </>
  );
}
