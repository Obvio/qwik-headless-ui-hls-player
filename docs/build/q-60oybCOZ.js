import { u as a, _ as e, a as c } from "./q-BRFIrRA0.js";
import { b as d } from "./q-Cbyc9mUz.js";
const m = (s) => {
  const n = s.seconds || 15,
    o = a(d);
  return e(
    "button",
    { "data-seconds": n, onClick$: o.rewind },
    { class: c((t) => t.class, [s]), "data-name": "RewindButton" },
    s.label || `Rewind ${n} seconds`,
    0,
    "Fm_5",
  );
};
export { m as s_E690Ao10V6Y };
