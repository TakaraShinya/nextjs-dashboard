import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dashboard.nextjs',
  appName: 'nextjs-dashboard-app',
  // webDir: 'out',
  server: {
    // url: "http://localhost:3000",
    url: "http://192.168.11.2:3000",
    cleartext: true,
    // androidScheme: 'https'
  }
};

export default config;
