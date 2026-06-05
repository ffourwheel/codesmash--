import Link from "next/link";
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { getPayload } from "payload";
import configPromise from "@payload-config";

export default async function Footer() {
  const payload = await getPayload({ config: configPromise });
  const settings = await payload.findGlobal({ slug: "site-settings" });

  const currentYear = new Date().getFullYear();
  const siteName = settings.siteName || "CODESMASH CO., LTD.";

  const getSocialUrl = (platform: string) => {
    const link = settings.socialLinks?.find((s: any) => s.platform === platform);
    return link?.url || "#";
  };

  return (
    <footer className="bg-[#17161a]" style={{ WebkitFontSmoothing: "antialiased" }}>
      <div className="max-w-[1300px] mx-auto px-[22px] py-[3.4vh] min-h-[60px]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/80 text-[0.94rem]">
            <p>
              © 2017 - {currentYear},{" "}
              <Link
                href="/"
                className="text-white/80 no-underline transition-colors duration-400 hover:text-[#d90a2c]"
              >
                {siteName}
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <a
                href={getSocialUrl("facebook")}
                className="text-white/60 hover:text-[#d90a2c] transition-colors duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
              <a
                href={getSocialUrl("twitter")}
                className="text-white/60 hover:text-[#d90a2c] transition-colors duration-300"
                aria-label="Twitter"
              >
                <TwitterIcon size={18} />
              </a>
              <a
                href={getSocialUrl("instagram")}
                className="text-white/60 hover:text-[#d90a2c] transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href={getSocialUrl("linkedin")}
                className="text-white/60 hover:text-[#d90a2c] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
            </div>
            <p className="text-white/80 text-[0.94rem]">All RIGHTS RESERVED</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
