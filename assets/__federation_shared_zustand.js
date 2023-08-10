import { i as importShared } from './_virtual___federation_fn_import-4799e8ab.js';
import { r as reactExports, g as getDefaultExportFromCjs } from './__federation_shared_react.js';

const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if (({"VITE_PRODUCT_MFE_URL":"https://tminhduc2811.github.io/product-mfe/assets/product-mfe-entry.js","VITE_CART_MFE_URL":"https://tminhduc2811.github.io/cart-mfe/assets/cart-mfe-entry.js","VITE_ABOUT_MFE_URL":"https://tminhduc2811.github.io/about-mfe/assets/about-mfe-entry.js","BASE_URL":"/shopping-mfe/","MODE":"production","DEV":false,"PROD":true,"SSR":false} ? "production" : void 0) !== "production") {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;

var withSelector = {exports: {}};

var withSelector_production_min = {};

var shim = {exports: {}};

var useSyncExternalStoreShim_production_min = {};

/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=reactExports;function h$1(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h$1,l=e.useState,m=e.useEffect,n$1=e.useLayoutEffect,p$1=e.useDebugValue;function q$1(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n$1(function(){c.value=d;c.getSnapshot=b;r$1(c)&&g({inst:c});},[a,d,b]);m(function(){r$1(c)&&g({inst:c});return a(function(){r$1(c)&&g({inst:c});})},[a]);p$1(d);return d}
function r$1(a){var b=a.getSnapshot;a=a.value;try{var d=b();return !k(a,d)}catch(f){return !0}}function t$1(a,b){return b()}var u$1="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t$1:q$1;useSyncExternalStoreShim_production_min.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u$1;

{
  shim.exports = useSyncExternalStoreShim_production_min;
}

var shimExports = shim.exports;

/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h=reactExports,n=shimExports;function p(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q="function"===typeof Object.is?Object.is:p,r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;
withSelector_production_min.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f;}else f=c.current;c=v(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return [function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r(a,c[0],c[1]);
u(function(){f.hasValue=!0;f.value=d;},[d]);w(d);return d};

{
  withSelector.exports = withSelector_production_min;
}

var withSelectorExports = withSelector.exports;
const useSyncExternalStoreExports = /*@__PURE__*/getDefaultExportFromCjs(withSelectorExports);

const {useDebugValue} = await importShared('react');

const { useSyncExternalStoreWithSelector } = useSyncExternalStoreExports;
let didWarnAboutEqualityFn = false;
function useStore(api, selector = api.getState, equalityFn) {
  if (({"VITE_PRODUCT_MFE_URL":"https://tminhduc2811.github.io/product-mfe/assets/product-mfe-entry.js","VITE_CART_MFE_URL":"https://tminhduc2811.github.io/cart-mfe/assets/cart-mfe-entry.js","VITE_ABOUT_MFE_URL":"https://tminhduc2811.github.io/about-mfe/assets/about-mfe-entry.js","BASE_URL":"/shopping-mfe/","MODE":"production","DEV":false,"PROD":true,"SSR":false} ? "production" : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
    console.warn(
      "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
    );
    didWarnAboutEqualityFn = true;
  }
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  useDebugValue(slice);
  return slice;
}
const createImpl = (createState) => {
  if (({"VITE_PRODUCT_MFE_URL":"https://tminhduc2811.github.io/product-mfe/assets/product-mfe-entry.js","VITE_CART_MFE_URL":"https://tminhduc2811.github.io/cart-mfe/assets/cart-mfe-entry.js","VITE_ABOUT_MFE_URL":"https://tminhduc2811.github.io/about-mfe/assets/about-mfe-entry.js","BASE_URL":"/shopping-mfe/","MODE":"production","DEV":false,"PROD":true,"SSR":false} ? "production" : void 0) !== "production" && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
var react = (createState) => {
  if (({"VITE_PRODUCT_MFE_URL":"https://tminhduc2811.github.io/product-mfe/assets/product-mfe-entry.js","VITE_CART_MFE_URL":"https://tminhduc2811.github.io/cart-mfe/assets/cart-mfe-entry.js","VITE_ABOUT_MFE_URL":"https://tminhduc2811.github.io/about-mfe/assets/about-mfe-entry.js","BASE_URL":"/shopping-mfe/","MODE":"production","DEV":false,"PROD":true,"SSR":false} ? "production" : void 0) !== "production") {
    console.warn(
      "[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."
    );
  }
  return create(createState);
};

export { create, createStore, react as default, useStore };
