import BrainArtwork from "@/components/BrainArtwork";
import { INITIATIVES } from "@/lib/data";

export const metadata = {
  title: "New Kinds of Minds — BRAIN artwork study",
  description: "A generative cartography of cognitive difference built from the New Kinds of Minds atlas.",
};

export default function BrainStudyPage() {
  return <BrainArtwork items={INITIATIVES} />;
}
