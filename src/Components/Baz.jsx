import styled from 'styled-components';

const getBreakingStyles = () => {
    return `
        ${({theme}) => `
            padding: ${theme.layout.spacing(4)}rem;
            margin: ${theme.layout.spacing(4)}rem;
            @media (max-width: ${theme.layout.breakpoints.l.max}px) {
                margin: ${theme.layout.spacing(4)}rem;
            }
        `}
    `
}

const Baz = styled.div`
    ${({ theme }) => `
        background-color: ${theme.colors.secondary.main};
        ${getBreakingStyles()}
    `}    
`

export default Baz
