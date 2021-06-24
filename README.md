# Weather App - React JS

Weather application which shows the weather of the current location of the user

## App Capture

![screenshot](https://raw.githubusercontent.com/volta2016/weather-redux/master/src/assets/img/screenreadme/screely-1.png)

url [see project](https://weather-app-redux.vercel.app/).

### dev requirements

- Connection and consumption of apis. Calls can be with fetch or axios
- Creation of routes + lazy loading the project
- Clean architecture based on good practice architecture patterns with Code Splitting
- Implementation of page not found 404
- Apply the use of hooks
- Creation of some custom hook
- Use of Prop-Types in at least 3 components
- Packaging of resources to production with Webpack and Babel
- Deployment in production in Vercel
- The UI can be implemented as it best suits them
- Research and apply the ErrorBoundary HOC (error limits) to your project

### features

- You can see the weather of the default city London or the current city where the user is
- You can search the weather and filter by city
- You can see the weather of the current day and the next 5 days
- you can see the date and the weather location
- You can see the state of the weather by iconography
- You can see the minimum and maximum degree of each day
- You can see the state and direction of the wind
- You can see the humidity percentage
- you can see a percentage bar with the humidity status
- You can see the number of air pressure
- You can request the weather of your current location
- You can convert the temperature in degrees Celsius to Fahrenheit and vice versa

### My solution

My solution to develop the app is to use redux as a state manager, the initial state
It is an object with several properties which I will be saving and modifying with the behavior
of the flux pattern in the UI, each change applied by the user triggers an action, which thanks to
the redux thunk middleware can trigger not only objects but also functions with asynchronous logic.
The action of dispatch goes to the reducer, the reducer generates a new state and we update the view.

We centralize all the logic in a single slice thanks to redux toolkit, searchLocation in this case
initialize to null within the properties of the searchLocation (pin) object: null
but after the action is triggered, it goes to reducer and is updated as an object with the properties:

title:"London"
location_type:"City"
woeid:44418
latt_long:"51.506321,-0.12714"

![screenshot](https://raw.githubusercontent.com/volta2016/weather-redux/master/src/assets/img/diagram-redux-toolkit.png)

### Built With

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Redux thunk](https://redux-toolkit.js.org/api/createAsyncThunk#return-value)
- [Sass](https://sass-lang.com/)
- [Webpack](https://v4.webpack.js.org/)
- [Babel](https://babeljs.io/)

### API to get data

url [see API](https://www.metaweather.com/).

## How To Use Weather App

- You can share your current location to know the forecast for the next 5 days

![screenshot](https://raw.githubusercontent.com/volta2016/weather-redux/master/src/assets/img/screenreadme/screely-2.png)

- You can filter a city for example Lima

![screenshot](https://raw.githubusercontent.com/volta2016/weather-redux/master/src/assets/img/screenreadme/screely-3.png)

- Wait for it to load the cities you are looking for

![screenshot](https://raw.githubusercontent.com/volta2016/weather-redux/master/src/assets/img/screenreadme/screely-4.png)

- Select the city

![screenshot](https://raw.githubusercontent.com/volta2016/weather-redux/master/src/assets/img/screenreadme/screely-5.png)

- The data will be updated with the current weather and you can change the degrees Celsius to Fahrenheit and vice versa

![screenshot](https://raw.githubusercontent.com/volta2016/weather-redux/master/src/assets/img/screenreadme/screely-6.png)

- You can see a review of the status manager that was used to develop the Weather App

![screenshot](https://raw.githubusercontent.com/volta2016/weather-redux/master/src/assets/img/screenreadme/screely-7.png)
