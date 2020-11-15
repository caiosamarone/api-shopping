import React from "react";
import { useSelector } from "react-redux";
import Checkbox from "../../shared/Checkbox/Checkbox";
import {
  selectAllProducts,
  selectSelectedProducts,
} from "../../store/selectors/selectorProducts";
import { Wrapper, Title, Array } from "./ShoppingList.styles";

function ShoppingList({ title, onToggle, displayOnlySelected }) {
  const products = useSelector(
    displayOnlySelected ? selectSelectedProducts : selectAllProducts
  );

  return (
    <Wrapper>
      <Title>{title}:</Title>
      <Array>
        {
          /**as chaves denotam que o conteúdo é dinâmico */
          products.map((product) => (
            <Checkbox
              key={product.id}
              value={product.checked}
              title={product.name}
              onClick={() =>
                onToggle(product.id, product.checked, product.name)
              }
            />
          )) /**iterando por todos produtos, e pra cada um criando um CB */
        }
      </Array>
    </Wrapper>
  );
}

export default ShoppingList;
