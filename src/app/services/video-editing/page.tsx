import VideoEditingHero from "@/components/services/video-editing/VideoEditingHero";
import VideoEditingTypes from "@/components/services/video-editing/VideoEditingTypes";
import VideoEditingCapabilities from "@/components/services/video-editing/VideoEditingCapabilities";
import VideoEditingProcess from "@/components/services/video-editing/VideoEditingProcess";
import VideoEditingWork from "@/components/services/video-editing/VideoEditingWork";
import VideoEditingFinalCta from "@/components/services/video-editing/VideoEditingFinalCta";

export default function VideoEditingPage() {
  return (
    <main>
      <VideoEditingHero />
      <VideoEditingTypes />
      <VideoEditingCapabilities />
      <VideoEditingProcess />
      <VideoEditingWork />
      <VideoEditingFinalCta />
    </main>
  );
}