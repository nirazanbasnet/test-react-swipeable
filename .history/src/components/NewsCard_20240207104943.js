"use client";

import React from "react";
import SwipeableViews from "react-swipeable-views";

function NewsCard() {
	return (
		<SwipeableViews axis="y" resistance className="h-full">
			<div className="flex flex-col justify-between h-full bg-gray-400">
				<div className="flex-1">
					<img
						src="https://images.pexels.com/photos/11695640/pexels-photo-11695640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
					/>
				</div>
				<div className="flex items-center h-10 p-4 bg-gray-50">
					Comment section
				</div>
			</div>
			<div className="flex flex-col justify-between h-full bg-orange-400">
				<div className="flex-1">
					<img
						src="https://images.pexels.com/photos/9994875/pexels-photo-9994875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
					/>
				</div>
				<div className="flex items-center h-10 p-4 bg-gray-50">
					Comment section
				</div>
			</div>
			<div className="flex flex-col justify-between h-full bg-sky-400">
				<div className="flex-1">
					<img
						src="https://images.pexels.com/photos/5238635/pexels-photo-5238635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
					/>
				</div>
				<div className="flex items-center h-10 p-4 bg-gray-10">
					Comment section
				</div>
			</div>
		</SwipeableViews>
	);
}

export default NewsCard;
