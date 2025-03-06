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
  
}, 60000); // 10 minutes

