import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import * as HlsPlayer from "../components/qwik-headless-hls-player";

export default component$(() => {
  return (
    <main>
      <h1>Qwik Headless UI HLS Player</h1>
      <HlsPlayer.Root url="https://flipfit-cdn.akamaized.net/flip_hls/6656423247ffe600199e8363-15125d/video_h1.m3u8">
        <div class="scrubber-container">
          <div>
            Current time <HlsPlayer.CurrentTime />
          </div>
          <HlsPlayer.PlaybackScrubber />
          <div>
            Time left <HlsPlayer.TimeLeft />
          </div>
        </div>
        <div class="action-buttons">
          <HlsPlayer.RewindButton seconds={15} />
          <HlsPlayer.StopButton />
          <HlsPlayer.PlayButton playLabel="Play" pauseLabel="Pause" />
          <HlsPlayer.FastForwardButton seconds={15} />
        </div>
      </HlsPlayer.Root>
    </main>
  );
});

export const head: DocumentHead = {
  title: "Qwik Headless UI HLS Player",
};
