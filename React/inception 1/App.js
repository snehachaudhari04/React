const heading1 = React.createElement("h1",{id:"heading1"},"Welcome to react");
const heading2 = React.createElement("h2",{id:"heading2"},"My first App");
const conatiner =React.createElement("div",{id:"container"},[heading1,heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(conatiner);
 