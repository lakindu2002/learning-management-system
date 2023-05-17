interface HotJarConfig {
    siteId: string;
}

const warn = (...args: string[]) => {
    if (process.env.NODE_ENV !== 'development') {
        return;
    }

    console.warn(...args);
};

class HotJar {
    SITE_ID: string | null = null;

    initialized = false;

    configure(config: HotJarConfig) {
        this.SITE_ID = config.siteId;
    }

    initialize(config: HotJarConfig) {
        if (this.initialized) {
            warn('GTM can only be initialized once.');
            return;
        }

        // Maybe you want to load events from server side (in NextJS apps for example),
        // those can be queued.
        // SSR queued events can be loaded in the initialize script.
        // For the moment we do not implement it, but in future we might add it.

        if (!document) {
            warn('Hotjar can be initialized only on client side.');
            return;
        }

        if (!config.siteId) {
            warn('Hotjar requires a site id to be loaded.');
            return;
        }

        this.configure(config);

        const script = document.createElement('script');

        script.innerHTML = `
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:3496308,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `;
        document.head.insertBefore(script, document.head.childNodes[0]);
    }
}

// Singleton
export const hotjar = new HotJar();

export const hotjarConfig = {
    siteId: process.env.NEXT_PUBLIC_HOT_JAR_SITE_ID
};