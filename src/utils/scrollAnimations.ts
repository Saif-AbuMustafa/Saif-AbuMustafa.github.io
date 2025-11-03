/**
 * Premium Scroll Animation System
 * Inspired by VisionBank's "Rooted in Ambition" style
 * Features: Fade-in + Translate-up with parallax depth
 */

interface AnimationConfig {
  threshold?: number;
  rootMargin?: string;
  staggerDelay?: number;
}

class ScrollAnimationController {
  private observers: Map<Element, IntersectionObserver> = new Map();
  private parallaxElements: Set<Element> = new Set();
  private rafId: number | null = null;
  private lastScrollY = 0;

  constructor() {
    this.initParallax();
  }

  /**
   * Initialize scroll-reveal animations
   */
  initScrollReveal(config: AnimationConfig = {}) {
    const {
      threshold = 0.15,
      rootMargin = '0px 0px -10% 0px',
      staggerDelay = 150,
    } = config;

    // Find all elements with data-animate attribute
    const elements = document.querySelectorAll('[data-animate]');

    elements.forEach((element, index) => {
      const animationType = element.getAttribute('data-animate');
      const delay = element.getAttribute('data-delay');
      
      // Set initial state
      (element as HTMLElement).style.opacity = '0';
      (element as HTMLElement).style.transform = 'translateY(35px)';
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const computedDelay = delay ? parseInt(delay) : index * staggerDelay;
              
              setTimeout(() => {
                entry.target.classList.add('animate-reveal');
                
                // Handle stagger children if specified
                if (animationType === 'stagger') {
                  this.staggerChildren(entry.target as HTMLElement, staggerDelay);
                }
              }, computedDelay);
              
              // Unobserve after animation
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold, rootMargin }
      );

      observer.observe(element);
      this.observers.set(element, observer);
    });
  }

  /**
   * Stagger animation for child elements
   */
  private staggerChildren(parent: HTMLElement, delay: number) {
    const children = parent.querySelectorAll('[data-stagger-child]');
    children.forEach((child, index) => {
      (child as HTMLElement).style.opacity = '0';
      (child as HTMLElement).style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        child.classList.add('animate-reveal');
      }, index * delay);
    });
  }

  /**
   * Initialize parallax scroll effects
   */
  private initParallax() {
    // Debounced scroll handler
    const handleScroll = () => {
      if (this.rafId) return;
      
      this.rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const delta = scrollY - this.lastScrollY;
        
        this.parallaxElements.forEach((element) => {
          const speed = parseFloat(element.getAttribute('data-parallax') || '0.3');
          const rect = element.getBoundingClientRect();
          
          // Only animate elements in viewport
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            const offset = scrollY * speed;
            (element as HTMLElement).style.transform = `translate3d(0, ${offset}px, 0)`;
          }
        });
        
        this.lastScrollY = scrollY;
        this.rafId = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
  }

  /**
   * Register element for parallax
   */
  registerParallax(selector: string = '[data-parallax]') {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      this.parallaxElements.add(el);
      // Add GPU acceleration
      (el as HTMLElement).style.willChange = 'transform';
      (el as HTMLElement).style.transform = 'translate3d(0, 0, 0)';
    });
  }

  /**
   * Cleanup observers
   */
  destroy() {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers.clear();
    this.parallaxElements.clear();
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }
}

// Export singleton instance
export const scrollAnimations = new ScrollAnimationController();

// Auto-initialize on DOM ready
if (typeof window !== 'undefined') {
  const init = () => {
    scrollAnimations.initScrollReveal();
    scrollAnimations.registerParallax();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}
