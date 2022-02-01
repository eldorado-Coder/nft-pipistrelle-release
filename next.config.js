const { existsSync } = require('fs')

const UNOPTIMIZED_IMAGES = process.env.UNOPTIMIZED_IMAGES === 'true'

/** @type {import('next').NextConfig} */
module.exports = {
  "reactStrictMode": true,
  "sassOptions": {
    "includePaths": ["./"]
  },
  images: {
    minimumCacheTTL: 24 * 60 * 60,
    loader: UNOPTIMIZED_IMAGES ? 'custom' : undefined,
    formats: ['image/avif', 'image/webp'],
    domains: ['lh3.googleusercontent.com', 'rarible.mypinata.cloud', 'img.rarible.com'],
  },
  env: {
    UNOPTIMIZED_IMAGES: UNOPTIMIZED_IMAGES ? 'true' : 'false'
  }
}

// Hello message
if (process.env.NODE_ENV !== 'production' && process.env.WELCOME_MESSAGE !== 'false') {
  console.log()

  // Git repository
  if (existsSync('.git')) {
    console.log('\x1b[44m\x1b[37m%s\x1b[0m 🚀 ', ` Recommendation `);
    console.log('\x1b[34m%s\x1b[0m', ` For quick updates and problem solving`);
    console.log('\x1b[34m%s\x1b[0m', ` I recommend joining to the Github repository`);
    console.log('\x1b[34m%s\x1b[0m', ` To do this, contact me by specifying your Github login and license key.`);
    console.log()
  }

  // Contacts
  console.log('\x1b[45m\x1b[37m%s\x1b[0m 🐁', ` Contacts        `);
  console.log('\x1b[35m%s\x1b[0m', ` ${require('./package.json').author} `);
  console.log('\x1b[35m%s\x1b[0m', ` Please contact us for questions related to the code through the Issues system:`);
  console.log('\x1b[35m%s\x1b[0m', ` 👉 ${require('./package.json').bugs}`);
  console.log()

  // Feedback
  console.log('\x1b[41m\x1b[37m%s\x1b[0m 🦄', ` Feedback        `);
  console.log('\x1b[31m%s\x1b[0m', ` I will be grateful to you for feedback on Envato (CodeCanyon) 🐈`);
  console.log('\x1b[31m%s\x1b[0m', ` This will greatly help in the development of the product.`);
  console.log('\x1b[31m%s\x1b[0m', ` 👉 https://themeforest.net/downloads?downloads_term=nft#item-35185748 ⭐️⭐️⭐️⭐️⭐️`);
  console.log();

  // How to remove
  console.log('\x1b[3m%s\x1b[0m', 'You can disable this message using an environment variable by running the command:');
  console.log('\x1b[3m%s\x1b[0m', 'echo "WELCOME_MESSAGE=false" >> .env');
  console.log();
}
