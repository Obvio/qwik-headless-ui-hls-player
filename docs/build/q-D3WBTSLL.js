const T = (b) => {
  const t = window,
    _ = location.pathname + location.search,
    s = "_qCitySPA",
    m = "_qCityHistoryPatch",
    v = "_qCityBootstrap",
    u = "_qCityInitPopstate",
    d = "_qCityInitAnchors",
    y = "_qCityInitVisibility",
    f = "_qCityInitScroll",
    r = "_qCityScrollEnabled",
    l = "_qCityScrollDebounce",
    S = "_qCityScroll",
    C = (o) => {
      o && t.scrollTo(o.x, o.y);
    },
    p = () => {
      const o = document.documentElement;
      return {
        x: o.scrollLeft,
        y: o.scrollTop,
        w: Math.max(o.scrollWidth, o.clientWidth),
        h: Math.max(o.scrollHeight, o.clientHeight),
      };
    },
    h = (o) => {
      const n = history.state || {};
      (n[S] = o || p()), history.replaceState(n, "");
    };
  if (!t[s] && !t[u] && !t[d] && !t[y] && !t[f]) {
    if (
      (h(),
      (t[u] = () => {
        var o;
        if (!t[s]) {
          if (
            ((t[r] = !1),
            clearTimeout(t[l]),
            _ !== location.pathname + location.search)
          ) {
            const c = b.closest("[q\\:container]").querySelector("a[q\\:link]");
            if (c) {
              const e = c.closest("[q\\:container]"),
                i = c.cloneNode();
              i.setAttribute("q:nbs", ""),
                (i.style.display = "none"),
                e.appendChild(i),
                (t[v] = i),
                i.click();
            } else location.reload();
          } else if (history.scrollRestoration === "manual") {
            const n = (o = history.state) == null ? void 0 : o[S];
            C(n), (t[r] = !0);
          }
        }
      }),
      !t[m])
    ) {
      t[m] = !0;
      const o = history.pushState,
        n = history.replaceState,
        c = (e) => (
          e === null || typeof e > "u"
            ? (e = {})
            : (e == null ? void 0 : e.constructor) !== Object &&
              (e = { _data: e }),
          (e._qCityScroll = e._qCityScroll || p()),
          e
        );
      (history.pushState = (e, i, a) => ((e = c(e)), o.call(history, e, i, a))),
        (history.replaceState = (e, i, a) => (
          (e = c(e)), n.call(history, e, i, a)
        ));
    }
    (t[d] = (o) => {
      if (t[s] || o.defaultPrevented) return;
      const n = o.target.closest("a[href]");
      if (n && !n.hasAttribute("preventdefault:click")) {
        const c = n.getAttribute("href"),
          e = new URL(location.href),
          i = new URL(c, e),
          a = i.origin === e.origin,
          g = i.pathname + i.search === e.pathname + e.search;
        if (a && g)
          if (
            (o.preventDefault(),
            i.href !== e.href && history.pushState(null, "", i),
            !i.hash)
          )
            i.href.endsWith("#")
              ? window.scrollTo(0, 0)
              : ((t[r] = !1),
                clearTimeout(t[l]),
                h({ ...p(), x: 0, y: 0 }),
                location.reload());
          else {
            const w = i.hash.slice(1),
              q = document.getElementById(w);
            q && q.scrollIntoView();
          }
      }
    }),
      (t[y] = () => {
        !t[s] && t[r] && document.visibilityState === "hidden" && h();
      }),
      (t[f] = () => {
        t[s] ||
          !t[r] ||
          (clearTimeout(t[l]),
          (t[l] = setTimeout(() => {
            h(), (t[l] = void 0);
          }, 200)));
      }),
      (t[r] = !0),
      setTimeout(() => {
        addEventListener("popstate", t[u]),
          addEventListener("scroll", t[f], { passive: !0 }),
          document.body.addEventListener("click", t[d]),
          t.navigation ||
            document.addEventListener("visibilitychange", t[y], {
              passive: !0,
            });
      }, 0);
  }
};
export { T as s_DyVc0YBIqQU };
