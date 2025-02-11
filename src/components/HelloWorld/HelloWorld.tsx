import React, { useState } from 'react';
import { Box, Heading, Button } from '@indeed/ifl-components';
import PersonalStatement from '../PersonalStatement';
import useGetText from '../../hooks/useGetText';
import useConfig from '../../hooks/useConfig';
import { PageTitle } from '@indeed/one-host-page-title-management';
import { useScopeContext } from '@indeed/one-host-remote-module';
import { useActionLogging } from '@indeed/one-host-analytics';

const flavorEmojiMap: Record<string, string> = {
    strawberry: '🍓',
    chocolate: '🍫'
};

const HelloWorld: React.FC = () => {
    const gt = useGetText();
    const { favoriteIcecreamFlavor } = useConfig();
    const [flavor, setFlavor] = useState(favoriteIcecreamFlavor);
    const { scope } = useScopeContext();
    const { logClick } = useActionLogging();

    return (
        <main>
            <PageTitle title={(title) => `${title} | ${gt.gettext('Hello World')}`}>
                <Box sx={{ m: 4 }}>
                    <Heading level={7}>{gt.gettext('Hello World!')}</Heading>
                    <Box>
                        {gt.gettext(
                            'My favorite ice cream flavor is {0}',
                            flavorEmojiMap[flavor] ?? flavor
                        )}
                    </Box>
                    <Button
                        type="button"
                        onClick={() => {
                            logClick(scope + '-flavor-change-button');
                            switch (flavor) {
                                case 'chocolate':
                                    setFlavor('strawberry');
                                    break;
                                case 'strawberry':
                                    setFlavor('vanilla');
                                    break;
                                case 'vanilla':
                                    setFlavor('chocolate');
                                    break;
                                default:
                                    setFlavor('chocolate');
                            }
                        }}
                    >
                        {gt.gettext('Change Flavor')}
                    </Button>
                    <PersonalStatement />
                </Box>
            </PageTitle>
        </main>
    );
};

export default HelloWorld;
