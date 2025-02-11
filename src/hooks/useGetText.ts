import { useOneHostGetText, LocaleDataResolver, GetTextInterface } from '@indeed/one-host-i18n';

const resolver: LocaleDataResolver = (locale) => import(`../i18n/${locale}.po`);

const useGetText = (): GetTextInterface => {
    /**
     * For CrashText implementation, please refer to the following link:
     * https://wiki.indeed.com/pages/viewpage.action?spaceKey=SMBPlatform&title=One+Host+GetText+with+CrashText+Adoption+Guide
     *
     * A quick summary is; the following method should be replaced useOneHostGetTextWithCrashText exported from @indeed/one-host-i18n
     * and supplied with a team-specific `requiredMetaTag`, prepended with "msg_override_" so that it may be parsed by One Host.
     */

    return useOneHostGetText(resolver);
};

export default useGetText;
