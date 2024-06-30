import {
  $,
  component$,
  noSerialize,
  type NoSerialize,
  Slot,
  useContextProvider,
  useSignal,
  useVisibleTask$,
} from "@builder.io/qwik";
import Hls from "hls.js";
import {
  audioActionsContext,
  audioElementContext,
  audioSignalsContext,
} from "./context";
import { secondsToMMSS } from "./utils";

export * from "./components";

export const Root = component$((props: { url: string; class?: string }) => {
  const audioElementSignal = useSignal<HTMLAudioElement>();
  const hlsSignal = useSignal<NoSerialize<Hls> | undefined>();
  const isPlaying = useSignal<boolean>(false);
  const percentPlayed = useSignal<number>(0);
  const currentTime = useSignal<string>("00:00");
  const timeLeft = useSignal<string>("00:00");

  useContextProvider(audioElementContext, { value: audioElementSignal });

  useContextProvider(audioSignalsContext, {
    isPlaying,
    percentPlayed,
    currentTime,
    timeLeft,
  });

  useContextProvider(audioActionsContext, {
    togglePlayback: $(() => {
      isPlaying.value
        ? audioElementSignal.value?.pause()
        : audioElementSignal.value?.play();
      isPlaying.value = !isPlaying.value;
    }),
    play: $(() => {
      isPlaying.value = true;
      audioElementSignal.value?.play();
    }),
    pause: $(() => {
      isPlaying.value = false;
      audioElementSignal.value?.pause();
    }),
    stop: $(() => {
      isPlaying.value = false;
      if (audioElementSignal.value) {
        audioElementSignal.value.pause();
        audioElementSignal.value.currentTime = 0;
      }
    }),
    fastForward: $((e: PointerEvent) => {
      if (audioElementSignal.value) {
        const { seconds } = (e.target as HTMLButtonElement).dataset;
        audioElementSignal.value.currentTime =
          audioElementSignal.value.currentTime + parseInt(seconds!);
      }
    }),
    rewind: $((e: PointerEvent) => {
      if (audioElementSignal.value) {
        const { seconds } = (e.target as HTMLButtonElement).dataset;
        audioElementSignal.value.currentTime =
          audioElementSignal.value.currentTime - parseInt(seconds!);
      }
    }),
    updateRange: $((e: InputEvent) => {
      if (!audioElementSignal.value) {
        return;
      }
      const percent = parseInt((e.target as HTMLInputElement).value);
      const d = audioElementSignal.value.duration || 0;
      const ct = (d * percent) / 100;
      audioElementSignal.value.currentTime = ct;

      currentTime.value = secondsToMMSS(Math.ceil(isNaN(ct) ? 0 : ct));
      timeLeft.value = secondsToMMSS(Math.ceil(d - ct));
    }),
  });

  const onPlaybackTimeUpdate = $(() => {
    if (!audioElementSignal.value) {
      return;
    }
    const d = audioElementSignal.value.duration || 0;
    const ct = audioElementSignal.value.currentTime || 0;
    const newPercentPlayed = Math.ceil((ct / d) * 100);

    percentPlayed.value = isNaN(newPercentPlayed) ? 0 : newPercentPlayed;
    currentTime.value = secondsToMMSS(Math.ceil(isNaN(ct) ? 0 : ct));
    timeLeft.value = secondsToMMSS(Math.ceil(d - ct));
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(
    ({ cleanup }) => {
      try {
        if (!hlsSignal.value) {
          hlsSignal.value = noSerialize(new Hls({ debug: false }));
        }

        if (audioElementSignal.value && hlsSignal.value) {
          hlsSignal.value.on(Hls.Events.MEDIA_ATTACHED, () => {
            console.log("audio and hls.js are now bound together!");
          });
          hlsSignal.value.on(Hls.Events.MANIFEST_PARSED, (event, data) => {
            console.log(
              `manifest loaded, found ${data.levels.length} quality level`,
            );
          });
          hlsSignal.value.on(Hls.Events.BUFFER_CREATED, () => {
            onPlaybackTimeUpdate();
            console.log("Audio track loaded");
          });
          hlsSignal.value.on(Hls.Events.BUFFER_EOS, () => {
            console.log("stream ended");
          });
          hlsSignal.value.on(Hls.Events.ERROR, function (event, data) {
            console.log("HLS Error Event", event, data);
            if (data.fatal) {
              switch (data.type) {
                case Hls.ErrorTypes.MEDIA_ERROR:
                  console.log("fatal media error encountered, try to recover");
                  hlsSignal.value?.recoverMediaError();
                  break;
                case Hls.ErrorTypes.NETWORK_ERROR:
                  console.error("fatal network error encountered", data);
                  break;
                default:
                  hlsSignal.value?.destroy();
                  break;
              }
            }
          });

          hlsSignal.value.loadSource(props.url);
          hlsSignal.value.attachMedia(audioElementSignal.value);

          audioElementSignal.value.addEventListener(
            "timeupdate",
            onPlaybackTimeUpdate,
          );
        }
      } catch (err) {
        console.error(err);
      }
      cleanup(() => {
        audioElementSignal.value?.removeEventListener(
          "timeupdate",
          onPlaybackTimeUpdate,
        );
      });
    },
    { strategy: "document-ready" },
  );

  return (
    <div data-name="PlayerRoot" class={props.class}>
      <Slot />
      <audio controls={false} ref={audioElementSignal} />
    </div>
  );
});
