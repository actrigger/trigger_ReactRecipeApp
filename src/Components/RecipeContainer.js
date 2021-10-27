// // import React, { useState, useEffect } from "react";
// // import { Modal, Accordion, Card, Button } from "react-bootstrap";
// // import firebase from "firebase/app";
// // import "../Firebase";

// const ReciepeContainer = () => {
//   // const [show, setShow] = useState(false);
//   // const [title, setTitle] = useState("");
//   // const [ingredients, setIngredients] = useState("");
//   // const [recipes, setRecipes] = useState([]);
//   // const [loading, setLoading] = useState(false);
//   // const ref = firebase.firestore().collection("recipes");
//   // const handleClose = () => setShow(false);
//   // const handleShow = () => setShow(true);

//   // function getRecipes() {
//   //   setLoading(true);
//   //   ref.onSnapshot((querySnapshot) => {
//   //     const items = [];
//   //     querySnapshot.forEach((doc) => {
//   //       items.push(doc.data());
//   //     });
//   //     setRecipes(items);
//   //     setLoading(false);
//   //   });
//   // }

//   // useEffect(() => {
//   //   getRecipes();
//   // }, []);

//   return (
//     <div className="main-div recipe-container
//       {recipes.map((recipe) => {
//         return (
//           <div>
//             <Accordion key={recipe.id}>
//               <Card className="main-card">
//                 <Card.Header>
//                   <Accordion.Toggle as={Button} variant="link" eventKey="0">
//                     {recipe.title}
//                   </Accordion.Toggle>
//                 </Card.Header>
//                 <Accordion.Collapse eventKey="0">
//                   <Card.Body>
//                     <ul>
//                       <li>{recipe.ingredients}</li>
//                     </ul>
//                     <Button
//                       className="edit-button"
//                       variant="info"
//                       onClick={handleShow}
//                     >
//                       Edit
//                     </Button>
//                     <Button
//                       className="delete-button"
//                       variant="danger"
//                       onClick={handleShow}
//                     >
//                       Delete
//                     </Button>
//                   </Card.Body>
//                 </Accordion.Collapse>
//               </Card>
//             </Accordion>
//             <Modal show={show} onHide={handleClose}>
//               <Modal.Header closeButton>
//                 <Modal.Title>Add Recipe</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 <p>Recipe Title</p>
//                 <input
//                   type="text"
//                   placeholder="Enter Recipe Title"
//                   value={title}
//                   onChange={(e) => setTitle(e.target.value)}
//                 ></input>
//                 <p>Ingredients</p>
//                 <input
//                   type="text"
//                   placeholder="Enter Ingredients, seperate each with a comma"
//                   value={ingredients}
//                   onChange={(e) => setIngredients(e.target.value)}
//                 ></input>
//               </Modal.Body>
//               <Modal.Footer>
//                 <Button variant="outline-dark" onClick={handleClose}>
//                   Close
//                 </Button>
//                 {/* <Button variant="primary" onClick={saveRecipe}>
//                   Save Changes
//                 </Button> */}
//               </Modal.Footer>
//             </Modal>
//             )
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ReciepeContainer;



//after modals

// <div className="accordian container">
//         {recipes.map(({ title, ingredients }, i) =>  {
//           return (
//             <div>
//                 <Accordion key={i}>
//                   <Card>
//                     <Card.Header>
//                       <Accordion.Toggle as={Button} variant="link" eventKey="0">
//                         {title}
//                       </Accordion.Toggle>
//                     </Card.Header>
//                     <Accordion.Collapse eventKey="0">
                    
//                       <Card.Body>
                        
                        
                        
                        

                        
//                         <Button
//                           variant="info"
//                           onClick={handleEditModal(recipe)}
//                         >
//                           Edit
//                         </Button>
//                         <Button
//                           className="delete-button"
//                           variant="danger"
//                           onClick={deleteRecipe}
//                         >
//                           Delete
//                         </Button>
//                       </Card.Body>
//                     </Accordion.Collapse>
//                   </Card>
//                 </Accordion>
//             </div>
//           );
//         })}
//       </div>
//       <div className="add-button">
//         <Button
//           className="add-button"
//           variant="primary"
//           size="sm"
//           onClick={modalShow}
//         >
//           Add
//         </Button>
//       </div>     
//     </div>
//   );
