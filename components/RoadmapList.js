import Image from "next/image";
import Tile from "./Tile";
import squid from "../public/img/virus.png";

const RoadmapTile = ({ estdate, date, list, done, next }) => {
	return (
		<>
			<div className=' flex-center lg:flex-row relative z-10 flex-col gap-8'>
				<div className='shrink-0 text-center w-[10rem]'>
					<p className='mb-0 font-bold'>{estdate}</p>
					<p className='opacity-50'>{date}</p>
				</div>
				<div
					className={`border-secondary shrink-0 w-6 h-6 ${
						done && "bg-white"
					} border-2 border-solid rounded-full`}
				></div>
				<div className='w-36 h-[1px] lg:block hidden bg-white bg-opacity-50'></div>
				<div className='bg-secondary max-w-[23rem] shadow-harsh flex-center rounded-2xl relative flex-col w-full gap-4 p-6'>
					{list && (
						<ul className='flex flex-col gap-2 list-disc list-inside'>
							{list.map((item, index) => (
								<li className='max-w-[22rem]' key={index}>
									{item}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	);
};

export default function RoadmapList() {
	return (
		<>
			<div className='flex-center relative flex-col gap-12 bg-center bg-no-repeat bg-cover'>
				<div className='absolute z-0'>
					<Image src={squid} alt='Virus' />
				</div>
		

				<h3 className='lg:text-[10rem] uppercase lg:block drop-shadow-none opacity-25 -right-[65%] absolute bottom-[25%] hidden transform -rotate-90'>
					Roadmap
				</h3>
			</div>
		</>
	);
}
