// import { Divider } from "@material-ui/core";
// import { Card } from "react-bootstrap";

// return(
//     <div className="main-div">
//         <div className = "header-content">
//             <h3 className="heading">trigger's React Recipe box</h3>
//             <p className="sub-heading">
//                 Create, edit, delete your recipes. Uses session storage so that a page
//                 refresh will keep stored data (but not after page close)
//             </p>
//             <p className="head-link">
//                 <a href="https://www.freecodecamp.org/challenges/build-a-recipe-box">
//                     https://www.freecodecamp.org/challenges/build-a-recipe-box
//                 </a>
//             </p>
//         </div>
//         </div>
//         <div className="recipe-container">
//             {recipes.map((recipe, key) => {
//                 return(
//                     <div>
//                         <Accordian key={key}>
//                             <Card className="main-card">
//                                 <Card.Header>
//                                     <Accordion.Toggle as={Button} variant="link" eventKey="0">
//                                         {title}
//                                     </Accordion.Toggle>
//                                 </Card.Header>
//                                 <Accordion.Collapse eventKey="0">
//                                     {ingredients.map((ingredient, key) => {
//                                         <Card.Body key={key}>
//                                             <li>{ingredient}</li>
//                                             <Button
//                                                 variant="info"
//                                                 onClick={handleEditModal(recipe)}
//                                             >Edit</Button>
//                                             <Button
//                                                 className="delete-button"
//                                                 variant="danger"
//                                                 onClick={deleteRecipe}
//                                             >Delete</Button>
//                                         </Card.Body>
//                                     })}
//                                 </Accordion.Collapse>
//                             </Card>
//                         </Accordian>
//                     </div>
//                 );
//             })}
//         </div>
//         <div className="add-button">
//             <Button
//                 className="add-button"
//                 variant="primary"
//                 size="sm"
//                 onClick={modalShow}
//             >Add</Button>
//         </div>     
//     </div>
// );