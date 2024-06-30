import { f as r, _ as t, a as i, d as s, F as o } from "./q-BRFIrRA0.js";
import { E as u, a as p } from "./q-MDn-xmgG.js";
import "./q-uemlvruI.js";
const d = () => {
  const n = u(),
    a = p();
  return r(
    o,
    {
      children: [
        t("title", null, null, n.title, 1, null),
        t(
          "link",
          null,
          { rel: "canonical", href: i((l) => l.url.href, [a]) },
          null,
          3,
          null,
        ),
        t(
          "meta",
          null,
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          },
          null,
          3,
          null,
        ),
        t(
          "link",
          null,
          {
            rel: "icon",
            type: "image/svg+xml",
            href: "https://obvio.github.io/qwik-headless-hls-player/favicon.svg",
          },
          null,
          3,
          null,
        ),
        n.meta.map((l) => s("meta", { ...l }, null, 0, l.key)),
        n.links.map((l) => s("link", { ...l }, null, 0, l.key)),
        n.styles.map((l) => {
          var e;
          return s(
            "style",
            {
              ...l.props,
              ...((e = l.props) != null && e.dangerouslySetInnerHTML
                ? {}
                : { dangerouslySetInnerHTML: l.style }),
            },
            null,
            0,
            l.key,
          );
        }),
        n.scripts.map((l) => {
          var e;
          return s(
            "script",
            {
              ...l.props,
              ...((e = l.props) != null && e.dangerouslySetInnerHTML
                ? {}
                : { dangerouslySetInnerHTML: l.script }),
            },
            null,
            0,
            l.key,
          );
        }),
      ],
    },
    1,
    "Zb_0",
  );
};
export { d as s_F4sGGcV4R64 };
