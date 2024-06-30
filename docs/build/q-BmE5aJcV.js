import { u as n, _ as c, a as d } from "./q-BRFIrRA0.js";
import { b as e } from "./q-Cbyc9mUz.js";
const l = (s) => {
  const t = s.seconds || 15,
    a = n(e);
  return c(
    "button",
    { "data-seconds": t, onClick$: a.fastForward },
    { class: d((o) => o.class, [s]), "data-name": "FastForwardButton" },
    s.label || `FF ${t} seconds`,
    0,
    "Fm_4",
  );
};
export { l as s_LIdQSz17dE0 };
