import { getLogger, configure } from 'log4js';
import { loggingOptions } from './Types';
import { Config } from './Config';

const logName = new Config().logName;

export function logger(logging: loggingOptions) {
  let out;
  switch (logging.source) {
    case undefined:
      out = getLogger();
      break;
    default:
      out = getLogger(logging.source);
      break;
  }
// TODO Clean up case to only change unalike properties
  switch (logging.type) {
    case 'debug':
      configure({
        appenders: {
          out: {
            type: 'stdout',
            layout: {
              type: 'basic',
            },
          },
          file: {
            type: 'dateFile',
            filename: `./logs/${logName}.log`,
            pattern: '.yyyy-MM-dd',
            maxLogSize: 10485760,
            alwaysIncludePattern: true,
            backups: 3,
            compress: true,
            keepFileExt: true,
          },
        },
        categories: {
          default: {
            appenders: ['out', 'file'],
            level: 'debug',
          },
        },
      });
      if (logging.json !== undefined) {
        logging.message = `${logging.message}\n${JSON.stringify(
          logging.json,
          null,
          ' '
        )}`;
      }
      return out.debug(logging.message);
    case 'error':
      configure({
        appenders: {
          file: {
            type: 'dateFile',
            filename: `./logs/${logName}.log`,
            pattern: '.yyyy-MM-dd',
            maxLogSize: 10485760,
            alwaysIncludePattern: true,
            backups: 3,
            compress: true,
            keepFileExt: true,
          },
          err: {
            type: 'stderr',
            layout: { type: 'basic' },
          },
        },
        categories: {
          default: {
            appenders: ['file', 'err'],
            level: 'error',
          },
        },
      });
      if (logging.json !== undefined) {
        logging.message = `${logging.message}\n${JSON.stringify(
          logging.json,
          null,
          ' '
        )}`;
      }
      return out.error(logging.message);
    case 'info':
      configure({
        appenders: {
          out: {
            type: 'stdout',
            layout: {
              type: 'basic',
            },
          },
          file: {
            type: 'dateFile',
            filename: `./logs/${logName}.log`,
            pattern: '.yyyy-MM-dd',
            maxLogSize: 10485760,
            alwaysIncludePattern: true,
            backups: 3,
            compress: true,
            keepFileExt: true,
          },
        },
        categories: {
          default: {
            appenders: ['out', 'file'],
            level: 'info',
          },
        },
      });
      if (logging.json !== undefined) {
        logging.message = `${logging.message}\n${JSON.stringify(
          logging.json,
          null,
          ' '
        )}`;
      }
      return out.info(logging.message);
    default:
      configure({
        appenders: {
          out: {
            type: 'stdout',
            layout: {
              type: 'basic',
            },
          },
          file: {
            type: 'dateFile',
            filename: `./logs/${logName}.log`,
            pattern: '.yyyy-MM-dd',
            maxLogSize: 10485760,
            alwaysIncludePattern: true,
            backups: 3,
            compress: true,
            keepFileExt: true,
          },
        },
        categories: {
          default: {
            appenders: ['out', 'file'],
            level: 'info',
          },
        },
      });
      if (logging.json !== undefined) {
        logging.message = `${logging.message}\n${JSON.stringify(
          logging.json,
          null,
          ' '
        )}`;
      }
      return out.info(logging.message);
  }
}
