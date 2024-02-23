import { useState } from "react";

const Dropdown = () => {
  const [drop, setDrop] = useState<boolean>(false);
  const [selectOption, setSelectOption] = useState<string | null>("");

  const optionClicked = (value: string | null) => {
    setSelectOption(value);
    setDrop(false);
  };
  return (
    <div className="text-xs sm:text-sm font-nunito">
      <div className="relative w-40 bg-element-light dark:bg-element-dark text-primary-light dark:text-primary-dark shadow-sm shadow-primary-light rounded-lg py-4 px-5">
        <button
          onClick={() => setDrop(!drop)}
          className="inline-flex w-full justify-between"
        >
          <span className="">{selectOption || "Find by Region"}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 ml-2 -mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
      {drop && (
        <div className="absolute flex flex-col mt-1 w-40 shadow-lg text-primary-light dark:text-primary-dark bg-element-light dark:bg-element-dark rounded-lg py-4 px-5">
          <button
            onClick={() => optionClicked("All")}
            className="flex justify-start py-0.5 "
          >
            All
          </button>
          <button
            onClick={() => optionClicked("Africa")}
            className="flex justify-start py-0.5 "
          >
            Africa
          </button>
          <button
            onClick={() => optionClicked("America")}
            className="flex justify-start py-0.5 "
          >
            America
          </button>
          <button
            onClick={() => optionClicked("Asia")}
            className="flex justify-start py-0.5 "
          >
            Asia
          </button>
          <button
            onClick={() => optionClicked("Europe")}
            className="flex justify-start py-0.5 "
          >
            Europe
          </button>
          <button
            onClick={() => optionClicked("Oceania")}
            className="flex justify-start py-0.5 "
          >
            Oceania
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
