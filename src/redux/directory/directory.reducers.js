const INITIAL_STATE = {
	section: [
		{
			title: "Hat",
			url:
				"https://images.pexels.com/photos/101537/baby-boy-hat-covered-101537.jpeg?cs=srgb&dl=pexels-pixabay-101537.jpg&fm=jpg",
			id: 1,
			linkurl: "hats",
		},
		{
			title: "Jackets",
			url:
				"https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
			id: 2,
			linkurl: "",
		},
		{
			title: "Sneakers",
			url:
				"https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			id: 3,
			linkurl: "",
		},
		{
			title: "Men",
			url:
				"https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600",
			id: 4,
			size: "large",
			linkurl: "",
		},
		{
			title: "Women",
			url:
				"https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
			id: 5,
			size: "large",
			linkurl: "",
		},
	],
};

const directoryReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return {
				...state,
			};
	}
};

export default directoryReducer;
