"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowDownRight, ArrowRight, Check, ChevronRight, Headphones, MapPin, Menu, Play, Quote, Sparkles, Star, Volume2, VolumeX, X } from "lucide-react";

const WHATSAPP = "https://wa.me/917707991919?text=Hi%20Reverb%20Academy%2C%20I%27d%20like%20to%20book%20a%20trial%20class.";
const instruments = [
  { number: "01", name: "Guitar", detail: "Acoustic · Electric", copy: "Map the fretboard, understand the chords and turn the songs in your head into music in your hands.", image: "/instrument-guitar.png", color: "#ffb224" },
  { number: "02", name: "Ukulele", detail: "Rhythm · Songs", copy: "A joyful first instrument with serious musical foundations—rhythm, melody and complete songs from the start.", image: "/instrument-ukulele.png", color: "#86e9e1" },
  { number: "03", name: "Piano", detail: "Technique · Theory", copy: "See harmony laid out in front of you. Build independent hands, musical touch and a deep grasp of theory.", image: "/instrument-piano.png", color: "#ee8e83" },
  { number: "04", name: "Violin", detail: "Foundation · Expression", copy: "Shape every note with control and feeling through posture, bowing, intonation and carefully guided repertoire.", image: "/instrument-violin.png", color: "#c9d675" },
];
const testimonials = [
  { name: "Apoorva Sasan", text: "I had been trying to learn guitar from YouTube for months but was completely stuck. Vipan sir explains the fretboard concepts so clearly instead of just making you memorize things." },
  { name: "Amrit Bhangu", text: "A truly professional guitar instructor in Mohali. The academy setup in Bollywood Green City is organized, focused and distraction-free." },
  { name: "Nidhi Sharma", text: "Finding a reliable teacher for my teenage son was taking forever. The home tuition experience has been incredibly professional." },
];
const faqs = [
  { question: "Which instruments do you teach?", answer: "We teach guitar, ukulele, piano and violin through practical, structured lessons designed around each student’s level and goals." },
  { question: "Do you offer online music lessons?", answer: "Yes. Our live one-to-one online lessons include real-time feedback, a personal learning plan and flexible scheduling." },
  { question: "Do you provide home music tuition in Chandigarh Tricity?", answer: "Yes. Professional home music tuition is available across Chandigarh Tricity, subject to tutor and location availability." },
  { question: "Where are your Mohali academies?", answer: "You can learn with us in Sector 69 at Sovo International School or in Sector 113 at Bollywood Green City, Mohali." },
  { question: "Can complete beginners book a trial class?", answer: "Absolutely. Message or call us and we’ll help you choose the right instrument, learning format and starting point." },
];

function Logo() {
  return <a className="brand" href="#top" aria-label="Reverb Academy home"><span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span><span>REVERB<small>ACADEMY</small></span></a>;
}

function SymphonyRail({ enabled }: { enabled: boolean }) {
  const notes = ["♪", "♪", "♪", "♩", "♫", "♩", "♪"];
  return <aside className={`symphony-rail ${enabled ? "is-playing" : ""}`} aria-hidden="true">
    <div className="rail-label">SCROLL SYMPHONY</div><div className="staff-lines" />
    <svg className="phrase-line" viewBox="0 0 96 760" preserveAspectRatio="none"><path d="M48 0 C12 70 84 125 42 192 S10 308 54 370 S88 470 45 535 S15 670 52 760" /></svg>
    {notes.map((note, i) => <span className={`rail-note note-${i + 1}`} key={i}>{note}</span>)}<div className="rail-light" />
  </aside>;
}

function playPianoNote(ctx: AudioContext, frequency: number, start = ctx.currentTime, strength = .13) {
  const master = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  const delay = ctx.createDelay(.5);
  const wet = ctx.createGain();
  const feedback = ctx.createGain();
  filter.type = "lowpass"; filter.frequency.value = 2200;
  delay.delayTime.value = .16; wet.gain.value = .16; feedback.gain.value = .18;
  master.gain.setValueAtTime(.0001, start);
  master.gain.exponentialRampToValueAtTime(strength, start + .018);
  master.gain.exponentialRampToValueAtTime(.0001, start + .62);
  master.connect(filter).connect(ctx.destination);
  filter.connect(delay); delay.connect(wet).connect(ctx.destination); delay.connect(feedback).connect(delay);
  [1, 2, 3.01].forEach((multiple, i) => {
    const oscillator = ctx.createOscillator(); const partial = ctx.createGain();
    oscillator.type = i === 0 ? "triangle" : "sine"; oscillator.frequency.value = frequency * multiple; partial.gain.value = i === 0 ? 1 : .12 / i;
    oscillator.connect(partial).connect(master); oscillator.start(start); oscillator.stop(start + .7);
  });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [morphProgress, setMorphProgress] = useState(0);
  const audioRef = useRef<AudioContext | null>(null);
  const morphRef = useRef<HTMLElement | null>(null);
  const lastY = useRef(0);
  const lastPlayed = useRef(0);
  const noteIndex = useRef(0);

  useEffect(() => {
    if (!soundOn) return;
    const ctx = audioRef.current;
    if (!ctx) return;
    const frequencies = [392, 392, 392, 311.13, 349.23, 349.23, 349.23, 293.66, 392, 392, 349.23, 311.13];
    const onScroll = () => {
      const now = performance.now(); const distance = Math.abs(window.scrollY - lastY.current); lastY.current = window.scrollY;
      const wait = Math.max(105, 380 - distance * 6); if (distance < 3 || now - lastPlayed.current < wait) return; lastPlayed.current = now;
      playPianoNote(ctx, frequencies[noteIndex.current % frequencies.length], ctx.currentTime, Math.min(.16, .095 + distance / 2500)); noteIndex.current += 1;
    };
    window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll);
  }, [soundOn]);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame); frame = requestAnimationFrame(() => {
        const section = morphRef.current; if (!section) return;
        const rect = section.getBoundingClientRect(); const travel = Math.max(1, rect.height - window.innerHeight);
        setMorphProgress(Math.max(0, Math.min(3, (-rect.top / travel) * 3)));
      });
    };
    update(); window.addEventListener("scroll", update, { passive: true }); window.addEventListener("resize", update);
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  const toggleSound = () => {
    if (soundOn) { setSoundOn(false); return; }
    const AudioCtx = window.AudioContext || (window as typeof window & { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = audioRef.current ?? new AudioCtx(); audioRef.current = ctx; ctx.resume();
    [392, 392, 392, 311.13].forEach((frequency, i) => playPianoNote(ctx, frequency, ctx.currentTime + i * .22, .15));
    lastY.current = window.scrollY; setSoundOn(true);
  };

  const scrollToInstrument = (index: number) => {
    const section = morphRef.current; if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY;
    const travel = section.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + (index / 3) * travel, behavior: "smooth" });
  };

  const activeInstrument = Math.round(morphProgress);

  return <><a className="skip-link" href="#main-content">Skip to main content</a><header>
    <SymphonyRail enabled={soundOn} />
    <nav className="nav-shell" aria-label="Primary navigation"><Logo />
      <div className={`nav-links ${menuOpen ? "open" : ""}`}><a href="#courses" onClick={() => setMenuOpen(false)}>Courses</a><a href="#method" onClick={() => setMenuOpen(false)}>Our method</a><a href="#reviews" onClick={() => setMenuOpen(false)}>Stories</a><a href="#locations" onClick={() => setMenuOpen(false)}>Locations</a><a className="mobile-cta" href={WHATSAPP}>Book a trial <ArrowRight size={16} /></a></div>
      <div className="nav-actions"><button className={`sound-toggle ${soundOn ? "active" : ""}`} onClick={toggleSound} aria-label={soundOn ? "Turn off symphony scroll" : "Turn on symphony scroll"}>{soundOn ? <Volume2 size={17} /> : <VolumeX size={17} />}<span>{soundOn ? "Sound on · scroll" : "Hear the page"}</span></button><a className="button button-small" href={WHATSAPP}>Book a trial <ArrowRight size={15} /></a><button className="menu-button" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button></div>
    </nav></header><main id="main-content">

    <section className="hero"><div className="hero-image" aria-hidden="true" /><div className="hero-shade" /><div className="hero-content"><p className="eyebrow"><span /> Premium music lessons · Mohali & online</p><h1>Don&apos;t just learn music.<br /><em>Understand it.</em></h1><p className="hero-copy">A practical, structured way to play with confidence—without the confusion, clutter or endless memorising.</p><div className="hero-actions"><a className="button button-primary" href={WHATSAPP}>Book your trial class <ArrowRight size={18} /></a><a className="text-link" href="#method"><span className="play-icon"><Play size={14} fill="currentColor" /></span> See how we teach</a></div></div><div className="hero-foot"><span>GUITAR</span><i /><span>UKULELE</span><i /><span>PIANO</span><i /><span>VIOLIN</span><a href="#courses" aria-label="Scroll to courses"><ArrowDownRight /></a></div><div className="floating-notes" aria-hidden="true"><span>♪</span><span>♩</span><span>♫</span></div></section>

    <section className="marquee" aria-label="Ways to learn"><div className="marquee-track"><span>AT THE ACADEMY</span><b>✦</b><span>AT YOUR HOME</span><b>✦</b><span>ONLINE, ANYWHERE</span><b>✦</b><span>AT THE ACADEMY</span><b>✦</b><span>AT YOUR HOME</span><b>✦</b><span>ONLINE, ANYWHERE</span><b>✦</b></div></section>

    <section className="programs section" aria-labelledby="programs-title"><div className="section-heading"><p className="kicker">MUSIC CLASSES IN MOHALI</p><h2 id="programs-title">Four instruments.<br /><em>One clear path.</em></h2><p>Learn at our Mohali academies, at home across Chandigarh Tricity, or live online with focused guidance and a plan built for steady progress.</p></div><div className="course-grid">
      {instruments.map((instrument, index) => <article className={`course-card ${["amber","cyan","rose","lime"][index]}`} id={`${instrument.name.toLowerCase()}-lessons`} key={instrument.name}><div className="course-top"><span>{instrument.number}</span><span>{instrument.detail}</span></div><div><h3>{instrument.name} classes</h3><p>{instrument.copy}</p></div><a className="course-arrow" href={WHATSAPP} aria-label={`Ask about ${instrument.name.toLowerCase()} classes`}><ArrowRight /></a></article>)}
    </div></section>

    <section className="instrument-journey" id="courses" ref={morphRef} aria-label="Interactive instrument journey" style={{"--instrument-color": instruments[activeInstrument].color} as React.CSSProperties}>
      <div className="instrument-sticky">
        <div className="instrument-intro"><p className="kicker light">CHOOSE YOUR SOUND</p><h2>One method.<br /><em>Infinite expression.</em></h2><p>Scroll slowly. Watch one musical language take a new shape.</p></div>
        <div className="instrument-stage" aria-live="polite">
          <div className="instrument-halo" />
          <div className="instrument-images">
            {instruments.map((instrument, i) => {
              const distance = Math.abs(morphProgress - i); const opacity = Math.max(0, 1 - distance);
              return <img key={instrument.name} src={instrument.image} alt={`${instrument.name} lessons at Reverb Academy`} width="1536" height="1536" loading={i === 0 ? "eager" : "lazy"} fetchPriority={i === 0 ? "high" : "auto"} style={{opacity, transform:`translate3d(0, ${(morphProgress-i)*34}px, 0) scale(${.88 + opacity*.12}) rotate(${(i-morphProgress)*5}deg)`, filter:`blur(${distance*9}px)`}} />;
            })}
          </div>
          <div className="instrument-rings"><i /><i /><i /></div>
          <span className="instrument-ghost">{instruments[activeInstrument].name}</span>
        </div>
        <div className="instrument-copy">
          <div className="instrument-count"><span>0{activeInstrument+1}</span><i /><small>04</small></div>
          <p className="instrument-type">{instruments[activeInstrument].detail}</p>
          <h3 key={instruments[activeInstrument].name}>{instruments[activeInstrument].name}</h3>
          <p className="instrument-description">{instruments[activeInstrument].copy}</p>
          <a className="instrument-link" href={WHATSAPP}>Explore {instruments[activeInstrument].name.toLowerCase()} lessons <ArrowRight size={17} /></a>
          <div className="instrument-tabs">{instruments.map((instrument,i)=><button key={instrument.name} className={i===activeInstrument?"active":""} onClick={()=>scrollToInstrument(i)} aria-label={instrument.name}><span /></button>)}</div>
        </div>
        <div className="scroll-cue"><span>SCROLL TO MORPH</span><i /></div>
      </div>
    </section>

    <section className="method section" id="method"><div className="method-intro"><p className="kicker light">WHY REVERB</p><h2>Music, made<br /><em>clear.</em></h2><p>We remove the guesswork and give you a visual, practical path from where you are to where you want to play.</p><a href={WHATSAPP} className="text-link light-link">Speak to the tutor <ArrowRight size={17} /></a></div><div className="method-steps"><article><span>01</span><div className="method-icon"><Sparkles /></div><h3>See the pattern</h3><p>Visual maps reveal how notes, chords and scales connect—so the theory finally makes sense.</p></article><article><span>02</span><div className="method-icon"><Headphones /></div><h3>Train your ear</h3><p>Hear the relationship between notes and recognise the music before your hands play it.</p></article><article><span>03</span><div className="method-icon"><Play /></div><h3>Play it for real</h3><p>Break songs into manageable parts, build clean technique and finish music you genuinely enjoy.</p></article></div></section>

    <section className="learning section"><div className="learning-card online-card"><div className="card-number">01 / 03</div><div className="orbit" aria-hidden="true"><span>♪</span><i /><i /></div><div className="learning-copy"><p className="kicker">LIVE ONLINE</p><h2>Your studio,<br />wherever you are.</h2><p>One-to-one live lessons with real-time feedback, structured practice and personal guidance—no matter the distance.</p><ul><li><Check /> Personal learning plan</li><li><Check /> Live technique correction</li><li><Check /> Flexible scheduling</li></ul><a className="button button-dark" href={WHATSAPP}>Explore online lessons <ArrowRight size={17} /></a></div></div><div className="learning-card home-card"><div className="card-number">02 / 03</div><div className="learning-copy"><p className="kicker">TRICITY HOME TUITION</p><h2>The teacher<br />comes to you.</h2><p>Focused, professional music tuition in the comfort of your home across the Tricity.</p><a className="text-link" href={WHATSAPP}>Check availability <ArrowRight size={17} /></a></div><div className="home-note" aria-hidden="true">♩</div></div></section>

    <section className="reviews section" id="reviews"><div className="review-score"><strong>5.0</strong><div><span>{[1,2,3,4,5].map(i => <Star key={i} size={17} fill="currentColor" />)}</span><p>Student stories</p></div></div><div className="review-stage"><Quote className="quote-mark" /><blockquote>“{testimonials[activeTestimonial].text}”</blockquote><div className="review-footer"><div className="avatar">{testimonials[activeTestimonial].name[0]}</div><div><strong>{testimonials[activeTestimonial].name}</strong><span>Verified Google review</span></div></div></div><div className="review-controls">{testimonials.map((item,i) => <button key={item.name} className={i===activeTestimonial?"active":""} onClick={() => setActiveTestimonial(i)} aria-label={`Show review from ${item.name}`}><span>{i+1}</span></button>)}</div></section>

    <section className="locations section" id="locations"><div className="section-heading compact"><p className="kicker">MUSIC ACADEMY IN MOHALI</p><h2>Two academies.<br /><em>One clear method.</em></h2></div><div className="location-grid"><a className="location-card" href="https://maps.app.goo.gl/ZfEFAqYLwfksEDfw5" target="_blank" rel="noreferrer"><span className="pin"><MapPin /></span><div><p>REVERB ACADEMY · SECTOR 69</p><h3>1st Floor, Sovo International School</h3><address>Sector 69, Sahibzada Ajit Singh Nagar, Punjab 160062</address></div><ChevronRight /></a><a className="location-card" href="https://www.google.com/maps/search/?api=1&query=Reverb+Academy+Sector+113+Mohali" target="_blank" rel="noreferrer"><span className="pin"><MapPin /></span><div><p>REVERB ACADEMY · SECTOR 113</p><h3>45C, 3rd Floor, Bollywood Green City</h3><address>Sector 113, Mohali, Punjab</address></div><ChevronRight /></a></div><p className="location-contact">For guitar, ukulele, piano or violin class availability, call <a href="tel:+917707991919">+91 77079 91919</a> or <a href={WHATSAPP}>message Reverb Academy on WhatsApp</a>.</p></section>

    <section className="faq section" id="faq" aria-labelledby="faq-title"><div className="faq-heading"><p className="kicker">QUESTIONS, ANSWERED</p><h2 id="faq-title">Before your<br /><em>first note.</em></h2><p>Everything you need to know about music classes, lesson formats and Reverb Academy locations in Mohali.</p></div><div className="faq-list">{faqs.map((faq, index) => <details key={faq.question}><summary><span>0{index + 1}</span>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></section>

    <section className="final-cta"><div className="cta-notes" aria-hidden="true"><span>♪</span><span>♫</span><span>♩</span><span>♪</span></div><p className="kicker light">YOUR FIRST NOTE STARTS HERE</p><h2>Ready to find<br /><em>your sound?</em></h2><p>Tell us what you&apos;d love to play. We&apos;ll help you choose the right class, format and starting point.</p><a className="button button-primary" href={WHATSAPP}>Book a trial on WhatsApp <ArrowRight size={18} /></a><span className="phone">or call <a href="tel:+917707991919">+91 77079 91919</a></span></section>

    <footer><Logo /><p>Structured guitar, ukulele, piano and violin lessons in Mohali, across Chandigarh Tricity and online.</p><div><a href="#courses">Courses</a><a href="#method">Method</a><a href="#locations">Locations</a><a href="#faq">FAQs</a><a href={WHATSAPP}>Contact</a></div><span>© {new Date().getFullYear()} Reverb Academy</span></footer>
  </main></>;
}
