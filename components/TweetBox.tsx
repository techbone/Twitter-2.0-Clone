import React from "react";

import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
  ServerIcon,
} from "@heroicons/react/outline";

const TweetBox = () => {
  return (
    <div className="flex">
      <img
        src="https://links.papareact.com/gll"
        alt="image"
        className="h-14 w-14 rounded-full object-cover mt-4"
      />
      <div className=" flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            className="outline-none"
            type="text"
            placeholder="What's Happening?"
          />
          <div className="flex items-center">
            <div
              className="flex space-x-2 text-twitter flex-1
          "
            >
              <PhotographIcon className="h-5 w-5" />
              <ServerIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button className="bg-twitter px-5 py-2 text-white rounded-full">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
