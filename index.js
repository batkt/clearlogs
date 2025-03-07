const { exec } = require('child_process');

// Clear logs every 10 minutes (600000 ms)
setInterval(() => {
  console.log('Clearing PM2 logs...');
  exec('rm -rf ~/.pm2/logs/*', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });
  
  exec('rm -rf ~/.pm2/pm2.log.*', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec log error: ${error}`);
      return;
    }
    if (stderr) {
      console.error(`log: ${stderr}`);
      return;
    }
    console.log(`log: ${stdout}`);
  });
  
}, 86400000); // 1000 * 60 * 60 * 24 = 1 day

