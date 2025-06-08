import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fastwise.app',
  appName: 'FastWise AI',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  ios: {
    contentInset: 'never',
    scrollEnabled: true,
    backgroundColor: '#111827'
  },
  plugins: {
    StatusBar: {
      style: 'dark',
      backgroundColor: '#111827'
    },
    Keyboard: {
      resize: 'body',
      style: 'dark',
      resizeOnFullScreen: true
    },
    App: {
      launchShowDuration: 0
    }
  }
};

export default config;