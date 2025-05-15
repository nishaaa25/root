"use client";

import Navbar from "@/components/Navbar";
import useLenis from "@/hooks/useLenis";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // ✅ Correct ScrollTrigger import
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useLenis();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      ".img",
      {
        clipPath: "inset(50% 33% 49% 33%)",
      },
      {
        clipPath: "inset(0% 33% 0% 33%)",
        duration: 2,
        ease: "expo.inOut",
        delay: 1,
      }
    )
      .from(
        ".main-text h1.middle",
        {
          y: "-50vh",
          duration: 2,
          ease: "expo.inOut",
        },
        "<"
      )
      .from(
        ".container nav",
        {
          y: "-100px",
          duration: 2,
          ease: "power2.inOut",
        },
        "<"
      )
      .from(
        ".main-text h1.end",
        {
          y: "50vh",
          duration: 2,
          ease: "expo.inOut",
        },
        "<0.1"
      )
      .from(
        ".desc-text",
        {
          y: "100px",
          duration: 2,
          ease: "power2.inOut",
        },
        "<"
      );

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-cont",
        start: "top 0%",
        end: "bottom 10%",
        scrub: 2,
        pin: true,
      },
    });

    tl2
      .fromTo(
        ".bg-img",
        {
          scale: 1,
        },
        {
          scale: 1.5,
        }
      )
      .fromTo(
        ".img",
        {
          clipPath: "inset(0% 33% 0% 33%)",
        },
        {
          clipPath: "inset(0% 0% 0% 0%)",
        },
        "<"
      )
      .to(
        "h1.left",
        {
          x: -250,
        },
        "<0.1"
      )
      .to(
        "h1.right",
        {
          x: 250,
        },
        "<"
      )
      .to(
        "h1.one",
        {
          x: "50%",
        },
        "<"
      )
      .to(
        "h1.two",
        {
          x: "-50%",
        },
        "<"
      ).to(".sub-text", {
        opacity: 1
      })
  }, []);

  return (
    <div className="w-full relative container">
      <Navbar />
      <div className="w-full relative hero-cont h-[100vh]">
        <div className="relative w-full h-screen pt-[15vh]">
          <div className="main-text absolute  z-10 w-full h-full">
            <div className="h-[70vh] flex items-center justify-center overflow-hidden w-8/12 mx-auto leading-[15vw] text-[15vw] relative">
              <h1 className="end left">R</h1>
              <h1 className="middle one">O</h1>
              <h1 className="middle two">O</h1>
              <h1 className="end right">T</h1>
            </div>
            <p className="w-[30%] absolute text-white text-sm leading-5 lowercase left-15  bottom-[35vh] sub-text opacity-0">
              Root Studio isn&apos;t just a photography studio; it&apos;s a
              place where every frame tells a story, deeply connected to its
              origins. Inspired by the raw, unfiltered beauty of nature and the
              interconnectedness of life, Root Studio believes that every moment
              has depth—just like the roots of a great tree.
            </p>
          </div>
          <div className="w-full relative overflow-hidden">
            <div className="w-full relative mx-auto h-[70vh] img">
              <Image
                src="/img5.jpg"
                alt="img.png"
                fill
                className="object-cover bg-img"
              />
            </div>
          </div>
          <p className="text-center text-lg font-bold absolute w-full z-10 pt-9 desc-text">
            WELCOME
          </p>
        </div>
      </div>
    </div>
  );
}
