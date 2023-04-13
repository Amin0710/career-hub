import { useRouteError } from "react-router-dom";
import SubBanner from "./Components/SubBanner/SubBanner";

export default function ErrorPage() {
	const Head = "Oops!404";

	return (
		<div>
			<SubBanner Head={Head}></SubBanner>
			<div id="error-page" className="flexCenter">
				<div>
					<p>Sorry, an unexpected error has occurred.</p>
					<p>This is not a valid link</p>
				</div>
			</div>
		</div>
	);
}
