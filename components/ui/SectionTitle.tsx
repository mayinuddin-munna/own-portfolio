import { m, LazyMotion, domAnimation } from "framer-motion";

const SectionTitle = (props) => {
  const { title, subtitle } = props;

  return (
    <LazyMotion features={domAnimation} strict>
      <m.div
        initial={{ x: -350 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
      >
        <span className="text-5xl font-bold">
          {title.split(" ").map((char, index) => {
            if (char === " ") {
              return " ";
            }
            return (
              <span key={index} className="bounce">
                {char}
              </span>
            );
          })}
          _
        </span>
        <p className="text-xl font-bold">{subtitle}</p>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;
