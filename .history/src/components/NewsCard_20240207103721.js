"use client";

import React from "react";
import SwipeableViews from "react-swipeable-views";

function NewsCard() {
	return (
		<SwipeableViews className="h-full">
			<div className="bg-gray-400">slide n°1</div>
			<div className="bg-orange-400">slide n°2</div>
			<div className="bg-sky-400">slide n°3</div>
		</SwipeableViews>
	);
}

export default NewsCard;
