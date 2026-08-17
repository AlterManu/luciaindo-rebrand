export default function Video({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const normalizedSrc = src.startsWith("/") ? src : `/${src}`;

  return (
    <video
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      suppressHydrationWarning
    >
      <source src={normalizedSrc} type="video/mp4" />
      Tu navegador no soporta la etiqueta de video.
    </video>
  );
}
