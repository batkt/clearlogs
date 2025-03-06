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

    pm2.stop('appweb', function (err) {
      if (err) {
        console.error('Failed to stop PM2 logs:', err);
      } else {
        console.log('PM2 stop successfully.');
      }
    });

    pm2.delete('appweb', function (err) {
      if (err) {
        console.error('Failed to delete PM2 logs:', err);
      } else {
        console.log('PM2 delete successfully.');
      }
    });
    
    // pm2.flush((err) => {
    //   if (err) {
    //     console.error('Failed to flush PM2 logs:', err);
    //   } else {
    //     console.log('PM2 logs flushed successfully.');
    //   }
    // });

    // Starting the app with the ecosystem file
    pm2.start('/root/tureesShine/ecosystem.config.js', function (err, apps) {
      if (err) {
        console.error('Error while starting the apps:', err);
        return pm2.disconnect(); // Disconnect PM2 if there's an error
      }
      console.log('PM2 apps have been started');
      pm2.disconnect(); // Disconnect PM2 once done
    });

    pm2.reload('appweb', function (err) {
      if (err) {
        console.error('Failed to appweb PM2 logs:', err);
      } else {
        console.log('PM2 appweb successfully.');
      }
    });

  }, 60000); // 10 minutes
});
