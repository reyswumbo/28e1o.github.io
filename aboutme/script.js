const starsEl = document.getElementById('stars');
const N = 160;
for(let i=0;i<N;i++){
  const s = document.createElement('div');
  s.className = 'star';
  const size = Math.random()*2.6 + 1;
  s.style.width = size+'px';
  s.style.height = size+'px';
  s.style.top = Math.random()*100+'vh';
  s.style.left = Math.random()*100+'vw';
  s.style.animationDuration = (2.5 + Math.random()*4.5)+'s, '+(6 + Math.random()*10)+'s';
  s.style.animationDelay = (Math.random()*5)+'s, '+(Math.random()*6)+'s';
  s.style.setProperty('--fx', (Math.random()*16 - 8)+'px');
  s.style.setProperty('--fy', (Math.random()*16 - 8)+'px');
  if(Math.random() < 0.3){
    s.style.boxShadow = '0 0 8px 2px rgba(244,236,216,0.35)';
  }
  starsEl.appendChild(s);
}

const targets = document.querySelectorAll('.letter p, .divider');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -8% 0px' });
targets.forEach(t=>io.observe(t));
