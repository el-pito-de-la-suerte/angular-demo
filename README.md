# ReliabilityChallenge

To run, please install yarn and run
- 	**yarn** *to instal all the depedencies*
- 	**yarn start** *to run the app in dev mode and open http://localhost:4200*
- 	**yarn test** *to run the unit tests*

Misc comments:
- I decided to use angular and some recent frameworks (material, RxJS and NgRX).
- All code is strongly typed.
- The main "building block" for an outage is in models/outage.ts
- As soon as the component is loaded, the application is loading some mock outage data.
- I added some unit test in the reducers, mainly to test that the actions are modifing the state correctly (src\app\reducers\outage-reducers.spec.ts)

## Directory structure

**actions**:  NgRX actions for the basic add/delete/close operations.

**components**:
- single-outage defines a material card with the basic information about a single outage. It also displays some calculated properties like the duration of each outage and some formatted dates.
- A dialog to show the messages of an outage, used if more than 1 message.
- A dialog to enter new messages, or add/close outages.

**containers**:  As this app is pretty small, only have a single app page container. The most important part is that I am using an Observable of the state's array of outages using a selector. It will display the list of Outages using an *ngFor*.

**effects**:  NgRX Effects that are waiting for some actions, and simulate the HTTP operation (with the service)

**models**:  The base class for an Outage. I also saved the file with mock data here.

**reducers**:  The NgRX reducer. Defines the app state,  waits for  actions and it will update the state accordingly.

**selectors**:  A function to select a slice of the state (right now it's getting all or some of the state's array of Outages)

**services**:  A dummy service to simulate end-point calls.

## Running unit tests

Run `yarn test` to execute the unit tests via [Karma](https://karma-runner.github.io).

