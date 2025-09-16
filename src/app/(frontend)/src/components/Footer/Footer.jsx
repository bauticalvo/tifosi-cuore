import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Slider_1 } from "./Slide_1";
import { Slider_2 } from "./Slide_2";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const slides = [Slider_1, Slider_2];

  useEffect(() => {
    const scrollContainer = footerRef.current;
    if (!scrollContainer) return;

    gsap.to(scrollContainer, {
      x: () => -(scrollContainer.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainer,
        start: "top top",
        end: () => `+=${scrollContainer.scrollWidth /1.5}`,
        scrub: 0.3,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);


  return (
    <>
   <div ref={footerRef} className="flex h-screen  max-lg:hidden max-lg:w-0 max-lg:h-0  w-[266vw]  ">
      {slides.map((SlideComponent, index) => (
        <SlideComponent key={index} />
      ))}
   </div>
   <section className="hidden max-lg:flex flex-col max-lg:w-screen max-lg:h-auto">
      <Slider_1 />
      <Slider_2 />
     </section>
   </>
  );
};

export default Footer;
