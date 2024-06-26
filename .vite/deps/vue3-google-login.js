import {
  createCommentVNode,
  createElementBlock,
  defineComponent,
  onMounted,
  openBlock,
  reactive,
  ref,
  renderSlot,
  unref,
  useSlots,
  watch
} from "./chunk-5ZA6O7D6.js";

// node_modules/vue3-google-login/dist/index.esm.js
var u = Object.freeze({ __proto__: null });
var s = { library: "https://accounts.google.com/gsi/client", defaultButtonConfig: { theme: "outline", size: "large" }, scopes: "email profile openid" };
var g = reactive({ clientId: null, popupType: "CODE", prompt: false, autoLogin: false, idConfiguration: null, buttonConfig: s.defaultButtonConfig, callback: () => {
}, error: null });
var f = reactive({ apiLoaded: false, apiLoadIntitited: false });
var b = (e) => {
  try {
    const t = e.split(".")[1].replace(/-/g, "+").replace(/_/g, "/"), i = decodeURIComponent(atob(t).split("").map(function(e2) {
      return "%" + ("00" + e2.charCodeAt(0).toString(16)).slice(-2);
    }).join(""));
    return JSON.parse(i);
  } catch (e2) {
    throw "JWT provided is invalid";
  }
};
var I = new Promise((e) => {
  const t = "undefined" != typeof window;
  if (!f.apiLoadIntitited && t) {
    const t2 = document.createElement("script");
    f.apiLoadIntitited = true, t2.addEventListener("load", () => {
      f.apiLoaded = true, e(window.google);
    }), t2.src = s.library, t2.async = true, t2.defer = true, document.head.appendChild(t2);
  }
});
var m = (e) => {
  f.apiLoadIntitited ? f.apiLoaded ? e(window.google) : watch(() => f.apiLoaded, (t) => {
    t && e(window.google);
  }) : I.then((t) => {
    e(t);
  });
};
var w = (e, t, i, n) => {
  if (!e.client_id)
    throw new Error("Prop client id required since plugin is not initialized with a client id");
  m(() => {
    ((e2, t2, i2, n2, o) => {
      if (o) {
        const t3 = e2.callback;
        e2.callback = (e3) => {
          e3.credential ? t3 && t3(e3) : o(e3);
        };
      }
      window.google.accounts.id.initialize(e2);
      const c = t2.value;
      c && !n2 && window.google.accounts.id.renderButton(c, i2);
    })(e, t, i.buttonConfig, n, i.error), i.prompt && k({ clientId: i.clientId, callback: i.callback, error: i.error, autoLogin: i.autoLogin });
  });
};
var _ = (e) => new Promise((t, i) => {
  m((n) => {
    if (!(e && e.clientId || g.clientId))
      throw new Error("clientId is required since the plugin is not initialized with a Client Id");
    n.accounts.oauth2.initCodeClient({ client_id: e && e.clientId || g.clientId || "", scope: s.scopes, ux_mode: "popup", callback: (e2) => {
      e2.code ? t(e2) : i(e2);
    }, error_callback: (e2) => {
      i(e2);
    } }).requestCode();
  });
});
var h = (e) => new Promise((t, i) => {
  m((n) => {
    if (!(e && e.clientId || g.clientId))
      throw new Error("clientId is required since the plugin is not initialized with a Client Id");
    n.accounts.oauth2.initTokenClient({ client_id: e && e.clientId || g.clientId || "", scope: s.scopes, callback: (e2) => {
      e2.access_token ? t(e2) : i(e2);
    }, error_callback: (e2) => {
      i(e2);
    } }).requestAccessToken();
  });
});
var k = (e) => {
  if (!e && (e = {}), !e.clientId && !g.clientId)
    throw new Error("clientId is required");
  const t = { use_fedcm_for_prompt: true };
  return e.clientId && (t.client_id = e.clientId), !e.clientId && g.clientId && (t.client_id = g.clientId), e.context && (t.context = e.context), null != e.autoLogin && (t.auto_select = e.autoLogin), null != e.cancelOnTapOutside && (t.cancel_on_tap_outside = e.cancelOnTapOutside), new Promise((i, n) => {
    t.callback = (t2) => {
      e && e.callback && e.callback(t2), t2.credential ? i(t2) : n(t2);
    }, m((e2) => {
      e2.accounts.id.initialize(t), e2.accounts.id.prompt();
    });
  });
};
var y = () => {
  m((e) => {
    e.accounts.id.disableAutoSelect();
  });
};
var C = defineComponent({ __name: "GoogleLogin", props: { clientId: { type: String, required: false }, prompt: { type: Boolean, required: false, default: false }, autoLogin: { type: Boolean, required: false, default: false }, popupType: { type: String, required: false }, idConfiguration: { type: Object, required: false }, buttonConfig: { type: Object, required: false }, callback: { type: Function, required: false }, error: { type: Function, required: false } }, setup(e) {
  const t = !!useSlots().default, i = e, u2 = ((e2, t2) => {
    const i2 = { ...e2 };
    for (const e3 in t2)
      void 0 !== t2[e3] && null !== t2[e3] && (i2[e3] = t2[e3]);
    return i2;
  })(g, i), s2 = { client_id: u2.clientId || null, auto_select: u2.autoLogin || false, callback: u2.callback, ...u2.idConfiguration }, f2 = ref();
  return onMounted(() => {
    w(s2, f2, u2, t), i.popupType && !t && console.warn("Option 'popupType' is ignored since a slot which act as a custom login button was not found!!!");
  }), (e2, i2) => (openBlock(), createElementBlock("div", { class: "g-btn-wrapper", onClick: i2[0] || (i2[0] = (e3) => unref(t) && void ("TOKEN" === unref(u2).popupType ? h({ clientId: u2.clientId }).then((e4) => {
    u2.callback && u2.callback(e4);
  }).catch((e4) => {
    u2.error && u2.error(e4);
  }) : _({ clientId: u2.clientId }).then((e4) => {
    u2.callback && u2.callback(e4);
  }).catch((e4) => {
    u2.error && u2.error(e4);
  }))) }, [unref(t) ? createCommentVNode("v-if", true) : (openBlock(), createElementBlock("span", { key: 0, ref_key: "buttonRef", ref: f2, class: "g-btn" }, null, 512)), renderSlot(e2.$slots, "default")]));
} });
!function(e, t) {
  void 0 === t && (t = {});
  var i = t.insertAt;
  if (e && "undefined" != typeof document) {
    var n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
    o.type = "text/css", "top" === i && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
  }
}("\n.g-btn-wrapper[data-v-5e610566] {\n  display: inline-block;\n}\n"), C.__scopeId = "data-v-5e610566", C.__file = "src/plugin/GoogleLogin.vue";
var L = { install: (e, t) => {
  t && ((e2) => {
    e2.clientId && (g.clientId = e2.clientId), e2.popupType && (g.popupType = e2.popupType), null != e2.prompt && (g.prompt = e2.prompt), null != e2.autoLogin && (g.autoLogin = e2.autoLogin), e2.idConfiguration && (g.idConfiguration = e2.idConfiguration), e2.buttonConfig && (g.buttonConfig = e2.buttonConfig), e2.callback && (g.callback = e2.callback);
  })(t), I.then(() => {
    if (t.clientId) {
      const e2 = { client_id: t.clientId, auto_select: true === t.autoLogin, callback: t.callback, use_fedcm_for_prompt: true, ...t.idConfiguration };
      window.google.accounts.id.initialize(e2), t.prompt && window.google.accounts.id.prompt();
    }
  }), e.component("GoogleLogin", C);
} };
export {
  u as CallbackTypes,
  C as GoogleLogin,
  b as decodeCredential,
  L as default,
  _ as googleAuthCodeLogin,
  y as googleLogout,
  k as googleOneTap,
  m as googleSdkLoaded,
  h as googleTokenLogin
};
//# sourceMappingURL=vue3-google-login.js.map
