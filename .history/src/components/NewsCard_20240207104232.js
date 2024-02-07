"use client";

import React from "react";
import SwipeableViews from "react-swipeable-views";

function NewsCard() {
	return (
		<SwipeableViews 
        containerStyle="h-full"
        axis="y" resistance className="h-full">
			<div className="h-full bg-gray-400">slide n°1</div>
			<div className="h-full bg-orange-400">slide n°2</div>
			<div className="h-full bg-sky-400">slide n°3</div>
		</SwipeableViews>
	);
}

export default NewsCard;
