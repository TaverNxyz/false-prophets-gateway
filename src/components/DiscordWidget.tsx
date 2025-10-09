import { useEffect, useRef } from 'react';

export const DiscordWidget = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frames = 0;
    let animationId: number;

    const drawAnimation = () => {
      canvas.style.width = "50px";
      canvas.style.height = "50px";
      canvas.width = 250;
      canvas.height = 250;
      ctx.fillStyle = "#fff8";
      
      for (let j = 250, w = 100, p = 0; j--;) {
        let Z = 1 - ((j * j / w + frames / 100) % 1);
        let s = 1 + Math.pow(5 * (1 - Z), 2) / 2;
        ctx.beginPath();
        ctx.arc(w + (99 - j % 199) / Z, 100 + (99 - j * j * 7 % 198) / Z, s, 0, 7);
        ctx.fill();
      }
      
      frames++;
      animationId = requestAnimationFrame(drawAnimation);
    };

    drawAnimation();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <div className="discord-widget-container opacity-75 hover:opacity-100 transition-opacity">
      <a href="https://discord.gg/404gang" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
        <svg 
          color="#FFFFFF" 
          fill="#000000" 
          width="125" 
          height="125" 
          viewBox="0 0 48 48" 
          className="discord-logo-container w-12 h-12"
        >
          <rect width="100%" height="100%" fill="currentfill"></rect>
          <foreignObject style={{ width: '100%', height: '100%' }}>
            <div>
              <canvas ref={canvasRef} id="discordCanvas"></canvas>
            </div>
          </foreignObject>
          <defs>
            <g>
              <defs>
                <path 
                  id="discord-def-face" 
                  fill="currentcolor" 
                  d="M40,12C40,12,35.415,8.412,30,8L29.512,8.976C34.408,10.174,36.654,11.891,39,14C34.955,11.935,30.961,10,24,10S13.045,11.935,9,14C11.346,11.891,14.018,9.985,18.488,8.976L18,8C12.319,8.537,8,12,8,12S2.879,19.425,2,34C7.162,39.953,15,40,15,40L16.639,37.815C13.857,36.848,10.715,35.121,8,32C11.238,34.45,16.125,37,24,37S36.762,34.45,40,32C37.285,35.121,34.143,36.848,31.361,37.815L33,40C33,40,40.838,39.953,46,34C45.121,19.425,40,12,40,12Z"
                ></path>
                <g id="discord-def-face-eyes">
                  <path 
                    id="discord-def-face-left-eye" 
                    fill="currentfill" 
                    d="M17.5,30C15.567,30,14,28.209,14,26C14,23.791,15.567,22,17.5,22S21,23.791,21,26C21,28.209,19.433,30,17.5,30Z"
                  ></path>
                  <path 
                    id="discord-def-face-right-eye" 
                    fill="currentfill" 
                    d="M30.5,30C28.567,30,27,28.209,27,26C27,23.791,28.567,22,30.5,22S34,23.791,34,26C34,28.209,32.433,30,30.5,30Z"
                  ></path>
                </g>
              </defs>
              <g id="discordFaceID75">
                <use href="#discord-def-face"></use>
                <g id="discord-logo-eyes">
                  <mask id="mask-right-eye-wink">
                    <ellipse fill="#FFFFFF" ry="15" rx="15" cy="39.7" cx="35"></ellipse>
                    <ellipse fill="#000000" ry="15" rx="15" cy="40.5" cx="34"></ellipse>
                  </mask>
                  <mask id="mask-eyes-angry">
                    <rect height="48" width="48" y="0" x="0" fill="#FFFFFF"></rect>
                    <rect transform="rotate(45 24,14.5)" height="24" width="24" y="2.5" x="12" fill="#000000"></rect>
                  </mask>
                  <g className="discord-eyes">
                    <use xlinkHref="#discord-def-face-eyes" mask="url(#mask-eyes-angry)"></use>
                  </g>
                </g>
              </g>
              <mask id="mask-outer-layer">
                <rect width="100%" height="100%" fill="#FFFFFF"></rect>
                <circle r="42%" cx="50%" cy="50%" fill="#000000"></circle>
              </mask>
              <mask id="mask-middle-layer">
                <rect width="100%" height="100%" fill="#000000"></rect>
                <circle r="43%" cx="50%" cy="50%" fill="#FFFFFF"></circle>
                <circle r="32%" cx="50%" cy="50%" fill="#000000"></circle>
              </mask>
              <mask id="mask-inner-layer">
                <rect width="100%" height="100%" fill="#000000"></rect>
                <circle r="32%" cx="50%" cy="50%" fill="#FFFFFF"></circle>
              </mask>
            </g>
          </defs>
          <g className="discord-logo rotateX-animation">
            <use className="discord-original" xlinkHref="#discordFaceID75"></use>
          </g>
          <a href="https://discord.gg/404gang">
            <rect width="100%" height="100%" fillOpacity="0"></rect>
          </a>
        </svg>
        <svg 
          height="62.5" 
          preserveAspectRatio="xMinYMin" 
          className="speechbubble" 
          viewBox="0 0 530.25 200"
        >
          <g className="pathElementGroup" transform="translate(530.25, 0)">
            <path 
              transform="scale(-1,1)" 
              fill="#FFFFFF" 
              d="M 494.75,0 L 20.5,0 C 9.2,0 0,9.2 0,20.6 L 0,155.8 C 0,167.2 9.2,177 20.5,176.4 L 474.15,176.4 L 468.85,157.9 L 481.65,169.8 L 493.75,181 L 515.25,200 L 515.25,20.6 C 515.25,9.2 506.05,0 494.75,0 Z" 
              className="pathElement"
            ></path>
          </g>
          <text fill="#000000" fontSize="90" x="95" y="57%" className="textElement">
            Join 404
          </text>
          <a href="https://discord.gg/404gang">
            <rect width="100%" height="100%" fillOpacity="0"></rect>
          </a>
        </svg>
      </a>

      <style dangerouslySetInnerHTML={{ __html: `
        .discord-logo {
          transform: scale(0.7);
          transform-origin: 24px 24px;
        }
        .speechbubble {
          position: relative;
          transform: translateY(-50%);
        }
        .discord-logo.rotateX-animation .discord-original {
          transition: transform 300ms linear;
          transform-origin: 50% 50%;
        }
        .discord-logo-container:hover .rotateX-animation .discord-original,
        .animated .rotateX-animation .discord-original {
          transform: rotateX(360deg);
        }
      `}} />
    </div>
  );
};
