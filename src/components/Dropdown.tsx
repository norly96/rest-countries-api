import {  useState } from "react";
import FilterButton from "./FilterButton";

const Dropdown = ():JSX.Element => {
    const [drop, setDrop] = useState<boolean>(false);
    const [selectOption, setSelectOption] = useState<string | null>("");

    const optionClicked = (value: string | null) => {
    setSelectOption(value);
    console.log(value);
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
                fillRule="evenodd"
                d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
            </svg>
        </button>
        </div>
        {drop && (
        <div className="absolute flex flex-col mt-1 w-40 shadow-sm shadow-primary-light text-primary-light dark:text-primary-dark bg-element-light dark:bg-element-dark rounded-lg py-4 px-5">
            <FilterButton click={() => optionClicked('Africa')} region="Africa" />
            <FilterButton click={() => optionClicked('America')} region="America" />
            <FilterButton click={() => optionClicked('Asia')} region="Asia" />
            <FilterButton click={() => optionClicked('Europe')} region="Europe" />
            <FilterButton click={() => optionClicked('Oceania')} region="Oceania" />
        </div>
        )}
    </div>
);
};

export default Dropdown;
