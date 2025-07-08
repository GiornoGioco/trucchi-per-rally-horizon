// novaLogger.js
// A lightweight logger with adjustable log levels and timestamped output.

class NovaLogger {
  constructor(level = 'info') {
    this.levels = { error: 0, warn: 1, info: 2, debug: 3 };
    this.currentLevel = this.levels[level] !== undefined ? this.levels[level] : this.levels.info;
  }

  _timestamp() {
    return new Date().toISOString();
  }

  _shouldLog(level) {
    return this.levels[level] <= this.currentLevel;
  }

  error(...args) {
    if (this._shouldLog('error')) {
      console.error(`[ERROR] [${this._timestamp()}]:`, ...args);
    }
  }

  warn(...args) {
    if (this._shouldLog('warn')) {
      console.warn(`[WARN] [${this._timestamp()}]:`, ...args);
    }
  }

  info(...args) {
    if (this._shouldLog('info')) {
      console.info(`[INFO] [${this._timestamp()}]:`, ...args);
    }
  }

  debug(...args) {
    if (this._shouldLog('debug')) {
      console.debug(`[DEBUG] [${this._timestamp()}]:`, ...args);
    }
  }

  setLevel(level) {
    if (this.levels[level] !== undefined) {
      this.currentLevel = this.levels[level];
    } else {
      throw new Error(`Invalid log level: ${level}`);
    }
  }
}

// Usage example:
// const logger = new NovaLogger('debug');
// logger.info('App started');
// logger.debug('Debugging info');
// logger.warn('Warning message');
// logger.error('Error message');

export default NovaLogger;
