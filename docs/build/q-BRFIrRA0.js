/**
 * @license
 * @builder.io/qwik 1.5.7
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/QwikDev/qwik/blob/main/LICENSE
 */ const he = (e) => e && typeof e.nodeType == "number",
  kn = (e) => e.nodeType === 9,
  oe = (e) => e.nodeType === 1,
  $e = (e) => {
    const t = e.nodeType;
    return t === 1 || t === 111;
  },
  Bs = (e) => {
    const t = e.nodeType;
    return t === 1 || t === 111 || t === 3;
  },
  V = (e) => e.nodeType === 111,
  Rt = (e) => e.nodeType === 3,
  We = (e) => e.nodeType === 8,
  fe = (e, ...t) => Nt(!1, e, ...t),
  Us = (e, ...t) => {
    throw Nt(!1, e, ...t);
  },
  Ct = (e, ...t) => Nt(!0, e, ...t),
  Ie = () => {},
  Hs = (e) => e,
  Nt = (e, t, ...n) => {
    const s = t instanceof Error ? t : new Error(t);
    return (
      console.error("%cQWIK ERROR", "", s.message, ...Hs(n), s.stack),
      e &&
        setTimeout(() => {
          throw s;
        }, 0),
      s
    );
  };
const st = (e) =>
    `Code(${e}) https://github.com/QwikDev/qwik/blob/main/packages/qwik/src/core/error/error.ts#L${8 + e}`,
  A = (e, ...t) => {
    const n = st(e, ...t);
    return Ct(n, ...t);
  },
  Gs = () => ({
    isServer: !1,
    importSymbol(e, t, n) {
      if (!t) throw A(31, n);
      if (!e) throw A(30, t, n);
      const s = Js(e.ownerDocument, e, t).toString(),
        r = new URL(s);
      return (r.hash = ""), (r.search = ""), import(r.href).then((o) => o[n]);
    },
    raf: (e) =>
      new Promise((t) => {
        requestAnimationFrame(() => {
          t(e());
        });
      }),
    nextTick: (e) =>
      new Promise((t) => {
        setTimeout(() => {
          t(e());
        });
      }),
    chunkForSymbol: (e, t) => [e, t ?? "_"],
  }),
  Js = (e, t, n) => {
    const s = e.baseURI,
      r = new URL(t.getAttribute("q:base") ?? s, s);
    return new URL(n, r);
  };
let zn = Gs();
const kt = () => zn,
  rt = () => zn.isServer,
  ot = (e) => {
    const t = Object.getPrototypeOf(e);
    return t === Object.prototype || t === null;
  },
  ie = (e) => !!e && typeof e == "object",
  P = (e) => Array.isArray(e),
  qe = (e) => typeof e == "string",
  W = (e) => typeof e == "function",
  U = (e) => e && typeof e.then == "function",
  $t = (e, t, n) => {
    try {
      const s = e();
      return U(s) ? s.then(t, n) : t(s);
    } catch (s) {
      return n(s);
    }
  },
  T = (e, t) => (U(e) ? e.then(t) : t(e)),
  zt = (e) => (e.some(U) ? Promise.all(e) : e),
  xe = (e) => (e.length > 0 ? Promise.all(e) : e),
  On = (e) => e != null,
  Vs = (e) =>
    new Promise((t) => {
      setTimeout(t, e);
    }),
  Z = [],
  L = {},
  Be = (e) =>
    typeof document < "u" ? document : e.nodeType === 9 ? e : e.ownerDocument,
  Xs = "q:renderFn",
  ee = "q:slot",
  Ln = "q:s",
  Ot = "q:style",
  St = Symbol("proxy target"),
  be = Symbol("proxy flags"),
  J = Symbol("proxy manager"),
  M = Symbol("IMMUTABLE"),
  Lt = "_qc_",
  F = (e, t, n) => e.setAttribute(t, n),
  H = (e, t) => e.getAttribute(t),
  Ft = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase(),
  Ks = (e) => e.replace(/-./g, (t) => t[1].toUpperCase()),
  Ys = /^(on|window:|document:)/,
  Zs = "preventdefault:",
  Fn = (e) => e.endsWith("$") && Ys.test(e),
  js = (e) => {
    if (e.length === 0) return Z;
    if (e.length === 1) {
      const n = e[0];
      return [[n[0], [n[1]]]];
    }
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const s = e[n][0];
      t.includes(s) || t.push(s);
    }
    return t.map((n) => [n, e.filter((s) => s[0] === n).map((s) => s[1])]);
  },
  Dn = (e, t, n, s) => {
    if ((t.endsWith("$"), (t = vt(t.slice(0, -1))), n))
      if (P(n)) {
        const r = n
          .flat(1 / 0)
          .filter((o) => o != null)
          .map((o) => [t, hn(o, s)]);
        e.push(...r);
      } else e.push([t, hn(n, s)]);
    return t;
  },
  pn = ["on", "window:on", "document:on"],
  er = ["on", "on-window", "on-document"],
  vt = (e) => {
    let t = "on";
    for (let n = 0; n < pn.length; n++) {
      const s = pn[n];
      if (e.startsWith(s)) {
        (t = er[n]), (e = e.slice(s.length));
        break;
      }
    }
    return t + ":" + (e = e.startsWith("-") ? Ft(e.slice(1)) : e.toLowerCase());
  },
  hn = (e, t) => (e.$setContainer$(t), e),
  tr = (e, t) => {
    const n = e.$element$.attributes,
      s = [];
    for (let r = 0; r < n.length; r++) {
      const { name: o, value: $ } = n.item(r);
      if (
        o.startsWith("on:") ||
        o.startsWith("on-window:") ||
        o.startsWith("on-document:")
      ) {
        const c = $.split(`
`);
        for (const i of c) {
          const l = dt(i, t);
          l.$capture$ && Ms(l, e), s.push([o, l]);
        }
      }
    }
    return s;
  },
  nr = (e, t) => {
    Wn(Qn(e, void 0), t);
  },
  mn = (e, t) => {
    Wn(Qn(e, "document"), t);
  },
  Qn = (e, t) => {
    const n = t !== void 0 ? t + ":" : "";
    return Array.isArray(e) ? e.map((s) => `${n}on-${s}`) : `${n}on-${e}`;
  },
  Wn = (e, t) => {
    if (t) {
      const n = tn(),
        s = k(n.$hostElement$, n.$renderCtx$.$static$.$containerState$);
      typeof e == "string"
        ? s.li.push([vt(e), t])
        : s.li.push(...e.map((r) => [vt(r), t])),
        (s.$flags$ |= _t);
    }
  },
  sr = (e, t, n, s) => {
    e &&
      e.dispatchEvent(
        new CustomEvent(t, { detail: n, bubbles: s, composed: s }),
      );
  },
  Dt = (e, t, n = 0) =>
    t.$proxyMap$.get(e) || (n !== 0 && ct(e, n), it(e, t, void 0)),
  it = (e, t, n) => {
    ht(e), t.$proxyMap$.has(e);
    const s = t.$subsManager$.$createManager$(n),
      r = new Proxy(e, new Bn(t, s));
    return t.$proxyMap$.set(e, r), r;
  },
  Qt = () => {
    const e = {};
    return ct(e, 2), e;
  },
  ct = (e, t) => {
    Object.defineProperty(e, be, { value: t, enumerable: !1 });
  },
  Y$ = (e, t) => {
    const n = {};
    for (const s in e) t.includes(s) || (n[s] = e[s]);
    return n;
  };
class Bn {
  constructor(t, n) {
    (this.$containerState$ = t), (this.$manager$ = n);
  }
  deleteProperty(t, n) {
    if (2 & t[be]) throw A(17);
    return (
      typeof n == "string" &&
      delete t[n] &&
      (this.$manager$.$notifySubs$(P(t) ? void 0 : n), !0)
    );
  }
  get(t, n) {
    var l;
    if (typeof n == "symbol")
      return n === St ? t : n === J ? this.$manager$ : t[n];
    const s = t[be] ?? 0,
      r = X(),
      o = !!(1 & s),
      $ = t["$$" + n];
    let c, i;
    if (
      (r && (c = r.$subscriber$),
      !(2 & s) ||
        (n in t && !rr((l = t[M]) == null ? void 0 : l[n])) ||
        (c = null),
      $ ? ((i = $.value), (c = null)) : (i = t[n]),
      c)
    ) {
      const a = P(t);
      this.$manager$.$addSub$(c, a ? void 0 : n);
    }
    return o ? or(i, this.$containerState$) : i;
  }
  set(t, n, s) {
    if (typeof n == "symbol") return (t[n] = s), !0;
    const r = t[be] ?? 0;
    if (2 & r) throw A(17);
    const o = 1 & r ? ht(s) : s;
    if (P(t)) return (t[n] = o), this.$manager$.$notifySubs$(), !0;
    const $ = t[n];
    return (t[n] = o), $ !== o && this.$manager$.$notifySubs$(n), !0;
  }
  has(t, n) {
    if (n === St) return !0;
    const s = Object.prototype.hasOwnProperty;
    return !!s.call(t, n) || !(typeof n != "string" || !s.call(t, "$$" + n));
  }
  ownKeys(t) {
    if (!(2 & (t[be] ?? 0))) {
      let s = null;
      const r = X();
      r && (s = r.$subscriber$), s && this.$manager$.$addSub$(s);
    }
    return P(t)
      ? Reflect.ownKeys(t)
      : Reflect.ownKeys(t).map((s) =>
          typeof s == "string" && s.startsWith("$$") ? s.slice(2) : s,
        );
  }
  getOwnPropertyDescriptor(t, n) {
    return P(t) || typeof n == "symbol"
      ? Object.getOwnPropertyDescriptor(t, n)
      : { enumerable: !0, configurable: !0 };
  }
}
const rr = (e) => e === M || B(e),
  or = (e, t) => {
    if (ie(e)) {
      if (Object.isFrozen(e)) return e;
      const n = ht(e);
      if (n !== e || Ns(n)) return e;
      if (ot(n) || P(n)) return t.$proxyMap$.get(n) || Dt(n, t, 1);
    }
    return e;
  },
  me = () => {
    const e = tn(),
      t = k(e.$hostElement$, e.$renderCtx$.$static$.$containerState$),
      n = t.$seq$ || (t.$seq$ = []),
      s = e.$i$++;
    return { val: n[s], set: (r) => (n[s] = r), i: s, iCtx: e, elCtx: t };
  },
  $r = (e) => Object.freeze({ id: Ft(e) }),
  Z$ = (e, t) => {
    const { val: n, set: s, elCtx: r } = me();
    if (n !== void 0) return;
    (r.$contexts$ || (r.$contexts$ = new Map())).set(e.id, t), s(!0);
  },
  j$ = (e, t) => {
    const { val: n, set: s, iCtx: r, elCtx: o } = me();
    if (n !== void 0) return n;
    const $ = Un(e, o, r.$renderCtx$.$static$.$containerState$);
    if ($ !== void 0) return s($);
    throw A(13, e.id);
  },
  ir = (e, t) => {
    var r;
    let n = e,
      s = 1;
    for (; n && !((r = n.hasAttribute) != null && r.call(n, "q:container")); ) {
      for (; (n = n.previousSibling); )
        if (We(n)) {
          const o = n.__virtual;
          if (o) {
            const $ = o[Lt];
            if (n === o.open) return $ ?? k(o, t);
            if ($ != null && $.$parentCtx$) return $.$parentCtx$;
            n = o;
            continue;
          }
          if (n.data === "/qv") s++;
          else if (n.data.startsWith("qv ") && (s--, s === 0))
            return k(Je(n), t);
        }
      (n = e.parentElement), (e = n);
    }
    return null;
  },
  cr = (e, t) => (
    e.$parentCtx$ === void 0 && (e.$parentCtx$ = ir(e.$element$, t)),
    e.$parentCtx$
  ),
  Un = (e, t, n) => {
    var o;
    const s = e.id;
    if (!t) return;
    let r = t;
    for (; r; ) {
      const $ = (o = r.$contexts$) == null ? void 0 : o.get(s);
      if ($) return $;
      r = cr(r, n);
    }
  },
  lr = $r("qk-error"),
  Wt = (e, t, n) => {
    const s = D(t);
    {
      const r = Un(lr, s, n.$static$.$containerState$);
      if (r === void 0) throw e;
      r.error = e;
    }
  },
  ar = new Set([
    "animationIterationCount",
    "aspectRatio",
    "borderImageOutset",
    "borderImageSlice",
    "borderImageWidth",
    "boxFlex",
    "boxFlexGroup",
    "boxOrdinalGroup",
    "columnCount",
    "columns",
    "flex",
    "flexGrow",
    "flexShrink",
    "gridArea",
    "gridRow",
    "gridRowEnd",
    "gridRowStart",
    "gridColumn",
    "gridColumnEnd",
    "gridColumnStart",
    "fontWeight",
    "lineClamp",
    "lineHeight",
    "opacity",
    "order",
    "orphans",
    "scale",
    "tabSize",
    "widows",
    "zIndex",
    "zoom",
    "MozAnimationIterationCount",
    "MozBoxFlex",
    "msFlex",
    "msFlexPositive",
    "WebkitAnimationIterationCount",
    "WebkitBoxFlex",
    "WebkitBoxOrdinalGroup",
    "WebkitColumnCount",
    "WebkitColumns",
    "WebkitFlex",
    "WebkitFlexGrow",
    "WebkitFlexShrink",
    "WebkitLineClamp",
  ]),
  ur = (e) => ar.has(e),
  xt = (e, t, n) => {
    (t.$flags$ &= ~Oe), (t.$flags$ |= jt), (t.$slots$ = []), (t.li.length = 0);
    const s = t.$element$,
      r = t.$componentQrl$,
      o = t.$props$,
      $ = K(e.$static$.$locale$, s, void 0, "qRender"),
      c = ($.$waitOn$ = []),
      i = Bt(e);
    (i.$cmpCtx$ = t),
      (i.$slotCtx$ = void 0),
      ($.$subscriber$ = [0, s]),
      ($.$renderCtx$ = e),
      r.$setContainer$(e.$static$.$containerState$.$containerEl$);
    const l = r.getFn($);
    return $t(
      () => l(o),
      (a) =>
        T(
          rt()
            ? T(xe(c), () => T(Dr(e.$static$.$containerState$, e), () => xe(c)))
            : xe(c),
          () => {
            var u;
            if (t.$flags$ & Oe) {
              if (!(n && n > 100)) return xt(e, t, n ? n + 1 : 1);
              Ie(
                `Infinite loop detected. Element: ${(u = t.$componentQrl$) == null ? void 0 : u.$symbol$}`,
              );
            }
            return { node: a, rCtx: i };
          },
        ),
      (a) => {
        var u;
        if (a === ls) {
          if (!(n && n > 100)) return T(xe(c), () => xt(e, t, n ? n + 1 : 1));
          Ie(
            `Infinite loop detected. Element: ${(u = t.$componentQrl$) == null ? void 0 : u.$symbol$}`,
          );
        }
        return Wt(a, s, e), { node: Jn, rCtx: i };
      },
    );
  },
  fr = (e, t) => ({
    $static$: {
      $doc$: e,
      $locale$: t.$serverData$.locale,
      $containerState$: t,
      $hostElements$: new Set(),
      $operations$: [],
      $postOperations$: [],
      $roots$: [],
      $addSlots$: [],
      $rmSlots$: [],
      $visited$: [],
    },
    $cmpCtx$: null,
    $slotCtx$: void 0,
  }),
  Bt = (e) => ({
    $static$: e.$static$,
    $cmpCtx$: e.$cmpCtx$,
    $slotCtx$: e.$slotCtx$,
  }),
  Ut = (e, t) => {
    var n;
    return (n = t == null ? void 0 : t.$scopeIds$) != null && n.length
      ? t.$scopeIds$.join(" ") + " " + bt(e)
      : bt(e);
  },
  bt = (e) => {
    if (!e) return "";
    if (qe(e)) return e.trim();
    const t = [];
    if (P(e))
      for (const n of e) {
        const s = bt(n);
        s && t.push(s);
      }
    else for (const [n, s] of Object.entries(e)) s && t.push(n.trim());
    return t.join(" ");
  },
  Ht = (e) => {
    if (e == null) return "";
    if (typeof e == "object") {
      if (P(e)) throw A(0, e, "style");
      {
        const t = [];
        for (const n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            const s = e[n];
            s != null &&
              (n.startsWith("--")
                ? t.push(n + ":" + s)
                : t.push(Ft(n) + ":" + dr(n, s)));
          }
        return t.join(";");
      }
    }
    return String(e);
  },
  dr = (e, t) => (typeof t != "number" || t === 0 || ur(e) ? t : t + "px"),
  pr = (e) => se(e.$static$.$containerState$.$elementIndex$++),
  Hn = (e, t) => {
    const n = pr(e);
    t.$id$ = n;
  },
  Gt = (e) =>
    B(e) ? Gt(e.value) : e == null || typeof e == "boolean" ? "" : String(e);
function hr(e) {
  return e.startsWith("aria-");
}
const mr = (e, t) => !!t.key && (!lt(e) || (!W(e.type) && e.key != t.key)),
  le = "dangerouslySetInnerHTML",
  gr = (e, t = 0) => {
    for (let n = 0; n < e.length; n++)
      (t = (t << 5) - t + e.charCodeAt(n)), (t |= 0);
    return Number(Math.abs(t)).toString(36);
  },
  yr = (e, t) => `${gr(e.$hash$)}-${t}`,
  Sr = (e) => {
    const t = e.join("|");
    if (t.length > 0) return t;
  },
  ei = (e, t, n) => new Tt(e, t, n),
  vr = (e) => {
    const t = e.$funcStr$;
    let n = "";
    for (let s = 0; s < e.$args$.length; s++) n += `p${s},`;
    return `(${n})=>(${t})`;
  },
  Gn = (e, t, n, s, r, o) => {
    const $ = o == null ? null : String(o);
    return new Ue(e, t || L, n, s, r, $);
  },
  ti = (e, t, n, s, r, o) => {
    let $ = null;
    return (
      t && "children" in t && (($ = t.children), delete t.children),
      Gn(e, t, n, $, s, r)
    );
  },
  Jt = (e, t, n, s, r) => {
    const o = s == null ? null : String(s),
      $ = t ?? {};
    if (typeof e == "string" && M in $) {
      const i = $[M];
      delete $[M];
      const l = $.children;
      delete $.children;
      for (const [a, u] of Object.entries(i))
        u !== M && (delete $[a], ($[a] = u));
      return Gn(e, null, $, l, n, s);
    }
    const c = new Ue(e, $, null, $.children, n, o);
    return typeof e == "string" && t && delete t.children, c;
  };
class Ue {
  constructor(t, n, s, r, o, $ = null) {
    (this.type = t),
      (this.props = n),
      (this.immutableProps = s),
      (this.children = r),
      (this.flags = o),
      (this.key = $);
  }
}
const ke = (e) => e.children,
  lt = (e) => e instanceof Ue,
  Et = (e) => e.children,
  Jn = Symbol("skip render"),
  Vt = (e, t, n) => {
    const s = !(t.$flags$ & jt),
      r = t.$element$,
      o = e.$static$.$containerState$;
    return (
      o.$hostsStaging$.delete(t),
      o.$subsManager$.$clearSub$(r),
      T(xt(e, t), ($) => {
        const c = e.$static$,
          i = $.rCtx,
          l = K(e.$static$.$locale$, r);
        if (
          (c.$hostElements$.add(r),
          (l.$subscriber$ = [0, r]),
          (l.$renderCtx$ = i),
          s && t.$appendStyles$)
        )
          for (const u of t.$appendStyles$) Po(c, u);
        const a = ne($.node, l);
        return T(a, (u) => {
          const p = xr(r, u),
            m = Xt(t);
          return T(Ze(i, m, p, n), () => {
            t.$vdom$ = p;
          });
        });
      })
    );
  },
  Xt = (e) => (e.$vdom$ || (e.$vdom$ = je(e.$element$)), e.$vdom$);
class j {
  constructor(t, n, s, r, o, $) {
    (this.$type$ = t),
      (this.$props$ = n),
      (this.$immutableProps$ = s),
      (this.$children$ = r),
      (this.$flags$ = o),
      (this.$key$ = $),
      (this.$elm$ = null),
      (this.$text$ = ""),
      (this.$signal$ = null),
      (this.$id$ = t + ($ ? ":" + $ : ""));
  }
}
const Vn = (e, t) => {
    const {
      key: n,
      type: s,
      props: r,
      children: o,
      flags: $,
      immutableProps: c,
    } = e;
    let i = "";
    if (qe(s)) i = s;
    else {
      if (s !== ke) {
        if (W(s)) {
          const a = te(t, s, r, n, $, e.dev);
          return mr(a, e) ? Vn(Jt(ke, { children: a }, 0, n), t) : ne(a, t);
        }
        throw A(25, s);
      }
      i = Ae;
    }
    let l = Z;
    return o != null
      ? T(
          ne(o, t),
          (a) => (
            a !== void 0 && (l = P(a) ? a : [a]), new j(i, r, c, l, $, n)
          ),
        )
      : new j(i, r, c, l, $, n);
  },
  xr = (e, t) => {
    const n = t === void 0 ? Z : P(t) ? t : [t],
      s = new j(":virtual", {}, null, n, 0, null);
    return (s.$elm$ = e), s;
  },
  ne = (e, t) => {
    if (e != null && typeof e != "boolean") {
      if (Xn(e)) {
        const n = new j("#text", L, null, Z, 0, null);
        return (n.$text$ = String(e)), n;
      }
      if (lt(e)) return Vn(e, t);
      if (B(e)) {
        const n = new j("#signal", L, null, Z, 0, null);
        return (n.$signal$ = e), n;
      }
      if (P(e)) {
        const n = zt(e.flatMap((s) => ne(s, t)));
        return T(n, (s) => s.flat(100).filter(On));
      }
      return U(e)
        ? e.then((n) => ne(n, t))
        : e === Jn
          ? new j(":skipRender", L, null, Z, 0, null)
          : void Ie();
    }
  },
  Xn = (e) => qe(e) || typeof e == "number",
  Kn = (e) => {
    H(e, "q:container") === "paused" && (Er(e), Mr(e));
  },
  br = (e) => {
    const t = Be(e),
      n = Ir(e === t.documentElement ? t.body : e, "type");
    if (n) return JSON.parse(_r(n.firstChild.data) || "{}");
  },
  ni = (e, t) => {
    const n = JSON.parse(e);
    if (typeof n != "object") return null;
    const { _objs: s, _entry: r } = n;
    if (s === void 0 || r === void 0) return null;
    let o = {},
      $ = {};
    if (he(t) && $e(t)) {
      const l = ut(t);
      l && (($ = ge(l)), (o = l.ownerDocument));
    }
    const c = Ps($, o);
    for (let l = 0; l < s.length; l++) {
      const a = s[l];
      qe(a) && (s[l] = a === pt ? void 0 : c.prepare(a));
    }
    const i = (l) => s[G(l)];
    for (const l of s) Yn(l, i, c);
    return i(r);
  },
  Er = (e) => {
    if (!ao(e)) return void Ie();
    const t = e._qwikjson_ ?? br(e);
    if (((e._qwikjson_ = null), !t)) return void Ie();
    const n = Be(e),
      s = Tr(e),
      r = ge(e),
      o = new Map(),
      $ = new Map();
    let c = null,
      i = 0;
    const l = n.createTreeWalker(e, fs);
    for (; (c = l.nextNode()); ) {
      const f = c.data;
      if (i === 0) {
        if (f.startsWith("qv ")) {
          const d = qr(f);
          d >= 0 && o.set(d, c);
        } else if (f.startsWith("t=")) {
          const d = f.slice(2),
            y = G(d),
            E = Ar(c);
          o.set(y, E), $.set(y, E.data);
        }
      }
      f === "cq" ? i++ : f === "/cq" && i--;
    }
    const a = e.getElementsByClassName("qc📦").length !== 0;
    e.querySelectorAll("[q\\:id]").forEach((f) => {
      if (a && f.closest("[q\\:container]") !== e) return;
      const d = H(f, "q:id"),
        y = G(d);
      o.set(y, f);
    });
    const u = Ps(r, n),
      p = new Map(),
      m = new Set(),
      g = (f) => (
        typeof f == "string" && f.length > 0, p.has(f) ? p.get(f) : S(f)
      ),
      S = (f) => {
        if (f.startsWith("#")) {
          const x = f.slice(1),
            v = G(x);
          o.has(v);
          const b = o.get(v);
          if (We(b)) {
            if (!b.isConnected) return void p.set(f, void 0);
            const _ = Je(b);
            return p.set(f, _), k(_, r), _;
          }
          return oe(b) ? (p.set(f, b), k(b, r), b) : (p.set(f, b), b);
        }
        if (f.startsWith("@")) {
          const x = f.slice(1),
            v = G(x);
          return s[v];
        }
        if (f.startsWith("*")) {
          const x = f.slice(1),
            v = G(x);
          o.has(v);
          const b = $.get(v);
          return p.set(f, b), b;
        }
        const d = G(f),
          y = t.objs;
        y.length > d;
        let E = y[d];
        qe(E) && (E = E === pt ? void 0 : u.prepare(E));
        let h = E;
        for (let x = f.length - 1; x >= 0; x--) {
          const v = L$[f[x]];
          if (!v) break;
          h = v(h, r);
        }
        return (
          p.set(f, h),
          Xn(E) ||
            m.has(d) ||
            (m.add(d), wr(E, d, t.subs, g, r, u), Yn(E, g, u)),
          h
        );
      };
    (r.$elementIndex$ = 1e5),
      (r.$pauseCtx$ = { getObject: g, meta: t.ctx, refs: t.refs }),
      F(e, "q:container", "resumed"),
      sr(e, "qresume", void 0, !0);
  },
  wr = (e, t, n, s, r, o) => {
    const $ = n[t];
    if ($) {
      const c = [];
      let i = 0;
      for (const l of $)
        if (l.startsWith("_")) i = parseInt(l.slice(1), 10);
        else {
          const a = W$(l, s);
          a && c.push(a);
        }
      if ((i > 0 && ct(e, i), !o.subs(e, c))) {
        const l = r.$proxyMap$.get(e);
        l ? N(l).$addSubs$(c) : it(e, r, c);
      }
    }
  },
  Yn = (e, t, n) => {
    if (!n.fill(e, t) && e && typeof e == "object") {
      if (P(e)) for (let s = 0; s < e.length; s++) e[s] = t(e[s]);
      else if (ot(e)) for (const s in e) e[s] = t(e[s]);
    }
  },
  _r = (e) => e.replace(/\\x3C(\/?script)/gi, "<$1"),
  Tr = (e) => e.qFuncs ?? Z,
  Ir = (e, t) => {
    let n = e.lastElementChild;
    for (; n; ) {
      if (n.tagName === "SCRIPT" && H(n, t) === "qwik/json") return n;
      n = n.previousElementSibling;
    }
  },
  Ar = (e) => {
    const t = e.nextSibling;
    if (Rt(t)) return t;
    {
      const n = e.ownerDocument.createTextNode("");
      return e.parentElement.insertBefore(n, e), n;
    }
  },
  Mr = (e) => {
    e.qwik = { pause: () => Go(e), state: ge(e) };
  },
  qr = (e) => {
    const t = e.indexOf("q:id=");
    return t > 0 ? G(e.slice(t + 5)) : -1;
  },
  Pr = () => {
    const e = no();
    let t = e.$qrl$;
    if (t) t.$captureRef$;
    else {
      const n = e.$element$,
        s = ut(n);
      (t = dt(decodeURIComponent(String(e.$url$)), s)), Kn(s);
      const r = k(n, ge(s));
      Ms(t, r);
    }
    return t.$captureRef$;
  },
  Rr = (e, t) => {
    try {
      const n = t[0],
        s = e.$static$;
      switch (n) {
        case 1:
        case 2: {
          let r, o;
          n === 1 ? ((r = t[1]), (o = t[3])) : ((r = t[3]), (o = t[1]));
          const $ = D(r);
          if ($ == null) return;
          const c = t[4],
            i = r.namespaceURI === Ge;
          s.$containerState$.$subsManager$.$clearSignal$(t);
          let l = pe(t[2], t.slice(0, -1));
          c === "class" ? (l = Ut(l, D(o))) : c === "style" && (l = Ht(l));
          const a = Xt($);
          return c in a.$props$ && a.$props$[c] === l
            ? void 0
            : ((a.$props$[c] = l), sn(s, r, c, l, i));
        }
        case 3:
        case 4: {
          const r = t[3];
          if (!s.$visited$.includes(r)) {
            s.$containerState$.$subsManager$.$clearSignal$(t);
            const o = void 0;
            let $ = pe(t[2], t.slice(0, -1));
            const c = H$();
            Array.isArray($) && ($ = new Ue(ke, {}, null, $, 0, null));
            let i = ne($, o);
            if (U(i)) fe("Rendering promises in JSX signals is not supported");
            else {
              i === void 0 && (i = ne("", o));
              const l = ps(r),
                a = Cr(t[1]);
              if (
                ((e.$cmpCtx$ = k(a, e.$static$.$containerState$)),
                l.$type$ == i.$type$ && l.$key$ == i.$key$ && l.$id$ == i.$id$)
              )
                ve(e, l, i, 0);
              else {
                const u = [],
                  p = l.$elm$,
                  m = ae(e, i, 0, u);
                u.length &&
                  fe("Rendering promises in JSX signals is not supported"),
                  (c[3] = m),
                  we(e.$static$, r.parentElement, m, p),
                  p && on(s, p);
              }
            }
          }
        }
      }
    } catch {}
  };
function Cr(e) {
  for (; e; ) {
    if ($e(e)) return e;
    e = e.parentElement;
  }
  throw new Error("Not found");
}
const Nr = (e, t) => {
    if (e[0] === 0) {
      const n = e[1];
      Zt(n) ? Kt(n, t) : kr(n, t);
    } else zr(e, t);
  },
  kr = (e, t) => {
    Kn(t.$containerEl$);
    const n = k(e, t);
    n.$componentQrl$,
      !(n.$flags$ & Oe) &&
        ((n.$flags$ |= Oe),
        t.$hostsRendering$ !== void 0
          ? t.$hostsStaging$.add(n)
          : (t.$hostsNext$.add(n), Yt(t)));
  },
  zr = (e, t) => {
    const n = t.$hostsRendering$ !== void 0;
    t.$opsNext$.add(e), n || Yt(t);
  },
  Kt = (e, t) => {
    e.$flags$ & de ||
      ((e.$flags$ |= de),
      t.$hostsRendering$ !== void 0
        ? t.$taskStaging$.add(e)
        : (t.$taskNext$.add(e), Yt(t)));
  },
  Yt = (e) => (
    e.$renderPromise$ === void 0 &&
      (e.$renderPromise$ = kt().nextTick(() => Zn(e))),
    e.$renderPromise$
  ),
  Or = () => {
    const [e] = Pr();
    Kt(e, ge(ut(e.$el$)));
  },
  Zn = async (e) => {
    const t = e.$containerEl$,
      n = Be(t);
    try {
      const s = fr(n, e),
        r = s.$static$,
        o = (e.$hostsRendering$ = new Set(e.$hostsNext$));
      e.$hostsNext$.clear(),
        await Fr(e, s),
        e.$hostsStaging$.forEach((i) => {
          o.add(i);
        }),
        e.$hostsStaging$.clear();
      const $ = Array.from(e.$opsNext$);
      e.$opsNext$.clear();
      const c = Array.from(o);
      Wr(c),
        !e.$styleMoved$ &&
          c.length > 0 &&
          ((e.$styleMoved$ = !0),
          (t === n.documentElement ? n.body : t)
            .querySelectorAll("style[q\\:style]")
            .forEach((i) => {
              e.$styleIds$.add(H(i, Ot)), bs(r, n.head, i);
            }));
      for (const i of c) {
        const l = i.$element$;
        if (!r.$hostElements$.has(l) && i.$componentQrl$) {
          l.isConnected, r.$roots$.push(i);
          try {
            await Vt(s, i, Lr(l.parentElement));
          } catch (a) {
            fe(a);
          }
        }
      }
      return (
        $.forEach((i) => {
          Rr(s, i);
        }),
        r.$operations$.push(...r.$postOperations$),
        r.$operations$.length === 0
          ? (In(r), void (await gn(e, s)))
          : (await wo(r), In(r), gn(e, s))
      );
    } catch (s) {
      fe(s);
    }
  },
  Lr = (e) => {
    let t = 0;
    return (
      e &&
        (e.namespaceURI === Ge && (t |= O), e.tagName === "HEAD" && (t |= Ke)),
      t
    );
  },
  gn = async (e, t) => {
    const n = t.$static$.$hostElements$;
    await Qr(e, t, (s, r) => !!(s.$flags$ & jn) && (!r || n.has(s.$el$))),
      e.$hostsStaging$.forEach((s) => {
        e.$hostsNext$.add(s);
      }),
      e.$hostsStaging$.clear(),
      (e.$hostsRendering$ = void 0),
      (e.$renderPromise$ = void 0),
      e.$hostsNext$.size + e.$taskNext$.size + e.$opsNext$.size > 0 &&
        (e.$renderPromise$ = Zn(e));
  },
  wt = (e) => !!(e.$flags$ & es),
  yn = (e) => !!(e.$flags$ & ts),
  Fr = async (e, t) => {
    const n = e.$containerEl$,
      s = [],
      r = [];
    e.$taskNext$.forEach((o) => {
      wt(o) &&
        (r.push(T(o.$qrl$.$resolveLazy$(n), () => o)), e.$taskNext$.delete(o)),
        yn(o) &&
          (s.push(T(o.$qrl$.$resolveLazy$(n), () => o)),
          e.$taskNext$.delete(o));
    });
    do
      if (
        (e.$taskStaging$.forEach((o) => {
          wt(o)
            ? r.push(T(o.$qrl$.$resolveLazy$(n), () => o))
            : yn(o)
              ? s.push(T(o.$qrl$.$resolveLazy$(n), () => o))
              : e.$taskNext$.add(o);
        }),
        e.$taskStaging$.clear(),
        r.length > 0)
      ) {
        const o = await Promise.all(r);
        Ve(o), await Promise.all(o.map(($) => Xe($, e, t))), (r.length = 0);
      }
    while (e.$taskStaging$.size > 0);
    if (s.length > 0) {
      const o = await Promise.all(s);
      Ve(o);
      for (const $ of o) Xe($, e, t);
    }
  },
  Dr = (e, t) => {
    const n = e.$containerEl$,
      s = e.$taskStaging$;
    if (!s.size) return;
    const r = [];
    let o = 20;
    const $ = () => {
      if (
        (s.forEach((c) => {
          console.error("task", c.$qrl$.$symbol$),
            wt(c) && r.push(T(c.$qrl$.$resolveLazy$(n), () => c));
        }),
        s.clear(),
        r.length > 0)
      )
        return Promise.all(r).then(async (c) => {
          if (
            (Ve(c),
            await Promise.all(c.map((i) => Xe(i, e, t))),
            (r.length = 0),
            --o && s.size > 0)
          )
            return $();
          o ||
            Ie(`Infinite task loop detected. Tasks:
${Array.from(s).map((i) => `  ${i.$qrl$.$symbol$}`).join(`
`)}`);
        });
    };
    return $();
  },
  Qr = async (e, t, n) => {
    const s = [],
      r = e.$containerEl$;
    e.$taskNext$.forEach((o) => {
      n(o, !1) &&
        (o.$el$.isConnected && s.push(T(o.$qrl$.$resolveLazy$(r), () => o)),
        e.$taskNext$.delete(o));
    });
    do
      if (
        (e.$taskStaging$.forEach((o) => {
          o.$el$.isConnected &&
            (n(o, !0)
              ? s.push(T(o.$qrl$.$resolveLazy$(r), () => o))
              : e.$taskNext$.add(o));
        }),
        e.$taskStaging$.clear(),
        s.length > 0)
      ) {
        const o = await Promise.all(s);
        Ve(o);
        for (const $ of o) Xe($, e, t);
        s.length = 0;
      }
    while (e.$taskStaging$.size > 0);
  },
  Wr = (e) => {
    e.sort((t, n) =>
      2 & t.$element$.compareDocumentPosition(tt(n.$element$)) ? 1 : -1,
    );
  },
  Ve = (e) => {
    e.sort((t, n) =>
      t.$el$ === n.$el$
        ? t.$index$ < n.$index$
          ? -1
          : 1
        : 2 & t.$el$.compareDocumentPosition(tt(n.$el$))
          ? 1
          : -1,
    );
  },
  Br = (e) => {
    const t = so(),
      n = W(e) && !fn(e) ? te(void 0, e) : e;
    return io(n, t, 0);
  },
  Ur = (e) => {
    const { val: t, set: n } = me();
    return t ?? n((e = W(e) && !fn(e) ? e() : e));
  },
  si = (e) => Ur(() => Br(e)),
  jn = 1,
  es = 2,
  ts = 4,
  de = 16,
  ri = (e, t) => {
    const { val: n, set: s, iCtx: r, i: o, elCtx: $ } = me();
    if (n) return;
    const c = r.$renderCtx$.$static$.$containerState$,
      i = new at(de | es, o, $.$element$, e, void 0);
    s(!0),
      e.$resolveLazy$(c.$containerEl$),
      $.$tasks$ || ($.$tasks$ = []),
      $.$tasks$.push(i),
      oo(r, () => ss(i, c, r.$renderCtx$));
  },
  oi = (e, t) => {
    const { val: n, set: s, i: r, iCtx: o, elCtx: $ } = me(),
      c = (t == null ? void 0 : t.strategy) ?? "intersection-observer";
    if (n) return void rt();
    const i = new at(jn, r, $.$element$, e, void 0),
      l = o.$renderCtx$.$static$.$containerState$;
    $.$tasks$ || ($.$tasks$ = []),
      $.$tasks$.push(i),
      s(i),
      Vr(i, c),
      e.$resolveLazy$(l.$containerEl$),
      Kt(i, l);
  },
  ns = (e) => !!(e.$flags$ & ts),
  Hr = (e) => !!(8 & e.$flags$),
  Xe = async (e, t, n) => (
    e.$flags$ & de, ns(e) ? Gr(e, t, n) : Hr(e) ? Jr(e, t, n) : ss(e, t, n)
  ),
  Gr = (e, t, n, s) => {
    (e.$flags$ &= ~de), ze(e);
    const r = K(n.$static$.$locale$, e.$el$, void 0, "qTask"),
      { $subsManager$: o } = t;
    r.$renderCtx$ = n;
    const $ = e.$qrl$.getFn(r, () => {
        o.$clearSub$(e);
      }),
      c = [],
      i = e.$state$,
      l = ht(i),
      a = {
        track: (d, y) => {
          if (W(d)) {
            const h = K();
            return (h.$renderCtx$ = n), (h.$subscriber$ = [0, e]), te(h, d);
          }
          const E = N(d);
          return (
            E ? E.$addSub$([0, e], y) : Ct(st(26), d),
            y ? d[y] : B(d) ? d.value : d
          );
        },
        cleanup(d) {
          c.push(d);
        },
        cache(d) {
          let y = 0;
          (y = d === "immutable" ? 1 / 0 : d), (i._cache = y);
        },
        previous: l._resolved,
      };
    let u,
      p,
      m = !1;
    const g = (d, y) =>
      !m &&
      ((m = !0),
      d
        ? ((m = !0),
          (i.loading = !1),
          (i._state = "resolved"),
          (i._resolved = y),
          (i._error = void 0),
          u(y))
        : ((m = !0),
          (i.loading = !1),
          (i._state = "rejected"),
          (i._error = y),
          p(y)),
      !0);
    te(r, () => {
      (i._state = "pending"),
        (i.loading = !rt()),
        (i.value = new Promise((d, y) => {
          (u = d), (p = y);
        }));
    }),
      (e.$destroy$ = zs(() => {
        (m = !0), c.forEach((d) => d());
      }));
    const S = $t(
        () => T(s, () => $(a)),
        (d) => {
          g(!0, d);
        },
        (d) => {
          g(!1, d);
        },
      ),
      f = l._timeout;
    return f > 0
      ? Promise.race([
          S,
          Vs(f).then(() => {
            g(!1, new Error("timeout")) && ze(e);
          }),
        ])
      : S;
  },
  ss = (e, t, n) => {
    (e.$flags$ &= ~de), ze(e);
    const s = e.$el$,
      r = K(n.$static$.$locale$, s, void 0, "qTask");
    r.$renderCtx$ = n;
    const { $subsManager$: o } = t,
      $ = e.$qrl$.getFn(r, () => {
        o.$clearSub$(e);
      }),
      c = [];
    e.$destroy$ = zs(() => {
      c.forEach((l) => l());
    });
    const i = {
      track: (l, a) => {
        if (W(l)) {
          const p = K();
          return (p.$subscriber$ = [0, e]), te(p, l);
        }
        const u = N(l);
        return (
          u ? u.$addSub$([0, e], a) : Ct(st(26), l),
          a ? l[a] : B(l) ? l.value : l
        );
      },
      cleanup(l) {
        c.push(l);
      },
    };
    return $t(
      () => $(i),
      (l) => {
        W(l) && c.push(l);
      },
      (l) => {
        Wt(l, s, n);
      },
    );
  },
  Jr = (e, t, n) => {
    e.$state$, (e.$flags$ &= ~de), ze(e);
    const s = e.$el$,
      r = K(n.$static$.$locale$, s, void 0, "qComputed");
    (r.$subscriber$ = [0, e]), (r.$renderCtx$ = n);
    const { $subsManager$: o } = t,
      $ = e.$qrl$.getFn(r, () => {
        o.$clearSub$(e);
      });
    return $t(
      $,
      (c) =>
        $o(() => {
          const i = e.$state$;
          (i[Le] &= ~cs), (i.untrackedValue = c), i[J].$notifySubs$();
        }),
      (c) => {
        Wt(c, s, n);
      },
    );
  },
  ze = (e) => {
    const t = e.$destroy$;
    if (t) {
      e.$destroy$ = void 0;
      try {
        t();
      } catch (n) {
        fe(n);
      }
    }
  },
  rs = (e) => {
    32 & e.$flags$ ? ((e.$flags$ &= -33), (0, e.$qrl$)()) : ze(e);
  },
  Vr = (e, t) => {
    t === "visible" || t === "intersection-observer"
      ? nr("qvisible", gt(e))
      : t === "load" || t === "document-ready"
        ? mn("qinit", gt(e))
        : (t !== "idle" && t !== "document-idle") || mn("qidle", gt(e));
  },
  gt = (e) => {
    const t = e.$qrl$;
    return mt(t.$chunk$, "_hW", Or, null, null, [e], t.$symbol$);
  },
  Zt = (e) => ie(e) && e instanceof at,
  Xr = (e, t) => {
    let n = `${se(e.$flags$)} ${se(e.$index$)} ${t(e.$qrl$)} ${t(e.$el$)}`;
    return e.$state$ && (n += ` ${t(e.$state$)}`), n;
  },
  Kr = (e) => {
    const [t, n, s, r, o] = e.split(" ");
    return new at(G(t), G(n), r, s, o);
  };
class at {
  constructor(t, n, s, r, o) {
    (this.$flags$ = t),
      (this.$index$ = n),
      (this.$el$ = s),
      (this.$qrl$ = r),
      (this.$state$ = o);
  }
}
function Yr(e) {
  return Zr(e) && e.nodeType === 1;
}
function Zr(e) {
  return e && typeof e.nodeType == "number";
}
const Oe = 1,
  _t = 2,
  jt = 4,
  os = 8,
  D = (e) => e[Lt],
  k = (e, t) => {
    const n = D(e);
    if (n) return n;
    const s = en(e),
      r = H(e, "q:id");
    if (r) {
      const o = t.$pauseCtx$;
      if (((s.$id$ = r), o)) {
        const { getObject: $, meta: c, refs: i } = o;
        if (Yr(e)) {
          const l = i[r];
          l &&
            ((s.$refMap$ = l.split(" ").map($)),
            (s.li = tr(s, t.$containerEl$)));
        } else {
          const l = e.getAttribute("q:sstyle");
          s.$scopeIds$ = l ? l.split("|") : null;
          const a = c[r];
          if (a) {
            const u = a.s,
              p = a.h,
              m = a.c,
              g = a.w;
            if (
              (u && (s.$seq$ = u.split(" ").map($)),
              g && (s.$tasks$ = g.split(" ").map($)),
              m)
            ) {
              s.$contexts$ = new Map();
              for (const S of m.split(" ")) {
                const [f, d] = S.split("=");
                s.$contexts$.set(f, $(d));
              }
            }
            if (p) {
              const [S, f] = p.split(" ");
              if (((s.$flags$ = jt), S && (s.$componentQrl$ = $(S)), f)) {
                const d = $(f);
                (s.$props$ = d), ct(d, 2), (d[M] = jr(d));
              } else s.$props$ = it(Qt(), t);
            }
          }
        }
      }
    }
    return s;
  },
  jr = (e) => {
    const t = {},
      n = ye(e);
    for (const s in n) s.startsWith("$$") && (t[s.slice(2)] = n[s]);
    return t;
  },
  en = (e) => {
    const t = {
      $flags$: 0,
      $id$: "",
      $element$: e,
      $refMap$: [],
      li: [],
      $tasks$: null,
      $seq$: null,
      $slots$: null,
      $scopeIds$: null,
      $appendStyles$: null,
      $props$: null,
      $vdom$: null,
      $componentQrl$: null,
      $contexts$: null,
      $dynamicSlots$: null,
      $parentCtx$: void 0,
      $realParentCtx$: void 0,
    };
    return (e[Lt] = t), t;
  },
  eo = (e, t) => {
    var n;
    (n = e.$tasks$) == null ||
      n.forEach((s) => {
        t.$clearSub$(s), rs(s);
      }),
      (e.$componentQrl$ = null),
      (e.$seq$ = null),
      (e.$tasks$ = null);
  };
let _e;
function $i(e) {
  if (_e === void 0) {
    const t = X();
    return t && t.$locale$ ? t.$locale$ : e;
  }
  return _e;
}
function ii(e, t) {
  const n = _e;
  try {
    return (_e = e), t();
  } finally {
    _e = n;
  }
}
function to(e) {
  _e = e;
}
let Ce;
const X = () => {
    if (!Ce) {
      const e = typeof document < "u" && document && document.__q_context__;
      return e ? (P(e) ? (document.__q_context__ = $s(e)) : e) : void 0;
    }
    return Ce;
  },
  no = () => {
    const e = X();
    if (!e) throw A(14);
    return e;
  },
  tn = () => {
    const e = X();
    if (!e || e.$event$ !== "qRender") throw A(20);
    return e.$hostElement$, e.$waitOn$, e.$renderCtx$, e.$subscriber$, e;
  },
  so = () => tn().$renderCtx$.$static$.$containerState$;
function te(e, t, ...n) {
  return ro.call(this, e, t, n);
}
function ro(e, t, n) {
  const s = Ce;
  let r;
  try {
    (Ce = e), (r = t.apply(this, n));
  } finally {
    Ce = s;
  }
  return r;
}
const oo = (e, t) => {
    const n = e.$waitOn$;
    if (n.length === 0) {
      const s = t();
      U(s) && n.push(s);
    } else n.push(Promise.all(n).then(t));
  },
  $s = ([e, t, n]) => {
    const s = e.closest("[q\\:container]"),
      r = (s == null ? void 0 : s.getAttribute("q:locale")) || void 0;
    return r && to(r), K(r, void 0, e, t, n);
  },
  K = (e, t, n, s, r) => ({
    $url$: r,
    $i$: 0,
    $hostElement$: t,
    $element$: n,
    $event$: s,
    $qrl$: void 0,
    $waitOn$: void 0,
    $subscriber$: void 0,
    $renderCtx$: void 0,
    $locale$:
      e || (typeof s == "object" && s && "locale" in s ? s.locale : void 0),
  }),
  ut = (e) => e.closest("[q\\:container]"),
  $o = (e) => te(void 0, e),
  Sn = K(void 0, void 0, void 0, "qRender"),
  pe = (e, t) => ((Sn.$subscriber$ = t), te(Sn, () => e.value)),
  ci = () => {
    var t;
    const e = X();
    if (e)
      return (
        e.$element$ ??
        e.$hostElement$ ??
        ((t = e.$qrl$) == null ? void 0 : t.$setContainer$(void 0))
      );
  },
  li = (e) => {
    const t = X();
    return (
      t &&
        t.$hostElement$ &&
        t.$renderCtx$ &&
        (k(t.$hostElement$, t.$renderCtx$.$static$.$containerState$).$flags$ |=
          os),
      e
    );
  },
  ai = (e) => {
    const t = ut(e);
    return t ? ge(t).$renderPromise$ ?? Promise.resolve() : Promise.resolve();
  };
var is;
const io = (e, t, n, s) => {
    const r = t.$subsManager$.$createManager$(s);
    return new Fe(e, r, n);
  },
  Le = Symbol("proxy manager"),
  co = 1,
  cs = 2,
  ls = Symbol("unassigned signal");
class He {}
class Fe extends He {
  constructor(t, n, s) {
    super(),
      (this[is] = 0),
      (this.untrackedValue = t),
      (this[J] = n),
      (this[Le] = s);
  }
  valueOf() {}
  toString() {
    return `[Signal ${String(this.value)}]`;
  }
  toJSON() {
    return { value: this.value };
  }
  get value() {
    var n;
    if (this[Le] & cs) throw ls;
    const t = (n = X()) == null ? void 0 : n.$subscriber$;
    return t && this[J].$addSub$(t), this.untrackedValue;
  }
  set value(t) {
    const n = this[J];
    n &&
      this.untrackedValue !== t &&
      ((this.untrackedValue = t), n.$notifySubs$());
  }
}
is = Le;
class Tt extends He {
  constructor(t, n, s) {
    super(), (this.$func$ = t), (this.$args$ = n), (this.$funcStr$ = s);
  }
  get value() {
    return this.$func$.apply(void 0, this.$args$);
  }
}
class It extends He {
  constructor(t, n) {
    super(), (this.ref = t), (this.prop = n);
  }
  get [J]() {
    return N(this.ref);
  }
  get value() {
    return this.ref[this.prop];
  }
  set value(t) {
    this.ref[this.prop] = t;
  }
}
const B = (e) => e instanceof He,
  lo = (e, t) => {
    var r, o;
    if (!ie(e)) return e[t];
    if (e instanceof He) return e;
    const n = ye(e);
    if (n) {
      const $ = n["$$" + t];
      if ($) return $;
      if (((r = n[M]) == null ? void 0 : r[t]) !== !0) return new It(e, t);
    }
    const s = (o = e[M]) == null ? void 0 : o[t];
    return B(s) ? s : M;
  },
  ui = (e, t) => {
    const n = lo(e, t);
    return n === M ? e[t] : n;
  },
  vn = Symbol("ContainerState"),
  ge = (e) => {
    let t = e[vn];
    return t || (e[vn] = t = as(e, H(e, "q:base") ?? "/")), t;
  },
  as = (e, t) => {
    const n = {
      $containerEl$: e,
      $elementIndex$: 0,
      $styleMoved$: !1,
      $proxyMap$: new WeakMap(),
      $opsNext$: new Set(),
      $taskNext$: new Set(),
      $taskStaging$: new Set(),
      $hostsNext$: new Set(),
      $hostsStaging$: new Set(),
      $styleIds$: new Set(),
      $events$: new Set(),
      $serverData$: {},
      $base$: t,
      $renderPromise$: void 0,
      $hostsRendering$: void 0,
      $pauseCtx$: void 0,
      $subsManager$: null,
      $inlineFns$: new Map(),
    };
    return (n.$subsManager$ = B$(n)), n;
  },
  us = (e, t) => {
    if (W(e)) return e(t);
    if (B(e)) return (e.value = t);
    throw A(32, e);
  },
  fs = 128,
  ao = (e) => oe(e) && e.hasAttribute("q:container"),
  se = (e) => e.toString(36),
  G = (e) => parseInt(e, 36),
  uo = (e) => {
    const t = e.indexOf(":");
    return e && Ks(e.slice(t + 1));
  },
  Ge = "http://www.w3.org/2000/svg",
  O = 1,
  Ke = 2,
  Ye = [],
  Ze = (e, t, n, s) => {
    t.$elm$;
    const r = n.$children$;
    if (r.length === 1 && r[0].$type$ === ":skipRender")
      return void (n.$children$ = t.$children$);
    const o = t.$elm$;
    let $ = et;
    t.$children$ === Ye && o.nodeName === "HEAD" && (($ = ho), (s |= Ke));
    const c = fo(t, $);
    return c.length > 0 && r.length > 0
      ? po(e, o, c, r, s)
      : c.length > 0 && r.length === 0
        ? nn(e.$static$, c, 0, c.length - 1)
        : r.length > 0
          ? ms(e, o, null, r, 0, r.length - 1, s)
          : void 0;
  },
  fo = (e, t) => {
    const n = e.$children$;
    return n === Ye ? (e.$children$ = ds(e.$elm$, t)) : n;
  },
  po = (e, t, n, s, r) => {
    let o = 0,
      $ = 0,
      c = n.length - 1,
      i = n[0],
      l = n[c],
      a = s.length - 1,
      u = s[0],
      p = s[a],
      m,
      g,
      S;
    const f = [],
      d = e.$static$;
    for (; o <= c && $ <= a; )
      if (i == null) i = n[++o];
      else if (l == null) l = n[--c];
      else if (u == null) u = s[++$];
      else if (p == null) p = s[--a];
      else if (i.$id$ === u.$id$)
        f.push(ve(e, i, u, r)), (i = n[++o]), (u = s[++$]);
      else if (l.$id$ === p.$id$)
        f.push(ve(e, l, p, r)), (l = n[--c]), (p = s[--a]);
      else if (i.$key$ && i.$id$ === p.$id$)
        i.$elm$,
          l.$elm$,
          f.push(ve(e, i, p, r)),
          qo(d, t, i.$elm$, l.$elm$),
          (i = n[++o]),
          (p = s[--a]);
      else if (l.$key$ && l.$id$ === u.$id$)
        i.$elm$,
          l.$elm$,
          f.push(ve(e, l, u, r)),
          we(d, t, l.$elm$, i.$elm$),
          (l = n[--c]),
          (u = s[++$]);
      else {
        if (
          (m === void 0 && (m = Io(n, o, c)), (g = m[u.$key$]), g === void 0)
        ) {
          const E = ae(e, u, r, f);
          we(d, t, E, i == null ? void 0 : i.$elm$);
        } else if (((S = n[g]), S.$type$ !== u.$type$)) {
          const E = ae(e, u, r, f);
          T(E, (h) => {
            we(d, t, h, i == null ? void 0 : i.$elm$);
          });
        } else
          f.push(ve(e, S, u, r)),
            (n[g] = void 0),
            S.$elm$,
            we(d, t, S.$elm$, i.$elm$);
        u = s[++$];
      }
    $ <= a &&
      f.push(ms(e, t, s[a + 1] == null ? null : s[a + 1].$elm$, s, $, a, r));
    let y = zt(f);
    return (
      o <= c &&
        (y = T(y, () => {
          nn(d, n, o, c);
        })),
      y
    );
  },
  Ee = (e, t) => {
    const n = V(e) ? e.close : null,
      s = [];
    let r = e.firstChild;
    for (; (r = $n(r)) && (t(r) && s.push(r), (r = r.nextSibling), r !== n); );
    return s;
  },
  ds = (e, t) => Ee(e, t).map(ps),
  ps = (e) => {
    var t;
    return oe(e) ? ((t = D(e)) == null ? void 0 : t.$vdom$) ?? je(e) : je(e);
  },
  je = (e) => {
    if ($e(e)) {
      const t = new j(e.localName, {}, null, Ye, 0, Mt(e));
      return (t.$elm$ = e), t;
    }
    if (Rt(e)) {
      const t = new j(e.nodeName, L, null, Ye, 0, null);
      return (t.$text$ = e.data), (t.$elm$ = e), t;
    }
  },
  ho = (e) => {
    const t = e.nodeType;
    return t === 1 ? e.hasAttribute("q:head") : t === 111;
  },
  At = (e) => e.nodeName === "Q:TEMPLATE",
  et = (e) => {
    const t = e.nodeType;
    if (t === 3 || t === 111) return !0;
    if (t !== 1) return !1;
    const n = e.nodeName;
    return (
      n !== "Q:TEMPLATE" &&
      (n === "HEAD"
        ? e.hasAttribute("q:head")
        : n !== "STYLE" || !e.hasAttribute(Ot))
    );
  },
  hs = (e) => {
    const t = {};
    for (const n of e) {
      const s = mo(n);
      (
        t[s] ?? (t[s] = new j(Ae, { [Ln]: "" }, null, [], 0, s))
      ).$children$.push(n);
    }
    return t;
  },
  ve = (e, t, n, s) => {
    t.$type$, n.$type$, t.$key$, n.$key$, t.$id$, n.$id$;
    const r = t.$elm$,
      o = n.$type$,
      $ = e.$static$,
      c = $.$containerState$,
      i = e.$cmpCtx$;
    if (((n.$elm$ = r), o === "#text")) {
      $.$visited$.push(r);
      const p = n.$signal$;
      return (
        p && (n.$text$ = Gt(pe(p, [4, i.$element$, p, r]))),
        void re($, r, "data", n.$text$)
      );
    }
    if (o === "#signal") return;
    const l = n.$props$,
      a = n.$flags$,
      u = k(r, c);
    if (o !== Ae) {
      let p = !!(s & O);
      if ((p || o !== "svg" || ((s |= O), (p = !0)), l !== L)) {
        1 & a || (u.li.length = 0);
        const m = t.$props$;
        n.$props$ = m;
        for (const g in l) {
          let S = l[g];
          if (g !== "ref")
            if (Fn(g)) {
              const f = Dn(u.li, g, S, c.$containerEl$);
              Ss($, r, f);
            } else
              B(S) && (S = pe(S, [1, i.$element$, S, r, g])),
                g === "class" ? (S = Ut(S, i)) : g === "style" && (S = Ht(S)),
                m[g] !== S && ((m[g] = S), sn($, r, g, S, p));
          else S !== void 0 && us(S, r);
        }
      }
      return 2 & a ||
        (p && o === "foreignObject" && (s &= ~O), l[le] !== void 0) ||
        o === "textarea"
        ? void 0
        : Ze(e, t, n, s);
    }
    if ("q:renderFn" in l) {
      const p = l.props;
      Eo(c, u, p);
      let m = !!(u.$flags$ & Oe);
      return (
        m ||
          u.$componentQrl$ ||
          u.$element$.hasAttribute("q:id") ||
          (Hn(e, u),
          (u.$componentQrl$ = p["q:renderFn"]),
          u.$componentQrl$,
          (m = !0)),
        m ? T(Vt(e, u, s), () => xn(e, u, n, s)) : xn(e, u, n, s)
      );
    }
    if ("q:s" in l) return i.$slots$, void i.$slots$.push(n);
    if (le in l) re($, r, "innerHTML", l[le]);
    else if (!(2 & a)) return Ze(e, t, n, s);
  },
  xn = (e, t, n, s) => {
    if (2 & n.$flags$) return;
    const r = e.$static$,
      o = hs(n.$children$),
      $ = ys(t);
    for (const c in $.slots)
      if (!o[c]) {
        const i = $.slots[c],
          l = ds(i, et);
        if (l.length > 0) {
          const a = D(i);
          a && a.$vdom$ && (a.$vdom$.$children$ = []),
            nn(r, l, 0, l.length - 1);
        }
      }
    for (const c in $.templates) {
      const i = $.templates[c];
      i && !o[c] && (($.templates[c] = void 0), on(r, i));
    }
    return zt(
      Object.keys(o).map((c) => {
        const i = o[c],
          l = gs(r, $, t, c, e.$static$.$containerState$),
          a = Xt(l),
          u = Bt(e),
          p = l.$element$;
        (u.$slotCtx$ = l), (l.$vdom$ = i), (i.$elm$ = p);
        let m = s & ~O;
        p.isSvg && (m |= O);
        const g = r.$addSlots$.findIndex((S) => S[0] === p);
        return g >= 0 && r.$addSlots$.splice(g, 1), Ze(u, a, i, m);
      }),
    );
  },
  ms = (e, t, n, s, r, o, $) => {
    const c = [];
    for (; r <= o; ++r) {
      const i = s[r],
        l = ae(e, i, $, c);
      we(e.$static$, t, l, n);
    }
    return xe(c);
  },
  nn = (e, t, n, s) => {
    for (; n <= s; ++n) {
      const r = t[n];
      r && (r.$elm$, on(e, r.$elm$));
    }
  },
  gs = (e, t, n, s, r) => {
    const o = t.slots[s];
    if (o) return k(o, r);
    const $ = t.templates[s];
    if ($) return k($, r);
    const c = Es(e.$doc$, s),
      i = en(c);
    return (i.$parentCtx$ = n), Co(e, n.$element$, c), (t.templates[s] = c), i;
  },
  mo = (e) => e.$props$[ee] ?? "",
  ae = (e, t, n, s) => {
    const r = t.$type$,
      o = e.$static$.$doc$,
      $ = e.$cmpCtx$;
    if (r === "#text") return (t.$elm$ = o.createTextNode(t.$text$));
    if (r === "#signal") {
      const f = t.$signal$,
        d = f.value;
      if (lt(d)) {
        const y = ne(d);
        if (B(y)) throw new Error("NOT IMPLEMENTED: Promise");
        if (Array.isArray(y)) throw new Error("NOT IMPLEMENTED: Array");
        {
          const E = ae(e, y, n, s);
          return (
            pe(f, 4 & n ? [3, E, f, E] : [4, $.$element$, f, E]), (t.$elm$ = E)
          );
        }
      }
      {
        const y = o.createTextNode(t.$text$);
        return (
          (y.data = t.$text$ = Gt(d)),
          pe(f, 4 & n ? [3, y, f, y] : [4, $.$element$, f, y]),
          (t.$elm$ = y)
        );
      }
    }
    let c,
      i = !!(n & O);
    i || r !== "svg" || ((n |= O), (i = !0));
    const l = r === Ae,
      a = t.$props$,
      u = e.$static$,
      p = u.$containerState$;
    l
      ? (c = Lo(o, i))
      : r === "head"
        ? ((c = o.head), (n |= Ke))
        : ((c = rn(o, r, i)), (n &= ~Ke)),
      2 & t.$flags$ && (n |= 4),
      (t.$elm$ = c);
    const m = en(c);
    if (
      (e.$slotCtx$
        ? ((m.$parentCtx$ = e.$slotCtx$), (m.$realParentCtx$ = e.$cmpCtx$))
        : (m.$parentCtx$ = e.$cmpCtx$),
      l)
    ) {
      if ("q:renderFn" in a) {
        const f = a["q:renderFn"],
          d = Qt(),
          y = p.$subsManager$.$createManager$(),
          E = new Proxy(d, new Bn(p, y)),
          h = a.props;
        if ((p.$proxyMap$.set(d, E), (m.$props$ = E), h !== L)) {
          const v = (d[M] = h[M] ?? L);
          for (const b in h)
            if (b !== "children" && b !== ee) {
              const _ = v[b];
              B(_) ? (d["$$" + b] = _) : (d[b] = h[b]);
            }
        }
        Hn(e, m), (m.$componentQrl$ = f);
        const x = T(Vt(e, m, n), () => {
          let v = t.$children$;
          if (v.length === 0) return;
          v.length === 1 &&
            v[0].$type$ === ":skipRender" &&
            (v = v[0].$children$);
          const b = ys(m),
            _ = [],
            R = hs(v);
          for (const C in R) {
            const Q = R[C],
              ce = gs(u, b, m, C, u.$containerState$),
              Y = Bt(e),
              Se = ce.$element$;
            (Y.$slotCtx$ = ce), (ce.$vdom$ = Q), (Q.$elm$ = Se);
            let z = n & ~O;
            Se.isSvg && (z |= O);
            for (const q of Q.$children$) {
              const Pe = ae(Y, q, z, _);
              q.$elm$, q.$elm$, bs(u, Se, Pe);
            }
          }
          return xe(_);
        });
        return U(x) && s.push(x), c;
      }
      if ("q:s" in a)
        $.$slots$,
          zo(c, t.$key$),
          F(c, "q:sref", $.$id$),
          F(c, "q:s", ""),
          $.$slots$.push(t),
          u.$addSlots$.push([c, $.$element$]);
      else if (le in a) return re(u, c, "innerHTML", a[le]), c;
    } else {
      if (t.$immutableProps$) {
        const f =
          a !== L
            ? Object.fromEntries(
                Object.entries(t.$immutableProps$).map(([d, y]) => [
                  d,
                  y === M ? a[d] : y,
                ]),
              )
            : t.$immutableProps$;
        wn(u, m, $, f, i, !0);
      }
      if (a !== L) {
        m.$vdom$ = t;
        const f = t.$immutableProps$
          ? Object.fromEntries(
              Object.entries(a).filter(([d]) => !(d in t.$immutableProps$)),
            )
          : a;
        t.$props$ = wn(u, m, $, f, i, !1);
      }
      if ((i && r === "foreignObject" && ((i = !1), (n &= ~O)), $)) {
        const f = $.$scopeIds$;
        f &&
          f.forEach((d) => {
            c.classList.add(d);
          }),
          $.$flags$ & _t && (m.li.push(...$.li), ($.$flags$ &= ~_t));
      }
      for (const f of m.li) Ss(u, c, f[0]);
      if (a[le] !== void 0) return c;
      i && r === "foreignObject" && ((i = !1), (n &= ~O));
    }
    let g = t.$children$;
    if (g.length === 0) return c;
    g.length === 1 && g[0].$type$ === ":skipRender" && (g = g[0].$children$);
    const S = g.map((f) => ae(e, f, n, s));
    for (const f of S) De(c, f);
    return c;
  },
  go = (e) => {
    const t = e.$slots$;
    return t || (e.$element$.parentElement, (e.$slots$ = yo(e)));
  },
  ys = (e) => {
    const t = go(e),
      n = {},
      s = {},
      r = Array.from(e.$element$.childNodes).filter(At);
    for (const o of t) o.$elm$, (n[o.$key$ ?? ""] = o.$elm$);
    for (const o of r) s[H(o, ee) ?? ""] = o;
    return { slots: n, templates: s };
  },
  yo = (e) => {
    const t = e.$element$.parentElement;
    return Wo(t, "q:sref", e.$id$).map(je);
  },
  So = (e, t, n) => (re(e, t.style, "cssText", n), !0),
  bn = (e, t, n) => (
    t.namespaceURI === Ge ? Qe(e, t, "class", n) : re(e, t, "className", n), !0
  ),
  En = (e, t, n, s) =>
    s in t &&
    ((t[s] !== n || (s === "value" && !t.hasAttribute(s))) &&
      (s === "value" && t.tagName !== "OPTION"
        ? Mo(e, t, s, n)
        : re(e, t, s, n)),
    !0),
  Re = (e, t, n, s) => (Qe(e, t, s.toLowerCase(), n), !0),
  vo = (e, t, n) => (re(e, t, "innerHTML", n), !0),
  xo = () => !0,
  bo = {
    style: So,
    class: bn,
    className: bn,
    value: En,
    checked: En,
    href: Re,
    list: Re,
    form: Re,
    tabIndex: Re,
    download: Re,
    innerHTML: xo,
    [le]: vo,
  },
  sn = (e, t, n, s, r) => {
    if (hr(n)) return void Qe(e, t, n, s != null ? String(s) : s);
    const o = bo[n];
    (o && o(e, t, s, n)) ||
      (r || !(n in t)
        ? (n.startsWith(Zs) && vs(n.slice(15)), Qe(e, t, n, s))
        : re(e, t, n, s));
  },
  wn = (e, t, n, s, r, o) => {
    const $ = {},
      c = t.$element$;
    for (const i in s) {
      let l = s[i];
      if (i !== "ref")
        if (Fn(i)) Dn(t.li, i, l, e.$containerState$.$containerEl$);
        else {
          if (
            (B(l) &&
              (l = pe(
                l,
                o ? [1, c, l, n.$element$, i] : [2, n.$element$, l, c, i],
              )),
            i === "class")
          ) {
            if (((l = Ut(l, n)), !l)) continue;
          } else i === "style" && (l = Ht(l));
          ($[i] = l), sn(e, c, i, l, r);
        }
      else l !== void 0 && us(l, c);
    }
    return $;
  },
  Eo = (e, t, n) => {
    let s = t.$props$;
    if ((s || (t.$props$ = s = it(Qt(), e)), n === L)) return;
    const r = N(s),
      o = ye(s),
      $ = (o[M] = n[M] ?? L);
    for (const c in n)
      if (c !== "children" && c !== ee && !$[c]) {
        const i = n[c];
        o[c] !== i && ((o[c] = i), r.$notifySubs$(c));
      }
  },
  Ne = (e, t, n, s) => {
    if ((n.$clearSub$(e), $e(e))) {
      if (s && e.hasAttribute("q:s")) return void t.$rmSlots$.push(e);
      const r = D(e);
      r && eo(r, n);
      const o = V(e) ? e.close : null;
      let $ = e.firstChild;
      for (; ($ = $n($)) && (Ne($, t, n, !0), ($ = $.nextSibling), $ !== o); );
    }
  },
  _n = () => {
    document.__q_scroll_restore__ &&
      (document.__q_scroll_restore__(),
      (document.__q_scroll_restore__ = void 0));
  },
  wo = async (e) => {
    document.__q_view_transition__ &&
    ((document.__q_view_transition__ = void 0), document.startViewTransition)
      ? await document.startViewTransition(() => {
          Tn(e), _n();
        }).finished
      : (Tn(e), _n());
  },
  De = (e, t) => {
    V(t) ? t.appendTo(e) : e.appendChild(t);
  },
  _o = (e, t) => {
    V(t) ? t.remove() : e.removeChild(t);
  },
  To = (e, t, n) => {
    V(t)
      ? t.insertBeforeTo(e, (n == null ? void 0 : n.nextSibling) ?? null)
      : e.insertBefore(t, (n == null ? void 0 : n.nextSibling) ?? null);
  },
  ft = (e, t, n) => {
    V(t) ? t.insertBeforeTo(e, tt(n)) : e.insertBefore(t, tt(n));
  },
  Io = (e, t, n) => {
    const s = {};
    for (let r = t; r <= n; ++r) {
      const o = e[r].$key$;
      o != null && (s[o] = r);
    }
    return s;
  },
  Ss = (e, t, n) => {
    n.startsWith("on:") || Qe(e, t, n, ""), vs(n);
  },
  vs = (e) => {
    var t;
    {
      const n = uo(e);
      try {
        ((t = globalThis).qwikevents || (t.qwikevents = [])).push(n);
      } catch {}
    }
  },
  Qe = (e, t, n, s) => {
    e.$operations$.push({ $operation$: Ao, $args$: [t, n, s] });
  },
  Ao = (e, t, n) => {
    if (n == null || n === !1) e.removeAttribute(t);
    else {
      const s = n === !0 ? "" : String(n);
      F(e, t, s);
    }
  },
  re = (e, t, n, s) => {
    e.$operations$.push({ $operation$: xs, $args$: [t, n, s] });
  },
  Mo = (e, t, n, s) => {
    e.$postOperations$.push({ $operation$: xs, $args$: [t, n, s] });
  },
  xs = (e, t, n) => {
    try {
      (e[t] = n ?? ""), n == null && he(e) && oe(e) && e.removeAttribute(t);
    } catch (s) {
      fe(st(6), t, { node: e, value: n }, s);
    }
  },
  rn = (e, t, n) => (n ? e.createElementNS(Ge, t) : e.createElement(t)),
  we = (e, t, n, s) => (
    e.$operations$.push({ $operation$: ft, $args$: [t, n, s || null] }), n
  ),
  qo = (e, t, n, s) => (
    e.$operations$.push({ $operation$: To, $args$: [t, n, s || null] }), n
  ),
  bs = (e, t, n) => (
    e.$operations$.push({ $operation$: De, $args$: [t, n] }), n
  ),
  Po = (e, t) => {
    e.$containerState$.$styleIds$.add(t.styleId),
      e.$postOperations$.push({
        $operation$: Ro,
        $args$: [e.$containerState$, t],
      });
  },
  Ro = (e, t) => {
    const n = e.$containerEl$,
      s = Be(n),
      r = s.documentElement === n,
      o = s.head,
      $ = s.createElement("style");
    F($, Ot, t.styleId),
      F($, "hidden", ""),
      ($.textContent = t.content),
      r && o ? De(o, $) : ft(n, $, n.firstChild);
  },
  Co = (e, t, n) => {
    e.$operations$.push({ $operation$: No, $args$: [t, n] });
  },
  No = (e, t) => {
    ft(e, t, e.firstChild);
  },
  on = (e, t) => {
    $e(t) && Ne(t, e, e.$containerState$.$subsManager$, !0),
      e.$operations$.push({ $operation$: ko, $args$: [t, e] });
  },
  ko = (e) => {
    const t = e.parentElement;
    t && _o(t, e);
  },
  Es = (e, t) => {
    const n = rn(e, "q:template", !1);
    return F(n, ee, t), F(n, "hidden", ""), F(n, "aria-hidden", "true"), n;
  },
  Tn = (e) => {
    for (const t of e.$operations$) t.$operation$.apply(void 0, t.$args$);
    Oo(e);
  },
  Mt = (e) => H(e, "q:key"),
  zo = (e, t) => {
    t !== null && F(e, "q:key", t);
  },
  Oo = (e) => {
    const t = e.$containerState$.$subsManager$;
    for (const n of e.$rmSlots$) {
      const s = Mt(n),
        r = Ee(n, et);
      if (r.length > 0) {
        const o = n.getAttribute("q:sref"),
          $ = e.$roots$.find((c) => c.$id$ === o);
        if ($) {
          const c = $.$element$;
          if (c.isConnected)
            if (Ee(c, At).some((i) => H(i, ee) === s)) Ne(n, e, t, !1);
            else {
              const i = Es(e.$doc$, s);
              for (const l of r) De(i, l);
              ft(c, i, c.firstChild);
            }
          else Ne(n, e, t, !1);
        } else Ne(n, e, t, !1);
      }
    }
    for (const [n, s] of e.$addSlots$) {
      const r = Mt(n),
        o = Ee(s, At).find(($) => $.getAttribute(ee) === r);
      o &&
        (Ee(o, et).forEach(($) => {
          De(n, $);
        }),
        o.remove());
    }
  },
  In = () => {},
  Lo = (e, t) => {
    const n = e.createComment("qv "),
      s = e.createComment("/qv");
    return new ws(n, s, t);
  },
  Fo = (e) => {
    if (!e) return {};
    const t = e.split(" ");
    return Object.fromEntries(
      t.map((n) => {
        const s = n.indexOf("=");
        return s >= 0 ? [n.slice(0, s), Uo(n.slice(s + 1))] : [n, ""];
      }),
    );
  },
  Do = (e) => {
    const t = [];
    return (
      Object.entries(e).forEach(([n, s]) => {
        t.push(s ? `${n}=${Bo(s)}` : `${n}`);
      }),
      t.join(" ")
    );
  },
  Qo = (e, t, n) =>
    e.ownerDocument.createTreeWalker(e, 128, {
      acceptNode(s) {
        const r = Je(s);
        return r && H(r, t) === n ? 1 : 2;
      },
    }),
  Wo = (e, t, n) => {
    const s = Qo(e, t, n),
      r = [];
    let o = null;
    for (; (o = s.nextNode()); ) r.push(Je(o));
    return r;
  },
  Bo = (e) => e.replace(/ /g, "+"),
  Uo = (e) => e.replace(/\+/g, " "),
  Ae = ":virtual";
class ws {
  constructor(t, n, s) {
    (this.open = t),
      (this.close = n),
      (this.isSvg = s),
      (this._qc_ = null),
      (this.nodeType = 111),
      (this.localName = Ae),
      (this.nodeName = Ae);
    const r = (this.ownerDocument = t.ownerDocument);
    (this.$template$ = rn(r, "template", !1)),
      (this.$attributes$ = Fo(t.data.slice(3))),
      t.data.startsWith("qv "),
      (t.__virtual = this),
      (n.__virtual = this);
  }
  insertBefore(t, n) {
    const s = this.parentElement;
    return (
      s
        ? s.insertBefore(t, n || this.close)
        : this.$template$.insertBefore(t, n),
      t
    );
  }
  remove() {
    const t = this.parentElement;
    if (t) {
      const n = this.childNodes;
      this.$template$.childElementCount, t.removeChild(this.open);
      for (let s = 0; s < n.length; s++) this.$template$.appendChild(n[s]);
      t.removeChild(this.close);
    }
  }
  appendChild(t) {
    return this.insertBefore(t, null);
  }
  insertBeforeTo(t, n) {
    const s = this.childNodes;
    t.insertBefore(this.open, n);
    for (const r of s) t.insertBefore(r, n);
    t.insertBefore(this.close, n), this.$template$.childElementCount;
  }
  appendTo(t) {
    this.insertBeforeTo(t, null);
  }
  get namespaceURI() {
    var t;
    return ((t = this.parentElement) == null ? void 0 : t.namespaceURI) ?? "";
  }
  removeChild(t) {
    this.parentElement
      ? this.parentElement.removeChild(t)
      : this.$template$.removeChild(t);
  }
  getAttribute(t) {
    return this.$attributes$[t] ?? null;
  }
  hasAttribute(t) {
    return t in this.$attributes$;
  }
  setAttribute(t, n) {
    (this.$attributes$[t] = n), (this.open.data = An(this.$attributes$));
  }
  removeAttribute(t) {
    delete this.$attributes$[t], (this.open.data = An(this.$attributes$));
  }
  matches(t) {
    return !1;
  }
  compareDocumentPosition(t) {
    return this.open.compareDocumentPosition(t);
  }
  closest(t) {
    const n = this.parentElement;
    return n ? n.closest(t) : null;
  }
  querySelectorAll(t) {
    const n = [];
    return (
      Ee(this, Bs).forEach((s) => {
        $e(s) &&
          (s.matches(t) && n.push(s),
          n.concat(Array.from(s.querySelectorAll(t))));
      }),
      n
    );
  }
  querySelector(t) {
    for (const n of this.childNodes)
      if (oe(n)) {
        if (n.matches(t)) return n;
        const s = n.querySelector(t);
        if (s !== null) return s;
      }
    return null;
  }
  get innerHTML() {
    return "";
  }
  set innerHTML(t) {
    const n = this.parentElement;
    n
      ? (this.childNodes.forEach((s) => this.removeChild(s)),
        (this.$template$.innerHTML = t),
        n.insertBefore(this.$template$.content, this.close))
      : (this.$template$.innerHTML = t);
  }
  get firstChild() {
    if (this.parentElement) {
      const t = this.open.nextSibling;
      return t === this.close ? null : t;
    }
    return this.$template$.firstChild;
  }
  get nextSibling() {
    return this.close.nextSibling;
  }
  get previousSibling() {
    return this.open.previousSibling;
  }
  get childNodes() {
    if (!this.parentElement) return Array.from(this.$template$.childNodes);
    const t = [];
    let n = this.open;
    for (; (n = n.nextSibling) && n !== this.close; ) t.push(n);
    return t;
  }
  get isConnected() {
    return this.open.isConnected;
  }
  get parentElement() {
    return this.open.parentElement;
  }
}
const An = (e) => `qv ${Do(e)}`,
  $n = (e) => {
    if (e == null) return null;
    if (We(e)) {
      const t = Je(e);
      if (t) return t;
    }
    return e;
  },
  Ho = (e) => {
    let t = e,
      n = 1;
    for (; (t = t.nextSibling); )
      if (We(t)) {
        const s = t.__virtual;
        if (s) t = s;
        else if (t.data.startsWith("qv ")) n++;
        else if (t.data === "/qv" && (n--, n === 0)) return t;
      }
  },
  Je = (e) => {
    var n;
    const t = e.__virtual;
    if (t) return t;
    if (e.data.startsWith("qv ")) {
      const s = Ho(e);
      return new ws(
        e,
        s,
        ((n = e.parentElement) == null ? void 0 : n.namespaceURI) === Ge,
      );
    }
    return null;
  },
  tt = (e) => (e == null ? null : V(e) ? e.open : e),
  fi = async (e) => {
    const t = as(null, null),
      n = _s(t);
    let s;
    for (w(e, n, !1); (s = n.$promises$).length > 0; ) {
      n.$promises$ = [];
      const l = await Promise.allSettled(s);
      for (const a of l) a.status === "rejected" && console.error(a.reason);
    }
    const r = Array.from(n.$objSet$.keys());
    let o = 0;
    const $ = new Map();
    for (const l of r) $.set(l, se(o)), o++;
    if (n.$noSerialize$.length > 0) {
      const l = $.get(void 0);
      for (const a of n.$noSerialize$) $.set(a, l);
    }
    const c = (l) => {
        let a = "";
        if (U(l)) {
          const p = Ts(l);
          if (!p) throw A(27, l);
          (l = p.value), (a += p.resolved ? "~" : "_");
        }
        if (ie(l)) {
          const p = ye(l);
          p && ((a += "!"), (l = p));
        }
        const u = $.get(l);
        if (u === void 0) throw A(27, l);
        return u + a;
      },
      i = As(r, c, null, n, t);
    return JSON.stringify({ _entry: c(e), _objs: i });
  },
  Go = async (e) => {
    const t = Be(e),
      n = t.documentElement,
      s = kn(e) ? n : e;
    if (H(s, "q:container") === "paused") throw A(21);
    const r = s === t.documentElement ? t.body : s,
      o = ge(s),
      $ = Vo(s, t$);
    F(s, "q:container", "paused");
    for (const u of $) {
      const p = u.$element$,
        m = u.li;
      if (u.$scopeIds$) {
        const g = Sr(u.$scopeIds$);
        g && p.setAttribute("q:sstyle", g);
      }
      if ((u.$id$ && p.setAttribute("q:id", u.$id$), oe(p) && m.length > 0)) {
        const g = js(m);
        for (const S of g) p.setAttribute(S[0], c$(S[1], o, u));
      }
    }
    const c = await Jo($, o, (u) => (he(u) && Rt(u) ? r$(u, o) : null)),
      i = t.createElement("script");
    F(i, "type", "qwik/json"),
      (i.textContent = Zo(JSON.stringify(c.state, void 0, void 0))),
      r.appendChild(i);
    const l = Array.from(o.$events$, (u) => JSON.stringify(u)),
      a = t.createElement("script");
    return (
      (a.textContent = `(window.qwikevents||=[]).push(${l.join(", ")})`),
      r.appendChild(a),
      c
    );
  },
  Jo = async (e, t, n, s) => {
    var E;
    const r = _s(t);
    let o = !1;
    for (const h of e)
      if (h.$tasks$)
        for (const x of h.$tasks$)
          ns(x) && r.$resources$.push(x.$state$), rs(x);
    for (const h of e) {
      const x = h.$element$,
        v = h.li;
      for (const b of v)
        if (oe(x)) {
          const _ = b[1],
            R = _.$captureRef$;
          if (R) for (const C of R) w(C, r, !0);
          r.$qrls$.push(_), (o = !0);
        }
    }
    if (!o)
      return {
        state: { refs: {}, ctx: {}, objs: [], subs: [] },
        objs: [],
        funcs: [],
        qrls: [],
        resources: r.$resources$,
        mode: "static",
      };
    let $;
    for (; ($ = r.$promises$).length > 0; )
      (r.$promises$ = []), await Promise.all($);
    const c = r.$elements$.length > 0;
    if (c) {
      for (const h of r.$deferElements$) cn(h, r, h.$element$);
      for (const h of e) Xo(h, r);
    }
    for (; ($ = r.$promises$).length > 0; )
      (r.$promises$ = []), await Promise.all($);
    const i = new Map(),
      l = Array.from(r.$objSet$.keys()),
      a = new Map(),
      u = (h) => {
        let x = "";
        if (U(h)) {
          const _ = Ts(h);
          if (!_) return null;
          (h = _.value), (x += _.resolved ? "~" : "_");
        }
        if (ie(h)) {
          const _ = ye(h);
          if (_) (x += "!"), (h = _);
          else if ($e(h)) {
            const R = ((C) => {
              let Q = i.get(C);
              return (
                Q === void 0 &&
                  ((Q = s$(C)),
                  Q || console.warn("Missing ID", C),
                  i.set(C, Q)),
                Q
              );
            })(h);
            return R ? "#" + R + x : null;
          }
        }
        const v = a.get(h);
        if (v) return v + x;
        const b = s == null ? void 0 : s.get(h);
        return b ? "*" + b : n ? n(h) : null;
      },
      p = (h) => {
        const x = u(h);
        if (x === null) {
          if (un(h)) {
            const v = se(a.size);
            return a.set(h, v), v;
          }
          throw A(27, h);
        }
        return x;
      },
      m = new Map();
    for (const h of l) {
      const x = (E = n$(h, t)) == null ? void 0 : E.$subs$;
      if (!x) continue;
      const v = Os(h) ?? 0,
        b = [];
      1 & v && b.push(v);
      for (const _ of x) {
        const R = _[1];
        (_[0] === 0 && he(R) && V(R) && !r.$elements$.includes(D(R))) ||
          b.push(_);
      }
      b.length > 0 && m.set(h, b);
    }
    l.sort((h, x) => (m.has(h) ? 0 : 1) - (m.has(x) ? 0 : 1));
    let g = 0;
    for (const h of l) a.set(h, se(g)), g++;
    if (r.$noSerialize$.length > 0) {
      const h = a.get(void 0);
      for (const x of r.$noSerialize$) a.set(x, h);
    }
    const S = [];
    for (const h of l) {
      const x = m.get(h);
      if (x == null) break;
      S.push(
        x.map((v) => (typeof v == "number" ? `_${v}` : Q$(v, u))).filter(On),
      );
    }
    S.length, m.size;
    const f = As(l, p, u, r, t),
      d = {},
      y = {};
    for (const h of e) {
      const x = h.$element$,
        v = h.$id$,
        b = h.$refMap$,
        _ = h.$props$,
        R = h.$contexts$,
        C = h.$tasks$,
        Q = h.$componentQrl$,
        ce = h.$seq$,
        Y = {},
        Se = V(x) && r.$elements$.includes(h);
      if (b.length > 0) {
        const z = ue(b, p, " ");
        z && (y[v] = z);
      } else if (c) {
        let z = !1;
        if (Se) {
          const q = u(_);
          (Y.h = p(Q) + (q ? " " + q : "")), (z = !0);
        } else {
          const q = u(_);
          q && ((Y.h = " " + q), (z = !0));
        }
        if (C && C.length > 0) {
          const q = ue(C, u, " ");
          q && ((Y.w = q), (z = !0));
        }
        if (Se && ce && ce.length > 0) {
          const q = ue(ce, p, " ");
          (Y.s = q), (z = !0);
        }
        if (R) {
          const q = [];
          R.forEach((Qs, Ws) => {
            const dn = u(Qs);
            dn && q.push(`${Ws}=${dn}`);
          });
          const Pe = q.join(" ");
          Pe && ((Y.c = Pe), (z = !0));
        }
        z && (d[v] = Y);
      }
    }
    return {
      state: { refs: y, ctx: d, objs: f, subs: S },
      objs: l,
      funcs: r.$inlinedFunctions$,
      resources: r.$resources$,
      qrls: r.$qrls$,
      mode: c ? "render" : "listeners",
    };
  },
  ue = (e, t, n) => {
    let s = "";
    for (const r of e) {
      const o = t(r);
      o !== null && (s !== "" && (s += n), (s += o));
    }
    return s;
  },
  Vo = (e, t) => {
    const n = [],
      s = t(e);
    s !== void 0 && n.push(s);
    const r = e.ownerDocument.createTreeWalker(e, 1 | fs, {
      acceptNode(o) {
        if (e$(o)) return 2;
        const $ = t(o);
        return $ !== void 0 && n.push($), 3;
      },
    });
    for (; r.nextNode(); );
    return n;
  },
  Xo = (e, t) => {
    var r;
    const n = e.$realParentCtx$ || e.$parentCtx$,
      s = e.$props$;
    if (n && s && !Is(s) && t.$elements$.includes(n)) {
      const o = (r = N(s)) == null ? void 0 : r.$subs$,
        $ = e.$element$;
      if (o)
        for (const [c, i] of o)
          c === 0
            ? (i !== $ && Me(N(s), t, !1), he(i) ? Yo(i, t) : w(i, t, !0))
            : (w(s, t, !1), Me(N(s), t, !1));
    }
  },
  _s = (e) => {
    const t = [];
    return (
      e.$inlineFns$.forEach((n, s) => {
        for (; t.length <= n; ) t.push("");
        t[n] = s;
      }),
      {
        $containerState$: e,
        $seen$: new Set(),
        $objSet$: new Set(),
        $prefetch$: 0,
        $noSerialize$: [],
        $inlinedFunctions$: t,
        $resources$: [],
        $elements$: [],
        $qrls$: [],
        $deferElements$: [],
        $promises$: [],
      }
    );
  },
  Ko = (e, t) => {
    const n = D(e);
    t.$elements$.includes(n) ||
      (t.$elements$.push(n),
      n.$flags$ & os
        ? (t.$prefetch$++, cn(n, t, !0), t.$prefetch$--)
        : t.$deferElements$.push(n));
  },
  Yo = (e, t) => {
    const n = D(e);
    if (n) {
      if (t.$elements$.includes(n)) return;
      t.$elements$.push(n), cn(n, t, e);
    }
  },
  cn = (e, t, n) => {
    if (
      (e.$props$ &&
        !Is(e.$props$) &&
        (w(e.$props$, t, n), Me(N(e.$props$), t, n)),
      e.$componentQrl$ && w(e.$componentQrl$, t, n),
      e.$seq$)
    )
      for (const s of e.$seq$) w(s, t, n);
    if (e.$tasks$) {
      const s = t.$containerState$.$subsManager$.$groupToManagers$;
      for (const r of e.$tasks$) s.has(r) && w(r, t, n);
    }
    if (n === !0 && (Mn(e, t), e.$dynamicSlots$))
      for (const s of e.$dynamicSlots$) Mn(s, t);
  },
  Mn = (e, t) => {
    for (; e; ) {
      if (e.$contexts$) for (const n of e.$contexts$.values()) w(n, t, !0);
      e = e.$parentCtx$;
    }
  },
  Zo = (e) => e.replace(/<(\/?script)/gi, "\\x3C$1"),
  Me = (e, t, n) => {
    if (t.$seen$.has(e)) return;
    t.$seen$.add(e);
    const s = e.$subs$;
    for (const r of s)
      if ((r[0] > 0 && w(r[2], t, n), n === !0)) {
        const o = r[1];
        he(o) && V(o) ? r[0] === 0 && Ko(o, t) : w(o, t, !0);
      }
  },
  qt = Symbol(),
  jo = (e) =>
    e.then(
      (t) => ((e[qt] = { resolved: !0, value: t }), t),
      (t) => ((e[qt] = { resolved: !1, value: t }), t),
    ),
  Ts = (e) => e[qt],
  w = (e, t, n) => {
    if (e != null) {
      const s = typeof e;
      switch (s) {
        case "function":
        case "object": {
          if (t.$seen$.has(e)) return;
          if ((t.$seen$.add(e), Ns(e)))
            return t.$objSet$.add(void 0), void t.$noSerialize$.push(e);
          const r = e,
            o = ye(e);
          if (o) {
            const $ = !(2 & Os((e = o)));
            if ((n && $ && Me(N(r), t, n), ks(r)))
              return void t.$objSet$.add(e);
          }
          if (z$(e, t, n)) return void t.$objSet$.add(e);
          if (U(e))
            return void t.$promises$.push(
              jo(e).then(($) => {
                w($, t, n);
              }),
            );
          if (s === "object") {
            if (he(e)) return;
            if (P(e)) for (let $ = 0; $ < e.length; $++) w(r[$], t, n);
            else if (ot(e)) for (const $ in e) w(r[$], t, n);
          }
          break;
        }
      }
    }
    t.$objSet$.add(e);
  },
  e$ = (e) => oe(e) && e.hasAttribute("q:container"),
  t$ = (e) => {
    const t = $n(e);
    if ($e(t)) {
      const n = D(t);
      if (n && n.$id$) return n;
    }
  },
  n$ = (e, t) => {
    if (!ie(e)) return;
    if (e instanceof Fe) return N(e);
    const n = t.$proxyMap$.get(e);
    return n ? N(n) : void 0;
  },
  s$ = (e) => {
    const t = D(e);
    return t ? t.$id$ : null;
  },
  r$ = (e, t) => {
    const n = e.previousSibling;
    if (n && We(n) && n.data.startsWith("t=")) return "#" + n.data.slice(2);
    const s = e.ownerDocument,
      r = se(t.$elementIndex$++),
      o = s.createComment(`t=${r}`),
      $ = s.createComment(""),
      c = e.parentElement;
    return c.insertBefore(o, e), c.insertBefore($, e.nextSibling), "#" + r;
  },
  Is = (e) => Object.keys(e).length === 0;
function As(e, t, n, s, r) {
  return e.map((o) => {
    if (o === null) return null;
    const $ = typeof o;
    switch ($) {
      case "undefined":
        return pt;
      case "number":
        if (!Number.isFinite(o)) break;
        return o;
      case "string":
        if (o.charCodeAt(0) < 32) break;
        return o;
      case "boolean":
        return o;
    }
    const c = O$(o, t, s, r);
    if (c !== void 0) return c;
    if ($ === "object") {
      if (P(o)) return o.map(t);
      if (ot(o)) {
        const i = {};
        for (const l in o)
          if (n) {
            const a = n(o[l]);
            a !== null && (i[l] = a);
          } else i[l] = t(o[l]);
        return i;
      }
    }
    throw A(3, o);
  });
}
const o$ = /\(\s*(['"])([^\1]+)\1\s*\)/,
  $$ = /Promise\s*\.\s*resolve/,
  i$ = /[\\/(]([\w\d.\-_]+\.(js|ts)x?):/,
  qn = new Set(),
  di = (e, t, n = Z, s = 0) => {
    let r = null,
      o = null;
    if (W(e)) {
      o = e;
      {
        let $;
        const c = String(e);
        if (($ = c.match(o$)) && $[2]) r = $[2];
        else {
          if (!($ = c.match($$))) throw A(11, c);
          {
            const i = "QWIK-SELF",
              l = new Error(i).stack.split(`
`),
              a = l.findIndex((u) => u.includes(i));
            ($ = l[a + 2 + s].match(i$)), (r = $ ? $[1] : "main");
          }
        }
      }
    } else {
      if (!qe(e)) throw A(12, e);
      r = e;
    }
    return (
      qn.has(t) ||
        (qn.add(t), Ds("qprefetch", { symbols: [Fs(t)], bundles: [r] })),
      mt(r, t, null, o, null, n, null)
    );
  },
  ln = (e, t = {}) => {
    let n = e.$symbol$,
      s = e.$chunk$;
    const r = e.$refSymbol$ ?? n,
      o = kt();
    if (o) {
      const l = o.chunkForSymbol(r, s);
      l && ((s = l[1]), e.$refSymbol$ || (n = l[0]));
    }
    if (s == null) throw A(31, e.$symbol$);
    if ((s.startsWith("./") && (s = s.slice(2)), G$(e)))
      if (t.$containerState$) {
        const l = t.$containerState$,
          a = e.resolved.toString();
        let u = l.$inlineFns$.get(a);
        u === void 0 && ((u = l.$inlineFns$.size), l.$inlineFns$.set(a, u)),
          (n = String(u));
      } else Us("Sync QRL without containerState");
    let $ = `${s}#${n}`;
    const c = e.$capture$,
      i = e.$captureRef$;
    return (
      i && i.length
        ? t.$getObjId$
          ? ($ += `[${ue(i, t.$getObjId$, " ")}]`)
          : t.$addRefMap$ && ($ += `[${ue(i, t.$addRefMap$, " ")}]`)
        : c && c.length > 0 && ($ += `[${c.join(" ")}]`),
      $
    );
  },
  c$ = (e, t, n) => {
    n.$element$;
    const s = { $containerState$: t, $addRefMap$: (r) => l$(n.$refMap$, r) };
    return ue(
      e,
      (r) => ln(r, s),
      `
`,
    );
  },
  dt = (e, t) => {
    const n = e.length,
      s = Pn(e, 0, "#"),
      r = Pn(e, s, "["),
      o = Math.min(s, r),
      $ = e.substring(0, o),
      c = s == n ? s : s + 1,
      i = c == r ? "default" : e.substring(c, r),
      l = r === n ? Z : e.substring(r + 1, n - 1).split(" "),
      a = mt($, i, null, null, l, null, null);
    return t && a.$setContainer$(t), a;
  },
  Pn = (e, t, n) => {
    const s = e.length,
      r = e.indexOf(n, t == s ? 0 : t);
    return r == -1 ? s : r;
  },
  l$ = (e, t) => {
    const n = e.indexOf(t);
    return n === -1 ? (e.push(t), String(e.length - 1)) : String(n);
  },
  Ms = (e, t) => (
    e.$capture$,
    (e.$captureRef$ = e.$capture$.map((n) => {
      const s = parseInt(n, 10),
        r = t.$refMap$[s];
      return t.$refMap$.length > s, r;
    }))
  ),
  a$ = (e) => ({
    __brand: "resource",
    value: void 0,
    loading: !rt(),
    _resolved: void 0,
    _error: void 0,
    _state: "pending",
    _timeout: (e == null ? void 0 : e.timeout) ?? -1,
    _cache: 0,
  }),
  u$ = (e) => ie(e) && e.__brand === "resource",
  f$ = (e, t) => {
    const n = e._state;
    return n === "resolved"
      ? `0 ${t(e._resolved)}`
      : n === "pending"
        ? "1"
        : `2 ${t(e._error)}`;
  },
  d$ = (e) => {
    const [t, n] = e.split(" "),
      s = a$(void 0);
    return (
      (s.value = Promise.resolve()),
      t === "0"
        ? ((s._state = "resolved"), (s._resolved = n), (s.loading = !1))
        : t === "1"
          ? ((s._state = "pending"),
            (s.value = new Promise(() => {})),
            (s.loading = !0))
          : t === "2" &&
            ((s._state = "rejected"), (s._error = n), (s.loading = !1)),
      s
    );
  },
  Pt = (e) => Jt(ke, { [Ln]: "" }, 0, e.name ?? ""),
  pt = "";
function I(e) {
  return {
    $prefixCode$: e.$prefix$.charCodeAt(0),
    $prefixChar$: e.$prefix$,
    $test$: e.$test$,
    $serialize$: e.$serialize$,
    $prepare$: e.$prepare$,
    $fill$: e.$fill$,
    $collect$: e.$collect$,
    $subs$: e.$subs$,
  };
}
const p$ = I({
    $prefix$: "",
    $test$: (e) => un(e),
    $collect$: (e, t, n) => {
      if (e.$captureRef$) for (const s of e.$captureRef$) w(s, t, n);
      t.$prefetch$ === 0 && t.$qrls$.push(e);
    },
    $serialize$: (e, t) => ln(e, { $getObjId$: t }),
    $prepare$: (e, t) => dt(e, t.$containerEl$),
    $fill$: (e, t) => {
      e.$capture$ &&
        e.$capture$.length > 0 &&
        ((e.$captureRef$ = e.$capture$.map(t)), (e.$capture$ = null));
    },
  }),
  h$ = I({
    $prefix$: "",
    $test$: (e) => Zt(e),
    $collect$: (e, t, n) => {
      w(e.$qrl$, t, n),
        e.$state$ &&
          (w(e.$state$, t, n),
          n === !0 && e.$state$ instanceof Fe && Me(e.$state$[J], t, !0));
    },
    $serialize$: (e, t) => Xr(e, t),
    $prepare$: (e) => Kr(e),
    $fill$: (e, t) => {
      (e.$el$ = t(e.$el$)),
        (e.$qrl$ = t(e.$qrl$)),
        e.$state$ && (e.$state$ = t(e.$state$));
    },
  }),
  m$ = I({
    $prefix$: "",
    $test$: (e) => u$(e),
    $collect$: (e, t, n) => {
      w(e.value, t, n), w(e._resolved, t, n);
    },
    $serialize$: (e, t) => f$(e, t),
    $prepare$: (e) => d$(e),
    $fill$: (e, t) => {
      if (e._state === "resolved")
        (e._resolved = t(e._resolved)),
          (e.value = Promise.resolve(e._resolved));
      else if (e._state === "rejected") {
        const n = Promise.reject(e._error);
        n.catch(() => null), (e._error = t(e._error)), (e.value = n);
      }
    },
  }),
  g$ = I({
    $prefix$: "",
    $test$: (e) => e instanceof URL,
    $serialize$: (e) => e.href,
    $prepare$: (e) => new URL(e),
  }),
  y$ = I({
    $prefix$: "",
    $test$: (e) => e instanceof Date,
    $serialize$: (e) => e.toISOString(),
    $prepare$: (e) => new Date(e),
  }),
  S$ = I({
    $prefix$: "\x07",
    $test$: (e) => e instanceof RegExp,
    $serialize$: (e) => `${e.flags} ${e.source}`,
    $prepare$: (e) => {
      const t = e.indexOf(" "),
        n = e.slice(t + 1),
        s = e.slice(0, t);
      return new RegExp(n, s);
    },
  }),
  v$ = I({
    $prefix$: "",
    $test$: (e) => e instanceof Error,
    $serialize$: (e) => e.message,
    $prepare$: (e) => {
      const t = new Error(e);
      return (t.stack = void 0), t;
    },
  }),
  x$ = I({
    $prefix$: "",
    $test$: (e) => !!e && typeof e == "object" && kn(e),
    $prepare$: (e, t, n) => n,
  }),
  nt = Symbol("serializable-data"),
  b$ = I({
    $prefix$: "",
    $test$: (e) => fn(e),
    $serialize$: (e, t) => {
      const [n] = e[nt];
      return ln(n, { $getObjId$: t });
    },
    $prepare$: (e, t) => {
      const n = dt(e, t.$containerEl$);
      return X$(n);
    },
    $fill$: (e, t) => {
      var s;
      const [n] = e[nt];
      (s = n.$capture$) != null &&
        s.length &&
        ((n.$captureRef$ = n.$capture$.map(t)), (n.$capture$ = null));
    },
  }),
  E$ = I({
    $prefix$: "",
    $test$: (e) => e instanceof Tt,
    $collect$: (e, t, n) => {
      if (e.$args$) for (const s of e.$args$) w(s, t, n);
    },
    $serialize$: (e, t, n) => {
      const s = vr(e);
      let r = n.$inlinedFunctions$.indexOf(s);
      return (
        r < 0 &&
          ((r = n.$inlinedFunctions$.length), n.$inlinedFunctions$.push(s)),
        ue(e.$args$, t, " ") + " @" + se(r)
      );
    },
    $prepare$: (e) => {
      const t = e.split(" "),
        n = t.slice(0, -1),
        s = t[t.length - 1];
      return new Tt(s, n, s);
    },
    $fill$: (e, t) => {
      e.$func$, (e.$func$ = t(e.$func$)), (e.$args$ = e.$args$.map(t));
    },
  }),
  w$ = I({
    $prefix$: "",
    $test$: (e) => e instanceof Fe,
    $collect$: (e, t, n) => (
      w(e.untrackedValue, t, n), n === !0 && !(e[Le] & co) && Me(e[J], t, !0), e
    ),
    $serialize$: (e, t) => t(e.untrackedValue),
    $prepare$: (e, t) => {
      var n;
      return new Fe(
        e,
        (n = t == null ? void 0 : t.$subsManager$) == null
          ? void 0
          : n.$createManager$(),
        0,
      );
    },
    $subs$: (e, t) => {
      e[J].$addSubs$(t);
    },
    $fill$: (e, t) => {
      e.untrackedValue = t(e.untrackedValue);
    },
  }),
  _$ = I({
    $prefix$: "",
    $test$: (e) => e instanceof It,
    $collect$(e, t, n) {
      if ((w(e.ref, t, n), ks(e.ref))) {
        const s = N(e.ref);
        F$(t.$containerState$.$subsManager$, s, n) && w(e.ref[e.prop], t, n);
      }
      return e;
    },
    $serialize$: (e, t) => `${t(e.ref)} ${e.prop}`,
    $prepare$: (e) => {
      const [t, n] = e.split(" ");
      return new It(t, n);
    },
    $fill$: (e, t) => {
      e.ref = t(e.ref);
    },
  }),
  T$ = I({
    $prefix$: "",
    $test$: (e) => typeof e == "number",
    $serialize$: (e) => String(e),
    $prepare$: (e) => Number(e),
  }),
  I$ = I({
    $prefix$: "",
    $test$: (e) => e instanceof URLSearchParams,
    $serialize$: (e) => e.toString(),
    $prepare$: (e) => new URLSearchParams(e),
  }),
  A$ = I({
    $prefix$: "",
    $test$: (e) => typeof FormData < "u" && e instanceof globalThis.FormData,
    $serialize$: (e) => {
      const t = [];
      return (
        e.forEach((n, s) => {
          t.push(typeof n == "string" ? [s, n] : [s, n.name]);
        }),
        JSON.stringify(t)
      );
    },
    $prepare$: (e) => {
      const t = JSON.parse(e),
        n = new FormData();
      for (const [s, r] of t) n.append(s, r);
      return n;
    },
  }),
  M$ = I({
    $prefix$: "",
    $test$: (e) => lt(e),
    $collect$: (e, t, n) => {
      w(e.children, t, n),
        w(e.props, t, n),
        w(e.immutableProps, t, n),
        w(e.key, t, n);
      let s = e.type;
      s === Pt ? (s = ":slot") : s === Et && (s = ":fragment"), w(s, t, n);
    },
    $serialize$: (e, t) => {
      let n = e.type;
      return (
        n === Pt ? (n = ":slot") : n === Et && (n = ":fragment"),
        `${t(n)} ${t(e.props)} ${t(e.immutableProps)} ${t(e.key)} ${t(e.children)} ${e.flags}`
      );
    },
    $prepare$: (e) => {
      const [t, n, s, r, o, $] = e.split(" ");
      return new Ue(t, n, s, o, parseInt($, 10), r);
    },
    $fill$: (e, t) => {
      (e.type = D$(t(e.type))),
        (e.props = t(e.props)),
        (e.immutableProps = t(e.immutableProps)),
        (e.key = t(e.key)),
        (e.children = t(e.children));
    },
  }),
  q$ = I({
    $prefix$: "",
    $test$: (e) => typeof e == "bigint",
    $serialize$: (e) => e.toString(),
    $prepare$: (e) => BigInt(e),
  }),
  P$ = I({
    $prefix$: "",
    $test$: (e) => e instanceof Uint8Array,
    $serialize$: (e) => {
      let t = "";
      for (const n of e) t += String.fromCharCode(n);
      return btoa(t).replace(/=+$/, "");
    },
    $prepare$: (e) => {
      const t = atob(e),
        n = new Uint8Array(t.length);
      let s = 0;
      for (const r of t) n[s++] = r.charCodeAt(0);
      return n;
    },
    $fill$: void 0,
  }),
  Te = Symbol(),
  R$ = I({
    $prefix$: "",
    $test$: (e) => e instanceof Set,
    $collect$: (e, t, n) => {
      e.forEach((s) => w(s, t, n));
    },
    $serialize$: (e, t) => Array.from(e).map(t).join(" "),
    $prepare$: (e) => {
      const t = new Set();
      return (t[Te] = e), t;
    },
    $fill$: (e, t) => {
      const n = e[Te];
      e[Te] = void 0;
      const s = n.length === 0 ? [] : n.split(" ");
      for (const r of s) e.add(t(r));
    },
  }),
  C$ = I({
    $prefix$: "",
    $test$: (e) => e instanceof Map,
    $collect$: (e, t, n) => {
      e.forEach((s, r) => {
        w(s, t, n), w(r, t, n);
      });
    },
    $serialize$: (e, t) => {
      const n = [];
      return (
        e.forEach((s, r) => {
          n.push(t(r) + " " + t(s));
        }),
        n.join(" ")
      );
    },
    $prepare$: (e) => {
      const t = new Map();
      return (t[Te] = e), t;
    },
    $fill$: (e, t) => {
      const n = e[Te];
      e[Te] = void 0;
      const s = n.length === 0 ? [] : n.split(" ");
      s.length % 2;
      for (let r = 0; r < s.length; r += 2) e.set(t(s[r]), t(s[r + 1]));
    },
  }),
  N$ = I({
    $prefix$: "\x1B",
    $test$: (e) => !!qs(e) || e === pt,
    $serialize$: (e) => e,
    $prepare$: (e) => e,
  }),
  an = [
    p$,
    h$,
    m$,
    g$,
    y$,
    S$,
    v$,
    x$,
    b$,
    E$,
    w$,
    _$,
    T$,
    I$,
    A$,
    M$,
    q$,
    R$,
    C$,
    N$,
    P$,
  ],
  Rn = (() => {
    const e = [];
    return (
      an.forEach((t) => {
        const n = t.$prefixCode$;
        for (; e.length < n; ) e.push(void 0);
        e.push(t);
      }),
      e
    );
  })();
function qs(e) {
  if (typeof e == "string") {
    const t = e.charCodeAt(0);
    if (t < Rn.length) return Rn[t];
  }
}
const k$ = an.filter((e) => e.$collect$),
  z$ = (e, t, n) => {
    for (const s of k$) if (s.$test$(e)) return s.$collect$(e, t, n), !0;
    return !1;
  },
  O$ = (e, t, n, s) => {
    for (const r of an)
      if (r.$test$(e)) {
        let o = r.$prefixChar$;
        return r.$serialize$ && (o += r.$serialize$(e, t, n, s)), o;
      }
    if (typeof e == "string") return e;
  },
  Ps = (e, t) => {
    const n = new Map(),
      s = new Map();
    return {
      prepare(r) {
        const o = qs(r);
        if (o) {
          const $ = o.$prepare$(r.slice(1), e, t);
          return o.$fill$ && n.set($, o), o.$subs$ && s.set($, o), $;
        }
        return r;
      },
      subs(r, o) {
        const $ = s.get(r);
        return !!$ && ($.$subs$(r, o, e), !0);
      },
      fill(r, o) {
        const $ = n.get(r);
        return !!$ && ($.$fill$(r, o, e), !0);
      },
    };
  },
  L$ = {
    "!": (e, t) => t.$proxyMap$.get(e) ?? Dt(e, t),
    "~": (e) => Promise.resolve(e),
    _: (e) => Promise.reject(e),
  },
  F$ = (e, t, n) => {
    if (typeof n == "boolean") return n;
    const s = e.$groupToManagers$.get(n);
    return !!(s && s.length > 0) && (s.length !== 1 || s[0] !== t);
  },
  D$ = (e) => (e === ":slot" ? Pt : e === ":fragment" ? Et : e),
  Rs = new WeakSet(),
  Cs = new WeakSet(),
  Ns = (e) => Rs.has(e),
  ks = (e) => Cs.has(e),
  zs = (e) => (e != null && Rs.add(e), e),
  pi = (e) => (Cs.add(e), e),
  ht = (e) => (ie(e) ? ye(e) ?? e : e),
  ye = (e) => e[St],
  N = (e) => e[J],
  Os = (e) => e[be],
  Q$ = (e, t) => {
    const n = e[0],
      s = typeof e[1] == "string" ? e[1] : t(e[1]);
    if (!s) return;
    let r = n + " " + s,
      o;
    if (n === 0) o = e[2];
    else {
      const $ = t(e[2]);
      if (!$) return;
      n <= 2
        ? ((o = e[5]), (r += ` ${$} ${Cn(t(e[3]))} ${e[4]}`))
        : n <= 4 &&
          ((o = e[4]),
          (r += ` ${$} ${typeof e[3] == "string" ? e[3] : Cn(t(e[3]))}`));
    }
    return o && (r += ` ${encodeURI(o)}`), r;
  },
  W$ = (e, t) => {
    const n = e.split(" "),
      s = parseInt(n[0], 10);
    n.length >= 2;
    const r = t(n[1]);
    if (!r || (Zt(r) && !r.$el$)) return;
    const o = [s, r];
    return (
      s === 0
        ? (n.length <= 3, o.push(yt(n[2])))
        : s <= 2
          ? (n.length === 5 || n.length,
            o.push(t(n[2]), t(n[3]), n[4], yt(n[5])))
          : s <= 4 &&
            (n.length === 4 || n.length, o.push(t(n[2]), t(n[3]), yt(n[4]))),
      o
    );
  },
  yt = (e) => {
    if (e !== void 0) return decodeURI(e);
  },
  B$ = (e) => {
    const t = new Map();
    return {
      $groupToManagers$: t,
      $createManager$: (s) => new U$(t, e, s),
      $clearSub$: (s) => {
        const r = t.get(s);
        if (r) {
          for (const o of r) o.$unsubGroup$(s);
          t.delete(s), (r.length = 0);
        }
      },
      $clearSignal$: (s) => {
        const r = t.get(s[1]);
        if (r) for (const o of r) o.$unsubEntry$(s);
      },
    };
  };
class U$ {
  constructor(t, n, s) {
    (this.$groupToManagers$ = t),
      (this.$containerState$ = n),
      (this.$subs$ = []),
      s && this.$addSubs$(s);
  }
  $addSubs$(t) {
    this.$subs$.push(...t);
    for (const n of this.$subs$) this.$addToGroup$(n[1], this);
  }
  $addToGroup$(t, n) {
    let s = this.$groupToManagers$.get(t);
    s || this.$groupToManagers$.set(t, (s = [])), s.includes(n) || s.push(n);
  }
  $unsubGroup$(t) {
    const n = this.$subs$;
    for (let s = 0; s < n.length; s++) n[s][1] === t && (n.splice(s, 1), s--);
  }
  $unsubEntry$(t) {
    const [n, s, r, o] = t,
      $ = this.$subs$;
    if (n === 1 || n === 2) {
      const c = t[4];
      for (let i = 0; i < $.length; i++) {
        const l = $[i];
        l[0] === n &&
          l[1] === s &&
          l[2] === r &&
          l[3] === o &&
          l[4] === c &&
          ($.splice(i, 1), i--);
      }
    } else if (n === 3 || n === 4)
      for (let c = 0; c < $.length; c++) {
        const i = $[c];
        i[0] === n &&
          i[1] === s &&
          i[2] === r &&
          i[3] === o &&
          ($.splice(c, 1), c--);
      }
  }
  $addSub$(t, n) {
    const s = this.$subs$,
      r = t[1];
    (t[0] === 0 && s.some(([o, $, c]) => o === 0 && $ === r && c === n)) ||
      (s.push((Ls = [...t, n])), this.$addToGroup$(r, this));
  }
  $notifySubs$(t) {
    const n = this.$subs$;
    for (const s of n) {
      const r = s[s.length - 1];
      (t && r && r !== t) || Nr(s, this.$containerState$);
    }
  }
}
let Ls;
function H$() {
  return Ls;
}
const Cn = (e) => {
    if (e == null) throw fe("must be non null", e);
    return e;
  },
  un = (e) => typeof e == "function" && typeof e.getSymbol == "function",
  G$ = (e) => un(e) && e.$symbol$ == "<sync>",
  mt = (e, t, n, s, r, o, $) => {
    let c;
    const i = async function (...f) {
        return await p.call(this, X())(...f);
      },
      l = (f) => (c || (c = f), c),
      a = async (f) => {
        if (
          (f && l(f),
          e == "" && (i.resolved = n = (c.qFuncs || [])[Number(t)]),
          n !== null)
        )
          return n;
        if (s !== null) return (n = s().then((d) => (i.resolved = n = d[t])));
        {
          const d = kt().importSymbol(c, e, t);
          return (n = T(d, (y) => (i.resolved = n = y)));
        }
      },
      u = (f) => (n !== null ? n : a(f));
    function p(f, d) {
      return (...y) => {
        const E = V$(),
          h = u();
        return T(h, (x) => {
          if (W(x)) {
            if (d && d() === !1) return;
            const v = { ...m(f), $qrl$: i };
            return (
              v.$event$ === void 0 && (v.$event$ = this),
              J$(t, v.$element$, E),
              te.call(this, v, x, ...y)
            );
          }
          throw A(10);
        });
      };
    }
    const m = (f) => (f == null ? K() : P(f) ? $s(f) : f),
      g = $ ?? t,
      S = Fs(g);
    return (
      Object.assign(i, {
        getSymbol: () => g,
        getHash: () => S,
        getCaptured: () => o,
        resolve: a,
        $resolveLazy$: u,
        $setContainer$: l,
        $chunk$: e,
        $symbol$: t,
        $refSymbol$: $,
        $hash$: S,
        getFn: p,
        $capture$: r,
        $captureRef$: o,
        dev: null,
        resolved: void 0,
      }),
      n && T(n, (f) => (i.resolved = n = f)),
      i
    );
  },
  Fs = (e) => {
    const t = e.lastIndexOf("_");
    return t > -1 ? e.slice(t + 1) : e;
  };
const Nn = new Set(),
  J$ = (e, t, n) => {
    Nn.has(e) ||
      (Nn.add(e), Ds("qsymbol", { symbol: e, element: t, reqTime: n }));
  },
  Ds = (e, t) => {
    typeof document != "object" ||
      document.dispatchEvent(new CustomEvent(e, { bubbles: !1, detail: t }));
  },
  V$ = () => (typeof performance == "object" ? performance.now() : 0),
  hi = function (e, t) {
    return mt("", "<sync>", e, null, null, null, null);
  },
  X$ = (e) => {
    function t(n, s, r) {
      const o = e.$hash$.slice(0, 4) + ":" + (s || "");
      return Jt(
        ke,
        { [Xs]: e, [ee]: n[ee], [M]: n[M], children: n.children, props: n },
        r,
        o,
      );
    }
    return (t[nt] = [e]), t;
  },
  fn = (e) => typeof e == "function" && e[nt] !== void 0,
  mi = (e, t) => {
    const { val: n, set: s, iCtx: r } = me();
    if (n != null) return n;
    const o = W(e) ? te(void 0, e) : e;
    if ((t == null ? void 0 : t.reactive) === !1) return s(o), o;
    {
      const $ = Dt(
        o,
        r.$renderCtx$.$static$.$containerState$,
        (t == null ? void 0 : t.deep) ?? !0 ? 1 : 0,
      );
      return s($), $;
    }
  };
function gi(e, t) {
  var s;
  const n = X();
  return (
    ((s = n == null ? void 0 : n.$renderCtx$) == null
      ? void 0
      : s.$static$.$containerState$.$serverData$[e]) ?? t
  );
}
const yi = (e) => {
    K$(e, (t) => t);
  },
  K$ = (e, t, n) => {
    const { val: s, set: r, iCtx: o, i: $, elCtx: c } = me();
    if (s) return s;
    const i = yr(e, $),
      l = o.$renderCtx$.$static$.$containerState$;
    if (
      (r(i),
      c.$appendStyles$ || (c.$appendStyles$ = []),
      c.$scopeIds$ || (c.$scopeIds$ = []),
      l.$styleIds$.has(i))
    )
      return i;
    l.$styleIds$.add(i);
    const a = e.$resolveLazy$(l.$containerEl$),
      u = (p) => {
        c.$appendStyles$,
          c.$appendStyles$.push({ styleId: i, content: t(p, i) });
      };
    return U(a) ? o.$waitOn$.push(a.then(u)) : u(a), i;
  };
export {
  X$ as A,
  fi as B,
  ni as C,
  ii as D,
  ui as E,
  Et as F,
  Pt as S,
  Gn as _,
  ei as a,
  Pr as b,
  Y$ as c,
  ti as d,
  M as e,
  Jt as f,
  $o as g,
  hi as h,
  mi as i,
  si as j,
  Z$ as k,
  ci as l,
  $i as m,
  zs as n,
  ai as o,
  yi as p,
  di as q,
  gi as r,
  pi as s,
  ri as t,
  j$ as u,
  Or as v,
  oi as w,
  li as x,
  Jn as y,
  $r as z,
};
