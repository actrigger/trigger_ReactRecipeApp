import React, { useState, useEffect } from "react";
import "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Styles.css";
import { Modal, Accordion, Card, Button } from "react-bootstrap";
import firebase from "firebase/app";
import "./Firebase";

const App = () => {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const ref = firebase.firestore().collection("recipes");
  // const addModal = document.querySelector("#add-modal");
  const editModal = document.querySelector("#edit-modal");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const modalShow = () => setShow(true);

  function getRecipes() {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setRecipes(items);
      setLoading(false);
    });
  }
  useEffect(() => {
    getRecipes();
  }, []);

  function saveRecipes(e) {
    e.preventDefault();
    const updateRecipe = async (e) => {
      e.preventDefault();
      await ref.collection("recipe-id").add({
        title: editModal.title.value,
        ingredients: editModal.ingredients.value,
      });
      setTitle("");
      setIngredients("");
    };

    const deleteRecipe = () => {
      console.log("delete");
      setTitle("");
      setIngredients("");
    };

    const newRecipe = async () => {
      await ref.collection.add({
        title: "",
        ingredients: ingredients,
      });
      setTitle("");
      setIngredients([]);
    };

    if (Button.className === "update") {
      updateRecipe();
    } else if (Button.className === "delete") {
      deleteRecipe();
    } else {
      newRecipe();
    }
  }

  return (
    <div>
      <h3 className="heading">trigger's React Recipe box</h3>
      <p className="sub-heading">
        Create, edit, delete your recipes. Uses session storage so that a page
        refresh will keep stored data (but not after page close)
      </p>
      <p className="head-link">
        <a href="https://www.freecodecamp.org/challenges/build-a-recipe-box">
          https://www.freecodecamp.org/challenges/build-a-recipe-box
        </a>
      </p>
      {recipes.map((recipe) => {
        return (
          <Accordion key={recipe.id}>
            <Card className="main-card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  {recipe.title}
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                {ingredients.map((ingredient) => {
                  return (
                    <Card.Body>
                      <div key={ingredient.id}>
                        <li>{ingredient}</li>
                      </div>

                      <Button
                        className="edit"
                        variant="info"
                        size="sm"
                        onClick={handleShow}
                      >
                        Edit
                      </Button>
                      <Button
                        className="delete"
                        variant="danger"
                        size="sm"
                        onClick={saveRecipes}
                      >
                        Delete
                      </Button>
                    </Card.Body>
                  );
                })}
              </Accordion.Collapse>
            </Card>
          </Accordion>
        );
      })}

      {loading ? <h1>Loading...</h1> : null}

      <Modal
        id="edit-modal"
        className="editModal"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header editButton>
          <Modal.Title>Edit Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Recipe Title</label>
          <input
            type="text"
            name="title"
            placeholder={setTitle}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label>Ingredients</label>
          <input
            type="text"
            name="ingredients"
            placeholder={setIngredients}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></input>
          <Button
            className="close"
            variant="outline-dark"
            onClick={handleClose}
          >
            Close
          </Button>
          <Button className="update" variant="primary" onClick={saveRecipes}>
            Save Changes
          </Button>
        </Modal.Body>
      </Modal>

      <Button
        className="add-button"
        variant="primary"
        size="sm"
        onClick={modalShow}
      >
        Add
      </Button>

      <Modal
        id="add-modal"
        className="addModal"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header addButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <label>Recipe Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Recipe Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
          <label>Ingredients</label>
          <input
            type="text"
            name="ingredients"
            placeholder="Enter Ingredients, seperate each with a comma"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></input>
          <Button variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveRecipes}>
            Save Changes
          </Button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default App;
