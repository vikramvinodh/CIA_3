import React, { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {
    const url = `${process.env.REACT_APP_SERVER_URL}`
    const [user, setUser] = useState('');
    const [data, setData] = useState('');
    const [isAdmin, setIsAdmin] = useState('');


    const Data = async () => {
        const response = await fetch(`${url}/auth/fetchusers`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

        });

        const json = await response.json()
        if (json.success) {
            return setUser(json.users)
        }
        else {
            return setUser({ ...user, error: json.error })
        }
    }

    // edit profile section

    const editProfile = async (id, username, isadmin, userStatus) => {
        const respons = await fetch(`${url}/auth/updateprofile/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, username, isadmin, userStatus })
        });

        if (respons.success) {
            return 1;
        } else {
            return 0;
        }

    }
    // end edit profile section

    //start of fetching profile
    const IsAdmin = async (token) => {
        const response = await fetch(`${url}/auth/get-admin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'auth-token': token
            },
        });
        const adminData = await response.json();
        setIsAdmin(adminData.user)
    }
    // end of fetching


    //start of fetching profile
    const UserProfile = async (id) => {
        const response = await fetch(`${url}/auth/userdata/${id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
        });
        const pdata = await response.json();
        setData(pdata.user)
        return
    }
    // end of fetching

    return (
        <UserContext.Provider value={{ user, Data, editProfile, UserProfile, isAdmin, IsAdmin, data }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;