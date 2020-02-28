module.exports = {
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/setupJest.ts', '<rootDir>/node_modules/moment/moment.js'],
    globals: {
        'ts-jest': {
            diagnostics: false
        }
    }
  }
  