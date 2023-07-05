import { useState } from "react";
import { useSpring, animated } from 'react-spring'

const TextEffect = ({ children }) => {
  const [showOriginalText, setShowOriginalText] = useState(true);
  const originalText = children;

  const randomHexDigit = Math.random().toString(16).slice(2, 5);

  const textProps = useSpring({
    opacity: showOriginalText ? 5 : 0,
    transform: showOriginalText ? "translateY(0)" : "translateY(-50px)",
    config: { duration: 5000 },
    onRest: () => setShowOriginalText(true),
  });

  return (
    <div>
      <animated.h1 style={textProps}>
        {showOriginalText ? originalText : randomHexDigit}
      </animated.h1>
    </div>
  );
};

export default TextEffect;
