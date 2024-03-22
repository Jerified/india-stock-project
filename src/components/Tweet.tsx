import Image from "next/image";
import { FaRegHeart } from "react-icons/fa"
import { MdOutlineRemoveRedEye, MdModeComment } from "react-icons/md"
import { FiShare2 } from "react-icons/fi"

export default function Tweet() {
    interface Tweet {
        name: string;
        sector: string, 
        imageUrl: string;
        likes: number;
        description: string;
        views: number;
        comments: number;
        timeAgo: string;
      }
    const tweets: Tweet[] = [
        {
          name: 'John Doe', 
          sector: "sector 1", 
          imageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
          likes: 123,
          description: 'Check out my latest project!',
          views: 456,
          comments: 78,
          timeAgo: '2 min ago' 
        },
        {
          name: 'Jane Smith',
          sector: "sector 2", 
          imageUrl: 'https://randomuser.me/api/portraits/women/26.jpg', 
          likes: 45,
          description: 'Having fun at the beach today!',
          views: 234, 
          comments: 12,
          timeAgo: '5 min ago'
        },
        {
          name: 'Bob Johnson',
          sector: "sector 3", 
          imageUrl: 'https://randomuser.me/api/portraits/men/37.jpg',
          likes: 78,
          description: 'About to go on vacation, so excited!',
          views: 345,
          comments: 23,
          timeAgo: '6 min ago'
        },
        {
            name: 'Mary Lee',
            sector: "sector 4", 
            imageUrl: 'https://randomuser.me/api/portraits/women/22.jpg',
            likes: 67,
            description: 'Working on some new recipes to try',
            views: 123, 
            comments: 5,
            timeAgo: '7 min ago'
          },
          {
            name: 'Coffee Shop',
            sector: "sector 5", 
            imageUrl: 'https://randomuser.me/api/portraits/women/20.jpg',
            likes: 98,
            description: 'Come try our new vanilla latte!', 
            views: 210,
            comments: 17,
            timeAgo: '8 min ago' 
          }
      ];
      
  return (
    <main className="w-full flex flex-col gap-12">
        {tweets.map((tweet) => (
            <div key={tweet.name} className="w-full flex gap-3 mx-2 rounded-md p-4 border-b-2 shadow-gray-400 shadow-md">
                <div className="flex-none">
                    <Image src={tweet.imageUrl} width={40} height={40} className="rounded-full" alt="imgUrl" />
                </div>
                <div>
                    <div className="w-full flex flex-1 items-center justify-between">
                        <div className="flex gap-5 items-center">
                            <p className="font-semibold">{tweet.name}</p>
                            <p className="bg-blue-800 px-3 py-1 text-sm text-white rounded-2xl">{tweet.sector}</p>
                        </div>
                        <div className="text-blue-800 text-sm flex justify-end">{tweet.timeAgo}</div>
                    </div>
                    <p className="text-black pt-3">{tweet.description}</p>
                    <div className="flex justify-between items-center pt-4">
                        <div className="flex gap-2 items-center">
                            <FaRegHeart />
                            <p className="">{tweet.likes}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <MdOutlineRemoveRedEye />
                            <p className="text-xl">{tweet.views}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <MdModeComment />
                            <p className="">{tweet.comments}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <FiShare2 />
                            <p className="">Share</p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </main>
  );
}


