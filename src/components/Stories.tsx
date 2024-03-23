import Image from "next/image";
import Sidebar from '../components/Sidebar'
import Forum from '../components/Forum'

export default function Stories() {
    interface MarketStory {
        image: string;
        title: string;
        description: string;
      }
    const marketStories: MarketStory[]  = [
        {
          image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40', 
          title: 'Oil Prices Surge on Supply Concerns',
          description: 'Oil prices jumped over 5% today amid concerns over tight global supplies. Disruptions in Libya and sanctions on Russia have reduced oil exports, putting upward pressure on crude prices.',
        },
        {
          image: 'https://images.unsplash.com/photo-1426604966848-d7adac402bff',
          title: 'Tech Stocks Tumble on Weak Earnings',
          description: 'Major technology stocks fell sharply today after several companies reported disappointing quarterly earnings. Investors are concerned about the impact of rising inflation and interest rates on the tech sector.',
        },
        {
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
          title: 'Consumer Sentiment Drops to 10-Year Low', 
          description: 'A key gauge of U.S. consumer sentiment plunged to its lowest level in a decade in August, as high inflation and recession fears weighed on consumers. Economists warn that weak sentiment could impact spending.',
        },
        {
          image: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572',
          title: 'Dollar Rallies on Hawkish Fed Comments',
          description: 'The U.S. dollar index hit a 20-year high today after Federal Reserve officials reiterated their commitment to taming inflation through interest rate hikes. The stronger dollar puts pressure on commodities and emerging markets.',
        }
      ];
      
  return (
    <main className=" lg:block lg:w-[30%] min-h-screen overflow-y-auto scrollbar-hide mb-8">
        <h1 className="hidden lg:block capitalize lg:uppercase text-2xl text-white lg:text-red-400 lg:bg-slate-200 w-fit font-semibold p-1 mb-6">Market stories</h1>
        {marketStories.map((story) => (
            <div key={story.title} className="p-4">
              <Image className="w-full h-48 lg:h-36" src={story.image} width={60} height={60} alt='marketstory' />
              <div  className="px-4">
                <h3 className="font-semibold py-3">{story.title}</h3>
                <p className="text-xs">{story.description}</p>
              </div>

            </div>
        ))}

    </main>
  );
}


