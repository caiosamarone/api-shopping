import React, { useEffect, useState } from 'react'
import AppHeader  from '../AppHeader/'
import { Wrapper, Container } from './App.styles'
import AppContainer from '../AppContainer'
import LineChart from '../../shared/LineChart/LineChart'
import ShoppingList from '../ShoppingList'
import productsMock from '../mocks/products.json'


function App (){

    const colors = ['#62CBC6', '#00ABAD', '#00858C', '#006073', '#004D61']
    const [products,setProducts] = useState(productsMock.products)  /**setando os produtos que estao no arquivo JSON     */ 
    const [selectedProducts, setSelectedProducts] = useState([])    

    useEffect(() => {  //toda vez que um evento é criado, chama essa funcao de callback
        const newSelectedProducts = products
        .filter(product => product.checked)
        setSelectedProducts(newSelectedProducts)
    },[products])
    

    function handleToggle(id, checked,name){
        const newProducts = products.map(product =>{
         /*   if (product.id == id){
                return {
                ...product, checked: !product.checked
                }
            }
            else {
                return product 
            }
            */
           // if ternário substitui o codigo acima
           return product.id === id 
                ? { ...product, checked: !product.checked }
                : product
        })
        setProducts(newProducts)
    }

    

    
    


    return <Wrapper>
        <Container>
            <AppHeader />
            <AppContainer  
              left={
              <ShoppingList 
                title="produtos disponíveis"
                products={products}
                onToggle={handleToggle}
              />}
              middle={
              <ShoppingList
                 title="sua lista de compras"
                 products={selectedProducts}    
                 onToggle={handleToggle}
              />}   
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