
import SearchInput from "./SearchInput";
import { BiSearch } from "react-icons/bi";
import SearchList from "./SearchList";



const SideBar = () => {
	return (
		<>
			<aside className="fixed z-50 md:relative">
				<input type="checkbox" className="peer hidden" id="sidebar-open" />
				<label
					className="peer-checked:rounded-full peer-checked:p-2 peer-checked:right-6 peer-checked:bg-gray-600 peer-checked:text-white absolute top-8 z-20 mx-2 cursor-pointer md:hidden"
					htmlFor="sidebar-open"
				>
				
				</label>
				<nav
					aria-label="Sidebar Navigation"
					className="peer-checked:w-64 left-0 z-10 flex h-screen w-0 flex-col overflow-hidden bg-gray-700 text-white transition-all md:h-screen md:w-64 lg:w-72"
				>
					<div className="bg-slate-800 mt-5 py-4 pl-6 md:pl-12 md:mt-10 flex">
						<img src="" alt=""/>
						<span>
							<span className="text-xl">Park Finder</span>
							
						</span>
					</div>
					<div className="relative mx-4 flex items-center justify-between rounded-md mt-5 text-black hide-on-mobile">
						<BiSearch className="absolute left-2 block h-5 w-5 text-gray-400" />
						<SearchInput />
					</div>
					<div className="mt-5">
						<SearchList />
					</div>

					
				</nav>
			</aside>
		</>
	);
};

export default SideBar;
