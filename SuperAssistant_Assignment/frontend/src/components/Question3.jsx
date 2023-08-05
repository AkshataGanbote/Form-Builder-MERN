import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Question3 = () => {
    const [addQuestion, setAddQuestion] = useState([]);

    const handleAddQuestion = () => {
        const addNewQuestion = [...addQuestion, []];
        setAddQuestion(addNewQuestion);
    }

    const handleFormSubmit = (event) =>{
        event.preventDefault();
    }

    return (
        <div>
            <div className="d-flex shadow p-2 mb-4 bg-body rounded" >
                <div className="p-3 rounded" >
                    <h2 className='text-primary text-start mb-4'>Question 3 - Comprehension Question</h2>
                    <form onSubmit={handleFormSubmit}>
                        {/* Preview */}
                        <div className="mb-3 text-start">
                            <label className="form-label">
                                <strong>Passage</strong>
                            </label>
                            <textarea  
                                className="form-control"
                                type="text"
                                placeholder="Type passage here"
                                rows="5"
                            /> 
                        </div>
                        
                        {/* Default Add Question Div*/}
                        <div className="mb-3 text-start">
                            <div className="mb-2">
                                <label className="form-label">
                                    <strong>Add Question</strong>
                                </label>
                                <input 
                                    type="text"
                                    placeholder="Enter Question"
                                    className="form-control" 
                                /> 
                            </div>
                            
                            <div className="mb-3">
                                <div className="input-group mb-1">
                                    <div className="input-group-text">
                                        <input className="form-check-input" type="radio" value=""  />
                                    </div>
                                    <input type="text" className="form-control c-secondary" placeholder="Enter Option 1" />
                                </div>
                                <div className="input-group mb-1">
                                    <div className="input-group-text">
                                        <input className="form-check-input" type="radio" value=""  />
                                    </div>
                                    <input type="text" className="form-control c-secondary" placeholder="Enter Option 2" />
                                </div>
                                <div className="input-group mb-1">
                                    <div className="input-group-text">
                                        <input className="form-check-input" type="radio" value=""  />
                                    </div>
                                    <input type="text" className="form-control c-secondary" placeholder="Enter Option 3" />
                                </div>
                                <div className="input-group mb-1">
                                    <div className="input-group-text">
                                        <input className="form-check-input" type="radio" value=""  />
                                    </div>
                                    <input type="text" className="form-control c-secondary" placeholder="Enter Option 4" />
                                </div>
                                
                            </div>

                        </div>

                        {addQuestion.map((ques, i)=>{
                            return (
                              <div className="mb-3 text-start" key={i}>
                                <div className="mb-2">
                                  <label className="form-label">
                                    <strong>Add Question</strong>
                                  </label>
                                  <input
                                    type="text"
                                    placeholder="Enter Question"
                                    className="form-control"
                                  />
                                </div>

                                <div className="mb-3">
                                  <div className="input-group mb-1">
                                    <div className="input-group-text">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        value=""
                                      />
                                    </div>
                                    <input
                                      type="text"
                                      className="form-control c-secondary"
                                      placeholder="Enter Option 1"
                                    />
                                  </div>
                                  <div className="input-group mb-1">
                                    <div className="input-group-text">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        value=""
                                      />
                                    </div>
                                    <input
                                      type="text"
                                      className="form-control c-secondary"
                                      placeholder="Enter Option 2"
                                    />
                                  </div>
                                  <div className="input-group mb-1">
                                    <div className="input-group-text">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        value=""
                                      />
                                    </div>
                                    <input
                                      type="text"
                                      className="form-control c-secondary"
                                      placeholder="Enter Option 3"
                                    />
                                  </div>
                                  <div className="input-group mb-1">
                                    <div className="input-group-text">
                                      <input
                                        className="form-check-input"
                                        type="radio"
                                        value=""
                                      />
                                    </div>
                                    <input
                                      type="text"
                                      className="form-control c-secondary"
                                      placeholder="Enter Option 4"
                                    />
                                  </div>
                                </div>
                              </div>
                            );
                        })}
                        <div className="mt-4 text-start">
                            <button className="btn btn-secondary" onClick={handleAddQuestion}>Add New Question</button>
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

export default Question3