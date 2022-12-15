import { startServer } from './start-server';

let app;

startServer()
  .then((runningApp) => {
    app = runningApp;
  })
  .catch((err) => {
    const printedError = typeof err === 'object' ? JSON.stringify(err) : err;
    console.error(
      new Error(`Could not start server. Error: ${err}\n${printedError}`),
    );
    process.exit(1);
  });

process.once('SIGTERM', () => {
  console.info('SIGTERM signal received. Closing server');
  if (app) {
    app.close(() => {
      console.info('Server closed.');
    });
  }
});
