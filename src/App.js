import reactLogo from "./reactLogo.svg";
import tailwindLogo from "./tailwindLogo.svg";

export default function App() {
	return (
		<div className="bg-gray-200 relative flex flex-col justify-center items-center h-screen font-normal text-base px-10 text-gray-900">
			<img className="relative z-0 -mb-56" width="400" src={ tailwindLogo } alt="logo" />
			<img className="relative animate-spin-slow z-10" width="300" src={ reactLogo } alt="logo" />
			<div className="mt-14 text-center space-y-3">
				<h1 className="font-bold text-xl">
					Tailwind Template for <code className="font-normal">create-react-app</code>
				</h1>
				<p>Up and going, in no time.</p>
			</div>
			<div className="mt-10 space-y-4 flex flex-col justify-center items-center text-sm">
				<h1 className="font-bold text-xl">Important Notes</h1>
				<p>
					This is, for the most part, a standard <code className="font-normal text-xs text-yellow-700">create-react-app</code> with Tailwind installed except for the following three things:
				</p>
				<ul className="flex flex-col justify-center items-start text-left text-sm list-disc mx-20 space-y-3">
					<li className="mt-4">
						<p>
							<code className="font-normal text-xs text-yellow-700">react-router</code> has been installed and is wrapping the <span className="font-bold">App</span> component in <code className="font-normal text-xs text-yellow-700">index.js</code>
						</p>
					</li>
					<li className="">
						<p>
							A plug-in has been setup in Tailwind to show you what breakpoint you are currently at in the browser to help with styling. You will see it at the top-center of the browser window. When
							you are ready for production, or to hide it at any time, just comment out the breakpoint <code className="font-normal text-xs text-yellow-700">div</code> in{ " " }
							<code className="font-normal text-xs text-yellow-700">public/index.html</code>
						</p>
					</li>
					<li className="">
						<p>
							Meta-tags have been set up for the Open Graph protocol in <code className="font-normal text-xs text-yellow-700">public/index.html</code>. This is for setting what shows up when websites generate a preview when
							you share the link, like a Facebook post or a LinkedIn comment. The tags are currently comment out and awaiting your settings when ready.
						</p>
					</li>
				</ul>
			</div>
			<footer className="absolute bottom-4 text-sm text-center">
				<p className="italic">
					Template Created by Shawn Clary
				</p>
				<p>
					<a className="text-blue-500 font-medium" href="https://www.sleeptil3software.com" target="_blank" rel="noreferrer">Website</a> | <a className="text-blue-500 font-medium" href="https://www.linkedin.com/in/shclary" target="_blank" rel="noreferrer">LinkedIn</a>
				</p>

			</footer>
		</div >
	);
}
