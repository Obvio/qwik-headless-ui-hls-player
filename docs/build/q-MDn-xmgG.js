import { _ as D } from "./q-uemlvruI.js";
import {
  C as V,
  u as v,
  n as U,
  r as x,
  z as y,
  q,
  D as R,
  A as K,
  _ as Y,
  E as z,
} from "./q-BRFIrRA0.js";
const G =
    '((i,r,a,o)=>{a=e=>{const t=document.querySelector("[q\\\\:base]");t&&r.active&&r.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;r?a(t):i.push(t)}),"serviceWorker"in navigator?navigator.serviceWorker.register("/service-worker.js").then(e=>{o=()=>{r=e,i.forEach(a),a({bundles:i})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&o()}):e.active&&o()}).catch(e=>console.error(e)):console.log("Service worker not supported in this browser.")})([])',
  ye = y("qc-s"),
  me = y("qc-c"),
  Ce = y("qc-ic"),
  J = y("qc-h"),
  X = y("qc-l"),
  Z = y("qc-n"),
  _e = y("qc-a"),
  Ee = y("qc-ir"),
  Se = q(() => D(() => import("./q-D3WBTSLL.js"), []), "s_DyVc0YBIqQU"),
  Ae = () => {},
  we = K(q(() => D(() => import("./q-MKdhnVsD.js"), []), "s_e0ssiDXoeAM")),
  b = new WeakMap(),
  _ = new Map(),
  k = new Set(),
  $ = "qaction",
  De = "qfunc",
  ve = "qdata",
  S = (e) => e.pathname + e.search + e.hash,
  C = (e, t) => new URL(e, t.href),
  p = (e, t) => e.origin === t.origin,
  I = (e) => (e.endsWith("/") ? e : e + "/"),
  B = ({ pathname: e }, { pathname: t }) => {
    const n = Math.abs(e.length - t.length);
    return n === 0 ? e === t : n === 1 && I(e) === I(t);
  },
  ee = (e, t) => e.search === t.search,
  T = (e, t) => ee(e, t) && B(e, t),
  te = (e, t, n) => {
    let s = t ?? "";
    return (
      n && (s += (s ? "&" : "?") + $ + "=" + encodeURIComponent(n.id)),
      e + (e.endsWith("/") ? "" : "/") + "q-data.json" + s
    );
  },
  qe = (e, t) => {
    const n = e.href;
    if (typeof n == "string" && typeof e.target != "string" && !e.reload)
      try {
        const s = C(n.trim(), t.url),
          r = C("", t.url);
        if (p(s, r)) return S(s);
      } catch (s) {
        console.error(s);
      }
    else if (e.reload) return S(C("", t.url));
    return null;
  },
  Te = (e, t) => {
    if (e) {
      const n = C(e, t.url),
        s = C("", t.url);
      return !T(n, s);
    }
    return !1;
  },
  Oe = (e, t) => {
    if (e) {
      const n = C(e, t.url),
        s = C("", t.url);
      return !B(n, s);
    }
    return !1;
  },
  ne = (e) => e && typeof e.then == "function",
  Pe = (e, t, n, s) => {
    const r = se(),
      c = {
        head: r,
        withLocale: (a) => R(s, a),
        resolveValue: (a) => {
          const i = a.__id;
          if (a.__brand === "server_loader" && !(i in e.loaders))
            throw new Error(
              "You can not get the returned data of a loader that has not been executed for this request.",
            );
          const l = e.loaders[i];
          if (ne(l))
            throw new Error(
              "Loaders returning a promise can not be resolved for the head function.",
            );
          return l;
        },
        ...t,
      };
    for (let a = n.length - 1; a >= 0; a--) {
      const i = n[a] && n[a].head;
      i &&
        (typeof i == "function"
          ? N(
              r,
              R(s, () => i(c)),
            )
          : typeof i == "object" && N(r, i));
    }
    return c.head;
  },
  N = (e, t) => {
    typeof t.title == "string" && (e.title = t.title),
      E(e.meta, t.meta),
      E(e.links, t.links),
      E(e.styles, t.styles),
      E(e.scripts, t.scripts),
      Object.assign(e.frontmatter, t.frontmatter);
  },
  E = (e, t) => {
    if (Array.isArray(t))
      for (const n of t) {
        if (typeof n.key == "string") {
          const s = e.findIndex((r) => r.key === n.key);
          if (s > -1) {
            e[s] = n;
            continue;
          }
        }
        e.push(n);
      }
  },
  se = () => ({
    title: "",
    meta: [],
    links: [],
    styles: [],
    scripts: [],
    frontmatter: {},
  });
function re(e, t) {
  const n = Q(e),
    s = L(e),
    r = Q(t),
    o = L(t);
  return F(e, n, s, t, r, o);
}
function F(e, t, n, s, r, o) {
  let c = null;
  for (; t < n; ) {
    const a = e.charCodeAt(t++),
      i = s.charCodeAt(r++);
    if (a === 91) {
      const l = H(e, t),
        f = t + (l ? 3 : 0),
        d = w(e, f, n, 93),
        u = e.substring(f, d),
        h = w(e, d + 1, n, 47),
        g = e.substring(d + 1, h);
      t = d + 1;
      const m = r - 1;
      if (l) {
        const P = ce(u, g, s, m, o, e, t + g.length + 1, n);
        if (P) return Object.assign(c || (c = {}), P);
      }
      const A = w(s, m, o, 47, g);
      if (A == -1) return null;
      const O = s.substring(m, A);
      if (!l && !g && !O) return null;
      (r = A), ((c || (c = {}))[u] = decodeURIComponent(O));
    } else if (a !== i && !(isNaN(i) && oe(e, t))) return null;
  }
  return W(e, t) && W(s, r) ? c || {} : null;
}
function oe(e, t) {
  return e.charCodeAt(t) === 91 && H(e, t + 1);
}
function L(e) {
  const t = e.length;
  return t > 1 && e.charCodeAt(t - 1) === 47 ? t - 1 : t;
}
function W(e, t) {
  const n = e.length;
  return t >= n || (t == n - 1 && e.charCodeAt(t) === 47);
}
function Q(e) {
  return e.charCodeAt(0) === 47 ? 1 : 0;
}
function H(e, t) {
  return (
    e.charCodeAt(t) === 46 &&
    e.charCodeAt(t + 1) === 46 &&
    e.charCodeAt(t + 2) === 46
  );
}
function w(e, t, n, s, r = "") {
  for (; t < n && e.charCodeAt(t) !== s; ) t++;
  const o = r.length;
  for (let c = 0; c < o; c++)
    if (e.charCodeAt(t - o + c) !== r.charCodeAt(c)) return -1;
  return t - o;
}
let M;
(function (e) {
  (e[(e.EOL = 0)] = "EOL"),
    (e[(e.OPEN_BRACKET = 91)] = "OPEN_BRACKET"),
    (e[(e.CLOSE_BRACKET = 93)] = "CLOSE_BRACKET"),
    (e[(e.DOT = 46)] = "DOT"),
    (e[(e.SLASH = 47)] = "SLASH");
})(M || (M = {}));
function ce(e, t, n, s, r, o, c, a) {
  n.charCodeAt(s) === 47 && s++;
  let i = r;
  const l = t + "/";
  for (; i >= s; ) {
    const f = F(o, c, a, n, i, r);
    if (f) {
      let u = n.substring(s, Math.min(i, r));
      return (
        u.endsWith(l) && (u = u.substring(0, u.length - l.length)),
        (f[e] = decodeURIComponent(u)),
        f
      );
    }
    const d = ae(n, s, l, i, s - 1) + l.length;
    if (i === d) break;
    i = d;
  }
  return null;
}
function ae(e, t, n, s, r) {
  let o = e.lastIndexOf(n, s);
  return (
    o == s - n.length && (o = e.lastIndexOf(n, s - n.length - 1)), o > t ? o : r
  );
}
const Re = async (e, t, n, s) => {
    if (Array.isArray(e))
      for (const r of e) {
        const o = r[0],
          c = re(o, s);
        if (c) {
          const a = r[1],
            i = r[3],
            l = new Array(a.length),
            f = [],
            d = ie(t, s);
          let u;
          return (
            a.forEach((h, g) => {
              j(h, f, (m) => (l[g] = m));
            }),
            j(d, f, (h) => (u = h == null ? void 0 : h.default)),
            f.length > 0 && (await Promise.all(f)),
            [o, c, l, u, i]
          );
        }
      }
    return null;
  },
  j = (e, t, n, s) => {
    if (typeof e == "function") {
      const r = b.get(e);
      if (r) n(r);
      else {
        const o = e();
        typeof o.then == "function"
          ? t.push(
              o.then((c) => {
                b.set(e, c), n(c);
              }),
            )
          : o && n(o);
      }
    }
  },
  ie = (e, t) => {
    if (e) {
      t = t.endsWith("/") ? t : t + "/";
      const n = e.find(
        (s) => s[0] === t || t.startsWith(s[0] + (t.endsWith("/") ? "" : "/")),
      );
      if (n) return n[1];
    }
  },
  be = (e, t, n, s, r = !1) => {
    if (t !== "popstate") {
      const o = T(n, s),
        c = n.hash === s.hash;
      if (!o || !c) {
        const a = { _qCityScroll: le() };
        r
          ? e.history.replaceState(a, "", S(s))
          : e.history.pushState(a, "", S(s));
      }
    }
  },
  le = () => ({ x: 0, y: 0, w: 0, h: 0 }),
  fe = (e) => {
    (e = e.endsWith("/") ? e : e + "/"),
      k.has(e) ||
        (k.add(e),
        document.dispatchEvent(
          new CustomEvent("qprefetch", { detail: { links: [e] } }),
        ));
  },
  ke = async (e, t, n) => {
    const s = e.pathname,
      r = e.search,
      o = te(s, r, n == null ? void 0 : n.action);
    let c;
    (n != null && n.action) || (c = _.get(o)),
      (n == null ? void 0 : n.prefetchSymbols) !== !1 && fe(s);
    let a;
    if (!c) {
      const i = ue(n == null ? void 0 : n.action);
      n != null && n.action && (n.action.data = void 0),
        (c = fetch(o, i).then((l) => {
          const f = new URL(l.url),
            d = f.pathname.endsWith("/q-data.json");
          if (f.origin !== location.origin || !d) {
            location.href = f.href;
            return;
          }
          if ((l.headers.get("content-type") || "").includes("json"))
            return l.text().then((u) => {
              const h = V(u, t);
              if (!h) {
                location.href = e.href;
                return;
              }
              if ((n != null && n.clearCache && _.delete(o), h.redirect))
                location.href = h.redirect;
              else if (n != null && n.action) {
                const { action: g } = n,
                  m = h.loaders[g.id];
                a = () => {
                  g.resolve({ status: l.status, result: m });
                };
              }
              return h;
            });
          (n == null ? void 0 : n.isPrefetch) !== !0 &&
            (location.href = e.href);
        })),
        (n != null && n.action) || _.set(o, c);
    }
    return c.then((i) => (i || _.delete(o), a && a(), i));
  },
  ue = (e) => {
    const t = e == null ? void 0 : e.data;
    if (t)
      return t instanceof FormData
        ? { method: "POST", body: t }
        : {
            method: "POST",
            body: JSON.stringify(t),
            headers: { "Content-Type": "application/json, charset=UTF-8" },
          };
  },
  Ie = () => v(J),
  Ne = () => v(X),
  Le = () => v(Z),
  We = () => U(x("qwikcity")),
  Qe = (e, t, n, s, r) => {
    e === "popstate" && r
      ? s.scrollTo(r.x, r.y)
      : (e === "link" || e === "form") && (he(t, n) || s.scrollTo(0, 0));
  },
  he = (e, t) => {
    const n = e.hash.slice(1),
      s = n && document.getElementById(n);
    return s ? (s.scrollIntoView(), !0) : !!(!s && e.hash && T(e, t));
  },
  Me = (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop,
    w: Math.max(e.scrollWidth, e.clientWidth),
    h: Math.max(e.scrollHeight, e.clientHeight),
  }),
  je = () => {
    const e = history.state;
    return e == null ? void 0 : e._qCityScroll;
  },
  Ve = (e) => {
    const t = history.state || {};
    (t._qCityScroll = e), history.replaceState(t, "");
  },
  Ke = "_qCityScroller",
  Be = K(q(() => D(() => import("./q-H9d_cUGd.js"), []), "s_TxCFOy819ag"));
function Fe(e) {
  for (; e && e.nodeType !== Node.ELEMENT_NODE; ) e = e.parentElement;
  return e.closest("[q\\:container]");
}
const He = (e) =>
    Y(
      "script",
      { nonce: z(e, "nonce") },
      { dangerouslySetInnerHTML: G },
      null,
      3,
      "1Z_0",
    ),
  Ue = async function* (e, t, n) {
    const s = e.getReader();
    try {
      let r = "";
      const o = new TextDecoder();
      for (; !(n != null && n.aborted); ) {
        const c = await s.read();
        if (c.done) break;
        r += o.decode(c.value, { stream: !0 });
        const a = r.split(/\n/);
        r = a.pop();
        for (const i of a) yield await V(i, t);
      }
    } finally {
      s.releaseLock();
    }
  };
export {
  Fe as A,
  We as B,
  me as C,
  J as D,
  Ie as E,
  Ae as F,
  Be as G,
  we as H,
  De as I,
  Ue as J,
  ve as K,
  Ke as Q,
  X as R,
  He as S,
  Ne as a,
  Oe as b,
  se as c,
  Ce as d,
  Z as e,
  ye as f,
  qe as g,
  _e as h,
  Ee as i,
  p as j,
  T as k,
  ke as l,
  je as m,
  Re as n,
  B as o,
  fe as p,
  Pe as q,
  Qe as r,
  Te as s,
  C as t,
  Le as u,
  _ as v,
  Ve as w,
  Me as x,
  Se as y,
  be as z,
};
