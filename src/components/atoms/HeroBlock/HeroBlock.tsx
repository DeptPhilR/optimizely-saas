"use client";
import Image from "../Image/Image";
import { IImage } from "@/components/models/IImage";
import SiteEnum from "@/components/models/enums/SiteEnum";
import TextContent from "../TextContent/TextContent";
import { ITextContent } from "@/components/models/ITextContent";

interface Props {
  readonly variant: string;
  readonly backgroundColor?: string;
  readonly image: IImage;
  readonly textContent: ITextContent;
  readonly site: SiteEnum;
}

const HeroBlock = ({
  variant,
  backgroundColor,
  image,
  textContent,
  site,
}: Props) => {
  return (
    <div
      className={`tw-hero ${
        variant === "primary" ? "tw-hero-primary" : "tw-hero-secondary"
      }`}
      style={{ backgroundColor: backgroundColor }}
    >
      {variant === "primary" ? (
        <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen tw-px-8 tw-py-32 tw-text-center">
          <TextContent textContent={textContent} site={site} />
        </div>
      ) : (
        <div className="tw-flex tw-flex-col md:tw-flex-row tw-h-screen">
          <div className="tw-flex tw-flex-col tw-justify-center tw-p-20 md:tw-w-1/2 tw-text-center tw-text-white">
            <TextContent textContent={textContent} site={site} />
          </div>
          <div className="md:tw-w-1/2 tw-overflow-hidden">{image && <Image image={image} />}</div>
        </div>
      )}
    </div>
  );
};

export default HeroBlock;
