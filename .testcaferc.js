const { logCIJobId, afterTest } = require('@indeed/testcafe-common-logger-util');

module.exports = {
    hooks: {
        testRun: {
            before: async () => {
                logCIJobId();
            }
        },
        test: {
            after: async t => {
                await afterTest(t)
            }
        }
    }
};
