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
            toast.error("Please Write Your Comment");
            return false;
        }
        if (rating === 0) {
            toast.error("Please Select a Rating");
            return false;
        }
        return true;
    };

    const handleComment = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        let comresult = await fetch("https://www.api.jigsawplanet.us/usercomment", {
            method: "post",
            body: JSON.stringify({ comment, rating }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        const commentdata = await comresult.json();

        if (commentdata) {
            toast.success("Thank You For Your Valuable Comment..:)");
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
            console.error("Error fetching comments:", error);
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
            console.error("Error fetching articles:", error);
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
                toast.success("Record Deleted Successfully..!!");
                ArticleList();
            } else {
                toast.error("No Record Available Successfully..!!");
            }
        } catch (error) {
            console.error("Error deleting article:", error);
            alert("Error deleting article");
        }
    };

    const deleteUserRating = async (id) => {
        try {
            let result = await fetch(`https://www.api.jigsawplanet.online/delrating/${id}  `, {
                method: "DELETE",
            });
            let data = await result.json();
            if (result.ok) {
                toast.success("Rating Deleted Successfully..!!");
                CommentList();
            } else {
                toast.error("No Record Available Successfully..!!");
            }
        } catch (error) {
            console.error("Error deleting article:", error);
            alert("Error deleting article");
        }
    };

    return (
        <div className="container my-5 color-selection">
            <div className="row justify-content-center  ">
                {userart.map((ele) => (
                    <div key={ele._id} className="col-lg-3 col-md-6 card3 col-sm-12 mx-4 my-3">
                        <div className="product-grid">
                            <div className="product-content">
                                <h4>{ele.title}</h4>
                            </div>
                            <div>
                                <img className="winner" src={`https://www.api.jigsawplanet.online/uploads/${ele.file}`} alt={ele.title} />
                            </div>
                        </div>
                        {nextAuth === 'admin' && (
                            <button onClick={() => deleteUser(ele._id)} className="btn btn-dark my-4">Delete</button>
                        )}
                    </div>
                ))}
            </div>
            <div className="rating my-4">
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="comment mt-4" type="text" name="summary" placeholder="Write Your Name and Comment Here" />
                <StarRating rating={rating} setRating={setRating} />
                <Link><button onClick={handleComment} className="save-comment button button my-3">Save</button></Link>
            </div>
            <div className="row justify-content">
                {getcomment.map((ele) => (
                    <div key={ele._id}>
                        <div className="get-comment-section">
                            <h5>{ele.comment}</h5>
                            <StarRating rating={ele.rating} readonly={true} />
                            {nextAuth === 'admin' && (
                                <button onClick={() => deleteUserRating(ele._id)} className="btn btn-dark my-4">Delete</button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            {nextAuth === 'admin' && (
                <Link to="/changerule">
                    <button className="button my-2">Change Rule</button>
                </Link>
            )}
        </div>
    );
};

export default Home;