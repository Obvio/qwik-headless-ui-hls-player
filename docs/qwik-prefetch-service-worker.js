(() => {
  const t = Number.MAX_SAFE_INTEGER >>> 1;
  function n(n, i) {
    const [o, s] = c(i),
      a = n.t.find((t) => o === t.i);
    if (a)
      return (
        n.o("intercepting", i.pathname),
        e(n, a, [s], t).then(() =>
          (function (t, n) {
            const e = t.u.find((t) => t.l.pathname === n.pathname);
            return e
              ? e.h.then((t) => t.clone())
              : (t.o("CACHE HIT", n.pathname), t.$(n));
          })(n, i),
        )
      );
  }
  async function e(n, e, o, c) {
    const a = new Set();
    o.forEach((t) => s(e.p, a, t)),
      await Promise.all(
        Array.from(a).map((i) =>
          (async function (n, e, i) {
            let o = n.u.find((t) => t.l.pathname === e.pathname);
            const s = i >= t ? "direct" : "prefetch";
            if (o) {
              const t = o.m ? "fetching" : "waiting";
              o.v < i
                ? (n.o("queue update priority", t, e.pathname), (o.v = i))
                : n.o("already in queue", s, t, e.pathname);
            } else
              (await n.$(e)) ||
                (n.o("enqueue", s, e.pathname),
                (o = { v: i, l: e, C: null, h: null, m: !1 }),
                (o.h = new Promise((t) => (o.C = t))),
                n.u.push(o));
            return o;
          })(n, new URL(e.i + i, n.l), c),
        ),
      ),
      i(n);
  }
  function i(n) {
    n.u.sort(o);
    let e = 0;
    for (const o of n.u)
      if (o.m) e++;
      else if (n.T() && (e < n.H || o.v >= t)) {
        (o.m = !0), e++;
        const s = o.v >= t ? "FETCH (CACHE MISS)" : "FETCH";
        n.o(s, o.l.pathname),
          n
            .R(o.l)
            .then(async (t) => {
              o.C(t),
                200 === t.status &&
                  (n.o("CACHED", o.l.pathname), await n.S(o.l, t.clone()));
            })
            .finally(() => {
              n.o("FETCH DONE", o.l.pathname),
                n.u.splice(n.u.indexOf(o), 1),
                i(n);
            });
      }
  }
  function o(t, n) {
    return n.v - t.v;
  }
  function s(t, n, e) {
    if (!n.has(e)) {
      n.add(e);
      let i = t.findIndex((t) => t === e);
      if (-1 !== i) for (; "number" == typeof t[++i]; ) s(t, n, t[t[i]]);
    }
    return n;
  }
  function c(t) {
    const n = new URL(t).pathname,
      e = n.lastIndexOf("/");
    return [n.substring(0, e + 1), n.substring(e + 1)];
  }
  const a = (...t) => {
    console.log("⚙️ Prefetch SW:", ...t);
  };
  async function r(t, n, e, i) {
    const o = t.t.findIndex((t) => t.i === n);
    if (
      (-1 !== o && t.t.splice(o, 1),
      t.o("adding base:", n),
      t.t.push({ i: n, p: e }),
      i)
    ) {
      const i = new Set(e.filter((t) => "string" == typeof t)),
        o = await t.T();
      if (o)
        for (const e of await o.keys()) {
          const [s, a] = c(new URL(e.url)),
            r = [];
          s !== n || i.has(a) || (t.o("deleting", e.url), r.push(o.delete(e))),
            await Promise.all(r);
        }
    }
  }
  function u(t, n, i) {
    const o = t.t.find((t) => n === t.i);
    o
      ? e(t, o, i, 0)
      : console.error(`Base path not found: ${n}, ignoring prefetch.`);
  }
  function l(t) {
    if (!t.U && t.L.length) {
      const e = t.L.shift();
      t.U = (async (t, e) => {
        const i = e[0];
        t.o("received message:", i, e[1], e.slice(2)),
          "graph" === i
            ? await r(t, e[1], e.slice(2), !0)
            : "graph-url" === i
              ? await (async function (t, e, i) {
                  await r(t, e, [], !1);
                  const o = await n(t, new URL(e + i, t.l));
                  if (o && 200 === o.status) {
                    const n = await o.json();
                    n.push(i), await r(t, e, n, !0);
                  }
                })(t, e[1], e[2])
              : "prefetch" === i
                ? await u(t, e[1], e.slice(2))
                : "prefetch-all" === i
                  ? await (function (t, n) {
                      const e = t.t.find((t) => n === t.i);
                      e
                        ? u(
                            t,
                            n,
                            e.p.filter((t) => "string" == typeof t),
                          )
                        : console.error(
                            `Base path not found: ${n}, ignoring prefetch.`,
                          );
                    })(t, e[1])
                  : "ping" === i
                    ? a("ping")
                    : "verbose" === i
                      ? (t.o = a)("mode: verbose")
                      : console.error("UNKNOWN MESSAGE:", e);
      })(t, e).then(() => {
        (t.U = null), l(t);
      });
    }
  }
  class f {
    constructor(t, n, e = 10, i = null, o = null, s = [], c = [], a = []) {
      (this.R = t),
        (this.l = n),
        (this.H = e),
        (this.A = i),
        (this.U = o),
        (this.u = s),
        (this.t = c),
        (this.L = a);
    }
    T() {
      return this.A;
    }
    async S(t, n) {
      const e = await this.T();
      return null == e ? void 0 : e.put(t, n);
    }
    async $(t) {
      const n = await this.T();
      return null == n ? void 0 : n.match(t);
    }
    o() {}
  }
  ((t) => {
    const e =
      ((i = t.fetch.bind(t)), (o = new URL(t.location.href)), new f(i, o));
    var i, o;
    (e.T = () =>
      e.A
        ? e.A
        : (clearTimeout(void 0),
          setTimeout(() => {
            e.A = null;
          }, 5e3),
          t.caches.open("QwikBundles"))),
      t.addEventListener("fetch", (t) => {
        const i = t.request;
        if ("GET" === i.method) {
          const o = n(e, new URL(i.url));
          o && t.respondWith(o);
        }
      }),
      t.addEventListener("message", (t) => {
        e.L.push(t.data), l(e);
      }),
      t.addEventListener("install", () => {
        t.skipWaiting();
      }),
      t.addEventListener("activate", (n) => {
        (e.T = () =>
          e.A
            ? e.A
            : (clearTimeout(void 0),
              setTimeout(() => {
                e.A = null;
              }, 5e3),
              t.caches.open("QwikBundles"))),
          n.waitUntil(t.clients.claim());
      });
  })(globalThis);
})();
