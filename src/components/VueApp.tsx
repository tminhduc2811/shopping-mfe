import AboutApp from "about-mfe/App";
import { createApp } from "vue";

import { useEffect } from "react";

const VueAboutApp = () => {
  useEffect(() => {
    const app = createApp(AboutApp);
    app.mount("#vue-app");

    return () => app.unmount();
  }, []);
  return <div id="vue-app"></div>;
};

export default VueAboutApp;
