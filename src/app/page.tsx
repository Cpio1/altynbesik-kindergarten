import { SiteExperience } from "@/components/shared/SiteExperience";
import { getSiteMedia } from "@/data/media";

export default function HomePage() {
  return <SiteExperience initialVariant="desktop" media={getSiteMedia()} />;
}
