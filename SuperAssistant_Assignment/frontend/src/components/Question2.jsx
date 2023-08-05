import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Question2 = () => {
    const [preview, setPreview] = useState("");
    const [selectedWords, setSelectedWords] = useState([]);
    
    const handleDoubleClick = (word) => {
      setSelectedWords((prevSelectedWords) => [...prevSelectedWords, word]);
    };

    const handleFormSubmit = (event) =>{
        event.preventDefault();
    }
    
    return (
        <div>
            <div className="d-flex shadow p-2 mb-4 bg-body rounded" >
                <div className=" p-3 rounded" >
                    <h2 className='text-primary text-start mb-4'>Question 2 - Cloze Question</h2>
                    <form onSubmit={handleFormSubmit}>
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
                                value={preview}
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
                                onChange={(e) => setPreview(e.target.value)}
                                onDoubleClick={() => {
                                    const selectedWord = window.getSelection().toString().trim();
                                    if (selectedWord) {
                                        handleDoubleClick(selectedWord);
                                    }
                                }}
                            /> 
                        </div>

                        {/* Options */}
                        <div className="mb-3 text-start">
                        
                            { selectedWords.length === 0 ?(
                                    <div className="input-group mb-3">
                                        <div className="input-group-text">
                                            <input className="form-check-input" type="checkbox" />
                                        </div>
                                        <input className="form-control c-secondary" placeholder="Option 1" />
                                    </div>
                                ) : (
                                    selectedWords.map((word, index)=>(
                                        <div className="mb-3 text-start" key={index}>
                                            <div className="input-group mb-3">
                                                <div className="input-group-text">
                                                    <input className="form-check-input" type="checkbox" />
                                                </div>
                                                <input className="form-control c-secondary" value={word} readOnly/>
                                            </div>
                                        </div>
                                    ))
                                    
                                )
                            }
                            
                        </div>
                    
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Question2