import React, { useState } from "react";
import { toast } from 'react-toastify';

const Changerule = () => {

    const [email, setEmail] = useState('');
    const [newRole, setNewRole] = useState('');
    const [confirmRole, setConfirmRole] = useState('');
    const [showRole, setShowRole] = useState(false);

    const toggleShowRole = () => {
        setShowRole(!showRole);
    }

    const changeRule = async (e) => {
        e.preventDefault();

        try {
            let result = await fetch("https://www.api.jigsawplanet.online/changerule", {
                method: "post",
                body: JSON.stringify({ email, newRole, confirmRole }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await result.json();

            if (result.ok) {
                toast.success("User Role Reset Successfully..!!");
            } else {
                toast.error("User Email or Role do not match..!!");
            }
        } catch (error) {
            console.error("Error during Changing Role:", error);
            alert("An error occurred. Please try again.");
        }
    }

    return (
        <div className="my-4">
            <div className="container mt-4 w-50">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card-group mb-0">
                            <div className="card p-4">
                                <div className="card-body">
                                    <h3>Change Rule</h3>
                                    <div className="input-group mb-3">
                                        <span className="input-group-addon"><i className="fa fa-user" /></span>
                                        <input
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            name="email"
                                            className="form-control"
                                            placeholder="User email"
                                        />
                                    </div>
                                    <div className="input-group mb-4">
                                        <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                        <input
                                            type={showRole ? "text" : "password"}
                                            onChange={(e) => setNewRole(e.target.value)}
                                            name="role"
                                            className="form-control"
                                            placeholder="New Role"
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={toggleShowRole}
                                        >
                                            {showRole ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                    <div className="input-group mb-4">
                                        <span className="input-group-addon"><i className="fa fa-lock" /></span>
                                        <input
                                            type={showRole ? "text" : "password"}
                                            onChange={(e) => setConfirmRole(e.target.value)}
                                            name="role"
                                            className="form-control"
                                            placeholder="Confirm New Role"
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={toggleShowRole}
                                        >
                                            {showRole ? "Hide" : "Show"}
                                        </button>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <button
                                                onClick={changeRule}
                                                type="button"
                                                className="button text-center"
                                            >
                                                Change Rule
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Changerule;