import { run } from '@indeed/smb-testcafe-common-page-objects';
import createTestCafe from 'testcafe';

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const SCOPE: string = require('../package.json').onehost.scope;

(async () => {
    try {
        const tc = await createTestCafe('localhost');
        const runner = tc.createRunner();
        const failedCount = await run(runner);
        process.exit(Math.sign(failedCount));
    } catch (e) {
        console.error(e);
        process.exit(2);
    }
})();
