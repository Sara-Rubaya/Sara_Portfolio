import React, { useState, useEffect, useRef, useCallback } from 'react';
import myImage from './Images/Me.JPG';
  import resumePDF from './Resume/Sara-Rubaya_resume.pdf';

// ─── THEME ───────────────────────────────────────────────────────────────────
const T = {
  rose: '#c9667a',
  rosePale: '#fce8ee',
  blush: '#fdf0f4',
  mauve: '#9b6e7e',
  mauveDeep: '#6b3d4e',
  lavender: '#e8d5f5',
  lavMid: '#c9a8e0',
  cream: '#fdf8f2',
  warmWhite: '#fffaf7',
  textDark: '#3a1f2b',
  textMid: '#7a4f5f',
  textSoft: '#b08a98',
  gold: '#e8b88a',
};

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Crimson+Pro:ital,wght@0,300;1,300&display=swap');
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: #fffaf7; color: #3a1f2b; overflow-x: hidden; }
  a { text-decoration: none; }
  ::selection { background: #fce8ee; color: #6b3d4e; }

  /* ── Scroll reveal ── */
  .sr { opacity: 0; transform: translateY(40px); transition: opacity 0.75s cubic-bezier(.22,1,.36,1), transform 0.75s cubic-bezier(.22,1,.36,1); }
  .sr.visible { opacity: 1; transform: translateY(0); }
  .sr-left { opacity: 0; transform: translateX(-40px); transition: opacity 0.75s cubic-bezier(.22,1,.36,1), transform 0.75s cubic-bezier(.22,1,.36,1); }
  .sr-left.visible { opacity: 1; transform: translateX(0); }
  .sr-right { opacity: 0; transform: translateX(40px); transition: opacity 0.75s cubic-bezier(.22,1,.36,1), transform 0.75s cubic-bezier(.22,1,.36,1); }
  .sr-right.visible { opacity: 1; transform: translateX(0); }
  .sr-scale { opacity: 0; transform: scale(0.88); transition: opacity 0.7s cubic-bezier(.22,1,.36,1), transform 0.7s cubic-bezier(.22,1,.36,1); }
  .sr-scale.visible { opacity: 1; transform: scale(1); }
  .delay-1 { transition-delay: 0.1s !important; }
  .delay-2 { transition-delay: 0.2s !important; }
  .delay-3 { transition-delay: 0.3s !important; }
  .delay-4 { transition-delay: 0.4s !important; }
  .delay-5 { transition-delay: 0.5s !important; }

  /* ── Hero animations ── */
  @keyframes heroFadeUp { from { opacity:0; transform:translateY(36px); } to { opacity:1; transform:translateY(0); } }
  @keyframes heroFadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes blobDrift { 0%{transform:translate(0,0) scale(1);} 100%{transform:translate(30px,-40px) scale(1.08);} }
  @keyframes badgePulse { 0%,100%{transform:scale(1);opacity:1;} 50%{transform:scale(1.3);opacity:.7;} }
  @keyframes floatCard { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
  @keyframes shimmerText {
    0%{background-position:0% 50%;}
    50%{background-position:100% 50%;}
    100%{background-position:0% 50%;}
  }
  @keyframes rotateSlow { from{transform:rotate(0deg);} to{transform:rotate(360deg);} }
  @keyframes particleDrift {
    0%{transform:translateY(0) translateX(0) scale(1); opacity:0.6;}
    50%{transform:translateY(-20px) translateX(10px) scale(1.2); opacity:1;}
    100%{transform:translateY(0) translateX(0) scale(1); opacity:0.6;}
  }
  @keyframes typewriter { from{width:0;} to{width:100%;} }
  @keyframes cursorBlink { 0%,100%{opacity:1;} 50%{opacity:0;} }
  @keyframes cardEntrance { from{opacity:0;transform:translateY(30px) scale(0.95);} to{opacity:1;transform:translateY(0) scale(1);} }
  @keyframes glowPulse { 0%,100%{box-shadow:0 0 20px rgba(201,102,122,0.3);} 50%{box-shadow:0 0 50px rgba(201,102,122,0.6), 0 0 80px rgba(201,102,122,0.2);} }
  @keyframes counterUp { from{transform:translateY(20px);opacity:0;} to{transform:translateY(0);opacity:1;} }
  @keyframes borderDraw {
    0%{clip-path:inset(0 100% 100% 0);}
    25%{clip-path:inset(0 0 100% 0);}
    50%{clip-path:inset(0 0 0 0);}
    75%{clip-path:inset(100% 0 0 0);}
    100%{clip-path:inset(0 100% 100% 0);}
  }
  @keyframes orbFloat {
    0%,100%{transform:translate(0,0);}
    25%{transform:translate(15px,-20px);}
    50%{transform:translate(-10px,-35px);}
    75%{transform:translate(-20px,-15px);}
  }

  .hero-title-1 { animation: heroFadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.2s both; }
  .hero-title-2 { animation: heroFadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.35s both; }
  .hero-subtitle { animation: heroFadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.5s both; }
  .hero-para { animation: heroFadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.65s both; }
  .hero-actions { animation: heroFadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.8s both; }
  .hero-socials { animation: heroFadeUp 0.9s cubic-bezier(.22,1,.36,1) 0.95s both; }
  .hero-badge-top { animation: cardEntrance 0.7s cubic-bezier(.22,1,.36,1) 1.3s both; }
  .hero-badge-bot { animation: cardEntrance 0.7s cubic-bezier(.22,1,.36,1) 1.5s both; }
  .hero-img-wrap { animation: cardEntrance 1s cubic-bezier(.22,1,.36,1) 0.4s both; }

  .skill-pill:hover { background: #fce8ee !important; border-color: #c9667a !important; transform: translateY(-2px); }
  .project-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px rgba(180,100,120,0.18) !important; }
  .edu-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(180,100,120,0.12) !important; }
  .tl-card-inner:hover { box-shadow: 0 8px 32px rgba(180,100,120,0.13) !important; }
  .nav-link:hover { color: #c9667a !important; }
  .nav-link::after { content:''; display:block; height:1.5px; background:#c9667a; transform:scaleX(0); transition:transform .25s; transform-origin:left; }
  .nav-link:hover::after { transform:scaleX(1); }
  .chip:hover { background: #fce8ee !important; }
  .social-pill:hover { background: #fce8ee !important; border-color: #c9667a !important; }
  .float-anim { animation: floatCard 6s ease-in-out infinite; }
  .glow-btn:hover { animation: glowPulse 1.5s ease-in-out infinite !important; }

  /* ── Cursor trail ── */
  .cursor-dot {
    position: fixed; width: 8px; height: 8px;
    background: #c9667a; border-radius: 50%;
    pointer-events: none; z-index: 9999;
    transform: translate(-50%,-50%);
    transition: transform 0.1s, opacity 0.3s;
    opacity: 0.7;
  }
  .cursor-ring {
    position: fixed; width: 32px; height: 32px;
    border: 1.5px solid rgba(201,102,122,0.5); border-radius: 50%;
    pointer-events: none; z-index: 9998;
    transform: translate(-50%,-50%);
    transition: all 0.18s cubic-bezier(.22,1,.36,1);
  }

  /* ── Progress bar ── */
  .progress-bar {
    position: fixed; top: 0; left: 0; height: 3px; z-index: 200;
    background: linear-gradient(90deg, #c9667a, #c9a8e0, #e8b88a);
    transition: width 0.1s;
  }

  @media (max-width: 900px) {
    .hero-grid { flex-direction: column !important; text-align: center; padding-top: 6rem !important; }
    .hero-actions { justify-content: center !important; }
    .hero-socials { justify-content: center !important; }
    .hero-right { display: flex; justify-content: center; }
    .two-col { grid-template-columns: 1fr !important; }
    .projects-grid { grid-template-columns: 1fr !important; }
    .featured-card { grid-template-columns: 1fr !important; }
    .nav-links-desktop { display: none !important; }
    .tl-grid { grid-template-columns: 0 2rem 1fr !important; }
    .tl-right { grid-column: 3 !important; text-align: left !important; padding-right: 0 !important; padding-left: 1.2rem !important; }
    .tl-left { grid-column: 3 !important; text-align: left !important; padding-right: 0 !important; padding-left: 1.2rem !important; }
    .tl-empty { display: none !important; }
    .tl-techs-right { justify-content: flex-start !important; }
    .wide-card { grid-column: span 1 !important; }
    .wide-card .wide-inner { grid-template-columns: 1fr !important; }
    .cursor-dot, .cursor-ring { display: none; }
    .hero-particles { display: none; }
  }
`;

function injectGlobalStyles() {
  if (document.getElementById('sara-portfolio-styles')) return;
  const style = document.createElement('style');
  style.id = 'sara-portfolio-styles';
  style.textContent = GLOBAL_CSS;
  document.head.appendChild(style);
}

// ─── SCROLL REVEAL HOOK ───────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    const els = document.querySelectorAll('.sr, .sr-left, .sr-right, .sr-scale');
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  });
}

// ─── CUSTOM CURSOR ────────────────────────────────────────────────────────────
function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + 'px';
        dotRef.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', move);

    let raf;
    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = ringPos.current.x + 'px';
        ringRef.current.style.top = ringPos.current.y + 'px';
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const over = () => { if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(1.8)'; };
    const out = () => { if (ringRef.current) ringRef.current.style.transform = 'translate(-50%,-50%) scale(1)'; };
    document.querySelectorAll('a,button').forEach(el => { el.addEventListener('mouseenter', over); el.addEventListener('mouseleave', out); });

    return () => { document.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}

// ─── PROGRESS BAR ────────────────────────────────────────────────────────────
function ProgressBar() {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const h = () => {
      const scroll = window.scrollY;
      const total = document.body.scrollHeight - window.innerHeight;
      setWidth(total > 0 ? (scroll / total) * 100 : 0);
    };
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return <div className="progress-bar" style={{ width: `${width}%` }} />;
}

// ─── BLOBS ────────────────────────────────────────────────────────────────────
function Blobs() {
  const base = {
    position: 'fixed', borderRadius: '50%', filter: 'blur(80px)',
    pointerEvents: 'none', zIndex: 0, opacity: 0.32,
    animation: 'blobDrift 18s ease-in-out infinite alternate',
  };
  return (
    <>
      <div style={{ ...base, width: 500, height: 500, background: 'radial-gradient(circle,#f5b8c8,#fce8ee)', top: -150, left: -150 }} />
      <div style={{ ...base, width: 400, height: 400, background: 'radial-gradient(circle,#d8b4f8,#e8d5f5)', top: '30%', right: -100, animationDelay: '-6s' }} />
      <div style={{ ...base, width: 350, height: 350, background: 'radial-gradient(circle,#fbc3a0,#fde8d8)', bottom: '10%', left: '10%', animationDelay: '-12s' }} />
    </>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav({ onNav, onResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const h = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['about','journey','projects','skills','education','contact'];
      for (let s of [...sections].reverse()) {
        const el = document.getElementById(s);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(s); break; }
      }
    };
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const links = ['About', 'Journey', 'Projects', 'Skills', 'Education', 'Contact'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0.9rem 2.5rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(253,248,242,0.92)' : 'rgba(253,248,242,0.5)',
      backdropFilter: 'blur(24px)',
      borderBottom: `1px solid rgba(201,102,122,${scrolled ? 0.2 : 0.08})`,
      transition: 'all .3s',
      boxShadow: scrolled ? '0 4px 30px rgba(180,100,120,0.08)' : 'none',
    }}>
      <div onClick={() => onNav('hero')} style={{
        fontFamily: "'Playfair Display', serif", fontSize: '1.25rem',
        color: T.mauveDeep, letterSpacing: '0.02em', cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: '0.3rem',
      }}>
        Sara <em style={{ color: T.rose }}>Rubaya</em>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: T.rose, marginLeft: 4, animation: 'badgePulse 2s ease-in-out infinite', display: 'inline-block' }} />
      </div>

      <ul className="nav-links-desktop" style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {links.map(l => (
          <li key={l}>
            <button className="nav-link" onClick={() => onNav(l.toLowerCase())} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.82rem', letterSpacing: '0.07em', textTransform: 'uppercase',
              color: active === l.toLowerCase() ? T.rose : T.textMid,
              fontFamily: "'DM Sans', sans-serif", fontWeight: active === l.toLowerCase() ? 600 : 400,
              padding: '0.2rem 0', transition: 'color .2s',
            }}>{l}</button>
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <button onClick={onResume} className="glow-btn" style={{
          padding: '0.5rem 1.2rem', background: `linear-gradient(135deg,${T.rose},${T.mauve})`,
          color: 'white', border: 'none', borderRadius: 100, fontSize: '0.8rem', fontWeight: 500,
          cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all .2s',
          boxShadow: '0 4px 16px rgba(201,102,122,0.35)',
        }}>Resume ↓</button>
        <button onClick={() => setMobileOpen(o => !o)} style={{
          display: 'none', background: 'none', border: `1px solid rgba(201,102,122,0.3)`,
          borderRadius: 10, padding: '0.45rem 0.6rem', cursor: 'pointer', color: T.textMid,
        }} className="mob-menu-btn">☰</button>
      </div>

      {mobileOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'rgba(253,248,242,0.97)', backdropFilter: 'blur(20px)',
          borderBottom: `1px solid rgba(201,102,122,0.15)`,
          padding: '1rem 2rem', display: 'flex', flexDirection: 'column', gap: '0.75rem',
        }}>
          {links.map(l => (
            <button key={l} onClick={() => { onNav(l.toLowerCase()); setMobileOpen(false); }} style={{
              background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer',
              fontSize: '0.9rem', color: T.textMid, fontFamily: "'DM Sans', sans-serif", padding: '0.3rem 0',
            }}>{l}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

// ─── SECTION WRAPPER ─────────────────────────────────────────────────────────
function Section({ id, bg = T.warmWhite, children, style = {} }) {
  return (
    <section id={id} style={{ background: bg, position: 'relative', zIndex: 1, ...style }}>
      <div style={{ maxWidth: 1180, margin: '0 auto', padding: '5.5rem 2.5rem' }}>
        {children}
      </div>
    </section>
  );
}

function SectionLabel({ children }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: '0.75rem',
      fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase',
      color: T.rose, fontWeight: 600, marginBottom: '0.75rem',
    }}>
      <span style={{ display: 'block', height: 1, width: 32, background: `linear-gradient(to right,${T.rose},transparent)` }} />
      {children}
      <span style={{ display: 'block', height: 1, width: 32, background: `linear-gradient(to left,${T.rose},transparent)` }} />
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 style={{
      fontFamily: "'Playfair Display', serif",
      fontSize: 'clamp(2.1rem,4vw,3.2rem)',
      lineHeight: 1.1, color: T.textDark, marginBottom: '0.75rem',
    }}>{children}</h2>
  );
}

// ─── BTNS ─────────────────────────────────────────────────────────────────────
function BtnPrimary({ children, onClick, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        padding: '0.9rem 2.2rem',
        background: hov ? `linear-gradient(135deg,${T.mauveDeep},${T.mauve})` : `linear-gradient(135deg,${T.rose},${T.mauve})`,
        color: 'white', border: 'none', borderRadius: 100,
        fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 500,
        cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        boxShadow: hov ? '0 10px 32px rgba(201,102,122,0.5)' : '0 4px 20px rgba(201,102,122,0.3)',
        transform: hov ? 'translateY(-3px)' : 'none', transition: 'all .25s', ...style,
      }}>{children}</button>
  );
}

function BtnOutline({ children, onClick, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        padding: '0.9rem 2.2rem',
        background: hov ? T.rosePale : 'transparent',
        color: T.rose, border: `1.5px solid ${T.rose}`, borderRadius: 100,
        fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 500,
        cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        transition: 'all .2s', transform: hov ? 'translateY(-3px)' : 'none', ...style,
      }}>{children}</button>
  );
}

// ─── TYPEWRITER ───────────────────────────────────────────────────────────────
function Typewriter({ phrases }) {
  const [displayed, setDisplayed] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    const delay = deleting ? 50 : charIdx === current.length ? 1800 : 80;
    const t = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setDisplayed(current.slice(0, charIdx + 1));
          setCharIdx(i => i + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (charIdx > 0) {
          setDisplayed(current.slice(0, charIdx - 1));
          setCharIdx(i => i - 1);
        } else {
          setDeleting(false);
          setPhraseIdx(i => (i + 1) % phrases.length);
        }
      }
    }, delay);
    return () => clearTimeout(t);
  }, [charIdx, deleting, phraseIdx, phrases]);

  return (
    <span style={{ color: T.rose }}>
      {displayed}
      <span style={{ animation: 'cursorBlink 1s step-end infinite', borderRight: `2px solid ${T.rose}`, marginLeft: 1 }} />
    </span>
  );
}

// ─── PARTICLES ────────────────────────────────────────────────────────────────
function HeroParticles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 4 + Math.random() * 8,
    delay: Math.random() * 6,
    dur: 4 + Math.random() * 4,
    opacity: 0.3 + Math.random() * 0.4,
  }));

  return (
    <div className="hero-particles" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      {particles.map(p => (
        <div key={p.id} style={{
          position: 'absolute',
          left: `${p.x}%`, top: `${p.y}%`,
          width: p.size, height: p.size,
          borderRadius: '50%',
          background: [T.rose, T.lavMid, T.gold][p.id % 3],
          opacity: p.opacity,
          animation: `orbFloat ${p.dur}s ease-in-out ${p.delay}s infinite`,
          filter: 'blur(1px)',
        }} />
      ))}
      {/* Decorative rings */}
      {[220, 340, 460].map((size, i) => (
        <div key={i} style={{
          position: 'absolute',
          right: `${5 + i * 2}%`, top: `${10 + i * 3}%`,
          width: size, height: size,
          borderRadius: '50%',
          border: `1px solid rgba(201,102,122,${0.06 - i * 0.015})`,
          animation: `rotateSlow ${30 + i * 10}s linear infinite${i % 2 ? ' reverse' : ''}`,
        }} />
      ))}
    </div>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ onNav, myImage }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const h = (e) => setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 20,
      y: (e.clientY / window.innerHeight - 0.5) * 20,
    });
    window.addEventListener('mousemove', h);
    return () => window.removeEventListener('mousemove', h);
  }, []);

  return (
    <section id="hero" style={{ minHeight: '100vh', position: 'relative', zIndex: 1, overflow: 'hidden' }}>
      {/* Mesh gradient bg */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(ellipse 80% 60% at 20% 40%, rgba(252,232,238,0.7) 0%, transparent 60%),
          radial-gradient(ellipse 60% 70% at 80% 20%, rgba(232,213,245,0.5) 0%, transparent 55%),
          radial-gradient(ellipse 50% 50% at 60% 80%, rgba(232,184,138,0.2) 0%, transparent 50%),
          ${T.warmWhite}
        `,
        pointerEvents: 'none',
      }} />

      {/* Decorative grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: `linear-gradient(rgba(201,102,122,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(201,102,122,0.04) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <HeroParticles />

      {/* Floating orbits */}
      <div style={{
        position: 'absolute', right: '8%', top: '15%',
        width: 500, height: 500, pointerEvents: 'none',
        transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)`,
        transition: 'transform 0.3s ease-out',
      }}>
        {[1, 0.65, 0.4].map((scale, i) => (
          <div key={i} style={{
            position: 'absolute', inset: 0,
            borderRadius: '50%',
            border: `1px solid rgba(201,102,122,${0.08 + i * 0.04})`,
            transform: `scale(${scale})`,
            animation: `rotateSlow ${25 + i * 8}s linear infinite${i % 2 ? ' reverse' : ''}`,
          }}>
            <div style={{
              position: 'absolute', top: '5%', left: '50%',
              width: 8, height: 8, borderRadius: '50%',
              background: [T.rose, T.lavMid, T.gold][i],
              transform: 'translate(-50%,-50%)',
              boxShadow: `0 0 10px ${[T.rose, T.lavMid, T.gold][i]}`,
            }} />
          </div>
        ))}
      </div>

      <div className="hero-grid" style={{
        maxWidth: 1180, margin: '0 auto', padding: '9rem 2.5rem 4rem',
        display: 'flex', alignItems: 'center', gap: '4rem', position: 'relative',
      }}>
        {/* ── LEFT ── */}
        <div style={{ flex: 1 }}>
          {/* Status badge */}
          <div className="hero-title-1" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: 'rgba(252,232,238,0.8)',
            backdropFilter: 'blur(10px)',
            border: `1px solid rgba(201,102,122,0.3)`,
            borderRadius: 100, padding: '0.4rem 1.1rem',
            fontSize: '0.76rem', letterSpacing: '0.08em', textTransform: 'uppercase',
            color: T.rose, fontWeight: 600, marginBottom: '1.8rem',
            boxShadow: '0 4px 20px rgba(201,102,122,0.12)',
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#6bcf8a', animation: 'badgePulse 2s ease-in-out infinite', display: 'inline-block' }} />
            Frontend Developer · Dhaka, Bangladesh
          </div>

          {/* Name */}
          <div className="hero-title-2" style={{ marginBottom: '0.4rem' }}>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3.4rem,7.5vw,6rem)',
              lineHeight: 1.02, color: T.textDark,
            }}>
              Sara
            </h1>
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 'clamp(3.4rem,7.5vw,6rem)',
              lineHeight: 1.02,
              fontStyle: 'italic',
              background: `linear-gradient(135deg, ${T.rose} 0%, ${T.mauve} 40%, ${T.lavMid} 80%, ${T.gold} 100%)`,
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'shimmerText 4s ease infinite',
              display: 'inline-block',
            }}>Rubaya</h1>
          </div>

          {/* Typewriter */}
          <div className="hero-subtitle" style={{
            fontFamily: "'Crimson Pro', serif", fontSize: '1.35rem',
            fontWeight: 300, lineHeight: 1.6, marginBottom: '1rem',
            color: T.textMid, fontStyle: 'italic',
            minHeight: '2.2rem',
          }}>
             <Typewriter phrases={[
              'I craft beautiful web experiences.',
              'I build MERN stack applications.',
              'I turn ideas into reality.',
              'I love clean, thoughtful code.',
              'I design with heart & precision.',
            ]} />
          </div>

          <p className="hero-para" style={{
            fontSize: '0.98rem', color: T.textMid, lineHeight: 1.9,
            maxWidth: 490, marginBottom: '2.4rem',
          }}>
            Frontend developer & software engineering student passionate about building
            beautiful, functional web applications — one thoughtful component at a time.
          </p>

          {/* CTA Buttons */}
          <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <BtnPrimary onClick={() => onNav('projects')}>
              <span>View my work</span>
              <span style={{ fontSize: '0.85rem' }}>↓</span>
            </BtnPrimary>
            <BtnOutline onClick={() => onNav('contact')}>Let's connect ✦</BtnOutline>
          </div>

          {/* Socials */}
          <div className="hero-socials" style={{ display: 'flex', gap: '0.6rem', marginTop: '1.75rem', flexWrap: 'wrap' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/Sara-Rubaya', icon: '🐙' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sara-rubaya/', icon: '💼' },
              { label: 'Email', href: 'mailto:sararubaya4800@gmail.com', icon: '✉️' },
              { label: 'WhatsApp', href: 'https://wa.me/8801846831753', icon: '💬' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-pill" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.45rem 1rem',
                background: 'rgba(253,248,242,0.8)',
                backdropFilter: 'blur(10px)',
                border: `1px solid rgba(201,102,122,0.22)`, borderRadius: 100,
                fontSize: '0.78rem', color: T.textMid, transition: 'all .2s',
                boxShadow: '0 2px 12px rgba(201,102,122,0.06)',
              }}>
                <span>{s.icon}</span>{s.label}
              </a>
            ))}
          </div>

          {/* Mini stats row */}
          <div className="hero-socials" style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem', flexWrap: 'wrap' }}>
            {[['30+', 'Projects'], ['1+', 'Years'], ['5+', 'Stacks']].map(([n, l]) => (
              <div key={l} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', color: T.rose, fontStyle: 'italic', lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: '0.72rem', color: T.textSoft, textTransform: 'uppercase', letterSpacing: '0.07em', marginTop: 2 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="hero-right" style={{ flexShrink: 0, position: 'relative' }}>
          <div style={{
            position: 'relative', width: 340,
            transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)`,
            transition: 'transform 0.4s ease-out',
          }}>

            {/* Glow behind photo */}
            <div style={{
              position: 'absolute', inset: -20,
              borderRadius: '50% 50% 60% 40% / 40% 40% 60% 60%',
              background: `radial-gradient(ellipse, rgba(201,102,122,0.2) 0%, transparent 70%)`,
              animation: 'blobDrift 6s ease-in-out infinite alternate',
              zIndex: 0,
            }} />

            {/* Photo card */}
            <div className="hero-img-wrap float-anim" style={{
              width: '100%', aspectRatio: '3/4',
              borderRadius: '36px 36px 120px 36px',
              background: `linear-gradient(150deg, ${T.rosePale} 0%, ${T.lavender} 100%)`,
              border: `2px solid rgba(201,102,122,0.3)`,
              overflow: 'hidden', position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: `
                0 30px 80px rgba(180,100,120,0.2),
                0 0 0 1px rgba(201,102,122,0.1),
                inset 0 0 40px rgba(232,213,245,0.3)
              `,
              zIndex: 1,
            }}>
              {myImage ? (
                <img src={myImage} alt="Sara Rubaya" style={{
                  width: '88%', height: '88%', objectFit: 'cover',
                  borderRadius: 24, position: 'relative', zIndex: 1,
                }} />
              ) : (
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{
                    width: 120, height: 120, borderRadius: '50%', margin: '0 auto 1rem',
                    background: `linear-gradient(135deg,${T.rosePale},${T.lavender})`,
                    border: `3px solid rgba(201,102,122,0.35)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: '0 8px 30px rgba(201,102,122,0.2)',
                  }}>
                    <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '2.8rem', color: T.rose, fontStyle: 'italic' }}>S</span>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', color: T.textDark, fontStyle: 'italic' }}>Sara Rubaya</div>
                  <div style={{ fontSize: '0.8rem', color: T.textSoft, marginTop: 4 }}>Frontend Developer</div>
                </div>
              )}

              {/* Shimmer overlay */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Watermark */}
              <span style={{
                position: 'absolute', bottom: '-0.5rem', right: '0.5rem',
                fontFamily: "'Playfair Display',serif", fontSize: '7rem', color: T.rose,
                opacity: 0.07, fontStyle: 'italic', lineHeight: 1, pointerEvents: 'none',
              }}>SR</span>
            </div>

            {/* Badge: Available */}
            <div className="hero-badge-top" style={{
              position: 'absolute', top: '1.5rem', right: '-2rem', zIndex: 10,
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(20px)',
              border: `1.5px solid rgba(201,102,122,0.2)`,
              borderRadius: 16, padding: '0.65rem 1.1rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.78rem', fontWeight: 600, color: T.textDark,
              boxShadow: '0 8px 32px rgba(180,100,120,0.15)',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#6bcf8a', flexShrink: 0, animation: 'badgePulse 2s ease-in-out infinite', display: 'inline-block' }} />
              Available for work
            </div>

            {/* Badge: MERN */}
            <div className="hero-badge-bot" style={{
              position: 'absolute', bottom: '3rem', left: '-2rem', zIndex: 10,
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(20px)',
              border: `1.5px solid rgba(201,102,122,0.2)`,
              borderRadius: 16, padding: '0.65rem 1.1rem',
              fontSize: '0.78rem', fontWeight: 600, color: T.textDark,
              boxShadow: '0 8px 32px rgba(180,100,120,0.15)',
            }}>✦ MERN Stack Dev</div>

            

            {/* Corner sparkles */}
            {[
              { top: -12, left: -12 }, { top: -12, right: -12 },
              { bottom: -12, left: -12 }, { bottom: -12, right: -12 },
            ].map((pos, i) => (
              <div key={i} style={{
                position: 'absolute', ...pos, zIndex: 5,
                width: 24, height: 24,
                background: `radial-gradient(circle, ${[T.rose, T.lavMid, T.gold, T.rose][i]}, transparent)`,
                borderRadius: '50%', opacity: 0.6,
                animation: `orbFloat ${3 + i}s ease-in-out ${i * 0.5}s infinite`,
              }} />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem',
        opacity: 0.5, cursor: 'pointer',
        animation: 'heroFadeIn 1s ease 2s both',
      }} onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: T.textSoft }}>Scroll</span>
        <div style={{
          width: 24, height: 38, border: `1.5px solid rgba(201,102,122,0.3)`,
          borderRadius: 12, display: 'flex', justifyContent: 'center', paddingTop: 6,
        }}>
          <div style={{
            width: 3, height: 8, background: T.rose, borderRadius: 2,
            animation: 'heroFadeUp 1.5s ease-in-out infinite',
          }} />
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
  useScrollReveal();
  const traits = ['✨ Problem Solver', '🎨 Creative Thinker', '🌱 Continuous Learner', '👁️ Detail Oriented', '🎯 Goal Driven', '💬 Communicator'];
  const hobbies = [
    { icon: '📚', text: 'Reading tech blogs, fiction & self-development books' },
    { icon: '🌍', text: 'Travelling and discovering new cultures' },
    { icon: '☕', text: 'Coffee rituals while brainstorming ideas' },
    { icon: '🌿', text: 'Participating in local tree-planting drives' },
    { icon: '🤲', text: 'Prayer & meditation for focus and inner peace' },
  ];
  const stats = [
    { num: '30+', label: 'Projects Built' }, { num: '1+', label: 'Year Coding' },
    { num: '3.21', label: 'Current CGPA' }, { num: '5+', label: 'Tech Stacks' },
  ];
  return (
    <Section id="about" bg={T.blush}>
      <div className="sr" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <SectionLabel>My Story</SectionLabel>
        <SectionTitle>About <em style={{ fontStyle: 'italic', color: T.rose }}>me</em></SectionTitle>
      </div>

      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'start' }}>
        <div className="sr-left">
          <p style={{ fontSize: '0.97rem', color: T.textMid, lineHeight: 1.9, marginBottom: '1.2rem' }}>
            My web development adventure began in 2024, crafting static websites with HTML and CSS.
            Over time, I fell in love with React, Node.js, and the entire MERN stack — building
            interactive, full-stack applications that solve real-world problems creatively.
          </p>
          <blockquote style={{
            fontFamily: "'Crimson Pro',serif", fontSize: '1.25rem', fontStyle: 'italic',
            fontWeight: 300, color: T.mauve, lineHeight: 1.75,
            borderLeft: `3px solid ${T.rose}`, paddingLeft: '1.25rem', margin: '1.5rem 0',
          }}>
            "I live where logic meets creativity. Fueled by coffee and curiosity, I turn wild ideas into web experiences that are both useful and beautiful."
          </blockquote>
          <p style={{ fontSize: '0.97rem', color: T.textMid, lineHeight: 1.9, marginBottom: '1.5rem' }}>
            Passionate about crafting interfaces that work as beautifully as they look.
            Currently pursuing my B.Sc in Software Engineering at Daffodil International University.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {traits.map((t, i) => (
              <span key={t} className="chip" style={{
                padding: '0.4rem 0.95rem', background: 'white',
                border: `1px solid rgba(201,102,122,0.22)`, borderRadius: 100,
                fontSize: '0.8rem', color: T.mauveDeep, fontWeight: 500, cursor: 'default',
                transition: 'all .2s', animationDelay: `${i * 0.05}s`,
              }}>{t}</span>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            {hobbies.map(h => (
              <div key={h.text} style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.6rem 0', borderBottom: `1px solid rgba(201,102,122,0.1)`,
              }}>
                <span style={{ fontSize: '1rem', width: '1.8rem', textAlign: 'center' }}>{h.icon}</span>
                <span style={{ fontSize: '0.88rem', color: T.textMid }}>{h.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="sr-right">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            {stats.map((s, i) => (
              <div key={s.label} className="sr-scale" style={{
                background: 'white', border: `1px solid rgba(201,102,122,0.15)`,
                borderRadius: 20, padding: '1.5rem', textAlign: 'center',
                transition: 'transform .2s, box-shadow .2s',
                animationDelay: `${i * 0.1}s`,
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(201,102,122,0.12)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
              >
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '2.5rem', color: T.rose, fontStyle: 'italic', display: 'block', lineHeight: 1 }}>{s.num}</span>
                <span style={{ fontSize: '0.78rem', color: T.textSoft, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: '0.3rem', display: 'block' }}>{s.label}</span>
              </div>
            ))}
          </div>

          <div style={{
            padding: '1.5rem',
            background: `linear-gradient(135deg,${T.rosePale},${T.lavender})`,
            borderRadius: 22,
          }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '0.95rem', color: T.textDark, marginBottom: '1rem', fontStyle: 'italic' }}>✦ Current Goals</div>
            {[
              'Master React.js, Next.js & TypeScript',
              'Contribute to open-source projects on GitHub',
              'Explore UI/UX design principles deeply',
              'Mentor others in the developer community',
            ].map(g => (
              <div key={g} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start', fontSize: '0.86rem', color: T.textMid, marginBottom: '0.6rem' }}>
                <span style={{ color: T.rose, fontSize: '0.55rem', marginTop: '0.4rem', flexShrink: 0 }}>◆</span>{g}
              </div>
            ))}
          </div>

          <div style={{
            marginTop: '1.5rem', padding: '1.5rem',
            background: `linear-gradient(135deg,${T.lavender},${T.rosePale})`,
            borderRadius: 22, textAlign: 'center',
          }}>
            <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: '1.05rem', color: T.mauveDeep, fontStyle: 'italic', marginBottom: '0.5rem', lineHeight: 1.65 }}>
              "Indeed, Allah is with those who fear Him and those who are doers of good."
            </div>
            <div style={{ fontSize: '0.72rem', color: T.textSoft, letterSpacing: '0.06em', textTransform: 'uppercase' }}>Quran 16:128 — Daily Reminder</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── JOURNEY ──────────────────────────────────────────────────────────────────
const JOURNEY = [
  { year: '2024 – Present', title: '🎓 Academic Journey', company: 'BSc in Software Engineering — Daffodil International University', desc: 'Building a strong foundation in programming, data structures, algorithms, and web development through coursework and hands-on projects.', techs: ['Algorithms', 'Data Structures', 'OOP', 'Web Dev', 'Databases'], side: 'left' },
  { year: '2025 – Present', title: '🌐 Web Development', company: 'Frontend Specialization', desc: 'Built and deployed professional websites including AtlasWay, HobbyHub, Insuroo, Readly & English Janala.', techs: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'DaisyUI'], side: 'right' },
  { year: '2025 – Present', title: '📊 MERN Stack', company: 'Full-Stack Development', desc: 'Built full-stack apps with MongoDB, Express.js, React, and Node.js. Developed RESTful APIs, integrated JWT authentication, and deployed scalable web apps.', techs: ['MongoDB', 'Express.js', 'Node.js', 'JWT', 'Firebase', 'REST API'], side: 'left' },
  { year: '2025 → Future', title: '🚀 Current Focus', company: 'Continuous Learning', desc: 'Mastering Next.js, TypeScript, Three.js, AI/ML-powered tools, and contributing to open-source projects.', techs: ['Next.js', 'TypeScript', 'AI/ML', 'Open Source', 'Cloud'], side: 'right' },
];

function Journey() {
  return (
    <Section id="journey" bg={T.warmWhite}>
      <div className="sr" style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <SectionLabel>Timeline</SectionLabel>
        <SectionTitle>My <em style={{ fontStyle: 'italic', color: T.rose }}>Journey</em></SectionTitle>
        <p style={{ fontSize: '0.97rem', color: T.textSoft, maxWidth: 440, margin: '0.5rem auto 0', lineHeight: 1.8 }}>Key milestones on my path toward becoming a full-stack developer.</p>
      </div>

      <div style={{ marginTop: '3.5rem', position: 'relative' }}>
        <div style={{
          position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2,
          background: `linear-gradient(to bottom,${T.rose},${T.lavMid},${T.gold})`,
          transform: 'translateX(-50%)', zIndex: 0,
        }} />

        {JOURNEY.map((item, i) => (
          <div key={i} className={`tl-grid ${item.side === 'left' ? 'sr-left' : 'sr-right'}`} style={{
            display: 'grid', gridTemplateColumns: '1fr 2.5rem 1fr',
            gap: 0, alignItems: 'start',
            marginBottom: i < JOURNEY.length - 1 ? '2.5rem' : 0,
            position: 'relative', zIndex: 1,
            transitionDelay: `${i * 0.1}s`,
          }}>
            {item.side === 'left' ? (
              <div className="tl-left tl-card-inner" style={{
                textAlign: 'right', background: 'white', borderRadius: 20,
                padding: '1.4rem 1.75rem 1.4rem 1.4rem',
                border: `1px solid rgba(201,102,122,0.15)`,
                transition: 'box-shadow .25s, transform .25s',
              }}><TlContent item={item} right /></div>
            ) : <div className="tl-empty" />}

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1rem' }}>
              <div style={{
                width: 16, height: 16, borderRadius: '50%',
                background: `linear-gradient(135deg, ${T.rose}, ${T.mauve})`,
                border: `3px solid ${T.warmWhite}`, boxShadow: `0 0 0 2px ${T.rose}, 0 0 12px rgba(201,102,122,0.4)`,
                flexShrink: 0, zIndex: 1,
              }} />
            </div>

            {item.side === 'right' ? (
              <div className="tl-right tl-card-inner" style={{
                textAlign: 'left', background: 'white', borderRadius: 20,
                padding: '1.4rem 1.4rem 1.4rem 1.75rem',
                border: `1px solid rgba(201,102,122,0.15)`,
                transition: 'box-shadow .25s, transform .25s',
              }}><TlContent item={item} /></div>
            ) : <div className="tl-empty" />}
          </div>
        ))}
      </div>
    </Section>
  );
}

function TlContent({ item, right = false }) {
  return (
    <>
      <div style={{ fontSize: '0.73rem', letterSpacing: '0.08em', color: T.rose, textTransform: 'uppercase', fontWeight: 600, marginBottom: '0.35rem' }}>{item.year}</div>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.05rem', color: T.textDark, marginBottom: '0.25rem' }}>{item.title}</div>
      <div style={{ fontSize: '0.82rem', color: T.mauve, marginBottom: '0.5rem' }}>{item.company}</div>
      <div style={{ fontSize: '0.82rem', color: T.textSoft, lineHeight: 1.75, marginBottom: '0.75rem' }}>{item.desc}</div>
      <div className={right ? 'tl-techs-right' : ''} style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', justifyContent: right ? 'flex-end' : 'flex-start' }}>
        {item.techs.map(t => (
          <span key={t} style={{ fontSize: '0.68rem', padding: '0.2rem 0.6rem', background: T.rosePale, color: T.rose, borderRadius: 100, fontWeight: 600 }}>{t}</span>
        ))}
      </div>
    </>
  );
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
const PROJECTS = [
  { id: 1, title: 'AtlasWay', status: 'featured', img: 'https://i.ibb.co.com/dJ2HzQxg/Screenshot-2025-10-16-at-4-48-22-PM.png', desc: 'A responsive travel booking platform where users explore packages, book tours, and manage reservations — with full admin tools.', stack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Firebase'], live: 'https://atlasway-client.web.app/', gh: 'https://github.com/Sara-Rubaya/AtlasWay-client' },
  { id: 2, title: 'HobbyHub', status: 'featured', img: 'https://i.ibb.co.com/070GGG9/Screenshot-2025-10-16-at-6-01-11-PM.png', desc: 'Connect with people who share your passions. Create and join hobby groups with role-based access, discussions & membership workflows.', stack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'], live: 'https://chic-bunny-357f50.netlify.app/', gh: 'https://github.com/Sara-Rubaya/HobbyHub-Client' },
  { id: 3, title: 'Insuroo', status: 'active', img: 'https://i.ibb.co.com/0Ryth5x3/Screenshot-2025-10-16-at-6-23-28-PM.png', desc: 'Life insurance management with role-based access, Stripe payments, and policy workflows for admins, agents & customers.', stack: ['React', 'Firebase', 'Tailwind CSS', 'Node.js', 'Stripe'], live: 'https://insuroo-client.web.app/', gh: 'https://github.com/Sara-Rubaya/Insuroo-client' },
  { id: 4, title: 'Readly', status: 'featured', img: 'https://i.ibb.co.com/Y7LSzxgk/Screenshot-2025-10-16-at-6-44-20-PM.png', desc: 'A subscription box service for book lovers. Browse, subscribe & manage curated monthly book boxes with reviews and ratings.', stack: ['React.js', 'Tailwind CSS', 'DaisyUI', 'Firebase'], live: 'https://gorgeous-baklava-298b07.netlify.app/', gh: 'https://github.com/Sara-Rubaya/Readly' },
  { id: 5, title: 'English Janala', status: 'completed', img: 'https://i.ibb.co.com/fdSBY7h0/Screenshot-2025-10-16-at-6-31-45-PM.png', desc: 'English-to-Bangla vocabulary learning app with organized lessons, phonetics & pronunciation to make language learning engaging.', stack: ['JavaScript', 'HTML', 'CSS'], live: 'https://fluffy-pegasus-82ddeb.netlify.app/', gh: 'https://github.com/Sara-Rubaya/English-janala', wide: true },
];

const STATUS_BADGE = {
  featured: { bg: 'linear-gradient(135deg,#f5c47d,#e8956a)', color: 'white', label: '✦ Featured' },
  active: { bg: T.rosePale, color: T.rose, label: 'Active' },
  completed: { bg: T.lavender, color: T.mauveDeep, label: 'Completed' },
};

function ProjectImg({ src, title }) {
  const [err, setErr] = useState(false);
  return (
    <div style={{
      width: '100%', height: '100%', minHeight: 220,
      background: `linear-gradient(135deg,${T.rosePale},${T.lavender})`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: '2.5rem', color: `rgba(201,102,122,0.25)`,
      fontFamily: "'Playfair Display',serif", fontStyle: 'italic',
      position: 'relative', overflow: 'hidden',
    }}>
      {!err && src && (
        <img src={src} alt={title} onError={() => setErr(true)} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      )}
      {(err || !src) && title}
    </div>
  );
}

function ProjLinks({ p }) {
  const [lHov, setLHov] = useState(false);
  const [gHov, setGHov] = useState(false);
  return (
    <div style={{ display: 'flex', gap: '0.65rem' }}>
      <a href={p.live} target="_blank" rel="noreferrer"
        onMouseEnter={() => setLHov(true)} onMouseLeave={() => setLHov(false)}
        style={{
          padding: '0.5rem 1.1rem',
          background: lHov ? `linear-gradient(135deg,${T.mauveDeep},${T.mauve})` : `linear-gradient(135deg,${T.rose},${T.mauve})`,
          color: 'white', borderRadius: 100, fontSize: '0.8rem', fontWeight: 500,
          transition: 'all .2s', display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
          transform: lHov ? 'translateY(-2px)' : 'none',
          boxShadow: lHov ? '0 6px 18px rgba(201,102,122,0.4)' : 'none',
        }}>✦ Live Demo</a>
      <a href={p.gh} target="_blank" rel="noreferrer"
        onMouseEnter={() => setGHov(true)} onMouseLeave={() => setGHov(false)}
        style={{
          padding: '0.5rem 1.1rem', border: `1.5px solid rgba(201,102,122,0.3)`, color: T.rose,
          borderRadius: 100, fontSize: '0.8rem', fontWeight: 500,
          background: gHov ? T.rosePale : 'transparent', transition: 'all .2s',
        }}>GitHub</a>
    </div>
  );
}

function Projects() {
  const featured = PROJECTS.filter(p => p.status === 'featured');
  const others = PROJECTS.filter(p => p.status !== 'featured');
  return (
    <Section id="projects" bg={T.blush}>
      <div className="sr" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <SectionLabel>Portfolio</SectionLabel>
        <SectionTitle>Creative <em style={{ fontStyle: 'italic', color: T.rose }}>Projects</em></SectionTitle>
        <p style={{ fontSize: '0.97rem', color: T.textSoft, maxWidth: 500, margin: '0.5rem auto 0', lineHeight: 1.8 }}>A curated selection of work that blends thoughtful design with technical precision.</p>
      </div>

      <div className="sr" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2rem 0', flexWrap: 'wrap' }}>
        {[{ n: PROJECTS.length, label: 'Projects' }, { n: featured.length, label: 'Featured' }, { n: PROJECTS.reduce((a, p) => a + p.stack.length, 0), label: 'Technologies' }].map(s => (
          <div key={s.label} style={{
            textAlign: 'center', padding: '0.75rem 1.5rem',
            background: 'white', border: `1px solid rgba(201,102,122,0.15)`, borderRadius: 16, minWidth: 100,
          }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.7rem', color: T.rose, fontStyle: 'italic', lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontSize: '0.75rem', color: T.textSoft, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }} className="projects-grid">
        {featured.map((p, i) => (
          <div key={p.id} className={`project-card ${i % 2 === 0 ? 'sr-left' : 'sr-right'}`} style={{
            background: 'white', border: `1px solid rgba(201,102,122,0.15)`,
            borderRadius: 24, overflow: 'hidden', transition: 'transform .3s, box-shadow .3s',
            transitionDelay: `${i * 0.1}s`,
          }}>
            <div style={{ position: 'relative', height: 210 }}>
              <ProjectImg src={p.img} title={p.title} />
              <div style={{
                position: 'absolute', top: '0.75rem', left: '0.75rem',
                padding: '0.28rem 0.7rem', borderRadius: 100, fontSize: '0.68rem',
                fontWeight: 700, letterSpacing: '0.05em',
                background: STATUS_BADGE[p.status].bg, color: STATUS_BADGE[p.status].color,
              }}>{STATUS_BADGE[p.status].label}</div>
            </div>
            <div style={{ padding: '1.4rem' }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.25rem', color: T.textDark, marginBottom: '0.5rem' }}>{p.title}</div>
              <p style={{ fontSize: '0.84rem', color: T.textMid, lineHeight: 1.75, marginBottom: '1rem' }}>{p.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '1.1rem' }}>
                {p.stack.map(t => (<span key={t} style={{ fontSize: '0.72rem', padding: '0.22rem 0.65rem', background: T.cream, border: `1px solid rgba(201,102,122,0.18)`, borderRadius: 100, color: T.textMid }}>{t}</span>))}
              </div>
              <ProjLinks p={p} />
            </div>
          </div>
        ))}
      </div>

      <h3 className="sr" style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', color: T.textDark, textAlign: 'center', margin: '2.5rem 0 1.5rem' }}>
        More <em style={{ fontStyle: 'italic', color: T.rose }}>Projects</em>
      </h3>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="projects-grid">
        {others.map((p, i) => (
          <div key={p.id} className={`project-card sr ${p.wide ? 'wide-card' : ''}`}
            style={{
              gridColumn: p.wide ? 'span 2' : undefined,
              background: 'white', border: `1px solid rgba(201,102,122,0.15)`,
              borderRadius: 24, overflow: 'hidden', transition: 'transform .3s, box-shadow .3s',
              transitionDelay: `${i * 0.1}s`,
            }}>
            <div className={p.wide ? 'wide-inner' : ''} style={p.wide ? { display: 'grid', gridTemplateColumns: '1fr 1fr' } : {}}>
              <div style={{ position: 'relative', height: p.wide ? 'auto' : 200, minHeight: p.wide ? 240 : 200 }}>
                <ProjectImg src={p.img} title={p.title} />
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', padding: '0.28rem 0.7rem', borderRadius: 100, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.05em', background: STATUS_BADGE[p.status].bg, color: STATUS_BADGE[p.status].color }}>{STATUS_BADGE[p.status].label}</div>
              </div>
              <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', color: T.textDark, marginBottom: '0.5rem' }}>{p.title}</div>
                <p style={{ fontSize: '0.83rem', color: T.textMid, lineHeight: 1.75, marginBottom: '1rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '1.1rem' }}>
                  {p.stack.map(t => (<span key={t} style={{ fontSize: '0.72rem', padding: '0.22rem 0.65rem', background: T.cream, border: `1px solid rgba(201,102,122,0.18)`, borderRadius: 100, color: T.textMid }}>{t}</span>))}
                </div>
                <ProjLinks p={p} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── SKILLS ───────────────────────────────────────────────────────────────────
const SKILL_CATS = [
  { name: 'Programming Languages', skills: ['🔷 C', '🟡 JavaScript', '☕ Java', '🐘 PHP', '🧡 Laravel', '🟦 TypeScript'] },
  { name: 'Frontend', skills: ['⚛️ React.js', '🌐 HTML5', '🎨 CSS3', '💨 Tailwind CSS', '🌼 DaisyUI', '🟡 JavaScript'] },
  { name: 'Backend', skills: ['🟢 Node.js', '🚂 Express.js'] },
  { name: 'Databases', skills: ['🍃 MongoDB', '🐬 MySQL'] },
  { name: 'Tools & Platforms', skills: ['🐙 Git', '🐱 GitHub', '💻 VS Code', '🎭 Figma', '▲ Vercel', '🔥 Firebase', '🎨 Canva', '🌐 Cisco Packet Tracer'] },
  { name: 'Soft Skills', skills: ['💬 Communication', '👥 Teamwork', '🧩 Problem Solving', '🔄 Adaptability', '✨ Creativity', '👑 Leadership', '⏰ Time Management'] },
];

function SkillCat({ cat }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.6rem',
        fontFamily: "'Playfair Display',serif", fontSize: '1rem', color: T.textDark,
        fontStyle: 'italic', marginBottom: '0.9rem',
      }}>
        {cat.name}
        <span style={{ flex: 1, height: 1, background: `linear-gradient(to right,${T.rose},transparent)` }} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
        {cat.skills.map(s => (
          <span key={s} className="skill-pill" style={{
            padding: '0.42rem 0.9rem', background: T.cream,
            border: `1px solid rgba(201,102,122,0.2)`, borderRadius: 100,
            fontSize: '0.82rem', color: T.textMid, transition: 'all .2s', cursor: 'default',
          }}>{s}</span>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <Section id="skills" bg={T.warmWhite}>
      <div className="sr" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <SectionLabel>Expertise</SectionLabel>
        <SectionTitle>My <em style={{ fontStyle: 'italic', color: T.rose }}>Skills</em></SectionTitle>
      </div>
      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        <div className="sr-left">{SKILL_CATS.slice(0, 4).map(cat => <SkillCat key={cat.name} cat={cat} />)}</div>
        <div className="sr-right">
          {SKILL_CATS.slice(4).map(cat => <SkillCat key={cat.name} cat={cat} />)}
          <div style={{ marginTop: '1.5rem', padding: '1.5rem', background: `linear-gradient(135deg,${T.lavender},${T.rosePale})`, borderRadius: 20, textAlign: 'center' }}>
            <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: '1.05rem', color: T.mauveDeep, fontStyle: 'italic', lineHeight: 1.65, marginBottom: '0.4rem' }}>
              "Indeed, Allah is with those who fear Him and those who are doers of good."
            </div>
            <div style={{ fontSize: '0.72rem', color: T.textSoft, letterSpacing: '0.07em', textTransform: 'uppercase' }}>Quran 16:128 — Daily Reminder ✦</div>
          </div>
        </div>
      </div>
    </Section>
  );
}

// ─── EDUCATION ────────────────────────────────────────────────────────────────
const EDU = [
  { icon: '🎓', uni: 'Daffodil International University', degree: 'B.Sc in Software Engineering', dur: 'Jan 2024 – Dec 2027', grade: 'CGPA 3.21 / 4.00' },
  { icon: '📖', uni: 'Kishoregonj Govt Mohila College', degree: 'Higher Secondary Certificate', dur: 'Jan 2022 – Nov 2024', grade: 'GPA 4.50 / 5.00' },
];

function Education() {
  return (
    <Section id="education" bg={T.blush}>
      <div className="sr" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <SectionLabel>Academic</SectionLabel>
        <SectionTitle>My <em style={{ fontStyle: 'italic', color: T.rose }}>Education</em></SectionTitle>
      </div>
      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {EDU.map((e, i) => (
          <div key={i} className={`edu-card ${i % 2 === 0 ? 'sr-left' : 'sr-right'}`} style={{
            background: 'white', borderRadius: 24, padding: '2rem',
            border: `1px solid rgba(201,102,122,0.15)`, position: 'relative',
            overflow: 'hidden', transition: 'transform .2s, box-shadow .2s',
            transitionDelay: `${i * 0.15}s`,
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: `linear-gradient(90deg,${T.rose},${T.lavMid})` }} />
            <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{e.icon}</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', color: T.textDark, marginBottom: '0.3rem' }}>{e.uni}</div>
            <div style={{ fontSize: '0.9rem', color: T.mauve, marginBottom: '1rem' }}>{e.degree}</div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {[e.dur, e.grade].map(chip => (<span key={chip} style={{ fontSize: '0.77rem', padding: '0.25rem 0.75rem', background: T.rosePale, color: T.rose, borderRadius: 100, fontWeight: 600 }}>{chip}</span>))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: '', email: '', message: '' });
  };
  const contacts = [
    { icon: '✉️', label: 'Email', value: 'sararubaya4800@gmail.com', href: 'mailto:sararubaya4800@gmail.com' },
    { icon: '📞', label: 'Phone', value: '+8801846831753', href: 'tel:+8801846831753' },
    { icon: '💬', label: 'WhatsApp', value: '+8801846831753', href: 'https://wa.me/8801846831753' },
    { icon: '📍', label: 'Location', value: 'Dhaka, Bangladesh', href: null },
    { icon: '💼', label: 'LinkedIn', value: 'Sara Rubaya', href: 'https://www.linkedin.com/in/sara-rubaya/' },
  ];
  return (
    <Section id="contact" bg={T.warmWhite}>
      <div className="sr" style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <SectionLabel>Let's Talk</SectionLabel>
        <SectionTitle>Get in <em style={{ fontStyle: 'italic', color: T.rose }}>Touch</em></SectionTitle>
        <p style={{ fontSize: '0.97rem', color: T.textSoft, maxWidth: 440, margin: '0.5rem auto 0', lineHeight: 1.8 }}>Have a project in mind or just want to say hello? I'd love to hear from you.</p>
      </div>
      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '3rem', alignItems: 'start' }}>
        <div className="sr-left">
          {contacts.map(c => (
            <div key={c.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem 0', borderBottom: `1px solid rgba(201,102,122,0.1)` }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: T.rosePale, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', flexShrink: 0 }}>{c.icon}</div>
              <div>
                <div style={{ fontSize: '0.74rem', color: T.textSoft, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.15rem' }}>{c.label}</div>
                {c.href ? <a href={c.href} target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: T.textDark, fontWeight: 500 }}>{c.value}</a> : <div style={{ fontSize: '0.9rem', color: T.textDark, fontWeight: 500 }}>{c.value}</div>}
              </div>
            </div>
          ))}
        </div>
        <div className="sr-right">
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.1rem' }}>
              <FormField label="Your Name" value={form.name} onChange={v => setForm(f => ({ ...f, name: v }))} placeholder="Sara..." />
              <FormField label="Email" type="email" value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} placeholder="you@example.com" />
            </div>
            <FormField label="Message" textarea value={form.message} onChange={v => setForm(f => ({ ...f, message: v }))} placeholder="Tell me about your project or just say hello ✦" />
            <BtnPrimary onClick={() => {}} style={{
              width: '100%', justifyContent: 'center', marginTop: '0.75rem',
              background: sent ? 'linear-gradient(135deg,#6bcf8a,#3aab6a)' : `linear-gradient(135deg,${T.rose},${T.mauve})`,
            }}>
              {sent ? 'Message sent ✦' : 'Send Message ✦'}
            </BtnPrimary>
          </form>
        </div>
      </div>
    </Section>
  );
}

function FormField({ label, value, onChange, placeholder, type = 'text', textarea }) {
  const [focused, setFocused] = useState(false);
  const shared = {
    width: '100%', padding: '0.75rem 1rem', background: T.cream,
    border: `1.5px solid ${focused ? T.rose : 'rgba(201,102,122,0.22)'}`,
    borderRadius: 12, fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem',
    color: T.textDark, outline: 'none',
    boxShadow: focused ? `0 0 0 3px rgba(201,102,122,0.12)` : 'none',
    transition: 'border-color .2s, box-shadow .2s', resize: 'none',
  };
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <label style={{ display: 'block', fontSize: '0.82rem', color: T.textMid, marginBottom: '0.4rem', fontWeight: 500 }}>{label}</label>
      {textarea ? (
        <textarea rows={5} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} style={shared} />
      ) : (
        <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} style={shared} />
      )}
    </div>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer({ onNav }) {
  return (
    <footer style={{ background: T.mauveDeep, color: 'rgba(255,255,255,0.7)', padding: '2.5rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.4rem', color: 'white', fontStyle: 'italic', marginBottom: '0.75rem' }}>Sara Rubaya</div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
        {['about', 'journey', 'projects', 'skills', 'education', 'contact'].map(s => (
          <button key={s} onClick={() => onNav(s)} style={{
            background: 'none', border: 'none', color: 'rgba(255,255,255,0.55)',
            fontSize: '0.78rem', letterSpacing: '0.07em', textTransform: 'uppercase',
            cursor: 'pointer', fontFamily: "'DM Sans',sans-serif", transition: 'color .2s',
          }}
            onMouseEnter={e => e.target.style.color = 'white'}
            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.55)'}
          >{s}</button>
        ))}
      </div>
      <p style={{ fontSize: '0.8rem', opacity: 0.5 }}>Frontend Developer · Dhaka, Bangladesh</p>
      <p style={{ fontSize: '0.8rem', opacity: 0.45, marginTop: '0.3rem' }}>© 2025 Sara Rubaya. All rights reserved. Built with ♡ using React.</p>
    </footer>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  useEffect(() => { injectGlobalStyles(); }, []);
  useScrollReveal();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Replace these imports with your actual assets:
  
  // const myImage = null;
  // const resumePDF = null;

  const downloadResume = () => {
    if (resumePDF) {
      const link = document.createElement('a');
      link.href = resumePDF;
      link.download = 'Sara-Rubaya_Resume.pdf';
      link.click();
    }
  };

  return (
    <div style={{ position: 'relative', cursor: 'none' }}>
      <ProgressBar />
      <CustomCursor />
      <Blobs />
      <Nav onNav={scrollTo} onResume={downloadResume} />
      <Hero onNav={scrollTo} myImage={myImage} />
      <About />
      <Journey />
      <Projects />
      <Skills />
      <Education />
      <Contact />
      <Footer onNav={scrollTo} />
    </div>
  );
}