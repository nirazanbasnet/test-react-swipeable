"use client";

import React from "react";
import SwipeableViews from "react-swipeable-views";

function NewsCard() {
	return (
		<SwipeableViews className="h-full">
			<div className="bg-">
				slide n°1
			</div>
			<div>
				slide n°2
			</div>
			<div>
				slide n°3
			</div>
		</SwipeableViews>
	);
}

export default NewsCard;
