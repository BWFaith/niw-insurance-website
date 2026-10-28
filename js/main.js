(()=>{
const EMAIL="Nathaniel.islerw@gmail.com",PHONE="512-585-0615";
const pages=[["index.html","Home"],["about.html","About"],["services.html","Services"],["book.html","Book a consultation"]];
const cur=location.pathname.split("/").pop()||"index.html";
const logo='<span class="logo"><b>N<i>I</i>W</b><small>Insurance<br>Plans</small></span>';
document.body.insertAdjacentHTML("afterbegin",`<header><div class="wrap nav"><a href="index.html" aria-label="NIW Insurance Plans home">${logo}</a><ul id="menu">${pages.slice(0,3).map(p=>`<li><a href="${p[0]}" class="${cur==p[0]?"on":""}">${p[1]}</a></li>`).join("")}</ul><a class="btn red mag" href="book.html">Book a consultation</a><button class="burger" aria-label="Menu" aria-expanded="false">☰</button></div></header>`);
document.body.insertAdjacentHTML("beforeend",`<footer><div class="wrap"><div class="fg"><div>${logo}<p style="margin-top:1rem">Health coverage that brings hope. Personal guidance for individuals, families and business owners.</p></div><div><h4>Explore</h4><ul>${pages.map(p=>`<li><a href="${p[0]}">${p[1]}</a></li>`).join("")}</ul></div><div><h4>Contact</h4><ul><li><a href="mailto:${EMAIL}">${EMAIL}</a></li><li><a href="tel:+15125850615">${PHONE}</a></li><li>Licensed in over 20 states</li></ul></div></div><p class="legal">© ${new Date().getFullYear()} NIW Insurance Plans. Nathaniel Isler-Williams is a licensed health insurance agent. Plan availability, pricing and eligibility vary by state and carrier. This website is for general information and is not an offer of coverage.</p></div></footer>`);
const h=document.querySelector("header"),b=document.querySelector(".burger"),m=document.getElementById("menu");
const sc=()=>h.classList.toggle("solid",scrollY>40);sc();addEventListener("scroll",sc,{passive:true});
b.onclick=()=>{const o=m.classList.toggle("open");b.setAttribute("aria-expanded",o)};
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
const cnt=new IntersectionObserver(e=>e.forEach(x=>{if(!x.isIntersecting)return;const el=x.target,t=+el.dataset.n,s=performance.now();
const f=n=>{const p=Math.min((n-s)/1600,1);el.textContent=Math.round(t*(1-Math.pow(1-p,4)));p<1&&requestAnimationFrame(f)};requestAnimationFrame(f);cnt.unobserve(el)}),{threshold:.5});
document.querySelectorAll("[data-n]").forEach(e=>cnt.observe(e));
const rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
document.querySelectorAll(".mag").forEach(el=>{if(rm)return;el.addEventListener("mousemove",e=>{const r=el.getBoundingClientRect();el.style.transform=`translate(${(e.clientX-r.left-r.width/2)*.2}px,${(e.clientY-r.top-r.height/2)*.3}px)`});el.addEventListener("mouseleave",()=>el.style.transform="")});
const g=document.querySelector(".glow");
if(g&&!rm)addEventListener("pointermove",e=>{g.style.left=e.clientX+"px";g.style.top=e.clientY+"px"});
const pn=document.querySelector(".panel");
if(pn&&!rm){pn.parentElement.addEventListener("mousemove",e=>{const r=pn.getBoundingClientRect();pn.style.setProperty("--ry",((e.clientX-r.left-r.width/2)/60)+"deg");pn.style.setProperty("--rx",(-(e.clientY-r.top-r.height/2)/60)+"deg")})}
const cv=document.getElementById("fx");
if(cv){const c=cv.getContext("2d");let W,H,mx=.5,t=0;
const rs=()=>{W=cv.width=cv.offsetWidth*devicePixelRatio;H=cv.height=cv.offsetHeight*devicePixelRatio};rs();addEventListener("resize",rs);
addEventListener("pointermove",e=>mx=e.clientX/innerWidth);
const draw=()=>{c.clearRect(0,0,W,H);c.globalCompositeOperation="lighter";
for(let i=0;i<9;i++){c.beginPath();const a=H*(.35+i*.045),ph=i*.7,sp=.4+i*.05;
for(let x=0;x<=W;x+=14){const y=a+Math.sin(x/W*3.2+t*sp+ph+mx*2)*H*.11+Math.sin(x/W*7+t*.6+ph)*H*.03;x?c.lineTo(x,y):c.moveTo(x,y)}
c.strokeStyle=`rgba(${i%3?212:255},${i%3?20:70},${i%3?28:60},${.07+i*.012})`;c.lineWidth=(1+i*.5)*devicePixelRatio;c.stroke()}
t+=.008;if(!rm)requestAnimationFrame(draw)};draw()}
const f=document.getElementById("bk");
if(f){const d=f.querySelector('[name="Preferred date"]');d.min=new Date().toISOString().split("T")[0];
f.addEventListener("submit",async e=>{e.preventDefault();const msg=document.getElementById("msg"),btn=f.querySelector("button");
btn.disabled=true;btn.textContent="Sending...";msg.className="";
try{const r=await fetch("https://formsubmit.co/ajax/"+EMAIL,{method:"POST",headers:{Accept:"application/json"},body:new FormData(f)});
const j=await r.json();if(!r.ok||j.success==="false")throw 0;
msg.className="ok";msg.textContent="Request received. Nathaniel will reach out within one business day to confirm your consultation.";f.reset()}
catch{msg.className="err";msg.innerHTML=`We could not send your request. Please email <a href="mailto:${EMAIL}"><u>${EMAIL}</u></a> or call ${PHONE}.`}
btn.disabled=false;btn.textContent="Request my consultation"})}
})();
