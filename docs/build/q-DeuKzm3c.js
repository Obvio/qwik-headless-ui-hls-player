import { _ as n } from "./q-uemlvruI.js";
import {
  c,
  d as l,
  e as d,
  a as i,
  f,
  q as u,
  S as b,
  b as p,
} from "./q-BRFIrRA0.js";
import { u as v } from "./q-MDn-xmgG.js";
const S = (e) => {
    const t = c(e, ["action", "spaReset", "reloadDocument", "onSubmit$"]),
      s = v();
    return l(
      "form",
      {
        action: "get",
        get "preventdefault:submit"() {
          return !e.reloadDocument;
        },
        get "data-spa-reset"() {
          return e.spaReset ? "true" : void 0;
        },
        ...t,
        children: f(b, null, 3, "BC_0"),
        onSubmit$: [
          ...(Array.isArray(e.onSubmit$) ? e.onSubmit$ : [e.onSubmit$]),
          u(
            () => n(() => Promise.resolve().then(() => m), void 0),
            "s_p9MSze0ojs4",
            [s],
          ),
          u(
            () => n(() => Promise.resolve().then(() => m), void 0),
            "s_KK5BfmKH4ZI",
          ),
        ],
      },
      {
        action: d,
        "preventdefault:submit": i(
          (a) => !a.reloadDocument,
          [e],
          "!p0.reloadDocument",
        ),
        "data-spa-reset": i(
          (a) => (a.spaReset ? "true" : void 0),
          [e],
          'p0.spaReset?"true":undefined',
        ),
      },
      0,
      "BC_1",
    );
  },
  g = async (e, t) => {
    const [s] = p(),
      a = new FormData(t),
      o = new URLSearchParams();
    a.forEach((r, _) => {
      typeof r == "string" && o.append(_, r);
    }),
      await s("?" + o.toString(), { type: "form", forceReload: !0 });
  },
  P = (e, t) => {
    t.getAttribute("data-spa-reset") === "true" && t.reset(),
      t.dispatchEvent(
        new CustomEvent("submitcompleted", {
          bubbles: !1,
          cancelable: !1,
          composed: !1,
          detail: { status: 200 },
        }),
      );
  },
  m = Object.freeze(
    Object.defineProperty(
      { __proto__: null, s_KK5BfmKH4ZI: P, s_Nk9PlpjQm9Y: S, s_p9MSze0ojs4: g },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
export { P as s_KK5BfmKH4ZI, S as s_Nk9PlpjQm9Y, g as s_p9MSze0ojs4 };
