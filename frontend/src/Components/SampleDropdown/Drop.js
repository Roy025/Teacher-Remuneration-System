import SelectSearch from 'react-select-search';
import { useRef, useState } from 'react';
function Drop({ options }) {
	const searchInput = useRef();
	const [isActive, setIsActive] = useState(false);
	const [selected, setSelected] = useState('Select');

	const handleChange = (...args) => {
		// searchInput.current.querySelector("input").value = "";
		console.log('ARGS:', args);

		console.log('CHANGE:');
		setSelected(args);
		setIsActive(false);
	};

	const handleFilter = (items) => {
		return (searchValue) => {
			if (searchValue.length === 0) {
				return options;
			}
			const updatedItems = items.map((list) => {
				const newItems = list.items.filter((item) => {
					return item.name.toLowerCase().includes(searchValue.toLowerCase());
				});
				return { ...list, items: newItems };
			});
			return updatedItems;
		};
	};

	return (
		<div className="App">
			<SelectSearch
				ref={searchInput}
				options={options}
				filterOptions={handleFilter(options)}
				value=""
				name="Workshop"
				placeholder="Choose a workshop"
				search
				onChange={handleChange}
			/>
		</div>
	);
}
export default Drop;
