import styled from 'styled-components'

export default styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.palette.background};
    color: ${(props) => props.theme.palette.primary};
`
