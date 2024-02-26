/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
          // Replace 'nodemailer' and any other server-side packages with empty mocks on the client
          config.resolve.alias['nodemailer'] = false;
        }
        return config;
      },
};

export default nextConfig;
