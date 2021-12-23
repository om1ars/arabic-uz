import React, { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const Photo = () => {
  const finalSpaceCharacters = [
    {
      id: "gary",
      name: "Gary Goodspeed",
      thumb: "/images/gary.png",
    },
    {
      id: "cato",
      name: "Little Cato",
      thumb: "/images/cato.png",
    },
    {
      id: "kvn",
      name: "KVN",
      thumb: "/images/kvn.png",
    },
    {
      id: "mooncake",
      name: "Mooncake",
      thumb: "/images/mooncake.png",
    },
    {
      id: "quinn",
      name: "Quinn Ergon",
      thumb: "/images/quinn.png",
    },
  ];

  const [characters, updateCharacters] = useState(finalSpaceCharacters);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateCharacters(items);
  }
  return (
    <div>
      <header className="App-header">
        <h1>Final Space Characters</h1>

        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters">
            {(provided: any) => (
              <ul
                className="characters"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {characters.map(({ id, name, thumb }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided: any) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div className="characters-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p>{name}</p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  );
};

export default Photo;
