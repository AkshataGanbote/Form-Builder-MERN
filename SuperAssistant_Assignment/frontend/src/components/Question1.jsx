import 'bootstrap/dist/css/bootstrap.min.css';

const Question1 = () => {
    return (
        <div>
            <div className="d-flex shadow p-2 mb-4 bg-body rounded" >
                <div className="bg-white p-3 rounded">
                    <h2 className='text-primary text-start mb-4'>Question 1 - Categorize Question</h2>
                    <form >
                        <div className="mb-3 text-start">
                            <input 
                                type="text"
                                placeholder="Description (Optional)"
                                className="form-control" 
                                id="q1-description" 
                            /> 
                        </div>
                        {/* Categories */}
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
                            {/* <input 
                                type="text"
                                placeholder="Cat 2"
                                className="form-control" 
                                id="q1-cat" 

                            /> 
                            <input 
                                type="text"
                                placeholder="Category 3 (Optional)"
                                className="form-control" 
                                id="q1-cat" 

                            />  */}
                        </div>
                        {/* Items */}
                        <div className="mb-3 text-start d-flex flex-row justify-content-between">
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
                                    <option value="3">Category 2</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-4 text-start">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Question1