import { b as u, n as c } from "./q-BRFIrRA0.js";
const b = (e = {}) => {
  const [r, o, m, t] = u();
  let a, s;
  return (
    e instanceof SubmitEvent
      ? ((s = e.target),
        (a = new FormData(s)),
        (e.submitter instanceof HTMLInputElement ||
          e.submitter instanceof HTMLButtonElement) &&
          e.submitter.name &&
          e.submitter.name &&
          a.append(e.submitter.name, e.submitter.value))
      : (a = e),
    new Promise((n) => {
      a instanceof FormData && (t.formData = a),
        (t.submitted = !0),
        (t.isRunning = !0),
        (m.isNavigating = !0),
        (r.value = { data: a, id: o, resolve: c(n) });
    }).then(({ result: n, status: i }) => {
      if (((t.isRunning = !1), (t.status = i), (t.value = n), s)) {
        s.getAttribute("data-spa-reset") === "true" && s.reset();
        const l = { status: i, value: n };
        s.dispatchEvent(
          new CustomEvent("submitcompleted", {
            bubbles: !1,
            cancelable: !1,
            composed: !1,
            detail: l,
          }),
        );
      }
      return { status: i, value: n };
    })
  );
};
export { b as s_A5bZC7WO00A };
