import { I as y, J as b, K as E } from "./q-MDn-xmgG.js";
import { b as x, l as j, B as q, C as T } from "./q-BRFIrRA0.js";
import "./q-uemlvruI.js";
const S = async function (...s) {
  const [d, p, i, h, a] = x(),
    n = s.length > 0 && s[0] instanceof AbortSignal ? s.shift() : void 0;
  {
    const c = j(),
      w = s.map((t) =>
        t instanceof SubmitEvent && t.target instanceof HTMLFormElement
          ? new FormData(t.target)
          : t instanceof Event || t instanceof Node
            ? null
            : t,
      ),
      r = a.getHash();
    let l = "";
    const f = {
        ...d,
        method: i,
        headers: { ...p, "Content-Type": "application/qwik-json", "X-QRL": r },
        signal: n,
      },
      m = await q([a, ...w]);
    i === "GET" ? (l += `&${E}=${encodeURIComponent(m)}`) : (f.body = m);
    const e = await fetch(`${h}?${y}=${r}${l}`, f),
      o = e.headers.get("Content-Type");
    if (e.ok && o === "text/qwik-json-stream" && e.body)
      return (async function* () {
        try {
          for await (const t of b(e.body, c ?? document.documentElement, n))
            yield t;
        } finally {
          (n != null && n.aborted) || (await e.body.cancel());
        }
      })();
    if (o === "application/qwik-json") {
      const t = await e.text(),
        u = await T(t, c ?? document.documentElement);
      if (e.status === 500) throw u;
      return u;
    } else if (o === "application/json") {
      const t = await e.json();
      if (e.status === 500) throw t;
      return t;
    } else if (o === "text/plain" || o === "text/html") {
      const t = await e.text();
      if (e.status === 500) throw t;
      return t;
    }
  }
};
export { S as s_SGytLJ8uq8I };
