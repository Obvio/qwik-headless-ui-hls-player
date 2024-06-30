import {
  b as P,
  g as f,
  h as y,
  d as S,
  f as g,
  q as p,
  S as k,
} from "./q-BRFIrRA0.js";
import { _ as u } from "./q-uemlvruI.js";
import {
  u as D,
  a as A,
  g as O,
  s as $,
  b as m,
  p as C,
  l as L,
} from "./q-MDn-xmgG.js";
const q = async (o, e) => {
    const [t, s, n, l] = P();
    o.defaultPrevented &&
      (e.hasAttribute("q:nbs")
        ? await t(location.href, { type: "popstate" })
        : e.href &&
          (e.setAttribute("aria-pressed", "true"),
          await t(e.href, { forceReload: s, replaceState: n, scroll: l }),
          e.removeAttribute("aria-pressed")));
  },
  x = (o) => {
    const e = D(),
      t = A(),
      {
        onClick$: s,
        prefetch: n,
        reload: l,
        replaceState: _,
        scroll: v,
        ...r
      } = o,
      a = f(() => O({ ...r, reload: l }, t));
    r.href = a || o.href;
    const h = f(() => (!!a && n !== !1 && n !== "js" && $(a, t)) || void 0),
      i = f(() => h || (!!a && n !== !1 && m(a, t)))
        ? p(
            () => u(() => Promise.resolve().then(() => d), void 0),
            "s_Osdg8FnYTw4",
          )
        : void 0,
      b = a
        ? y((c, E) => {
            c.metaKey ||
              c.ctrlKey ||
              c.shiftKey ||
              c.altKey ||
              c.preventDefault();
          })
        : void 0;
    return S(
      "a",
      {
        "q:link": !!a,
        ...r,
        "data-prefetch": h,
        children: g(k, null, 3, "AD_0"),
        onClick$: [
          b,
          s,
          a
            ? p(
                () => u(() => Promise.resolve().then(() => d), void 0),
                "s_pIf0khHUxfY",
                [e, l, _, v],
              )
            : void 0,
        ],
        onMouseOver$: [r.onMouseOver$, i],
        onFocus$: [r.onFocus$, i],
        onQVisible$: [r.onQVisible$, i],
      },
      null,
      0,
      "AD_1",
    );
  },
  j = (o, e) => {
    var t;
    if (!((t = navigator.connection) != null && t.saveData) && e && e.href) {
      const s = new URL(e.href);
      C(s.pathname),
        e.hasAttribute("data-prefetch") &&
          L(s, e, { prefetchSymbols: !1, isPrefetch: !0 });
    }
  },
  d = Object.freeze(
    Object.defineProperty(
      { __proto__: null, s_8gdLBszqbaM: x, s_Osdg8FnYTw4: j, s_pIf0khHUxfY: q },
      Symbol.toStringTag,
      { value: "Module" },
    ),
  );
export { x as s_8gdLBszqbaM, j as s_Osdg8FnYTw4, q as s_pIf0khHUxfY };
