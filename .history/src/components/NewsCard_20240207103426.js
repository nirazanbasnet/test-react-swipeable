"use client";

import React from "react";
import SwipeableViews from "react-swipeable-views";

function NewsCard() {
	return (
		<SwipeableViews>
			<div style={Object.assign({}, styles.slide, styles.slide1)}>
				slide n°1
			</div>
			<div style={Object.assign({}, styles.slide, styles.slide2)}>
				slide n°2
			</div>
			<div style={Object.assign({}, styles.slide, styles.slide3)}>
				slide n°3
			</div>
		</SwipeableViews>
	);
}

export default NewsCard;
