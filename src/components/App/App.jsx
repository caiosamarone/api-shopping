import React, { useEffect, useState } from 'react'
import  AppHeader  from '../AppHeader/'
import { Wrapper, Container } from './App.styles'
import AppContainer from '../AppContainer'
import Checkbox from '../../shared/Checkbox/Checkbox'
import LineChart from '../../shared/LineChart/LineChart'


function App (){
    const[lettuce,setLettuce] = useState() /**faz um get e um set para mudar o estado de uma propriedade */
    
    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']

 
   


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

                  <Checkbox
                        value={false}
                        title="Mandioca"
                 />
              </div>}
              right={<div>
                    estatisticas

                    <LineChart  color={colors[0]}  title=" Saudavel" percentage = {30}    />
                    <LineChart  color={colors[1]}  title=" Nao tao saudavel" percentage = {40}    />
                    <LineChart  color={colors[2]}  title=" Limpeza" percentage = {70}    />
                    <LineChart  color={colors[3]}  title=" Outros" percentage = {10}    />
                    
              </div>}
            />
        </Container>
    </Wrapper>
}


export default App