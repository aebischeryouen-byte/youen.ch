const AGE=(()=>{const n=new Date(),b=new Date(2007,0,24);let a=n.getFullYear()-b.getFullYear();if(n.getMonth()<b.getMonth()||(n.getMonth()===b.getMonth()&&n.getDate()<b.getDate()))a--;return a})();
const IMG=k=>(window.INLINE&&INLINE.img&&INLINE.img[k])||('assets/'+(k==='w_video'?'video/w_video.mp4':'img/'+k+'.webp'));
const C={"name": "Youen Aebischer", "site": "youen.ch", "place": "Switzerland", "about": "Hi, I'm Youen, an electronics technician (Swiss EFZ) from Switzerland, currently doing my vocational baccalaureate. I like working on anything technical, whether it's designing circuits, programming microcontrollers, or building something from scratch with a 3D printer. My projects range from custom ESP32 devices to mechanical watch builds and everything in between. When I'm not tinkering, you'll find me in the mountains, out for a run, playing cards with friends or discovering new places.", "intro": "Here are a few of my favorite builds, projects where I got to combine electronics, design, and a bit of problem solving into something tangible. Drag a model to rotate it, hover or tap the watches to see them come apart, or switch to the photos.", "lead": "Have a question about one of my projects, or want to work together? Feel free to reach out. My CV is available on request.", "stats": [{"n": 19, "l": "Years old"}, {"n": 5, "l": "Featured projects"}, {"n": 6, "l": "Watches per winder"}, {"n": 4, "l": "MCU families: ESP32, STM32, AVR, PIC"}], "skills": [{"k": "01", "t": "Electronics & embedded systems", "p": "Circuit design, microcontroller development, low power design, sensor integration, basic Wi-Fi and Bluetooth connectivity and hardware debugging.", "chips": ["ESP32 / ESP32-S3", "STM32", "ATmega", "PIC"]}, {"k": "02", "t": "PCB design & repair", "p": "Schematic capture, layout and board level repair.", "chips": ["Altium Designer", "Fusion 360"]}, {"k": "03", "t": "Programming", "p": "C/C++ and Arduino as main focus, plus basic exposure to assembly and web development. At Comet also Python scripts, Git and GitLab CI.", "chips": ["C/C++", "Arduino", "Python", "C#", "PIC Assembly", "HTML", "CSS", "JS", "Git", "GitLab CI"]}, {"k": "04", "t": "3D printing & CAD", "p": "Mechanical components, enclosures and functional prototypes.", "chips": ["Fusion 360", "FreeCAD"]}, {"k": "05", "t": "Watchmaking & precision mechanics", "p": "Hobby level assembly, modification and repair of mechanical timepieces.", "chips": ["Assembly", "Modification", "Repair"]}, {"k": "06", "t": "Buses & measurement", "p": "Implementing and testing communication interfaces and bus systems on real hardware.", "chips": ["RS-485", "RS-232", "SPI", "I²C", "UART", "Oscilloscope", "RF measurement", "High voltage testing"]}], "path": [{"dt": "2013 – 2022", "h": "School", "p": "Compulsory school (2013 to 2022). Overview of the <a href=\"https://www.sbfi.admin.ch/en/swiss-education-system\" target=\"_blank\" rel=\"noopener\">Swiss education system</a>."}, {"dt": "08.2022 – 01.2024 · ICT Berufsbildungscenter Bern", "h": "Basic training", "p": "First and second apprenticeship year: manufacturing, circuit and measurement technology, programming (PIC in C and assembly) and project work. Plus a six month placement in Comet's X-ray generator production: assembly and final testing of boards and generators."}, {"dt": "2024 – 2026 · Comet AG, Flamatt", "h": "X-ray and RF divisions", "p": "Focus training in the divisions IXM (Industrial X-ray Modules, HV generators) and PCT (Plasma Control Technologies, RF generators and matchboxes). Hardware and software for prototypes, test equipment and embedded systems, PCB design in Altium, lab testing and software development in an international team with English as working language."}, {"dt": "2025 · 2 weeks", "h": "Copenhagen, Denmark", "p": "Placement abroad in industrial X-ray technology, English speaking environment."}, {"dt": "2026", "h": "Electronics Technician EFZ", "p": "Apprenticeship completed at <a href=\"https://comet.tech/en\" target=\"_blank\" rel=\"noopener\">Comet AG</a>. Federal VET Diploma, see the <a href=\"https://www.sbfi.admin.ch/en/vocational-education-and-training-vet\" target=\"_blank\" rel=\"noopener\">Swiss VET system</a>."}, {"dt": "Now", "h": "Federal Vocational Baccalaureate", "p": "<a href=\"https://www.aboutswitzerland.eda.admin.ch/en/vocational-education-and-training\" target=\"_blank\" rel=\"noopener\">Berufsmaturität</a>: one year of full-time maths, physics and languages, German language track in Fribourg, until summer 2027."}, {"dt": "Autumn 2027 – 2028", "h": "Work abroad", "p": "Open to a technician role abroad for up to twelve months: hands-on work in electronics, test or assembly, ideally close to mechanical engineering. After that, from 2028, I plan to study mechanical engineering."}], "langs": ["German · native", "English · C1", "French · basic", "Interests: propulsion, spaceflight", "Climbing · Running · Hiking"], "projects": [{"n": "01", "id": "art1", "t": "Watch Winder", "p": "A self-built watch winder that holds up to six automatic watches at once, keeping them wound and running. Behind the rotating slots, there's additional static storage for more watches, plus small drawers for straps and accessories. The whole thing was designed, printed, and programmed by me, and it's been running reliably ever since.", "status": "Running reliably", "list": [], "kind": "winder"}, {"n": "02", "id": "art2", "t": "Mechanical Wristwatch", "p": "It started with building custom watches from scratch: ordering individual parts like cases, dials, movements, and hands, then assembling them myself. After building several watches this way, I wanted to design something entirely my own. I developed a fully custom wristwatch using CAD and 3D printing, from the case to the dial. The prototype both worked and looked the part. It's currently taken apart again, but the project is far from over.", "status": "Prototype built, next version in progress", "list": [], "kind": "watch4"}, {"n": "03", "id": "art3", "t": "Twist V1 · Custom Electronic Wristwatch", "p": "A custom wristwatch combining high concept watchmaking with embedded electronics: a twisted lattice case in SLM printed titanium, inspired a bit by MB&amp;F and by BIG's museum \"The Twist\" at Kistefos, with the PCB visible as part of the design. A 4 digit LCD is driven by a custom STM32 board I designed and soldered myself. Case, electronics and firmware were all developed from the ground up. The first prototype runs. A start-up issue in the power delivery is solved: when the watch is charged or started, it now runs directly on the charger's 3 V. Next: refine the electronics and build a second, cleaner unit.", "status": "Prototype runs", "list": [], "kind": "twist"}, {"n": "04", "id": "art4", "t": "Mechanical 3D-Printed Perpetual Calendar", "p": "Inspired by Clayton Boyer's designs on <a class=\"src\" href=\"https://lisaboyer.com\" target=\"_blank\" rel=\"noopener\">lisaboyer.com</a>, I loved the idea of simply flipping a lever each day and having the date update automatically. I redesigned the whole mechanism in CAD, changed a few things to make it my own, but kept the core lever concept. It currently works well for regular dates. Leap year handling is designed but still needs some fine tuning due to friction in the gear train.", "status": "Regular dates work, leap years in tuning", "list": [], "kind": "calendar"}, {"n": "05", "id": "art5", "t": "Pinfinity · Pinball Machine", "p": "A compact pinball machine, built to show young visitors at a careers fair what an electronics technician does. I designed the case, the playfield parts and the controller board, and programmed both controllers. An ESP32-S3 reads the switches and fires the 12 V flipper and bumper solenoids through six I²C port expanders and MOSFETs, and serves a small web page for live data and OTA updates. A second board drives the 64×32 RGB LED matrix: score, animations and a jump and run video mode. The case is 5 mm acrylic, held together by 3D printed brackets.", "status": "Built and playable", "list": [], "kind": "pinball"}], "typer": ["custom ESP32 devices", "PCBs in Altium", "firmware in C/C++", "3D printed prototypes", "mechanical watches"], "w1": ["ESP32", "PIC", "ATmega", "STM32", "Altium", "Fusion 360", "C/C++", "Arduino"], "w2": ["3D Printing", "CAD", "Watchmaking", "Climbing", "Running", "PCB Design", "Prototypes"], "mail": "mailto:mail@youen.ch", "facts": [["Based in", "Switzerland"], ["Trade", "Electronics Technician EFZ, a <a href=\"https://www.sbfi.admin.ch/en/vocational-education-and-training-vet\" target=\"_blank\" rel=\"noopener\">Federal VET Diploma</a> (Swiss trade qualification), trained at <a href=\"https://comet.tech/en\" target=\"_blank\" rel=\"noopener\">Comet AG</a>"], ["Now", "<a href=\"https://www.aboutswitzerland.eda.admin.ch/en/vocational-education-and-training\" target=\"_blank\" rel=\"noopener\">Federal Vocational Baccalaureate</a> (Berufsmaturität) in Fribourg, full time"], ["Next", "Up to twelve months of work abroad from August or September 2027, then a planned degree in mechanical engineering"], ["Free time", "Climbing and hiking with the <a href=\"https://www.sac-cas.ch/en/\" target=\"_blank\" rel=\"noopener\">Swiss Alpine Club</a>, running, card games with friends, travelling"]], "note": "About the 3D models: they are built from my own CAD files. Straps, movements, the watches on the winder and the animations were added with the help of AI to get closer to the real builds. They are for illustration only and do not look exactly like the originals.", "bench": [["In design", "Twist V2", "A second, cleaner unit of the electronic wristwatch, with reworked power delivery and refined electronics."], ["Planning", "Self-balancing robot", "A small two-wheeled robot with an ESP32-S3 as its brain, a display for a face and movable arms."]], "ai": "Microcontrollers are my thing, web graphics less so: this website was built with the help of AI."};
C.about=C.about.replace('{age}',AGE);
const TH=TX.THREE;
/* shared content, identical facts to the main version */

const $=(q,r=document)=>r.querySelector(q),$$=(q,r=document)=>[...r.querySelectorAll(q)];
function gearPath(teeth,r1,r2){let d='';const st=Math.PI*2/teeth;for(let t=0;t<teeth;t++){const a=t*st;[[r1,0],[r2,.18],[r2,.45],[r1,.63]].forEach(([r,o],i)=>{const an=a+o*st;d+=(t===0&&i===0?'M':'L')+(Math.cos(an)*r).toFixed(2)+' '+(Math.sin(an)*r).toFixed(2)+' '})}return d+'Z'}
function logoSVG(cls='',sw=1){return `<svg class="lg ${cls}" viewBox="-46 -66 236 236" aria-hidden="true"><circle cx="72" cy="52" r="112" fill="none" stroke="currentColor" stroke-width="4"/><path d="M0.50 100.05 L0.80 98.49 L1.11 96.94 L1.44 95.39 L1.79 93.84 L2.16 92.30 L2.55 90.76 L2.96 89.22 L3.39 87.68 L3.84 86.15 L4.32 84.62 L4.81 83.09 L5.33 81.57 L5.86 80.06 L6.42 78.55 L6.99 77.04 L7.59 75.54 L8.20 74.05 L8.84 72.56 L9.49 71.08 L10.16 69.60 L10.85 68.13 L11.56 66.67 L12.28 65.21 L13.02 63.76 L13.79 62.32 L14.56 60.89 L15.36 59.47 L16.17 58.05 L17.00 56.64 L17.85 55.24 L18.71 53.85 L19.59 52.47 L20.49 51.09 L21.40 49.73 L22.33 48.38 L23.27 47.03 L24.23 45.70 L25.21 44.37 L26.20 43.06 L27.20 41.76 L28.22 40.46 L29.26 39.18 L30.31 37.91 L31.38 36.65 L32.46 35.40 L33.56 34.16 L34.67 32.94 L35.80 31.73 L36.94 30.52 L38.10 29.34 L39.27 28.16 L40.46 27.00 L41.66 25.85 L42.88 24.71 L44.11 23.59 L45.36 22.48 L46.62 21.38 L47.90 20.30 L49.20 19.24 L50.51 18.18 L51.83 17.15 L53.17 16.13 L54.53 15.12 L55.90 14.13 L57.29 13.16 L58.70 12.20 L60.12 11.26 L61.56 10.33 L63.02 9.42 L64.49 8.53 L65.98 7.66 L67.49 6.81 L69.02 5.97 L70.56 5.15 L72.12 4.35 L73.69 3.56 L75.29 2.79 L76.90 2.03 L78.52 1.28 L80.15 0.48 L79.85 -0.48 L78.04 -0.20 L76.26 0.18 L74.50 0.61 L72.75 1.08 L71.01 1.59 L69.29 2.14 L67.58 2.72 L65.89 3.33 L64.21 3.98 L62.55 4.65 L60.90 5.36 L59.26 6.10 L57.65 6.87 L56.05 7.67 L54.46 8.50 L52.90 9.36 L51.35 10.24 L49.81 11.16 L48.30 12.10 L46.81 13.07 L45.33 14.06 L43.88 15.08 L42.44 16.12 L41.02 17.19 L39.63 18.29 L38.25 19.40 L36.89 20.54 L35.56 21.71 L34.25 22.89 L32.96 24.10 L31.69 25.33 L30.44 26.58 L29.22 27.85 L28.02 29.14 L26.84 30.44 L25.68 31.77 L24.55 33.11 L23.44 34.47 L22.36 35.85 L21.30 37.24 L20.26 38.65 L19.25 40.08 L18.26 41.52 L17.30 42.97 L16.36 44.44 L15.44 45.91 L14.55 47.41 L13.69 48.91 L12.85 50.42 L12.03 51.95 L11.24 53.48 L10.48 55.02 L9.74 56.58 L9.03 58.14 L8.34 59.71 L7.68 61.28 L7.04 62.87 L6.43 64.46 L5.84 66.05 L5.28 67.65 L4.74 69.25 L4.23 70.86 L3.75 72.48 L3.29 74.09 L2.86 75.71 L2.45 77.33 L2.07 78.95 L1.71 80.57 L1.38 82.20 L1.08 83.82 L0.80 85.44 L0.55 87.06 L0.32 88.69 L0.12 90.30 L-0.05 91.92 L-0.20 93.53 L-0.32 95.14 L-0.41 96.75 L-0.47 98.35 L-0.50 99.95 Z" fill="currentColor"/><path d="M42.50 100.05 L42.80 98.49 L43.11 96.94 L43.44 95.39 L43.79 93.84 L44.16 92.30 L44.55 90.76 L44.96 89.22 L45.39 87.68 L45.84 86.15 L46.32 84.62 L46.81 83.09 L47.33 81.57 L47.86 80.06 L48.42 78.55 L48.99 77.04 L49.59 75.54 L50.20 74.05 L50.84 72.56 L51.49 71.08 L52.16 69.60 L52.85 68.13 L53.56 66.67 L54.28 65.21 L55.02 63.76 L55.79 62.32 L56.56 60.89 L57.36 59.47 L58.17 58.05 L59.00 56.64 L59.85 55.24 L60.71 53.85 L61.59 52.47 L62.49 51.09 L63.40 49.73 L64.33 48.38 L65.27 47.03 L66.23 45.70 L67.21 44.37 L68.20 43.06 L69.20 41.76 L70.22 40.46 L71.26 39.18 L72.31 37.91 L73.38 36.65 L74.46 35.40 L75.56 34.16 L76.67 32.94 L77.80 31.73 L78.94 30.52 L80.10 29.34 L81.27 28.16 L82.46 27.00 L83.66 25.85 L84.88 24.71 L86.11 23.59 L87.36 22.48 L88.62 21.38 L89.90 20.30 L91.20 19.24 L92.51 18.18 L93.83 17.15 L95.17 16.13 L96.53 15.12 L97.90 14.13 L99.29 13.16 L100.70 12.20 L102.12 11.26 L103.56 10.33 L105.02 9.42 L106.49 8.53 L107.98 7.66 L109.49 6.81 L111.02 5.97 L112.56 5.15 L114.12 4.35 L115.69 3.56 L117.29 2.79 L118.90 2.03 L120.52 1.28 L122.15 0.48 L121.85 -0.48 L120.04 -0.20 L118.26 0.18 L116.50 0.61 L114.75 1.08 L113.01 1.59 L111.29 2.14 L109.58 2.72 L107.89 3.33 L106.21 3.98 L104.55 4.65 L102.90 5.36 L101.26 6.10 L99.65 6.87 L98.05 7.67 L96.46 8.50 L94.90 9.36 L93.35 10.24 L91.81 11.16 L90.30 12.10 L88.81 13.07 L87.33 14.06 L85.88 15.08 L84.44 16.12 L83.02 17.19 L81.63 18.29 L80.25 19.40 L78.89 20.54 L77.56 21.71 L76.25 22.89 L74.96 24.10 L73.69 25.33 L72.44 26.58 L71.22 27.85 L70.02 29.14 L68.84 30.44 L67.68 31.77 L66.55 33.11 L65.44 34.47 L64.36 35.85 L63.30 37.24 L62.26 38.65 L61.25 40.08 L60.26 41.52 L59.30 42.97 L58.36 44.44 L57.44 45.91 L56.55 47.41 L55.69 48.91 L54.85 50.42 L54.03 51.95 L53.24 53.48 L52.48 55.02 L51.74 56.58 L51.03 58.14 L50.34 59.71 L49.68 61.28 L49.04 62.87 L48.43 64.46 L47.84 66.05 L47.28 67.65 L46.74 69.25 L46.23 70.86 L45.75 72.48 L45.29 74.09 L44.86 75.71 L44.45 77.33 L44.07 78.95 L43.71 80.57 L43.38 82.20 L43.08 83.82 L42.80 85.44 L42.55 87.06 L42.32 88.69 L42.12 90.30 L41.95 91.92 L41.80 93.53 L41.68 95.14 L41.59 96.75 L41.53 98.35 L41.50 99.95 Z" fill="currentColor"/><path d="M84.50 100.05 L84.80 98.49 L85.11 96.94 L85.44 95.39 L85.79 93.84 L86.16 92.30 L86.55 90.76 L86.96 89.22 L87.39 87.68 L87.84 86.15 L88.32 84.62 L88.81 83.09 L89.33 81.57 L89.86 80.06 L90.42 78.55 L90.99 77.04 L91.59 75.54 L92.20 74.05 L92.84 72.56 L93.49 71.08 L94.16 69.60 L94.85 68.13 L95.56 66.67 L96.28 65.21 L97.02 63.76 L97.79 62.32 L98.56 60.89 L99.36 59.47 L100.17 58.05 L101.00 56.64 L101.85 55.24 L102.71 53.85 L103.59 52.47 L104.49 51.09 L105.40 49.73 L106.33 48.38 L107.27 47.03 L108.23 45.70 L109.21 44.37 L110.20 43.06 L111.20 41.76 L112.22 40.46 L113.26 39.18 L114.31 37.91 L115.38 36.65 L116.46 35.40 L117.56 34.16 L118.67 32.94 L119.80 31.73 L120.94 30.52 L122.10 29.34 L123.27 28.16 L124.46 27.00 L125.66 25.85 L126.88 24.71 L128.11 23.59 L129.36 22.48 L130.62 21.38 L131.90 20.30 L133.20 19.24 L134.51 18.18 L135.83 17.15 L137.17 16.13 L138.53 15.12 L139.90 14.13 L141.29 13.16 L142.70 12.20 L144.12 11.26 L145.56 10.33 L147.02 9.42 L148.49 8.53 L149.98 7.66 L151.49 6.81 L153.02 5.97 L154.56 5.15 L156.12 4.35 L157.69 3.56 L159.29 2.79 L160.90 2.03 L162.52 1.28 L164.15 0.48 L163.85 -0.48 L162.04 -0.20 L160.26 0.18 L158.50 0.61 L156.75 1.08 L155.01 1.59 L153.29 2.14 L151.58 2.72 L149.89 3.33 L148.21 3.98 L146.55 4.65 L144.90 5.36 L143.26 6.10 L141.65 6.87 L140.05 7.67 L138.46 8.50 L136.90 9.36 L135.35 10.24 L133.81 11.16 L132.30 12.10 L130.81 13.07 L129.33 14.06 L127.88 15.08 L126.44 16.12 L125.02 17.19 L123.63 18.29 L122.25 19.40 L120.89 20.54 L119.56 21.71 L118.25 22.89 L116.96 24.10 L115.69 25.33 L114.44 26.58 L113.22 27.85 L112.02 29.14 L110.84 30.44 L109.68 31.77 L108.55 33.11 L107.44 34.47 L106.36 35.85 L105.30 37.24 L104.26 38.65 L103.25 40.08 L102.26 41.52 L101.30 42.97 L100.36 44.44 L99.44 45.91 L98.55 47.41 L97.69 48.91 L96.85 50.42 L96.03 51.95 L95.24 53.48 L94.48 55.02 L93.74 56.58 L93.03 58.14 L92.34 59.71 L91.68 61.28 L91.04 62.87 L90.43 64.46 L89.84 66.05 L89.28 67.65 L88.74 69.25 L88.23 70.86 L87.75 72.48 L87.29 74.09 L86.86 75.71 L86.45 77.33 L86.07 78.95 L85.71 80.57 L85.38 82.20 L85.08 83.82 L84.80 85.44 L84.55 87.06 L84.32 88.69 L84.12 90.30 L83.95 91.92 L83.80 93.53 L83.68 95.14 L83.59 96.75 L83.53 98.35 L83.50 99.95 Z" fill="currentColor"/><path d="M-20 5 C0 6 12 30 13.3 56.5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M42.5 99.5 C56 92 72 90 88 93" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M164 0 C160 30 155 66 152 100" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M92 52 C114 47 136 50 162 57" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="9" cy="100" r="3.4" fill="currentColor"/><circle cx="95" cy="94" r="3.4" fill="currentColor"/></svg>`}
function formDemo(form,ids,btn){form.addEventListener('submit',e=>{e.preventDefault();const bad=ids.filter(id=>!$('#'+id).value.trim());if(bad.length){form.classList.remove('shake');void form.offsetWidth;form.classList.add('shake');$('#'+bad[0]).focus();return}form.classList.add('sent');btn.textContent='Sent (demo)'})}

/* ================= project models (3D, from Youen's CAD files) ================= */
const M3={items:[],render(){},add(){},gallery(){},paused:false,ok:false};
(function(){try{
const LOW=matchMedia('(max-width:860px),(pointer:coarse)').matches,W=640,H=480,PR=Math.min(devicePixelRatio,LOW?1.25:1.5)*(window.M3PR||1),PI=Math.PI,V=(x,y,z)=>new TH.Vector3(x,y,z);
const rd=new TH.WebGLRenderer({antialias:true,alpha:true});
let RW=Math.ceil(W*PR),RH=Math.ceil(H*PR);rd.setPixelRatio(1);rd.setSize(RW,RH,false);rd.setScissorTest(true);rd.toneMappingExposure=window.M3EXP||1;rd.toneMapping=TH.ACESFilmicToneMapping;rd.setClearColor(0,0);
const env=new TH.PMREMGenerator(rd).fromScene(new TX.RoomEnvironment(),.04).texture;
const loader=new TX.GLTFLoader();loader.setMeshoptDecoder(TX.MeshoptDecoder);
const cTex=(w,h,fn,rep)=>{const c=document.createElement('canvas');c.width=w;c.height=h;fn(c.getContext('2d'),w,h);const t=new TH.CanvasTexture(c);t.colorSpace=TH.SRGBColorSpace;t.anisotropy=4;if(rep){t.wrapS=t.wrapT=TH.RepeatWrapping;t.repeat.set(...rep)}return t};
const noise=cTex(256,256,(x,w,h)=>{const d=x.createImageData(w,h);for(let i=0;i<w*h;i++){const v=105+Math.random()*130;d.data[i*4]=d.data[i*4+1]=d.data[i*4+2]=v;d.data[i*4+3]=255}x.putImageData(d,0,0)},[8,8]);noise.colorSpace=TH.NoColorSpace;
const fabricTex=cTex(64,64,(x,w,h)=>{x.fillStyle='#808080';x.fillRect(0,0,w,h);for(let i=0;i<h;i+=4){x.fillStyle='#b0b0b0';x.fillRect(0,i,w,2)}},[1,30]);fabricTex.colorSpace=TH.NoColorSpace;
const carbonTex=cTex(128,128,(x,w,h)=>{for(let i=0;i<8;i++)for(let j=0;j<8;j++){const a=(i+j)%2===0;const g=x.createLinearGradient(i*16,j*16,i*16+16,j*16+16);g.addColorStop(0,a?'#3a3c42':'#121316');g.addColorStop(1,a?'#121316':'#34363c');x.fillStyle=g;x.fillRect(i*16,j*16,16,16)}},[20,2]);
const std=o=>new TH.MeshStandardMaterial({side:TH.DoubleSide,...o}),phys=o=>new TH.MeshPhysicalMaterial({side:TH.DoubleSide,...o});
const MAT={
  pla:std({color:0xefece5,roughness:.62}), plaB:std({color:0x18181b,roughness:.55}), plaB2:std({color:0x222226,roughness:.5}),
  plaG:std({color:0x37a948,roughness:.5}), plaY:std({color:0xe9a11d,roughness:.5}), plaW:std({color:0xf2f0ea,roughness:.55}),
  ti:std({color:0x75777c,metalness:1,roughness:.72,bumpMap:noise,bumpScale:1.6}),
  steel:phys({color:0xb4b8be,metalness:1,roughness:.34,anisotropy:.7,bumpMap:noise,bumpScale:.12,envMapIntensity:.85}),
  steelP:std({color:0xe8e9ec,metalness:1,roughness:.14}),
  carbon:phys({map:carbonTex,metalness:.35,roughness:.35,clearcoat:1,clearcoatRoughness:.08}),
  glass:phys({color:0xffffff,metalness:0,roughness:.03,transparent:true,opacity:.1,clearcoat:1,depthWrite:false}),
  body:std({color:0xece8e2,roughness:.45}),
  mask:phys({color:0x0d0e10,roughness:.5,clearcoat:.35,clearcoatRoughness:.35,envMapIntensity:.5}), gold:std({color:0xd8ac55,metalness:1,roughness:.28}),
  pin:std({color:0xcfd0d2,metalness:1,roughness:.3}), chip:std({color:0x1a1a1c,roughness:.7}), dark:std({color:0x2a2b2e,roughness:.6}),
  fabW:phys({color:0xf2f2ee,roughness:.95,sheen:.5,sheenColor:0xffffff,sheenRoughness:.6,bumpMap:fabricTex,bumpScale:.6}),
  fabB:phys({color:0x141416,roughness:.95,sheen:.4,sheenColor:0x555555,sheenRoughness:.6,bumpMap:fabricTex,bumpScale:.6}),
  leather:std({color:0x1b1c22,roughness:.7})
};
function glb(key){return new Promise((res,rej)=>{const done=buf=>loader.parse(buf,'',g=>res(g.scene),rej);
  if(window.INLINE&&INLINE.glb&&INLINE.glb[key]){const s=atob(INLINE.glb[key]),b=new Uint8Array(s.length);for(let i=0;i<s.length;i++)b[i]=s.charCodeAt(i);done(b.buffer)}
  else fetch('assets/models/'+key+'.glb').then(r=>{if(!r.ok)throw new Error('model '+key+' '+r.status);return r.arrayBuffer()}).then(done).catch(rej)})}
/* collect meshes by their node name, give CAD hard edges crisp normals */
function prep(scene,names){const map={};scene.updateMatrixWorld(true);scene.traverse(o=>{if(!o.isMesh)return;let p=o,n=null;while(p){if(names(p.name)){n=p.name;break}p=p.parent}
  o.geometry=TX.toCreasedNormals(o.geometry,PI/7);(map[n]=map[n]||[]).push(o)});return map}
const setM=(arr,m)=>(arr||[]).forEach(o=>o.material=m);
const ribbon=(pts,w,t,m,steps=120,closed=false)=>{const c=new TH.CatmullRomCurve3(pts.map(p=>V(...p)),closed,'centripetal');const sh=new TH.Shape();sh.moveTo(-w/2,-t/2);sh.lineTo(w/2,-t/2);sh.lineTo(w/2,t/2);sh.lineTo(-w/2,t/2);sh.closePath();
  const g=new TH.ExtrudeGeometry(sh,{steps,bevelEnabled:false,extrudePath:c});const me=new TH.Mesh(g,m);me.userData.curve=c;return me};
function keeper(curve,u,w,t,m){const p=curve.getPointAt(u),tg=curve.getTangentAt(u).normalize(),g=new TH.Group();g.position.copy(p);const xa=V(0,0,1),ya=V().crossVectors(tg,xa).normalize();g.quaternion.setFromRotationMatrix(new TH.Matrix4().makeBasis(xa,ya,tg));const s=new TH.Shape(),hw=w/2+.8,ht=t/2+.9;
  s.moveTo(-hw,-ht);s.lineTo(hw,-ht);s.lineTo(hw,ht);s.lineTo(-hw,ht);s.closePath();const h=new TH.Path(),iw=w/2+.15,it=t/2+.2;h.moveTo(-iw,-it);h.lineTo(-iw,it);h.lineTo(iw,it);h.lineTo(iw,-it);h.closePath();s.holes.push(h);
  const ge=new TH.ExtrudeGeometry(s,{depth:3,bevelEnabled:true,bevelThickness:.3,bevelSize:.3,bevelSegments:2});ge.translate(0,0,-1.5);const me=new TH.Mesh(ge,m);g.add(me);return g}
const ease=u=>u<.5?4*u*u*u:1-Math.pow(-2*u+2,3)/2, clamp01=v=>Math.max(0,Math.min(1,v));

/* ---------- dial / movement textures ---------- */
function dialTex(kind){return cTex(256,256,(x,w,h)=>{const C=128;x.clearRect(0,0,w,h);
  const bg={blue:['#2a4b86','#0e1d3c'],black:['#2a2726','#0c0b0b'],monster:['#9fd6ef','#56a9d8'],green:['#22292a','#0b0f10']}[kind];
  const g=x.createRadialGradient(100,96,10,C,C,128);g.addColorStop(0,bg[0]);g.addColorStop(1,bg[1]);x.fillStyle=g;x.beginPath();x.arc(C,C,126,0,7);x.fill();
  if(kind==='monster'){x.fillStyle='#3a8fdc';x.beginPath();x.ellipse(C,150,72,64,0,0,7);x.fill();x.fillStyle='#fff';[[100,118],[154,112]].forEach(([a,b])=>{x.beginPath();x.arc(a,b,18,0,7);x.fill()});x.fillStyle='#111';[[104,120],[150,115]].forEach(([a,b])=>{x.beginPath();x.arc(a,b,7,0,7);x.fill()});
    x.fillStyle='#d73a3e';x.beginPath();x.ellipse(C,172,32,17,0,0,PI);x.fill();x.fillStyle='#fff';for(let i=0;i<4;i++)x.fillRect(104+i*13,172,8,8);x.fillStyle='#f2c230';x.beginPath();x.arc(70,66,13,0,7);x.fill()}
  if(kind==='blue'){x.fillStyle='#d8b56b';x.beginPath();x.arc(C,168,30,0,7);x.fill();x.fillStyle='#1a1a1c';x.beginPath();x.arc(C,168,24,0,7);x.fill();x.strokeStyle='#c9a35a';x.lineWidth=3;for(let i=0;i<10;i++){const a=i/10*PI*2;x.beginPath();x.moveTo(C,168);x.lineTo(C+Math.cos(a)*22,168+Math.sin(a)*22);x.stroke()}}
  const acc={blue:'#e6c27a',black:'#cfcfcf',monster:'#ffffff',green:'#d6d6d6'}[kind];x.fillStyle=acc;
  for(let i=0;i<12;i++){const a=i/12*PI*2;x.save();x.translate(C+Math.cos(a)*102,C+Math.sin(a)*102);x.rotate(a);x.fillRect(-13,-4,26,8);x.restore()}
  if(kind==='green'){x.fillStyle='#4fc06a';for(let i=0;i<60;i++){if(i%5)continue;const a=i/60*PI*2;x.beginPath();x.arc(C+Math.cos(a)*86,C+Math.sin(a)*86,3,0,7);x.fill()}}
  x.fillStyle='#e9e9ea';x.save();x.translate(C,C);x.rotate(-.9);x.fillRect(-3,-78,6,80);x.restore();x.save();x.translate(C,C);x.rotate(1.2);x.fillRect(-4,-55,8,57);x.restore()})}
const skelTex=cTex(512,512,(x,w,h)=>{x.clearRect(0,0,w,h);x.fillStyle='#1d1e22';x.beginPath();x.arc(256,256,256,0,7);x.fill();
  const gear=(cx,cy,r,col)=>{x.fillStyle=col;x.beginPath();for(let i=0;i<72;i++){const a=i/72*PI*2,rr=i%2?r:r+6;x.lineTo(cx+Math.cos(a)*rr,cy+Math.sin(a)*rr)}x.fill();x.fillStyle='#1d1e22';for(let i=0;i<5;i++){const a=i/5*PI*2+.3;x.beginPath();x.arc(cx+Math.cos(a)*r*.55,cy+Math.sin(a)*r*.55,r*.27,0,7);x.fill()}x.fillStyle='#e8e8ea';x.beginPath();x.arc(cx,cy,6,0,7);x.fill()};
  gear(176,196,88,'#c9a466');gear(352,170,56,'#d1d3d8');gear(330,342,78,'#c9a466');gear(166,372,48,'#b8babf');gear(258,256,36,'#d8b878');
  x.fillStyle='#c6c8cd';x.beginPath();x.moveTo(52,112);x.bezierCurveTo(200,40,330,60,466,142);x.lineTo(460,184);x.bezierCurveTo(330,110,200,96,62,154);x.fill();
  x.beginPath();x.moveTo(86,424);x.bezierCurveTo(220,352,330,362,444,424);x.lineTo(432,460);x.bezierCurveTo(320,404,220,398,96,460);x.fill();
  [[176,196],[330,342],[352,170],[110,128],[424,150]].forEach(([a,b])=>{x.fillStyle='#b2142c';x.beginPath();x.arc(a,b,8,0,7);x.fill()});
  x.strokeStyle='#bdbfc4';x.lineWidth=3;for(let i=0;i<60;i++){const a=i/60*PI*2,l=i%5?6:16;x.beginPath();x.moveTo(256+Math.cos(a)*250,256+Math.sin(a)*250);x.lineTo(256+Math.cos(a)*(250-l),256+Math.sin(a)*(250-l));x.stroke()}});
const rotorTex=cTex(512,512,(x,w,h)=>{x.clearRect(0,0,w,h);x.fillStyle='#1d1e22';x.beginPath();x.arc(256,256,256,0,7);x.fill();x.fillStyle='#c9cbd0';x.beginPath();x.moveTo(256,256);x.arc(256,256,236,PI*.05,PI*.95);x.closePath();x.fill();
  x.fillStyle='#9fa2a8';for(let i=0;i<9;i++){x.beginPath();x.arc(256+Math.cos(PI*(.1+i*.1))*196,256+Math.sin(PI*(.1+i*.1))*196,10,0,7);x.fill()}x.fillStyle='#d8b878';x.beginPath();x.arc(256,256,26,0,7);x.fill()});

/* ---------- live 7 segment LCD (Twist V1) ---------- */
const lcdC=document.createElement('canvas');lcdC.width=512;lcdC.height=256;const lcdX=lcdC.getContext('2d');const lcdT=new TH.CanvasTexture(lcdC);lcdT.colorSpace=TH.SRGBColorSpace;lcdT.anisotropy=4;
const SEG={0:'abcdef',1:'bc',2:'abdeg',3:'abcdg',4:'bcfg',5:'acdfg',6:'acdefg',7:'abc',8:'abcdefg',9:'abcdfg'};let lcdK=-1;
function lcdDraw(){const d=new Date(),k=d.getHours()*1e4+d.getMinutes()*100+d.getSeconds()%2;if(k===lcdK)return;lcdK=k;const x=lcdX;
  const g=x.createLinearGradient(0,0,0,256);g.addColorStop(0,'#aab09a');g.addColorStop(1,'#8e9480');x.fillStyle=g;x.fillRect(0,0,512,256);
  const s=String(d.getHours()).padStart(2,'0')+String(d.getMinutes()).padStart(2,'0');
  const seg=(ox,oy,c,on)=>{const w=60,t=12,L=74;const p={a:[ox,oy,w,t],b:[ox+w,oy+t,t,L],c:[ox+w,oy+L+2*t+4,t,L],d:[ox,oy+2*L+2*t+8,w,t],e:[ox-t,oy+L+2*t+4,t,L],f:[ox-t,oy+t,t,L],g:[ox,oy+L+t+2,w,t]}[c];x.fillStyle=on?'#262a20':'rgba(60,66,50,.07)';x.save();x.transform(1,0,-.1,1,0,0);x.fillRect(...p);x.restore()};
  [70,170,300,400].forEach((ox,i)=>'abcdefg'.split('').forEach(c=>seg(ox,22,c,SEG[+s[i]].includes(c))));
  x.fillStyle=d.getSeconds()%2?'#262a20':'rgba(60,66,50,.07)';x.fillRect(262,80,12,12);x.fillRect(256,150,12,12);
  const sh=x.createLinearGradient(0,0,512,256);sh.addColorStop(0,'rgba(255,255,255,.18)');sh.addColorStop(.5,'rgba(255,255,255,0)');x.fillStyle=sh;x.fillRect(0,0,512,256);lcdT.needsUpdate=true}

/* ---------- wrist watch on a winder pillow ---------- */
function pillowWatch(kind,strapM){const g=new TH.Group(),h=new TH.Group();g.add(h);
  const cs=new TH.LatheGeometry([[0,-5.5],[19,-5.5],[20.3,-3],[20.3,3.5],[19,5.5],[0,5.5]].map(([a,b])=>new TH.Vector2(a,b)),64);const c=new TH.Mesh(cs,MAT.steelP);c.rotation.x=PI/2;h.add(c);
  const d=new TH.Mesh(new TH.CircleGeometry(17.2,64),std({map:dialTex(kind),roughness:.35}));d.position.z=5.6;h.add(d);
  const gl=new TH.Mesh(new TH.CircleGeometry(17.6,48),MAT.glass);gl.position.z=6.2;h.add(gl);
  const cr=new TH.Mesh(new TH.CylinderGeometry(2.6,2.6,4,20),MAT.steelP);cr.rotation.z=PI/2;cr.position.x=22;h.add(cr);
  [-1,1].forEach(s=>[-1,1].forEach(e=>{const l=new TH.Mesh(new TX.RoundedBoxGeometry(3.6,7,6,2,1.2),MAT.steelP);l.position.set(e*8,s*20,0);h.add(l)}));
  return g}

/* ---------- scene factory ---------- */
function mk(id,build,o){
  const host=typeof id==='string'?$('#'+id):id;if(!host)return;const w=o.w||W,h=o.h||H;const cv=document.createElement('canvas');cv.width=Math.round(w*PR);cv.height=Math.round(h*PR);if(cv.width>RW||cv.height>RH){RW=Math.max(RW,cv.width);RH=Math.max(RH,cv.height);rd.setSize(RW,RH,false)}cv.className='m3';host.appendChild(cv);
  const sc=new TH.Scene();sc.environment=env;sc.environmentIntensity=o.env||.9;
  const cam=new TH.PerspectiveCamera(o.fov||30,w/h,1,5000);
  const key=new TH.DirectionalLight(o.key||0xffffff,o.keyI||2.4);key.position.set(.6,1,.8);sc.add(key);const fill=new TH.DirectionalLight(0xdfe8ff,.7);fill.position.set(-1,.4,.6);sc.add(fill);
  const rim=new TH.PointLight(o.rimColor||0xc6ff3d,0,0,2);sc.add(rim);
  const spin=new TH.Group(),root=new TH.Group();spin.add(root);sc.add(spin);
  const it={host,cv,ctx:cv.getContext('2d'),sc,cam,spin,root,vis:false,ready:false,upd:null,t:0,born:-1,dragX:0,dragY:0,yaw:0,pitch:0,hover:0,o};M3.items.push(it);
  new IntersectionObserver(es=>es.forEach(e=>it.vis=e.isIntersecting),{threshold:.05}).observe(host);
  host.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')it.hovering=true});host.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse'){it.hovering=false;it.drag=null}});
  host.addEventListener('pointerdown',e=>{if(e.target.closest('.pv,.gal')||host.classList.contains('photo'))return;it.drag={x:e.clientX,y:e.clientY,yaw:it.dragX,pitch:it.dragY,touch:e.pointerType!=='mouse',moved:0};if(!it.drag.touch)host.setPointerCapture(e.pointerId)});
  host.addEventListener('pointermove',e=>{const d=it.drag;if(!d)return;const dx=e.clientX-d.x,dy=e.clientY-d.y;d.moved=Math.max(d.moved,Math.hypot(dx,dy));
    if(d.touch){if(Math.abs(dx)>Math.abs(dy)){it.dragX=d.yaw+dx*.012;it.lastDrag=performance.now()}return}
    it.dragX=d.yaw+dx*.012;it.dragY=Math.max(-.6,Math.min(.6,d.pitch+dy*.008));it.lastDrag=performance.now()});
  const up=()=>{const d=it.drag;it.drag=null;if(d&&d.touch&&d.moved<8)it.tap=!it.tap};host.addEventListener('pointerup',up);host.addEventListener('pointercancel',()=>it.drag=null);
  build(root,it).then(upd=>{it.upd=upd;
    /* fit: whole model (straps, stands, everything) stays inside the frame for every yaw and a range of pitch */
    const b=new TH.Box3().setFromObject(root),c=b.getCenter(V(0,0,0)),r=b.getSize(V(0,0,0)).length()/2;root.position.sub(c);spin.updateMatrixWorld(true);
    const pts=[];root.traverse(m=>{if(m.isMesh&&m.visible){const bb=new TH.Box3().setFromObject(m);if(!bb.isEmpty())for(let i=0;i<8;i++)pts.push(V(i&1?bb.max.x:bb.min.x,i&2?bb.max.y:bb.min.y,i&4?bb.max.z:bb.min.z))}});
    const az=(o.az||30)*PI/180,el=(o.el||25)*PI/180,fv=(o.fov||30)*PI/180,tv=Math.tan(fv/2),thz=tv*(w/h);
    const zx=V(Math.sin(az)*Math.cos(el),Math.sin(el),Math.cos(az)*Math.cos(el)),xx=V(0,1,0).cross(zx).normalize(),yx=zx.clone().cross(xx);
    let need=0;const q=new TH.Quaternion(),e=new TH.Euler(),pp=V();const PIT=o.pitchFit||[-.3,0,.3];
    for(const pi of PIT)for(let k=0;k<16;k++){e.set(pi,k/16*PI*2,0);q.setFromEuler(e);for(const p0 of pts){pp.copy(p0).applyQuaternion(q);const x=pp.dot(xx),y=pp.dot(yx),z=pp.dot(zx);need=Math.max(need,z+Math.abs(x)/thz,z+Math.abs(y)/tv)}}
    const dist=(need||r/Math.sin(fv/2))*(o.margin||1.06)*(o.fitZoom||1);
    cam.position.set(zx.x*dist,zx.y*dist,zx.z*dist);cam.lookAt(0,0,0);cam.near=dist/20;cam.far=dist*4;cam.updateProjectionMatrix();
    key.position.multiplyScalar(dist);fill.position.multiplyScalar(dist);rim.position.set(-r*1.2,r*.6,-r);rim.intensity=o.rim||0;rim.distance=r*6;it.ready=true;host.classList.add('rdy')}).catch(e=>{host.classList.add('fail');console.warn('model',id,e)})}

/* ================= 01 WATCH WINDER (Shelf.3mf) ================= */
async function winder(R){const s=await glb('winder');R.add(s);
  const m=prep(s,n=>/^(base|rod|cab|matrix|drawer\d+|u\d_(stat|turn|outer|inner|pillow))$/.test(n));
  setM(m.base,MAT.plaB);setM(m.rod,MAT.plaB);setM(m.cab,MAT.pla);setM(m.matrix,std({color:0x9f9b94,roughness:.8}));
  const drawers=[];Object.keys(m).filter(k=>k.startsWith('drawer')).forEach(k=>{setM(m[k],MAT.pla);const g=new TH.Group();s.add(g);m[k].forEach(me=>g.attach(me));const bb=new TH.Box3().setFromObject(g),cc=bb.getCenter(V());const fs=new TH.Shape();fs.moveTo(0,0);fs.lineTo(9,4);fs.lineTo(9,10);fs.lineTo(0,24);fs.closePath();const fg=new TH.ExtrudeGeometry(fs,{depth:2.4,bevelEnabled:true,bevelThickness:.6,bevelSize:.6,bevelSegments:2});fg.rotateY(-PI/2);fg.translate(1.2,0,0);const fin=new TH.Mesh(fg,MAT.pla);fin.position.set(cc.x,cc.y-4,bb.max.z);g.add(fin);g.children.forEach(ch=>ch.position.sub(cc));g.position.copy(cc);g.scale.set(.955,.94,1);g.userData.z0=cc.z;drawers.push(g)});
  const X=[55,160,265],Y=[52.9,157.9],dIn=V(0,.7071,-.7071).normalize(),n=V(0,.705,.709).normalize(),v=V(0,.7071,-.7071),tAx=V(0,.975,.221).normalize();
  const kinds=['blue','black','monster',null,'green',null],units=[];
  for(let k=0;k<6;k++){const C=V(X[k%3],93,-Y[k/3|0]);
    ['stat','turn','outer','inner','pillow'].forEach(p=>setM(m[`u${k}_${p}`],MAT.pla));
    const outer=new TH.Group();outer.position.copy(C);s.add(outer);const inner=new TH.Group();outer.add(inner);
    (m[`u${k}_outer`]||[]).forEach(me=>outer.attach(me));[...(m[`u${k}_inner`]||[]),...(m[`u${k}_pillow`]||[])].forEach(me=>inner.attach(me));
    const turn=new TH.Group();turn.position.set(X[k%3],48,-(Y[k/3|0]+11));s.add(turn);(m[`u${k}_turn`]||[]).forEach(me=>turn.attach(me));
    if(kinds[k]){const w=pillowWatch(kinds[k]);const q=new TH.Quaternion().setFromRotationMatrix(new TH.Matrix4().makeBasis(V(1,0,0),v,n));w.quaternion.copy(q);w.position.copy(n.clone().multiplyScalar(17.9+5.6).add(V(0,0,0)));inner.add(w);
      const strap=new TH.Group();strap.quaternion.copy(q);inner.add(strap);
      const a=-28.2,b=19.0,c=-25.3,d=25.1;
      const loop=new TH.CatmullRomCurve3([[0,d,0],[0,d,b-6],[0,d-6,b],[0,c+6,b],[0,c,b-6],[0,c,a+6],[0,c+6,a],[0,d-6,a],[0,d,a+6]].map(p=>V(...p)),true,'centripetal');
      const sh=new TH.Shape();sh.moveTo(-10,-.9);sh.lineTo(10,-.9);sh.lineTo(10,.9);sh.lineTo(-10,.9);sh.closePath();
      const st=new TH.Mesh(new TH.ExtrudeGeometry(sh,{steps:120,bevelEnabled:false,extrudePath:loop}),kinds[k]==='blue'?phys({color:0x1d2a44,roughness:.9,sheen:.4,sheenColor:0x445577,bumpMap:fabricTex,bumpScale:.5}):MAT.leather);strap.add(st)}
    units.push({outer,inner,turn})}
  return (t,dt)=>{const T=14,c=t%T,u=clamp01((c-2.5)/8),e=ease(u);
    units.forEach(U=>{U.outer.quaternion.setFromAxisAngle(V(1,0,0),e*PI*4);U.inner.quaternion.setFromAxisAngle(dIn,e*PI*6);U.turn.quaternion.setFromAxisAngle(tAx,e*PI*8)});
    const di=Math.floor(t/3.5)%drawers.length,f=(t%3.5)/2.6;drawers.forEach((g,i)=>g.position.z=g.userData.z0+(i===di&&f<1?Math.sin(f*PI)*34:0))}}

/* ================= 02 MECHANICAL WRISTWATCH (Watch_4.3mf) ================= */
/* ================= NH72 skeleton movement, built in code =================
   Sizes from the TMI NH72A spec sheet: diameter 27.4 mm, height 5.32 mm, stem axis 1.92 mm below the dial side.
   Layout follows the sheet's appearance drawing, mirrored to the dial side: balance at 9, barrel at 12, automatic train at 4 to 5. */
function NH72(){const g=new TH.Group();g.quaternion.setFromRotationMatrix(new TH.Matrix4().makeBasis(V(0,0,1),V(1,0,0),V(0,1,0)));
  const RU=std({color:0x34363b,metalness:.85,roughness:.42}),RU2=std({color:0x4f5258,metalness:.9,roughness:.26}),GI=std({color:0xc99b4e,metalness:1,roughness:.3}),
    ST=std({color:0xe4e6ea,metalness:1,roughness:.16}),JW=phys({color:0xb80f2a,roughness:.1,clearcoat:1,metalness:0}),DK=std({color:0x141518,metalness:.5,roughness:.55});
  const ext=(sh,z0,h,m)=>{const me=new TH.Mesh(new TH.ExtrudeGeometry(sh,{depth:h,bevelEnabled:false,curveSegments:24}),m);me.position.z=z0;g.add(me);return me};
  const circ=(r,cx=0,cy=0)=>{const p=new TH.Shape();p.absarc(cx,cy,r,0,PI*2,false);return p};
  const hole=(r,cx=0,cy=0)=>{const p=new TH.Path();p.absarc(cx,cy,r,0,PI*2,true);return p};
  const teeth=(sh,r,n,d=.93,pts=4)=>{const N=n*pts;for(let i=0;i<=N;i++){const a=i/N*PI*2,k=i%pts,rr=k<pts/2?r:r*d;i?sh.lineTo(Math.cos(a)*rr,Math.sin(a)*rr):sh.moveTo(Math.cos(a)*rr,Math.sin(a)*rr)}return sh};
  function gear(r,n,h,m,spk=4){const sh=teeth(new TH.Shape(),r,n),hub=Math.max(.45,r*.2);
    if(spk){const ri=r*.8,ro=hub+.25;if(ri-ro>.35)for(let k=0;k<spk;k++){const a0=k/spk*PI*2+.2,a1=(k+1)/spk*PI*2-.2,p=new TH.Path();p.absarc(0,0,ri,a0,a1,false);p.absarc(0,0,ro,a1,a0,true);p.closePath();sh.holes.push(p)}}
    const grp=new TH.Group();grp.add(new TH.Mesh(new TH.ExtrudeGeometry(sh,{depth:h,bevelEnabled:false,curveSegments:16}),m));
    const ax=new TH.Mesh(new TH.CylinderGeometry(hub*.55,hub*.55,h+1.4,12),ST);ax.rotation.x=PI/2;ax.position.z=h/2;grp.add(ax);return grp}
  const W={},add=(k,o,x,y,z)=>{o.position.set(x,y,z);g.add(o);W[k]=o;return o};
  /* casing ring and pillar plate with a few openings */
  const ring=circ(13.7);ring.holes.push(hole(12.5));ext(ring,-3.8,4.05,RU);
  const plate=circ(12.5);[[-7.6,-.5,2.6],[2,7.6,2.2],[5.8,-5.3,1.7],[-1.2,-9.4,1.5],[8.6,4.8,1.3]].forEach(([x,y,r])=>plate.holes.push(hole(r,x,y)));ext(plate,-3.8,.55,RU);
  /* barrel with ratchet wheel, gear train, automatic train, keyless works */
  const drum=new TH.Mesh(new TH.CylinderGeometry(4.15,4.15,1.8,48),GI);drum.rotation.x=PI/2;drum.position.set(2,7.6,-2.25);g.add(drum);
  add('ratchet',gear(4.35,64,.35,RU2,0),2,7.6,-1.32);
  add('center',gear(3.4,64,.25,GI),0,0,-1.75);
  add('third',gear(2.8,60,.22,GI),-4.6,4.2,-2.35);
  add('fourth',gear(2.4,56,.22,GI),-1.6,-5.6,-2.15);
  const es=new TH.Shape();for(let i=0;i<15;i++){const a=i/15*PI*2,b=a+PI*2/15;const p=(ang,r)=>[Math.cos(ang)*r,Math.sin(ang)*r];const[t0,t1]=p(a,1.15),[u0,u1]=p(a+.12,1.8),[v0,v1]=p(a+.3,1.25);i?es.lineTo(t0,t1):es.moveTo(t0,t1);es.lineTo(u0,u1);es.lineTo(v0,v1)}es.closePath();
  const esc=new TH.Group();esc.add(new TH.Mesh(new TH.ExtrudeGeometry(es,{depth:.18,bevelEnabled:false}),ST));add('esc',esc,-4.6,-4.0,-1.55);
  add('red1',gear(2.7,50,.25,GI,3),5.8,-5.3,-1.6);add('red2',gear(1.7,30,.25,GI,0),8.9,-1.6,-1.35);add('crw',gear(1.5,20,.3,ST,0),9.6,1.8,-1.5);
  const stem=new TH.Mesh(new TH.CylinderGeometry(.55,.55,5,12),ST);stem.rotation.z=PI/2;stem.position.set(11.4,0,-1.67);g.add(stem);
  /* balance: rim, three arms, hairspring, staff */
  const bal=new TH.Group();bal.position.set(-7.6,-.5,-1.05);g.add(bal);bal.add(new TH.Mesh(new TH.TorusGeometry(3.15,.22,8,72),GI));
  for(let k=0;k<3;k++){const ang=k/3*PI*2+.5,a=new TH.Mesh(new TH.BoxGeometry(3.1,.32,.16),GI);a.position.set(Math.cos(ang)*1.55,Math.sin(ang)*1.55,0);a.rotation.z=ang;bal.add(a)}
  for(let k=0;k<8;k++){const ang=k/8*PI*2,sc=new TH.Mesh(new TH.CylinderGeometry(.13,.13,.5,8),GI);sc.position.set(Math.cos(ang)*3.15,Math.sin(ang)*3.15,0);sc.rotation.z=ang+PI/2;bal.add(sc)}
  const sp=[];for(let i=0;i<=260;i++){const u=i/260,a=u*PI*2*9,r=.45+u*1.85;sp.push(V(Math.cos(a)*r,Math.sin(a)*r,0))}
  const hsg=new TH.Group();hsg.position.set(-7.6,-.5,-.62);g.add(hsg);hsg.add(new TH.Mesh(new TH.TubeGeometry(new TH.CatmullRomCurve3(sp),520,.035,4,false),ST));
  const staff=new TH.Mesh(new TH.CylinderGeometry(.22,.22,2.2,10),ST);staff.rotation.x=PI/2;bal.add(staff);
  const fork=new TH.Shape();fork.moveTo(0,-.25);fork.lineTo(2.3,-.18);fork.lineTo(2.3,.18);fork.lineTo(0,.25);fork.closePath();const fk=ext(fork,-1.5,.2,ST);fk.position.x=-5.6;fk.position.y=-2.3;fk.rotation.z=-1.05;
  /* bridges with screws and jewels */
  const bar=(pts,w,z0=-.35,h=.6,m=RU2)=>{for(let i=0;i<pts.length-1;i++){const[x0,y0]=pts[i],[x1,y1]=pts[i+1],L=Math.hypot(x1-x0,y1-y0),sh=new TH.Shape();
    sh.moveTo(0,-w/2);sh.lineTo(L,-w/2);sh.absarc(L,0,w/2,-PI/2,PI/2,false);sh.lineTo(0,w/2);sh.absarc(0,0,w/2,PI/2,PI*1.5,false);const me=ext(sh,z0,h,m);me.position.x=x0;me.position.y=y0;me.rotation.z=Math.atan2(y1-y0,x1-x0)}};
  const pad=(x,y,r)=>ext(circ(r,x,y),-.35,.6,RU2);
  const screw=(x,y,r=.62)=>{const sc=new TH.Mesh(new TH.CylinderGeometry(r,r,.3,20),ST);sc.rotation.x=PI/2;sc.position.set(x,y,.4);g.add(sc);const sl=new TH.Mesh(new TH.BoxGeometry(r*1.7,r*.26,.1),DK);sl.position.set(x,y,.56);sl.rotation.z=x*1.3+y;g.add(sl)};
  const jewel=(x,y)=>{const j=new TH.Mesh(new TH.CylinderGeometry(.42,.42,.1,16),JW);j.rotation.x=PI/2;j.position.set(x,y,.3);g.add(j);const c=new TH.Mesh(new TH.TorusGeometry(.5,.07,6,20),ST);c.position.set(x,y,.3);g.add(c)};
  bar([[-12.7,-4.7],[-9.7,-2.7],[-7.6,-.5]],1.9);pad(-7.6,-.5,1.25);jewel(-7.6,-.5);screw(-11.7,-4.1);
  bar([[-12.3,5.6],[-4.6,4.2],[-4.4,-1.5],[-1.6,-5.6]],1.6);bar([[-4.4,-1.5],[-4.6,-4.0]],1.2);jewel(-4.6,4.2);jewel(-1.6,-5.6);jewel(-4.6,-4.0);screw(-11.3,5.4);screw(-4.4,-1.5,.5);
  bar([[7.2,10.9],[2,7.6],[-2.6,11.4]],2.4);pad(2,7.6,2.0);screw(2,7.6,1.15);screw(6.6,10.4);screw(-2.2,10.9);
  bar([[12.2,-4.8],[5.8,-5.3],[2.2,-10.2]],1.9);jewel(5.8,-5.3);screw(11.2,-4.9);screw(2.7,-9.6);
  bar([[12.3,2.6],[9.6,1.8]],1.3);screw(11.8,2.4,.5);
  g.userData.tick=t=>{const a=3.7*Math.sin(t*PI*2*3);bal.rotation.z=a;hsg.rotation.z=a*.3;W.esc.rotation.z=-Math.floor(t*6)*PI*2/15/2;
    W.fourth.rotation.z=-t*PI*2/60;W.third.rotation.z=t*PI*2/450;W.center.rotation.z=-t*PI*2/3600;fk.rotation.z=-1.05+(a>0?.06:-.06)};
  return g}

async function watch4(R,it){const s=await glb('watch4');R.add(s);const m=prep(s,n=>/^(Body|CrystalB|CrystalF|HoldB|HoldF|Tube)$/.test(n));
  setM(m.HoldB,MAT.steel);setM(m.HoldF,MAT.steel);setM(m.Tube,MAT.carbon);setM(m.Body,MAT.body);setM(m.CrystalF,MAT.glass);setM(m.CrystalB,MAT.glass);
  const grp=k=>{const g=new TH.Group();s.add(g);(m[k]||[]).forEach(me=>g.attach(me));return g};const P={cf:grp('CrystalF'),cb:grp('CrystalB'),hf:grp('HoldF'),hb:grp('HoldB'),tube:grp('Tube'),body:grp('Body')};
  const mv=new TH.Group();s.add(mv);P.mv=mv;
  const nh=NH72();mv.add(nh);
  const back=new TH.Mesh(new TH.CircleGeometry(14.1,96),std({map:rotorTex,roughness:.35,metalness:.6,transparent:true}));back.rotation.x=PI/2;back.position.y=-4.2;mv.add(back);
  const hw=std({color:0xf7f7f5,roughness:.3}),hand=(len,w,y,m2,tail=1.5)=>{const g=new TH.Group(),b=new TH.Mesh(new TH.BoxGeometry(len+tail,.25,w),m2);b.position.set((len-tail)/2,y,0);g.add(b);mv.add(g);return g};
  const hh=hand(8.6,1.05,1.6,hw),hm=hand(12.4,.85,2.0,hw),hs=hand(12.8,.22,2.4,MAT.steelP,3);const cap=new TH.Mesh(new TH.CylinderGeometry(.9,.9,1.4,24),MAT.steelP);cap.position.y=1.9;mv.add(cap);
  const cb0=new TH.Group();cb0.position.set(0,-1.67,17.1);s.add(cb0);const crown=new TH.Group();cb0.add(crown);P.crown=crown;
  const ct=new TH.Mesh(new TH.CylinderGeometry(1.25,1.25,1.4,24),MAT.steelP);ct.rotation.x=PI/2;ct.position.z=.7;crown.add(ct);
  const kn=new TH.Shape();for(let i=0;i<=144;i++){const a=i/144*PI*2,r=i%4<2?3.2:2.98;i?kn.lineTo(Math.cos(a)*r,Math.sin(a)*r):kn.moveTo(Math.cos(a)*r,Math.sin(a)*r)}
  const km=new TH.Mesh(new TH.ExtrudeGeometry(kn,{depth:2.6,bevelEnabled:false}),MAT.steelP);km.position.z=1.4;crown.add(km);
  const kc=new TH.Mesh(new TH.CylinderGeometry(2.55,3.05,.55,40),MAT.steelP);kc.rotation.x=PI/2;kc.position.z=4.27;crown.add(kc);
  const kb=new TH.Mesh(new TH.CylinderGeometry(3.05,2.7,.35,40),MAT.steelP);kb.rotation.x=PI/2;kb.position.z=1.23;crown.add(kb);
  const sp=[[-21.3,-3.4,0],[-27,-4.4,0],[-33,-9,0],[-36.5,-19,0],[-35,-33,0],[-27,-45,0],[-14,-52,0],[0,-54,0],[14,-52,0],[27,-45,0],[35,-33,0],[36.5,-19,0],[33,-9,0],[27,-4.4,0],[21.3,-3.4,0],[17,-6.3,0],[8,-7.35,0],[0,-7.4,0],[-8,-7.35,0],[-17,-6.3,0]];
  const st=ribbon(sp,20,1.25,MAT.fabW,260,true);s.add(st);P.strap=st;[.29,.71].forEach(u=>s.add(keeper(st.userData.curve,u,20,1.25,MAT.steelP)));
  it.focus=P.hb;const ex={cf:[0,9,0],cb:[0,-9,0],mv:[0,4.5,0],hf:[0,3,0],hb:[0,-3,0],crown:[0,0,7],tube:[0,0,0],body:[0,1.5,0]};let xp=0,born=0;
  return (t,dt,it)=>{nh.userData.tick(t);const d=new Date(),sec=d.getSeconds()+d.getMilliseconds()/1000;hs.rotation.y=-sec/60*PI*2;hm.rotation.y=-(d.getMinutes()+sec/60)/60*PI*2;hh.rotation.y=-((d.getHours()%12)+d.getMinutes()/60)/12*PI*2;
    born=Math.min(1,born+dt/1.8);const tgt=Math.max(1-ease(born),it.hovering||it.tap?1:0);xp+=(tgt-xp)*(1-Math.exp(-dt*5));for(const k in ex)P[k].position.set(...ex[k].map(v=>v*xp))}}

/* ================= 03 TWIST V1 (futuristic smartwatch …12.3mf) ================= */
async function twist(R,it){const s=await glb('twist');R.add(s);
  const names=['lattice','caseback','glass','battery','pcb','lcd','pins','pads','solder','xtalpad','chip','header','xtal','inner'];
  const m=prep(s,n=>names.includes(n));
  setM(m.lattice,MAT.ti);setM(m.caseback,MAT.ti);setM(m.glass,MAT.glass);setM(m.pcb,MAT.mask);setM(m.lcd,MAT.chip);setM(m.pins,MAT.pin);setM(m.pads,MAT.gold);setM(m.solder,MAT.gold);setM(m.xtalpad,MAT.gold);
  setM(m.chip,MAT.chip);setM(m.header,MAT.pin);setM(m.xtal,MAT.pin);setM(m.battery,MAT.dark);setM(m.inner,MAT.dark);
  const grp=ks=>{const g=new TH.Group();s.add(g);ks.forEach(k=>(m[k]||[]).forEach(me=>g.attach(me)));return g};
  const P={lattice:grp(['lattice']),back:grp(['caseback']),glass:grp(['glass']),bat:grp(['battery','inner']),board:grp(['pcb','lcd','pins','pads','solder','xtalpad','chip','header','xtal'])};
  const lcd=new TH.Mesh(new TH.PlaneGeometry(19.2,9.4),std({map:lcdT,roughness:.65,metalness:0,envMapIntensity:.25}));lcd.rotation.set(-PI/2,0,0);lcd.rotateZ(PI/2);lcd.position.set(-4.6,19.96,0);P.board.add(lcd);
  const sp=[[-27,12.5,0],[-33,9,0],[-37,-2,0],[-37.5,-17,0],[-33,-31,0],[-22,-41.5,0],[0,-45.5,0],[22,-41.5,0],[33,-31,0],[37.5,-17,0],[37,-2,0],[33,9,0],[27,12.5,0],[21,9,0],[10,8.5,0],[0,8.45,0],[-10,8.5,0],[-21,9,0]];
  const st=ribbon(sp,20,1.3,MAT.fabB,260,true);s.add(st);[.3,.7].forEach(u=>s.add(keeper(st.userData.curve,u,20,1.3,MAT.steelP)));
  it.focus=P.lattice;const ex={glass:[0,13,0],board:[0,6,0],lattice:[0,0,0],back:[0,-7,0],bat:[0,-3.5,0]};let xp=0,born=0;
  return (t,dt,it)=>{lcdDraw();born=Math.min(1,born+dt/1.8);const tgt=Math.max(1-ease(born),it.hovering||it.tap?1:0);xp+=(tgt-xp)*(1-Math.exp(-dt*5));for(const k in ex)P[k].position.set(...ex[k].map(v=>v*xp))}}

/* ================= 04 PERPETUAL CALENDAR (2PrepertualCal2.3mf) ================= */
async function calendar(R){const s=await glb('cal');R.add(s);
  const names=['frame','lever','lever_dark','leverpin','date_green','date_txt','date_hub','date_white','month','month_txt','g1','g2','g2b','g3','bar','arm','arm_knob','link','rods','misc'];
  const m=prep(s,n=>names.includes(n));
  const col={frame:MAT.plaB,lever:MAT.plaY,lever_dark:MAT.plaB,leverpin:MAT.plaB,date_green:MAT.plaG,date_txt:MAT.plaW,date_hub:MAT.plaB,date_white:MAT.plaB2,month:MAT.plaB,month_txt:MAT.plaW,g1:MAT.plaW,g2:MAT.plaB2,g2b:MAT.plaB2,g3:MAT.plaB2,bar:MAT.plaG,arm:MAT.plaG,arm_knob:MAT.plaB,link:MAT.plaG,rods:MAT.plaW,misc:MAT.plaB};
  for(const k in m)setM(m[k],col[k]||MAT.plaB);
  const piv=(ks,x,y)=>{const g=new TH.Group();g.position.set(x,y,0);s.add(g);ks.forEach(k=>(m[k]||[]).forEach(me=>g.attach(me)));return g};
  const lever=piv(['lever','lever_dark'],120,20),date=piv(['date_green','date_txt','date_hub','date_white'],45,65),month=piv(['month','month_txt'],96,45),
    g1=piv(['g1'],57,37),g2=piv(['g2'],66.4,14.9),g2b=piv(['g2b'],84.5,13),g3=piv(['g3'],96,77),bar=piv(['bar'],0,0);
  const step=PI*2/31,T=2.6;let n=0,dA=0,mA=0,last=-1;
  return (t,dt)=>{const k=Math.floor(t/T),c=(t%T)/T;if(k!==last){last=k;n++}
    const push=c<.35?ease(c/.35):c<.62?1:1-ease((c-.62)/.38);const th=-.2*push;lever.rotation.z=th;bar.position.x=Math.sin(th)*53;
    const dTarget=-(n-1+ease(clamp01(c/.35)))*step;dA+=(dTarget-dA)*(1-Math.exp(-dt*14));date.rotation.z=dA;
    const mTarget=-Math.floor((n-1)/31)*PI*2/12;mA+=(mTarget-mA)*(1-Math.exp(-dt*6));month.rotation.z=mA;
    g1.rotation.z=-dA*1.35;g2.rotation.z=dA*1.6;g2b.rotation.z=-dA*2.1;g3.rotation.z=-th*1.2}}

/* ================= 05 IPA LAB POWER SUPPLY (cps-power-supply-gehaeuse.3mf) ================= */
async function cps(R){const s=await glb('cps');R.add(s);const m=prep(s,n=>/^p_/.test(n));
  for(const k in m)setM(m[k],k==='p_Körper28'?MAT.dark:MAT.pla);
  return ()=>{}}


/* ================= 05 PINFINITY PINBALL (Pinball2.step) ================= */
async function pinball(R){const s=await glb('pin');R.add(s);
  const m=prep(s,n=>['glass','field','grey','metal','coil','pcb','orange','matrix'].includes(n));
  const col={glass:phys({color:0xeef4f8,metalness:0,roughness:.04,transparent:true,opacity:.16,clearcoat:1,depthWrite:false}),field:MAT.plaB,grey:MAT.plaB2,metal:MAT.steel,
    coil:std({color:0xb8732e,metalness:1,roughness:.35}),pcb:std({color:0x1d7a3c,roughness:.45}),orange:MAT.plaY,matrix:MAT.chip};
  for(const k in m)setM(m[k],col[k]||MAT.plaB);
  /* the 64x32 LED matrix in the backbox */
  const N=64,M=32,cell=4,sm=document.createElement('canvas');sm.width=N;sm.height=M;const sx=sm.getContext('2d',{willReadFrequently:true});
  const cv=document.createElement('canvas');cv.width=N*cell;cv.height=M*cell;const x=cv.getContext('2d');
  const tx=new TH.CanvasTexture(cv);tx.colorSpace=TH.SRGBColorSpace;tx.anisotropy=4;
  const pl=new TH.Mesh(new TH.PlaneGeometry(250,125),new TH.MeshBasicMaterial({map:tx,toneMapped:false}));pl.position.set(2,160.5,-312.2);s.add(pl);
  let acc=1,f=0;
  function draw(){f++;sx.fillStyle='#000';sx.fillRect(0,0,N,M);sx.font='bold 9px monospace';sx.textBaseline='top';
    (Math.floor(f/45)%2?['Pinfinity','Score:','10']:['PINBALL!','Press','Start!']).forEach((t,i)=>{const g=sx.createLinearGradient(0,0,N,0);for(let k=0;k<4;k++)g.addColorStop(k/3,`hsl(${(f*6+k*90+i*40)%360},100%,60%)`);sx.fillStyle=g;sx.fillText(t,2,1+i*10)});
    for(let r=0;r<4;r++){sx.strokeStyle=`hsl(${(f*9+r*70)%360},100%,55%)`;sx.strokeRect(50+r*2+.5,10+r*2+.5,13-r*4,13-r*4)}
    const d=sx.getImageData(0,0,N,M).data;x.fillStyle='#08080a';x.fillRect(0,0,cv.width,cv.height);
    for(let j=0;j<M;j++)for(let i=0;i<N;i++){const o=(j*N+i)*4,on=d[o]+d[o+1]+d[o+2]>120;x.fillStyle=on?`rgb(${d[o]},${d[o+1]},${d[o+2]})`:'#17171b';x.fillRect(i*cell+.6,j*cell+.6,cell-1.2,cell-1.2)}
    tx.needsUpdate=true}
  return (t,dt)=>{acc+=dt;if(acc>.09){acc=0;draw()}}}

const KIND={pinball:[pinball,{az:-34,el:30,fov:30,fitZoom:.8}],winder:[winder,{az:14,el:22,fov:30,zoom:.74,lookY:-16}],watch4:[watch4,{az:28,el:30,fov:30,zoom:1.45,env:1.1,lookY:-6}],twist:[twist,{az:-30,el:42,fov:30,zoom:1.0,env:1.1,lookY:-4,yaw0:-1.85,sway:.5}],calendar:[calendar,{az:-32,el:18,fov:30,zoom:.86}],cps:[cps,{az:35,el:28,fov:30,zoom:.92}]};
M3.add=(id,kind,o={})=>{const k=KIND[kind];if(k)mk(id,k[0],Object.assign({},k[1],o))};M3.ok=true;
let last=performance.now();
M3.render=function(){const now=performance.now(),dt=Math.min(.1,(now-last)/1000);last=now;if(M3.paused)return;
  M3.items.forEach(it=>{if(!it.vis||!it.ready||it.host.classList.contains('photo'))return;it.t+=dt;it.upd&&it.upd(it.t,dt,it);
    const idle=!it.drag&&(!it.lastDrag||now-it.lastDrag>2500);if(idle){it.dragX*=1-Math.min(1,dt*1.5);it.dragY*=1-Math.min(1,dt*1.5)}
    const o=it.o,yaw=(o.turn?it.t*o.turn:Math.sin(it.t*.3)*(o.sway==null?.32:o.sway))+(o.yaw0||0);
    it.spin.rotation.set(it.dragY+(it.extPitch||0),yaw+it.dragX+(it.extYaw||0),0);
    const cw=it.cv.width,ch=it.cv.height;rd.setViewport(0,0,cw,ch);rd.setScissor(0,0,cw,ch);
    rd.render(it.sc,it.cam);it.ctx.clearRect(0,0,cw,ch);it.ctx.drawImage(rd.domElement,0,RH-ch,cw,ch,0,0,cw,ch)})};
/* photo galleries: images downloaded from youen.ch and embedded */
const GAL={pinball:[['pb_6','Playfield and score display'],['pb_1','Playfield during the build'],['pb_3','Controller board']],winder:[['w_overview','In the cabinet'],['w_video','Winding cycle','w_poster'],['w_unit','Single unit']],watch4:[['m_1','Close-up'],['m_2','On the wrist']],twist:[['t_2','Close-up'],['t_1','On the wrist']],calendar:[['c_1','CAD render'],['c_2','CAD render, side']]};
const blobUrl=k=>IMG(k);
M3.GAL=GAL;M3.url=(k)=>blobUrl(k,k==='w_video'?'video/mp4':'image/webp');
M3.gallery=function(id,kind,lab){const a=typeof id==='string'?$('#'+id):id,items=GAL[kind];if(!a||!items)return;lab=lab||{};
  const g=document.createElement('div');g.className='gal';g.innerHTML=`<div class="gbg"></div><div class="gst"></div><div class="gcap"><b>1</b> / ${items.length} · <span></span></div>${items.length>1?`<button class="gb gp" aria-label="Previous photo" data-c="sm">${lab.prev||'‹'}</button><button class="gb gn" aria-label="Next photo" data-c="sm">${lab.next||'›'}</button>`:''}<div class="gd">${items.map((_,i)=>`<i class="${i?'':'on'}"></i>`).join('')}</div>`;a.appendChild(g);
  let idx=0,built=false;const st=g.querySelector('.gst'),bg=g.querySelector('.gbg'),cap=g.querySelector('.gcap');
  function build(){if(built)return;built=true;items.forEach(([k,lb,poster],i)=>{let el;if(k==='w_video'){el=document.createElement('video');el.muted=true;el.loop=true;el.playsInline=true;el.setAttribute('playsinline','');el.preload='auto';el.poster=blobUrl(poster,'image/webp');el.src=blobUrl(k,'video/mp4')}else{el=new Image();el.alt=lb;el.decoding='async';el.src=blobUrl(k,'image/webp')}el.className='gs'+(i?'':' on');st.appendChild(el)});show(0)}
  function show(i){idx=(i+items.length)%items.length;const els=[...st.children];els.forEach((e,j)=>{e.classList.toggle('on',j===idx);if(e.tagName==='VIDEO'){if(j===idx&&a.classList.contains('photo'))e.play().catch(()=>{});else e.pause()}});
    const[k,lb,poster]=items[idx];bg.style.backgroundImage=`url(${blobUrl(poster||k,'image/webp')})`;cap.querySelector('b').textContent=idx+1;cap.querySelector('span').textContent=lb;[...g.querySelectorAll('.gd i')].forEach((d,j)=>d.classList.toggle('on',j===idx))}
  g.addEventListener('click',e=>{if(e.target.closest('.gp'))show(idx-1);else if(e.target.closest('.gn'))show(idx+1)});
  let sx=null;g.addEventListener('pointerdown',e=>{if(!e.target.closest('.gb'))sx=e.clientX});g.addEventListener('pointerup',e=>{if(sx!==null&&Math.abs(e.clientX-sx)>40)show(idx+(e.clientX<sx?1:-1));sx=null});
  const pl=kind==='calendar'?(lab.render||'Render'):(lab.photo||'Photo');
  const pv=document.createElement('div');pv.className='pv';pv.innerHTML=`<button class="on" data-m="3d" data-c="big" data-cl="3D">${lab.d3||'3D'}</button><button data-m="ph" data-c="big" data-cl="${pl}">${pl}</button>`;a.appendChild(pv);
  pv.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;const ph=b.dataset.m==='ph';if(ph)build();a.classList.toggle('photo',ph);[...pv.querySelectorAll('button')].forEach(x=>x.classList.toggle('on',x===b));if(built)show(idx)});
  return {build,show,set:ph=>pv.querySelectorAll('button')[ph?1:0].click()}};
}catch(err){document.documentElement.classList.add('nogl');console.warn('models off',err)}})();


(function(){
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches,MOB=matchMedia('(max-width:860px)'),TOUCH=matchMedia('(hover:none)').matches,WD=navigator.webdriver;
const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));
$$('[data-logo]').forEach(e=>e.innerHTML=logoSVG('',.6));if(TOUCH)$('#pinHint').textContent='tap a number';$$('footer .fm').forEach(a=>a.href=C.mail);$$('.yr').forEach(e=>e.textContent=new Date().getFullYear());
/* ---------- cursor ---------- */
const cur=$('#cur'),cur2=$('#cur2');let cx=-100,cy=-100,tx=-100,ty=-100;
addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;document.body.classList.add('has-mouse');tx=e.clientX;ty=e.clientY;cur2.style.transform=`translate(${tx}px,${ty}px)`;
 const v=e.target.closest('.vw');cur.classList.toggle('big',!!v&&!e.target.closest('.pv,.gal'));$('b',cur).textContent=v?'Drag':'';
 $('#spot').style.setProperty('--sx',e.clientX/innerWidth*100+'%');$('#spot').style.setProperty('--sy',e.clientY/innerHeight*100+'%')},{passive:true});
addEventListener('scroll',()=>{if(tx<0)return;const el=document.elementFromPoint(tx,ty),v=el&&el.closest('.vw');cur.classList.toggle('big',!!v&&!el.closest('.pv,.gal'))},{passive:true});
function curLoop(){cx+=(tx-cx)*.2;cy+=(ty-cy)*.2;cur.style.transform=`translate(${cx}px,${cy}px)`}
/* ---------- typewriter ---------- */
(function(){let li=0,ci=0,del=false;const t=$('#tw');(function tick(){const s=C.typer[li];t.innerHTML='Youen builds <b>'+s.slice(0,ci)+'</b>';
 if(!del&&ci<s.length){ci++;setTimeout(tick,65)}else if(!del){del=true;setTimeout(tick,1700)}else if(ci>0){ci--;setTimeout(tick,26)}else{del=false;li=(li+1)%C.typer.length;setTimeout(tick,260)}})()})();
/* ---------- marquee ---------- */
const mk=a=>{const h=a.map(w=>`<span>${w}</span>`).join('');return h+h+h};$('#mq1').innerHTML=mk(C.w1);$('#mq2').innerHTML=mk(C.w2);let mqx=0,mqv=0;
/* ---------- about ---------- */
$('#scrub').innerHTML=C.about.split(' ').map(w=>`<span>${w}</span>`).join(' ');const words=$$('#scrub span');
$('#facts').innerHTML=C.facts.map(([k,v])=>`<div><dt class="sc">${k}</dt><dd>${v}</dd></div>`).join('');
/* ---------- pinout (from Schematic, noir palette) ---------- */
const CAT=['#cbb48a','#d9a99c','#c9ced6','#c08a5a','#f3efe6','#8fa8c2'];
(function(){const svg=$('#chip'),S=C.skills,X0=220,X1=580;
 let h=`<rect x="${X0}" y="${X0}" width="360" height="360" rx="6" fill="#141315" stroke="#cbb48a55"/><rect x="${X0+14}" y="${X0+14}" width="332" height="332" rx="3" fill="none" stroke="#cbb48a22"/><circle cx="${X0+34}" cy="${X0+34}" r="8" fill="#0a0a0b" stroke="#cbb48a55"/>
 <g transform="translate(400,352) scale(.6)" style="color:#cbb48a">${logoSVG('',1).replace('<svg','<svg x="-82" y="-82" width="164" height="164"')}</g>
 <text x="400" y="452" text-anchor="middle" font-size="22" fill="#f3efe6" letter-spacing="8" style="font-family:'Bodoni Moda';font-style:italic">Youen</text><text x="400" y="478" text-anchor="middle" font-size="11.5" fill="#8d877c" letter-spacing="3">YA-01 · EFZ 2026</text><text x="400" y="498" text-anchor="middle" font-size="10" fill="#5c574e" letter-spacing="3">SWITZERLAND</text>`;
 const sides={L:[0,1],B:[5],R:[3,4],T:[2]};let n=1;const pins=[];
 const put=(side,list)=>{const N=list.length;list.forEach(([cat,name],i)=>{const t=(i+.5)/N,num=n++;let x,y,w,hh,tx,ty,anc,rot='';
   if(side==='L'){y=X0+20+t*320;x=X0-40;w=40;hh=11;tx=X0-48;ty=y+4;anc='end'}
   if(side==='B'){x=X0+20+t*320;y=X1;w=11;hh=40;tx=x+4;ty=X1+48;anc='start';rot=`rotate(90 ${x+4} ${X1+48})`}
   if(side==='R'){y=X1-20-t*320;x=X1;w=40;hh=11;tx=X1+48;ty=y+4;anc='start'}
   if(side==='T'){x=X1-20-t*320;y=X0-40;w=11;hh=40;tx=x+4;ty=X0-48;anc='start';rot=`rotate(-90 ${x+4} ${X0-48})`}
   const rx=side==='L'||side==='R'?x:x-5.5,ry=side==='L'||side==='R'?y-5.5:y;
   pins.push(`<g class="pin" data-cat="${cat}" data-n="${num}" style="--k:${CAT[cat]}"><rect x="${rx}" y="${ry}" width="${w}" height="${hh}" rx="1"/><text x="${tx}" y="${ty}" text-anchor="${anc}" transform="${rot}">${name}</text><text class="pn" x="${side==='L'?X0+6:side==='R'?X1-6:x}" y="${side==='T'?X0+14:side==='B'?X1-8:y+3}" text-anchor="${side==='L'?'start':side==='R'?'end':'middle'}">${num}</text></g>`)})};
 const items=k=>sides[k].flatMap(ci=>S[ci].chips.map(ch=>[ci,ch]));put('L',items('L'));put('B',items('B'));put('R',items('R'));put('T',items('T'));
 svg.innerHTML=h+pins.join('');
 $('#tabs').innerHTML=S.map((s,i)=>`<button data-cat="${i}" style="--k:${CAT[i]}">${s.k}</button>`).join('');
 let cur=-1,auto=true;function show(i){if(i===cur)return;cur=i;const s=S[i];$('#pd').style.setProperty('--k',CAT[i]);
  $('#pd').innerHTML=`<h4>${s.t}</h4><p>${s.p}</p><div class="pl">${s.chips.map(c=>`<span>${c}</span>`).join('')}</div>`;
  $$('#tabs button').forEach(b=>b.classList.toggle('on',+b.dataset.cat===i));$$('.pin',svg).forEach(p=>p.classList.toggle('hi',+p.dataset.cat===i))}
 show(0);svg.addEventListener('pointerover',e=>{const p=e.target.closest('.pin');if(p){auto=false;show(+p.dataset.cat)}});
 $('#tabs').addEventListener('click',e=>{const b=e.target.closest('button');if(b){auto=false;show(+b.dataset.cat)}});
 setInterval(()=>{if(auto&&inView(svg))show((cur+1)%S.length)},3800);
 const all=$$('.pin',svg);setInterval(()=>{if(!inView(svg))return;const p=all[Math.random()*all.length|0];p.classList.add('zap');setTimeout(()=>p.classList.remove('zap'),160)},900)})();
function inView(el){const r=el.getBoundingClientRect();return r.width>0&&r.bottom>0&&r.top<innerHeight}
/* ---------- timing diagram ---------- */
(function(){const svg=$('#td'),W=1200,L0=190,Y0=2013,Y1=2028.75,HB=456,X=y=>L0+(y-Y0)/(Y1-Y0)*(W-L0-20);
 const now=new Date(),NOW=now.getFullYear()+now.getMonth()/12+now.getDate()/365;
 const lanes=[{n:'School',c:CAT[4],seg:[[2013,2019.5,0],[2019.55,2022.55,0]]},{n:'Basic training',c:CAT[0],seg:[[2022.58,2024.0,1]]},{n:'Comet AG',c:CAT[5],seg:[[2024.0,2026.55,2]]},{n:'Abroad · DK',c:CAT[1],win:[2025,2026,3,'2 weeks · 2025']},{n:'EFZ',c:CAT[3],seg:[[2026.55,Y1-.05,4]],arrow:1},{n:'Berufsmaturität',c:CAT[2],seg:[[2026.62,2027.5,5]]},{n:'Next · abroad',c:CAT[0],win:[2027.62,2028.62,6,'open · up to 12 months']}];
 let h=`<defs><pattern id="hat" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line y2="6" stroke="${CAT[1]}" stroke-opacity=".35"/></pattern></defs>`;
 for(let y=Y0;y<=2028;y++){const x=X(y);h+=`<line x1="${x}" x2="${x}" y1="30" y2="${HB}" stroke="#f3efe60d"/><text class="yr" x="${x+4}" y="22">${y}</text>`}
 lanes.forEach((ln,i)=>{const yb=70+i*56,yh=yb-26;h+=`<text class="lab" x="16" y="${yb-8}">${ln.n}</text><line x1="${L0}" x2="${W-20}" y1="${yb}" y2="${yb}" stroke="#f3efe608"/>`;
  if(ln.win){const [a,b,k,t]=ln.win;h+=`<g class="seg" data-k="${k}"><rect x="${X(a)}" y="${yh-4}" width="${X(b)-X(a)}" height="34"/><rect x="${X(a)+2}" y="${yh}" width="${X(b)-X(a)-4}" height="26" fill="url(#hat)" stroke="${ln.c}" stroke-dasharray="4 3" stroke-opacity=".7"/><text x="${(X(a)+X(b))/2}" y="${yh+17}" text-anchor="middle" font-size="11" fill="${ln.c}">${t}</text></g>`;return}
  let d=`M${L0} ${yb}`;ln.seg.forEach(([a,b])=>{d+=` L${X(a)} ${yb} L${X(a)} ${yh} L${X(b)} ${yh}`+(ln.arrow?'':` L${X(b)} ${yb}`)});if(!ln.arrow)d+=` L${W-20} ${yb}`;
  h+=`<path class="wave" d="${d}" stroke="${ln.c}" pathLength="1" stroke-dasharray="1" stroke-dashoffset="1" style="transition:stroke-dashoffset 1.8s ${i*.15}s cubic-bezier(.4,0,.2,1)"/>`;
  ln.seg.forEach(([a,b,k])=>{h+=`<g class="seg" data-k="${k}"><rect x="${X(a)}" y="${yh-6}" width="${X(b)-X(a)}" height="38"/></g>`});
  if(ln.arrow)h+=`<path d="M${W-26} ${yh-6} L${W-14} ${yh} L${W-26} ${yh+6}" fill="none" stroke="${ln.c}" stroke-width="2"/>`});
 const xn=X(Math.min(NOW,Y1-.1));h+=`<line x1="${xn}" x2="${xn}" y1="30" y2="${HB}" stroke="#cbb48a"/><rect x="${xn-22}" y="${HB+2}" width="44" height="18" fill="#cbb48a"/><text x="${xn}" y="${HB+15}" text-anchor="middle" font-size="10.5" fill="#000">NOW</text>`;
 h+=`<line id="tcur" x1="0" x2="0" y1="30" y2="${HB}" stroke="#3fe0ff" stroke-dasharray="3 3" opacity="0"/><text id="tcurT" font-size="11" fill="#3fe0ff" y="44" opacity="0"></text>`;svg.innerHTML=h;
 $('#log').innerHTML=C.path.map((p,i)=>`<div class="row rv" data-k="${i}"><div class="dt sc">${p.dt}</div><h3>${p.h}</h3><p>${p.p}</p></div>`).join('');
 const hi=k=>$$('#log .row').forEach(r=>r.classList.toggle('hi',+r.dataset.k===k));
 svg.addEventListener('pointermove',e=>{const r=svg.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*W;if(x<L0)return;const yv=Y0+(x-L0)/(W-L0-20)*(Y1-Y0);
  $('#tcur').setAttribute('x1',x);$('#tcur').setAttribute('x2',x);$('#tcur').setAttribute('opacity',1);const t=$('#tcurT');t.setAttribute('x',x+6);t.setAttribute('opacity',1);t.textContent='T = '+yv.toFixed(1);const g=e.target.closest('.seg');hi(g?+g.dataset.k:-1)});
 svg.addEventListener('pointerleave',()=>{$('#tcur').setAttribute('opacity',0);$('#tcurT').setAttribute('opacity',0);hi(-1)});
 svg.addEventListener('click',e=>{const g=e.target.closest('.seg');if(g){$(`#log .row[data-k="${g.dataset.k}"]`).scrollIntoView({behavior:'smooth',block:'center'});hi(+g.dataset.k)}});
 const L=C.langs,LG=[['German','Native','Swiss German'],['English','Good working English · about C1','At school since primary school, continued at vocational school. One year in an English-speaking department at Comet.'],['French','Basic understanding','At school since primary school. Living in the bilingual canton of Fribourg.']];
 $('#langs').innerHTML=`<div class="lgg">${LG.map(([n,l,d])=>`<div><span class="sc">${n}</span><b>${l}</b><small>${d}</small></div>`).join('')}</div><p class="lgn">Language levels are self-assessed, no certificates.</p><div><span class="sc">Interests</span>${L[3].replace(/^Interests:\s*/,'').replace(/^./,c=>c.toUpperCase())} · ${L[4].split(' · ').map((w,i)=>i?w.toLowerCase():w).join(', ')}</div>`})();
/* ---------- projects ---------- */
$('#intro').textContent=C.intro;
const PJ=C.projects.filter(p=>p.kind);
const FB={winder:'w_overview',watch4:'m_1',twist:'t_2',calendar:'c_1',pinball:'pb_fb'};
const ART=p=>p.kind==='cps'?`<div class="art ipa"><div class="ipa-in"><span class="ib">IPA</span><span class="sc">Final apprenticeship project · Comet AG · 2026</span><div class="ich">${['ESP32-S3','2× RS-485','OLED display','Rotary encoder','PCB in Altium','3D printed enclosure'].map(c=>`<span>${c}</span>`).join('')}</div></div></div>`:`<div class="art"><div class="vw" id="${p.id}"><img class="fb" loading="lazy" alt="${p.t}" src="${IMG(FB[p.kind])}"></div></div>`;
$('#track').innerHTML=PJ.map((p,i)=>`<article class="proj"><div class="num">${p.n}</div>${ART(p)}
 <div class="info"><div class="no">No. ${p.n}</div><h3>${p.t.replace(/^(\S+)/,'<i>$1</i>')}</h3><div class="stt"><span class="sc">Status</span><b>${p.status}</b></div><p>${p.p.replace(' shown here','')}</p></div></article>`).join('');
$('#mnote').textContent=C.note;
$('#bench').innerHTML=`<div class="k sc rv">Next</div><h2 class="h mk"><span>On the <i>bench</i></span></h2><p class="sub2 rv">What I am working on or planning right now.</p><div class="log">${C.bench.map(([st,t,p])=>`<div class="row rv"><div class="dt sc">${st}</div><h3>${t}</h3><p>${p}</p></div>`).join('')}</div>`;
const Z={winder:.8,watch4:1.42,twist:1.05,calendar:.88,pinball:1},LY={winder:-14,watch4:-6,twist:-4,calendar:0,pinball:0};
let pjInit=false;function initProjects(){if(pjInit)return;pjInit=true;
 PJ.forEach(p=>{M3.add(p.id,p.kind,{w:760,h:520,zoom:Z[p.kind],lookY:LY[p.kind],key:0xfff2dc,keyI:2.6,env:.85,rimColor:0xcbb48a,rim:1.2});const g=M3.gallery(p.id,p.kind);
  if(g&&document.documentElement.classList.contains('nogl'))g.set(true)})}
/* ---------- contact ---------- */
$('#lead').textContent=C.lead;$('#lm').href=C.mail;
$('#form').addEventListener('submit',e=>{e.preventDefault();const f=e.target,v=id=>$('#'+id).value.trim();const bad=['fn','ln2','fe','fc'].find(id=>!v(id))||(!$('#fe').checkValidity()?'fe':null);
 if(bad){f.classList.remove('shake');void f.offsetWidth;f.classList.add('shake');$('#'+bad).focus();return}
const W3F_KEY='72dd5003-d74b-4fc3-a6fe-2042b49be8bf';
 const sb=$('#sb'),m=$('#fmsg'),say=(t,c)=>{m.className='fmsg '+(c||'');m.innerHTML=t};if(sb.disabled)return;
 if($('#fbot').checked){f.classList.add('sent');say('Thank you, your message has been sent.','ok');return}
 sb.disabled=true;sb.textContent='Sending…';say('');
 const data={access_key:W3F_KEY,subject:`Contact via youen.ch: ${v('fn')} ${v('ln2')}`,from_name:'youen.ch',name:`${v('fn')} ${v('ln2')}`,email:v('fe'),phone:v('fp')||'-',message:v('fc'),botcheck:''};
 fetch('https://api.web3forms.com/submit',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify(data)})
  .then(r=>r.json().catch(()=>({})).then(j=>{if(!r.ok||!j.success)throw new Error(j.message||r.status)}))
  .then(()=>{f.classList.add('sent');sb.textContent='Sent';say(`Thank you, ${v('fn').replace(/[<>&"]/g,'')}. Your message has been sent. I will reply to <strong>${v('fe').replace(/[<>&"]/g,'')}</strong>. <a href="#" id="fagain">Wrong address? Correct it and send again.</a>`,'ok');
   $('#fagain').addEventListener('click',ev=>{ev.preventDefault();f.classList.remove('sent');sb.disabled=false;sb.textContent='Send message';say('');$('#fe').focus();$('#fe').select()})})
  .catch(()=>{sb.disabled=false;sb.textContent='Send message';say(`Sending did not work. Please try again later or write to <a href="${C.mail}">mail@youen.ch</a> directly.`,'err')})});
/* ---------- reveals ---------- */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const t=e.target;t.classList.add('in');io.unobserve(t);
 $$('[data-cnt]',t).forEach(n=>{const v=+n.dataset.cnt,t0=performance.now();(function f(tt){const k=Math.min(1,(tt-t0)/1800);n.textContent=Math.round(v*(1-Math.pow(1-k,4)));if(k<1)requestAnimationFrame(f)})(t0)});
 if(t.classList.contains('tdw'))$$('#td .wave').forEach(w=>w.style.strokeDashoffset=0)}),{threshold:.12});
function arm(v){$$('.rv,.mk',v).forEach(e=>{e.classList.remove('in');io.observe(e)})}arm($('#home'));
/* ---------- tabs with wipe ---------- */
let curV='home',busy=false;const NAMES={home:'Home',projects:'Projects',contact:'Contact'};const hs=$('#hs'),track=$('#track');
function sizeHS(){if(MOB.matches){hs.style.height='';return}hs.style.height=(track.scrollWidth-innerWidth+innerHeight+60)+'px'}
const TITLES={home:'Youen Aebischer · Electronics Technician EFZ',projects:'Projects · Youen Aebischer',contact:'Contact · Youen Aebischer'};
function show(n){cur.classList.remove('big');$$('.view').forEach(v=>v.classList.remove('active'));const v=$('#'+n);v.classList.add('active');curV=n;scrollTo(0,0);
  if(n==='projects')initProjects();document.title=TITLES[n];
  $$('nav a').forEach(a=>{const on=a.dataset.go===n;a.classList.toggle('on',on);on?a.setAttribute('aria-current','page'):a.removeAttribute('aria-current')});sizeHS();arm(v);document.body.classList.toggle('ve',n==='home')}
function go(n,push=true){if(busy||n===curV||!NAMES[n])return;busy=true;$('#wl').textContent=NAMES[n];const w=$('#wipe');w.classList.remove('out');void w.offsetWidth;w.classList.add('on');
 if(push)history.pushState(null,'',n==='home'?location.pathname+location.search:'#'+n);
 if(push&&window.goatcounter&&goatcounter.count)goatcounter.count({path:n==='home'?'/':'/#'+n,title:TITLES[n]});
 setTimeout(()=>{show(n);
  setTimeout(()=>{w.classList.remove('on');w.classList.add('out');setTimeout(()=>{w.classList.remove('out');busy=false},750)},350)},750)}
const fromHash=()=>{const n=location.hash.slice(1);return NAMES[n]?n:'home'};
addEventListener('popstate',()=>{const n=fromHash();if(n!==curV){busy=false;show(n);onScroll()}});
document.addEventListener('click',e=>{const a=e.target.closest('[data-go]');if(a){e.preventDefault();go(a.dataset.go)}});
/* ---------- scroll ---------- */
let lastY=scrollY;
function onScroll(){const y=scrollY,max=document.documentElement.scrollHeight-innerHeight;$('#prog').style.transform=`scaleX(${max>0?y/max:0})`;mqv+=(y-lastY)*.15;lastY=y;
 if(curV==='home'){const r=$('#scrub').getBoundingClientRect(),p=clamp((innerHeight*.82-r.top)/(r.height+innerHeight*.35));const n=Math.floor(p*words.length*1.1);words.forEach((w,i)=>w.classList.toggle('on',i<n))}
 if(curV==='projects'&&!MOB.matches){const r=hs.getBoundingClientRect(),p=clamp(-r.top/(r.height-innerHeight));track.style.transform=`translateX(${-p*(track.scrollWidth-innerWidth)}px)`;$('#hbi').style.transform=`scaleX(${p})`;
  const cards=$$('.proj');let best=0,bd=1e9;cards.forEach((c,i)=>{const b=c.getBoundingClientRect(),k=(b.left+b.width/2-innerWidth/2)/innerWidth;if(Math.abs(k)<bd){bd=Math.abs(k);best=i}
   c.style.transform=`perspective(1400px) rotateY(${clamp(k,-1,1)*-14}deg) translateZ(${Math.max(0,1-Math.abs(k)*2.2)*40}px) scale(${1-Math.min(.12,Math.abs(k)*.1)})`});
  $('#hcnt').innerHTML=`${String(best+1).padStart(2,'0')}<small>/ ${String(cards.length).padStart(2,'0')}</small>`}}
addEventListener('scroll',onScroll,{passive:true});addEventListener('resize',()=>{sizeHS();onScroll()});
MOB.addEventListener('change',()=>{sizeHS();track.style.transform='';$$('.proj').forEach(c=>c.style.transform='')});

/* =========================================================
   HOME  spotlight model + calm gold gears with zoom-in
   ========================================================= */
const hero=$('#hero');
const DPR=Math.min(devicePixelRatio,2);let px=.5,py=.5;addEventListener('pointermove',e=>{px=e.clientX/innerWidth;py=e.clientY/innerHeight},{passive:true});
const heroVis=()=>curV==='home'&&hero.getBoundingClientRect().bottom>0;

/* ---- E: spotlight + gold gears (the 3D gears of the green version, calmer, in champagne) ---- */
let G=null;
function initG(){if(G)return;try{
 const cv=$('#gear'),LOWG=MOB.matches||TOUCH;
 const r=new TH.WebGLRenderer({canvas:cv,antialias:!LOWG,powerPreference:'high-performance'});
 r.setPixelRatio(Math.min(devicePixelRatio,LOWG?1.25:1.6)*(window.M3PR||1));r.setSize(innerWidth,innerHeight,false);
 r.toneMapping=TH.ACESFilmicToneMapping;r.toneMappingExposure=.9;
 const sc=new TH.Scene();sc.background=new TH.Color(0x0a0a0b);sc.fog=new TH.FogExp2(0x0a0a0b,.042);
 const cam=new TH.PerspectiveCamera(45,innerWidth/innerHeight,.1,200);sc.add(cam);
 const pm=new TH.PMREMGenerator(r);sc.environment=pm.fromScene(new TX.RoomEnvironment(),.04).texture;sc.environmentIntensity=.15;
 const ASP=innerWidth/innerHeight,PORT=ASP<1,D=19,HW=Math.tan(22.5*Math.PI/180)*D*ASP,ZC=-12,HX=PORT?.6:HW*.36,HY=PORT?-3.2:0;
 const spot=new TH.SpotLight(0xffeccc,240,40,.4,.85,1.5);spot.position.set(HX,HY+9,ZC+5);spot.target.position.set(HX,HY-1,ZC);sc.add(spot,spot.target);
 const rim=new TH.PointLight(0xcbb48a,5,30,2);rim.position.set(-6,3,-2);cam.add(rim);const warm=new TH.PointLight(0xffe2b0,3.2,16,2);warm.position.set(3,2,-2);cam.add(warm);
 const gold=new TH.MeshStandardMaterial({color:0xa98b56,metalness:1,roughness:.4});
 const bronze=new TH.MeshStandardMaterial({color:0x4f4232,metalness:1,roughness:.5});
 const edge=new TH.LineBasicMaterial({color:0xe8d6ad,transparent:true,opacity:.06});
 function gearShape(teeth,pitch,holeR,lighten){const r1=pitch-.16,r2=pitch+.13,sh=new TH.Shape(),st=Math.PI*2/teeth;let first=true;
  for(let t=0;t<teeth;t++)[[r1,0],[r2,.16],[r2,.40],[r1,.56]].forEach(([rr,o])=>{const a=t*st+o*st,x=Math.cos(a)*rr,y=Math.sin(a)*rr;if(first){sh.moveTo(x,y);first=false}else sh.lineTo(x,y)});
  sh.closePath();const h=new TH.Path();h.absarc(0,0,holeR,0,Math.PI*2,true);sh.holes.push(h);
  if(lighten){for(let i=0;i<5;i++){const a=i/5*Math.PI*2,hh=new TH.Path();hh.absarc(Math.cos(a)*pitch*.6,Math.sin(a)*pitch*.6,pitch*.19,0,Math.PI*2,true);sh.holes.push(hh)}}return sh}
 function makeGear(teeth,depth,mat,em){const pitch=teeth*.1,geo=new TH.ExtrudeGeometry(gearShape(teeth,pitch,pitch*.22,teeth>=14),{depth,bevelEnabled:true,bevelThickness:.04,bevelSize:.01,bevelSegments:2,curveSegments:10});
  geo.translate(0,0,-depth/2);const g=new TH.Group();g.add(new TH.Mesh(geo,mat));g.add(new TH.LineSegments(new TH.EdgesGeometry(geo,28),em||edge));return g}
 const clusters=[],P=t=>t*.1,TC=.28,ph=(na,ta,phi,nb)=>{const ua=(phi-ta)/(Math.PI*2/na)-TC;return phi+Math.PI-(.5-ua+TC)*Math.PI*2/nb};
 function cluster(x,y,z,flip,s0){const grp=new TH.Group(),gears=[],mg=gold.clone(),mb=bronze.clone(),me=edge.clone();mg.transparent=mb.transparent=true;
  const add=(teeth,px,py,pz,dir,depth,mat)=>{const g=makeGear(teeth,depth,mat===gold?mg:mb,me);g.position.set(px,py,pz);grp.add(g);gears.push({g,s:3.2/teeth*dir});return g};
  add(24,0,0,0,1,.5,gold);const a2=.6,d2=P(24)+P(14),b=add(14,Math.cos(a2)*d2,Math.sin(a2)*d2,0,-1,.5,gold);b.rotation.z=ph(24,0,a2,14);
  const a3=-.7,d3=P(14)+P(10);add(10,b.position.x+Math.cos(a3)*d3,b.position.y+Math.sin(a3)*d3,0,1,.5,gold).rotation.z=ph(14,b.rotation.z,a3,10);
  const a4=3.5,d4=P(24)+P(8);add(8,Math.cos(a4)*d4,Math.sin(a4)*d4,0,-1,.4,gold).rotation.z=ph(24,0,a4,8);add(32,-1.2,-1.6,-1.7,-1,.3,bronze);
  grp.position.set(x,y,z);const ry=-.35*flip;grp.rotation.set(.25*flip,ry,0);grp.scale.setScalar(s0);sc.add(grp);clusters.push({grp,gears,ry,ph:Math.random()*6,mg,mb,me})}
 // zoom-in like the green version: clusters along the flight path, kept to the sides so they pass by the text
 const hw12=Math.tan(22.5*Math.PI/180)*12*ASP,SX=PORT?hw12+.8:hw12*.92,SC=PORT?.8:1.05,STEP=12;
 cluster(HX,HY,ZC,1,PORT?.95:1.2);for(let k=1;k<=6;k++)cluster((k%2?-1:1)*SX,(k%2?-.8:.7),ZC-STEP*k,k%2?-1:1,SC);
 // dust in the light cone
 const N=LOWG?160:380,pos=new Float32Array(N*3),vel=new Float32Array(N);
 for(let i=0;i<N;i++){pos[i*3]=HX+(Math.random()-.5)*4.2;pos[i*3+1]=HY+Math.random()*9-4;pos[i*3+2]=ZC+3+(Math.random()-.5)*5;vel[i]=.05+Math.random()*.12}
 const dg=new TH.BufferGeometry();dg.setAttribute('position',new TH.BufferAttribute(pos,3));
 const dust=new TH.Points(dg,new TH.PointsMaterial({color:0xe8d6ad,size:.035,transparent:true,opacity:.4,depthWrite:false,blending:TH.AdditiveBlending,sizeAttenuation:true}));sc.add(dust);
 let t=0,cyy=0,cx=0,cy=0;
 function size(){r.setSize(innerWidth,innerHeight,false);cam.aspect=innerWidth/innerHeight;cam.updateProjectionMatrix()}
 function draw(dt){t+=dt;const h=$('#home'),max=h.offsetHeight-innerHeight,p=clamp(scrollY/Math.max(1,max));
  const tz=7-p*76;cyy+=(tz-cyy)*Math.min(1,dt*2.5);cx+=((px-.5)*.9-cx)*Math.min(1,dt*2);cy+=((.5-py)*.5-cy)*Math.min(1,dt*2);
  cam.position.set(cx,cy-p*2,cyy);cam.lookAt(cx*.3,cy*.3-p*2,cyy-12);cam.rotateZ(Math.sin(p*Math.PI*2)*.06);
  clusters.forEach(c=>{const d=cyy-c.grp.position.z,k=clamp((d-5)/8);c.grp.visible=k>.01;c.mg.opacity=c.mb.opacity=k;c.me.opacity=.06*k;
   c.gears.forEach(g=>g.g.rotation.z+=g.s*dt*(RM?0:.3));c.grp.rotation.y=c.ry+Math.sin(t*.15+c.ph)*.06});
  for(let i=0;i<N;i++){pos[i*3+1]+=vel[i]*dt;pos[i*3]+=Math.sin(t*.4+i)*.0015;if(pos[i*3+1]>HY+5)pos[i*3+1]=HY-4}dg.attributes.position.needsUpdate=true;
  r.render(sc,cam)}
 G={draw,size};
}catch(e){console.warn('gears off',e);G=null}}

/* ---- D: spotlight 3D ---- */
M3.add('hd3','twist',{w:760,h:760,az:-24,el:30,yaw0:-1.8,zoom:1.16,lookY:-7,turn:.28,key:0xfff2dc,keyI:2.8,env:.85,rimColor:0xcbb48a,rim:1.6});

/* ---------- init + loop ---------- */
initG();document.body.classList.toggle('ve',curV==='home');addEventListener('resize',()=>{sizeHS();G&&G.size()});
let last=performance.now(),fr=0;
function loop(now){const dt=Math.min(.05,(now-last)/1000);last=now;fr++;curLoop();
 mqv*=.92;mqx-=RM?0:(.6+Math.abs(mqv)*.4)*(dt*60);const w1=$('#mq1').scrollWidth/3;if(w1){if(mqx<-w1)mqx+=w1;$('#mq1').style.transform=`translateX(${mqx}px)`;$('#mq2').style.transform=`translateX(${-w1-mqx}px)`}
 if(curV==='home'&&G&&(!WD||fr%4===0))G.draw(WD?dt*4:dt)
 M3.render();requestAnimationFrame(loop)}
if(fromHash()!=='home')show(fromHash());
requestAnimationFrame(loop);onScroll();
window.__go=go;
})();
