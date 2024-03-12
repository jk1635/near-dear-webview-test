import { ReactNode } from 'react';

import styled from '@emotion/styled';

interface BasicContainerProps {
    children: ReactNode;
}

const BasicContainer = ({ children }: BasicContainerProps) => {
    return <Container>{children}</Container>;
};

const Container = styled.div`
    padding-top: 4.5rem;
    padding-bottom: 6rem;
`;

export default BasicContainer;
