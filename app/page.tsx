import HeroSection from "@/components/home-section";
import { div, section } from "framer-motion/m";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="relative overflow-hidden h-screen ">
        <div className="p-8 border-1 border-[#545454] m-12 rounded-[50px]">
          <div className="flex flex-col md:flex-row h-full p-12 ">
            <div className="w-full p-8 relative z-10 text-white flex items-center">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-urbanist font-extralight leading-tight md:w-1/2 z-20 ">
                Born in a supernova of <b> code and creativity</b> , Refly isn't
                just an agency it's a <b>rebellion against boring </b>. We're
                the rogue pilots of the digital galaxy, fusing{" "}
                <b> AI's raw horsepower</b>
                with human spark to launch brands into orbits unseen. From{" "}
                <b> UI/UX </b>
                that hijacks hearts, <b> video edits </b> that detonate
                virality, to
                <b> branding </b> that rewrites destinies, our AI-driven crew
                thrives on <b>chaos and precision.</b>{" "}
              </h1>
              <div className="absolute top-10 right-10 bottom-0 w-full md:w-1/2 flex items-center justify-center z-0">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/HeroSecondVideo.mp4" type="video/mp4" />
                  Your browser does not support video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
