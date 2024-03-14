import React, { useRef, useState,useEffect } from "react";
import Jobs from './Jobs'
import Life from './Life'
const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
      const scrollObserver = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
              setIsVisible(true);
              scrollObserver.unobserve(entry.target);
          }
      });

      scrollObserver.observe(ref.current);

      return () => {
          if (ref.current) {
              scrollObserver.unobserve(ref.current);
          }
      };
  }, []);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};
function Carrers() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  
  return (
    <div className=' w-screen pt-8 pb-8'>
      <RevealOnScroll>

      <Jobs/>
      </RevealOnScroll>
    
      <RevealOnScroll>

      <Life/>
      </RevealOnScroll>
    </div>
  )
}

export default Carrers
