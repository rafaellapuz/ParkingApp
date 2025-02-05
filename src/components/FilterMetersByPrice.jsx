import { useContext, useState } from "react";
import { FilterContext } from "../helpers/context";

const FilterMetersByPrice = () => {
	const { filter, setFilter } = useContext(FilterContext);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handlePriceChange = (val) => {
		let price = "";
		for (let i = 0; i < val; i++) {
			price += "$";
		}

		setFilter({
			...filter,
			maxPrice: price,
		});

		setDropdownOpen(false);
	};

	return (
		<>
			<div className="relative w-32">
				<input
					className="peer hidden"
					type="checkbox"
					name="select-1"
					id="select-1"
					checked={dropdownOpen}
					onChange={() => setDropdownOpen(!dropdownOpen)}
				/>
				<label
					htmlFor="select-1"
					className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-400 peer-checked:ring"
				>
					{filter.maxPrice === "$$$$$$$" ? (
						<span className="flex-1 text-gray-400">Max Price</span>
					) : (
						<span className="flex-1">{filter.maxPrice}</span>
					)}
				</label>
			
				<ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-xl transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3 bg-white">
					<li
						className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
						onClick={() => handlePriceChange(1)}
					>
						$
					</li>
					<li
						className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
						onClick={() => handlePriceChange(2)}
					>
						$$
					</li>
					<li
						className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
						onClick={() => handlePriceChange(3)}
					>
						$$$
					</li>
					<li
						className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
						onClick={() => handlePriceChange(4)}
					>
						$$$$
					</li>
					<li
						className="cursor-pointer px-3 py-2 text-sm text-gray-500 hover:bg-blue-500 hover:text-white"
						onClick={() => handlePriceChange(6)}
					>
						$$$$$+
					</li>
				</ul>
			</div>
		</>
	);
};

export default FilterMetersByPrice;
