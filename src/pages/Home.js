import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import StarRating from "./StarRating"; // Assuming you have a StarRating component

const Home = () => {
    const [userart, setUserart] = useState([]);
    const [nextAuth, setNextAuth] = useState(null);
    const [comment, setComment] = useState("");
    const [rating, setRating] = useState(0);
    const [getcomment, setGetComment] = useState([]);

    const validateForm = () => {
        if (!comment) {
            toast.error("Please Write Your Comment", { className: 'toast-custom' });
            return false;
        }
        if (rating === 0) {
            toast.error("Please Select a Rating", { className: 'toast-custom' });
            return false;
        }
        return true;
    };

    const handleComment = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        let comresult = await fetch("https://www.api.jigsawplanet.online/usercomment", {
            method: "post",
            body: JSON.stringify({ comment, rating }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const commentdata = await comresult.json();

        if (commentdata) {
            toast.success("Thank You For Your Valuable Comment..:)", { className: 'toast-custom' });
            setComment("");
            setRating(0);
            CommentList();
        }
    };

    const CommentList = async () => {
        try {
            let artresult = await fetch("https://www.api.jigsawplanet.online/getusercomment");
            artresult = await artresult.json();
            setGetComment(artresult);
        } catch (error) {
            console.error("Error fetching comments:", error, { className: 'toast-custom' });
        }
    };

    useEffect(() => {
        CommentList();
    }, []);

    useEffect(() => {
        const auth = localStorage.getItem('key');
        if (auth) {
            try {
                const parsedAuth = JSON.parse(auth);
                setNextAuth(parsedAuth.role);
            } catch (error) {
                console.error(error);
            }
        }
    }, []);

    const ArticleList = async () => {
        try {
            let artresult = await fetch("https://www.api.jigsawplanet.online/article");
            artresult = await artresult.json();
            console.log(artresult);
            setUserart(artresult);
        } catch (error) {
            console.error("Error fetching articles:", error, { className: 'toast-custom' });
        }
    };

    useEffect(() => {
        ArticleList();
    }, []);

    const deleteUser = async (id) => {
        try {
            let result = await fetch(`https://www.api.jigsawplanet.online/delarticle/${id}`, {
                method: "DELETE",
            });
            let data = await result.json();
            if (result.ok) {
                toast.success("Record Deleted Successfully..!!", { className: 'toast-custom' });
                ArticleList();
            } else {
                toast.error("No Record Available Successfully..!!", { className: 'toast-custom' });
            }
        } catch (error) {
            console.error("Error deleting article:", error, { className: 'toast-custom' });
            alert("Error deleting article", { className: 'toast-custom' });
        }
    };

    const deleteUserRating = async (id) => {
        try {
            let result = await fetch(`https://www.api.jigsawplanet.online/delrating/${id}  `, {
                method: "DELETE",
            });
            let data = await result.json();
            if (result.ok) {
                toast.success("Rating Deleted Successfully..!!", { className: 'toast-custom' });
                CommentList();
            } else {
                toast.error("No Record Available Successfully..!!", { className: 'toast-custom' });
            }
        } catch (error) {
            console.error("Error deleting article:", error, { className: 'toast-custom' });
            alert("Error deleting article", { className: 'toast-custom' });
        }
    };

    return (
        <div className="container my-5">
            <div className="home-color">
                <div className="row">
                    {userart.map((ele) => (
                        <div key={ele._id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <div className="card">
                                <img
                                    className="card-img-top"
                                    src={`https://www.api.jigsawplanet.online/uploads/${ele.file}`}
                                    alt={ele.title}
                                />
                                <div className="card-body">
                                    <h5 className="card-title">{ele.title}</h5>
                                    {nextAuth === 'admin' && (
                                        <button onClick={() => deleteUser(ele._id)} className="btn btn-danger">
                                            Delete
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="rating my-4">

                    {/* Comment Box and Save Button */}
                    <div className="row">
                        <div className="comment-center">
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="form-control mt-2" style={{ height: 100}}
                                type="text"
                                name="summary"
                                placeholder="Write Your Name and Comment Here"
                            />
                        </div>
                        <div className="star-rating my-2">
                            <div className="col-12">
                                <StarRating rating={rating} setRating={setRating} />
                            </div>
                        </div>
                        <div className="col-12">
                            <Link>
                                <button onClick={handleComment} className="btn btn-danger my-2">
                                    Save
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div>
                    {getcomment.map((ele) => (
                        <div key={ele._id} className="col-lg-3 col-md-6 col-sm-12 mb-4">
                            <div className="card">
                                <div className="card-body">
                                    <h6>{ele.comment}</h6>
                                    <StarRating rating={ele.rating} readonly={true} />
                                    {nextAuth === 'admin' && (
                                        <button onClick={() => deleteUserRating(ele._id)} className="btn btn-danger mt-2">
                                            Delete
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {nextAuth === 'admin' && (
                    <Link to="/changerule">
                        <button className="btn btn-danger my-4">Change Rule</button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Home;