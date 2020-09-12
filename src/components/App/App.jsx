import React, { useState } from 'react'
import  AppHeader  from '../AppHeader/'
import { Wrapper, Container } from './App.styles'
import AppContainer from '../AppContainer'
import Checkbox from '../../shared/Checkbox/Checkbox'


function App (){
    const[lettuce,setLettuce] = useState() /**faz um get e um set para mudar o estado de uma propriedade */


    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer  
              left={<div>
                    produtos disponiveis:

                    <Checkbox
                        value={lettuce}
                        title="Alface"
                        onClick={() => setLettuce(!lettuce)}
                    />
                    <Checkbox
                        value={false}
                        title="Mandioca"
                    />
                    
              </div>}
              middle={<div>
                  sua lista de compras
              </div>}
              right={<div>
                    estatisticas
              </div>}
            />
        </Container>
    </Wrapper>
}


export default App