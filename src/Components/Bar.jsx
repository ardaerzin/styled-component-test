import styled from 'styled-components';

const getCustomStyles = (theme) => {
    return `
        padding: ${theme.layout.spacing(3)}rem;
        margin: ${theme.layout.spacing(4)}rem;
        @media (max-width: ${theme.layout.breakpoints.l.max}px) {
            margin: ${theme.layout.spacing(4)}rem;
        }
    `
}

const Bar = styled.div`
    ${({ theme }) => `
        background-color: ${theme.colors.primary.main};
        ${getCustomStyles(theme)}
    `}    
`

export default Bar
