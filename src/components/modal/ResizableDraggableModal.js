import { useCallback, useEffect, useRef, useState } from "react";
import { Rnd } from "react-rnd";

function ResizableDraggableModal({ children }) {
  const contentRef = useRef();
  const [size, setSize] = useState({ width: 470, height: 300 });
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const calculateCenterPosition = useCallback(() => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth <= 640) {
      setPosition({
        x: (screenWidth - size.width) / 2,
        y: screenHeight - size.height - 10, //
      });
    } else {
      setPosition({
        x: (screenWidth - size.width) / 2,
        y: (screenHeight - size.height) / 2,
      });
    }
  }, [size]);

  function handleDragStop(e, d) {
    setPosition({ x: d.x, y: d.y });
  }

  function handleResizeStop(e, direction, ref, delta, position) {
    setSize({
      width: ref.offsetWidth,
      height: ref.offsetHeight,
    });
    setPosition(position);
  }

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (contentRef.current) {
        const { offsetWidth, offsetHeight } = contentRef.current;
        setSize({ width: offsetWidth, height: offsetHeight });
      }
    });

    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    calculateCenterPosition();

    window.addEventListener("resize", calculateCenterPosition);
    return () => window.removeEventListener("resize", calculateCenterPosition);
  }, [size, calculateCenterPosition]);

  return (
    <Rnd
      className="bg-white rounded-lg shadow-lg overflow-hidden z-10"
      size={{ width: size.width, height: size.height }}
      position={{ x: position.x, y: position.y }}
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
      bounds="parent"
    >
      <div ref={contentRef} className="p-4">
        {children}
      </div>
    </Rnd>
  );
}

export default ResizableDraggableModal;
