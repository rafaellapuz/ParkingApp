import { useState, useContext } from "react";
import { ViewContext, SearchContext } from "../helpers/context";
import axios from "axios";
import { apiKey } from "./ApiKey";

const SearchInput = () => {
	const { viewState } = useContext(ViewContext);
	const { setSearchResults } = useContext(SearchContext);

	// used for get request
	const [search, setSearch] = useState("");

	// setSearch is called when the user types in the search bar
	const handleSearch = (e) => {
		setSearch(e.target.value);
	};
	
	// make axios request when button is clicked
	const handleSearchSubmit = async () => {
		let request = {
			method: "get",
			url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${apiKey}&proximity=${viewState.longitude},${viewState.latitude}`,
			headers: {},
		};

		axios(request)
			.then(function (response) {
				setSearchResults(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			handleSearchSubmit();
		}
	};

	return (
		<>
			<input
				
				type="search"
				placeholder="Search a Street location"
				value={search}
				onChange={handleSearch}
				name="search"
				className="h-12 w-full rounded-md border border-gray-100 bg-gray-100 py-4 pr-4 pl-12 shadow-sm outline-none focus:border-blue-500"
				onKeyDown={handleKeyDown}
			/>
		</>
	);
};

export default SearchInput;
