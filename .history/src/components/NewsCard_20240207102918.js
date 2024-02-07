"use client";

import React from "react";
import { Swipeable } from "react-swipeable";

function NewsCard() {
	const handlers = useSwipeable({ onSwiped: () => console.log("swiped") });

	// setup ref for your usage
	const myRef = React.useRef();

	const refPassthrough = (el) => {
		// call useSwipeable ref prop with el
		handlers.ref(el);

		// set myRef el so you can access it yourself
		myRef.current = el;
	};
	return (
		<Swipeable
			onSwipedLeft={() => console.log("Swiped left!")}
			onSwipedRight={() => console.log("Swiped right!")}
		>
			<div>View 1</div>
			<div>View 2</div>
			<div>View 3</div>
		</Swipeable>
	);
}

export default NewsCard;
