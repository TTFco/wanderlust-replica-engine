import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import {
  footerExploreLinks,
  footerLegalLinks,
  siteConfig,
  socialLinks,
} from "@/config/site";
import { navigateToSection } from "@/lib/navigation";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleExploreClick = (href: string) => {
    if (href === "#") {
      return;
    }

    navigateToSection({
      href,
      currentPathname: location.pathname,
      navigate,
    });
  };

  return (
    <footer
      id="contact"
      className="bg-primary px-4 py-14 text-primary-foreground sm:px-6 sm:py-20 lg:px-16"
    >
      <div className="container">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:mb-16 sm:gap-12 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-4 font-display text-xl sm:text-2xl">
              {siteConfig.brandName}
            </h3>
            <p className="font-body text-sm leading-relaxed text-primary-foreground/70">
              Extraordinary travel experiences across four continents. Where
              luxury meets purpose.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
              Explore
            </h4>
            <ul className="space-y-2 font-body text-sm">
              {footerExploreLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={() => handleExploreClick(link.href)}
                    className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 font-body text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
              Get In Touch
            </h4>
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="mb-4 block font-body text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              {siteConfig.supportEmail}
            </a>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                    key={link.label}
                    href={link.href}
                    aria-label={link.label}
                    className="text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col items-center justify-between gap-5 border-t border-primary-foreground/15 pt-8 text-center md:flex-row md:items-end md:text-left">
          <p className="font-body text-xs text-primary-foreground/50 md:text-left">
            {siteConfig.copyrightLabel}
          </p>
          <div className="flex flex-wrap justify-center gap-4 font-body text-xs text-primary-foreground/50 md:justify-start md:gap-6">
            {footerLegalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-primary-foreground/80"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="inline-flex flex-col items-center gap-2 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 md:items-end">
            <img
              src={siteConfig.dataGlacierLogo}
              alt="DataGlacier"
              className="h-8 w-auto opacity-95"
            />
            <p className="font-body text-xs text-primary-foreground/70">
              Designed and Hosted by DataGlacier
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
