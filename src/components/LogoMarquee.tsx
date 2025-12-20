interface Logo {
  name: string;
  logo: string;
  url: string;
}

interface LogoMarqueeProps {
  logos: Logo[];
}

export const LogoMarquee = ({ logos }: LogoMarqueeProps) => {
  return (
    <div className="relative overflow-hidden w-full py-">
      <div className="flex gap-24 animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, index) => (
          <a
            key={index}
            href={logo.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center min-w-[180px]"
          >
            <div
                className="
                  flex items-center justify-center
                  h-24 w-[220px]
                  bg-white
                  rounded-xl
                  px-6
                  border border-border
                  shadow-sm
                "
              >
                <img
                  src={logo.logo}
                  alt={logo.name}
                  className="
                    max-h-14 max-w-[160px]
                    object-contain
                    grayscale
                    opacity-80
                    transition
                    hover:grayscale-0
                    hover:opacity-100
                  "
                />

              </div>


          </a>
        ))}
      </div>
    </div>
  );
};
