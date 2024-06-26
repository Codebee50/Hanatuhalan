import { motion } from "framer-motion";

const ObjectiveCard = ({ imgURL, label, body, index }) => {
  const objectiveCardVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.div
      className={`flex flex-col items-start justify-start w-full shadow-md`}
      variants={objectiveCardVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeInOut", delay: index*0.3}}
    >
      <div className="w-full md:max-w-lg">
        <img src={imgURL} alt="" className="w-full" />
      </div>
      <article className="w-full max-w-lg p-10 flex flex-col relative">
        <h2 className="font-outfit font-bold">{label}</h2>
        {body.map((item) => (
          <p key={item} className="mt-5 text-sm opacity-70 ">
            {item}
          </p>
        ))}
      </article>
    </motion.div>
  );
};

export default ObjectiveCard;
