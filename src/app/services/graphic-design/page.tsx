import GraphicDesignHero from "@/components/services/graphic-design/GraphicDesignHero";
import GraphicDesignTypes from "@/components/services/graphic-design/GraphicDesignTypes";
import GraphicDesignCapabilities from "@/components/services/graphic-design/GraphicDesignCapabilities";
import GraphicDesignProcess from "@/components/services/graphic-design/GraphicDesignProcess";
import GraphicDesignWork from "@/components/services/graphic-design/GraphicDesignWork";
import GraphicDesignFinalCta from "@/components/services/graphic-design/GraphicDesignFinalCta";

export default function GraphicDesignPage() {
  return (
    <main>
      <GraphicDesignHero />
      <GraphicDesignTypes />
      <GraphicDesignCapabilities />
      <GraphicDesignProcess />
      <GraphicDesignWork />
      <GraphicDesignFinalCta />
    </main>
  );
}