import React from "react";
import { useLastFM } from "use-last-fm";

type Props = {};

const Spotify = (props: Props) => {
	const lastFM = useLastFM(
		"KnowGoten",
		`995da994675a3991898b54046f1c070f`,
		30000,
		"small"
	);

	if (lastFM.status !== "playing") {
		return (
			<div className="spotify__wrapper">
				<div className="spotify__red"></div>
				<div className="spotify__song">Spotify Offline</div>
			</div>
		);
	}
	return (
		<div className="spotify__wrapper">
			<div className="spotify__green"></div>
			<div className="spotify__song">
				Listening to <b>{lastFM.song.name}</b> by{" "}
				<b>
					<i>{lastFM.song.artist}</i>
				</b>
			</div>
		</div>
	);
};

export default Spotify;
