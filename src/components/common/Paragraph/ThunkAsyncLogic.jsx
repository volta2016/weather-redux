import React, { Suspense, lazy } from "react";
import Loading from "../Loading/Loading";
import DiagramToolkit from "../../../assets/img/diagram-redux-toolkit.png";

const ContentImage = lazy(() => import("../ContentImage"));

const ThunkAsyncLogic = () => {
	return (
		<>
			<h2>Thunks and Async Logic</h2>
			<p>
				<b>First let's understand what a middleware.</b>
				<br /> Most of the time in our developments we need to customize how the
				shipment behaves Redux uses a special type of plugin called middleware
				to allow us to customize the dispatch function.
			</p>
			<p>
				The most common asynchronous middleware is redux-thunk, which allows you
				to write simple functions that can contain asynchronous logic directly.
			</p>
			<p>
				The Redux Toolkit configureStore function automatically configures the
				processor middleware by default, it is recommended to use thunks as a
				standard method for writing asynchronous logic with Redux.
			</p>
			<p>
				When we occupy asynchronous logic, the middleware can execute logic as
				AJAX requests.
			</p>
			<h2>
				Example of how the asynchronous data flow works in our Weather App
			</h2>
			<Suspense fallback={<Loading />}>
				<ContentImage image={DiagramToolkit} title="DiagramToolkit" />
			</Suspense>
		</>
	);
};

export default ThunkAsyncLogic;
