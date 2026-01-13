import { defineComponent as $, computed as v, createElementBlock as o, openBlock as s, createElementVNode as t, unref as g, Fragment as m, renderList as y, normalizeClass as S, toDisplayString as u, createCommentVNode as h, createVNode as D, ref as A, onMounted as H, withModifiers as M, createBlock as C, watch as L, nextTick as B } from "vue";
import { useData as x, useRoute as I, withBase as f, Content as F } from "vitepress";
import T from "medium-zoom";
import { data as w } from "vitepress-theme-maple/posts.data";
const Y = { class: "site-header" }, E = { class: "header-logo-row" }, N = { class: "header-bar" }, O = ["src"], R = { class: "main-nav" }, V = ["href"], j = /* @__PURE__ */ $({
  __name: "Header",
  setup(p) {
    const { theme: n } = x(), d = I(), a = v(() => n.value.nav || []), r = (e) => {
      const c = d.path;
      return e === "/" ? c === e : c.startsWith(e);
    };
    return (e, c) => (s(), o("header", Y, [
      t("div", E, [
        c[0] || (c[0] = t("a", {
          href: "/",
          class: "site-logo"
        }, " Maple ", -1)),
        t("div", N, [
          t("img", {
            src: g(f)("/header.svg"),
            alt: "Header decoration"
          }, null, 8, O)
        ])
      ]),
      t("nav", R, [
        (s(!0), o(m, null, y(a.value, (l) => (s(), o("a", {
          key: l.link,
          href: g(f)(l.link),
          class: S(["nav-item", { active: r(l.link) }])
        }, u(l.text), 11, V))), 128))
      ])
    ]));
  }
}), k = (p, n) => {
  const d = p.__vccOpts || p;
  for (const [a, r] of n)
    d[a] = r;
  return d;
}, z = /* @__PURE__ */ k(j, [["__scopeId", "data-v-49607f0c"]]), U = { class: "site-footer" }, Z = { class: "footer-content" }, P = { class: "footer-copyright" }, W = {
  key: 0,
  class: "footer-links"
}, q = ["href"], G = { key: 0 }, J = /* @__PURE__ */ $({
  __name: "Footer",
  setup(p) {
    const { theme: n } = x(), d = (/* @__PURE__ */ new Date()).getFullYear(), a = v(() => n.value.footer || {}), r = v(() => a.value.copyright || `© ${d} All rights reserved.`), e = v(() => a.value.links || []);
    return (c, l) => (s(), o("footer", U, [
      t("div", Z, [
        t("div", P, u(r.value), 1),
        e.value.length > 0 ? (s(), o("div", W, [
          (s(!0), o(m, null, y(e.value, (i, _) => (s(), o(m, {
            key: i.link
          }, [
            t("a", {
              href: i.link,
              target: "_blank",
              rel: "noopener"
            }, u(i.text), 9, q),
            _ < e.value.length - 1 ? (s(), o("span", G, "·")) : h("", !0)
          ], 64))), 128))
        ])) : h("", !0)
      ])
    ]));
  }
}), K = /* @__PURE__ */ k(J, [["__scopeId", "data-v-f7a9a898"]]), Q = { class: "home-page" }, X = { class: "page-title-section" }, tt = { class: "page-title" }, et = { class: "post-list" }, st = { class: "post-header" }, ot = { class: "post-title" }, at = ["href"], nt = { class: "post-content" }, rt = ["innerHTML"], ct = ["href"], lt = {
  key: 0,
  class: "post-cover"
}, it = ["href"], _t = ["src", "alt"], ut = {
  key: 0,
  class: "empty-state"
}, dt = /* @__PURE__ */ $({
  __name: "Home",
  setup(p) {
    const { theme: n } = x(), d = v(() => n.value.homeTitle || "文章列表");
    return (a, r) => (s(), o("div", Q, [
      t("section", X, [
        t("h1", tt, u(d.value), 1),
        r[0] || (r[0] = t("div", { class: "title-underline" }, null, -1))
      ]),
      t("div", et, [
        (s(!0), o(m, null, y(g(w), (e) => (s(), o("article", {
          key: e.url,
          class: "post-card"
        }, [
          t("header", st, [
            t("h2", ot, [
              t("a", {
                href: g(f)(e.url)
              }, u(e.title), 9, at)
            ])
          ]),
          r[1] || (r[1] = t("div", { class: "post-separator" }, null, -1)),
          t("div", {
            class: S(["post-body", { "has-cover": e.cover }])
          }, [
            t("div", nt, [
              e.excerpt ? (s(), o("div", {
                key: 0,
                class: "post-excerpt",
                innerHTML: e.excerpt
              }, null, 8, rt)) : h("", !0),
              t("a", {
                href: g(f)(e.url),
                class: "post-read-more"
              }, " read more → ", 8, ct)
            ]),
            e.cover ? (s(), o("div", lt, [
              t("a", {
                href: g(f)(e.url)
              }, [
                t("img", {
                  src: e.cover,
                  alt: e.title
                }, null, 8, _t)
              ], 8, it)
            ])) : h("", !0)
          ], 2)
        ]))), 128)),
        !g(w) || g(w).length === 0 ? (s(), o("div", ut, [...r[2] || (r[2] = [
          t("p", null, "暂无文章", -1)
        ])])) : h("", !0)
      ])
    ]));
  }
}), ht = /* @__PURE__ */ k(dt, [["__scopeId", "data-v-e0d27e44"]]), vt = { class: "article-container" }, pt = {
  key: 0,
  class: "article-header"
}, gt = { class: "article-meta" }, mt = { key: 0 }, yt = { key: 1 }, ft = { key: 2 }, $t = { class: "article-content" }, kt = {
  key: 1,
  class: "article-footer"
}, wt = { class: "article-tags" }, xt = ["href"], Ct = /* @__PURE__ */ $({
  __name: "Article",
  setup(p) {
    const { frontmatter: n, page: d } = x(), a = v(() => ({
      date: n.value.date || "",
      category: n.value.category || "",
      tags: n.value.tags || [],
      author: n.value.author || "Maple"
    })), r = (e) => e ? new Date(e).toLocaleDateString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "numeric"
    }) : "";
    return (e, c) => (s(), o("article", vt, [
      a.value.date ? (s(), o("header", pt, [
        t("div", gt, [
          a.value.date ? (s(), o("span", mt, u(r(a.value.date)), 1)) : h("", !0),
          a.value.category ? (s(), o("span", yt, "· " + u(a.value.category), 1)) : h("", !0),
          a.value.author ? (s(), o("span", ft, "· " + u(a.value.author), 1)) : h("", !0)
        ])
      ])) : h("", !0),
      t("div", $t, [
        D(g(F))
      ]),
      a.value.tags.length > 0 ? (s(), o("footer", kt, [
        t("div", wt, [
          c[0] || (c[0] = t("span", { class: "tag-label" }, "标签：", -1)),
          (s(!0), o(m, null, y(a.value.tags, (l) => (s(), o("a", {
            key: l,
            href: `/tags/${l}`,
            class: "article-tag"
          }, u(l), 9, xt))), 128))
        ])
      ])) : h("", !0)
    ]));
  }
}), Dt = /* @__PURE__ */ k(Ct, [["__scopeId", "data-v-7c7322d2"]]), It = { class: "archive-page" }, bt = { class: "archive-year-title" }, Mt = { class: "archive-posts" }, St = { class: "archive-post-date" }, Ht = ["href"], At = {
  key: 0,
  class: "empty-state"
}, Lt = /* @__PURE__ */ $({
  __name: "Archive",
  setup(p) {
    const n = v(() => {
      const a = {};
      return w.forEach((e) => {
        const c = new Date(e.date).getFullYear().toString();
        a[c] || (a[c] = []), a[c].push(e);
      }), Object.keys(a).sort((e, c) => parseInt(c) - parseInt(e)).map((e) => ({
        year: e,
        posts: a[e]
      }));
    }), d = (a) => {
      const r = new Date(a), e = String(r.getMonth() + 1).padStart(2, "0"), c = String(r.getDate()).padStart(2, "0");
      return `${e}-${c}`;
    };
    return (a, r) => (s(), o("div", It, [
      (s(!0), o(m, null, y(n.value, (e) => (s(), o("div", {
        key: e.year,
        class: "archive-year"
      }, [
        t("h2", bt, u(e.year), 1),
        t("ul", Mt, [
          (s(!0), o(m, null, y(e.posts, (c) => (s(), o("li", {
            key: c.url,
            class: "archive-post-item"
          }, [
            t("span", St, u(d(c.date)), 1),
            t("a", {
              href: g(f)(c.url),
              class: "archive-post-title"
            }, u(c.title), 9, Ht)
          ]))), 128))
        ])
      ]))), 128)),
      n.value.length === 0 ? (s(), o("div", At, [...r[0] || (r[0] = [
        t("p", null, "暂无文章", -1)
      ])])) : h("", !0)
    ]));
  }
}), Bt = /* @__PURE__ */ k(Lt, [["__scopeId", "data-v-49f813f6"]]), Ft = { class: "categories-page" }, Tt = {
  key: 0,
  class: "category-list"
}, Yt = ["onClick"], Et = { class: "category-count" }, Nt = {
  key: 0,
  class: "empty-state"
}, Ot = {
  key: 1,
  class: "category-posts"
}, Rt = { class: "category-header" }, Vt = { class: "current-category" }, jt = { class: "post-count" }, zt = { class: "post-list" }, Ut = { class: "post-date" }, Zt = ["href"], Pt = {
  key: 0,
  class: "empty-state"
}, Wt = /* @__PURE__ */ $({
  __name: "Categories",
  setup(p) {
    const n = A("");
    H(() => {
      const l = () => {
        const i = window.location.hash.slice(1);
        n.value = decodeURIComponent(i);
      };
      l(), window.addEventListener("hashchange", l);
    });
    const d = (l) => {
      n.value = l, window.location.hash = encodeURIComponent(l);
    }, a = () => {
      n.value = "", window.location.hash = "";
    }, r = v(() => {
      const l = {};
      return w.forEach((i) => {
        i.category && (l[i.category] = (l[i.category] || 0) + 1);
      }), Object.entries(l).map(([i, _]) => ({ name: i, count: _ })).sort((i, _) => _.count - i.count);
    }), e = v(() => n.value ? w.filter((l) => l.category === n.value) : []), c = (l) => {
      const i = new Date(l), _ = String(i.getMonth() + 1).padStart(2, "0"), b = String(i.getDate()).padStart(2, "0");
      return `${_}-${b}`;
    };
    return (l, i) => (s(), o("div", Ft, [
      n.value ? (s(), o("div", Ot, [
        t("div", Rt, [
          t("a", {
            href: "#",
            class: "back-link",
            onClick: M(a, ["prevent"])
          }, "← 返回分类"),
          t("h2", Vt, u(n.value), 1),
          t("span", jt, "共 " + u(e.value.length) + " 篇文章", 1)
        ]),
        t("ul", zt, [
          (s(!0), o(m, null, y(e.value, (_) => (s(), o("li", {
            key: _.url,
            class: "post-item"
          }, [
            t("span", Ut, u(c(_.date)), 1),
            t("a", {
              href: g(f)(_.url),
              class: "post-title"
            }, u(_.title), 9, Zt)
          ]))), 128))
        ]),
        e.value.length === 0 ? (s(), o("div", Pt, [...i[1] || (i[1] = [
          t("p", null, "该分类下暂无文章", -1)
        ])])) : h("", !0)
      ])) : (s(), o("div", Tt, [
        (s(!0), o(m, null, y(r.value, (_) => (s(), o("a", {
          key: _.name,
          href: "#",
          class: "category-item",
          onClick: M((b) => d(_.name), ["prevent"])
        }, [
          t("span", null, u(_.name), 1),
          t("span", Et, u(_.count), 1)
        ], 8, Yt))), 128)),
        r.value.length === 0 ? (s(), o("div", Nt, [...i[0] || (i[0] = [
          t("p", null, "暂无分类", -1)
        ])])) : h("", !0)
      ]))
    ]));
  }
}), qt = /* @__PURE__ */ k(Wt, [["__scopeId", "data-v-85dc956a"]]), Gt = { class: "layout" }, Jt = { class: "site-container" }, Kt = { class: "main-content" }, Qt = {
  key: 0,
  class: "page-title-section"
}, Xt = { class: "page-title" }, te = { class: "content-wrapper" }, ee = /* @__PURE__ */ $({
  __name: "Layout",
  setup(p) {
    const { frontmatter: n, page: d } = x(), a = I(), r = v(() => a.path === "/"), e = v(() => a.path === "/archive/"), c = v(() => a.path === "/categories/"), l = v(() => r.value ? "" : n.value.title || d.value.title || "");
    return (i, _) => (s(), o("div", Gt, [
      t("div", Jt, [
        D(z),
        t("main", Kt, [
          l.value && !r.value ? (s(), o("section", Qt, [
            t("h1", Xt, u(l.value), 1),
            _[0] || (_[0] = t("div", { class: "title-underline" }, null, -1))
          ])) : h("", !0),
          t("div", te, [
            r.value ? (s(), C(ht, { key: 0 })) : e.value ? (s(), C(Bt, { key: 1 })) : c.value ? (s(), C(qt, { key: 2 })) : (s(), C(Dt, { key: 3 }))
          ])
        ]),
        D(K)
      ])
    ]));
  }
}), se = /* @__PURE__ */ k(ee, [["__scopeId", "data-v-ad2b212d"]]), ce = {
  Layout: se,
  enhanceApp({ app: p }) {
  },
  setup() {
    const p = I(), n = () => {
      T(".article-content img, .post-excerpt img", {
        background: "rgba(0, 0, 0, 0.9)"
      });
    };
    H(() => n()), L(
      () => p.path,
      () => B(() => n())
    );
  }
};
export {
  Bt as Archive,
  Dt as Article,
  qt as Categories,
  K as Footer,
  z as Header,
  ht as Home,
  se as Layout,
  ce as default
};
