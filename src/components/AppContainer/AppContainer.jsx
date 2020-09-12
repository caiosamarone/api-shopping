import React from 'react'
import { Wrapper } from './AppContainer.styles'

function AppContainer( { left, middle, right}){ //destructuring para pegar propriedades especificas
    return <Wrapper>
        <div>{ left }</div>
        <div>{ middle } </div>
        <div>{ right }</div>
    </Wrapper>
}

export default AppContainer