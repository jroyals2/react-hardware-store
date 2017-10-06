import React, { Component } from 'react';

class AdminForm extends Component {
    constructor() {
        super()

        this.state = {
            newForm: {
                productName: '',
                price: '',
                description: ''
            }
        }
    }

    handleChange = (event) => {
        // Cloning a new object
        console.log(event.target.value)
        console.log(event.target.name)
        // spread operator the spread operator allows you to create a new object
        const newForm = {...this.state.newForm}
        // Using braces syntax to select object key
        newForm[event.target.name] = event.target.value
        // take cloned object and apply it to the existing state
        this.setState({newForm: newForm})
    }
    render() {
        return (
            <div>
             <form >
                <div>
                    {/* value is equal to what we want to change in state
                        name is equal to the key we want to edit in the object
                        onChange is the event listener that updates state with a users input */}
                    <input onChange={this.handleChange} name="productName" type="text" placeholder="Name" value={this.state.newForm.productName}/>
                </div>
                <div>
                    <input onChange={this.handleChange} name="price" type="text" placeholder="Price" value={this.state.newForm.price}/>
                </div>
                <div>
                    <input onChange={this.handleChange} name="description" type="text" placeholder="Description" value={this.state.newForm.description}/>
                </div>
                <div>
                    <button>Create A Product</button>
                </div>
            </form>
            </div>
        );
    }
}

export default AdminForm;