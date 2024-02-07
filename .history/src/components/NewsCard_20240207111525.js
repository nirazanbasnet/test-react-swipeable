"use client";

import React from "react";
import Image from "next/image";
import SwipeableViews from "react-swipeable-views";

function NewsCard() {
	return (
		<SwipeableViews axis="y" resistance className="h-full">
			<div className="flex flex-col justify-between h-full bg-gray-400">
				<div className="flex-1">
					<div className="relative w-full h-[200px]">
						<Image
							src="https://images.pexels.com/photos/9994875/pexels-photo-9994875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt=""
							fill
							objectFit="cover"
						/>
					</div>
					<div className="p-4 pb-0 line-clamp-6">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially
					</div>
				</div>
				<div className="flex items-center h-10 p-4 mx-4 mb-4 text-gray-300 bg-gray-100 rounded-3xl">
					Comment section
				</div>
			</div>
			<div className="flex flex-col justify-between h-full bg-orange-400">
				<div className="flex-1">
					<div className="relative w-full h-[200px]">
						<Image
							src="https://images.pexels.com/photos/5014918/pexels-photo-5014918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt=""
							fill
							objectFit="cover"
						/>
					</div>
					<div className="p-4 pb-0 line-clamp-6">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industrys standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially
					</div>
				</div>
				<div className="flex items-center h-10 p-4 mx-4 mb-4 text-gray-300 bg-gray-100 rounded-3xl">
					Comment section
				</div>
			</div>
			<div className="flex flex-col justify-between h-full bg-sky-400">
				<div className="flex-1">
					<div className="relative w-full h-[200px]">
						<Image
							src="https://images.pexels.com/photos/12594884/pexels-photo-12594884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt=""
							fill
							objectFit="cover"
						/>
					</div>
					<div className="p-4 pb-0 line-clamp-6">
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially
					</div>
				</div>
				<div className="flex items-center h-10 p-4 mx-4 mb-4 text-gray-300 bg-gray-100 rounded-3xl">
					Comment section
				</div>
			</div>
		</SwipeableViews>
	);
}

export default NewsCard;
