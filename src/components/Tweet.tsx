import Image from "next/image";
import { FaRegHeart , FaRegCommentAlt} from "react-icons/fa"
import { MdOutlineRemoveRedEye } from "react-icons/md"
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
          description: 'Check out my latest project which took me several weeks to complete! I learned a lot and am happy to share it.!',
          views: 456,
          comments: 78,
          timeAgo: '2 min ago' 
        },
        {
          name: 'Jane Smith',
          sector: "sector 2", 
          imageUrl: 'https://randomuser.me/api/portraits/women/26.jpg', 
          likes: 45,
          description: 'Having a great time at the beach today! The weather is perfect and Im enjoying swimming and building sandcastles.',
          views: 234, 
          comments: 12,
          timeAgo: '5 min ago'
        },
        {
          name: 'Bob Johnson',
          sector: "sector 3", 
          imageUrl: 'https://randomuser.me/api/portraits/men/37.jpg',
          likes: 78,
          description: 'I am super excited to go on vacation next week! I have been planning this trip for months and cant wait to relax on the beach.',
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
    <main className="flex flex-col gap-12 mb-20">
        {tweets.map((tweet) => (
            <div key={tweet.name} className=' rounded-md py-4 shadow-gray-400 shadow-md px-2'>
                <div  className=" flex gap-3 ">
                    <div className="flex-none">
                        <Image src={tweet.imageUrl} width={40} height={40} className="rounded-full" alt="imgUrl" />
                    </div>
                    <div className="flex flex-col flex-1">
                        <div className=" flex items-center justify-between">
                            <div className="flex gap-5 items-center">
                                <p className="font-semibold">{tweet.name}</p>
                                <p className="bg-blue-800 px-3 py-[0.19rem] text-[0.75rem] text-white rounded-2xl">{tweet.sector}</p>
                            </div>
                            <div className="text-blue-800 text-sm flex justify-end">{tweet.timeAgo}</div>
                        </div>
                        <p className="text-black pt-3">{tweet.description}</p>
                        <div className="flex text-xs font-semibold justify-between items-center pt-4 max-w-xs">
                            <div className="flex gap-2 items-center">
                                <FaRegHeart />
                                <p className="">{tweet.likes}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <MdOutlineRemoveRedEye  className='text-xl'/>
                                <p className="">{tweet.views}</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <FaRegCommentAlt />
                                <p className="">{tweet.comments} comments</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <FiShare2 />
                                <p className="">Share</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </main>
  );
}


