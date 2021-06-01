import Image from "next/image";
import {ChatAltIcon, ThumbUpIcon, ShareIcon} from "@heroicons/react/outline";

// pass bunch of props here
function Post({name, message, email, image, timestamp, postImage}) {
    return (
        <div className="flex flex-col">
          <div className="bg-white p-5 mt-5 rounded-t-2xl shadow-sm">
           <div className="flex items-center space-x-2">
               <img
               className="rounded-full" 
               src={image}
               width={40}
               height={40} 
               alt="" />
               <div className="">
                <p className="font-medium">{name}</p>
                <p className="text-xs text-gray-400">
              {
             //takes the time from firebase
              new Date(timestamp  
             // convert into into to date
             ?.toDate())
             // convert the date into your local string 
             .toLocaleString()}</p>
             <p className="text-xs text-gray-400">{email}</p>
            </div>
           </div>
           <p className="pt-4">{message}</p>
          </div>
          {/* only if the post image then do this  */}
          {/* means when user select to post image with content then do this  */}
          {postImage && (
              // mekes parent classname relative when use layout fill and objectfit otheriwise image cover the full screen
              <div className="relative h-56 md:h-96">
               <Image src={postImage} objectFit="cover" layout="fill" />
              </div>
          )}
          {/* footer section of post */}
          <div className="flex items-center justify-between rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
          <div className="inputIcon rounded-none rounded-bl-2xl">
            <ThumbUpIcon className="h-4" />
            <p className="text-xs sm:text-base">Like</p>
            </div>
            <div className="inputIcon rounded-none">
            <ChatAltIcon className="h-4" />
            <p className="text-xs sm:text-base">Comment</p>
            </div>
            <div className="inputIcon rounded-none rounded-br-2xl">
             <ShareIcon className="h-4" />
             <p className="text-xs sm:text-base">Share</p>
            </div>
          </div>

        </div>
    )
}

export default Post
