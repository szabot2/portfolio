import{P as m}from"./index.28b7f6e4.js";function $(t){return Math.sqrt(1- --t*t)}function d(t){const n=t-1;return n*n*n+1}function g(t){return Math.sin(t*Math.PI/2)}function h(t,{delay:n=0,duration:o=400,easing:r=m}={}){const s=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:c=>`opacity: ${c*s}`}}function x(t,{delay:n=0,duration:o=400,easing:r=d,x:s=0,y:c=0,opacity:u=0}={}){const a=getComputedStyle(t),e=+a.opacity,f=a.transform==="none"?"":a.transform,p=e*(1-u);return{delay:n,duration:o,easing:r,css:(i,y)=>`
			transform: ${f} translate(${(1-i)*s}px, ${(1-i)*c}px);
			opacity: ${e-p*y}`}}export{x as a,$ as c,h as f,g as s};
