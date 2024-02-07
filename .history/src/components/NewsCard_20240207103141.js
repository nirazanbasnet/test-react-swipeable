"use client";

import React from "react";
import SwipeableViews from "react-swipeable-views";


function NewsCard() {
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
