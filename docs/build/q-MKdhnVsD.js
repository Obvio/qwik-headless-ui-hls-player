import { d as o, F as u } from "./q-MDn-xmgG.js";
import {
  x as c,
  r as i,
  u as m,
  f as s,
  y as f,
  _ as p,
  F as x,
} from "./q-BRFIrRA0.js";
import "./q-uemlvruI.js";
const v = () => {
  const r = u();
  c();
  const l = i("nonce"),
    e = m(o);
  if (e.value && e.value.length > 0) {
    const a = e.value.length;
    let t = null;
    for (let n = a - 1; n >= 0; n--)
      e.value[n].default &&
        (t = s(e.value[n].default, { children: t }, 1, "zl_0"));
    return s(
      x,
      {
        children: [
          t,
          p(
            "script",
            { dangerouslySetInnerHTML: r },
            { nonce: l },
            null,
            3,
            null,
          ),
        ],
      },
      1,
      "zl_1",
    );
  }
  return f;
};
export { v as s_e0ssiDXoeAM };
