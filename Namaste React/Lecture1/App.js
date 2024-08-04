// const heading = React.createElement("h1", {id: "heading", class: "title"}, "Hello World from React"); 
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/**
    <div id="parent">
        <div id="child">
            <h1>This is a heading</h1>
        </div>
    </div>
*/
const heading = React.createElement("h1", {}, "This is a Heading");
const para = React.createElement("p", {}, "This is a Paragraph");
const child = React.createElement("div", { id: "child" }, [heading, para]);
const parent = React.createElement("div", { id: "parent" }, child);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
console.log(parent);
