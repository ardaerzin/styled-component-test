import styled from 'styled-components';

const Foo = styled.div`
    ${({theme}) => `
        background-color: salmon;
        padding: ${theme.layout.spacing(4)}rem;
        margin: ${theme.layout.spacing(2)}rem;

        @media (max-width: ${theme.layout.breakpoints.l.max}px) {
            margin: ${theme.layout.spacing(4)}rem;
        }
    `} 
`

export default Foo
