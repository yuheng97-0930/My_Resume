import {
  KeyboardEvent as ReactKeyboardEvent,
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useForm, ValidationError } from "@formspree/react";

const publicAsset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

type Project = {
  title: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  tags: string[];
  features: string[];
  visual: string;
  tone: string;
  cover: string;
  gallery: string[];
};

type Certificate = {
  issuer: string;
  title: string;
  mark: string;
  description: string;
  pdf?: string;
  coursework?: string[];
};

const navigation = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Journey", "#journey"],
  ["Certificates", "#certificates"],
  ["Brand", "#brand"],
  ["Contact", "#contact"],
];

const skills = [
  {
    number: "01",
    title: "Mobile Development",
    detail: "Building responsive, role-based applications with Flutter and Dart.",
    tools: ["Flutter", "Dart", "Android"],
  },
  {
    number: "02",
    title: "Backend & Data",
    detail: "Designing connected app experiences with secure cloud data flows.",
    tools: ["Supabase", "PostgreSQL", "REST APIs"],
  },
  {
    number: "03",
    title: "Web & Programming",
    detail: "Creating accessible interfaces and practical programming solutions.",
    tools: ["HTML", "CSS", "JavaScript", "C++", "Python"],
  },
  {
    number: "04",
    title: "Tools & Exploration",
    detail: "Working with modern development workflows while exploring game systems.",
    tools: ["Git", "GitHub", "Android Studio", "VS Code", "TypeScript — Currently Learning"],
  },
];

const projects: Project[] = [
  {
    title: "UniSmart",
    eyebrow: "Featured · Final Year Project",
    description:
      "A role-based university management mobile app connecting students, lecturers and staff in one coherent system.",
    longDescription:
      "UniSmart brings essential campus workflows into one Flutter application. The system coordinates academic information across three user roles and uses Supabase for authentication, data and server-side functions.",
    tags: ["Flutter", "Dart", "Supabase", "Gemini AI"],
    features: [
      "QR attendance and semester analytics",
      "Subject registration and programme study plans",
      "Timetables, examinations and announcements",
      "AI virtual assistant with student context",
      "Role-specific Student, Lecturer and Staff experiences",
    ],
    visual: "uni",
    tone: "cyan",
    cover: publicAsset("assets/projects/unismart/unismart-cover.png"),
    gallery: [
      publicAsset("assets/projects/unismart/unismart-ai-assistant.png"),
      publicAsset("assets/projects/unismart/unismart-attendance-scanner.png"),
      publicAsset("assets/projects/unismart/unismart-attendance-analytics.png"),
      publicAsset("assets/projects/unismart/unismart-timetable.png"),
      publicAsset("assets/projects/unismart/unismart-subject-registration.png"),
      publicAsset("assets/projects/unismart/unismart-lecturer-attendance.png"),
      publicAsset("assets/projects/unismart/unismart-staff-management.png"),
    ],
  },
  {
    title: "CampusGo MY",
    eyebrow: "Mobile Application Development",
    description:
      "A one-stop student lifestyle concept for Malaysian campuses, from schedules to facilities and activities.",
    longDescription:
      "CampusGo MY explores how a student-facing mobile product can simplify everyday campus life through a clear information architecture and task-focused mobile interface.",
    tags: ["Mobile UI", "Flutter", "UX Design"],
    features: [
      "Class schedules and examination timetables",
      "Campus maps and facility discovery",
      "Events, clubs and student activities",
    ],
    visual: "campus",
    tone: "blue",
    cover: publicAsset("assets/projects/campusgo/campusgo-cover.png"),
    gallery: [
      publicAsset("assets/projects/campusgo/campusgo-schedule.png"),
      publicAsset("assets/projects/campusgo/campusgo-map.png"),
    ],
  },
  {
    title: "IoT Rover",
    eyebrow: "Internet of Things",
    description:
      "An ESP32 rover controlled from a Flutter dashboard with live sensor status and movement controls.",
    longDescription:
      "A connected hardware and mobile experience combining device control, environmental sensing and a compact dashboard interface.",
    tags: ["ESP32", "Flutter", "Sensors", "REST"],
    features: [
      "Directional mobile controls",
      "DHT11 temperature and humidity readings",
      "MQ-2 gas monitoring",
      "OLED, LED and buzzer feedback",
    ],
    visual: "rover",
    tone: "violet",
    cover: publicAsset("assets/projects/iot-rover/rover-cover.png"),
    gallery: [
      publicAsset("assets/projects/iot-rover/rover-controls.png"),
      publicAsset("assets/projects/iot-rover/iot-rover-hardware.png"),
    ],
  },
  {
    title: "Hangman",
    eyebrow: "Object-Oriented Programming",
    description:
      "A C++ word game structured with reusable game modes, inheritance and polymorphism.",
    longDescription:
      "A command-line game created to apply object-oriented design through separate single-player and multiplayer flows.",
    tags: ["C++", "OOP", "Game Logic"],
    features: [
      "Single-player and multiplayer modes",
      "Reusable GameMode architecture",
      "Inheritance and polymorphism",
    ],
    visual: "hangman",
    tone: "amber",
    cover: publicAsset("assets/projects/hangman/hangman-cover.png"),
    gallery: [publicAsset("assets/projects/hangman/hangman-gameplay.png")],
  },
];

const journey = [
  {
    date: "2024",
    title: "Started the IT journey",
    description:
      "Began the Diploma in Information Technology at Raffles University and built a foundation in programming, databases and networking.",
  },
  {
    date: "BUILD",
    title: "Turned lessons into products",
    description:
      "Created mobile, web, OOP and IoT projects while learning how interface decisions connect to software logic.",
  },
  {
    date: "NOW",
    title: "Developing UniSmart",
    description:
      "Designing a multi-role campus platform and solving real dependency, data and usability challenges as a solo developer.",
  },
  {
    date: "NEXT",
    title: "Growing into software engineering",
    description:
      "Pursuing opportunities in application development, software engineering and interactive game systems.",
  },
];

const certificates: Certificate[] = [
  {
    issuer: "AWS Academy",
    title: "Graduate - Cloud Foundations",
    mark: "AWS",
    description:
      "A 20-hour AWS Academy Cloud Foundations training badge issued in 2025.",
    pdf: publicAsset("assets/certificates/aws-cloud-foundations.pdf"),
  },
  {
    issuer: "Alibaba Cloud",
    title: "Alibaba Cloud Workspace",
    mark: "ALI",
    description:
      "Alibaba Cloud Product Capability Certification for Alibaba Cloud Workspace.",
    pdf: publicAsset("assets/certificates/alibaba-cloud-workspace.pdf"),
  },
  {
    issuer: "Cisco Networking Academy",
    title: "Cybersecurity Learning Path",
    mark: "CISCO",
    description:
      "Cybersecurity coursework completed through Universiti Teknologi Malaysia and Cisco Networking Academy.",
    coursework: [
      "Introduction to Cybersecurity",
      "Cyber Threat Management",
      "Junior Cybersecurity Analyst Career Path Exam",
    ],
  },
];

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cardDragRef = useRef({
    active: false,
    moved: false,
    pointerId: -1,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  });
  const [loading, setLoading] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certificate | null>(null);
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });
  const [cardDragging, setCardDragging] = useState(false);
  const [moodboardPage, setMoodboardPage] = useState(0);
  const [contactState, submitContact, resetContact] = useForm("mrpzevqp");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setLoading(false), reduced ? 300 : 2300);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("is-loading", loading);
    return () => document.body.classList.remove("is-loading");
  }, [loading]);

  useEffect(() => {
    const modalOpen = Boolean(selectedProject || selectedCertificate);
    document.body.classList.toggle("modal-open", modalOpen);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setSelectedCertificate(null);
      }
      if (selectedProject && event.key === "ArrowRight") {
        const imageCount = selectedProject.gallery.length + 1;
        setGalleryIndex((index) => (index + 1) % imageCount);
      }
      if (selectedProject && event.key === "ArrowLeft") {
        const imageCount = selectedProject.gallery.length + 1;
        setGalleryIndex((index) => (index - 1 + imageCount) % imageCount);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject, selectedCertificate]);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.13 },
    );
    revealItems.forEach((item) => revealObserver.observe(item));

    const sections = document.querySelectorAll<HTMLElement>("main section[id]");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    sections.forEach((section) => sectionObserver.observe(section));
    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
    };
  }, [loading]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !window.matchMedia("(pointer: fine)").matches) return;
    const moveCursor = (event: PointerEvent) => {
      cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
    };
    window.addEventListener("pointermove", moveCursor);
    return () => window.removeEventListener("pointermove", moveCursor);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -1000, y: -1000 };
    let animationFrame = 0;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      alpha: number;
      value: string;
    };
    type Ripple = { x: number; y: number; radius: number; alpha: number };

    let particles: Particle[] = [];
    const ripples: Ripple[] = [];

    const createParticles = () => {
      const count = Math.min(110, Math.floor((width * height) / 15000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: 0.12 + Math.random() * 0.25,
        alpha: 0.05 + Math.random() * 0.13,
        value: Math.random() > 0.5 ? "1" : "0",
      }));
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createParticles();
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      context.font = "500 12px ui-monospace, SFMono-Regular, Menlo, monospace";
      particles.forEach((particle) => {
        const dx = particle.x - pointer.x;
        const dy = particle.y - pointer.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 130 && distance > 0) {
          const strength = (130 - distance) / 130;
          particle.vx += (dx / distance) * strength * 0.025;
          particle.vy += (dy / distance) * strength * 0.025;
        }
        particle.x += reduced ? 0 : particle.vx;
        particle.y += reduced ? 0 : particle.vy;
        particle.vx *= 0.992;
        particle.vy *= 0.995;
        particle.vy += reduced ? 0 : 0.001;
        if (particle.y > height + 20) particle.y = -20;
        if (particle.x > width + 20) particle.x = -20;
        if (particle.x < -20) particle.x = width + 20;
        context.fillStyle = `rgba(96, 205, 255, ${particle.alpha})`;
        context.fillText(particle.value, particle.x, particle.y);
      });
      for (let index = ripples.length - 1; index >= 0; index -= 1) {
        const ripple = ripples[index];
        ripple.radius += reduced ? 8 : 3.5;
        ripple.alpha -= reduced ? 0.08 : 0.012;
        context.beginPath();
        context.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        context.strokeStyle = `rgba(56, 189, 248, ${Math.max(0, ripple.alpha)})`;
        context.lineWidth = 1.2;
        context.stroke();
        if (ripple.alpha <= 0) ripples.splice(index, 1);
      }
      animationFrame = window.requestAnimationFrame(draw);
    };

    const trackPointer = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
    };
    const scatter = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      if (target.closest("a, button, input, textarea")) return;
      ripples.push({ x: event.clientX, y: event.clientY, radius: 8, alpha: 0.58 });
      particles.forEach((particle) => {
        const dx = particle.x - event.clientX;
        const dy = particle.y - event.clientY;
        const distance = Math.hypot(dx, dy);
        if (distance < 260 && distance > 0) {
          const force = (260 - distance) / 260;
          particle.vx += (dx / distance) * force * 4.2;
          particle.vy += (dy / distance) * force * 4.2;
        }
      });
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", trackPointer);
    window.addEventListener("pointerdown", scatter);
    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", trackPointer);
      window.removeEventListener("pointerdown", scatter);
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-magnetic]");
    const cleanups = Array.from(elements).map((element) => {
      const move = (event: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left - rect.width / 2;
        const y = event.clientY - rect.top - rect.height / 2;
        element.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
      };
      const reset = () => {
        element.style.transform = "";
      };
      element.addEventListener("mousemove", move);
      element.addEventListener("mouseleave", reset);
      return () => {
        element.removeEventListener("mousemove", move);
        element.removeEventListener("mouseleave", reset);
      };
    });
    return () => cleanups.forEach((cleanup) => cleanup());
  }, [loading]);

  const handleTilt = (event: ReactMouseEvent<HTMLElement>) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    card.style.setProperty("--pointer-x", `${x * 100}%`);
    card.style.setProperty("--pointer-y", `${y * 100}%`);
    card.style.setProperty("--rotate-x", `${(0.5 - y) * 5}deg`);
    card.style.setProperty("--rotate-y", `${(x - 0.5) * 7}deg`);
  };

  const resetTilt = (event: ReactMouseEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--rotate-x", "0deg");
    event.currentTarget.style.setProperty("--rotate-y", "0deg");
  };

  const handleCardPointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    cardDragRef.current = {
      active: true,
      moved: false,
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      originX: cardRotation.x,
      originY: cardRotation.y,
    };
    setCardDragging(true);
  };

  const handleCardPointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const drag = cardDragRef.current;
    if (!drag.active || drag.pointerId !== event.pointerId) return;
    const deltaX = event.clientX - drag.startX;
    const deltaY = event.clientY - drag.startY;
    if (Math.hypot(deltaX, deltaY) > 4) drag.moved = true;
    setCardRotation({
      x: drag.originX - deltaY * 0.38,
      y: drag.originY + deltaX * 0.48,
    });
  };

  const finishCardDrag = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const drag = cardDragRef.current;
    if (drag.pointerId !== event.pointerId) return;
    drag.active = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    setCardDragging(false);
  };

  const handleCardClick = () => {
    if (cardDragRef.current.moved) {
      cardDragRef.current.moved = false;
      return;
    }
    setCardRotation((rotation) => ({ ...rotation, y: rotation.y + 180 }));
  };

  const handleCardKeyDown = (event: ReactKeyboardEvent<HTMLButtonElement>) => {
    const step = event.shiftKey ? 30 : 12;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      setCardRotation((rotation) => ({
        ...rotation,
        y: rotation.y + (event.key === "ArrowLeft" ? -step : step),
      }));
    }
    if (event.key === "ArrowUp" || event.key === "ArrowDown") {
      event.preventDefault();
      setCardRotation((rotation) => ({
        ...rotation,
        x: rotation.x + (event.key === "ArrowUp" ? step : -step),
      }));
    }
    if (event.key === "Home") {
      event.preventDefault();
      setCardRotation({ x: 0, y: 0 });
    }
  };

  const openProject = (project: Project) => {
    setGalleryIndex(0);
    setSelectedProject(project);
  };

  const projectImages = selectedProject
    ? [selectedProject.cover, ...selectedProject.gallery]
    : [];

  const changeGalleryImage = (direction: number) => {
    if (!projectImages.length) return;
    setGalleryIndex(
      (index) => (index + direction + projectImages.length) % projectImages.length,
    );
  };

  const businessCardBackVisible =
    Math.cos((cardRotation.x * Math.PI) / 180) *
      Math.cos((cardRotation.y * Math.PI) / 180) <
    0;

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>

      <div className={`site-loader ${loading ? "" : "loader-complete"}`}>
        <div className="loader-symbol" aria-hidden="true">
          <span className="loader-y">Y</span>
          <span className="loader-line" />
          <span className="loader-h">H</span>
        </div>
        <p className="loader-name">
          {"LIM YU HENG".split("").map((letter, index) => (
            <span key={`${letter}-${index}`} style={{ "--i": index } as React.CSSProperties}>
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </p>
        <div className="loader-progress"><span /></div>
      </div>

      <canvas ref={canvasRef} className="binary-canvas" aria-hidden="true" />
      <div ref={cursorRef} className="cursor-glow" aria-hidden="true" />
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <header className="site-header">
        <nav className="nav-shell" aria-label="Primary navigation">
          <a className="brand" href="#hero" onClick={() => setMenuOpen(false)} aria-label="Lim Yu Heng home">
            <img src={publicAsset("yh-logo.png")} alt="" />
            <span>Lim Yu Heng</span>
          </a>
          <button
            className={`menu-toggle ${menuOpen ? "is-open" : ""}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span /><span />
          </button>
          <div className={`nav-panel ${menuOpen ? "is-open" : ""}`}>
            <ul className="nav-links">
              {navigation.map(([label, href]) => (
                <li key={href}>
                  <a
                    className={activeSection === href.slice(1) ? "active" : ""}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              className="button button-small button-outline"
              href={publicAsset("Resume.pdf")}
              target="_blank"
              rel="noreferrer"
              data-magnetic
            >
              View resume
            </a>
          </div>
        </nav>
      </header>

      <main id="main-content">
        <section id="hero" className="hero section-shell">
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow" data-reveal>Diploma in Information Technology · Malaysia</p>
            <h1 className="hero-title" data-reveal>
              I build thoughtful
              <span>digital experiences.</span>
            </h1>
            <p className="hero-intro" data-reveal>
              I&apos;m Lim Yu Heng — a Diploma in Information Technology student building mobile and academic software projects with Flutter, Supabase and PostgreSQL. I’m currently seeking an internship in software, mobile or web development.
            </p>
            <div className="hero-actions" data-reveal>
              <a className="button button-primary" href="#projects" data-magnetic>
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#about">More about me <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-meta" data-reveal>
              <div><strong>05+</strong><span>Projects built</span></div>
              <div><strong>03</strong><span>UniSmart user roles</span></div>
              <div><strong>∞</strong><span>Curiosity to learn</span></div>
            </div>
          </div>

          <div className="hero-visual" data-reveal>
            <div className="orbital orbital-large" aria-hidden="true" />
            <div className="orbital orbital-small" aria-hidden="true" />
            <div className="logo-stage">
              <div className="logo-halo" />
              <img src={publicAsset("yh-logo.png")} alt="YH personal monogram" />
              <span className="logo-coordinate coordinate-one">01° 28′ N</span>
              <span className="logo-coordinate coordinate-two">103° 45′ E</span>
            </div>
            <div className="status-chip status-top"><span />Seeking an IT Internship</div>
            <div className="status-chip status-bottom">Flutter · Software · Games</div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <span>Scroll to discover</span><i aria-hidden="true" />
          </a>
        </section>

        <section id="about" className="content-section section-shell">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">01 · About</p>
            <h2>Technology feels best when it feels human.</h2>
          </div>
          <div className="about-grid">
            <div className="about-portrait" data-reveal>
              <div className="portrait-placeholder" aria-hidden="true">
                <span>YH</span>
                <small>profile-photo.jpg</small>
              </div>
              <OptionalImage
                src={publicAsset("assets/profile/profile-photo.jpg")}
                alt="Portrait of Lim Yu Heng"
                className="portrait-image"
              />
              <div className="portrait-caption">
                <strong>Lim Yu Heng</strong>
                <span>Johor, Malaysia</span>
              </div>
            </div>
            <div className="about-main">
              <div className="about-statement glass-panel" data-reveal>
                <p>
                  I&apos;m currently pursuing a Diploma in Information Technology at
                  Raffles University. I enjoy the point where system logic, interface
                  design and real user needs meet.
                </p>
                <p>
                  My largest project, <strong>UniSmart</strong>, is a multi-role
                  university application built with Flutter and Supabase. It has
                  challenged me to design complete, dependable workflows.
                </p>
              </div>
              <div className="about-facts">
                {[
                  ["Education", "Diploma in Information Technology"],
                  ["University", "Raffles University"],
                  ["Current Goal", "IT Internship Septemper 2026-November 2026 (3month)"],
                  ["Direction", "Software · Apps · Games"],
                ].map(([label, value], index) => (
                  <article
                    className="fact-card"
                    data-reveal
                    key={label}
                    style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}
                    onMouseMove={handleTilt}
                    onMouseLeave={resetTilt}
                  >
                    <span>{label}</span><strong>{value}</strong><i aria-hidden="true">0{index + 1}</i>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="content-section section-shell">
          <div className="section-heading split-heading" data-reveal>
            <div><p className="eyebrow">02 · Capabilities</p><h2>Tools I use to move ideas forward.</h2></div>
            <p>Focused on practical foundations, connected systems and interfaces that remain clear as a product grows.</p>
          </div>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <article className="skill-row" key={skill.title} data-reveal style={{ "--delay": `${index * 80}ms` } as React.CSSProperties}>
                <span className="skill-number">{skill.number}</span>
                <div><h3>{skill.title}</h3><p>{skill.detail}</p></div>
                <ul>{skill.tools.map((tool) => <li key={tool}>{tool}</li>)}</ul>
                <span className="skill-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="content-section section-shell">
          <div className="section-heading split-heading" data-reveal>
            <div><p className="eyebrow">03 · Selected work</p><h2>Projects shaped by real problems.</h2></div>
            <p>Select a project to explore its purpose, technology and key features.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card project-${project.tone} ${index === 0 ? "project-featured" : ""}`}
                key={project.title}
                data-reveal
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
              >
                <button className="project-button" type="button" onClick={() => openProject(project)} aria-label={`View ${project.title} details`}>
                  <div className={`project-visual visual-${project.visual} ${project.visual === "hangman" ? "project-visual-wide" : "project-visual-mobile"}`}>
                    <ProjectVisual type={project.visual} />
                    <OptionalImage
                      src={project.cover}
                      alt={`${project.title} project cover`}
                      className="project-cover project-cover-backdrop"
                    />
                    <OptionalImage
                      src={project.cover}
                      alt=""
                      className="project-cover project-cover-foreground"
                    />
                  </div>
                  <div className="project-copy">
                    <p className="project-eyebrow">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <ul className="tag-list">{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                    <span className="project-open">View case study <i aria-hidden="true">↗</i></span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="journey" className="content-section section-shell">
          <div className="section-heading" data-reveal>
            <p className="eyebrow">04 · Journey</p>
            <h2>Learning by making, one system at a time.</h2>
          </div>
          <div className="timeline">
            {journey.map((item, index) => (
              <article className="timeline-item" key={item.title} data-reveal style={{ "--delay": `${index * 100}ms` } as React.CSSProperties}>
                <div className="timeline-marker"><span>{item.date}</span></div>
                <div className="timeline-copy"><h3>{item.title}</h3><p>{item.description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section id="certificates" className="content-section section-shell">
          <div className="section-heading split-heading" data-reveal>
            <div><p className="eyebrow">05 · Certifications</p><h2>Foundations beyond the classroom.</h2></div>
            <p>Verified cloud credentials and completed cybersecurity coursework.</p>
          </div>
          <div className="certificate-grid">
            {certificates.map((certificate, index) => (
              <button
                className="certificate-card"
                type="button"
                key={certificate.issuer}
                data-reveal
                style={{ "--delay": `${index * 90}ms` } as React.CSSProperties}
                onClick={() => setSelectedCertificate(certificate)}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
              >
                <span className="certificate-mark">{certificate.mark}</span>
                <span className="certificate-index">0{index + 1}</span>
                <span className="certificate-issuer">{certificate.issuer}</span>
                <strong>{certificate.title}</strong>
                <span className="certificate-action">
                  {certificate.pdf ? "View certificate" : "View coursework"}
                  <i aria-hidden="true">↗</i>
                </span>
              </button>
            ))}
          </div>
        </section>

        <section id="brand" className="content-section section-shell brand-section">
          <div className="section-heading split-heading" data-reveal>
            <div>
              <p className="eyebrow">06 · Brand identity</p>
              <h2>A visual system shaped around who I am.</h2>
            </div>
            <p>
              Explore the business card and moodboard that connect my personal
              identity, interests and direction.
            </p>
          </div>

          <div className="brand-grid">
            <article className="brand-showcase business-card-showcase" data-reveal>
              <div className="brand-showcase-heading">
                <div>
                  <span className="brand-item-number">01</span>
                  <h3>Business Card</h3>
                </div>
                <span className="interactive-badge">
                  <i aria-hidden="true">⟳</i> 360° interactive inspection
                </span>
              </div>

              <button
                className={`business-card-button ${cardDragging ? "is-dragging" : ""}`}
                type="button"
                aria-pressed={businessCardBackVisible}
                aria-label="Inspect the business card. Drag to rotate, click to flip, or use the arrow keys."
                style={
                  {
                    "--card-rotate-x": `${cardRotation.x}deg`,
                    "--card-rotate-y": `${cardRotation.y}deg`,
                  } as React.CSSProperties
                }
                onClick={handleCardClick}
                onKeyDown={handleCardKeyDown}
                onPointerDown={handleCardPointerDown}
                onPointerMove={handleCardPointerMove}
                onPointerUp={finishCardDrag}
                onPointerCancel={finishCardDrag}
              >
                <span className="business-card-inner">
                  <span className="business-card-face business-card-front">
                    <img
                      src={publicAsset("assets/brand/business-card-front.png")}
                      alt="Front of Lim Yu Heng's business card"
                    />
                    <span className="business-card-side">Front</span>
                  </span>
                  <span className="business-card-face business-card-back">
                    <img
                      src={publicAsset("assets/brand/business-card-back.png")}
                      alt="Back of Lim Yu Heng's business card"
                    />
                    <span className="business-card-side">Back</span>
                  </span>
                </span>
                <span className="flip-cue" aria-hidden="true">
                  <i>↔</i>
                  <span>Drag to rotate · click to flip</span>
                </span>
              </button>

              <div className="inspection-toolbar">
                <div className="inspection-status" aria-live="polite">
                  <span className="inspection-status-dot" />
                  Viewing {businessCardBackVisible ? "Page 2 · Back" : "Page 1 · Front"}
                </div>
                <div className="inspection-actions">
                  <button
                    type="button"
                    onClick={() =>
                      setCardRotation((rotation) => ({
                        ...rotation,
                        y: rotation.y + 180,
                      }))
                    }
                  >
                    Rotate 180°
                  </button>
                  <button type="button" onClick={() => setCardRotation({ x: 0, y: 0 })}>
                    Reset view
                  </button>
                </div>
              </div>

              <div className="brand-showcase-footer">
                <p>Mouse/touch drag: free rotation · Arrow keys: precise rotation · Home: reset.</p>
                <a href={publicAsset("assets/brand/business-card.pdf")} target="_blank" rel="noreferrer">
                  Open Business Card PDF ↗
                </a>
              </div>
            </article>

            <article className="brand-showcase moodboard-showcase" data-reveal>
              <div className="brand-showcase-heading">
                <div>
                  <span className="brand-item-number">02</span>
                  <h3>Moodboard</h3>
                </div>
                <div className="moodboard-tabs" role="tablist" aria-label="Moodboard pages">
                  <button
                    className={moodboardPage === 0 ? "is-active" : ""}
                    type="button"
                    role="tab"
                    aria-selected={moodboardPage === 0}
                    onClick={() => setMoodboardPage(0)}
                  >
                    01 · Moodboard
                  </button>
                  <button
                    className={moodboardPage === 1 ? "is-active" : ""}
                    type="button"
                    role="tab"
                    aria-selected={moodboardPage === 1}
                    onClick={() => setMoodboardPage(1)}
                  >
                    02 · Mind map
                  </button>
                </div>
              </div>

              <div className="moodboard-stage" role="tabpanel">
                <img
                  key={moodboardPage}
                  src={publicAsset(
                    moodboardPage === 0
                      ? "assets/brand/moodboard-personality.png"
                      : "assets/brand/moodboard-mind-map.png",
                  )}
                  alt={
                    moodboardPage === 0
                      ? "Lim Yu Heng's personal moodboard"
                      : "Lim Yu Heng's personal mind map"
                  }
                />
                <span className="moodboard-page">
                  {String(moodboardPage + 1).padStart(2, "0")} / 02
                </span>
              </div>

              <div className="brand-showcase-footer">
                <p>Switch between the original moodboard and its structured mind map.</p>
                <a
                  href={publicAsset("assets/brand/moodboard.pdf")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open Moodboard PDF ↗
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="resume-section section-shell" aria-labelledby="resume-title">
          <div className="resume-card" data-reveal>
            <div className="gear-wrap" aria-hidden="true"><div className="gear" /><span>Hold</span></div>
            <div>
              <p className="eyebrow">Available for the next challenge</p>
              <h2 id="resume-title">Let&apos;s build something useful.</h2>
              <p>I&apos;m interested in software engineering, application development and opportunities that reward thoughtful problem solving.</p>
            </div>
            <a
              className="button button-primary"
              href={publicAsset("Resume.pdf")}
              target="_blank"
              rel="noreferrer"
              data-magnetic
            >
              View my resume <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section id="contact" className="content-section section-shell">
          <div className="contact-grid">
            <div className="contact-copy" data-reveal>
              <p className="eyebrow">07 · Contact</p>
              <h2>Have an idea or opportunity?</h2>
              <p>Tell me what you&apos;re working on. I&apos;m always happy to discuss software, mobile applications and new things worth learning.</p>
              <a href="mailto:yuhenglim99@gmail.com">yuhenglim99@gmail.com</a>
              <a
                className="social-link"
                href="https://github.com/yuheng97-0930"
                target="_blank"
                rel="noreferrer"
              >
                github.com/yuheng97-0930 ↗
              </a>
              <a
                className="social-link"
                href="https://www.linkedin.com/in/lim-yu-heng-969546427"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/lim-yu-heng-969546427 ↗
              </a>

              <span>Johor, Malaysia · GMT+8</span>
            </div>
            {contactState.succeeded ? (
              <div className="contact-success glass-panel">
                <span className="contact-success-icon" aria-hidden="true">✓</span>
                <h3>Message sent successfully.</h3>
                <p>
                  Thank you for contacting me. I will reply through the email
                  address you provided.
                </p>
                <button
                  className="button button-outline"
                  type="button"
                  onClick={resetContact}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form glass-panel" onSubmit={submitContact} data-reveal>
                <label>
                  <span>Your name</span>
                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="How should I address you?"
                    maxLength={100}
                    required
                  />
                </label>
                <ValidationError prefix="Name" field="name" errors={contactState.errors} />

                <label>
                  <span>Email address</span>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    maxLength={150}
                    required
                  />
                </label>
                <ValidationError prefix="Email" field="email" errors={contactState.errors} />

                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell me a little about your idea..."
                    minLength={10}
                    maxLength={2000}
                    required
                  />
                </label>
                <ValidationError prefix="Message" field="message" errors={contactState.errors} />

                <div className="form-footer">
                  <p aria-live="polite">
                    {contactState.submitting
                      ? "Sending your message..."
                      : "Your details will only be used to reply to this message."}
                  </p>
                  <button
                    className="button button-primary"
                    type="submit"
                    disabled={contactState.submitting}
                    data-magnetic
                  >
                    {contactState.submitting ? "Sending..." : "Send message"}
                    <span aria-hidden="true">↗</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="brand footer-brand" href="#hero"><img src={publicAsset("yh-logo.png")} alt="" /><span>Lim Yu Heng</span></a>
        <p>Designed and built with curiosity, code and a little ocean calm.</p>
        <div>
          <span>© {new Date().getFullYear()} Lim Yu Heng</span>
          <a href="https://github.com/yuheng97-0930" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="#hero">Back to top ↑</a>
        </div>
      </footer>

      {selectedProject && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.currentTarget === event.target) setSelectedProject(null);
        }}>
          <article className="detail-modal" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
            <button className="modal-close" type="button" aria-label="Close project details" onClick={() => setSelectedProject(null)}>×</button>
            <p className="eyebrow">{selectedProject.eyebrow}</p>
            <h2 id="project-dialog-title">{selectedProject.title}</h2>
            <p>{selectedProject.longDescription}</p>
            <div className="project-gallery" aria-label={`${selectedProject.title} screenshot gallery`}>
              <div className="gallery-stage">
                {projectImages.length > 1 && (
                  <button
                    className="gallery-control gallery-previous"
                    type="button"
                    aria-label="Show previous screenshot"
                    onClick={() => changeGalleryImage(-1)}
                  >
                    ←
                  </button>
                )}
                <OptionalImage
                  key={projectImages[galleryIndex]}
                  src={projectImages[galleryIndex]}
                  alt={`${selectedProject.title} screenshot ${galleryIndex + 1}`}
                  className={`gallery-image ${isWideImage(projectImages[galleryIndex]) ? "gallery-image-wide" : "gallery-image-mobile"}`}
                />
                {projectImages.length > 1 && (
                  <button
                    className="gallery-control gallery-next"
                    type="button"
                    aria-label="Show next screenshot"
                    onClick={() => changeGalleryImage(1)}
                  >
                    →
                  </button>
                )}
                <span className="gallery-counter">
                  {String(galleryIndex + 1).padStart(2, "0")} / {String(projectImages.length).padStart(2, "0")}
                </span>
              </div>
              <div className="gallery-toolbar">
                <div className="gallery-thumbnails" role="tablist" aria-label="Choose a screenshot">
                  {projectImages.map((image, index) => (
                    <button
                      className={`gallery-thumbnail ${galleryIndex === index ? "is-active" : ""}`}
                      type="button"
                      role="tab"
                      aria-selected={galleryIndex === index}
                      aria-label={`Show screenshot ${index + 1}`}
                      key={image}
                      onClick={() => setGalleryIndex(index)}
                    >
                      <OptionalImage
                        src={image}
                        alt=""
                        className="gallery-thumbnail-image"
                      />
                    </button>
                  ))}
                </div>
                <a
                  className="gallery-open"
                  href={projectImages[galleryIndex]}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open full image ↗
                </a>
              </div>
              <p className="gallery-hint">Use the arrows, thumbnails, or keyboard arrow keys.</p>
            </div>
            <h3>Key features</h3>
            <ul className="feature-list">{selectedProject.features.map((feature) => <li key={feature}><span aria-hidden="true">01</span>{feature}</li>)}</ul>
            <ul className="tag-list">{selectedProject.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
          </article>
        </div>
      )}

      {selectedCertificate && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => {
          if (event.currentTarget === event.target) setSelectedCertificate(null);
        }}>
          <article className="detail-modal certificate-modal" role="dialog" aria-modal="true" aria-labelledby="certificate-dialog-title">
            <button className="modal-close" type="button" aria-label="Close certificate details" onClick={() => setSelectedCertificate(null)}>×</button>
            <span className="certificate-mark">{selectedCertificate.mark}</span>
            <p className="eyebrow">{selectedCertificate.issuer}</p>
            <h2 id="certificate-dialog-title">{selectedCertificate.title}</h2>
            <p>{selectedCertificate.description}</p>
            {selectedCertificate.coursework && (
              <ul className="coursework-list">
                {selectedCertificate.coursework.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            )}
            {selectedCertificate.pdf && (
              <a
                className="button button-primary certificate-link"
                href={selectedCertificate.pdf}
                target="_blank"
                rel="noreferrer"
              >
                Open certificate PDF <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        </div>
      )}
    </>
  );
}

function ProjectVisual({ type }: { type: string }) {
  if (type === "uni") {
    return (
      <div className="mock-phone">
        <div className="mock-phone-bar" />
        <div className="mock-greeting">Good morning, Yu Heng</div>
        <div className="mock-focus"><span>Next class</span><strong>Mobile Application Development</strong><small>10:00 · Lab 03</small></div>
        <div className="mock-grid"><i /><i /><i /><i /></div>
      </div>
    );
  }
  if (type === "campus") {
    return (
      <div className="campus-map">
        <span className="map-road road-one" /><span className="map-road road-two" /><span className="map-pin">●</span>
        <div className="map-card"><small>CampusGo MY</small><strong>Explore your campus</strong></div>
      </div>
    );
  }
  if (type === "rover") {
    return (
      <div className="rover-ui">
        <div className="sensor-card"><small>Temperature</small><strong>26.4°</strong></div>
        <div className="sensor-card"><small>Air status</small><strong>Safe</strong></div>
        <div className="rover-controls"><span>↑</span><span>←</span><span>■</span><span>→</span></div>
      </div>
    );
  }
  return (
    <div className="terminal-ui">
      <div className="terminal-bar"><i /><i /><i /></div>
      <p>&gt; START_GAME</p><strong>H _ N G M A N</strong><span>Attempts remaining: 04</span><em>_</em>
    </div>
  );
}

function OptionalImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className: string;
}) {
  const [missing, setMissing] = useState(false);
  if (missing) return null;
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setMissing(true)}
    />
  );
}

function isWideImage(src: string) {
  return src.includes("hangman") || src.includes("iot-rover-hardware");
}
