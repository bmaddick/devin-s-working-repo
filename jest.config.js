const config = {
    coverageDirectory: 'coverage',
    cacheDirectory: '.jest-cache',
    collectCoverage: true,
    collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx,ts,tsx}'],
    coveragePathIgnorePatterns: ['src/i18n', 'src/types'],
    coverageReporters: ['html', 'text', 'cobertura', 'lcov'],
    maxWorkers: 2,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    reporters: ['default', ['jest-junit', { outputDirectory: './coverage' }]],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    transformIgnorePatterns: ['node_modules/(?!@indeed/ipl-|@indeed/frontend-|@indeed/one-host-)'],
    testEnvironment: 'jsdom'
};

module.exports = config;
