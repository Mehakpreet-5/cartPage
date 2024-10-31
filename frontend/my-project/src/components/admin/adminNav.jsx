import React from 'react'
import { Link } from 'react-router-dom'
function adminNav() {
    return (
        <div>


            <div className=" bg-slate-200 bg-opacity-30 w-40 mt-32 m-4 ">

                <ul className="  text-orange-500 p-4 h-full m-4 space-y-2 play text-xl cursor-pointer">

                    <li><Link to="/admin/users" >Users</Link></li> <hr />
                    <li> <Link to="/admin/orders">Orders</Link></li> <hr />
                    <li> <Link to="/admin/list"> List</Link></li>

                </ul>
            </div>

        </div>

    )
}

export default adminNav
