import React from "react";

const BackGlow = () => {
  return (
    <svg
      width={500}
      height={500}
      viewBox="0 0 1680 1354"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute inset-0"
    >
      <g style={{ mixBlendMode: "screen" }} filter="url(#filter0_f_2194_40)">
        <ellipse cx={840} cy="513.5" rx={286} ry="286.5" fill="#208BDF" />
      </g>
      <defs>
        <filter
          id="filter0_f_2194_40"
          x={0}
          y={-327}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation={277}
            result="effect1_foregroundBlur_2194_40"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default BackGlow;
