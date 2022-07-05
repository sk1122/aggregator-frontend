const Thesis = () => {
	return (
		<div className="w-full h-full p-10 lg:p-0 lg:h-screen flex justify-center items-center">
			<div className="w-full lg:w-1/2 h-full lg:h-screen flex flex-col justify-center items-start bg-wagpay-dark space-y-5">
				<h1 className="text-4xl text-wagpay-primary">WagPay Thesis</h1>
				<div className="w-full text-lg font-normal font-jakarta-small space-y-2">
					<p>
						There are various L1 & L2 Blockchains in the market currently, even L3 is a reality now, each chain has their own set of pros and cons, also developers have their own choice of chains they want to build on, because of all this, there are various dapps on various chains and users need to switch between chains to use them, constantly keep bridging tokens manually to use their favorite dapp.
					</p>
					<p>
						This is a huge problem and will hurt blockchain’s adoptability.
					</p>
					<p>
						At WagPay, we want to actively solve this problem for dapps and users, key points we are focusing on
					</p>
					<ul className="list-disc ml-10">
						<li>User doesn’t need to worry about various blockchains, just connect any wallet and start using a dapp</li>
						<li>dApp don’t need to target every blockchain’s user differently, a dev can deploy dApp anywhere and make it available to user based out of any chain</li>
					</ul>
					<p className="font-bold text-2xl text-wagpay-primary">
						How is WagPay going solve this?
					</p>
					<p>Currently, there are various bridging solutions available to bridge tokens and information between various blockchains, some problems we have seen in bridges</p>
					<ul className="list-disc ml-10">
						<li>Bridges are not very developer friendly (can’t be integrated in a single day)</li>
						<li>Bridges bridge only similar tokens (eg, USDT (ETH) -{'>'} USDT (POL)) and not different token (eg. USDT [ETH] -{'>'} MATIC [POL]]</li>
						<li>Every bridge is optimizing for different usecase, some are optimizing for fast transfers, some are optimizing security and others are optimizing to various other usecases</li>
					</ul>
					<p>WagPay is solving all this problems with a very good approach, we are building a layer above all these bridges by aggregating all of them. Because we are aggregating, end users/developers can use any bridge they want based on their usecases, they get to choose which type of bridge they want to deal with, this simplifies the developer experience also</p>
					<p>In a nutshell, WagPay aggregates various Bridges and DEXs, which enables us to do bridging between different tokens, with WagPay Protocol — user can easily transfer any token to any token or any information with a long list of blockchains supported.</p>
				</div>
			</div>
		</div>
	)
}

export default Thesis