import { ReactNode } from 'react';

import styled from '@emotion/styled';

const Layout = ({ children }: { children: ReactNode }) => {
    return <LayoutContainer>{children}</LayoutContainer>;
};

const LayoutContainer = styled.main`
    min-width: var(--min-width);
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 0 1.5rem;
`;

export default Layout;
