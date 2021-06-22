import Layout from "../components/common/layout";
import WhatIsRedux from "../components/common/Paragraph/WhatIsRedux";
import ReduxToolkit from "../components/common/Paragraph/ReduxToolkit";
import ThunkAsyncLogic from "../components/common/Paragraph/ThunkAsyncLogic";

const WeatherRedux = () => {
	return (
		<Layout>
			<WhatIsRedux />
			<ReduxToolkit />
			<ThunkAsyncLogic />
		</Layout>
	);
};

export default WeatherRedux;
