import React, { useEffect, useState } from "react";
import AppHeader from "../AppHeader/";
import { Wrapper, Container } from "./App.styles";
import AppContainer from "../AppContainer";
import LineChart from "../../shared/LineChart/LineChart";
import ShoppingList from "../ShoppingList";
import productsMock from "../mocks/products.json";
import extractPercentage from "../../utils/extractPercentage";
import Calculator from "../Calculator";

function App() {
  const colors = ["#62CBC6", "#00ABAD", "#00858C", "#006073", "#004D61"];
  const [products, setProducts] = useState(
    productsMock.products
  ); /**setando os produtos que estao no arquivo JSON     */
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState([0]);

  useEffect(() => {
    //toda vez que um evento é criado, chama essa funcao de callback
    const newSelectedProducts = products.filter((product) => product.checked);
    setSelectedProducts(newSelectedProducts);
  }, [products]);

  useEffect(() => {
    const total = selectedProducts
      .map((product) => product.price)
      .reduce((a, b) => a + b, 0);

    setTotalPrice(total);
  }, [selectedProducts]);

  function handleToggle(id, checked, name) {
    const newProducts = products.map((product) => {
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
        : product;
    });
    setProducts(newProducts);
  }

  return (
    <Wrapper>
      <Container>
        <AppHeader />
        <AppContainer
          left={
            <ShoppingList
              title="produtos disponíveis"
              products={products}
              onToggle={handleToggle}
            />
          }
          middle={
            <ShoppingList
              title="sua lista de compras"
              products={selectedProducts}
              onToggle={handleToggle}
            />
          }
          right={
            <div>
              estatisticas
              <LineChart
                color={colors[0]}
                title=" Saudavel"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("healthy")
                  ).length
                )}
              />
              <LineChart
                color={colors[1]}
                title=" Nao tao saudavel"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("junk")
                  ).length
                )}
              />
              <LineChart
                color={colors[2]}
                title=" Limpeza"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("cleaning")
                  ).length
                )}
              />
              <LineChart
                color={colors[3]}
                title=" Outros"
                percentage={extractPercentage(
                  selectedProducts.length,
                  selectedProducts.filter((product) =>
                    product.tags.includes("others")
                  ).length
                )}
              />
              <div style={{ marginTop: 12 }}>
                <h2 style={{ fontWeight: 400, fontSize: 12, color: "#00364A" }}>
                  previsão de gastos:
                </h2>
                <div style={{ fontSize: 24 }}>
                  {totalPrice.toLocaleString("pt-br", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </div>
                <Calculator />
              </div>
            </div>
          }
        />
      </Container>
    </Wrapper>
  );
}

export default App;
