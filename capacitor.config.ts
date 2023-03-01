
import { CapacitorConfig } from '@capacitor/cli';

const appId = 'pageload2.ionic.io';
const appName = 'pageload2';
const server = process.argv.includes('-hmr') ? {
  'url': 'http://192.168.137.1:5173',   // always have http:// in url
  'cleartext': true
} : {};
const webDir = 'build';

const config: CapacitorConfig = {
  appId,
  appName,
  webDir,
  server
};

if (process.argv.includes('-hmr')) console.log('WARNING: running capacitor with livereload config', config);

export default config;
  