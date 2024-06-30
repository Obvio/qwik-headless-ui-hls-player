/* Qwik Service Worker */
const appBundles = [
  ["q-60oybCOZ.js", [8, 11], ["E690Ao10V6Y"]],
  ["q-APn50xnR.js", [8, 29]],
  ["q-B5WQhgco.js", [8, 11], ["EqNbP0plvwE"]],
  ["q-B6Mk30zR.js", [8], ["A5bZC7WO00A"]],
  ["q-BcdZKEV9.js", [8, 29]],
  ["q-BmE5aJcV.js", [8, 11], ["LIdQSz17dE0"]],
  ["q-BoiS48Lv.js", [8, 25, 29], ["B5UJ0g8SQaE"]],
  ["q-Bq36Wx9q.js", []],
  ["q-BRFIrRA0.js", []],
  ["q-BU54y1bl.js", [8, 25, 29], ["F4sGGcV4R64"]],
  ["q-BxAGE_Z0.js", [8, 25, 29], ["8gdLBszqbaM", "Osdg8FnYTw4", "pIf0khHUxfY"]],
  ["q-Cbyc9mUz.js", [8]],
  ["q-CC6co-J_.js", [8, 29]],
  ["q-CijTbF6f.js", [8, 29], ["DHJl0elX0Rw"]],
  ["q-CjLzsr7P.js", [29]],
  [
    "q-CoWUpmLy.js",
    [8, 11, 29],
    [
      "1qasHAJ55I4",
      "4dFWsyWJxTo",
      "afoXHZLUAP0",
      "cmXkFzK8J0s",
      "m0DJvEI8mEc",
      "NjdgqL0n7I8",
      "pObfHD0PmkE",
      "Rt0RfGITd2Y",
      "tS6qI0254HY",
      "X2Sb0V4s5Xc",
    ],
  ],
  ["q-D2knf2e9.js", [8, 11], ["z10SkWbaSPI"]],
  ["q-D3WBTSLL.js", [], ["DyVc0YBIqQU"]],
  ["q-D7cBpOUB.js", [8, 11], ["HVuRRBA0tJk"]],
  ["q-DATUwI37.js", [8, 11], ["H09nPzDZJRg"]],
  ["q-DeuKzm3c.js", [8, 25, 29], ["KK5BfmKH4ZI", "Nk9PlpjQm9Y", "p9MSze0ojs4"]],
  ["q-DilakIy8.js", [8, 25, 29], ["BUbtvTyvVRE", "WmYC5H00wtI"]],
  ["q-DRubFGpz.js", [8], ["uPHV2oGn4wc"]],
  ["q-Eh8T3YJJ.js", [8, 25, 29], ["SGytLJ8uq8I"]],
  [
    "q-H9d_cUGd.js",
    [8, 25, 29],
    ["02wMImzEAbk", "fX0bDjeJa0E", "RPDJAz33WLA", "TxCFOy819ag"],
  ],
  ["q-MDn-xmgG.js", [8, 29]],
  ["q-MKdhnVsD.js", [8, 25, 29], ["e0ssiDXoeAM"]],
  ["q-TCIDpKNa.js", [8, 11], ["wJXVRFiaoiE"]],
  ["q-U1QBnUW6.js", [8], ["1c1U5T0Rv6Q"]],
  ["q-uemlvruI.js", []],
];
const libraryBundleIds = [24];
const linkBundles = [[/^\/$/, [12, 28, 1, 13]]];
const m = "QwikBuild",
  k = new Set(),
  g = new Map(),
  u = [],
  L = (e, n) => n.filter((s) => !e.some((i) => s.endsWith(i[0]))),
  q = (e, n) => !!n && !E(n),
  E = (e) => {
    const n = e.headers.get("Cache-Control") || "";
    return n.includes("no-cache") || n.includes("max-age=0");
  },
  C = (e, n) => e.some((s) => n.endsWith("/" + s[0])),
  U = (e, n) => e.find((s) => s[0] === n),
  b = (e, n) => n.map((s) => (e[s] ? e[s][0] : null)),
  W = (e, n) => n.map((s) => e.get(s)).filter((s) => s != null),
  p = (e) => {
    const n = new Map();
    for (const s of e) {
      const i = s[2];
      if (i) for (const c of i) n.set(c, s[0]);
    }
    return n;
  },
  v = (e, n, s, i) =>
    new Promise((c, h) => {
      const t = i.url,
        r = s.get(t);
      if (r) r.push([c, h]);
      else {
        const o = (l) => {
            const a = s.get(t);
            if (a) {
              s.delete(t);
              for (const [d] of a) d(l.clone());
            } else c(l.clone());
          },
          f = (l) => {
            const a = s.get(t);
            if (a) {
              s.delete(t);
              for (const [d, A] of a) A(l);
            } else h(l);
          };
        s.set(t, [[c, h]]),
          e
            .match(t)
            .then((l) => {
              if (q(i, l)) o(l);
              else
                return n(i).then(async (a) => {
                  a.ok && (await e.put(t, a.clone())), o(a);
                });
            })
            .catch((l) =>
              e.match(t).then((a) => {
                a ? o(a) : f(l);
              }),
            );
      }
    }),
  y = (e, n, s, i, c, h = !1) => {
    const t = () => {
        for (; u.length > 0 && g.size < 6; ) {
          const o = u.shift(),
            f = new Request(o);
          k.has(o) ? t() : (k.add(o), v(n, s, g, f).finally(t));
        }
      },
      r = (o) => {
        try {
          const f = U(e, o);
          if (f) {
            const l = b(e, f[1]),
              a = new URL(o, i).href,
              d = u.indexOf(a);
            d > -1
              ? h && (u.splice(d, 1), u.unshift(a))
              : h
                ? u.unshift(a)
                : u.push(a),
              l.forEach(r);
          }
        } catch (f) {
          console.error(f);
        }
      };
    Array.isArray(c) && c.forEach(r), t();
  },
  w = (e, n, s, i, c, h, t) => {
    try {
      y(e, i, c, h, b(e, n));
    } catch (r) {
      console.error(r);
    }
    for (const r of t)
      try {
        for (const o of s) {
          const [f, l] = o;
          if (f.test(r)) {
            y(e, i, c, h, b(e, l));
            break;
          }
        }
      } catch (o) {
        console.error(o);
      }
  },
  B = (e, n, s, i) => {
    try {
      const c = i.href.split("/"),
        h = c[c.length - 1];
      c[c.length - 1] = "";
      const t = new URL(c.join("/"));
      y(e, n, s, t, [h], !0);
    } catch (c) {
      console.error(c);
    }
  },
  N = (e, n, s, i) => {
    const c = e.fetch.bind(e),
      h = p(n);
    e.addEventListener("fetch", (t) => {
      const r = t.request;
      if (r.method === "GET") {
        const o = new URL(r.url);
        C(n, o.pathname) &&
          t.respondWith(
            e.caches.open(m).then((f) => (B(n, f, c, o), v(f, c, g, r))),
          );
      }
    }),
      e.addEventListener("message", async ({ data: t }) => {
        if (t.type === "qprefetch" && typeof t.base == "string") {
          const r = await e.caches.open(m),
            o = new URL(t.base, e.origin);
          Array.isArray(t.links) && w(n, s, i, r, c, o, t.links),
            Array.isArray(t.bundles) && y(n, r, c, o, t.bundles),
            Array.isArray(t.symbols) && y(n, r, c, o, W(h, t.symbols));
        }
      }),
      e.addEventListener("activate", () => {
        (async () => {
          try {
            const t = await e.caches.open(m),
              o = (await t.keys()).map((l) => l.url),
              f = L(n, o);
            await Promise.all(f.map((l) => t.delete(l)));
          } catch (t) {
            console.error(t);
          }
        })();
      });
  },
  x = () => {
    typeof self < "u" &&
      typeof appBundles < "u" &&
      N(self, appBundles, libraryBundleIds, linkBundles);
  };
x();
addEventListener("install", () => self.skipWaiting());
addEventListener("activate", () => self.clients.claim());
