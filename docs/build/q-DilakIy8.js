import { _ as C } from "./q-uemlvruI.js";
import {
  c as m,
  C as f,
  d as p,
  D as x,
  R as g,
  e as R,
  f as y,
  h as S,
  i as P,
} from "./q-MDn-xmgG.js";
import {
  i as n,
  j as e,
  q as I,
  k as t,
  f as b,
  S as h,
} from "./q-BRFIrRA0.js";
const k = async () => {
    console.warn("QwikCityMockProvider: goto not provided");
  },
  w = (o) => {
    const s = o.url ?? "http://localhost/",
      a = new URL(s),
      r = n(
        { url: a, params: o.params ?? {}, isNavigating: !1, prevUrl: void 0 },
        { deep: !1 },
      ),
      i = e({}),
      c = e({ type: "initial", dest: a }),
      l =
        o.goto ??
        I(
          () => C(() => Promise.resolve().then(() => E), void 0),
          "s_BUbtvTyvVRE",
        ),
      d = n(m, { deep: !1 }),
      u = n({ headings: void 0, menu: void 0 }, { deep: !1 }),
      v = e(),
      _ = e();
    return (
      t(f, u),
      t(p, v),
      t(x, d),
      t(g, r),
      t(R, l),
      t(y, i),
      t(S, _),
      t(P, c),
      b(h, null, 3, "qY_1")
    );
  },
  E = Object.freeze(
    Object.defineProperty(
      { __proto__: null, s_BUbtvTyvVRE: k, s_WmYC5H00wtI: w },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
export { k as s_BUbtvTyvVRE, w as s_WmYC5H00wtI };
