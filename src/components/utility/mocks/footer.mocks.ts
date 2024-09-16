import SiteEnum from "@/components/models/enums/SiteEnum";
import { IFooter } from "@/components/models/IFooter";
import { svgImage } from "./image.mocks";
import socialLinksMock from "./socialLinks.mocks";

export const footer: IFooter = {
  logo: svgImage,
  site: SiteEnum.B2B,
  text: "Learn more about Jotun or visit other industry pages.",
  cta: {
    text: "Go to jotun.com",
    url: "www.jotun.com",
    linkIcon: "arrow-right",
    target: "self",
  },
  navigationLinks: [
    {
      text: "About Us",
      url: "/about-us",
      linkIcon: "arrow-right",
      target: "_blank",
    },
    {
      text: "Privacy Policy",
      url: "https://www.jotun.com/no-en/about-jotun/legal/privacy-statement",
      linkIcon: "arrow-right",
      target: "_blank",
    },
  ],
  secondaryLinks: [
    {
      text: "Careers",
      url: "https://www.jotun.com/no-en/about-jotun/career/join-us",
      linkIcon: "arrow-right",
      target: "_blank",
    },
    {
      text: "Contact Us",
      url: "https://www.jotun.com/no-en/about-jotun/contact",
      linkIcon: "arrow-right",
      target: "_blank",
    },
  ],
  copyrightNotice: "Jotun All Rights Reserved",
  socialLinks: socialLinksMock.links,
};

export default footer;
