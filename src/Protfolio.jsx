import React, { useState, useEffect, useRef } from 'react'; import { Mail, MapPin, Download, Database, Phone, Linkedin, Send, GitBranch, GraduationCap, BookOpen, Layout, Monitor, Github, Twitter, Code, Palette, Zap, Sparkles, Sun, Moon, ExternalLink, Award, Star, Users, Clock, Calendar, Heart, Target } from 'lucide-react';


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
 
// ─── GLOBAL STYLES (injected once) ───────────────────────────────────────────
const GLOBAL_CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Crimson+Pro:ital,wght@0,300;1,300&display=swap');
  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body { font-family: 'DM Sans', sans-serif; background: #fffaf7; color: #3a1f2b; overflow-x: hidden; }
  a { text-decoration: none; }
  ::selection { background: #fce8ee; color: #6b3d4e; }
  @keyframes blobDrift { 0% { transform: translate(0,0) scale(1); } 100% { transform: translate(30px,-40px) scale(1.08); } }
  @keyframes badgePulse { 0%,100% { transform: scale(1); opacity: 1; } 50% { transform: scale(1.3); opacity: .7; } }
  @keyframes fadeUp { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
  .fade-in { animation: fadeUp 0.7s ease both; }
  .fade-in-1 { animation: fadeUp 0.7s ease 0.15s both; }
  .fade-in-2 { animation: fadeUp 0.7s ease 0.3s both; }
  .fade-in-3 { animation: fadeUp 0.7s ease 0.45s both; }
  .skill-pill:hover { background: #fce8ee !important; border-color: #c9667a !important; transform: translateY(-2px); }
  .project-card:hover { transform: translateY(-5px); box-shadow: 0 20px 56px rgba(180,100,120,0.15) !important; }
  .edu-card:hover { transform: translateY(-3px); }
  .tl-card-inner:hover { box-shadow: 0 8px 32px rgba(180,100,120,0.13) !important; }
  .nav-link:hover { color: #c9667a !important; }
  .nav-link::after { content:''; display:block; height:1.5px; background:#c9667a; transform:scaleX(0); transition:transform .25s; transform-origin:left; }
  .nav-link:hover::after { transform:scaleX(1); }
  .chip:hover { background: #fce8ee !important; }
  .social-pill:hover { background: #fce8ee !important; border-color: #c9667a !important; }
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
  }
`;
 
function injectGlobalStyles() {
  if (document.getElementById('sara-portfolio-styles')) return;
  const style = document.createElement('style');
  style.id = 'sara-portfolio-styles';
  style.textContent = GLOBAL_CSS;
  document.head.appendChild(style);
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
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
 
  const links = ['About', 'Journey', 'Projects', 'Skills', 'Education', 'Contact'];
 
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0.9rem 2.5rem',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(253,248,242,0.88)' : 'rgba(253,248,242,0.6)',
      backdropFilter: 'blur(20px)',
      borderBottom: `1px solid rgba(201,102,122,${scrolled ? 0.2 : 0.12})`,
      transition: 'background .3s, border-color .3s',
    }}>
      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', color: T.mauveDeep, letterSpacing: '0.02em' }}>
        Sara <em style={{ color: T.rose }}>Rubaya</em>
      </div>
 
      {/* Desktop links */}
      <ul className="nav-links-desktop" style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
        {links.map(l => (
          <li key={l}>
            <button className="nav-link" onClick={() => onNav(l.toLowerCase())} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: '0.82rem', letterSpacing: '0.07em', textTransform: 'uppercase',
              color: T.textMid, fontFamily: "'DM Sans', sans-serif", fontWeight: 400,
              padding: '0.2rem 0', transition: 'color .2s',
            }}>{l}</button>
          </li>
        ))}
      </ul>
 
      <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
        <button onClick={onResume} style={{
          padding: '0.5rem 1.2rem', background: T.rose, color: 'white',
          border: 'none', borderRadius: 100, fontSize: '0.8rem', fontWeight: 500,
          cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'background .2s',
        }}
          onMouseEnter={e => e.target.style.background = T.mauveDeep}
          onMouseLeave={e => e.target.style.background = T.rose}
        >Resume ↓</button>
 
        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(o => !o)} style={{
          display: 'none', background: 'none', border: `1px solid rgba(201,102,122,0.3)`,
          borderRadius: 10, padding: '0.45rem 0.6rem', cursor: 'pointer', color: T.textMid,
        }} className="mob-menu-btn">☰</button>
      </div>
 
      {/* Mobile dropdown */}
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
 
// ─── BTN ──────────────────────────────────────────────────────────────────────
function BtnPrimary({ children, onClick, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        padding: '0.85rem 2rem',
        background: hov ? `linear-gradient(135deg,${T.mauveDeep},${T.mauve})` : `linear-gradient(135deg,${T.rose},${T.mauve})`,
        color: 'white', border: 'none', borderRadius: 100,
        fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 500,
        cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        boxShadow: hov ? '0 8px 28px rgba(201,102,122,0.4)' : '0 4px 20px rgba(201,102,122,0.3)',
        transform: hov ? 'translateY(-2px)' : 'none', transition: 'all .2s', ...style,
      }}>{children}</button>
  );
}
 
function BtnOutline({ children, onClick, style = {} }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        padding: '0.85rem 2rem',
        background: hov ? T.rosePale : 'transparent',
        color: T.rose, border: `1.5px solid ${T.rose}`, borderRadius: 100,
        fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem', fontWeight: 500,
        cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
        transition: 'all .2s', ...style,
      }}>{children}</button>
  );
}
 
// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero({ onNav, myImage }) {
  return (
    <section id="hero" style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
      <div className="hero-grid" style={{
        maxWidth: 1180, margin: '0 auto', padding: '8rem 2.5rem 4rem',
        display: 'flex', alignItems: 'center', gap: '4rem',
      }}>
        {/* LEFT */}
        <div style={{ flex: 1 }} className="fade-in">
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: T.rosePale, border: `1px solid rgba(201,102,122,0.25)`,
            borderRadius: 100, padding: '0.35rem 1rem',
            fontSize: '0.76rem', letterSpacing: '0.08em', textTransform: 'uppercase',
            color: T.rose, fontWeight: 600, marginBottom: '1.5rem',
          }}>✦ Frontend Developer · Dhaka, Bangladesh</div>
 
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(3.2rem,7vw,5.5rem)',
            lineHeight: 1.05, color: T.textDark, marginBottom: '0.3rem',
          }}>
            Sara<br />
            <em style={{ color: T.rose, fontStyle: 'italic' }}>Rubaya</em>
          </h1>
 
          <p style={{
            fontFamily: "'Crimson Pro', serif", fontSize: '1.3rem',
            color: T.textMid, fontStyle: 'italic', fontWeight: 300,
            lineHeight: 1.6, marginBottom: '1rem',
          }}>Crafting digital experiences where creativity meets code.</p>
 
          <p style={{ fontSize: '0.98rem', color: T.textMid, lineHeight: 1.85, maxWidth: 480, marginBottom: '2.2rem' }}>
            I'm a frontend developer and software engineering student who loves building
            beautiful, functional web applications — one thoughtful component at a time.
          </p>
 
          <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <BtnPrimary onClick={() => onNav('projects')}>View my work ↓</BtnPrimary>
            <BtnOutline onClick={() => onNav('contact')}>Let's connect</BtnOutline>
          </div>
 
          <div className="hero-socials" style={{ display: 'flex', gap: '0.6rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'GitHub', href: 'https://github.com/Sara-Rubaya', icon: '🐙' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sara-rubaya-86a411305/', icon: '💼' },
              { label: 'Email', href: 'mailto:sararubaya4800@gmail.com', icon: '✉️' },
              { label: 'WhatsApp', href: 'https://wa.me/8801846831753', icon: '💬' },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-pill" style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.4rem 0.9rem', background: T.cream,
                border: `1px solid rgba(201,102,122,0.2)`, borderRadius: 100,
                fontSize: '0.78rem', color: T.textMid, transition: 'all .2s',
              }}>
                <span>{s.icon}</span>{s.label}
              </a>
            ))}
          </div>
        </div>
 
        {/* RIGHT */}
        <div className="hero-right fade-in-1" style={{ flexShrink: 0, position: 'relative' }}>
          <div style={{ position: 'relative', width: 320 }}>
            {/* Photo card */}
            <div style={{
              width: '100%', aspectRatio: '3/4',
              borderRadius: '30px 30px 140px 30px',
              background: `linear-gradient(140deg,${T.rosePale},${T.lavender})`,
              border: `2px solid rgba(201,102,122,0.35)`,
              overflow: 'hidden', position: 'relative',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              {myImage ? (
                <img src={myImage} alt="Sara Rubaya" style={{
                  width: '88%', height: '88%', objectFit: 'cover',
                  borderRadius: 20, position: 'relative', zIndex: 1,
                }} />
              ) : (
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, paddingBottom: '2rem' }}>
                  <div style={{
                    width: 110, height: 110, borderRadius: '50%', margin: '0 auto 1rem',
                    background: `linear-gradient(135deg,${T.rosePale},${T.lavender})`,
                    border: `3px solid rgba(201,102,122,0.35)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '2.5rem', color: T.rose, fontStyle: 'italic' }}>S</span>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', color: T.textDark, fontStyle: 'italic' }}>Sara Rubaya</div>
                  <div style={{ fontSize: '0.8rem', color: T.textSoft, marginTop: 4 }}>Frontend Developer</div>
                </div>
              )}
              {/* Big italic SR watermark */}
              <span style={{
                position: 'absolute', bottom: '-1rem', right: '1rem',
                fontFamily: "'Playfair Display',serif", fontSize: '8rem', color: T.rose,
                opacity: 0.1, fontStyle: 'italic', lineHeight: 1, pointerEvents: 'none',
              }}>SR</span>
            </div>
 
            {/* Badges */}
            <div style={{
              position: 'absolute', 
              top: '1.5rem', 
              right: '-1.5rem',
               zIndex: 10, // ✅ ADD
              background: 'white',
               border: `1.5px solid rgba(201,102,122,0.2)`,
              borderRadius: 14, padding: '0.55rem 1rem',
              display: 'flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.78rem', fontWeight: 500, color: T.textDark,
              boxShadow: '0 4px 20px rgba(180,100,120,0.12)',
            }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#6bcf8a', flexShrink: 0, animation: 'badgePulse 2s ease-in-out infinite', display: 'inline-block' }} />
              Available for work
            </div>
 
            <div style={{
              position: 'absolute', bottom: '2.5rem',
               left: '-1.5rem',
                zIndex: 10, // ✅ ADD
              background: 'white', border: `1.5px solid rgba(201,102,122,0.2)`,
              borderRadius: 14, padding: '0.55rem 1rem',
              fontSize: '0.78rem', fontWeight: 500, color: T.textDark,
              boxShadow: '0 4px 20px rgba(180,100,120,0.12)',
            }}>✦ MERN Stack Dev</div>
          </div>
        </div>
      </div>
    </section>
  );
}
 
// ─── ABOUT ────────────────────────────────────────────────────────────────────
function About() {
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
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <SectionLabel>My Story</SectionLabel>
        <SectionTitle>About <em style={{ fontStyle: 'italic', color: T.rose }}>me</em></SectionTitle>
      </div>
 
      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'start' }}>
        {/* Left */}
        <div className="fade-in">
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
            {traits.map(t => (
              <span key={t} className="chip" style={{
                padding: '0.4rem 0.95rem', background: 'white',
                border: `1px solid rgba(201,102,122,0.22)`, borderRadius: 100,
                fontSize: '0.8rem', color: T.mauveDeep, fontWeight: 500, cursor: 'default', transition: 'background .2s',
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
 
        {/* Right */}
        <div className="fade-in-1">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
            {stats.map(s => (
              <div key={s.label} style={{
                background: 'white', border: `1px solid rgba(201,102,122,0.15)`,
                borderRadius: 20, padding: '1.5rem', textAlign: 'center',
              }}>
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
  {
    year: '2024 – Present', title: '🎓 Academic Journey', company: 'BSc in Software Engineering — Daffodil International University',
    desc: 'Building a strong foundation in programming, data structures, algorithms, and web development through coursework and hands-on projects.',
    techs: ['Algorithms', 'Data Structures', 'OOP', 'Web Dev', 'Databases'], side: 'left',
  },
  {
    year: '2025 – Present', title: '🌐 Web Development', company: 'Frontend Specialization',
    desc: 'Built and deployed professional websites including AtlasWay, HobbyHub, Insuroo, Readly & English Janala.',
    techs: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'DaisyUI'], side: 'right',
  },
  {
    year: '2025 – Present', title: '📊 MERN Stack', company: 'Full-Stack Development',
    desc: 'Built full-stack apps with MongoDB, Express.js, React, and Node.js. Developed RESTful APIs, integrated JWT authentication, and deployed scalable web apps.',
    techs: ['MongoDB', 'Express.js', 'Node.js', 'JWT', 'Firebase', 'REST API'], side: 'left',
  },
  {
    year: '2025 → Future', title: '🚀 Current Focus', company: 'Continuous Learning',
    desc: 'Mastering Next.js, TypeScript, Three.js, AI/ML-powered tools, and contributing to open-source projects.',
    techs: ['Next.js', 'TypeScript', 'AI/ML', 'Open Source', 'Cloud'], side: 'right',
  },
];
 
function Journey() {
  return (
    <Section id="journey" bg={T.warmWhite}>
      <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <SectionLabel>Timeline</SectionLabel>
        <SectionTitle>My <em style={{ fontStyle: 'italic', color: T.rose }}>Journey</em></SectionTitle>
        <p style={{ fontSize: '0.97rem', color: T.textSoft, maxWidth: 440, margin: '0.5rem auto 0', lineHeight: 1.8 }}>Key milestones on my path toward becoming a full-stack developer.</p>
      </div>
 
      <div style={{ marginTop: '3.5rem', position: 'relative' }}>
        {/* Center line */}
        <div style={{
          position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2,
          background: `linear-gradient(to bottom,${T.rose},${T.lavMid})`,
          transform: 'translateX(-50%)', zIndex: 0,
        }} />
 
        {JOURNEY.map((item, i) => (
          <div key={i} className={`tl-grid fade-in`} style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2.5rem 1fr',
            gap: 0, alignItems: 'start',
            marginBottom: i < JOURNEY.length - 1 ? '2.5rem' : 0,
            position: 'relative', zIndex: 1,
            animationDelay: `${i * 0.12}s`,
          }}>
            {/* Left slot */}
            {item.side === 'left' ? (
              <div className="tl-left tl-card-inner" style={{
                textAlign: 'right', paddingRight: '2rem',
                background: 'white', borderRadius: 20, padding: '1.4rem 1.75rem 1.4rem 1.4rem',
                border: `1px solid rgba(201,102,122,0.15)`, transition: 'box-shadow .25s',
              }}>
                <TlContent item={item} right />
              </div>
            ) : <div className="tl-empty" />}
 
            {/* Center dot */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '1rem' }}>
              <div style={{
                width: 14, height: 14, borderRadius: '50%', background: T.rose,
                border: `3px solid ${T.warmWhite}`, boxShadow: `0 0 0 2px ${T.rose}`,
                flexShrink: 0, zIndex: 1,
              }} />
            </div>
 
            {/* Right slot */}
            {item.side === 'right' ? (
              <div className="tl-right tl-card-inner" style={{
                textAlign: 'left', paddingLeft: '2rem',
                background: 'white', borderRadius: 20, padding: '1.4rem 1.4rem 1.4rem 1.75rem',
                border: `1px solid rgba(201,102,122,0.15)`, transition: 'box-shadow .25s',
              }}>
                <TlContent item={item} />
              </div>
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
  {
    id: 1, title: 'AtlasWay', status: 'featured',
    img: 'https://i.ibb.co.com/dJ2HzQxg/Screenshot-2025-10-16-at-4-48-22-PM.png',
    desc: 'A responsive travel booking platform where users explore packages, book tours, and manage reservations — with full admin tools.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Firebase'],
    live: 'https://atlasway-client.web.app/', gh: 'https://github.com/Sara-Rubaya/AtlasWay-client',
  },
  {
    id: 2, title: 'HobbyHub', status: 'featured',
    img: 'https://i.ibb.co.com/070GGG9/Screenshot-2025-10-16-at-6-01-11-PM.png',
    desc: 'Connect with people who share your passions. Create and join hobby groups with role-based access, discussions & membership workflows.',
    stack: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'JWT'],
    live: 'https://chic-bunny-357f50.netlify.app/', gh: 'https://github.com/Sara-Rubaya/HobbyHub-Client',
  },
  {
    id: 3, title: 'Insuroo', status: 'active',
    img: 'https://i.ibb.co.com/0Ryth5x3/Screenshot-2025-10-16-at-6-23-28-PM.png',
    desc: 'Life insurance management with role-based access, Stripe payments, and policy workflows for admins, agents & customers.',
    stack: ['React', 'Firebase', 'Tailwind CSS', 'Node.js', 'Stripe'],
    live: 'https://insuroo-client.web.app/', gh: 'https://github.com/Sara-Rubaya/Insuroo-client',
  },
  {
    id: 4, title: 'Readly', status: 'featured',
    img: 'https://i.ibb.co.com/Y7LSzxgk/Screenshot-2025-10-16-at-6-44-20-PM.png',
    desc: 'A subscription box service for book lovers. Browse, subscribe & manage curated monthly book boxes with reviews and ratings.',
    stack: ['React.js', 'Tailwind CSS', 'DaisyUI', 'Firebase'],
    live: 'https://gorgeous-baklava-298b07.netlify.app/', gh: 'https://github.com/Sara-Rubaya/Readly',
  },
  {
    id: 5, title: 'English Janala', status: 'completed',
    img: 'https://i.ibb.co.com/fdSBY7h0/Screenshot-2025-10-16-at-6-31-45-PM.png',
    desc: 'English-to-Bangla vocabulary learning app with organized lessons, phonetics & pronunciation to make language learning engaging.',
    stack: ['JavaScript', 'HTML', 'CSS'],
    live: 'https://fluffy-pegasus-82ddeb.netlify.app/', gh: 'https://github.com/Sara-Rubaya/English-janala',
    wide: true,
  },
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
 
function Projects() {
  const featured = PROJECTS.filter(p => p.status === 'featured');
  const others = PROJECTS.filter(p => p.status !== 'featured');
 
  return (
    <Section id="projects" bg={T.blush}>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <SectionLabel>Portfolio</SectionLabel>
        <SectionTitle>Creative <em style={{ fontStyle: 'italic', color: T.rose }}>Projects</em></SectionTitle>
        <p style={{ fontSize: '0.97rem', color: T.textSoft, maxWidth: 500, margin: '0.5rem auto 0', lineHeight: 1.8 }}>
          A curated selection of work that blends thoughtful design with technical precision.
        </p>
      </div>
 
      {/* Stats row */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '2rem 0', flexWrap: 'wrap' }}>
        {[
          { n: PROJECTS.length, label: 'Projects' },
          { n: featured.length, label: 'Featured' },
          { n: PROJECTS.reduce((a, p) => a + p.stack.length, 0), label: 'Technologies' },
        ].map(s => (
          <div key={s.label} style={{
            textAlign: 'center', padding: '0.75rem 1.5rem',
            background: 'white', border: `1px solid rgba(201,102,122,0.15)`,
            borderRadius: 16, minWidth: 100,
          }}>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.7rem', color: T.rose, fontStyle: 'italic', lineHeight: 1 }}>{s.n}</div>
            <div style={{ fontSize: '0.75rem', color: T.textSoft, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: 4 }}>{s.label}</div>
          </div>
        ))}
      </div>
 
      {/* Featured grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }} className="projects-grid">
        {featured.map((p, i) => (
          <div key={p.id} className="project-card fade-in" style={{
            background: 'white', border: `1px solid rgba(201,102,122,0.15)`,
            borderRadius: 24, overflow: 'hidden', transition: 'transform .25s, box-shadow .25s',
            display: 'grid', gridTemplateColumns: '1fr', animationDelay: `${i * 0.12}s`,
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
                {p.stack.map(t => (
                  <span key={t} style={{ fontSize: '0.72rem', padding: '0.22rem 0.65rem', background: T.cream, border: `1px solid rgba(201,102,122,0.18)`, borderRadius: 100, color: T.textMid }}>{t}</span>
                ))}
              </div>
              <ProjLinks p={p} />
            </div>
          </div>
        ))}
      </div>
 
      {/* Others */}
      <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.6rem', color: T.textDark, textAlign: 'center', margin: '2.5rem 0 1.5rem' }}>
        More <em style={{ fontStyle: 'italic', color: T.rose }}>Projects</em>
      </h3>
 
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="projects-grid">
        {others.map((p, i) => (
          <div key={p.id} className={`project-card fade-in ${p.wide ? 'wide-card' : ''}`}
            style={{
              gridColumn: p.wide ? 'span 2' : undefined,
              background: 'white', border: `1px solid rgba(201,102,122,0.15)`,
              borderRadius: 24, overflow: 'hidden', transition: 'transform .25s, box-shadow .25s',
              animationDelay: `${i * 0.12}s`,
            }}>
            <div className={p.wide ? 'wide-inner' : ''} style={p.wide ? { display: 'grid', gridTemplateColumns: '1fr 1fr' } : {}}>
              <div style={{ position: 'relative', height: p.wide ? 'auto' : 200, minHeight: p.wide ? 240 : 200 }}>
                <ProjectImg src={p.img} title={p.title} />
                <div style={{
                  position: 'absolute', top: '0.75rem', left: '0.75rem',
                  padding: '0.28rem 0.7rem', borderRadius: 100, fontSize: '0.68rem',
                  fontWeight: 700, letterSpacing: '0.05em',
                  background: STATUS_BADGE[p.status].bg, color: STATUS_BADGE[p.status].color,
                }}>{STATUS_BADGE[p.status].label}</div>
              </div>
              <div style={{ padding: '1.4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.2rem', color: T.textDark, marginBottom: '0.5rem' }}>{p.title}</div>
                <p style={{ fontSize: '0.83rem', color: T.textMid, lineHeight: 1.75, marginBottom: '1rem' }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '1.1rem' }}>
                  {p.stack.map(t => (
                    <span key={t} style={{ fontSize: '0.72rem', padding: '0.22rem 0.65rem', background: T.cream, border: `1px solid rgba(201,102,122,0.18)`, borderRadius: 100, color: T.textMid }}>{t}</span>
                  ))}
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
          transform: lHov ? 'translateY(-1px)' : 'none',
          boxShadow: lHov ? '0 4px 14px rgba(201,102,122,0.35)' : 'none',
        }}>✦ Live Demo</a>
      <a href={p.gh} target="_blank" rel="noreferrer"
        onMouseEnter={() => setGHov(true)} onMouseLeave={() => setGHov(false)}
        style={{
          padding: '0.5rem 1.1rem',
          border: `1.5px solid rgba(201,102,122,0.3)`, color: T.rose,
          borderRadius: 100, fontSize: '0.8rem', fontWeight: 500,
          background: gHov ? T.rosePale : 'transparent', transition: 'all .2s',
        }}>GitHub</a>
    </div>
  );
}
 
// ─── SKILLS ───────────────────────────────────────────────────────────────────
const SKILL_CATS = [
  { name: 'Programming Languages', skills: ['🔷 C', '🟡 JavaScript', '☕ Java'] },
  { name: 'Frontend', skills: ['⚛️ React.js', '🌐 HTML5', '🎨 CSS3', '💨 Tailwind CSS', '🌼 DaisyUI', '🟡 JavaScript'] },
  { name: 'Backend', skills: ['🟢 Node.js', '🚂 Express.js'] },
  { name: 'Databases', skills: ['🍃 MongoDB', '🐬 MySQL'] },
  { name: 'Tools & Platforms', skills: ['🐙 Git', '🐱 GitHub', '💻 VS Code', '🎭 Figma', '▲ Vercel', '🔥 Firebase'] },
  { name: 'Soft Skills', skills: ['💬 Communication', '👥 Teamwork', '🧩 Problem Solving', '🔄 Adaptability', '✨ Creativity', '👑 Leadership', '⏰ Time Management'] },
];
 
function Skills() {
  return (
    <Section id="skills" bg={T.warmWhite}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <SectionLabel>Expertise</SectionLabel>
        <SectionTitle>My <em style={{ fontStyle: 'italic', color: T.rose }}>Skills</em></SectionTitle>
      </div>
 
      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
        <div className="fade-in">
          {SKILL_CATS.slice(0, 4).map(cat => (
            <SkillCat key={cat.name} cat={cat} />
          ))}
        </div>
        <div className="fade-in-1">
          {SKILL_CATS.slice(4).map(cat => (
            <SkillCat key={cat.name} cat={cat} />
          ))}
          <div style={{
            marginTop: '1.5rem', padding: '1.5rem',
            background: `linear-gradient(135deg,${T.lavender},${T.rosePale})`,
            borderRadius: 20, textAlign: 'center',
          }}>
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
 
// ─── EDUCATION ────────────────────────────────────────────────────────────────
const EDU = [
  { icon: '🎓', uni: 'Daffodil International University', degree: 'B.Sc in Software Engineering', dur: 'Jan 2024 – Dec 2027', grade: 'CGPA 3.21 / 4.00' },
  { icon: '📖', uni: 'Kishoregonj Govt Mohila College', degree: 'Higher Secondary Certificate', dur: 'Jan 2022 – Nov 2024', grade: 'GPA 4.50 / 5.00' },
];
 
function Education() {
  return (
    <Section id="education" bg={T.blush}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <SectionLabel>Academic</SectionLabel>
        <SectionTitle>My <em style={{ fontStyle: 'italic', color: T.rose }}>Education</em></SectionTitle>
      </div>
 
      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        {EDU.map((e, i) => (
          <div key={i} className="edu-card fade-in" style={{
            background: 'white', borderRadius: 24, padding: '2rem',
            border: `1px solid rgba(201,102,122,0.15)`, position: 'relative',
            overflow: 'hidden', transition: 'transform .2s', animationDelay: `${i * 0.15}s`,
          }}>
            <div style={{
              position: 'absolute', top: 0, left: 0, right: 0, height: 4,
              background: `linear-gradient(90deg,${T.rose},${T.lavMid})`,
            }} />
            <div style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>{e.icon}</div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.1rem', color: T.textDark, marginBottom: '0.3rem' }}>{e.uni}</div>
            <div style={{ fontSize: '0.9rem', color: T.mauve, marginBottom: '1rem' }}>{e.degree}</div>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {[e.dur, e.grade].map(chip => (
                <span key={chip} style={{ fontSize: '0.77rem', padding: '0.25rem 0.75rem', background: T.rosePale, color: T.rose, borderRadius: 100, fontWeight: 600 }}>{chip}</span>
              ))}
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
    // Wire up your emailjs here — same service/template IDs from your original file
    // emailjs.sendForm('service_vtnicpr', 'template_jtifiw2', formRef.current, { publicKey: 'wwYcYtuL53R90hzKM' })
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
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <SectionLabel>Let's Talk</SectionLabel>
        <SectionTitle>Get in <em style={{ fontStyle: 'italic', color: T.rose }}>Touch</em></SectionTitle>
        <p style={{ fontSize: '0.97rem', color: T.textSoft, maxWidth: 440, margin: '0.5rem auto 0', lineHeight: 1.8 }}>
          Have a project in mind or just want to say hello? I'd love to hear from you.
        </p>
      </div>
 
      <div className="two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '3rem', alignItems: 'start' }}>
        {/* Info */}
        <div className="fade-in">
          {contacts.map(c => (
            <div key={c.label} style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              padding: '1rem 0', borderBottom: `1px solid rgba(201,102,122,0.1)`,
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 14, background: T.rosePale,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem', flexShrink: 0,
              }}>{c.icon}</div>
              <div>
                <div style={{ fontSize: '0.74rem', color: T.textSoft, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '0.15rem' }}>{c.label}</div>
                {c.href ? (
                  <a href={c.href} target="_blank" rel="noreferrer" style={{ fontSize: '0.9rem', color: T.textDark, fontWeight: 500 }}>{c.value}</a>
                ) : (
                  <div style={{ fontSize: '0.9rem', color: T.textDark, fontWeight: 500 }}>{c.value}</div>
                )}
              </div>
            </div>
          ))}
        </div>
 
        {/* Form */}
        <div className="fade-in-1">
          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.1rem' }}>
              <FormField label="Your Name" value={form.name} onChange={v => setForm(f => ({ ...f, name: v }))} placeholder="Sara..." />
              <FormField label="Email" type="email" value={form.email} onChange={v => setForm(f => ({ ...f, email: v }))} placeholder="you@example.com" />
            </div>
            <FormField label="Message" textarea value={form.message} onChange={v => setForm(f => ({ ...f, message: v }))} placeholder="Tell me about your project or just say hello ✦" />
          <BtnPrimary
  onClick={() => {}}
  style={{
    width: '100%',
    justifyContent: 'center',
    marginTop: '0.75rem',
    background: sent
      ? 'linear-gradient(135deg,#6bcf8a,#3aab6a)'
      : 'linear-gradient(135deg,#c9667a,#a85565)', // fallback gradient
    color: '#fff',              // ✅ ADD THIS
    fontWeight: 600,            // ✅ clearer text
    letterSpacing: '0.5px'      // ✅ optional polish
  }}
>
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
    width: '100%', padding: '0.75rem 1rem',
    background: T.cream,
    border: `1.5px solid ${focused ? T.rose : 'rgba(201,102,122,0.22)'}`,
    borderRadius: 12, fontFamily: "'DM Sans', sans-serif", fontSize: '0.9rem',
    color: T.textDark, outline: 'none',
    boxShadow: focused ? `0 0 0 3px rgba(201,102,122,0.12)` : 'none',
    transition: 'border-color .2s, box-shadow .2s',
    resize: 'none',
  };
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <label style={{ display: 'block', fontSize: '0.82rem', color: T.textMid, marginBottom: '0.4rem', fontWeight: 500 }}>{label}</label>
      {textarea ? (
        <textarea rows={5} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} style={shared} />
      ) : (
        <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)} style={shared} />
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
 
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
 
  // Replace the src below with your actual image import:

  // const myImage = null; // set to your imported image variable
 
  const downloadResume = () => {
    // Replace with your actual resume PDF import:
   
    const link = document.createElement('a'); link.href = resumePDF; link.download = 'Sara-Rubaya_Resume.pdf'; link.click();
   
  };
 
  return (
    <div style={{ position: 'relative' }}>
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
 
