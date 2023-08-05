import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Question1 = () => {
    
    const [addItem, setAddItem] = useState([]);
    const [addCategory, setaddCategory] = useState([]);

    const handleAddIem = () => {
        const newItem = [...addItem, []];
        setAddItem(newItem);
    }

    const handleAddCategory = () => {
        const newCategory = [...addCategory, []];
        setaddCategory(newCategory);
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
    }

    return (
        <div>
            <div className="d-flex shadow p-2 mb-4 bg-body rounded" >
                <div className="bg-white p-3 rounded">
                    <h2 className='text-primary text-start mb-4'>Question 1 - Categorize Question</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="mb-3 text-start">
                            <input 
                                type="text"
                                placeholder="Description (Optional)"
                                className="form-control" 
                                id="q1-description" 
                            /> 
                        </div>

                        {/* Default Categorie Div */}
                        <div className="mb-3 text-start">
                            <label className="form-label">
                                <strong>Categories</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Category 1"
                                className="form-control" 
                                id="q1-cat" 

                            /> 
                        </div>

                        {/* Adding Categorie Div On Clicking Button */}
                        {addCategory.map((cat, i)=>{
                            return(
                                <div className="mb-3 text-start" key={i}>
                                    <input 
                                        type="text"
                                        placeholder= {`Category ${i+2}`}
                                        className="form-control" 
                                        id="q1-cat" 
                                    />
                                </div> 
                            )
                        })}
                        <div className="my-4 text-start">
                            <button className="btn btn-secondary" onClick={()=>handleAddCategory()}>Add Category</button>
                        </div>

                        {/* Default Item Div*/}
                        <div className="mb-2 text-start d-flex flex-row justify-content-between">
                            <div id='q1-items-div'>
                                <label className="form-label">
                                    <strong>Items</strong>
                                </label>
                                <input 
                                    type="text"
                                    placeholder="Item 1"
                                    className="form-control" 
                                    id="q1-cat" 

                                /> 
                            </div>
                            <div id='q1-cat-select-div'>
                                <label className="form-label">
                                    <strong>Belongs To</strong>
                                </label>
                                <select className="form-select" aria-label="Default select example">
                                    <option value="1">Category 1</option>
                                    <option value="2">Category 2</option>
                                    <option value="3">Category 3</option>
                                </select>
                            </div>
                        </div>

                        {/*  Adding Items Div On Clicking Button */}
                        {addItem.map((item, i)=>{
                            return (
                                <div className="mb-2 text-start d-flex flex-row justify-content-between" key={i}>
                                    <div id='q1-items-div'>
                                        <input
                                            type="text"
                                            placeholder= {`Item ${i+2}`}
                                            className="form-control"
                                            id="q1-cat"

                                        />
                                    </div>
                                    <div id='q1-cat-select-div'>
                                        <select className="form-select" aria-label="Default select example">
                                            <option value="1">Category 1</option>
                                            <option value="2">Category 2</option>
                                            <option value="3">Category 3</option>
                                        </select>
                                    </div>
                                </div>
                            )
                        })}

                        <div className="mt-4 text-start">
                            <button className="btn btn-secondary" onClick={handleAddIem}>Add Item</button>
                        </div>

                        <div className="mt-4 text-start">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Question1