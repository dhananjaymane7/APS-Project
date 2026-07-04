import Footer from '@/components/Footer';

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  breadcrumbs?: { label: string; href?: string }[];
}

export default function PageLayout({
  title,
  subtitle,
  children,
  breadcrumbs,
}: PageLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-gradient-to-r from-[#0a305f] to-[#da251c] text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            {breadcrumbs && (
              <nav className="mb-4 text-sm">
                {breadcrumbs.map((item, index) => (
                  <span key={index}>
                    {item.href ? (
                      <a href={item.href} className="hover:underline">
                        {item.label}
                      </a>
                    ) : (
                      <span>{item.label}</span>
                    )}
                    {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
                  </span>
                ))}
              </nav>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
            {subtitle && <p className="text-lg text-white/90">{subtitle}</p>}
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">{children}</div>
      </main>

      <Footer />
    </div>
  );
}
