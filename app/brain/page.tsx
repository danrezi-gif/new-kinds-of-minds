import BrainEarthWebGL from "@/components/BrainEarthWebGL";
import { INITIATIVES } from "@/lib/data";

export const metadata = {
  title: "New Kinds of Minds — Earth study",
  description:
    "An instrumented WebGL study for the New Kinds of Minds BRAIN artwork.",
};

export default function BrainStudyPage() {
  return <BrainEarthWebGL items={INITIATIVES} />;
}
