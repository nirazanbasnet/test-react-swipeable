"use client";

import React from "react";
import SwipeableViews from "react-swipeable-views";

const styles = {
	slide: {
		padding: 15,
		minHeight: 100,
		color: "#fff",
	},
	slide1: {
		background: "#FEA900",
	},
	slide2: {
		background: "#B3DC4A",
	},
	slide3: {
		background: "#6AC0FF",
	},
};

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
