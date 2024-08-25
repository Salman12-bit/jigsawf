import React, { useState } from 'react';
import "./dashboard.css"
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';



const Dashboard = () => {

    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [file, setFile] = useState('');
    const [content, setContent] = useState('')


    const navigatetohome = useNavigate();

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
    };


    const handleUpload = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        const formData = new FormData();
        formData.append("title", title);
        formData.append("summary", summary);
        if (file) { // Check if file is present
            formData.append("image", file);
        }
        formData.append("content", content);

        console.log(formData)
        const response = await fetch("https://www.api.jigsawplanet.online/upload", {
            method: "POST",
            body: formData
        });
        const data = await response.json();

        if (data) {
            toast.success("User Article Post Successfully..!!")
            navigatetohome("/")
        }
    };

    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='welcome'>
                        <div className='postion'>
                            <img className='img3 mt-5' src='./images/Dashboard.jpg' alt='imgess' />
                            <div className='tex'>
                                <p>Welcome on Salman Developer Dashboard </p>
                                <p>This is my First website Which I make my Own hand. With lot of dificulties and lot of ignorance.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <form>
                        <div className="dasharea">
                            <div className="">
                                <div className="col-sm-12 col-md-9 col-lg-6">
                                    <form>
                                        <div>
                                            <label><h3 className='tit'>Title </h3></label>
                                            <textarea value={title} onChange={(e) => setTitle(e.target.value)} className="form-control1" type="text" name="title" />
                                        </div>
                                        <div>
                                            <label><h3 className='tit'>Summary </h3></label> <br />
                                            <textarea onChange={(e) => setSummary(e.target.value)} className="form-control1" type="text" name="summary" />
                                        </div>
                                        <div className='mt-3'>
                                            <input onChange={handleFileChange} className="form-control1" type="file" name="image" />
                                        </div>
                                        <div>
                                            <label><h3 className='tit'>Content </h3></label> <br />

                                            <textarea onChange={(e) => setContent(e.target.value)} className="form-control1" type="text" name="content" />
                                        </div>
                                        <div className="text-center">
                                            <Link to="/"><button onClick={handleUpload} className="button my-3"> Post Article </button></Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>


        </div>
    );
};

export default Dashboard;
    