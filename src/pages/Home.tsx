import { useState, useEffect } from "react";

const LOGO = "/logo.jpg";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".reveal, .reveal-left, .reveal-right").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700&family=Barlow:wght@300;400;500&display=swap');
        :root{--gold:#FFD700;--black:#0A0A0A;--dark:#111111;--dark2:#1A1A1A;--dark3:#222222;--white:#FFFFFF;--gray:#AAAAAA}
        *{margin:0;padding:0;box-sizing:border-box}
        html{scroll-behavior:smooth}
        body{background:var(--black);color:var(--white);font-family:'Barlow',sans-serif;overflow-x:hidden}
        ::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:var(--black)}::-webkit-scrollbar-thumb{background:var(--gold);border-radius:2px}
        .sg-nav{position:fixed;top:0;left:0;right:0;z-index:1000;display:flex;align-items:center;justify-content:space-between;padding:0 5%;height:72px;background:rgba(10,10,10,0.95);backdrop-filter:blur(12px);border-bottom:1px solid rgba(255,215,0,0.15);transition:all 0.3s ease}
        .sg-nav.scrolled{height:60px;background:rgba(10,10,10,0.98);border-bottom-color:rgba(255,215,0,0.3)}
        .nav-logo{display:flex;align-items:center;gap:12px;text-decoration:none}
        .nav-logo img{width:48px;height:48px;object-fit:contain;border-radius:50%;filter:drop-shadow(0 0 8px rgba(255,215,0,0.4))}
        .nav-logo-text{font-family:'Bebas Neue',sans-serif;font-size:1.6rem;letter-spacing:3px;color:var(--gold);line-height:1}
        .nav-links{display:flex;align-items:center;gap:2px;list-style:none}
        .nav-links a{display:block;padding:8px 14px;text-decoration:none;font-family:'Barlow Condensed',sans-serif;font-size:0.9rem;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:var(--gray);transition:color 0.2s}
        .nav-links a:hover{color:var(--gold)}
        .btn-join{background:var(--gold);color:var(--black);padding:10px 24px;border-radius:3px;font-family:'Bebas Neue',sans-serif;font-size:1rem;letter-spacing:2px;text-decoration:none;transition:all 0.2s;box-shadow:0 0 20px rgba(255,215,0,0.2)}
        .btn-join:hover{background:var(--white);box-shadow:0 0 30px rgba(255,215,0,0.4);transform:translateY(-1px)}
        .hamburger{display:none;flex-direction:column;gap:5px;cursor:pointer;padding:4px;background:none;border:none}
        .hamburger span{display:block;width:26px;height:2px;background:var(--gold);transition:all 0.3s ease}
        .hamburger.open span:nth-child(1){transform:rotate(45deg) translate(5px,5px)}
        .hamburger.open span:nth-child(2){opacity:0}
        .hamburger.open span:nth-child(3){transform:rotate(-45deg) translate(5px,-5px)}
        .mobile-menu{display:none;position:fixed;top:72px;left:0;right:0;background:rgba(10,10,10,0.98);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,215,0,0.2);padding:20px 5% 30px;z-index:999}
        .mobile-menu.open{display:block}
        .mobile-menu a{display:block;padding:14px 0;border-bottom:1px solid rgba(255,215,0,0.08);text-decoration:none;color:var(--white);font-family:'Barlow Condensed',sans-serif;font-size:1.2rem;letter-spacing:2px;text-transform:uppercase;transition:color 0.2s}
        .mobile-menu a:hover{color:var(--gold)}
        .btn-join-mobile{display:block;margin-top:20px;background:var(--gold);color:var(--black);text-align:center;padding:14px;font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:3px;text-decoration:none;border:none!important}
        .hero-section{position:relative;min-height:100vh;display:flex;align-items:center;overflow:hidden}
        .hero-bg{position:absolute;inset:0;background-image:url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80');background-size:cover;background-position:center;filter:brightness(0.22) saturate(0.8)}
        .hero-overlay{position:absolute;inset:0;background:linear-gradient(135deg,rgba(0,0,0,0.92) 0%,rgba(255,215,0,0.03) 60%,rgba(0,0,0,0.75) 100%)}
        .hero-grid-pattern{position:absolute;inset:0;opacity:0.04;background-image:linear-gradient(rgba(255,215,0,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,215,0,0.8) 1px,transparent 1px);background-size:60px 60px}
        .hero-content{position:relative;z-index:2;padding:160px 5% 100px;max-width:900px;width:100%}
        .hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,215,0,0.1);border:1px solid rgba(255,215,0,0.3);padding:6px 16px;border-radius:2px;font-family:'Barlow Condensed',sans-serif;font-size:0.8rem;letter-spacing:3px;text-transform:uppercase;color:var(--gold);margin-bottom:28px;animation:fadeUp 0.8s ease both}
        .hero-badge-dot{width:6px;height:6px;background:var(--gold);border-radius:50%;animation:pulse 2s infinite;flex-shrink:0}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(0.7)}}
        .hero-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(3.5rem,9vw,8rem);line-height:0.95;letter-spacing:2px;margin-bottom:28px;animation:fadeUp 0.8s 0.15s ease both}
        .hero-title-gold{color:var(--gold);display:block}
        .hero-sub{font-size:1.1rem;font-weight:300;color:rgba(255,255,255,0.7);max-width:520px;line-height:1.7;margin-bottom:44px;animation:fadeUp 0.8s 0.3s ease both}
        .hero-ctas{display:flex;gap:16px;flex-wrap:wrap;animation:fadeUp 0.8s 0.45s ease both}
        .btn-primary{background:var(--gold);color:var(--black);padding:16px 40px;border-radius:3px;font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:3px;text-decoration:none;display:inline-block;transition:all 0.3s ease;box-shadow:0 8px 32px rgba(255,215,0,0.25)}
        .btn-primary:hover{background:var(--white);transform:translateY(-3px)}
        .btn-outline{border:1px solid rgba(255,215,0,0.5);color:var(--white);padding:16px 40px;border-radius:3px;font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:3px;text-decoration:none;display:inline-block;transition:all 0.3s ease}
        .btn-outline:hover{background:rgba(255,215,0,0.1);border-color:var(--gold);transform:translateY(-3px)}
        .hero-stats{display:flex;border:1px solid rgba(255,215,0,0.15);background:rgba(0,0,0,0.6);backdrop-filter:blur(10px);max-width:600px;margin-top:60px;animation:fadeUp 0.8s 0.6s ease both;flex-wrap:wrap}
        .stat{flex:1;min-width:100px;padding:20px 24px;border-right:1px solid rgba(255,215,0,0.1);text-align:center}
        .stat:last-child{border-right:none}
        .stat-num{font-family:'Bebas Neue',sans-serif;font-size:2.4rem;color:var(--gold);line-height:1}
        .stat-label{font-size:0.7rem;letter-spacing:2px;text-transform:uppercase;color:var(--gray);margin-top:4px}
        @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
        .section-label{font-family:'Barlow Condensed',sans-serif;font-size:0.75rem;letter-spacing:4px;text-transform:uppercase;color:var(--gold);margin-bottom:16px;display:flex;align-items:center;gap:12px}
        .section-label::before{content:'';display:inline-block;width:30px;height:1px;background:var(--gold)}
        .section-title{font-family:'Bebas Neue',sans-serif;font-size:clamp(2.5rem,5vw,4.5rem);line-height:0.95;letter-spacing:1px;margin-bottom:24px}
        .section-title-gold{color:var(--gold)}
        .about-section{background:var(--dark);display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;padding:100px 5%}
        .about-img-wrap{position:relative}
        .about-img-wrap::before{content:'';position:absolute;top:-15px;left:-15px;right:15px;bottom:15px;border:2px solid rgba(255,215,0,0.3);z-index:0;border-radius:2px}
        .about-img{position:relative;z-index:1;width:100%;height:500px;object-fit:cover;border-radius:2px;filter:grayscale(30%) brightness(0.9)}
        .about-text p{color:rgba(255,255,255,0.65);line-height:1.8;margin-bottom:20px;font-size:1.05rem}
        .about-features{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:36px}
        .about-feat{display:flex;align-items:center;gap:10px;font-family:'Barlow Condensed',sans-serif;font-size:0.95rem;letter-spacing:1px;color:var(--white)}
        .about-feat-dot{width:8px;height:8px;background:var(--gold);flex-shrink:0;clip-path:polygon(50% 0%,100% 100%,0% 100%);display:inline-block}
        .services-section{background:var(--black);padding:100px 5%}
        .services-header{text-align:center;margin-bottom:64px}
        .services-header .section-label{justify-content:center}
        .services-header .section-label::before{display:none}
        .services-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:2px}
        .service-card{background:var(--dark2);padding:44px 36px;border:1px solid rgba(255,215,0,0.06);position:relative;overflow:hidden;cursor:default;transition:all 0.35s ease}
        .service-card::before{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:var(--gold);transition:width 0.35s ease}
        .service-card:hover{background:rgba(255,215,0,0.04);transform:translateY(-4px)}
        .service-card:hover::before{width:100%}
        .service-icon{font-size:2.4rem;margin-bottom:20px}
        .service-card h3{font-family:'Bebas Neue',sans-serif;font-size:1.6rem;letter-spacing:2px;color:var(--white);margin-bottom:14px}
        .service-card p{color:var(--gray);font-size:0.9rem;line-height:1.7}
        .service-tags{display:flex;flex-wrap:wrap;gap:6px;margin-top:20px}
        .service-tag{background:rgba(255,215,0,0.08);border:1px solid rgba(255,215,0,0.2);color:var(--gold);padding:3px 10px;font-size:0.72rem;letter-spacing:1px;font-family:'Barlow Condensed',sans-serif;text-transform:uppercase}
        .why-section{background:linear-gradient(135deg,var(--dark) 0%,var(--dark2) 100%);position:relative;overflow:hidden;padding:100px 5%}
        .why-section::before{content:'SKY GYM';position:absolute;font-family:'Bebas Neue',sans-serif;font-size:clamp(100px,20vw,220px);color:rgba(255,215,0,0.03);letter-spacing:10px;top:50%;left:50%;transform:translate(-50%,-50%);white-space:nowrap;pointer-events:none;z-index:0}
        .why-inner{position:relative;z-index:1}
        .why-grid{display:grid;grid-template-columns:1fr 1fr;gap:40px 80px;align-items:center}
        .why-features{display:grid;grid-template-columns:1fr 1fr;gap:16px}
        .why-feat{display:flex;align-items:flex-start;gap:14px;padding:20px;background:rgba(0,0,0,0.3);border:1px solid rgba(255,215,0,0.1);border-radius:2px;transition:all 0.3s}
        .why-feat:hover{border-color:rgba(255,215,0,0.35);background:rgba(255,215,0,0.04);transform:translateY(-2px)}
        .why-feat-icon{font-size:1.5rem;flex-shrink:0;margin-top:2px}
        .why-feat h4{font-family:'Barlow Condensed',sans-serif;font-size:1rem;letter-spacing:1px;text-transform:uppercase;color:var(--gold);margin-bottom:4px}
        .why-feat p{font-size:0.85rem;color:var(--gray);line-height:1.5}
        .why-img{position:relative}
        .why-img img{width:100%;height:480px;object-fit:cover;filter:grayscale(20%)}
        .why-img-badge{position:absolute;bottom:-20px;right:-20px;background:var(--gold);color:var(--black);padding:20px 24px;text-align:center}
        .why-img-badge .num{font-family:'Bebas Neue',sans-serif;font-size:2.8rem;line-height:1;display:block}
        .why-img-badge .txt{font-size:0.72rem;letter-spacing:2px;text-transform:uppercase;font-weight:600}
        .membership-section{background:var(--black);padding:100px 5%}
        .membership-header{text-align:center;margin-bottom:60px}
        .membership-header .section-label{justify-content:center}
        .membership-header .section-label::before{display:none}
        .membership-note{color:var(--gold);font-size:0.9rem;margin-top:-10px;margin-bottom:0;text-align:center;opacity:0.85}
        .plans-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:0;margin-top:50px;border:1px solid rgba(255,215,0,0.12)}
        .plan-card{padding:44px 32px;border-right:1px solid rgba(255,215,0,0.1);position:relative;transition:all 0.35s;background:var(--dark2)}
        .plan-card:last-child{border-right:none}
        .plan-card.popular{background:var(--gold);color:var(--black);transform:scaleY(1.04);z-index:2;box-shadow:0 20px 60px rgba(255,215,0,0.2)}
        .plan-card:not(.popular):hover{background:rgba(255,215,0,0.05)}
        .plan-badge{position:absolute;top:-12px;left:50%;transform:translateX(-50%);background:var(--black);color:var(--gold);padding:4px 16px;font-size:0.7rem;letter-spacing:2px;text-transform:uppercase;font-family:'Barlow Condensed',sans-serif;font-weight:600;white-space:nowrap;border:1px solid var(--gold)}
        .plan-duration{font-family:'Bebas Neue',sans-serif;font-size:1.5rem;letter-spacing:3px;margin-bottom:8px}
        .plan-card.popular .plan-duration{color:var(--black)}
        .plan-period{font-size:0.75rem;letter-spacing:2px;text-transform:uppercase;color:var(--gray);margin-bottom:28px}
        .plan-card.popular .plan-period{color:rgba(0,0,0,0.6)}
        .plan-price{font-family:'Bebas Neue',sans-serif;font-size:3.5rem;line-height:1;color:var(--white);margin-bottom:4px}
        .plan-card.popular .plan-price{color:var(--black)}
        .plan-price-cur{font-size:1.4rem;vertical-align:top;margin-top:10px;display:inline-block}
        .plan-features{list-style:none;margin:24px 0 32px}
        .plan-features li{padding:8px 0;font-size:0.9rem;border-bottom:1px solid rgba(255,255,255,0.08);display:flex;align-items:center;gap:8px;color:rgba(255,255,255,0.75)}
        .plan-card.popular .plan-features li{color:rgba(0,0,0,0.8);border-bottom-color:rgba(0,0,0,0.1)}
        .plan-features li::before{content:'✓';color:var(--gold);font-weight:bold}
        .plan-card.popular .plan-features li::before{color:var(--black)}
        .plan-cta{display:block;text-align:center;padding:14px;border:1px solid rgba(255,215,0,0.3);color:var(--gold);font-family:'Bebas Neue',sans-serif;font-size:1rem;letter-spacing:3px;text-decoration:none;transition:all 0.3s}
        .plan-cta:hover{background:var(--gold);color:var(--black);border-color:var(--gold)}
        .plan-card.popular .plan-cta{background:var(--black);color:var(--gold);border-color:var(--black)}
        .plan-card.popular .plan-cta:hover{background:var(--dark2)}
        .trainers-section{background:var(--dark);padding:100px 5%}
        .trainers-header{text-align:center;margin-bottom:60px}
        .trainers-header .section-label{justify-content:center}
        .trainers-header .section-label::before{display:none}
        .trainers-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:30px}
        .trainer-card{position:relative;overflow:hidden;background:var(--dark2);border:1px solid rgba(255,215,0,0.08);transition:all 0.35s ease}
        .trainer-card:hover{border-color:rgba(255,215,0,0.35);transform:translateY(-6px)}
        .trainer-img{width:100%;height:300px;object-fit:cover;filter:grayscale(30%);transition:all 0.35s;display:block}
        .trainer-card:hover .trainer-img{filter:grayscale(0)}
        .trainer-info{padding:24px}
        .trainer-info h3{font-family:'Bebas Neue',sans-serif;font-size:1.5rem;letter-spacing:2px;margin-bottom:4px}
        .trainer-role{font-size:0.8rem;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:12px}
        .trainer-info p{font-size:0.88rem;color:var(--gray);line-height:1.6}
        .trainer-skills{display:flex;gap:6px;flex-wrap:wrap;margin-top:16px}
        .trainer-skill{background:rgba(255,215,0,0.08);color:var(--gold);padding:3px 10px;font-size:0.7rem;letter-spacing:1px;font-family:'Barlow Condensed',sans-serif;text-transform:uppercase;border:1px solid rgba(255,215,0,0.15)}
        .testimonials-section{background:var(--black);position:relative;overflow:hidden;padding:100px 5%}
        .test-bg-text{position:absolute;font-family:'Bebas Neue',sans-serif;font-size:220px;color:rgba(255,215,0,0.025);letter-spacing:8px;top:50%;left:50%;transform:translate(-50%,-50%);white-space:nowrap;pointer-events:none;z-index:0}
        .test-inner{position:relative;z-index:1}
        .test-header{text-align:center;margin-bottom:60px}
        .test-header .section-label{justify-content:center}
        .test-header .section-label::before{display:none}
        .test-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px}
        .test-card{background:var(--dark2);padding:40px 36px;border:1px solid rgba(255,215,0,0.08);position:relative;transition:all 0.3s}
        .test-card::before{content:'"';position:absolute;top:16px;left:28px;font-family:'Bebas Neue',sans-serif;font-size:6rem;color:rgba(255,215,0,0.1);line-height:1;pointer-events:none}
        .test-card:hover{border-color:rgba(255,215,0,0.25);transform:translateY(-4px)}
        .stars{color:var(--gold);font-size:1rem;margin-bottom:20px;letter-spacing:2px}
        .test-text{font-size:1rem;line-height:1.75;color:rgba(255,255,255,0.8);font-style:italic;margin-bottom:28px}
        .test-author{display:flex;align-items:center;gap:12px}
        .test-avatar{width:44px;height:44px;border-radius:50%;background:var(--gold);display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:1.2rem;color:var(--black);flex-shrink:0}
        .test-name{font-family:'Barlow Condensed',sans-serif;font-size:1rem;letter-spacing:1px;font-weight:600}
        .test-meta{font-size:0.8rem;color:var(--gray);margin-top:2px}
        .gallery-section{background:var(--dark);padding:100px 5%}
        .gallery-header{text-align:center;margin-bottom:50px}
        .gallery-header .section-label{justify-content:center}
        .gallery-header .section-label::before{display:none}
        .gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:4px}
        .gal-item{overflow:hidden;position:relative;background:var(--dark3)}
        .gal-item:nth-child(1){grid-column:span 2;grid-row:span 2}
        .gal-item:nth-child(5){grid-column:span 2}
        .gal-item img{width:100%;height:100%;min-height:200px;object-fit:cover;filter:grayscale(20%);transition:all 0.5s ease;display:block}
        .gal-item:hover img{transform:scale(1.06);filter:grayscale(0)}
        .gal-overlay{position:absolute;inset:0;background:rgba(255,215,0,0);transition:all 0.3s}
        .gal-item:hover .gal-overlay{background:rgba(255,215,0,0.08)}
        .contact-section{background:var(--black);display:grid;grid-template-columns:1fr 1fr;min-height:600px;padding:0}
        .contact-info{padding:100px 5%;background:var(--dark2);display:flex;flex-direction:column;justify-content:center}
        .contact-info .section-title{margin-bottom:40px}
        .contact-items{display:flex;flex-direction:column;gap:24px}
        .contact-item{display:flex;align-items:flex-start;gap:16px;padding:20px;border:1px solid rgba(255,215,0,0.1);background:rgba(0,0,0,0.2);transition:all 0.3s}
        .contact-item:hover{border-color:rgba(255,215,0,0.35)}
        .contact-icon{font-size:1.4rem;flex-shrink:0;margin-top:2px}
        .contact-item h4{font-family:'Barlow Condensed',sans-serif;font-size:0.8rem;letter-spacing:2px;text-transform:uppercase;color:var(--gold);margin-bottom:4px}
        .contact-item p{color:rgba(255,255,255,0.8);font-size:0.95rem}
        .contact-map{position:relative;min-height:500px}
        .contact-map iframe{width:100%;height:100%;min-height:500px;border:none;filter:grayscale(40%) invert(5%)}
        .sg-footer{background:var(--dark);border-top:1px solid rgba(255,215,0,0.15);padding:70px 5% 30px}
        .footer-top{display:grid;grid-template-columns:1.5fr 1fr 1fr 1fr;gap:50px;margin-bottom:50px;padding-bottom:50px;border-bottom:1px solid rgba(255,215,0,0.1)}
        .footer-brand img{width:60px;height:60px;object-fit:contain;border-radius:50%;margin-bottom:16px;filter:drop-shadow(0 0 10px rgba(255,215,0,0.3))}
        .footer-brand h3{font-family:'Bebas Neue',sans-serif;font-size:1.8rem;letter-spacing:4px;color:var(--gold);margin-bottom:12px}
        .footer-brand p{color:var(--gray);font-size:0.9rem;line-height:1.7;max-width:280px}
        .footer-col h4{font-family:'Bebas Neue',sans-serif;font-size:1.1rem;letter-spacing:3px;color:var(--gold);margin-bottom:20px;padding-bottom:10px;border-bottom:1px solid rgba(255,215,0,0.2)}
        .footer-col ul{list-style:none}
        .footer-col ul li{margin-bottom:10px}
        .footer-col ul li a{color:var(--gray);text-decoration:none;font-size:0.9rem;transition:color 0.2s;display:flex;align-items:center;gap:6px}
        .footer-col ul li a::before{content:'▸';color:var(--gold);font-size:0.7rem;transition:transform 0.2s}
        .footer-col ul li a:hover{color:var(--gold)}
        .footer-col ul li a:hover::before{transform:translateX(4px)}
        .social-links{display:flex;gap:10px;margin-top:20px}
        .social-link{width:40px;height:40px;background:rgba(255,215,0,0.08);border:1px solid rgba(255,215,0,0.2);display:flex;align-items:center;justify-content:center;color:var(--gold);text-decoration:none;font-size:0.75rem;font-family:'Barlow Condensed',sans-serif;font-weight:700;text-transform:uppercase;transition:all 0.3s}
        .social-link:hover{background:var(--gold);color:var(--black)}
        .footer-bottom{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
        .footer-bottom p{color:var(--gray);font-size:0.85rem}
        .footer-bottom span{color:var(--gold)}
        .reveal{opacity:0;transform:translateY(40px);transition:opacity 0.7s ease,transform 0.7s ease}
        .reveal.visible{opacity:1;transform:translateY(0)}
        .reveal-left{opacity:0;transform:translateX(-40px);transition:opacity 0.7s ease,transform 0.7s ease}
        .reveal-left.visible{opacity:1;transform:translateX(0)}
        .reveal-right{opacity:0;transform:translateX(40px);transition:opacity 0.7s ease,transform 0.7s ease}
        .reveal-right.visible{opacity:1;transform:translateX(0)}
        @media(max-width:1024px){
          .about-section{grid-template-columns:1fr;gap:50px}
          .about-img-wrap{display:none}
          .why-grid{grid-template-columns:1fr}
          .why-img{display:none}
          .footer-top{grid-template-columns:1fr 1fr;gap:30px}
        }
        @media(max-width:768px){
          .nav-links,.btn-join{display:none}
          .hamburger{display:flex}
          .about-section,.services-section,.why-section,.membership-section,.trainers-section,.testimonials-section,.gallery-section{padding:70px 5%}
          .contact-section{grid-template-columns:1fr}
          .contact-info{padding:70px 5%}
          .gallery-grid{grid-template-columns:repeat(2,1fr)}
          .gal-item:nth-child(1){grid-column:span 2}
          .gal-item:nth-child(5){grid-column:span 2}
          .plans-grid{grid-template-columns:1fr;border:none;gap:16px}
          .plan-card{border-right:none;border:1px solid rgba(255,215,0,0.12)}
          .plan-card.popular{transform:none}
          .why-features{grid-template-columns:1fr}
          .footer-top{grid-template-columns:1fr;gap:30px}
          .footer-bottom{flex-direction:column;text-align:center}
          .hero-content{padding:140px 5% 80px}
        }
        @media(max-width:480px){
          .hero-ctas{flex-direction:column}
          .btn-primary,.btn-outline{text-align:center}
          .about-features{grid-template-columns:1fr}
          .gallery-grid{grid-template-columns:1fr}
          .gal-item:nth-child(1),.gal-item:nth-child(5){grid-column:span 1}
          .hero-stats{max-width:100%}
          .stat{min-width:50%}
          .stat:nth-child(even){border-right:none}
          .hero-sub{font-size:1rem}
          .test-card{padding:30px 24px}
        }
      `}</style>

      <nav className={`sg-nav${scrolled ? " scrolled" : ""}`}>
        <a href="#home" className="nav-logo">
          <img src={LOGO} alt="Sky Gym Logo" />
          <span className="nav-logo-text">Sky Gym</span>
        </a>
        <ul className="nav-links">
          {["Home","About","Services","Membership","Trainers","Gallery","Contact"].map((l) => (
            <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>
          ))}
        </ul>
        <a href="#membership" className="btn-join">Join Now</a>
        <button className={`hamburger${menuOpen ? " open" : ""}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {["Home","About","Services","Membership","Trainers","Gallery","Contact"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} onClick={closeMenu}>{l}</a>
        ))}
        <a href="#membership" className="btn-join-mobile" onClick={closeMenu}>Join Now</a>
      </div>

      <section id="home" className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-grid-pattern"></div>
        <div className="hero-content">
          <div className="hero-badge"><span className="hero-badge-dot"></span>Korukkupet, Old Washermanpet – Chennai 600021</div>
          <h1 className="hero-title">Transform Your Body.<span className="hero-title-gold">Elevate Your Life.</span></h1>
          <p className="hero-sub">Join Sky Gym – a well-known fitness centre in Old Washermanpet, offering affordable gym memberships, strength training, cardio workouts, and general fitness exercise facilities for your daily workout routine.</p>
          <div className="hero-ctas">
            <a href="#membership" className="btn-primary">Get Started</a>
            <a href="#contact" className="btn-outline">Enquire Now</a>
          </div>
          <div className="hero-stats">
            {[["48+","Reviews"],["4.1★","Rated"],["₹250","Monthly"],["All","Levels"]].map(([n,l]) => (
              <div className="stat" key={l}><div className="stat-num">{n}</div><div className="stat-label">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-img-wrap reveal-left">
          <img className="about-img" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&q=80" alt="Sky Gym Interior" />
        </div>
        <div className="about-text reveal-right">
          <div className="section-label">About Us</div>
          <h2 className="section-title">More Than<br />Just a <span className="section-title-gold">Gym</span></h2>
          <p>Sky Gym is a well-known local gym and fitness centre located at Thiruvottiyur High Road, Korukkupet, Old Washermanpet – offering affordable memberships, strength training, cardio workouts, and general fitness facilities.</p>
          <p>We welcome members of all fitness levels — whether you're a beginner starting your journey or an experienced athlete looking to push your limits in a friendly, supportive environment.</p>
          <p>With accessible pricing starting at just ₹250/month and flexible morning & evening timings, Sky Gym makes daily fitness easy and convenient for the entire community.</p>
          <div className="about-features">
            {["Certified Trainers","Modern Equipment","Personalized Programs","All Fitness Levels","Hygienic Environment","Flexible Timings"].map((f) => (
              <div className="about-feat" key={f}><span className="about-feat-dot"></span>{f}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="services-header reveal">
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Our <span className="section-title-gold">Services</span></h2>
        </div>
        <div className="services-grid">
          {[
            {icon:"🏋️",title:"Gym Workouts",desc:"Comprehensive gym workout sessions covering weights and general exercises suitable for all fitness levels and daily routines.",tags:["Weights","General Exercise","Daily Routine"]},
            {icon:"🏃",title:"Cardio Facilities",desc:"Exercise and cardio facilities designed to improve your endurance, stamina, and cardiovascular health effectively.",tags:["Cardio","Endurance","Stamina"]},
            {icon:"🤸",title:"Floor Exercises",desc:"Dedicated floor exercise options for stretching, bodyweight training, core strengthening, and flexibility workouts.",tags:["Bodyweight","Core","Flexibility"]},
            {icon:"💪",title:"Weight Training",desc:"Full weight training and strength building equipment to help you build muscle, increase power and transform your body.",tags:["Strength","Muscle","Power"]},
            {icon:"🏟️",title:"Fitness Space",desc:"Spacious and well-maintained fitness space for daily workout routines in a clean, welcoming environment.",tags:["Daily Workout","Clean Space","All Levels"]},
            {icon:"📅",title:"Monthly Memberships",desc:"Affordable monthly gym subscription plans starting at ₹250/month. Call +91 97911 48321 for membership details.",tags:["₹250/Month","Affordable","Flexible"]},
          ].map((s) => (
            <div className="service-card reveal" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <div className="service-tags">{s.tags.map((t) => <span className="service-tag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="why" className="why-section">
        <div className="why-inner">
          <div className="why-grid">
            <div>
              <div className="section-label reveal">Why Choose Us</div>
              <h2 className="section-title reveal">Why <span className="section-title-gold">Sky Gym</span><br />Stands Out</h2>
              <div className="why-features">
                {[
                  {icon:"🏆",title:"Expert Trainers",desc:"Certified professionals with years of experience across diverse fitness disciplines."},
                  {icon:"⚡",title:"Modern Equipment",desc:"Top-of-the-line machines and free weights updated regularly for optimal performance."},
                  {icon:"🕐",title:"Flexible Hours",desc:"Early morning to late night — we work around your schedule."},
                  {icon:"🤝",title:"Community Feel",desc:"A welcoming, supportive environment for beginners and advanced athletes alike."},
                  {icon:"📊",title:"Tracked Progress",desc:"Regular assessments and body composition analysis to keep you on track."},
                  {icon:"🧼",title:"Clean Facility",desc:"Professionally cleaned equipment and facilities maintained to the highest standards."},
                ].map((f) => (
                  <div className="why-feat reveal" key={f.title}>
                    <div className="why-feat-icon">{f.icon}</div>
                    <div><h4>{f.title}</h4><p>{f.desc}</p></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="why-img reveal-right">
              <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80" alt="Sky Gym Training" />
              <div className="why-img-badge">
                <span className="num">10+</span>
                <span className="txt">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="membership-section">
        <div className="membership-header reveal">
          <div className="section-label">Pricing</div>
          <h2 className="section-title">Membership <span className="section-title-gold">Plans</span></h2>
          <p className="membership-note">All plans include full access to gym equipment & locker rooms</p>
        </div>
        <div className="plans-grid">
          {[
            {dur:"1 Month",period:"Monthly Plan",price:"250",features:["Full Gym Access","Weight Training","Cardio Zone","Floor Exercise Area"],popular:false},
            {dur:"3 Months",period:"Quarterly Plan",price:"700",features:["Full Gym Access","Weight Training","Cardio Zone","Floor Exercises","Priority Support"],popular:true,badge:"Best Value"},
            {dur:"6 Months",period:"Half-Yearly Plan",price:"1,300",features:["Full Gym Access","Weight Training","Cardio Zone","Floor Exercises","Strength Building"],popular:false},
            {dur:"12 Months",period:"Annual Plan",price:"2,500",features:["Full Gym Access","All Facilities","Weight & Strength","Cardio Zone","Floor Exercise","Best Savings"],popular:false},
          ].map((p) => (
            <div className={`plan-card${p.popular ? " popular" : ""}`} key={p.dur}>
              {p.badge && <div className="plan-badge">{p.badge}</div>}
              <div className="plan-duration">{p.dur}</div>
              <div className="plan-period">{p.period}</div>
              <div className="plan-price"><span className="plan-price-cur">₹</span>{p.price}</div>
              <ul className="plan-features">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
              <a href="#contact" className="plan-cta">Get Started</a>
            </div>
          ))}
        </div>
      </section>

      <section id="trainers" className="trainers-section">
        <div className="trainers-header reveal">
          <div className="section-label">Our Team</div>
          <h2 className="section-title">Expert <span className="section-title-gold">Trainers</span></h2>
        </div>
        <div className="trainers-grid">
          {[
            {name:"Ravi Kumar",role:"Head Trainer & Strength Coach",img:"https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&q=80",bio:"10+ years in strength and conditioning with national-level athletic coaching background.",skills:["Powerlifting","Strength","Conditioning"]},
            {name:"Priya Sharma",role:"Yoga & Wellness Coach",img:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",bio:"Certified yoga instructor specializing in therapeutic yoga, stress reduction, and mindfulness.",skills:["Yoga","Pilates","Meditation"]},
            {name:"Arjun Das",role:"Boxing & MMA Coach",img:"https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&q=80",bio:"Former state-level boxer with expertise in combat sports fitness and high-intensity training.",skills:["Boxing","HIIT","MMA"]},
            {name:"Sneha Raj",role:"Nutrition & Fitness Coach",img:"https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&q=80",bio:"Certified nutritionist and fitness coach helping members achieve holistic health through diet and exercise.",skills:["Nutrition","Fat Loss","Cardio"]},
          ].map((t) => (
            <div className="trainer-card reveal" key={t.name}>
              <img className="trainer-img" src={t.img} alt={t.name} />
              <div className="trainer-info">
                <h3>{t.name}</h3>
                <div className="trainer-role">{t.role}</div>
                <p>{t.bio}</p>
                <div className="trainer-skills">{t.skills.map((s) => <span className="trainer-skill" key={s}>{s}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <div className="test-bg-text">RESULTS</div>
        <div className="test-inner">
          <div className="test-header">
            <div className="section-label reveal">Success Stories</div>
            <h2 className="section-title reveal">What Our <span className="section-title-gold">Members Say</span></h2>
          </div>
          <div className="test-grid">
            {[
              {text:"Sky Gym completely changed my life. Lost 18kg in 6 months with proper guidance and an incredible support system. Best decision I ever made!",name:"Ankit Mehta",meta:"Member since 2022",init:"A"},
              {text:"The trainers here are exceptionally knowledgeable and motivating. The group Zumba classes are my weekly highlight. Highly recommend Sky Gym!",name:"Divya Krishnan",meta:"Member since 2021",init:"D"},
              {text:"Clean facility, top equipment, and genuine trainers who care about your progress. My strength has more than doubled in under a year.",name:"Mohan Raj",meta:"Member since 2023",init:"M"},
            ].map((t) => (
              <div className="test-card reveal" key={t.name}>
                <div className="stars">★★★★★</div>
                <p className="test-text">"{t.text}"</p>
                <div className="test-author">
                  <div className="test-avatar">{t.init}</div>
                  <div><div className="test-name">{t.name}</div><div className="test-meta">{t.meta}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <div className="gallery-header reveal">
          <div className="section-label">Inside Sky Gym</div>
          <h2 className="section-title">Our <span className="section-title-gold">Gallery</span></h2>
        </div>
        <div className="gallery-grid">
          {[
            {src:"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",alt:"Main Gym Floor"},
            {src:"https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&q=80",alt:"Cardio Zone"},
            {src:"https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&q=80",alt:"Weight Training"},
            {src:"https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=400&q=80",alt:"Group Class"},
            {src:"https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",alt:"Boxing Area"},
            {src:"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&q=80",alt:"Free Weights"},
          ].map((g, i) => (
            <div className="gal-item" key={i}>
              <img src={g.src} alt={g.alt} /><div className="gal-overlay"></div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-info">
          <div className="section-label reveal">Get In Touch</div>
          <h2 className="section-title reveal">Visit <span className="section-title-gold">Sky Gym</span></h2>
          <div className="contact-items">
            {[
              {icon:"📍",title:"Location",text:"No.457, Sky Fitness Centre, Thiruvottiyur High Rd, Korukkupet, Old Washermanpet, Chennai – 600021"},
              {icon:"📞",title:"Phone",text:"+91 97911 48321 / +91 98410 27093"},
              {icon:"📧",title:"Email",text:"info@skygym.in"},
              {icon:"🕐",title:"Hours",text:"Mon–Sun: 5:00 AM – 10:00 AM & 4:00 PM – 9:30 PM"},
            ].map((c) => (
              <div className="contact-item reveal" key={c.title}>
                <div className="contact-icon">{c.icon}</div>
                <div><h4>{c.title}</h4><p>{c.text}</p></div>
              </div>
            ))}
          </div>
        </div>
        <div className="contact-map">
          <iframe src="https://maps.google.com/maps?q=Sky+Gym+Thiruvottiyur+High+Road+Korukkupet+Old+Washermanpet+Chennai+600021&output=embed" allowFullScreen loading="lazy" title="Sky Gym Location"></iframe>
        </div>
      </section>

      <footer className="sg-footer">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={LOGO} alt="Sky Gym" />
            <h3>Sky Gym</h3>
            <p>A well-known fitness centre in Korukkupet, Old Washermanpet, North Chennai offering affordable gym memberships, strength training, and cardio facilities for all levels.</p>
            <div className="social-links">
              <a href="#" className="social-link">Fb</a>
              <a href="#" className="social-link">Ig</a>
              <a href="#" className="social-link">Tw</a>
              <a href="#" className="social-link">Yt</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>{["Home","About","Services","Membership","Trainers","Gallery","Contact"].map((l) => <li key={l}><a href={`#${l.toLowerCase()}`}>{l}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul>{["Gym Workouts","Cardio Facilities","Floor Exercises","Weight Training","Fitness Space","Monthly Memberships"].map((s) => <li key={s}><a href="#services">{s}</a></li>)}</ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">Korukkupet, Old Washermanpet, Chennai – 600021</a></li>
              <li><a href="tel:+919791148321">+91 97911 48321</a></li>
              <li><a href="tel:+919841027093">+91 98410 27093</a></li>
              <li><a href="#">Mon–Sun: 5:00 AM–10:00 AM & 4:00–9:30 PM</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 <span>Sky Gym</span>. All rights reserved.</p>
          <p>Designed for <span>Champions</span></p>
        </div>
      </footer>
    </>
  );
}
