import React from 'react';
import { render, screen } from '@testing-library/react';
import HelloWorld from '../HelloWorld';
import createWrapper from '../../../testing/createWrapper';

describe('<HelloWorld />', () => {
    it('is very welcoming', () => {
        render(<HelloWorld />, { wrapper: createWrapper() });
        expect(screen.getByRole('heading', { name: 'Hello World!' })).toBeInTheDocument();
    });

    it('prefers chocolate ice cream in the QA environment', () => {
        const wrapper = createWrapper({
            stagingLevel: 'qa'
        });

        render(<HelloWorld />, { wrapper });
        expect(screen.getByText(/🍫/)).toBeInTheDocument();
    });

    it('prefers strawberry ice cream in the PROD environment', () => {
        const wrapper = createWrapper({
            stagingLevel: 'prod'
        });

        render(<HelloWorld />, { wrapper });
        expect(screen.getByText(/🍓/)).toBeInTheDocument();
    });

    it('prints the plaintext name for a flavor when the emoji is not mapped', () => {
        const wrapper = createWrapper({
            stagingLevel: 'local'
        });

        render(<HelloWorld />, { wrapper });
        expect(screen.getByText(/vanilla/)).toBeInTheDocument();
    });
});
