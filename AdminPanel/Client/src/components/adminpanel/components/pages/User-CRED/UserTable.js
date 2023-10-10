import React, { useContext, useEffect, useState } from 'react'
import { EditSwitch } from '../../Switch';
import UserContext from '../../../context/UserContext';
import * as bi from 'react-icons/bi';
import Loading from '../../../../alert/Loading';
import { useNavigate } from 'react-router-dom';
import DeleteModal from '../../modals/DeleteModal';

function UserTable() {

    const context = useContext(UserContext)
    const [state, setState] = useState('');
    const [user, setUser] = useState('');
    const [variable
        // eslint-disable-next-line
        , setVariable] = useState(null);
    const [showModal, setShowModal] = useState({ set: false, id: '', admin: '' }); // Add state variable and setter function

    let navigate = useNavigate();

    const onchange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value });

    }

    const debounce = (fn, delay) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => fn(...args), delay);
        };
    };
    const { isAdmin } = context

    const Data = debounce(async () => {
        const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/auth/fetchusers?variable=${variable}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token':sessionStorage.getItem('token') || localStorage.getItem('token')
            },

        });

        const json = await response.json()
        if (json.success) {
            return setUser(json.users)
        }
        else {
            return setUser({ ...user, error: json.error })
        }
    }, 1000)

    useEffect(() => {
        Data();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [variable]);

    if (!user) {
        return (
            <>
                <Loading/>
            </>
        )
    }

    return (
        <>
            <div className='container mt-5 pt-5'>

                <div className={`d-flex justify-content-${isAdmin.isadmin === 0 || isAdmin.isadmin === 1 ? "between" : 'end'} between mb-3`}>
                    {
                        isAdmin.isadmin === 0 || isAdmin.isadmin === 1
                            ?
                            <div>
                                <button className=' add-user' onClick={() => navigate("../create-user")}>+ User</button>
                            </div>
                            : ""
                    }
                    <div >
                        <input className='textinput' onChange={onchange} name='search' /> <bi.BiSearch />
                    </div>
                </div>
                <div style={{ overflowX: "scroll" }}>
                    <table className="table table-responsive table-bordered trainer-table">
                        <thead className="thead">
                            <tr className='text-start'>
                                <th scope="col" >Username</th>
                                <th scope="col"  >Email</th>
                                <th scope="col" >Status</th>
                                <th scope="col" >Role</th>
                                {
                                    isAdmin.isadmin === 0 || isAdmin.isadmin === 2 ?
                                        <>
                                            <th scope="col" >Actions</th>
                                        </>
                                        : ''
                                }

                            </tr>
                        </thead>
                        <tbody className='text-start'>
                            {
                                Array.isArray(user)
                                    // eslint-disable-next-line 
                                    ? user.filter((val) => {
                                        if (state === "") {
                                            return val;
                                        }
                                        if (val.username.toLowerCase().includes(state.search.toLowerCase())) {
                                            return val;
                                        } else {
                                            return null;
                                        }
                                    }).map((ele, index) => (
                                        <tr key={ele._id}>
                                            <td className='align-middle' component="th" >{ele.username}</td>
                                            <td className='align-middle' >{ele.email}</td>
                                            <td className='align-middle' >{ele.userStatus}</td>

                                            <td className='align-middle' >
                                                {
                                                    ele.isadmin === 0 ? <span>Super Admin</span>
                                                        : ele.isadmin === 1 ? <span>Editor Admin</span>
                                                            : ele.isadmin === 2 ? <span>viewer</span>
                                                                : ele.isadmin === 3 ? <span>sales</span>
                                                                    : ele.isadmin === 4 ? <span>Publisher</span>
                                                                        : ""
                                                }
                                            </td>

                                            {
                                                isAdmin.isadmin === 0 || isAdmin.isadmin === 2 ?
                                                    <>
                                                        <td align="center">
                                                            {
                                                                ele._id === isAdmin._id
                                                                    ? "You" :
                                                                    isAdmin.isadmin === 2 || isAdmin.isadmin === 0
                                                                        ?
                                                                        <>
                                                                            <EditSwitch prop={ele._id} /> &nbsp;&nbsp;&nbsp;
                                                                            <bi.BiTrash className="text-danger" cursor="pointer" data-toggle="tooltip" data-placement="bottom" title="Delete" onClick={() =>
                                                                                setShowModal({ set: true, id: ele._id, admin: isAdmin.isadmin })} />
                                                                        </>
                                                                        : ''
                                                            }
                                                        </td>
                                                    </>
                                                    : ''
                                            }
                                        </tr>
                                    )) :
                                    <h1>
                                        Internal problem
                                    </h1>
                            }{showModal.set && <DeleteModal showModal={showModal.set} setShowModal={setShowModal} message={"Do you want to delete the User ?"} modal_id={1} _id={showModal.id} admin={showModal.admin} />}

                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}


export default UserTable;
