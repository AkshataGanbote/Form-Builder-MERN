import 'bootstrap/dist/css/bootstrap.min.css';

const Question2 = () => {
    return (
        <div>
            <div className="d-flex shadow p-2 mb-4 bg-body rounded" >
                <div className=" p-3 rounded" >
                    <h2 className='text-primary text-start mb-4'>Question 2 - Cloze Question</h2>
                    <form >
                        {/* Preview */}
                        <div className="mb-3 text-start">
                            <label className="form-label">
                                <strong>Preview<span style={{color : 'red'}}>*</span></strong>
                            </label>
                            <input 
                                className="form-control"
                                readOnly
                                type="text"
                                contentEditable="false"
                                placeholder="See preview"
                                // value={preview}

                            /> 
                        </div>
                        
                        {/* Sentence */}
                        <div className="mb-3 text-start">
                            <label className="form-label">
                                <strong>Sentence</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Double click any word to convert them into blanks"
                                className="form-control" 

                            /> 
                        </div>

                        {/* Options */}
                        <div className="mb-3 text-start">
                            <div className="input-group mb-3">
                                <div className="input-group-text">
                                    <input className="form-check-input" type="checkbox" value=""  />
                                </div>
                                <input type="text" className="form-control c-secondary" placeholder="Option 1" />
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

export default Question2