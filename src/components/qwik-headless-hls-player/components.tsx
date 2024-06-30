import { component$, useContext } from "@builder.io/qwik";
import { audioActionsContext, audioSignalsContext } from "./context";

export const CurrentTime = component$((props: { class?: string }) => {
  const signals = useContext(audioSignalsContext);
  return (
    <span data-name="CurrentTime" class={props.class}>
      {signals.currentTime}
    </span>
  );
});

export const TimeLeft = component$((props: { class?: string }) => {
  const signals = useContext(audioSignalsContext);
  return (
    <span data-name="TimeLeft" class={props.class}>
      {signals.timeLeft}
    </span>
  );
});

export const PlaybackScrubber = component$((props: { class?: string }) => {
  const actions = useContext(audioActionsContext);
  const signals = useContext(audioSignalsContext);
  return (
    <input
      data-name="PlaybackScrubber"
      type="range"
      onInput$={actions.updateRange}
      value={signals.percentPlayed.value}
      class={props.class}
    />
  );
});

export const PlayButton = component$(
  (props: { class?: string; playLabel?: string; pauseLabel?: string }) => {
    const actions = useContext(audioActionsContext);
    const signals = useContext(audioSignalsContext);
    const playLabel = props.playLabel ?? "Play";
    const pauseLabel = props.pauseLabel ?? "Pause";
    return (
      <button
        data-name="PlayButton"
        onClick$={actions.togglePlayback}
        class={props.class}
      >
        {signals.isPlaying.value ? pauseLabel : playLabel}
      </button>
    );
  },
);

export const FastForwardButton = component$(
  (props: { class?: string; label?: string; seconds?: number }) => {
    const seconds = props.seconds || 15;
    const actions = useContext(audioActionsContext);
    return (
      <button
        onClick$={actions.fastForward}
        class={props.class}
        data-seconds={seconds}
        data-name="FastForwardButton"
      >
        {props.label || `FF ${seconds} seconds`}
      </button>
    );
  },
);

export const RewindButton = component$(
  (props: { class?: string; label?: string; seconds?: number }) => {
    const seconds = props.seconds || 15;
    const actions = useContext(audioActionsContext);
    return (
      <button
        onClick$={actions.rewind}
        class={props.class}
        data-seconds={seconds}
        data-name="RewindButton"
      >
        {props.label || `Rewind ${seconds} seconds`}
      </button>
    );
  },
);

export const StopButton = component$(
  (props: { class?: string; label?: string }) => {
    const actions = useContext(audioActionsContext);
    return (
      <button
        data-name="StopButton"
        onClick$={actions.stop}
        class={props.class}
      >
        {props.label || "Stop"}
      </button>
    );
  },
);
