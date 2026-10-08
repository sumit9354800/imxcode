import MotionGraphicsHero from "@/components/services/motion-graphics/MotionGraphicsHero";
import MotionGraphicsTypes from "@/components/services/motion-graphics/MotionGraphicsTypes";
import MotionGraphicsCapabilities from "@/components/services/motion-graphics/MotionGraphicsCapabilities";
import MotionGraphicsProcess from "@/components/services/motion-graphics/MotionGraphicsProcess";
import MotionGraphicsWork from "@/components/services/motion-graphics/MotionGraphicsWork";
import MotionGraphicsFinalCta from "@/components/services/motion-graphics/MotionGraphicsFinalCta";

export default function MotionGraphicsPage() {
  return (
    <main>
      <MotionGraphicsHero />
      <MotionGraphicsTypes />
      <MotionGraphicsCapabilities />
      <MotionGraphicsProcess />
      <MotionGraphicsWork />
      <MotionGraphicsFinalCta />
    </main>
  );
}