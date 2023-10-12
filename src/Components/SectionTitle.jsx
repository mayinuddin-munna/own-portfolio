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
        <span style={{ fontWeight: "bold", fontSize: "3rem" }}>
          {title.split("").map((char, index) => {
            if (char === " ") {
              return " ";
            }
            return (
              <span key={index} className="bounce">
                {char}
              </span>
            );
          })}_
        </span>
        <p
          style={{
            margin: "0 0 .4rem 0",
            fontSize: "1.3rem",
            fontWeight: "700",
          }}
        >
          {subtitle}
        </p>
      </m.div>
    </LazyMotion>
  );
};

export default SectionTitle;
