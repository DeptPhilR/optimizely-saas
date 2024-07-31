import { IContentCards } from "@/components/models/IContentCards";
import DisplayStyleEnum from "@/components/models/enums/DisplayStyleEnum";
import VariantTypeEnum from "@/components/models/enums/VariantTypeEnum";
import SiteEnum from "@/components/models/enums/SiteEnum";

export const getRelatedColoursSectionData = (
  relatedColors: string[] | undefined,
) => {
  const cards = relatedColors?.length
    ? relatedColors.map((colour: string) => ({
        id: colour,
        title: colour,
        text: "Colour name: cn-" + colour.slice(1),
        cardBackgroundColour: colour,
      }))
    : [];

  const relatedColoursSection: IContentCards = {
    title: "Pairs well with",
    displayAs: DisplayStyleEnum.Carousel,
    cardStyle: VariantTypeEnum.Primary as Exclude<
      VariantTypeEnum,
      VariantTypeEnum.Cta
    >,
    hideCardBackground: false,
    itemsPerRow: 5,
    cta: {
      text: "View All",
      url: "/",
      target: "self",
    },
    hideImages: true,
    hideCardText: false,
    hideCardCtas: true,
    backgroundColour: "jotunBlue",
    site: SiteEnum.B2B,
    cards,
  };

  return relatedColoursSection;
};