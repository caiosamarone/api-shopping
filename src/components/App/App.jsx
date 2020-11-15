import React, { useEffect, useState } from "react";
import AppHeader from "../AppHeader/";
import { Wrapper, Container } from "./App.styles";
import AppContainer from "../AppContainer";
import LineChart from "../../shared/LineChart/LineChart";
import ShoppingList from "../ShoppingList";
import extractPercentage from "../../utils/extractPercentage";
import Calculator from "../Calculator";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllProducts,
  selectSelectedProducts,
  selectTotal,
} from "../../store/selectors/selectorProducts";
import { toggleProduct } from "../../store/actions/products";

function App() {
  const dispatch = useDispatch();
  const colors = ["#62CBC6", "#00ABAD", "#00858C", "#006073", "#004D61"];
  const products = useSelector(selectAllProducts);
  const selectedProducts = useSelector(selectSelectedProducts);
  const totalPrice = useSelector(selectTotal);

  function handleToggle(id) {
    dispatch(toggleProduct(id));
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
