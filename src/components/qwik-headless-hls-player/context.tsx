import { createContextId, type Signal } from "@builder.io/qwik";

export const audioElementContext = createContextId<Signal>(
  "audioElementContext",
);

export const audioSignalsContext = createContextId<{
  isPlaying: Signal<boolean>;
  percentPlayed: Signal<number>;
  currentTime: Signal<string>;
  timeLeft: Signal<string>;
}>("audioSignalsContext");

export const audioActionsContext = createContextId<{
  togglePlayback: () => void;
  play: () => void;
  pause: () => void;
  stop: () => void;
  fastForward: (e: PointerEvent) => void;
  rewind: (e: PointerEvent) => void;
  updateRange: (e: InputEvent) => void;
}>("audioActionsContext");
