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
        <span
          style={{
            textTransform: "uppercase",
            fontFamily: "Morganite Black",
            fontSize: ".8rem",
            fontWeight: "600",
          }}
        >
          {subtitle}
        </span>
        <br />
        <span>
          {title.split("").map((char, index) => {
            if (char === " ") {
              return " ";
            }
            return (
              <span key={index} className="bounce">
                {char}
              </span>
            );
          })}
        </span>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;
