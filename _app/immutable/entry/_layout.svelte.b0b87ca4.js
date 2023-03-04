import{C as Vt,S as gt,i as It,s as et,k as Y,q as Nt,a as Ct,l as W,m as K,r as $t,h as _,c as At,n as G,p as ft,b as x,D as J,E as mt,F as pt,G as tt,H as _t,o as qt,y as Gt,e as dt,z as Ut,A as jt,d as Q,f as St,g as H,B as Jt,I as Yt,J as Wt,K as Xt,L as Zt,M as Kt,N as Qt,O as Ht,v as xt}from"../chunks/index.c30055b2.js";import{p as vt}from"../chunks/stores.b0ec9c70.js";import{b as t0}from"../chunks/paths.5e5eee4a.js";function n0(e){return Math.sqrt(1- --e*e)}function r0(e,{delay:t=0,duration:n=400,easing:r=Vt}={}){const a=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:r,css:s=>`opacity: ${s*a}`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){return e<0?-1:e===0?0:1}function bt(e,t,n){return(1-n)*e+n*t}function e0(e,t,n){return n<e?e:n>t?t:n}function ot(e){return e=e%360,e<0&&(e=e+360),e}function o0(e,t){return ot(t-e)<=180?1:-1}function a0(e,t){return 180-Math.abs(Math.abs(e-t)-180)}function nt(e,t){const n=e[0]*t[0][0]+e[1]*t[0][1]+e[2]*t[0][2],r=e[0]*t[1][0]+e[1]*t[1][1]+e[2]*t[1][2],a=e[0]*t[2][0]+e[1]*t[2][1]+e[2]*t[2][2];return[n,r,a]}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s0=[[.41233895,.35762064,.18051042],[.2126,.7152,.0722],[.01932141,.11916382,.95034478]],c0=[[3.2413774792388685,-1.5376652402851851,-.49885366846268053],[-.9691452513005321,1.8758853451067872,.04156585616912061],[.05562093689691305,-.20395524564742123,1.0571799111220335]],i0=[95.047,100,108.883];function at(e,t,n){return(255<<24|(e&255)<<16|(t&255)<<8|n&255)>>>0}function Mt(e){const t=q(e[0]),n=q(e[1]),r=q(e[2]);return at(t,n,r)}function u0(e){return e>>24&255}function Ft(e){return e>>16&255}function kt(e){return e>>8&255}function Dt(e){return e&255}function h0(e,t,n){const r=c0,a=r[0][0]*e+r[0][1]*t+r[0][2]*n,s=r[1][0]*e+r[1][1]*t+r[1][2]*n,o=r[2][0]*e+r[2][1]*t+r[2][2]*n,c=q(a),i=q(s),u=q(o);return at(c,i,u)}function l0(e){const t=U(Ft(e)),n=U(kt(e)),r=U(Dt(e));return nt([t,n,r],s0)}function f0(e){const t=v(e),n=q(t);return at(n,n,n)}function rt(e){const t=l0(e)[1];return 116*p0(t/100)-16}function v(e){return 100*d0((e+16)/116)}function U(e){const t=e/255;return t<=.040449936?t/12.92*100:Math.pow((t+.055)/1.055,2.4)*100}function q(e){const t=e/100;let n=0;return t<=.0031308?n=t*12.92:n=1.055*Math.pow(t,1/2.4)-.055,e0(0,255,Math.round(n*255))}function m0(){return i0}function Z(e){const t=Ft(e),n=kt(e),r=Dt(e),a=u0(e);return{r:t,g:n,b:r,a}}function p0(e){const t=.008856451679035631,n=24389/27;return e>t?Math.pow(e,1/3):(n*e+16)/116}function d0(e){const t=.008856451679035631,n=24389/27,r=e*e*e;return r>t?r:(116*e-16)/n}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{static make(t=m0(),n=200/Math.PI*v(50)/100,r=50,a=2,s=!1){const o=t,c=o[0]*.401288+o[1]*.650173+o[2]*-.051461,i=o[0]*-.250268+o[1]*1.204414+o[2]*.045854,u=o[0]*-.002079+o[1]*.048952+o[2]*.953127,h=.8+a/10,f=h>=.9?bt(.59,.69,(h-.9)*10):bt(.525,.59,(h-.8)*10);let m=s?1:h*(1-1/3.6*Math.exp((-n-42)/92));m=m>1?1:m<0?0:m;const d=h,p=[m*(100/c)+1-m,m*(100/i)+1-m,m*(100/u)+1-m],k=1/(5*n+1),g=k*k*k*k,O=1-g,I=g*n+.1*O*O*Math.cbrt(5*n),D=v(r)/t[1],V=1.48+Math.sqrt(D),R=.725/Math.pow(D,.2),P=R,b=[Math.pow(I*p[0]*c/100,.42),Math.pow(I*p[1]*i/100,.42),Math.pow(I*p[2]*u/100,.42)],F=[400*b[0]/(b[0]+27.13),400*b[1]/(b[1]+27.13),400*b[2]/(b[2]+27.13)],T=(2*F[0]+F[1]+.05*F[2])*R;return new z(D,T,R,P,f,d,p,I,Math.pow(I,.25),V)}constructor(t,n,r,a,s,o,c,i,u,h){this.n=t,this.aw=n,this.nbb=r,this.ncb=a,this.c=s,this.nc=o,this.rgbD=c,this.fl=i,this.fLRoot=u,this.z=h}}z.DEFAULT=z.make();/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(t,n,r,a,s,o,c,i,u){this.hue=t,this.chroma=n,this.j=r,this.q=a,this.m=s,this.s=o,this.jstar=c,this.astar=i,this.bstar=u}distance(t){const n=this.jstar-t.jstar,r=this.astar-t.astar,a=this.bstar-t.bstar,s=Math.sqrt(n*n+r*r+a*a);return 1.41*Math.pow(s,.63)}static fromInt(t){return y.fromIntInViewingConditions(t,z.DEFAULT)}static fromIntInViewingConditions(t,n){const r=(t&16711680)>>16,a=(t&65280)>>8,s=t&255,o=U(r),c=U(a),i=U(s),u=.41233895*o+.35762064*c+.18051042*i,h=.2126*o+.7152*c+.0722*i,f=.01932141*o+.11916382*c+.95034478*i,m=.401288*u+.650173*h-.051461*f,d=-.250268*u+1.204414*h+.045854*f,p=-.002079*u+.048952*h+.953127*f,k=n.rgbD[0]*m,g=n.rgbD[1]*d,O=n.rgbD[2]*p,I=Math.pow(n.fl*Math.abs(k)/100,.42),D=Math.pow(n.fl*Math.abs(g)/100,.42),V=Math.pow(n.fl*Math.abs(O)/100,.42),R=$(k)*400*I/(I+27.13),P=$(g)*400*D/(D+27.13),b=$(O)*400*V/(V+27.13),F=(11*R+-12*P+b)/11,T=(R+P-2*b)/9,C=(20*R+20*P+21*b)/20,j=(40*R+20*P+b)/20,N=Math.atan2(T,F)*180/Math.PI,B=N<0?N+360:N>=360?N-360:N,ct=B*Math.PI/180,Rt=j*n.nbb,S=100*Math.pow(Rt/n.aw,n.c*n.z),Tt=4/n.c*Math.sqrt(S/100)*(n.aw+4)*n.fLRoot,Ot=B<20.14?B+360:B,Pt=.25*(Math.cos(Ot*Math.PI/180+2)+3.8),Bt=5e4/13*Pt*n.nc*n.ncb*Math.sqrt(F*F+T*T)/(C+.305),it=Math.pow(Bt,.9)*Math.pow(1.64-Math.pow(.29,n.n),.73),ut=it*Math.sqrt(S/100),ht=ut*n.fLRoot,Lt=50*Math.sqrt(it*n.c/(n.aw+4)),wt=(1+100*.007)*S/(1+.007*S),lt=1/.0228*Math.log(1+.0228*ht),Et=lt*Math.cos(ct),zt=lt*Math.sin(ct);return new y(B,ut,S,Tt,ht,Lt,wt,Et,zt)}static fromJch(t,n,r){return y.fromJchInViewingConditions(t,n,r,z.DEFAULT)}static fromJchInViewingConditions(t,n,r,a){const s=4/a.c*Math.sqrt(t/100)*(a.aw+4)*a.fLRoot,o=n*a.fLRoot,c=n/Math.sqrt(t/100),i=50*Math.sqrt(c*a.c/(a.aw+4)),u=r*Math.PI/180,h=(1+100*.007)*t/(1+.007*t),f=1/.0228*Math.log(1+.0228*o),m=f*Math.cos(u),d=f*Math.sin(u);return new y(r,n,t,s,o,i,h,m,d)}static fromUcs(t,n,r){return y.fromUcsInViewingConditions(t,n,r,z.DEFAULT)}static fromUcsInViewingConditions(t,n,r,a){const s=n,o=r,c=Math.sqrt(s*s+o*o),u=(Math.exp(c*.0228)-1)/.0228/a.fLRoot;let h=Math.atan2(o,s)*(180/Math.PI);h<0&&(h+=360);const f=t/(1-(t-100)*.007);return y.fromJchInViewingConditions(f,u,h,a)}toInt(){return this.viewed(z.DEFAULT)}viewed(t){const n=this.chroma===0||this.j===0?0:this.chroma/Math.sqrt(this.j/100),r=Math.pow(n/Math.pow(1.64-Math.pow(.29,t.n),.73),1/.9),a=this.hue*Math.PI/180,s=.25*(Math.cos(a+2)+3.8),o=t.aw*Math.pow(this.j/100,1/t.c/t.z),c=s*(5e4/13)*t.nc*t.ncb,i=o/t.nbb,u=Math.sin(a),h=Math.cos(a),f=23*(i+.305)*r/(23*c+11*r*h+108*r*u),m=f*h,d=f*u,p=(460*i+451*m+288*d)/1403,k=(460*i-891*m-261*d)/1403,g=(460*i-220*m-6300*d)/1403,O=Math.max(0,27.13*Math.abs(p)/(400-Math.abs(p))),I=$(p)*(100/t.fl)*Math.pow(O,1/.42),D=Math.max(0,27.13*Math.abs(k)/(400-Math.abs(k))),V=$(k)*(100/t.fl)*Math.pow(D,1/.42),R=Math.max(0,27.13*Math.abs(g)/(400-Math.abs(g))),P=$(g)*(100/t.fl)*Math.pow(R,1/.42),b=I/t.rgbD[0],F=V/t.rgbD[1],T=P/t.rgbD[2],C=1.86206786*b-1.01125463*F+.14918677*T,j=.38752654*b+.62144744*F-.00897398*T,X=-.0158415*b-.03412294*F+1.04996444*T;return h0(C,j,X)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{static sanitizeRadians(t){return(t+Math.PI*8)%(Math.PI*2)}static trueDelinearized(t){const n=t/100;let r=0;return n<=.0031308?r=n*12.92:r=1.055*Math.pow(n,1/2.4)-.055,r*255}static chromaticAdaptation(t){const n=Math.pow(Math.abs(t),.42);return $(t)*400*n/(n+27.13)}static hueOf(t){const n=nt(t,l.SCALED_DISCOUNT_FROM_LINRGB),r=l.chromaticAdaptation(n[0]),a=l.chromaticAdaptation(n[1]),s=l.chromaticAdaptation(n[2]),o=(11*r+-12*a+s)/11,c=(r+a-2*s)/9;return Math.atan2(c,o)}static areInCyclicOrder(t,n,r){const a=l.sanitizeRadians(n-t),s=l.sanitizeRadians(r-t);return a<s}static intercept(t,n,r){return(n-t)/(r-t)}static lerpPoint(t,n,r){return[t[0]+(r[0]-t[0])*n,t[1]+(r[1]-t[1])*n,t[2]+(r[2]-t[2])*n]}static setCoordinate(t,n,r,a){const s=l.intercept(t[a],n,r[a]);return l.lerpPoint(t,s,r)}static isBounded(t){return 0<=t&&t<=100}static nthVertex(t,n){const r=l.Y_FROM_LINRGB[0],a=l.Y_FROM_LINRGB[1],s=l.Y_FROM_LINRGB[2],o=n%4<=1?0:100,c=n%2===0?0:100;if(n<4){const i=o,u=c,h=(t-i*a-u*s)/r;return l.isBounded(h)?[h,i,u]:[-1,-1,-1]}else if(n<8){const i=o,u=c,h=(t-u*r-i*s)/a;return l.isBounded(h)?[u,h,i]:[-1,-1,-1]}else{const i=o,u=c,h=(t-i*r-u*a)/s;return l.isBounded(h)?[i,u,h]:[-1,-1,-1]}}static bisectToSegment(t,n){let r=[-1,-1,-1],a=r,s=0,o=0,c=!1,i=!0;for(let u=0;u<12;u++){const h=l.nthVertex(t,u);if(h[0]<0)continue;const f=l.hueOf(h);if(!c){r=h,a=h,s=f,o=f,c=!0;continue}(i||l.areInCyclicOrder(s,f,o))&&(i=!1,l.areInCyclicOrder(s,n,f)?(a=h,o=f):(r=h,s=f))}return[r,a]}static midpoint(t,n){return[(t[0]+n[0])/2,(t[1]+n[1])/2,(t[2]+n[2])/2]}static criticalPlaneBelow(t){return Math.floor(t-.5)}static criticalPlaneAbove(t){return Math.ceil(t-.5)}static bisectToLimit(t,n){const r=l.bisectToSegment(t,n);let a=r[0],s=l.hueOf(a),o=r[1];for(let c=0;c<3;c++)if(a[c]!==o[c]){let i=-1,u=255;a[c]<o[c]?(i=l.criticalPlaneBelow(l.trueDelinearized(a[c])),u=l.criticalPlaneAbove(l.trueDelinearized(o[c]))):(i=l.criticalPlaneAbove(l.trueDelinearized(a[c])),u=l.criticalPlaneBelow(l.trueDelinearized(o[c])));for(let h=0;h<8&&!(Math.abs(u-i)<=1);h++){const f=Math.floor((i+u)/2),m=l.CRITICAL_PLANES[f],d=l.setCoordinate(a,m,o,c),p=l.hueOf(d);l.areInCyclicOrder(s,n,p)?(o=d,u=f):(a=d,s=p,i=f)}}return l.midpoint(a,o)}static inverseChromaticAdaptation(t){const n=Math.abs(t),r=Math.max(0,27.13*n/(400-n));return $(t)*Math.pow(r,1/.42)}static findResultByJ(t,n,r){let a=Math.sqrt(r)*11;const s=z.DEFAULT,o=1/Math.pow(1.64-Math.pow(.29,s.n),.73),i=.25*(Math.cos(t+2)+3.8)*(5e4/13)*s.nc*s.ncb,u=Math.sin(t),h=Math.cos(t);for(let f=0;f<5;f++){const m=a/100,d=n===0||a===0?0:n/Math.sqrt(m),p=Math.pow(d*o,1/.9),g=s.aw*Math.pow(m,1/s.c/s.z)/s.nbb,O=23*(g+.305)*p/(23*i+11*p*h+108*p*u),I=O*h,D=O*u,V=(460*g+451*I+288*D)/1403,R=(460*g-891*I-261*D)/1403,P=(460*g-220*I-6300*D)/1403,b=l.inverseChromaticAdaptation(V),F=l.inverseChromaticAdaptation(R),T=l.inverseChromaticAdaptation(P),C=nt([b,F,T],l.LINRGB_FROM_SCALED_DISCOUNT);if(C[0]<0||C[1]<0||C[2]<0)return 0;const j=l.Y_FROM_LINRGB[0],X=l.Y_FROM_LINRGB[1],N=l.Y_FROM_LINRGB[2],B=j*C[0]+X*C[1]+N*C[2];if(B<=0)return 0;if(f===4||Math.abs(B-r)<.002)return C[0]>100.01||C[1]>100.01||C[2]>100.01?0:Mt(C);a=a-(B-r)*a/(2*B)}return 0}static solveToInt(t,n,r){if(n<1e-4||r<1e-4||r>99.9999)return f0(r);t=ot(t);const a=t/180*Math.PI,s=v(r),o=l.findResultByJ(a,n,s);if(o!==0)return o;const c=l.bisectToLimit(s,a);return Mt(c)}static solveToCam(t,n,r){return y.fromInt(l.solveToInt(t,n,r))}}l.SCALED_DISCOUNT_FROM_LINRGB=[[.001200833568784504,.002389694492170889,.0002795742885861124],[.0005891086651375999,.0029785502573438758,.0003270666104008398],[.00010146692491640572,.0005364214359186694,.0032979401770712076]];l.LINRGB_FROM_SCALED_DISCOUNT=[[1373.2198709594231,-1100.4251190754821,-7.278681089101213],[-271.815969077903,559.6580465940733,-32.46047482791194],[1.9622899599665666,-57.173814538844006,308.7233197812385]];l.Y_FROM_LINRGB=[.2126,.7152,.0722];l.CRITICAL_PLANES=[.015176349177441876,.045529047532325624,.07588174588720938,.10623444424209313,.13658714259697685,.16693984095186062,.19729253930674434,.2276452376616281,.2579979360165119,.28835063437139563,.3188300904430532,.350925934958123,.3848314933096426,.42057480301049466,.458183274052838,.4976837250274023,.5391024159806381,.5824650784040898,.6277969426914107,.6751227633498623,.7244668422128921,.775853049866786,.829304845476233,.8848452951698498,.942497089126609,1.0022825574869039,1.0642236851973577,1.1283421258858297,1.1946592148522128,1.2631959812511864,1.3339731595349034,1.407011200216447,1.4823302800086415,1.5599503113873272,1.6398909516233677,1.7221716113234105,1.8068114625156377,1.8938294463134073,1.9832442801866852,2.075074464868551,2.1693382909216234,2.2660538449872063,2.36523901573795,2.4669114995532007,2.5710888059345764,2.6777882626779785,2.7870270208169257,2.898822059350997,3.0131901897720907,3.1301480604002863,3.2497121605402226,3.3718988244681087,3.4967242352587946,3.624204428461639,3.754355295633311,3.887192587735158,4.022731918402185,4.160988767090289,4.301978482107941,4.445716283538092,4.592217266055746,4.741496401646282,4.893568542229298,5.048448422192488,5.20615066083972,5.3666897647573375,5.5300801301023865,5.696336044816294,5.865471690767354,6.037501145825082,6.212438385869475,6.390297286737924,6.571091626112461,6.7548350853498045,6.941541251256611,7.131223617812143,7.323895587840543,7.5195704746346665,7.7182615035334345,7.919981813454504,8.124744458384042,8.332562408825165,8.543448553206703,8.757415699253682,8.974476575321063,9.194643831691977,9.417930041841839,9.644347703669503,9.873909240696694,10.106627003236781,10.342513269534024,10.58158024687427,10.8238400726681,11.069304815507364,11.317986476196008,11.569896988756009,11.825048221409341,12.083451977536606,12.345119996613247,12.610063955123938,12.878295467455942,13.149826086772048,13.42466730586372,13.702830557985108,13.984327217668513,14.269168601521828,14.55736596900856,14.848930523210871,15.143873411576273,15.44220572664832,15.743938506781891,16.04908273684337,16.35764934889634,16.66964922287304,16.985093187232053,17.30399201960269,17.62635644741625,17.95219714852476,18.281524751807332,18.614349837764564,18.95068293910138,19.290534541298456,19.633915083172692,19.98083495742689,20.331304511189067,20.685334046541502,21.042933821039977,21.404114048223256,21.76888489811322,22.137256497705877,22.50923893145328,22.884842241736916,23.264076429332462,23.6469514538663,24.033477234264016,24.42366364919083,24.817520537484558,25.21505769858089,25.61628489293138,26.021211842414342,26.429848230738664,26.842203703840827,27.258287870275353,27.678110301598522,28.10168053274597,28.529008062403893,28.96010235337422,29.39497283293396,29.83362889318845,30.276079891419332,30.722335150426627,31.172403958865512,31.62629557157785,32.08401920991837,32.54558406207592,33.010999283389665,33.4802739966603,33.953417292456834,34.430438229418264,34.911345834551085,35.39614910352207,35.88485700094671,36.37747846067349,36.87402238606382,37.37449765026789,37.87891309649659,38.38727753828926,38.89959975977785,39.41588851594697,39.93615253289054,40.460400508064545,40.98864111053629,41.520882981230194,42.05713473317016,42.597404951718396,43.141702194811224,43.6900349931913,44.24241185063697,44.798841244188324,45.35933162437017,45.92389141541209,46.49252901546552,47.065252796817916,47.64207110610409,48.22299226451468,48.808024568002054,49.3971762874833,49.9904556690408,50.587870934119984,51.189430279724725,51.79514187861014,52.40501387947288,53.0190544071392,53.637271562750364,54.259673423945976,54.88626804504493,55.517063457223934,56.15206766869424,56.79128866487574,57.43473440856916,58.08241284012621,58.734331877617365,59.39049941699807,60.05092333227251,60.715611475655585,61.38457167773311,62.057811747619894,62.7353394731159,63.417162620860914,64.10328893648692,64.79372614476921,65.48848194977529,66.18756403501224,66.89098006357258,67.59873767827808,68.31084450182222,69.02730813691093,69.74813616640164,70.47333615344107,71.20291564160104,71.93688215501312,72.67524319850172,73.41800625771542,74.16517879925733,74.9167682708136,75.67278210128072,76.43322770089146,77.1981124613393,77.96744375590167,78.74122893956174,79.51947534912904,80.30219030335869,81.08938110306934,81.88105503125999,82.67721935322541,83.4778813166706,84.28304815182372,85.09272707154808,85.90692527145302,86.72564993000343,87.54890820862819,88.3767072518277,89.2090541872801,90.04595612594655,90.88742016217518,91.73345337380438,92.58406282226491,93.43925555268066,94.29903859396902,95.16341895893969,96.03240364439274,96.9059996312159,97.78421388448044,98.6670533535366,99.55452497210776];/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{static from(t,n,r){return new L(l.solveToInt(t,n,r))}static fromInt(t){return new L(t)}toInt(){return this.argb}get hue(){return this.internalHue}set hue(t){this.setInternalState(l.solveToInt(t,this.internalChroma,this.internalTone))}get chroma(){return this.internalChroma}set chroma(t){this.setInternalState(l.solveToInt(this.internalHue,t,this.internalTone))}get tone(){return this.internalTone}set tone(t){this.setInternalState(l.solveToInt(this.internalHue,this.internalChroma,t))}constructor(t){this.argb=t;const n=y.fromInt(t);this.internalHue=n.hue,this.internalChroma=n.chroma,this.internalTone=rt(t),this.argb=t}setInternalState(t){const n=y.fromInt(t);this.internalHue=n.hue,this.internalChroma=n.chroma,this.internalTone=rt(t),this.argb=t}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{static harmonize(t,n){const r=L.fromInt(t),a=L.fromInt(n),s=a0(r.hue,a.hue),o=Math.min(s*.5,15),c=ot(r.hue+o*o0(r.hue,a.hue));return L.from(c,r.chroma,r.tone).toInt()}static hctHue(t,n,r){const a=st.cam16Ucs(t,n,r),s=y.fromInt(a),o=y.fromInt(t);return L.from(s.hue,o.chroma,rt(t)).toInt()}static cam16Ucs(t,n,r){const a=y.fromInt(t),s=y.fromInt(n),o=a.jstar,c=a.astar,i=a.bstar,u=s.jstar,h=s.astar,f=s.bstar,m=o+(u-o)*r,d=c+(h-c)*r,p=i+(f-i)*r;return y.fromUcs(m,d,p).toInt()}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{static fromInt(t){const n=L.fromInt(t);return A.fromHueAndChroma(n.hue,n.chroma)}static fromHueAndChroma(t,n){return new A(t,n)}constructor(t,n){this.hue=t,this.chroma=n,this.cache=new Map}tone(t){let n=this.cache.get(t);return n===void 0&&(n=L.from(this.hue,this.chroma,t).toInt(),this.cache.set(t,n)),n}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static of(t){return new M(t,!1)}static contentOf(t){return new M(t,!0)}static fromColors(t){return M.createPaletteFromColors(!1,t)}static contentFromColors(t){return M.createPaletteFromColors(!0,t)}static createPaletteFromColors(t,n){const r=new M(n.primary,t);if(n.secondary){const a=new M(n.secondary,t);r.a2=a.a1}if(n.tertiary){const a=new M(n.tertiary,t);r.a3=a.a1}if(n.error){const a=new M(n.error,t);r.error=a.a1}if(n.neutral){const a=new M(n.neutral,t);r.n1=a.n1}if(n.neutralVariant){const a=new M(n.neutralVariant,t);r.n2=a.n2}return r}constructor(t,n){const r=L.fromInt(t),a=r.hue,s=r.chroma;n?(this.a1=A.fromHueAndChroma(a,s),this.a2=A.fromHueAndChroma(a,s/3),this.a3=A.fromHueAndChroma(a+60,s/2),this.n1=A.fromHueAndChroma(a,Math.min(s/12,4)),this.n2=A.fromHueAndChroma(a,Math.min(s/6,8))):(this.a1=A.fromHueAndChroma(a,Math.max(48,s)),this.a2=A.fromHueAndChroma(a,16),this.a3=A.fromHueAndChroma(a+60,24),this.n1=A.fromHueAndChroma(a,4),this.n2=A.fromHueAndChroma(a,8)),this.error=A.fromHueAndChroma(25,84)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{get primary(){return this.props.primary}get onPrimary(){return this.props.onPrimary}get primaryContainer(){return this.props.primaryContainer}get onPrimaryContainer(){return this.props.onPrimaryContainer}get secondary(){return this.props.secondary}get onSecondary(){return this.props.onSecondary}get secondaryContainer(){return this.props.secondaryContainer}get onSecondaryContainer(){return this.props.onSecondaryContainer}get tertiary(){return this.props.tertiary}get onTertiary(){return this.props.onTertiary}get tertiaryContainer(){return this.props.tertiaryContainer}get onTertiaryContainer(){return this.props.onTertiaryContainer}get error(){return this.props.error}get onError(){return this.props.onError}get errorContainer(){return this.props.errorContainer}get onErrorContainer(){return this.props.onErrorContainer}get background(){return this.props.background}get onBackground(){return this.props.onBackground}get surface(){return this.props.surface}get onSurface(){return this.props.onSurface}get surfaceVariant(){return this.props.surfaceVariant}get onSurfaceVariant(){return this.props.onSurfaceVariant}get outline(){return this.props.outline}get outlineVariant(){return this.props.outlineVariant}get shadow(){return this.props.shadow}get scrim(){return this.props.scrim}get inverseSurface(){return this.props.inverseSurface}get inverseOnSurface(){return this.props.inverseOnSurface}get inversePrimary(){return this.props.inversePrimary}static light(t){return E.lightFromCorePalette(M.of(t))}static dark(t){return E.darkFromCorePalette(M.of(t))}static lightContent(t){return E.lightFromCorePalette(M.contentOf(t))}static darkContent(t){return E.darkFromCorePalette(M.contentOf(t))}static lightFromCorePalette(t){return new E({primary:t.a1.tone(40),onPrimary:t.a1.tone(100),primaryContainer:t.a1.tone(90),onPrimaryContainer:t.a1.tone(10),secondary:t.a2.tone(40),onSecondary:t.a2.tone(100),secondaryContainer:t.a2.tone(90),onSecondaryContainer:t.a2.tone(10),tertiary:t.a3.tone(40),onTertiary:t.a3.tone(100),tertiaryContainer:t.a3.tone(90),onTertiaryContainer:t.a3.tone(10),error:t.error.tone(40),onError:t.error.tone(100),errorContainer:t.error.tone(90),onErrorContainer:t.error.tone(10),background:t.n1.tone(99),onBackground:t.n1.tone(10),surface:t.n1.tone(99),onSurface:t.n1.tone(10),surfaceVariant:t.n2.tone(90),onSurfaceVariant:t.n2.tone(30),outline:t.n2.tone(50),outlineVariant:t.n2.tone(80),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(20),inverseOnSurface:t.n1.tone(95),inversePrimary:t.a1.tone(80)})}static darkFromCorePalette(t){return new E({primary:t.a1.tone(80),onPrimary:t.a1.tone(20),primaryContainer:t.a1.tone(30),onPrimaryContainer:t.a1.tone(90),secondary:t.a2.tone(80),onSecondary:t.a2.tone(20),secondaryContainer:t.a2.tone(30),onSecondaryContainer:t.a2.tone(90),tertiary:t.a3.tone(80),onTertiary:t.a3.tone(20),tertiaryContainer:t.a3.tone(30),onTertiaryContainer:t.a3.tone(90),error:t.error.tone(80),onError:t.error.tone(20),errorContainer:t.error.tone(30),onErrorContainer:t.error.tone(80),background:t.n1.tone(10),onBackground:t.n1.tone(90),surface:t.n1.tone(10),onSurface:t.n1.tone(90),surfaceVariant:t.n2.tone(30),onSurfaceVariant:t.n2.tone(80),outline:t.n2.tone(60),outlineVariant:t.n2.tone(30),shadow:t.n1.tone(0),scrim:t.n1.tone(0),inverseSurface:t.n1.tone(90),inverseOnSurface:t.n1.tone(20),inversePrimary:t.a1.tone(40)})}constructor(t){this.props=t}toJSON(){return{...this.props}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0=e=>{e=e.replace("#","");const t=e.length===3,n=e.length===6,r=e.length===8;if(!t&&!n&&!r)throw new Error("unexpected hex "+e);let a=0,s=0,o=0;return t?(a=w(e.slice(0,1).repeat(2)),s=w(e.slice(1,2).repeat(2)),o=w(e.slice(2,3).repeat(2))):n?(a=w(e.slice(0,2)),s=w(e.slice(2,4)),o=w(e.slice(4,6))):r&&(a=w(e.slice(2,4)),s=w(e.slice(4,6)),o=w(e.slice(6,8))),(255<<24|(a&255)<<16|(s&255)<<8|o&255)>>>0};function w(e){return parseInt(e,16)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M0(e,t=[]){const n=M.of(e);return{source:e,schemes:{light:E.light(e),dark:E.dark(e)},palettes:{primary:n.a1,secondary:n.a2,tertiary:n.a3,neutral:n.n1,neutralVariant:n.n2,error:n.error},customColors:t.map(r=>y0(e,r))}}function y0(e,t){let n=t.value;const r=n,a=e;t.blend&&(n=st.harmonize(r,a));const o=M.of(n).a1;return{color:t,value:n,light:{color:o.tone(40),onColor:o.tone(100),colorContainer:o.tone(90),onColorContainer:o.tone(10)},dark:{color:o.tone(80),onColor:o.tone(20),colorContainer:o.tone(30),onColorContainer:o.tone(90)}}}function g0(e){let t,n,r,a,s,o,c,i;return{c(){t=Y("div"),n=Y("a"),r=Nt("Főoldal"),a=Ct(),s=Y("div"),o=Y("input"),this.h()},l(u){t=W(u,"DIV",{class:!0});var h=K(t);n=W(h,"A",{href:!0,class:!0});var f=K(n);r=$t(f,"Főoldal"),f.forEach(_),a=At(h),s=W(h,"DIV",{class:!0,style:!0});var m=K(s);o=W(m,"INPUT",{type:!0,class:!0}),m.forEach(_),h.forEach(_),this.h()},h(){G(n,"href",t0||"/"),G(n,"class","w-20 text-onSurface rounded-full p-2 outline hover:text-primary transition-all duration-300 cursor-pointer text-center"),G(o,"type","color"),G(o,"class","w-20 opacity-0 cursor-pointer"),G(s,"class","h-full outline outline-outline rounded-full hover:outline-primary transition-all duration-300"),ft(s,"background-color",e[0]),G(t,"class","bg-secondaryContainer rounded-b-full p-4 px-10 absolute top-0 w-full h-16 flex items-center justify-between")},m(u,h){x(u,t,h),J(t,n),J(n,r),J(t,a),J(t,s),J(s,o),mt(o,e[0]),c||(i=[pt(o,"input",e[2]),pt(o,"input",e[1])],c=!0)},p(u,[h]){h&1&&mt(o,u[0]),h&1&&ft(s,"background-color",u[0])},i:tt,o:tt,d(u){u&&_(t),c=!1,_t(i)}}}function I0(e,t,n){let r;function a(){let o=M0(b0(r)),c=Object.keys(o.schemes.dark.props).map(i=>{const u={[i]:`rgba(${Z(o.schemes.dark.props[i]).r}, ${Z(o.schemes.dark.props[i]).g}, ${Z(o.schemes.dark.props[i]).b}, ${Z(o.schemes.dark.props[i]).a})`};return document.documentElement.style.setProperty(`--${i}`,u[i]),u});localStorage.setItem("color",r),localStorage.setItem("theme",JSON.stringify(c))}localStorage.getItem("theme")||qt(async()=>{a()});function s(){r=this.value,n(0,r)}return n(0,r=localStorage.getItem("color")||"#DC8ADD"),[r,a,s]}class C0 extends gt{constructor(t){super(),It(this,t,I0,g0,et,{})}}function yt(e){let t,n,r;const a=e[2].default,s=Wt(a,e,e[1],null);return{c(){t=Y("div"),s&&s.c()},l(o){t=W(o,"DIV",{});var c=K(t);s&&s.l(c),c.forEach(_)},m(o,c){x(o,t,c),s&&s.m(t,null),r=!0},p(o,c){e=o,s&&s.p&&(!r||c&2)&&Xt(s,a,e,e[1],r?Kt(a,e[1],c,null):Zt(e[1]),null)},i(o){r||(H(s,o),n||Qt(()=>{n=Ht(t,r0,{easing:n0,duration:650}),n.start()}),r=!0)},o(o){Q(s,o),r=!1},d(o){o&&_(t),s&&s.d(o)}}}function A0(e){let t,n,r=e[0].url.href,a,s;t=new C0({});let o=yt(e);return{c(){Gt(t.$$.fragment),n=Ct(),o.c(),a=dt()},l(c){Ut(t.$$.fragment,c),n=At(c),o.l(c),a=dt()},m(c,i){jt(t,c,i),x(c,n,i),o.m(c,i),x(c,a,i),s=!0},p(c,[i]){i&1&&et(r,r=c[0].url.href)?(xt(),Q(o,1,1,tt),St(),o=yt(c),o.c(),H(o,1),o.m(a.parentNode,a)):o.p(c,i)},i(c){s||(H(t.$$.fragment,c),H(o),s=!0)},o(c){Q(t.$$.fragment,c),Q(o),s=!1},d(c){Jt(t,c),c&&_(n),c&&_(a),o.d(c)}}}function F0(e,t,n){let r;Yt(e,vt,o=>n(0,r=o));let{$$slots:a={},$$scope:s}=t;return localStorage.getItem("theme")&&JSON.parse(localStorage.getItem("theme")).forEach(o=>{document.documentElement.style.setProperty(`--${Object.keys(o)}`,o[Object.keys(o)])}),e.$$set=o=>{"$$scope"in o&&n(1,s=o.$$scope)},[r,s,a]}class O0 extends gt{constructor(t){super(),It(this,t,F0,A0,et,{})}}export{O0 as default};
