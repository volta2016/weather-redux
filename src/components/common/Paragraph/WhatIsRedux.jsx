import React, { Suspense, lazy } from "react";
import Loading from "../Loading/Loading";
import Flux from "../../../assets/img/flux.png";

const ContentImage = lazy(() => import("../../common/ContentImage"));

const WhatIsRedux = () => (
	<>
		<h2>What is redux?</h2>
		<p>
			Redux is a Library and a pattern that helps you manage the state and
			update it, you can pass it in a more controllable way and all this by
			doing actions. Actions are a kind of events.
		</p>
		<p>
			The minimization of the state in an application when bigger is worse, it
			is very difficult, facebook came with its architecture they called it flux
			that came to solve just this.
		</p>
		<h2>Diagram Flux</h2>
		<Suspense fallback={<Loading />}>
			<ContentImage image={Flux} title="Diagram Flux" />
		</Suspense>
		<p>
			We have the action that creates a new note. It goes to the dispatcher,
			which sends the action and this reaches the Store that has the reducer so
			we generate a new state. This generates a view (Updates the UI) in the
			view we can click the button generates an action, which goes to the
			dispatcher, which calls the store, it calls the reducer and generates a
			new state and so with each of the iterations.
		</p>
	</>
);

export default WhatIsRedux;
