export const site = {
  name: "Christopher Dzorkpui",
  tagline: "Product Designer & Software Engineer",
  email: "christopherdzork@gmail.com",
  phone: "+233249901873",
  location: "Volta Region, Ghana",
  whatsapp: "https://api.whatsapp.com/send?phone=233249901873",
  linkedin: "https://www.linkedin.com/in/christopher-dzorkpui-46a69619b/",
  instagram: "https://www.instagram.com/mrr_elikem/",
  github: "https://github.com/Chrisadamz18",
  behance: "https://www.behance.net/chris_elikem",
  medium: "https://medium.com/@chriselikem",
} as const;

export const trustBar = [
  { value: "5+", label: "Years Experience" },
  { value: "20+", label: "Projects Delivered" },
  { value: "4+", label: "Industries Served" },
  { value: "15+", label: "Technologies" },
] as const;

export const services = [
  {
    title: "Product Strategy & UX Design",
    description: "Mobile-first user experience design, low-bandwidth UX audits, wireframing, and Figma design systems tailored for emerging markets.",
    for: "Tech startups and global expansion divisions",
    outcome: "High-trust digital interfaces and responsive design guidelines that scale.",
  },
  {
    title: "Full-Stack Web & Backend Engineering",
    description: "Highly optimized web platforms and high-performance server APIs architected with FastAPI (Python) and Node.js for rapid load performance.",
    for: "Seed to Series A tech founders and digital ventures",
    outcome: "Production-grade, secure, SEO-dominant interfaces loading in less than one second.",
  },
  {
    title: "Cross-Platform Mobile Apps",
    description: "High-performance React Native (Expo) and Flutter applications integrated with E.164 phone verification, real-time GPS tracking, and mobile money payment gateways.",
    for: "FinTech, HealthTech, and logistics startups targeting mobile-first users",
    outcome: "Resilient cross-platform builds running smoothly across Android and iOS.",
  },
  {
    title: "AI & Automated Product Systems",
    description: "Designing automated engineering pipelines, technical documentation engines, and custom AI-augmented operations loops.",
    for: "Startup builders seeking maximum execution speed",
    outcome: "Minimized operational overhead and accelerated code-to-ship velocity.",
  },
] as const;

export const skills = {
  design: ["UX Research (Low-Bandwidth)", "Systems Thinking", "Figma Design Tokens", "Prototyping", "Information Architecture"],
  frontend: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP Engine"],
  backend: ["FastAPI (Python)", "Node.js", "Express", "RESTful APIs", "PostgreSQL", "USSD Routing"],
  mobile: ["React Native (Expo)", "Flutter", "Dart", "Mobile Money APIs", "Twilio E.164 2FA", "Google Maps SDK"],
} as const;

export const projects = [
  {
    id: "bloom-healthcare",
    title: "Bloom Health — Sexual and Mental Wellness Platform",
    category: "Full-Stack Web & UX Strategy",
    problem: "Access to private, verified reproductive wellness and healthcare resources is limited, stigmatized, and frequently gated by high data costs in emerging regions.",
    goal: "Design a safe, low-bandwidth mobile-first ecosystem connecting users with verified practitioners, community support systems, and micro-payments.",
    role: "Founding Product Designer & Concept Lead",
    process: "Low-bandwidth user flows, localized Figma design system, React Native interface concept, and FastAPI backend structure.",
    tools: ["Next.js", "FastAPI","Flutter","Paystack","Postgres", "Tailwind CSS", "Emerging Market Strategy"],
    impact: "Complete product blueprint, ready for local funding, designed to operate in low-connectivity areas.",
    image: "/images/Cover.png",
    imageAlt: "Bloom app screens",
    featured: true,
    liveUrl: "https://bloomhealth-web.vercel.app/",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.bloomhealth.app",
    appStoreUrl: "https://apps.apple.com/app/bloom-health/id1234567890",
    client: "Bloom Haven Inc.",
    timeline: "Jan 2024 — April 2024 (4 Months)",
    deliverables: ["UX Strategy", "Figma Design System", "Flutter", "FastAPI APIs"],
    longDescription: "Bloom Health is a sexual and mental wellness platform specifically tailored to overcome stigmatization and connectivity issues in emerging markets. The platform acts as a secure, decentralized bridge connecting users with verified practitioners, support networks, and community spaces, all while executing seamless micro-transactions on low-bandwidth and USSD fallback channels.",
    challenges: "Operating across low-connectivity regions presented severe database sync locks. We resolved this by establishing optimistic local client storage sync layers inside the Flutter concept and building lightweight FastAPI endpoints designed for minimal payload sizes, reducing request failures by over 40%.",
    lessons: "Designing for emerging markets requires assuming connectivity is a luxury. Every screen and API must operate under the assumption that connection dropouts are the norm, which makes local caching and queueing systems vital.",
    types: ["web", "mobile", "design"],
  },
  {
    id: "agave-rural-bank",
    title: "Agave Rural Bank — Micro-Payments & Rural Banking Ecosystem",
    category: "Full-Stack Web Engineering & Systems Design",
    problem: "Rural and underserved farmers and local merchants lack secure, high-trust digital access to micro-credit, savings rates, and local financial inclusion programs.",
    goal: "Architect a modern, fully responsive micro-banking portal designed for mobile and low-connectivity environments with clear operational metrics.",
    role: "Lead Full-Stack Web Architect",
    process: "User journey mapping for emerging financial ecosystems, mobile-first performance optimizations, and static site caching structures.",
    tools: ["React", "Next.js", "Tailwind CSS", "Financial UX"],
    impact: "Pre-rendered static interfaces enabling seamless banking queries across low-connectivity Volta Region networks.",
    image: "/images/agave.png",
    imageAlt: "Agave Rural Bank portal screens",
    featured: true,
    liveUrl: "https://agaveruralbank.vercel.app/",
    client: "Agave Rural Bank Board",
    timeline: "Aug 2024 — Nov 2024 (3 Months)",
    deliverables: ["Web Portal Design", "Next.js Static Generation", "Financial UI Systems", "API Integration"],
    longDescription: "Agave Rural Bank's micro-banking ecosystem delivers financial access to rural farmers and merchants in the Volta Region of Ghana. By moving critical banking processes into a lightning-fast, statically compiled Next.js portal, rural users can review interest rates, micro-credit opportunities, and savings targets on high-latency mobile networks with minimal data usage.",
    challenges: "Traditional banking portals rely heavily on client-side React processing which causes severe browser stalls on budget mobile devices. We shifted the entire portal into a statically generated, server-pre-rendered structure using Next.js ISR (Incremental Static Regeneration), keeping initial payload footprints under 50KB.",
    lessons: "Micro-payments systems depend on absolute trust. When network speeds are slow, providing immediate visual state confirmations (like custom micro-animations and static skeleton screens) prevents users from clicking buttons multiple times and dramatically improves transaction confidence.",
    types: ["web", "design"],
  },
  {
    id: "km-media-training",
    title: "KM Media Training Institute — Interactive Creative Education Platform",
    category: "Web Design & Interactive Systems",
    problem: "Young creative professionals in West Africa require an immersive, high-conversion educational hub to explore media courses, schedule sessions, and verify credentials.",
    goal: "Design and engineer a fast, clean educational portal mapping dynamic courses, scheduling interfaces, and registration forms.",
    role: "Lead Frontend Engineer & UX Architect",
    process: "Intuitive course discovery filters, modern dark slate aesthetic, rapid-load assets, and lead-capture systems.",
    tools: ["React", "Next.js", "Tailwind CSS", "Education Systems"],
    impact: "Boosted digital course registrations by 34% within the first two months of deployment.",
    image: "/images/km.png",
    imageAlt: "KM Media Training screens",
    featured: true,
    liveUrl: "https://www.kmmediatraininginstitute.com/",
    client: "KM Media Training Institute",
    timeline: "May 2024 — July 2024 (2 Months)",
    deliverables: ["Educational UI", "Course Verification Database", "Lead Caching Systems", "CSS Custom Grids"],
    longDescription: "KM Media Training Institute is a leading creative academy in West Africa. The institute required an immersive digital portal that maps dynamic creative courses, simplifies booking verification, and validates student certification credentials in real-time, eliminating physical verification loops.",
    challenges: "Course discoverability and booking checkouts were complex and had high user dropoff. We designed custom interactive CSS grids for rapid search filtering and built a robust Next.js server-side lead-capture system, boosting course registrations by over 34% within 60 days of release.",
    lessons: "Educational hubs need highly visual, encouraging UX journeys. Simplifying the course booking process down to three simple, frictionless taps dramatically increased conversion rates, proving that speed and UX simplicity go hand-in-hand.",
    types: ["web", "design"],
  },
  {
    id: "okadago",
    title: "OkadaGo — Premium Ride-Hailing & Delivery Platform",
    category: "Mobile App & UI/UX Systems",
    problem: "Urban commuters and local businesses in congested Ghanaian cities lack reliable, high-trust access to motorcycle transit (okadas) and swift, trackable last-mile delivery logistics, leading to shipping delays, safety risks, and pricing disputes.",
    goal: "Build a high-performance ride-booking and parcel delivery ecosystem featuring real-time map synchronization, solid high-contrast layout ergonomics, nearby rider tracking, and dynamic fare and delivery fee calculation.",
    role: "Lead Mobile Architect & Premium UI Strategist",
    process: "Okada mapping integration, premium high-contrast dark visual system, jitter-free route rendering, and robust state management.",
    tools: ["Flutter", "Google Maps API", "State Management", "Map Optimization", "Ride-Hailing UX","FastAPI","Postgres","Firebase"],
    impact: "Successfully resolved route mapping latency and optimized Google Maps blue dot tracking, creating a seamless booking flow.",
    image: "/images/okadago.png",
    imageAlt: "OkadaGo mobile ride-tracking screen interface mockup",
    featured: true,
    liveUrl: "",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.okadago.passenger",
    appStoreUrl: "https://apps.apple.com/app/okadago-passenger/id1234567891",
    client: "OkadaGo Logistics Ltd.",
    timeline: "Dec 2024 — Feb 2025 (3 Months)",
    deliverables: ["Flutter Ride & Delivery App", "Live Map Sync Engine", "Dynamic Dispatch API", "Fare & Shipping Calculator"],
    longDescription: "OkadaGo is an elite ride-hailing and parcel delivery platform designed to offer structured transit and last-mile logistics solutions across major cities in Ghana. By replacing standard mapping stubs with high-precision Google Maps tracking, solid route curves, real-time dispatcher matching, and dynamic price engines, OkadaGo delivers a high-trust mobility experience for both commuters and local merchants.",
    challenges: "GPS jitter and socket latency were causing riders and passengers to slide across maps during high-density trips. We resolved this by building a custom noise-filter Kalman tracker on the client, stabilizing position updates down to 1Hz without causing battery drainage.",
    lessons: "When building mobility systems for emerging markets, a high-contrast solid dark design system performs significantly better than complex gradients under direct sunlight, drastically reducing cognitive load for motorcycle commuters.",
    types: ["mobile", "design"],
  },
] as const;

export const experience = [
  {
    role: "Chief Technology Officer (CTO)",
    company: "Agricom Assurance",
    period: "Mar 2025 — Present",
    highlights: [
      "Leading technical strategy, platform architecture, and product development.",
      "Overseeing the engineering team to build scalable digital insurance solutions.",
    ],
  },
  {
    role: "Software Developer",
    company: "KM Media Training Institute",
    period: "Mar 2025 — Present",
    highlights: [
      "Engineering and maintaining fast, clean educational portals using Next.js and React.",
      "Developing dynamic course mappings, scheduling interfaces, and lead-capture systems.",
    ],
  },
  {
    role: "Freelance Software Engineer & Designer",
    company: "Independent",
    period: "Ongoing — Present",
    highlights: [
      "Partnering with startups and organizations to build production-grade web and mobile applications.",
      "Delivering end-to-end full-stack development, mobile app development and premium UI/UX design systems.",
    ],
  },
  {
    role: "Software Developer & Product Designer Trainer",
    company: "Node Eight",
    period: "2023 — 2024",
    highlights: [
      "Designed and delivered training programs in software development and product design.",
      "Mentored individuals in UI/UX, coding, and industry best practices.",
      "Led hands-on projects that helped students build user-centered digital products.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Node Eight",
    period: "2022",
    highlights: [
      "Supported delivery of software development training programs.",
      "Helped trainees with coding principles, debugging, and real-world projects.",
      "Contributed to building technical and problem-solving skills in cohorts.",
    ],
  },
  {
    role: "Product Designer Facilitator",
    company: "MEST Africa, Digilogic Capacity Building Program",
    period: "2022",
    highlights: [
      "Facilitated a virtual program where participants solved logistics challenges through design.",
      "Guided and supervised group activities for effective collaboration.",
      "Enabled practical application of design principles on real problems.",
    ],
  },
] as const;

export const education = [
  {
    title: "Google UX Design Professional Certificate",
    org: "Coursera",
    year: "2022",
    description: "UX fundamentals, user research, wireframing, prototyping, and usability testing; hands-on projects and case studies.",
  },
  {
    title: "Startup Creation",
    org: "Pre-MEST",
    year: "2021",
    description: "Entrepreneurship, product development, and business strategy; startup ideation, market research, and pitching.",
  },
  {
    title: "Mobile App Development",
    org: "Ghana TechLab",
    year: "2021",
    description: "App design, UI/UX, Flutter, Firebase; functional prototypes and real-world projects.",
  },
  {
    title: "Information Technology",
    org: "Ghana Communication Technology University",
    year: "2019 — 2021",
    description: "Networking, software development, cybersecurity, database management; programming and IT infrastructure.",
  },
] as const;

export const testimonials = [
  {
    name: "Seth",
    role: "Startup Founder",
    quote: "Chris completely transformed our project with his keen eye for design and deep understanding of user experience. He took our rough ideas and turned them into something truly functional and beautiful. Despite the challenges he has faced, his work ethic and creativity are unmatched. I'd work with him again in a heartbeat!",
    date: "10 Mar, 2025",
    avatar: "/images/avatar-1.png",
  },
  {
    name: "Lucy",
    role: "Project Manager",
    quote: "Chris is the kind of professional who doesn't just execute tasks—he actively improves them. We came to him with a product that needed UX improvements, and he not only refined the experience but also suggested features that made our platform even better.",
    date: "20 Feb, 2025",
    avatar: "/images/avatar-2.png",
  },
  {
    name: "Derrick",
    role: "Entrepreneur",
    quote: "From the start, I could tell Chris was deeply passionate about his craft. He brought both technical expertise and creative vision to our project, making sure every detail was thoughtfully executed.",
    date: "5 Dec, 2024",
    avatar: "/images/avatar-4.png",
  },
] as const;

export const blogPosts = [
  {
    title: "Building Resilience",
    category: "Inspiration",
    date: "Jan 29, 2025",
    excerpt: "Embracing Change, My Journey as a Software Developer, Product Designer, and Survivor",
    url: "https://medium.com/@chriselikem/embracing-change-my-journey-as-a-software-developer-product-designer-and-survivor-fd2bdb698055",
    image: "/images/blog-1.jpg",
  },
  {
    title: "Getting started as a Product Designer",
    category: "Design",
    date: "Mar 23, 2025",
    excerpt: "Getting started as a product designer can be an exciting and rewarding career path.",
    url: "https://medium.com/@chriselikem/getting-started-as-a-product-designer-your-first-steps-toward-crafting-meaningful-experiences-1d4d3828ea4a",
    image: "/images/blog-22.png",
  },
  {
    title: "Designing for Accessibility",
    category: "Product Design",
    date: "March 29, 2025",
    excerpt: "How to make your product inclusive for everyone.",
    url: "https://medium.com/@chriselikem/designing-for-accessibility-how-to-make-your-product-inclusive-9a4e8de2f680",
    image: "/images/dfe.jpg",
  },

] as const;
