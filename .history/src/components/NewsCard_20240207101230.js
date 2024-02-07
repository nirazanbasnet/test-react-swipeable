"use client";

import React from "react";
import { useSwipeable } from "react-swipeable";

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
		<div {...handlers} ref={refPassthrough}>
			<div>item 1</div>
			<div>item 1</div>
			<div>item 1</div>
		</div>
	);
}

export default NewsCard;
