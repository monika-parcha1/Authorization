import React, { useState } from "react";
import { ProductsData } from "../../productData";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

function AdminPage(props) {
  const [productData, setProductData] = useState(ProductsData);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const grid = 10

  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
  
    // background: isDragging ? "lightgreen" : "grey",
  
    // styles we need to apply on draggables
    ...draggableStyle
  });

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      ProductsData,
      result.source.index,
      result.destination.index
    );

    setProductData(items);
  };
  return (
    <div>
      <p className="contentCenter">
        ************ Welcome Admin **************
      </p>
      <p className="contentCenter"> Products </p>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided) => {
            return (
                <ul 
                {...provided.droppableProps} ref={provided.innerRef}
                >
                  {productData.map((product, index) => {
                    return (
                      <Draggable
                        key={`product_${index}`}
                        draggableId={`product_${product.id}`}
                        index={index}
                      >
                        {(provided,snapshot) => {
                          return (
                              <li className="product"
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              style={getItemStyle(
                                snapshot.isDragging,
                                provided.draggableProps.style
                              )}
                              >
                                <div>
                                  <img
                                    style={{ width: "100px", height: "100px" }}
                                    src={product.p_img}
                                    alt="product"
                                  />
                                </div>
                                <div> 
                                  <p> Name : {product.p_name} </p>
                                  <p> Price : {product.p_price} </p>
                                </div>
                              </li>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
            );
          }}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default AdminPage;
