import { u as t, _ as u, a as n } from "./q-BRFIrRA0.js";
import { b as l, a as r } from "./q-Cbyc9mUz.js";
const p = (s) => {
  const e = t(l),
    o = t(r);
  return u(
    "input",
    { onInput$: e.updateRange },
    {
      "data-name": "PlaybackScrubber",
      type: "range",
      value: n((a) => a.percentPlayed.value, [o]),
      class: n((a) => a.class, [s]),
    },
    null,
    2,
    "Fm_2",
  );
};
export { p as s_HVuRRBA0tJk };
