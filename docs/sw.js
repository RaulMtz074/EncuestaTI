if (!self.define) {
    let e,
        s = {};
    const i = (i, n) => (
        (i = new URL(i + ".js", n).href),
        s[i] ||
        new Promise((s) => {
            if ("document" in self) {
                const e = document.createElement("script");
                (e.src = i), (e.onload = s), document.head.appendChild(e);
            } else (e = i), importScripts(i), s();
        }).then(() => {
            let e = s[i];
            if (!e) throw new Error(`Module ${i} didn’t register its module`);
            return e;
        })
    );
    self.define = (n, r) => {
        const t =
            e ||
            ("document" in self ? document.currentScript.src : "") ||
            location.href;
        if (s[t]) return;
        let o = {};
        const l = (e) => i(e, t),
            d = { module: { uri: t }, exports: o, require: l };
        s[t] = Promise.all(n.map((e) => d[e] || l(e))).then((e) => (r(...e), o));
    };
}
define(["./workbox-3625d7b0"], function (e) {
    "use strict";
    self.skipWaiting(),
        e.clientsClaim(),
        e.precacheAndRoute(
            [
                { url: "./assets/index.2f210cef.css", revision: null },
                { url: "./assets/index.af8385e7.js", revision: null },
                { url: "./assets/workbox-window.prod.es5.d2780aeb.js", revision: null },
                { url: "./index.html", revision: "c37969eef8dce424877681ae622e145d" },
                { url: "./manifest.webmanifest", revision: "56df2db1ea69d84a203ac480a0dfa24b" }
            ],
            {}
        ),
        e.cleanupOutdatedCaches(),
        e.registerRoute(
            new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))
        );
});
