import { Component, useRef } from 'react'
import './Gameboard.css'


class RecipeForm extends Component {

    state = {
        name: "",
        ingredients: [{ingredient_name: "", qty: "", units: ""}]
    };

    addIngredient = e => {
        e.preventDefault();
        this.setState({
            ingredients: [
                ...this.state.ingredients,
                {ingredient_name: "", qty: "", unit: ""}
            ]
        });
    };

handleFieldChange = e => {
        if (["ingredient_name", "qty", "units"].includes(e.target.name)) {
            let ingredients = [...this.state.ingredients];
            ingredients[e.target.id][e.target.name] = e.target.value;
            this.setState({ingredients});
        } else {
            this.setState({[e.target.name]: e.target.value})
        }
    };

    removeIngredient = index => {
        this.state.ingredients.splice(index, 1);
        this.setState({
            ingredients: this.state.ingredients
        });
    };

    render() {
    return (
        <>
            <div className="testBoard">
                <form
                // onSubmit={this.handleFormSubmit}
                onChange={this.handleFieldChange}>
                    <input
                    fluid
                    label="Name"
                    placeholder="Recipe Name"
                    name="name"
                    value={this.state.name} />
                    <br />
                    <button onClick={this.addIngredient}>Add Ingredient</button>
                    {this.state.ingredients.map((ingredient, index) => {
                        return (
                            <div  key={index}>
                                <input type="text"
                                id={index}
                                placeholder="Ingredient Name"
                                name="ingredient_name"
                                value={ingredient.ingredient_name} />
                                <input 
                                type="number"
                                fluid
                                id={index}
                                label="Qty"
                                placeholder="Quantity"
                                name="qty"
                                value={ingredient.qty} />
                                <input 
                                type="text"
                                fluid
                                id={index}
                                label="Units"
                                placeholder="Units"
                                name="units"
                                value={ingredient.units} />
                                <button onClick={()=> this.removeIngredient(index)}>Remove</button>
                            </div>
                        );
                    })}
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
                }
            }

    export default RecipeForm;

