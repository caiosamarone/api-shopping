import styled from 'styled-components'
import bg from '../../assets/bg.svg'
export const Wrapper = styled.div`
    height:100vh; /* altura vertical da pagina, neste caso, 100% */
    background-color: #F8F5EC;
    background-image: url(${bg});
    background-size: cover; /* cobre 100% da tela */    
    background-position: center center;

    display: flex;
    justify-content: center;  /*centraliza horizontalmente */
    align-items: center; /*centraliza verticalmente*/
`

export const Container = styled.div`
    width: 734px;
    height: 574px;
    background-color: #FFFFFF;
    
    
    box-shadow: 0 3px 10px rgba(0,0,0,.15); /*sombra que fica em volta do container -> preto com 15% de opacidade */
    border-radius: 20px; /*deixa a borda meio arredondada */
`