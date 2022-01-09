import { PrerenderConfig } from '@stencil/core';

export const config: PrerenderConfig = {
    //staticSite: true,
    hydrateOptions(url) {
        return {
            prettyHtml: true,
            staticComponents: [
                'app-home',
            ]
        };
    }
};