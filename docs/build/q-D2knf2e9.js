import { u as s, _ as i, a as c } from "./q-BRFIrRA0.js";
import { b as u, a as b } from "./q-Cbyc9mUz.js";
const y = (a) => {
  const t = s(u),
    n = s(b),
    o = a.playLabel ?? "Play",
    l = a.pauseLabel ?? "Pause";
  return i(
    "button",
    { onClick$: t.togglePlayback },
    { "data-name": "PlayButton", class: c((e) => e.class, [a]) },
    n.isPlaying.value ? l : o,
    0,
    "Fm_3",
  );
};
export { y as s_z10SkWbaSPI };
