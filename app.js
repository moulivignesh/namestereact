// const heading = React.createElement("h1", { id: "heading" }, "Hello world! for react world");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// /** Create a nested HTML sctructre insid react
//  * <div id="parent">
//  * <div id="child">
//  * <h1>nested HTMl </h1>
//  * </div>
//  * </div>
//  */
// // Reat element (object)=Html(browser understands)
// const nestedhtml=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},React.createElement("h1",{},"nested HTML")));
// // const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(nestedhtml);


// ** Create a nested HTML sctructre insid react
//  * <div id="parent">
//  * <h1>nested html 1</h1>
//  * <h1>nested HTMl </h1>
//  * </div>
//  * </div>

const heaing=React.createElement("div",{},[React.createElement("h1",{},"h1 elemnt 1"),React.createElement("h2",{},"h2 elemnet")]);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heaing);


/**
 * <div id="parent">
 * <h1>kali</h1>
 * <h2>alo</h2>
 * <div id"child">
 * <h1>mouli<h1>
 * <h2>bkd</h2>
 * </div>
 * 
 * <div>
 */

// const head=React.createElement("div",{},
//     [React.createElement("h1",{},kali),
//     React.createElement("h2",{},"alo"),
//     React.createElement("div",{id:"child"},
//         [React.createElement("h1",{},"kalo"),React.createElement("h1"{},"kakdn")]
//     )]);
// const root=ReactDom(document.getElementById("root"));
// root.render(head);