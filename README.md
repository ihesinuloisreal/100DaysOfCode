# 100DaysOfCode With React
I got everything set up and ready for this exercise on the 13th of April. But before now i have already started learning somethings about react such as Components, Props, State and eventHandling.


# Day 1: 14th April
I am looking at React state. State can be managed with a component, onlike props states can be changes using the useState hooks. States can be used in function components by calling useState hook. While states can be access in class components by calling this.state. 

# Day 2: 15th April
Today i am taking a closer look on setState in the react class component. I created a button that increaments a count by 1 after it is clicked. I also looked at how to set actions that are dependent on a states that is to be set using a callback function. And i looked at incrementing our count 5 times with a click. Basically react state can be set in two ways which are. Object passing which can include a callback function, and Function which can be used used when you need to update a state bassed on the previouse state.

# Day 3: 16th April
Today I am looking at distructuring props and state. Destructuring props is an ES6 feature that make it possible to unpack values from arrays or properties from object into disting variables. we have two ways to distructure props in a functional component. Today i Appied the knowleged of passing props into passing states and i was able to create a button functional component, and passed in state into it from a class component.

I was able to pass in states and props into a single button components

# Day 4: 17th April
Today i am looking at Event Handling in react. Event in react must be camel case e.g, onClick.

# Day 5: 18th April
How to bind Event Handlers. there are four way we can bind events, which are 
1. Binding in Render 
2. Arrow Function 
3. Binding in the class constructor 
4. Class property as Arrow function
But the best practice involve approche 3 and 4.

Today i added an event listiner to listing to each button click

# Day 6: 19th April
Method passing as props. This process can be used to communicate with the parent element from the child element. To achieve that communication from the child component, we use an Arrow function in the return statemen. Arrow function syntax is the simples way to pass parameter from the child component to the parent component. 

# Day 7: 20th April
Conditional rendering UI in react. We have 4 Approches which include,
1. If/Else
2. Element Variables
3. Tenary conditional operator
4. Short circle operators
3 and 4 is recommended

# Day 8: 21st April
List Rendering. I created to component PersonsList and person. The personsList is responsible for rendering the list while the Person component is responsible for rendering the HTML. while rendering list you can use the array index as key also in a case where we dont have Id.

Bases if styling in css include,
1. CSS stylesheets
2. Inline styling
3. CSS Modules
4. CSS in JS Libraries.

To specify multiple classes We use back-ticks `` to Change the style into Template Literals

# Day 9: 22nd April
Basic of form handling. 
React lifecycle Methods in a class Components
1. Mounting: this is a methode that are called when an instans of a component is being created or inserted into the DOM. 
    a. Constructor: this is a special function that will get called when ever a new componet is created. Calling a constructor you must call super and pass in props.
    b. static getDerivedStateFromProps(props,state): this method is used when the state of a component depends on the changes in props over time.
    c. render method: this is the only required methode in a class component.
    d. componentDidMount(): this method is called once. this is the perfect place to cause side effects. 
2. Updating LifeCycle Method: this is a method that is called when a component is being rerenderd because of changes to either props or state.
    a. static getDerivedStateFromProps(props,state): this method is used when the state of a component depends on the changes in props over time.
    b. shouldComponentUpdate(nextProps, nextState): this method recieves the updated props and state. it dictates wether this method should rerender or not.
    c. render method: this is the only required methode in a class component.
    d. getSnapshotBeforeUpdate(prevProps, prevState): this method accepts previouse props and previouse state as its parameter and it is called right before the changes from the vertual DOM are to be reflected in the DOM.
    e. componentDidUpdate(prevProps, prevState, snapshot): 
3. Unmounting
4. Error Handling

# Day 10: 23rd April
React Fragments. Fragments lets us group a list of children element without adding extra node to the DOM. React fragment can take in key attribute. react.fragment can be replace with an empty tag. <></> but this empty tag can not take in key attribute

# Day 11: 24th April
Pure components. we can create a component in react by extending the PureCompent class. The pure Component implements the shouldComponentUpdate() with Shalow props and state comparison, it test the previouse props and state with the current one to see if there is any change. Shalow Comparison can be studied with respect to premitive and complex types. But it is best practise to use regular componet always.

# Day 12: 25th April
Memo: what PureComponents is to react class Component so is Memo to functional Component. to export a memo you use (export default React.memo(ClassName)) 

# Day 13: 26 April
I created some components for a we page i am working on. 

# Day 14: 2nd May
Refs: refs make it possible to access dom element from react. You can use the focus your cursor on an input field by calling the (current.focos()) method. 
Refs with ClassComponent: Res can only be applied to class components not functional components. 
Refs Forwarding: Basically, this can come in handy when you are working with libraries. 

Portals: 

# Day :

# Day :