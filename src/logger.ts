import * as bunyan from 'bunyan';
import { LoggingBunyan } from '@google-cloud/logging-bunyan';
const loggingBunyan = new LoggingBunyan({
  logName: 'advent-of-code-2022-nodejs',
});

let streams = [];
if (process.env.NODE_ENV === 'production') {
  streams = [loggingBunyan.stream('debug')];
} else {
  streams = [{ stream: process.stdout, level: 'trace' }];
}

export const TRACE_FIELD_NAME = 'logging.googleapis.com/trace';

export const logger = bunyan.createLogger({
  name: 'account-link-service',
  streams,
});
