import React from 'react';

export default function Car(props) {
  return (
    <svg id="car" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width={200} height={200} {...props}>
      <defs>
        <style dangerouslySetInnerHTML={{__html: ".cls-1{fill:currentColor;}.cls-1,.cls-10,.cls-11,.cls-12,.cls-13,.cls-2,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke:#000;}.cls-1,.cls-13,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-7,.cls-8,.cls-9{stroke-miterlimit:10;}.cls-2{fill:currentColor;}.cls-3{stroke:currentColor;}.cls-4{fill:#ffb600;}.cls-5{fill:currentColor;}.cls-6{fill:#fff;}.cls-7{fill:currentColor;}.cls-8{fill:currentColor;}.cls-10,.cls-11,.cls-12,.cls-13{fill:none;}.cls-10,.cls-11,.cls-12{stroke-linejoin:round;}.cls-10{stroke-width:0.5px;}.cls-12,.cls-13{stroke-width:0.25px;}" }} />
      </defs>
      <title>car</title>
      <path className="cls-1" d="M95.31,145.53a.37.37,0,0,0,.29.17h6.79a.52.52,0,0,0,.44-.56.47.47,0,0,0-.44-.51H95.61a.47.47,0,0,0-.42.51A.74.74,0,0,0,95.31,145.53Zm-62.08-79c0,.81,1.1,1,1.1,1a16,16,0,0,0,3.42-.12c2.05-.29,2-.85,2-.85V65.23c0-.71-1.25-.66-1.25-.66-3,0-5,.59-5.15.81A3.53,3.53,0,0,0,33.23,66.58Zm22.86-2a.47.47,0,0,0,.44.51h6.77a.47.47,0,0,0,.44-.51c0-.34-.2-.56-.44-.56H56.53a.39.39,0,0,0-.32.15A.7.7,0,0,0,56.09,64.57Zm39.52,0h6.79a.58.58,0,0,0,0-1.12H95.61a.37.37,0,0,0-.29.17.68.68,0,0,0-.12.39C95.19,64.25,95.39,64.52,95.61,64.52ZM56.21,144.95a.39.39,0,0,0,.32.15h6.77a.47.47,0,0,0,.44-.51.52.52,0,0,0-.44-.56H56.53a.52.52,0,0,0-.44.56A.6.6,0,0,0,56.21,144.95Zm-31.8-40.39c.1,19.39,1.83,24.86,2.64,26.57s1.93,3.93,5.84,4.59,22.18-4.08,24.54-4.71c2.17-.59,2.49-1.54,2.32-2.42a88.65,88.65,0,0,1,9.38-.78c11.48-.32,32.92,0,40.52,2.69l.1,0a2.56,2.56,0,0,0,1.59,2.88c2.44,1.07,18.76,7.79,23.76,7.74a9.42,9.42,0,0,0,7.47-4.27,65.83,65.83,0,0,0,2.93-6.28c1.12-2.78,3.52-16.27,3.52-25.52V104c0-9.26-2.39-22.74-3.52-25.55a62.24,62.24,0,0,0-2.93-6.28,9.37,9.37,0,0,0-7.47-4.23c-5-.07-21.32,6.64-23.76,7.72a2.56,2.56,0,0,0-1.59,2.88l-.1,0c-7.6,2.71-29,3-40.52,2.69a75.06,75.06,0,0,1-9.38-.78c.15-.88-.15-1.81-2.32-2.39C55,77.42,36.8,72.71,32.89,73.36a7,7,0,0,0-5.84,4.57C26.25,79.69,24.54,85.21,24.41,104.55Zm100.43,37.76c0-.73.59-.81,1.34-.71a7.94,7.94,0,0,0-.81,0c-.85.07-.32,1.54-.32,1.54a1.37,1.37,0,0,0-1.2,1.15c-.1.34-.32,1.34-.59,2.54l-.07,0H99.34s-34.29-.44-35.8-.44-20.54-.49-23.67-.49a96.44,96.44,0,0,1-10.72-1.32s-6.47-.93-11-2.05c0,0,.32-1-.12-1.22s-1.93-.71-3.57-1.47a12.4,12.4,0,0,1-4.27-3.71A23.32,23.32,0,0,1,8.71,132,78,78,0,0,1,7,119.3a2.15,2.15,0,0,1,.63-1.91h0v-.12l-.34-12.19v-1.15l.34-12.16v-.1h0a2.3,2.3,0,0,1-.64-2,77.58,77.58,0,0,1,1.66-12.6,21.26,21.26,0,0,1,1.51-4.23,11.79,11.79,0,0,1,4.27-3.66c1.64-.81,3.15-1.25,3.57-1.51s.12-1.22.12-1.22c4.49-1.15,11-2.05,11-2.05a98.17,98.17,0,0,1,10.72-1.29c3.15,0,22.18-.49,23.67-.49s35.8-.49,35.8-.49h24c.27,1.22.49,2.22.59,2.56a1.45,1.45,0,0,0,1.2,1.15s-.54,1.44.32,1.51a6.91,6.91,0,0,0,.73,0c-.73.1-1.27,0-1.27-.68a11.75,11.75,0,0,0-1.15,1.81l.24-.63s-19,.1-29.31.1h-.07s.34,0-.34-.39-3.83-.42-5-.42-1.05.71-1.05.71c-1.47-.15-25.4.51-31.19.71H55.55c-1-.07-6.28.15-7.64.22a9.17,9.17,0,0,0-3,.73c2.1,1.73,7.79,3.13,7.79,3.13a88.54,88.54,0,0,0,9.62,2.86l1.1.22c8.3,1.88,14.9,1.88,22.66,1.9l4.3-.15s13.7-.93,18.51-2.39,14.36-5.52,14.36-5.52h0A44.14,44.14,0,0,0,129.06,67L128,66.58l-.46-.78a.36.36,0,0,0,0-.39c-.27-1.22-.54-2.3-.83-3.22H141.4s3.32.22,6.25.12,25-.22,30.75,1.66a2.87,2.87,0,0,1,1.22,1.34l0,.12a6,6,0,0,0-1.66-.17l.07.07s-.15.71,2.76,2.64a16.85,16.85,0,0,1,4,3.39,14.17,14.17,0,0,1,1.81,3c1.34,3,2.15,3.66,4.79,16.53a5.6,5.6,0,0,0,1-1.86h0a35.56,35.56,0,0,1,2,7.25l-.51-.24v0l-1-.42,0,0s.22,6.18.22,8.67v.49c0,2.49-.22,8.72-.22,8.72v0l1.42-.78a49.13,49.13,0,0,1-1.9,7.25,5.24,5.24,0,0,0-.9-1.73c-2.64,12.82-3.42,13.53-4.79,16.49a12.63,12.63,0,0,1-1.78,3,17.63,17.63,0,0,1-4,3.44c-2.93,1.9-2.76,2.61-2.76,2.61l-.07.07a5.31,5.31,0,0,0,1.42-.1l0,.17-1.34,1.22,0,.12c-6.23,1.81-27.55,1.66-30.41,1.54s-6.25.12-6.25.12H126.82c.27-.93.56-2,.83-3.22a.32.32,0,0,0,0-.37l.46-.76,1.07-.44c-.81-.68-5.69-2.61-5.84-2.69h0s-9.62-4.08-14.43-5.54-18.51-2.39-18.51-2.39l-4.3-.15c-7.77,0-14.36.07-22.66,1.91l-1.1.22c-3,.68-6.11,1.66-9.62,2.86,0,0-5.69,1.39-7.79,3.13a9.8,9.8,0,0,0,3,.78c1.34,0,6.59.24,7.64.22a.37.37,0,0,1,.2,0s.44,0,1.22,0c5.79.15,29.7.81,31.19.66,0,0-.12.71,1.05.71s4.35,0,5-.42c.39-.22.44-.32.44-.37,24.35-.07,28.65,0,29.28,0v0s.2,0,0,0l-.22-.56A8.94,8.94,0,0,0,124.84,142.31Z" />
      <path className="cls-2" d="M193.74,96.05l.51.24a47.82,47.82,0,0,1-.07,16.41l-1.42.78v0s.22-6.2.22-8.72v-.49c0-2.49-.22-8.67-.22-8.67l0,0Z" />
      <path className="cls-3" d="M192.27,120a46.28,46.28,0,0,0,1.9-7.25,47.21,47.21,0,0,0,.07-16.41,34.94,34.94,0,0,0-2-7.25h0a4.21,4.21,0,0,0,.1-1.86c-.32-2-1.49-11-4.93-15.95l-.59-.81a13.42,13.42,0,0,0-7.28-5l0-.12A2.87,2.87,0,0,0,178.37,64s7.89.37,11.23,5.45S193.66,78,193.66,78l0,.1s.68,3.27.68,3.27l1.42,7.82-.22,1.54s.66,9.82.73,13.85v.71c0,4.35-.73,13.11-.73,13.11l.22,1.54L193.39,132s-.44,2.56-3.79,7.64-11.23,5.45-11.23,5.45a1.4,1.4,0,0,1-.34.1v-.1l1.34-1.22,0-.17c1.76-.34,4.66-1.54,7.52-5a6.83,6.83,0,0,0,.59-.81c3.44-5,4.62-14,4.93-15.95A4.28,4.28,0,0,0,192.27,120Z" />
      <path className="cls-1" d="M193.74,96v0l-1-.46Z" />
      <path className="cls-4" d="M192.27,120a4.26,4.26,0,0,1,.12,2c-.32,2-1.49,11-4.93,15.95l-.12-.07-2.54-.1a14.55,14.55,0,0,0,1.78-3c1.34-3,2.15-3.66,4.79-16.49A4.67,4.67,0,0,1,192.27,120Z" />
      <path className="cls-4" d="M192.39,87.19a4.24,4.24,0,0,1-.1,1.86,5.29,5.29,0,0,1-1,1.86c-2.64-12.87-3.42-13.55-4.79-16.53a13.56,13.56,0,0,0-1.81-3l2.56-.1.12-.1C190.9,76.22,192.07,85.26,192.39,87.19Z" />
      <path className="cls-4" d="M187.46,71.24l-.12.1-2.56.1a17.36,17.36,0,0,0-4-3.39c-2.93-2-2.76-2.64-2.76-2.64l-.07-.07a6,6,0,0,1,1.66.17,13.64,13.64,0,0,1,7.28,5C187.07,70.7,187.26,70.95,187.46,71.24Z" />
      <path className="cls-4" d="M187.34,137.79l.12.07-.59.81c-2.86,3.49-5.76,4.69-7.52,5a4.43,4.43,0,0,1-1.42.1l.07-.07s-.15-.71,2.76-2.61a16.56,16.56,0,0,0,4-3.44Z" />
      <path id="car-path1" className="cls-5" d="M149.07,104v1.07c0,9.26-2.39,22.74-3.52,25.52a65.87,65.87,0,0,1-2.93,6.28,9.42,9.42,0,0,1-7.47,4.27c-5,0-21.32-6.69-23.76-7.74a2.53,2.53,0,0,1-1.59-2.88,5.49,5.49,0,0,1,.17-.71c2.83-7.35,3.15-24.91,3.15-24.91v-.68S112.8,86.7,110,79.35a3.36,3.36,0,0,1-.17-.76,2.62,2.62,0,0,1,1.59-2.88c2.44-1.07,18.76-7.79,23.76-7.72a9.3,9.3,0,0,1,7.47,4.23,65.87,65.87,0,0,1,2.93,6.28C146.67,81.28,149.07,94.76,149.07,104Zm-3.44,2.1V103a100.74,100.74,0,0,0-2.74-21.69c-1.12-5.47-5.69-12.24-5.69-12.24-6.81-.2-22.69,6.35-25,7.38s-1.2,3.39-1.2,3.39c2.64,6.86,2.83,23.32,2.83,23.32v2.71s-.2,16.56-2.83,23.47a2.37,2.37,0,0,0,1.2,3.25c2.3,1,18.17,7.57,25,7.35,0,0,4.57-6.76,5.69-12.21A101,101,0,0,0,145.62,106.12Z" />
      <path className="cls-6" d="M145.62,103v3.08a101.51,101.51,0,0,1-2.74,21.69c-1.12,5.45-5.69,12.21-5.69,12.21-6.81.22-22.69-6.35-25-7.35a2.35,2.35,0,0,1-1.2-3.25c2.64-6.91,2.83-23.47,2.83-23.47v-2.71s-.2-16.46-2.83-23.32c0,0-1.05-2.39,1.2-3.39s18.17-7.57,25-7.38c0,0,4.57,6.77,5.69,12.24A99.94,99.94,0,0,1,145.62,103Z" />
      <path className="cls-1" d="M128,66.65l1.07.44a44.15,44.15,0,0,1-5.84,2.64l.42-1.1a11.76,11.76,0,0,1,1.15-1.81c0,.71.54.76,1.27.68a2.41,2.41,0,0,0,1.44-.29C128.09,67,128,66.65,128,66.65Z" />
      <path className="cls-1" d="M129.11,142l-1.07.44s0-.39-.56-.63a2.29,2.29,0,0,0-1.29-.24c-.78-.1-1.34,0-1.34.71a11.08,11.08,0,0,1-1.12-1.78v0l-.44-1.12A44.76,44.76,0,0,1,129.11,142Z" />
      <path className="cls-7" d="M127.57,65.87l.46.78a1.39,1.39,0,0,1-.49.56,2.35,2.35,0,0,1-.61.17c-.29,0-.59.1-.83.12a6.5,6.5,0,0,1-.73,0c-.85-.07-.32-1.51-.32-1.51a3,3,0,0,0,2.05.12h0A.75.75,0,0,0,127.57,65.87Z" />
      <path className="cls-7" d="M128,142.48l-.46.76a.81.81,0,0,0-.42-.2h0a2.93,2.93,0,0,0-2.1.15s-.54-1.47.32-1.54c.24,0,.54,0,.81,0s.49.07.76.12a1.56,1.56,0,0,1,.54.15A1.38,1.38,0,0,1,128,142.48Z" />
      <path className="cls-1" d="M127.6,65.48a.36.36,0,0,1,0,.39l0,0a1.12,1.12,0,0,1-.44.27h0a5.83,5.83,0,0,1-2.05-.12,1.45,1.45,0,0,1-1.2-1.15c-.1-.34-.32-1.34-.59-2.56C122.71,59.64,122,56,122,56a1.88,1.88,0,0,1,2.42.71,20.23,20.23,0,0,1,2.37,5.52A28.2,28.2,0,0,1,127.6,65.48Z" />
      <path className="cls-1" d="M127.57,143.26a.32.32,0,0,1,0,.37c-.27,1.22-.54,2.3-.83,3.22a20.87,20.87,0,0,1-2.39,5.52,1.85,1.85,0,0,1-2.42.71s.76-3.59,1.32-6.2c.27-1.22.49-2.22.59-2.54a1.41,1.41,0,0,1,1.2-1.15,6.38,6.38,0,0,1,2.1-.15h0a1,1,0,0,1,.37.24Z" />
      <path className="cls-6" d="M123.94,68l-.24.63a5,5,0,0,0-.42,1.1s-9.55,4-14.36,5.52S90.4,77.66,90.4,77.66c.12-3.08,4.18-9.52,4.18-9.52h.07C104.93,68.11,123.94,68,123.94,68Z" />
      <path className="cls-6" d="M123.69,140.5l.22.56c-.63,0-4.93-.12-29.28,0a.09.09,0,0,0-.07,0s-4.05-6.42-4.18-9.52c0,0,13.7.93,18.51,2.39s14.36,5.52,14.36,5.52a7.4,7.4,0,0,0,.44,1.15Z" />
      <path className="cls-1" d="M113.12,104.21v.68s-.32,17.56-3.15,24.91a2.91,2.91,0,0,0-.17.71l-.1,0c-7.6-2.69-29-3-40.52-2.69a88.65,88.65,0,0,0-9.38.78,116.65,116.65,0,0,1-1.34-13.9c-.29-5.47-.15-9.92-.15-9.92v-.49s-.12-4.44.15-9.92a116.63,116.63,0,0,1,1.34-13.9,75.07,75.07,0,0,0,9.38.78c11.48.32,32.92,0,40.52-2.69l.1,0a3.36,3.36,0,0,0,.17.76C112.8,86.67,113.12,104.21,113.12,104.21Z" />
      <path className="cls-7" d="M102.39,63.42a.58.58,0,0,1,0,1.12H95.61c-.22,0-.42-.27-.42-.56a.68.68,0,0,1,.12-.39.37.37,0,0,1,.29-.17Z" />
      <path className="cls-7" d="M102.39,144.63a.47.47,0,0,1,.44.51.52.52,0,0,1-.44.56H95.61a.37.37,0,0,1-.29-.17.67.67,0,0,1-.12-.39.47.47,0,0,1,.42-.51h6.79Z" />
      <path className="cls-8" d="M94.65,141s0,.15-.44.37c-.68.42-3.83.42-5,.42s-1.05-.71-1.05-.71a.51.51,0,0,0,0-.15s0,0,0-.1c-.2-.78-.68-3-1.12-5.13,0-.15-.07-.29-.1-.44a2.84,2.84,0,0,0-.1-.44c0-.07,0-.15,0-.22-.12-.56-.22-1.1-.32-1.56,0-.22-.1-.44-.12-.64h0c0-.15,0-.29-.07-.41a.09.09,0,0,0,0-.07s0-.12,0-.17a.09.09,0,0,0,0-.07.15.15,0,0,0,0-.1.18.18,0,0,0,0-.1.09.09,0,0,0,0-.07v0h0a.09.09,0,0,0,0-.07v0l4.3.15c.12,3.08,4.18,9.52,4.18,9.52l.17.07Z" />
      <path className="cls-8" d="M94.21,67.72c.68.39.34.39.34.39s-4.05,6.42-4.18,9.52l-4.3.15v-.07c0-.15.1-.46.17-.88a1,1,0,0,0,0-.27v0c0-.07,0-.17,0-.24s0-.2,0-.29,0-.17,0-.24c.51-2.54,1.37-6.62,1.61-7.57v0s0,0,0,0,0,0,0-.07-.12-.71,1.05-.71S93.53,67.31,94.21,67.72Z" />
      <path className="cls-6" d="M88.16,68s0,0,0,.07,0,0,0,0,0,0,0,0c-.27,1-1.1,5.06-1.61,7.57,0,.07,0,.17,0,.24a1.23,1.23,0,0,0,0,.29c0,.07,0,.17,0,.24v0a1.24,1.24,0,0,0,0,.27c-.07.42-.15.73-.17.88v.07c-7.77,0-14.36,0-22.66-1.9A34.78,34.78,0,0,0,57,68.72C62.76,68.53,86.67,67.87,88.16,68Z" />
      <path className="cls-6" d="M88.11,140.94a1,1,0,0,1,0,.15c-1.47.15-25.4-.51-31.19-.66a36,36,0,0,0,6.45-7.2c8.3-1.83,14.9-1.88,22.66-1.91v0a.09.09,0,0,0,0,.07h0v0a.09.09,0,0,0,0,.07,56.7,56.7,0,0,1,0,.2.09.09,0,0,0,0,.07s0,.1,0,.17a.09.09,0,0,0,0,.07c0,.12,0,.27.07.42h0c0,.2.07.39.12.64.1.46.2,1,.32,1.56,0,.07,0,.15,0,.22a2.84,2.84,0,0,0,.1.44,2.84,2.84,0,0,1,.1.44c.44,2.1.9,4.35,1.12,5.13C88.08,140.87,88.08,140.92,88.11,140.94Z" />
      <path className="cls-7" d="M63.27,64c.24,0,.44.22.44.56a.47.47,0,0,1-.44.51H56.5a.47.47,0,0,1-.44-.51.57.57,0,0,1,.12-.39A.39.39,0,0,1,56.5,64h6.77Z" />
      <path className="cls-7" d="M63.27,144a.52.52,0,0,1,.44.56.47.47,0,0,1-.44.51H56.5a.39.39,0,0,1-.32-.15.6.6,0,0,1-.12-.37.52.52,0,0,1,.44-.56Z" />
      <path className="cls-8" d="M63.39,75.88l-1.1-.22a27,27,0,0,0-6.77-6.94h1.42A34.78,34.78,0,0,1,63.39,75.88Z" />
      <path className="cls-8" d="M62.29,133.44l1.1-.22a36,36,0,0,1-6.45,7.2c-.78,0-1.22,0-1.22,0a.42.42,0,0,0-.2,0C57.46,138.74,58.8,138.65,62.29,133.44Z" />
      <path id="car-path2" className="cls-5" d="M57.46,78.13c2.17.59,2.49,1.51,2.32,2.39a116.63,116.63,0,0,0-1.34,13.9c-.29,5.47-.15,9.92-.15,9.92v.49s-.12,4.44.15,9.92a116.62,116.62,0,0,0,1.34,13.9c.15.88-.15,1.83-2.32,2.42-2.39.63-20.64,5.32-24.54,4.71a7.07,7.07,0,0,1-5.84-4.59c-.81-1.71-2.54-7.2-2.64-26.57.1-19.34,1.83-24.86,2.64-26.57S29,74.1,32.91,73.46,55.06,77.44,57.46,78.13Zm.07,52.09c1.76-.44,1.44-1.73,1.44-1.73s-.9-5.81-1.29-13.51c-.24-5.25-.22-8.79-.22-8.79l-.07-2.37s0-4.42.29-9.67C58,86.48,58.9,80.94,58.9,80.94s.66-1.49-1.39-2c-2.3-.63-20.32-4.86-24.08-4.47a6.35,6.35,0,0,0-5.69,4.05C27,80.15,25.32,85.43,25.22,104v1.07c.1,18.63,1.76,23.91,2.52,25.52s1.81,4.23,5.59,4.37C37.28,135.15,55.21,130.81,57.53,130.22Z" />
      <path className="cls-6" d="M59,128.49s.32,1.29-1.44,1.73c-2.3.59-20.25,4.93-24.18,4.79s-4.81-2.76-5.59-4.37-2.42-6.91-2.52-25.52V104c.1-18.59,1.76-23.89,2.52-25.55a6.35,6.35,0,0,1,5.69-4.05c3.76-.42,21.78,3.83,24.08,4.47,2.05.56,1.39,2,1.39,2s-.85,5.54-1.22,13.21c-.24,5.25-.29,9.67-.29,9.67l.07,2.37s0,3.54.22,8.79C58.07,122.7,59,128.49,59,128.49Z" />
      <path className="cls-6" d="M55.55,68.72a27,27,0,0,1,6.77,6.94,94.36,94.36,0,0,1-9.62-2.86S47,71.41,44.9,69.68a9,9,0,0,1,3-.73C49.25,68.87,54.5,68.65,55.55,68.72Z" />
      <path className="cls-6" d="M62.29,133.44c-3.52,5.2-4.84,5.3-6.77,7-1,0-6.28-.2-7.64-.22a10.05,10.05,0,0,1-3-.78c2.1-1.73,7.79-3.13,7.79-3.13C56.21,135.1,59.34,134.15,62.29,133.44Z" />
      <path className="cls-8" d="M39.7,66.62s.1.56-2,.85a16,16,0,0,1-3.42.12s-1.1-.2-1.1-1a3.14,3.14,0,0,1,.07-1.17c.12-.22,2.2-.78,5.15-.81,0,0,1.25,0,1.25.66S39.7,66.62,39.7,66.62Z" />
      <path className="cls-3" d="M27.15,64.11a6.36,6.36,0,0,1,2,.37s-6.47.93-11,2.05a20.31,20.31,0,0,0-3.64,1.25,11.58,11.58,0,0,0-4.3,5.15,22.93,22.93,0,0,0-1.51,4.23A77.61,77.61,0,0,0,7,89.75a2.3,2.3,0,0,0,.64,2h0v.1L7.37,104v1.15l.34,12.19v.12h0a2.15,2.15,0,0,0-.64,1.9A78.24,78.24,0,0,0,8.71,132a21.57,21.57,0,0,0,1.51,4.2,11.74,11.74,0,0,0,4.3,5.15,17.05,17.05,0,0,0,3.64,1.25c4.49,1.15,11,2.05,11,2.05a5.69,5.69,0,0,1-2,.42,116.94,116.94,0,0,1-13.82-2.54,10,10,0,0,1-6.5-5.91c-3.74-9.23-3.74-54.78,0-64a10,10,0,0,1,6.5-5.89A108.81,108.81,0,0,1,27.15,64.11Z" />
      <path className="cls-9" d="M18.16,66.55s.32,1-.12,1.22-1.93.71-3.57,1.51a12.28,12.28,0,0,0-4.27,3.66,11.74,11.74,0,0,1,4.3-5.15A17.86,17.86,0,0,1,18.16,66.55Z" />
      <path className="cls-9" d="M18,141.36c.44.24.12,1.22.12,1.22a20.31,20.31,0,0,1-3.64-1.25,11.58,11.58,0,0,1-4.3-5.15,12.4,12.4,0,0,0,4.27,3.71C16.13,140.65,17.62,141.09,18,141.36Z" />
      <path d="M144.74,76.54c3.61.63,7.23,1.34,10.84,2.08s7.2,1.51,10.79,2.34,7.16,1.73,10.7,2.76c1.76.51,3.52,1.07,5.25,1.71q1.28.48,2.56,1a15.61,15.61,0,0,1,2.42,1.34,13.7,13.7,0,0,0-2.42-1.32c-.83-.37-1.71-.71-2.56-1-1.73-.61-3.49-1.17-5.25-1.66-3.54-1-7.11-1.88-10.7-2.71s-7.18-1.56-10.79-2.27-7.23-1.39-10.84-2Z" />
      <path className="cls-10" d="M139.76,69.26S171,69,183.31,71.46l4-.15" />
      <path className="cls-10" d="M8.54,77.83a28,28,0,0,1,8.74-1.44c5.45-.15,10.72-.15,10.72-.15" />
      <path className="cls-11" d="M191.37,90.9s.34,4.08,1.29,4.64,1,.42,1,.42" />
      <path className="cls-10" d="M92.26,62.28V63s-1.2.88-1.2,4.37c0,0-3.1,7.3-3.2,10.33" />
      <path d="M144.72,132.34c3.61-.61,7.25-1.29,10.84-2s7.2-1.47,10.79-2.27,7.16-1.69,10.7-2.71c1.76-.51,3.52-1.05,5.25-1.69.85-.32,1.73-.63,2.56-1a15.47,15.47,0,0,0,2.42-1.32,13.65,13.65,0,0,1-2.42,1.34c-.83.39-1.69.71-2.56,1.05-1.73.63-3.49,1.2-5.25,1.71-3.54,1-7.11,1.93-10.7,2.76s-7.18,1.61-10.79,2.34-7.23,1.42-10.84,2.08Z" />
      <path className="cls-10" d="M139.76,139.84s31.26.29,43.55-2.2l4,.15" />
      <path className="cls-12" d="M33.45,67c-1.71.17-3.44.37-5.15.56-8.11,1-15.12,1.76-17.51,5.69" />
      <path className="cls-12" d="M123.64,64.89c-24.89-.15-67.09.66-70.14.9-1.37.1-7,.24-13.77.71" />
      <path className="cls-12" d="M127.55,144.17c3.35,0,6.23-.1,8.52-.17,18.83-.66,42.62,1.39,48.67-8.16s5.59-31.26,5.59-31.26.44-21.76-5.59-31.31-29.84-7.45-48.67-8.16c-2.32-.1-5.3-.15-8.69-.17" />
      <path className="cls-12" d="M10.79,135.81c2.39,3.93,9.4,4.71,17.51,5.74,11,1.37,23.1,1.61,25.2,1.81,3.08.22,45.62,1,70.48.88" />
      <path className="cls-10" d="M8.54,131.32a29.82,29.82,0,0,0,8.74,1.44c5.45.15,10.72.15,10.72.15" />
      <path className="cls-11" d="M191.37,118.23s.34-4.1,1.29-4.66,1-.42,1-.42" />
      <path className="cls-10" d="M92.26,146.85v-.73s-1.2-.93-1.2-4.42c0,0-3.1-7.3-3.2-10.33" />
      <path className="cls-12" d="M193.25,113.27s.24-4.2.24-8.5v-.49c0-4.27-.24-8.45-.24-8.45" />
      <line className="cls-12" x1="130.16" y1="62.55" x2="130.9" y2="67.43" />
      <line className="cls-12" x1="130.9" y1="141.92" x2="131.14" y2="146.56" />
      <polyline className="cls-13" points="54.21 63.52 54.45 65.72 56.41 67.92" />
      <polyline className="cls-13" points="53.72 146.07 53.5 143.34 56.41 140.7" />
    </svg>
  );
}
