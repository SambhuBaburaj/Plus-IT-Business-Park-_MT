import React, { useEffect, useState } from "react";
import { getItemsApi } from "../API/ApiCall";

export default function Items() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getItems = () => {
    getItemsApi().then(({ data }) => {
      setIsLoading(false);
      console.log(data);
      setItems(data);
    });
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {isLoading ? (
          <div className="text-xl text-white">Loading</div>
        ) : (
          items?.map((value, key) => {
            return (
              <div
                key={key}
                class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="w-full h-64">
                  <img
                    class="w-full h-full object-contain rounded-t-lg"
                    src={value?.image}
                    alt="product image"
                  />
                </div>

                <div class="px-5 pb-5">
                  <a href="#">
                    <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {value?.title}
                    </h5>
                  </a>
                  <div class="flex items-center mt-2.5 mb-5">
                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                      {value?.rating?.rate}
                    </span>
                  </div>
                  <div class="flex items-center justify-between">
                    <span class="text-3xl font-bold text-gray-900 dark:text-white">
                      $ {value.price}
                    </span>
                    {/* <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a> */}
                  </div>
                  {/* <p>{value.description}</p> */}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
