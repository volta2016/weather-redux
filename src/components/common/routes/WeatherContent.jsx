import { BrowserRouter, Switch, Route } from "react-router-dom";

import WeatherHome from "../../../pages/WeatherHome";
import WeatherRedux from "../../../pages/WeatherRedux";
import PageNotFound from "../../../pages/PageNotFound";

const WeatherContent = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={WeatherHome} />
			<Route exact path="/weatherredux" component={WeatherRedux} />
			<Route path="*" component={PageNotFound} />
		</Switch>
	</BrowserRouter>
);

export default WeatherContent;
