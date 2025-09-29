import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// ✅ Register the ScrollTrigger plugin once
gsap.registerPlugin(ScrollTrigger);

const useGsapAnimation = () => {
  useEffect(() => {
    // Hero animation
    gsap.fromTo(
      '.hero-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.hero-subtitle',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
    );

    gsap.fromTo(
      '.hero-cta',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.6, ease: 'back.out(1.7)' }
    );

    // Role cards animation
    gsap.fromTo(
      '.role-card',
      { opacity: 0, y: 60, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.roles-grid',
          start: 'top 80%',
        },
      }
    );

    // Why join section animation
    gsap.fromTo(
      '.why-join-item',
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.why-join-section',
          start: 'top 70%',
        },
      }
    );

    // Testimonial animation
    gsap.fromTo(
      '.testimonial-card',
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.testimonials-section',
          start: 'top 70%',
        },
      }
    );

    // Form animation
    gsap.fromTo(
      '.application-form',
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.application-section',
          start: 'top 70%',
        },
      }
    );
  }, []);

  return null;
};

export default useGsapAnimation;
