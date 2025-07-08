'use client';

import { useState, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import Footer from "@/components/Footer";
import React from "react";

interface Project {
  id: number;
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

const projects: Project[] = [
  {
    id: 1,
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
  <li>Designed the platform to operate as a nationwide broker</li>
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
  <li>MVP launched May 2025 first leads came in from Dallas, Sarasota, West Palm Beach, Miami and North Carolina.</li>
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
    id: 2,
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
    id: 3,
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
    id: 4,
    title: "RumbaToursMiami.com Booking Website Redesign",
    subtitle: "Founder, Product Designer, UI/UX Lead, Junior Frontend Developer",
    description: "RumbaToursMiami.com is the official booking site for Miami&apos;s #1 open-air party bus. I led the complete redesign and rebuild of the website to increase online bookings, improve mobile usability, and elevate the brand's visual identity. The new site features a smooth, scroll-driven layout with embedded video, high-impact CTA buttons, and a responsive booking form that calculates pricing in real time.",
    fullDescription: `
<p><strong>RumbaToursMiami.com Booking Website Redesign</strong></p>
<p><strong>Role:</strong> Founder, Product Designer, UI/UX Lead, Junior Frontend Developer<br/>
<strong>Type:</strong> Direct-to-Consumer Booking Platform for Event Transportation</p>

<p><strong>Project Overview</strong></p>
<p>RumbaToursMiami.com is the official booking site for Miami&apos;s #1 open-air party bus. I led the complete redesign and rebuild of the website to increase online bookings, improve mobile usability, and elevate the brand’s visual identity. The new site features a smooth, scroll-driven layout with embedded video, high-impact CTA buttons, and a responsive booking form that calculates pricing in real time.</p>

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
    id: 5,
    title: "Weather Dashboard",
    subtitle: "Data visualization",
    description: "Real-time weather data with interactive charts and forecasts.",
    fullDescription: "An interactive weather dashboard that provides real-time weather information with beautiful data visualizations. Features include 7-day forecasts, hourly predictions, interactive maps, and customizable location tracking. Integrates with multiple weather APIs for accurate data.",
    image: "/images/projects/project4.jpg",
    images: ["/images/projects/project4.jpg", "/images/projects/project4-2.jpg", "/images/projects/project4-3.jpg"],
    tools: ["React", "Chart.js", "OpenWeather API", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/cesarpaublini/weather-dashboard",
    liveUrl: "https://weather-demo.vercel.app"
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    subtitle: "Analytics platform",
    description: "Comprehensive social media analytics and management tool.",
    fullDescription: "A powerful social media dashboard that provides detailed analytics, content scheduling, and performance tracking across multiple platforms. Features include automated posting, engagement metrics, competitor analysis, and customizable reports. Designed for social media managers and businesses.",
    image: "/images/projects/project5.jpg",
    images: ["/images/projects/project5.jpg", "/images/projects/project5-2.jpg", "/images/projects/project5-3.jpg"],
    tools: ["Next.js", "React", "TypeScript", "Prisma", "PostgreSQL", "Chart.js"],
    githubUrl: "https://github.com/cesarpaublini/social-dashboard",
    liveUrl: "https://social-dashboard-demo.vercel.app"
  },
  {
    id: 6,
    title: "AI Chat Application",
    subtitle: "Machine learning",
    description: "Intelligent chatbot with natural language processing capabilities.",
    fullDescription: "An advanced AI chat application that leverages natural language processing to provide intelligent responses. Features include conversation memory, multi-language support, custom training, and integration with various AI models. Built with scalability and performance in mind.",
    image: "/images/projects/project6.jpg",
    images: ["/images/projects/project6.jpg", "/images/projects/project6-2.jpg", "/images/projects/project6-3.jpg"],
    tools: ["React", "Python", "TensorFlow", "FastAPI", "Redis", "Docker"],
    githubUrl: "https://github.com/cesarpaublini/ai-chat",
    liveUrl: "https://ai-chat-demo.vercel.app"
  }
];

function StyledProjectDescription({ html }: { html: string }) {
  const styledHtml = html
    .replace(/<p><strong>(.*?)<\/strong><\/p>/g, '<h4 class="text-violet-400 text-base font-semibold mt-6 mb-2">$1</h4>')
    .replace(/<p>/g, '<p class="text-gray-300 leading-relaxed mb-2">')
    .replace(/<ul>/g, '<ul class="list-disc list-inside space-y-1 ml-4">')
    .replace(/<li>/g, '<li class="text-gray-400">');
  return (
    <div className="space-y-4" dangerouslySetInnerHTML={{ __html: styledHtml }} />
  );
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [playingVideoIdx, setPlayingVideoIdx] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <section className="pt-20 pb-16 px-6 sm:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Projects
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here you will find a selection of projects I have worked on.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 sm:px-12 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-[#0d0d0d] rounded-xl overflow-hidden border border-zinc-700 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:border-violet-500"
                onClick={() => openModal(project)}
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="w-full h-full bg-gradient-to-br from-violet-600/20 to-purple-600/20 flex items-center justify-center"
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Fallback if image doesn't load */}
                    <div className="text-center text-gray-400 opacity-0 hover:opacity-100 transition-opacity">
                      <div className="text-4xl mb-2">📱</div>
                      <div className="text-sm">{project.title}</div>
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    {project.id === 1 ? (
                      <>
                        <h3 className="text-xl font-semibold text-white mb-2">Trolley Booking Platform</h3>
                        <p className="text-gray-300 text-sm mb-4">Event transportation tool</p>
                        <p className="text-gray-400 text-sm mb-4">Nationwide platform to book trolleys for weddings, parties, and corporate events in 90+ cities.</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tools.slice(0, 3).map((tool) => (
                            <span key={tool} className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30">{tool}</span>
                          ))}
                          {project.tools.length > 3 && (
                            <span className="px-3 py-1 bg-zinc-700 text-gray-300 text-xs rounded-full">+{project.tools.length - 3} more</span>
                          )}
                        </div>
                      </>
                    ) : project.id === 2 ? (
                      <>
                        <h3 className="text-xl font-semibold text-white mb-2">Virgin Voyages Content Series</h3>
                        <p className="text-gray-300 text-sm mb-4">Creative production project</p>
                        <p className="text-gray-400 text-sm mb-4">Filmed, edited, and directed social media videos for destinations, promos, onboard activities, and a 2023 ad campaign BTS.</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tools.slice(0, 3).map((tool) => (
                            <span key={tool} className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30">{tool}</span>
                          ))}
                          {project.tools.length > 3 && (
                            <span className="px-3 py-1 bg-zinc-700 text-gray-300 text-xs rounded-full">+{project.tools.length - 3} more</span>
                          )}
                        </div>
                      </>
                    ) : project.id === 3 ? (
                      <>
                        <h3 className="text-xl font-semibold text-white mb-2">Cleer Product Photography</h3>
                        <p className="text-gray-300 text-sm mb-4">Creative content project</p>
                        <p className="text-gray-400 text-sm mb-4">Directed, photographed, and retouched lifestyle and product shots for Cleer&apos;s website, ads, and e-commerce listings.</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <span className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30">Photography</span>
                          <span className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30">Art Direction</span>
                          <span className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30">Retouching</span>
                          <span className="px-3 py-1 bg-zinc-700 text-gray-300 text-xs rounded-full">+2 more</span>
                        </div>
                      </>
                    ) : project.id === 4 ? (
                      <>
                        <h3 className="text-xl font-semibold text-white mb-2">Website and Booking Platform</h3>
                        <p className="text-gray-400 text-sm mb-4">Redesigned and developed a mobile-first website for Miami&apos;s top party bus, boosting bookings with real-time pricing, Stripe checkout, and video-driven UI.</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tools.slice(0, 3).map((tool) => (
                            <span key={tool} className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30">{tool}</span>
                          ))}
                          {project.tools.length > 3 && (
                            <span className="px-3 py-1 bg-zinc-700 text-gray-300 text-xs rounded-full">+{project.tools.length - 3} more</span>
                          )}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex flex-wrap gap-2">
                          {project.tools.slice(0, 3).map((tool) => (
                            <span
                              key={tool}
                              className="px-3 py-1 bg-violet-600/20 text-violet-400 text-xs rounded-full border border-violet-500/30"
                            >
                              {tool}
                            </span>
                          ))}
                          {project.tools.length > 3 && (
                            <span className="px-3 py-1 bg-zinc-700 text-gray-300 text-xs rounded-full">
                              +{project.tools.length - 3} more
                            </span>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-[#0d0d0d] rounded-xl max-w-4xl w-full max-h-[90vh] min-h-[700px] overflow-y-auto border border-zinc-700">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-zinc-700">
              <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>

            {/* Image Slider */}
            <div className="relative p-6">
              <div className="relative h-90 rounded-lg overflow-hidden">
                {selectedProject.id === 2 && selectedProject.videos ? (
                  <div className="relative flex gap-x-4 overflow-x-auto py-2 px-1 h-[36rem] md:h-[28rem]">
                    {selectedProject.videos.map((video, idx) => (
                      <div
                        key={video}
                        className="relative flex-shrink-0 h-full w-[20.25rem] md:w-[15.75rem] bg-black rounded-lg overflow-hidden"
                      >
                        <div className="relative w-full h-full">
                          <video
                            ref={el => { videoRefs.current[idx] = el }}
                            src={video}
                            controls
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                            onPlay={() => {
                              setPlayingVideoIdx(idx);
                              videoRefs.current.forEach((v, i) => { if (v && i !== idx) v.pause(); });
                            }}
                            onPause={() => setPlayingVideoIdx(null)}
                          />
                          {playingVideoIdx !== idx && (
                            <button
                              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40"
                              onClick={() => videoRefs.current[idx]?.play()}
                              tabIndex={-1}
                            >
                              <FaPlay className="text-white text-4xl opacity-80" />
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                    {/* Scroll indicator */}
                    <div className="pointer-events-none absolute bottom-0 right-0 w-24 h-8 bg-gradient-to-l from-black/80 to-transparent rounded-b-lg" />
                  </div>
                ) : (
                  <div className="relative h-80 bg-zinc-900 rounded-lg overflow-hidden">
                    <div 
                      className="w-full h-full bg-gradient-to-br from-violet-600/20 to-purple-600/20 flex items-center justify-center"
                      style={{
                        backgroundImage: `url(${selectedProject.images[currentImageIndex]})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    >
                      {/* Fallback if image doesn't load */}
                      <div className="text-center text-gray-400 opacity-0 hover:opacity-100 transition-opacity">
                        <div className="text-6xl mb-4">📱</div>
                        <div className="text-lg">{selectedProject.title}</div>
                        <div className="text-sm mt-2">Image {currentImageIndex + 1} of {selectedProject.images.length}</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Arrows */}
                {selectedProject.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )}

                {/* Image Indicators */}
                {selectedProject.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedProject.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-violet-400' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Project Details */}
            <div className="p-6 border-t border-zinc-700">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
                <StyledProjectDescription html={selectedProject.fullDescription} />
              </div>

              {/* Tools Used */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 bg-violet-600/20 text-violet-400 text-sm rounded-full border border-violet-500/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="flex gap-4">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white rounded-md transition-colors"
                  >
                    <FaGithub />
                    View Code
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-md transition-colors"
                  >
                    <FaExternalLinkAlt />
                    Live Site
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}