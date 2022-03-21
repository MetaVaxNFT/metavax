import Wrapper from "../prebuilt/Wrapper";
import SocialList from "../SocialList";
import Countdownlg from "../prebuilt/Countdownlg";
import Image from "next/image";

import samurai from "../../public/img/samurai.png";
import logo from "../../public/img/logo.png";

export default function Hero() {
	return (
		<>
			<Wrapper className='!pt-14'>
				<div className='max-w-[30rem] mx-auto mb-12'>
					<Image src={logo} alt='Metavax' />
				</div>
				<h2>
					<span className='text-secondary'>MetaVax</span> NFTs have been
					developed!
				</h2>
				<div
					id='about'
					className='lg:grid-cols-2 auto-rows-auto grid grid-cols-1 gap-4'
				>
					<div>
						<h3>Pre Mint  - Sold out</h3>
						<h3>White List Mint - 17/04/2022  ( Easter Sunday ) 10am UTC time</h3>
						<p>
							Covid 19 put Earth in to a pandemic, There WILL be a Metaverse version, Will you protect yourself? There will be a raging virus spreading through the Metaverse, Its time to get vaccinated before its too late!
						</p>
						<Countdownlg date='Febuary 12, 2022 22:00:00 GMT+0' />
						<SocialList
							discord='https://discord.gg/metavax'
							tiktok='https://www.tiktok.com/@metavaxnft'
							twitter='https://twitter.com/MetaVaxNFT'
							opensea='https://opensea.io/collection/metavaxnft'
						/>
					</div>

					<div>
						<Image src={samurai} alt='Samurai' />
					</div>
				</div>
			</Wrapper>
		</>
	);
}
