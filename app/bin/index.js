#! /usr/bin/env node

import os from 'os';
import init from '../lib/init';
import exec from '../lib/exec';
import bundle from '../lib/bundle';
import upgrade from '../lib/upgrade';

const [, , cmd, app] = process.argv;

switch (cmd) {
case 'init':
  console.log();
  console.log('Creating Reactors app', app);
  console.log();

  init(app)
    .then(() => console.log('Your app is ready to be awesome'))
    .catch(error => console.log(error.stack));
  break;
case 'run': {
  const platform = app;
  switch (platform) {
  case 'android':
  case 'ios':
    exec(`react-native run-${platform}`);
    break;
  case 'web':
  case 'desktop':
    bundle(platform);
    setTimeout(() => {
      if (platform === 'web') {
        switch (os.platform()) {
        case 'darwin':
          exec('open index.html');
          break;
        case 'linux':
          exec('x-www-browser index.html');
          break;
        default:
          throw new Error('Platform not supported: ' + os.platform());
        }
      } else if (platform === 'desktop') {
        exec('electron index.electron.js');
      }
    }, 5000);
    break;
  default:
    throw new Error('Unknown platform: ' + platform);
  }
  break;
}
case 'upgrade':
  upgrade()
    .then(() => console.log('Your app has been upgraded'))
    .catch(error => console.log(error.stack));
  break;
default:
  console.log('Init a new app: `reactors init <AppName>`');
  console.log('Run app: `reactors run <platform>`');
}
