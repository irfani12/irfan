import React from "react";
// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
// import images
import Img1 from "../assets/portfolio-img1.png";
import Img2 from "../assets/portfolio-img2.png";
import Img3 from "../assets/portfolio-img3.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-10 lg:mt-16">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* text */}
            <div className="">
              <h2 className="h2 leading-tight text-accent">
                My Latest <br />
                Work.
              </h2>
              <p className="max-w-sm mb-10">
              Here are some of my projects that I have worked on. To view them all, please refer to my GitHub page.
              </p>
              <a href="https://github.com/irfani12" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-sm">View all projects</button>
              </a>
            </div>

            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/* overlays */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                src={Img1}
                alt=""
                className="group-hover:scale-125 transition-all duration-500 z-50"
              />
              {/* subtitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-40 transition-all duration-500 z-50">
                <span className="text-gradient">Mobile & Web Development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Aplikasi Konesling Menyusui Puskesmas 9 Nopember Banjarmasin</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex flex-col gap-y-10 lg:gap-y-12"
          >
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/* overlays */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                src={Img2}
                alt=""
                className="group-hover:scale-125 transition-all duration-500 z-50"
              />
              {/* subtitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-40 transition-all duration-500 z-50">
                <span className="text-gradient">Web Development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Aplikasi Stok Obat Puskesmas 9 Nopember Banjarmasin</span>
              </div>
            </div>
            {/* image */}
            <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl ">
              {/* overlays */}
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
              {/* img */}
              <img
                src={Img3}
                alt=""
                className="group-hover:scale-125 transition-all duration-500 z-50"
              />
              {/* subtitle */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-40 transition-all duration-500 z-50">
                <span className="text-gradient">Web Development</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                <span className="text-3xl text-white">Aplikasi E-Arsip Puskesmas 9 Nopember Banjarmasin</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
