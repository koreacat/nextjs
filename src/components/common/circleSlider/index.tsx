import {useEffect, useState} from "react";

const CircleSlider = () => {
  const [d, setD] = useState('');

  useEffect(() => {
    setD(describeArc(150, 150, 100, 220, 500));
  }, []);

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
      "M", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;
  };

  return (
    <div>
      <svg width={500} height={500}>
        <path d={d} fill="none" stroke="#446688" strokeWidth="20" strokeLinecap="round"/>
        <circle id="handle" cx="220" cy="220" r="15" cursor="pointer"/>
      </svg>
    </div>
  )
};

export default CircleSlider;
