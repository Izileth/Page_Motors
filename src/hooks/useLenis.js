import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export function useLenis() {
    useEffect(() => {
        const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1 - Math.pow(1 - t, 3)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2,
        });

        function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
        lenis.destroy();
        };
    }, []);
}