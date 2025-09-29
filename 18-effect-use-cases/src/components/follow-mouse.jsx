import { useEffect, useRef, useState } from 'react';

export function FollowMouse() {
  const [point, setPoint] = useState({ x: 50, y: 50 });

  const ref = useRef(null);

  useEffect(() => {
    const div = ref.current;
    function handleMove(ev) {
      setPoint({ x: ev.pageX - div.offsetLeft,
        y: ev.pageY - div.offsetTop,
      });
    }

    div.addEventListener('mousemove', handleMove);

    return () =>
      div.removeEventListener('mousemove', handleMove);
  }, []);

  // Wahrscheinlich funktioniert das auch ohne Effect direkt mit onMouseMove-Handler auf dem div

  return (
    <div
      ref={ref}
      style={{
        borderStyle: 'solid',
        height: '200px',
        width: '400px',
        position: 'relative',
        overflow: 'clip',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: `${point.x}px`,
          top: `${point.y}px`,
          height: `16px`,
          width: `16px`,
          backgroundColor: 'blue',
          borderRadius: '50%',
          transform: 'translate3d(-8px,-8px,0)',
          // transition: 'all 150ms ease-in-out',
        }}
      />

    </div>
  );
}
