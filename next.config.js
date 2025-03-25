/** @type {import("next").NextConfig} */
const config = {
    logging: {
        // Disable incoming request logs
        incomingRequests: false,

        fetches: {
            fullUrl: false,
            hmrRefreshes: false
        }
    }
}

export default config;
