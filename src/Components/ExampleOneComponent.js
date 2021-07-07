// import React, { useState } from "react";
// import { Modal, Button } from "react-bootstrap";
//all other imports

//start your compnent:

//const Component {
//all of your state

//all of your functions, for saveButton, deleteButton, addButton getting them from the database:
//1. getRecipes for when page first loads, AND
//2. useEffect that calls getRecipes anytime the array changes, which means you will pass in an empty array as useEffect's dependency array
//also 2 functions for edit - come to office hours when you get there

//all of yuor JSX, you will return:
//1. Add recipe modal
//2. Edit recipe modal
//3. your accordion inside of a map that will display an accordion for each object in the recipes array/collection

//}

// export default EditRecipeModal;

//how to add connect functionality for modal to change/update the database

//**************************
// const saveRecipe = async (e) => {
//     e.preventDefault();
//     const ingredientsArray = ingredients.split(",");

//     await db.collection("recipes").doc("reciepe.id").add({
//       title,
//       ingredients: ingredientsArray,
//     });

//     setTitle("");
//     //SetIngredients("");

//when I click the edit button and the modal appears I want the current recipe title and ingredients to show

//when I click add I want the add modal to show and when I click edit I want the edit modal to show

//when I click save I want the ingredients entered into the input to be pushed into an ingredients array

// import firestore from "firebase/firestore";

// const RecipeAccordian = () => {
//   const [show, setShow] = useState(false);
//   const [title, setTitle] = useState("");
//   const [ingredients, setIngredients] = useState("");

//   const db = firebase.firestore().collection("recipes");

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const saveRecipe = async (e) => {
//     e.preventDefault();
//     const ingredientsArray = ingredients.split(",");

//     await db.collection("recipes").doc("reciepe.id").add({
//       title,
//       ingredients: ingredientsArray,
//     });

//     setTitle("");
//     //SetIngredients("");
//   };

//   // const deleteButtonHandler = () => {
//   //   console.log("clicked");
//   // };

//   return (
//     <div>
//       <Accordion>
//         <Card>
//           <Card.Header>
//             <Accordion.Toggle as={Button} variant="link" eventKey="0">
//               Recipe
//             </Accordion.Toggle>
//           </Card.Header>
//           <Accordion.Collapse eventKey="0">
//             <Card.Body>
//               <ul>
//                 <li>ingredient</li>
//                 <li>ingredient</li>
//                 <li>ingredient</li>
//                 <li>ingredient</li>
//                 <li>ingredient</li>
//                 <li>ingredient</li>
//               </ul>
//               <Button
//                 className="edit-button"
//                 variant="info"
//                 onClick={handleShow}
//               >
//                 Edit
//               </Button>
//               <Button
//                 className="delete-button"
//                 variant="danger"
//                 onClick={handleShow}
//               >
//                 Delete
//               </Button>
//             </Card.Body>
//           </Accordion.Collapse>
//         </Card>
//         <Button className="add-button" variant="primary" onClick={handleShow}>
//           Add Recipe
//         </Button>
//       </Accordion>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Recipe</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <p>Recipe Title</p>
//           <input
//             type="text"
//             placeholder="Enter Recipe Title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           ></input>
//           <p>Ingredients</p>
//           <input
//             type="text"
//             placeholder="Enter Ingredients, seperate each with a comma"
//             value={ingredients}
//             onChange={(e) => setIngredients(e.target.value)}
//           ></input>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="outline-dark" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={saveRecipe}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default RecipeAccordian;
