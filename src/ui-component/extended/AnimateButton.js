import PropTypes from "prop-types";
import React from "react";
import { motion, useCycle } from "framer-motion";

const AnimateButton = React.forwardRef(
  ({ children, type, direction, offset, scale }, ref) => {
    let offset1;
    let offset2;
    switch (direction) {
      case "up":
      case "left":
        offset1 = offset;
        offset2 = 0;
        break;
      case "right":
      case "dow":
      default:
        offset1 = 0;
        offset2 = offset;
        break;
    }

    const [x, cycleX] = useCycle(offset1, offset2);
    const [y, cycleY] = useCycle(offset1, offset2);

    switch (type) {
      case "rotate":
        return (
          <motion.div
            ref={ref}
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 2,
              repeatDelay: 0,
            }}
          >
            {children}
          </motion.div>
        );
      case "slide":
        if (direction === "up" || direction === "down") {
          return (
            <motion.div
              ref={ref}
              animate={{ y }}
              onHoverEnd={() => cycleY()}
              onHoverStart={() => cycleY()}
            >
              {children}
            </motion.div>
          );
        }
        return (
          <motion.div
            ref={ref}
            animate={{ x }}
            onHoverEnd={() => cycleX()}
            onHoverStart={() => cycleX()}
          >
            {children}
          </motion.div>
        );

      case "scale":
      default:
        if (typeof scale === "number") {
          // eslint-disable-next-line no-param-reassign
          scale = {
            hover: scale,
            tap: scale,
          };
        }
        return (
          <motion.div
            ref={ref}
            whileHover={{ scale: scale.hover }}
            whileTap={{ scale: scale.tap }}
          >
            {children}
          </motion.div>
        );
    }
  }
);

AnimateButton.propTypes = {
  children: PropTypes.node,
  offset: PropTypes.number,
  type: PropTypes.oneOf(["slide", "scale", "rotate"]),
  direction: PropTypes.oneOf(["up", "down", "left", "right"]),
  scale: PropTypes.oneOfType([PropTypes.number, PropTypes.object]),
};

AnimateButton.defaultProps = {
  type: "scale",
  offset: 10,
  direction: "right",
  scale: {
    hover: 1,
    tap: 0.9,
  },
};

export default AnimateButton;
