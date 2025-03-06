const { exec } = require('child_process');

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
  
}, 60000); // 10 minutes

