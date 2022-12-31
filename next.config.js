const withTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
]) // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['rb.gy', 'image.tmdb.org'],
  },
  
  env: {
    customKey: 'NEXT_PUBLIC_FIREBASE_API_KEY',
    customKey: 'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN',
    customKey: 'NEXT_PUBLIC_FIREBASE_PROJECT_ID',
    customKey: 'NEXT_PUBLIC_FIREBASE_STORAGE',
    customKey: 'NEXT_PUBLIC_FIREBASE_MID',
    customKey: 'NEXT_PUBLIC_FIREBASE_APP_ID',
    customKey: 'NEXT_PUBLIC_FIREBASE_MEASURE_ID',
  },
})
