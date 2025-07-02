export default function GridBackground() {
  return (
    <>
      {/* Grid */}
      <div
        className="absolute inset-0 z-0
        [background-image:linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]
        [background-size:40px_40px]"
        aria-hidden="true"
      />
      
      {/* Soft glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none
        bg-[radial-gradient(ellipse_at_center,_rgba(139,92,246,0.25)_0%,_transparent_60%)]"
        aria-hidden="true"
      />
      
      {/* Vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none
        bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0)_30%,_rgba(0,0,0,0.7)_100%)]"
        aria-hidden="true"
      />
    </>
  );
} 