import { motion } from "framer-motion";
import LargeText from "../components/LargeText";

const MissionVission = () => {
  return (
    <section
      className="w-full mt-10 flex flex-col padding-x scroll-mt-[60px] min-h-[60vh]"
      id="mv"
    >
      <motion.div className="mt-20"
      initial={{
        opacity:0, y:-200
      }}
      whileInView={{
        opacity:1, y:0
      }}
      transition={{delay:0.1, duration:1, ease: 'easeInOut'}}
      viewport={{once:true}}
      >
        <p className="font-bold text-dark-green">OUR MISSION</p>
        {/* <p className="sm:max-w-[80%] lg:max-w-[50%] text-dark-txt text-xl md:text-2xl font-poppins">
          To provide holistic support and empowerment to widows and orphans,
          ensuring their socio-economic well-being, educational advancement, and
          emotional resilience through various programs and initiatives.
        </p> */}

        <LargeText text={`To provide holistic support and empowerment to widows and orphans,
          ensuring their socio-economic well-being, educational advancement, and
          emotional resilience through various programs and initiatives.`}></LargeText>
      </motion.div>

      <motion.div className="mt-10 flex flex-col justify-end items-end text-end"
      initial={{
        opacity:0, y:300
      }}
      whileInView={{
        opacity:1, y:0
      }}
      transition={{delay:0.1, duration:1, ease:'easeInOut'}}
      viewport={{once:true}}
      >
        <p className="font-bold text-dark-green">OUR VISSION</p>
        {/* <p className="sm:max-w-[80%] lg:max-w-[50%] text-dark-txt text-xl md:text-2xl font-poppins">
          To create a society where widows and orphans are empowered, uplifted,
          and integrated, fostering a community where they can thrive, find
          hope, and build a brighter future for themselves and generations to
          come.
        </p> */}

        <LargeText text={`To create a society where widows and orphans are empowered, uplifted,
          and integrated, fostering a community where they can thrive, find
          hope, and build a brighter future for themselves and generations to
          come.`}/>
      </motion.div>
    </section>
  );
};

export default MissionVission;
