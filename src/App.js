import React, { useState, useEffect } from "react";
import "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import { Modal, Accordion, Card, Button } from "react-bootstrap";
import firebase from "firebase/app";
import "./Firebase";

const App = () => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleEditModalClose = () => setShowEditModal(false);
  const handleEditModalShow = () => setShowEditModal(true);
  const handleAddModalClose = () => setShowAddModal(false);
  const handleAddModalShow = () => setShowAddModal(true);
  const recipeRef = firebase.firestore().collection("recipes");

  function getRecipes() {
    setLoading(true);
    recipeRef.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setRecipes(items);
      setLoading(false);
      console.log(items);
    });
  }

  useEffect(() => {
    getRecipes();
  }, []);

  function isLoading() {
    if (loading === true) {
      console.log("Data is loading");
    } else {
      console.log(null);
    }
  }

  const updateRecipe = (e) => {
    e.preventDefault();
    recipeRef.add({
      title: title,
      ingredients: ingredients.split(","),
    });
    handleEditModalClose();
    setTitle("");
    setIngredients("");
  };

  
  const handleSubmitAddRecipe = () => {
    recipeRef
      .add({
        title: title,
        ingredients: ingredients.split(","),
      })
      .catch((err) => {
        console.log(err);
      });
    handleAddModalClose();
    setTitle("");
    setIngredients([]);
  };

  const deleteRecipe = () => {
    for(var i = 0; i < recipeRef.length; i++){
      recipeRef.splice(i)  
    }
  }

  
  const handleEditIngredients = (event) => {
    setIngredients(event.target.value);
  };

  const handleEditTitle = (event) => {
    setTitle(event.target.value);
  };

  isLoading();
  console.log(recipeRef);

  return (
    <div>
      <div className="header-content">
        <h3 className="heading">trigger's React Recipe box</h3>
        <p className="sub-heading">
          Create, edit, delete your recipes. Uses session storage so that a page
          recipeRefresh will keep stored data (but not after page close)
        </p>
        <p className="head-link">
          <a href="https://www.freecodecamp.org/challenges/build-a-recipe-box">
            https://www.freecodecamp.org/challenges/build-a-recipe-box
          </a>
        </p>
      </div>

      <div className="recipe-container">
        {recipes.map(({ title, ingredients }, key) => (
          <div key={key}>
            <Accordion>
              <Card className="main-card">
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    {title}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <ul>
                      {ingredients.map((ingredient, key) => (
                        <li key={key}> {ingredient} </li>
                      ))}
                    </ul>
                    <Button variant="info" onClick={handleEditModalShow}>
                      Edit
                    </Button>
                    <Button
                      className="delete-button"
                      variant="danger"
                      onClick={deleteRecipe}
                      >
                      Delete
                    </Button>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </div>
        ))}
      </div>
      <div className="add-button">
        <Button
          className="add-button"
          variant="primary"
          size="sm"
          onClick={handleAddModalShow}
        >
          Add
        </Button>
      </div>
      <div className="modals-container">
        <div className="edit-modal">
          <Modal
            className="editRecipe"
            show={showEditModal}
            onHide={handleEditModalClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Edit Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <label>
                  Recipe Title
                  <input
                    type="text"
                    name="title"
                    placeholder={title}
                    value={title}
                    onChange={handleEditTitle}
                  />
                </label>
                <label>
                  Ingredients
                  <input
                    type="text"
                    name="ingredients"
                    placeholder={ingredients}
                    value={ingredients}
                    onChange={handleEditIngredients}
                  />
                </label>
                <div>
                  <Button
                    className="close"
                    variant="outline-dark"
                    onClick={handleEditModalClose}
                  >
                    Close
                  </Button>
                  <Button
                    className="update"
                    variant="primary"
                    onClick={updateRecipe}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Modal.Body>
          </Modal>
        </div>
        <div className="add-modal">
          <Modal
            className="addModal"
            show={showAddModal}
            onHide={handleAddModalClose}
          >
            <Modal.Header closeButton>
              <Modal.Title>Add Recipe</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>
                Recipe Title
                <input
                  type="text"
                  name="title"
                  placeholder="Enter Recipe Title"
                  value={title}
                  id="addTitle"
                  onChange={handleEditTitle}
                />
              </label>
              <label>
                Ingredients
                <input
                  type="text"
                  name="ingredients"
                  placeholder="Enter Ingredients, seperate each with a comma"
                  value={ingredients}
                  id="addIngredients"
                  onChange={handleEditIngredients}
                />
              </label>
              <div>
                <Button variant="outline-dark" onClick={handleAddModalClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleSubmitAddRecipe}>
                  Submit
                </Button>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default App;
