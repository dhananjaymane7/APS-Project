import React from 'react';
import Link from 'next/link';

interface ContentCard {
  id: number;
  title: string;
  description: string;
  icon?: string;
  link?: string;
}

interface ContentCardsProps {
  cards: ContentCard[];
  columns?: 1 | 2 | 3 | 4;
  variant?: 'default' | 'light';
}

export function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

export function ContentCardsGrid({ cards, columns = 3, variant = 'default' }: ContentCardsProps) {
  const colsClass = {
    1: 'grid-cols-1',
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }[columns];

  const cardBgColor = variant === 'light' ? 'bg-white' : 'bg-white';
  const cardBorderColor = variant === 'light' ? 'border-primary/20' : 'border-border';

  return (
    <div className={`grid grid-cols-1 ${colsClass} gap-6`}>
      {cards.map((card) => (
        <div
          key={card.id}
          className={`${cardBgColor} border ${cardBorderColor} rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col transform hover:-translate-y-1`}
        >
          {card.icon && (
            <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-4xl">
              {card.icon}
            </div>
          )}
          <div className="p-6 flex-1 flex flex-col">
            <h3 className="text-xl font-bold text-primary mb-2">{card.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 flex-1">{card.description}</p>
            {card.link && (
              <Link
                href={card.link}
                className="inline-block mt-auto text-accent font-semibold hover:text-primary transition"
              >
                Learn More →
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export function ImportantLinksCard({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="bg-primary text-primary-foreground rounded-lg p-6 shadow-lg">
      <h3 className="text-xl font-bold mb-4">Important Links</h3>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className="flex items-center gap-3 hover:translate-x-1 transition-transform"
            >
              <span className="text-accent text-lg">»</span>
              <span className="hover:text-accent transition">{link.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function WelcomeSection({
  title,
  content,
  image,
  imageOnLeft = false,
}: {
  title: string;
  content: string;
  image?: string;
  imageOnLeft?: boolean;
}) {
  const contentDiv = (
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">{title}</h2>
      <p className="text-muted-foreground leading-relaxed text-justify">{content}</p>
    </div>
  );

  const imageDiv = image && (
    <div className="flex items-center justify-center">
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
    </div>
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
      {imageOnLeft ? (
        <>
          {imageDiv}
          {contentDiv}
        </>
      ) : (
        <>
          {contentDiv}
          {imageDiv}
        </>
      )}
    </div>
  );
}

export function MessageSection({
  name,
  title,
  subtitle,
  message,
  image,
  imageUrl,
  ctaText,
  ctaLink,
}: {
  name: string;
  title: string;
  subtitle?: string;
  message: string;
  image?: string;
  imageUrl?: string;
  ctaText?: string;
  ctaLink?: string;
}) {
  const photo = imageUrl ?? image;
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-border/60">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
        {photo && (
          <div className="flex items-center justify-center">
            <img
              src={photo}
              alt={name}
              className="w-full max-h-[420px] h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        )}
        <div className="flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-primary mb-1">{title}</h3>
          {subtitle && (
            <p className="text-sm text-muted-foreground mb-3">{subtitle}</p>
          )}
          <p className="text-sm text-muted-foreground mb-4 italic">— {name}</p>
          <p className="text-muted-foreground leading-relaxed text-justify mb-6 whitespace-pre-line">
            {message}
          </p>
          {ctaLink && ctaText && (
            <Link
              href={ctaLink}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition font-semibold w-fit text-center"
            >
              {ctaText}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
