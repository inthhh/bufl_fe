import React, { ReactNode, useRef } from "react";
import { Transition } from "react-transition-group";

interface IProps {
  children: React.ReactNode;
}

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles: { [key: string]: any } = {
  entering: { opacity: 0.8 },
  entered: { opacity: 1 },
  exiting: { opacity: 0.5 },
  exited: { opacity: 0 },
};

const Fade = ({ children }: IProps) => {
  const [inProp, setInProp] = React.useState(false);
  const nodeRef = useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    setInProp(true);
    return () => setInProp(false);
  }, []);

  return (
    <Transition in={inProp} timeout={duration} nodeRef={nodeRef}>
      {(state) => (
        <div
          ref={nodeRef}
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

export default Fade;
