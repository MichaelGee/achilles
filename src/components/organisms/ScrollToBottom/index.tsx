import React, { useRef, useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const ScrollToBottom = ({ children }: Props) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      // @ts-ignore
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [children]);

  return (
    <div ref={scrollRef} style={{ marginBottom: "4rem", overflowY: "scroll" }}>
      {children}
    </div>
  );
};

export default ScrollToBottom;
