import {
    BranchOverrideUtils,
    CommonUtils,
    setA11yCookie,
    UrlConstants
} from '@indeed/smb-testcafe-common-page-objects';
import { SCOPE } from '../runner';
import { Selector } from 'testcafe';
import { navigateToWithCIJobId } from '@indeed/testcafe-common-logger-util';

const MODULE = 'HelloWorld';

fixture(`Load HelloWorld module in playground`).beforeEach(async (t) => {
    // example of passing in props
    const props = { TEST: 'TEST' };
    const encodedProps: string = encodeURI(JSON.stringify(props));
    const url = `${UrlConstants.QA_URLS.EMPLOYERS}/playground?scope=${SCOPE}&module=.%2F${MODULE}&props=${encodedProps}`;
    await navigateToWithCIJobId(t)(url);

    // Set accessibility and branch build cookies
    await setA11yCookie();
    if (
        BranchOverrideUtils.branchOverrideIsSet() &&
        BranchOverrideUtils.getOverrideBranchName() !== 'primary'
    ) {
        await BranchOverrideUtils.setBranchOverrideCookie();
        await CommonUtils.pageReload(); // reload to hydrate the branch override
    }
});

test.meta({ priority: 'p1' })(
    'Verify HelloWorld module exists and clicking button changes flavor',
    async (t) => {
        const rootSelector = 'main';
        const header = Selector(`${rootSelector} h2`);
        const flavorText = Selector(`${rootSelector} div`);
        const flavorChangeButton = Selector(`${rootSelector} button`);

        const headingEl = await header();
        await t.expect(headingEl.innerText).contains('Hello World!');

        let flavorTextEl = await flavorText();
        await t.expect(flavorTextEl.innerText).contains('My favorite ice cream flavor is 🍫');
        await t.click(flavorChangeButton);

        flavorTextEl = await flavorText();
        await t.expect(flavorTextEl.innerText).contains('My favorite ice cream flavor is 🍓');
        await t.click(flavorChangeButton);

        flavorTextEl = await flavorText();
        await t.expect(flavorTextEl.innerText).contains('My favorite ice cream flavor is vanilla');
    }
);
