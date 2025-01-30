import "./App.css";
import { useState } from "react";
import { ShopItem } from "./models/ShopItem.ts";

function App() {
  const [items, setItems] = useState<ShopItem[]>([] as ShopItem[]);
  const [newItem, setNewItem] = useState<ShopItem>({
    id: 0,
    name: "",
    price: 0,
    quantity: 1,
  } as ShopItem);
  const [isAddItemClicked, setIsAddItemClicked] = useState<boolean>(false);

  const handleAddItem = (item: ShopItem) => {
    setItems([...items, item]);
  };

  return (
    <>
      <h1 className="my-8">Shop list</h1>
      <div className="flex items-center">
        <section className="w-[50%] min-h-[5rem] p-8 bg-amber-100">
          {items.map((item) => (
            <div>{item.name}</div>
          ))}
        </section>

        <div>
          {isAddItemClicked ? (
            <div className="flex items-center">
              <input
                type="text"
                placeholder={"Item name"}
                className="w-[12rem] mx-2 p-2 bg-gray-200 rounded"
                value={newItem.name}
                onChange={({ target: { value } }) =>
                  setNewItem({ ...newItem, name: value })
                }
              />
              <input
                type="text"
                placeholder={"Price"}
                className="w-[10rem] mr-2 p-2 bg-gray-200 rounded"
                value={newItem.price}
                onChange={({ target: { value } }) =>
                  setNewItem({ ...newItem, price: value as number })
                }
              />
              <input
                type="number"
                placeholder={"Quantity"}
                className="w-[5rem] p-2 bg-gray-200 rounded"
                value={newItem.quantity}
                onChange={({ target: { value } }) =>
                  setNewItem({ ...newItem, quantity: value as number })
                }
              />
              <button
                className="rounded p-2 mx-4 text-sm text-gray-800 bg-blue-100 hover:cursor-pointer hover:text-white"
                onClick={() => handleAddItem(newItem)}
              >
                Add item
              </button>
            </div>
          ) : (
            <button
              className="rounded p-2 mx-4 text-sm text-gray-800 bg-blue-100 hover:cursor-pointer hover:text-white"
              onClick={() => setIsAddItemClicked(true)}
            >
              Add item
            </button>
          )}
        </div>
      </div>

      <section className="w-full">
        <h2>Total: $ </h2>
      </section>
    </>
  );
}

export default App;
