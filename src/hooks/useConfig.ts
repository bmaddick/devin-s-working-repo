import { useOneHostAppContext } from '@indeed/one-host-app-context';

interface ScopeConfig {
    favoriteIcecreamFlavor: 'chocolate' | 'vanilla' | 'strawberry';
}

const localConfig: ScopeConfig = {
    favoriteIcecreamFlavor: 'vanilla'
};

const qaConfig: ScopeConfig = {
    favoriteIcecreamFlavor: 'chocolate'
};

const prodConfig: ScopeConfig = {
    favoriteIcecreamFlavor: 'strawberry'
};

const useConfig = (): ScopeConfig => {
    const {
        env: { stagingLevel }
    } = useOneHostAppContext();

    switch (stagingLevel) {
        case 'local':
            return localConfig;
        case 'qa':
            return qaConfig;
        default:
            return prodConfig;
    }
};

export default useConfig;
