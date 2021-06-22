import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Hightlight from "../Hightlight/Hightlight";
import { replacePoint } from "../../utils";
import LocationArrow from "../../assets/img/locationarrow.svg";

const ListHightlights = ({ todayWeather }) => {
	return (
		<section>
			<h2>Today’s Hightlights</h2>
			{todayWeather && (
				<ul className="listhightlights">
					<Hightlight
						title="Wind Status"
						unit="mph"
						number={Math.round(todayWeather.wind_speed)}
					>
						<div className="wind-direction">
							<figure>
								<img
									src={LocationArrow}
									alt="Location Arrow"
									style={{
										transform: `rotate(${Math.round(
											todayWeather.wind_direction
										)}deg) `,
									}}
								/>
							</figure>
							<span>WSM</span>
						</div>
					</Hightlight>
					<Hightlight title="Humidity" unit="%" number={todayWeather.humidity}>
						<div className="percent">
							<p>0</p>
							<p>50</p>
							<p>100</p>
						</div>
						<div className="progress-bar">
							<div
								className="progress-bar__progress"
								style={{ width: `${todayWeather.humidity}%` }}
							></div>
						</div>
						<p className="textr">%</p>
					</Hightlight>
					<Hightlight
						title="Visibility"
						unit="miles"
						number={replacePoint(todayWeather.visibility)}
					/>
					<Hightlight
						title="Air Pressure"
						unit="mb"
						number={Math.round(todayWeather.air_pressure)}
					/>
				</ul>
			)}
		</section>
	);
};

ListHightlights.propTypes = {
	today: PropTypes.object,
};

const mapStateToProps = (state) => {
	return {
		todayWeather: state.currentLocation.todayWeather,
	};
};

export default connect(mapStateToProps)(ListHightlights);
