import React from 'react';

export default function Car3({
  className,
  onRef,
  leftBlinker,
  rightBlinker,
}) {
  const rightBlinkerColor = rightBlinker ? 'orange' : 'white';
  const leftBlinkerColor = leftBlinker ? 'orange' : 'white';
  return (
    <svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width={200} height={200} ref={onRef} className={className}>
      <title>car3</title>
      <path d="M123.77,4.92H76.23c-12.6,0-22.81,14-22.81,26.62V172.26a22.82,22.82,0,0,0,22.81,22.82h47.54a22.82,22.82,0,0,0,22.82-22.82V31.54C146.58,18.94,136.37,4.92,123.77,4.92Zm18.82,57.36v47.16l-11,1.42V91.44ZM136.8,48.48c-4.11,15.77-9,34.41-9,34.41H72.16l-9-34.41S99.1,36.28,136.8,48.48ZM68.57,92.71v18.16l-11-1.41V63.56Zm-11,65.6V116.43l11,1.39V151Zm6.3,11.9,9-13.49h55.68l9,13.49Zm67.73-20.53V117.86l11-1.44V157Z" style={{fill: 'currentColor'}} />
      <path d="M55.19,27.45S57,19,61.25,14.33a27.83,27.83,0,0,1,7.92-6.44H71L63.11,27.45Z" style={{fill: leftBlinkerColor}} />
      <path d="M144.81,27.45S143,19,138.75,14.33a27.83,27.83,0,0,0-7.92-6.44H129l7.92,19.56Z" style={{fill: rightBlinkerColor}} />
      <path d="M143.33,177.87s-1.24,6.44-4,9.16a33.14,33.14,0,0,1-4.83,4.09v-7.43l6.31-5.82Z" style={{fill: rightBlinkerColor}} />
      <path d="M56.55,177.87s1.24,6.44,4,9.16a33.14,33.14,0,0,0,4.83,4.09v-7.43L59,177.87Z" style={{fill: leftBlinkerColor}} />
    </svg>
  );
}
