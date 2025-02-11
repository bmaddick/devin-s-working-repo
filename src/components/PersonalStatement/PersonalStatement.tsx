import { PageTitle } from '@indeed/one-host-page-title-management';
import React from 'react';
import { Text } from '@indeed/ifl-components';
import useGetText from '../../hooks/useGetText';

const PersonalStatement: React.FC = () => {
    const gt = useGetText();
    return (
        <PageTitle title={gt.gettext('Awesome')}>
            <Text as="p">{gt.gettext('This is awesome!')}</Text>
        </PageTitle>
    );
};

export default PersonalStatement;
