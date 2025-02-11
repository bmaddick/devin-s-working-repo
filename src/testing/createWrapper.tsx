import React from 'react';
import { IndeedThemeProvider } from '@indeed/ifl-components';
import { OneHostAppContextProvider, OneHostAppContext } from '@indeed/one-host-app-context';
import { MockOneHostAppContext } from '@indeed/one-host-app-context/mocks';
import { aurora } from '@indeed/ifl-themes';

type OneHostAppContextModel = React.ContextType<typeof OneHostAppContext>;

/**
 * Builds a wrapper component for testing Remote Modules in a simulated
 * Onehost environment.
 *
 * Augment with additional context as needed for your Remote Module Scope.
 *
 * @see https://testing-library.com/docs/react-testing-library/api#wrapper
 */
const createWrapper = (env?: Partial<OneHostAppContextModel['env']>): React.FC => {
    const Wrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
        <OneHostAppContextProvider
            {...MockOneHostAppContext}
            env={{
                ...MockOneHostAppContext.env,
                ...env
            }}
        >
            <IndeedThemeProvider theme={aurora}>{children}</IndeedThemeProvider>
        </OneHostAppContextProvider>
    );

    return Wrapper;
};

export default createWrapper;
