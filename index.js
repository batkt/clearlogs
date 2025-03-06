const pm2 = require('pm2');

// Connect to PM2 daemon
pm2.connect(function (err) {
  if (err) {
    console.error('Error while connecting to PM2:', err);
    process.exit(2);
  }

  // Clear logs every 10 minutes (600000 ms)
  setInterval(() => {
    console.log('Clearing PM2 logs...');
    
    pm2.flush((err) => {
      if (err) {
        console.error('Failed to flush PM2 logs:', err);
      } else {
        console.log('PM2 logs flushed successfully.');
      }
    });
  }, 60000); // 10 minutes
});
