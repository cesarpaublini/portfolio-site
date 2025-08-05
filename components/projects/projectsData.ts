// components/projects/projectsData.ts

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  tools: string[];
  githubUrl?: string;
  liveUrl?: string;
  videos?: string[];
}

export const projects: Project[] = [
  {
    id: "0",
    title: "Fitzen Studios Summer Campaign",
    subtitle: "Creative Direction, Design & Video Editing",
    description: "Seasonal promo campaign for a yoga & wellness studio including social content, flyer design, and a branded video to drive memberships.",
    fullDescription: `
<p><strong>Fitzen Studios Summer Campaign</strong></p>
<p><strong>Role:</strong> Creative Direction, Design & Video Editing<br/>
<strong>Type:</strong> Seasonal Promotional Campaign for Wellness Brand</p>
<p><strong>Project Overview</strong></p>
<p>Designed and executed a full summer campaign for Fitzen Studios to promote a 90-day unlimited access offer. I followed brand guidelines and delivered a consistent visual experience across Instagram, in-studio flyers, and digital platforms.</p>
<p><strong>My Contributions</strong></p>
<ul>
  <li>Social media story and feed posts</li>
  <li>Print-ready flyers</li>
  <li>Studio class schedules</li>
  <li>AI-assisted promo video using Google VEO + Premiere Pro</li>
</ul>
<p><strong>Creative Strategy</strong></p>
<p>The goal was to drive urgency while keeping the tone calm, clean, and aligned with the studio's wellness values. I handled the full creative direction, layout design, video editing, and messaging strategy.</p>
`,
    image: "/images/projects/fitzen-portfolio-1.png",
    images: [
      "/images/projects/fitzen-portfolio-1.png",
      "/images/projects/fitzen-portfolio-2.png",
      "/images/projects/fitzen-portfolio-3.png",
      "/images/projects/fitzen-portfolio-4.png"
    ],
    tools: ["Figma", "Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Google VEO"],
    githubUrl: undefined,
    liveUrl: undefined,
    videos: ["/images/projects/fitzen-video.mp4"]
  },
  {
    id: "1",
    title: "Event Transportation Lead Gen Platform",
    subtitle: "Developer, Product Manager, SEO Strategist, UI/UX",
    description: "RentATrolley.com is a nationwide event transportation platform created to simplify trolley/bus rentals across 90+ U.S. cities. The platform lets users request quotes and get pricing in under 30 seconds connecting them with our vetted network of trolley operators for weddings, corporate events, parties, and more.",
    fullDescription: `
<p><strong>Project Overview</strong><br/>
RentATrolley.com is a nationwide event transportation platform created to simplify trolley/bus rentals across 90+ U.S. cities. The platform lets users request quotes and get pricing in under 30 seconds connecting them with our vetted network of trolley operators for weddings, corporate events, parties, and more.</p>
<p>I led the entire product from vision to MVP, focusing on creating a fast, scalable, and SEO-driven lead generation tool with modern UX.</p>
<p><strong>Product & Architecture</strong></p>
<ul>
  <li>Defined the business model and UX flows</li>
  <li>Designed the platform to operate as a nationwide broker (Airbnb-style)</li>
  <li>Created scalable quote-to-lead infrastructure</li>
</ul>
<p><strong>SEO & Content Strategy</strong></p>
<ul>
  <li>Developed and deployed 100+ SEO-focused city pages using dynamic routing</li>
  <li>Wrote all landing page copy targeting high-conversion keywords</li>
  <li>Built an internal linking structure, added meta tags, and submitted a full XML sitemap</li>
  <li>Backlink strategy and implemented early blog planning</li>
</ul>
<p><strong>UI/UX & Frontend</strong></p>
<ul>
  <li>Created the homepage, quote form layout, and city page wireframes</li>
  <li>Styled and implemented responsive components using Tailwind CSS</li>
  <li>Contributed directly to frontend code (Next.js/React)</li>
  <li>Refined interactions and mobile responsiveness</li>
  <li>Personally sourced, edited, and optimized all key images and UI media</li>
</ul>
<p><strong>Integrations & Backend Support</strong></p>
<ul>
  <li>Connected the quote form to Supabase for lead storage</li>
  <li>Set up Stripe integration (WIP) for future payment processing</li>
  <li>Enabled email and WhatsApp automation to deliver quotes instantly</li>
</ul>
<p><strong>Team Leadership & Dev Management</strong></p>
<ul>
  <li>Led a 3-person team: oversaw development, design reviews, and QA</li>
  <li>Managed workflow in Notion, Slack, and GitHub (feature → dev → main branching)</li>
  <li>Held weekly sprint calls and deployed via Vercel</li>
</ul>
<p><strong>Outcomes</strong></p>
<ul>
  <li>MVP launched May 2025 — first leads came in from Dallas, Sarasota, West Palm Beach, Miami and North Carolina.</li>
  <li>Platform now supports quotes in 90+ cities</li>
  <li>Scalable lead-gen model that's SEO-driven and mobile-first</li>
  <li>Built foundation for admin tools and partner portals (in progress)</li>
</ul>
`,
    image: "/images/projects/Rentatrolley-001-thumbnail.jpg",
    images: [
      "/images/projects/rentatrolley-home-page.jpg",
      "/images/projects/rentatrolley-featured-cities.jpg",
      "/images/projects/rentatrolley-experiences.jpg"
    ],
    tools: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "Vercel"],
    githubUrl: undefined,
    liveUrl: "https://rentatrolley.com/",
    videos: undefined
  },
  {
    id: "2",
    title: "Virgin Voyages Content Series",
    subtitle: "Creative production project",
    description: "Filmed, edited, and directed social media videos for destinations, promos, onboard activities, and a 2023 ad campaign BTS.",
    fullDescription: `
<p><strong>Virgin Voyages Social Media Content Series</strong></p>
<p><strong>Role:</strong> Filmmaker, Video Editor, Art Director, Graphic Designer<br/>
<strong>Type:</strong> Creative Production for Luxury Travel Brand</p>
<p><strong>Project Overview</strong></p>
<p>Partnered with Virgin Voyages, a leading luxury cruise line, to conceptualize and produce a dynamic suite of video content for their social media platforms. The project included a wide range of deliverables designed to elevate their digital presence, engage their audience, and support upcoming campaigns and launches.</p>
<p><strong>My Contributions</strong></p>
<ul>
  <li><strong>Filming & Editing:</strong> Captured and edited short-form content across various destinations and onboard experiences, optimized for platforms like Instagram, TikTok, and YouTube Shorts.</li>
  <li><strong>Campaign Videos:</strong> Produced promotional videos announcing upcoming deals and seasonal offers blending motion graphics, typography, and footage into high-converting assets.</li>
  <li><strong>Lifestyle & Destination Showcases:</strong> Created visual stories highlighting Virgin's port cities, onboard activities, fine dining, and entertainment experiences.</li>
  <li><strong>Behind-the-Scenes (BTS):</strong> Directed and edited BTS content for their 2023 national commercial, giving followers an exclusive look at the production process.</li>
  <li><strong>Art Direction & Graphics:</strong> Managed overall visual style, brand alignment, and graphic design ensuring consistency with Virgin's voice and aesthetic across all deliverables.</li>
</ul>
<p><strong>Outcome</strong></p>
<p>The content helped boost Virgin Voyages' social engagement and aligned with major marketing pushes during 2023. The videos were featured across their official platforms and used for digital ads, promotional reels, and internal creative assets.</p>
`,
    image: "/images/projects/virgin-voyages-thumbnail.jpg",
    images: ["/images/projects/virgin-voyages-thumbnail.jpg"],
    tools: ["Video Editing", "Filming", "Art Direction", "Graphic Design", "Motion Graphics"],
    githubUrl: undefined,
    liveUrl: undefined,
    videos: [
      "/images/projects/virgin-announcement.mp4",
      "/images/projects/virgin-behind-the-scenes.mp4",
      "/images/projects/virgin-birthday.mp4",
      "/images/projects/virgin-giveaway-01.mp4",
      "/images/projects/virgin-multiple-destinations.mp4"
    ]
  },
  {
    id: "3",
    title: "Cleer Product Photography & Web Content",
    subtitle: "Art Director, Photographer, Retoucher, Web-Image Optimizer",
    description: "Premium audio brand, to refresh visual assets for two flagship products active-noise-cancelling headphones and smart-amp earbuds. My goal was to create a versatile image library that could drop straight into product pages, hero banners, emails, and social ads without impacting load speed or brand consistency.",
    fullDescription: `
<p><strong>Cleer Product Photography & Web Content</strong></p>
<p><strong>Role:</strong> Art Director, Photographer, Retoucher, Web-Image Optimizer<br/>
<strong>Type:</strong> E-commerce & Lifestyle Photo Production</p>
<p><strong>Project Overview</strong></p>
<p>Premium audio brand, to refresh visual assets for two flagship products active-noise-cancelling headphones and smart-amp earbuds. My goal was to create a versatile image library that could drop straight into product pages, hero banners, emails, and social ads without impacting load speed or brand consistency.</p>
<p><strong>My Contributions</strong></p>
<ul>
  <li><strong>Concept & Shot-List:</strong> Defined five lifestyle scenarios (commute, desk, city stroll, bag-drop, hero close-up), story-boarding angles, props, and color palette to match Cleer's brushed-aluminum aesthetic.</li>
  <li><strong>Production & Direction:</strong> Scouted urban + greenery locations, directed talent for a natural "on-the-go" vibe, and lit scenes for soft, crisp highlights on metallic finishes.</li>
  <li><strong>Photography:</strong> Captured high-resolution stills on Sony α7 IV with prime lenses, bracketing exposures to preserve texture and logo detail.</li>
  <li><strong>Post-Production:</strong> Color-graded in Lightroom, retouched in Photoshop, composited subtle reflections, and exported multiple aspect ratios</li>
</ul>
<p><strong>Outcome</strong></p>
<p>Delivered 40+ hi-res assets in a single, DAM-ready package. Cleer saw increase in product-page dwell time and re-used the imagery across email, Amazon A+, and paid ads with zero additional edits.</p>
`,
    image: "/images/projects/cleer-photo-1.webp",
    images: [
      "/images/projects/cleer-photo-1.webp",
      "/images/projects/cleer-photo-2.webp",
      "/images/projects/cleer-photo-3.webp",
      "/images/projects/cleer-photo-4.webp"
    ],
    tools: ["Photography", "Art Direction", "Retouching", "Lightroom", "Photoshop"],
    githubUrl: undefined,
    liveUrl: undefined,
    videos: undefined
  },
  {
    id: "4",
    title: "RumbaToursMiami.com – Booking Website Redesign",
    subtitle: "Founder, Product Designer, UI/UX Lead, Junior Frontend Developer",
    description: "RumbaToursMiami.com is the official booking site for Miami's #1 open-air party bus. I led the complete redesign and rebuild of the website to increase online bookings, improve mobile usability, and elevate the brand's visual identity. The new site features a smooth, scroll-driven layout with embedded video, high-impact CTA buttons, and a responsive booking form that calculates pricing in real time.",
    fullDescription: `
<p><strong>RumbaToursMiami.com – Booking Website Redesign</strong></p>
<p><strong>Role:</strong> Founder, Product Designer, UI/UX Lead, Junior Frontend Developer<br/>
<strong>Type:</strong> Direct-to-Consumer Booking Platform for Event Transportation</p>
<p><strong>Project Overview</strong></p>
<p>RumbaToursMiami.com is the official booking site for Miami's #1 open-air party bus. I led the complete redesign and rebuild of the website to increase online bookings, improve mobile usability, and elevate the brand's visual identity. The new site features a smooth, scroll-driven layout with embedded video, high-impact CTA buttons, and a responsive booking form that calculates pricing in real time.</p>
<p><strong>My Contributions</strong></p>
<ul>
  <li><strong>Product Strategy:</strong> Defined key user flows, pricing logic, and funnel structure. Prioritized mobile-first speed and simplicity to reduce drop-off and improve conversion.</li>
  <li><strong>UI/UX Design:</strong> Designed the full site in Figma and implemented core layouts using Next.js and Tailwind. Built a sticky booking card with slide-up animation on mobile for easy access.</li>
  <li><strong>Frontend Development:</strong> Worked closely with the dev team to build reusable components, integrate Google Maps Distance Matrix for geo-based travel fees, and embed a Stripe-ready checkout form.</li>
  <li><strong>Media & Content:</strong> Shot and edited promotional video and tour images, wrote all marketing copy and CTAs, and structured SEO-optimized text sections.</li>
  <li><strong>Performance Optimization:</strong> Achieved a 90+ Lighthouse mobile score, compressed all video and image assets, and implemented lazy loading for faster UX.</li>
</ul>
<p><strong>Outcome</strong></p>
<ul>
  <li>Boosted direct bookings by over 30%</li>
  <li>Reduced time-to-book by over 40%</li>
  <li>Generated quote requests from new cities (Dallas, Sarasota, and NC), validating nationwide appeal</li>
</ul>
<p>RumbaToursMiami.com now operates as a high-converting DTC platform that reflects the fun, high-energy experience of our party bus tours.</p>
`,
    image: "/images/projects/rumbatours-thumbnail.jpg",
    images: [
      "/images/projects/rumbatours-page-1.jpg",
      "/images/projects/rumbatours-page-2.jpg",
      "/images/projects/rumbatours-page-3.jpg"
    ],
    tools: ["Next.js", "Tailwind CSS", "React", "Stripe", "Google Maps API", "Figma", "Lightroom", "Final Cut Pro"],
    githubUrl: undefined,
    liveUrl: undefined,
    videos: undefined
  },
  {
    id: "5",
    title: "Laundrify Website Photography & Creative Direction",
    subtitle: "Creative Director, Photographer, Art Director, Graphic Designer",
    description: "Creative direction and photography for Laundrify, an on-demand laundry app in Miami. Led website image update, product photography, editing, and optimization.",
    fullDescription: `
<p><strong>Laundrify Website Photography & Creative Direction</strong></p>
<p><strong>Role:</strong> Creative Director, Photographer, Art Director, Graphic Designer<br/>
<strong>Type:</strong> On-Demand Service App Content</p>
<p><strong>Project Overview</strong></p>
<p>I was creative director to update website images for Laundrify, an app for on-demand laundry service in Miami, Florida. My work included photography, photo editing, optimizing, product photography, art direction, and graphic design.</p>
<p><strong>My Contributions</strong></p>
<ul>
  <li>Planned and directed new website and app imagery to match brand goals</li>
  <li>Shot and edited product and lifestyle photos for use across web, app, and ads</li>
  <li>Optimized all images for fast load and crisp display</li>
  <li>Provided art direction and graphic design for banners and marketing assets</li>
</ul>
`,
    image: "/images/projects/laundrify-thumbnail.jpg",
    images: [
      "/images/projects/laundrify-1.jpg",
      "/images/projects/laundrify-2.jpg",
      "/images/projects/laundrify-3.jpg"
    ],
    tools: ["Photography", "Photo Editing", "Product Photography", "Art Direction", "Graphic Design"],
    githubUrl: undefined,
    liveUrl: undefined,
    videos: undefined
  },
  {
    id: "6",
    title: "Soundcast Product Photography & Art Direction",
    subtitle: "Art Director, Product Photographer, Creative Direction",
    description: "Art direction and product photography for Soundcast, a premium speaker brand. Updated website and online listings with new imagery.",
    fullDescription: `
<p><strong>Soundcast Product Photography & Art Direction</strong></p>
<p><strong>Role:</strong> Art Director, Product Photographer, Creative Direction<br/>
<strong>Type:</strong> E-commerce & Product Content for Speaker Brand</p>
<p><strong>Project Overview</strong></p>
<p>Directed and photographed new product and lifestyle images for Soundcast, a premium speaker brand. Updated the website and online listings with high-quality, optimized photos to boost brand presence and sales.</p>
<p><strong>My Contributions</strong></p>
<ul>
  <li>Planned and executed product and lifestyle shoots for web and e-commerce</li>
  <li>Provided art direction to ensure brand consistency and visual appeal</li>
  <li>Edited and optimized all images for fast load and crisp display</li>
</ul>
`,
    image: "/images/projects/soundcast-thumbnail.jpg",
    images: [
      "/images/projects/soundcast-1.jpg",
      "/images/projects/soundcast-2.jpg",
      "/images/projects/soundcast-3.jpg"
    ],
    tools: ["Product Photography", "Art Direction", "Photo Editing", "Creative Direction"],
    githubUrl: undefined,
    liveUrl: undefined,
    videos: undefined
  }
]; 