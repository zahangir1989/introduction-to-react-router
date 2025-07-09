import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user = useLoaderData();
    const {name, website, phone} = user;
    return (
        <div className="text-centr">
            <h2>{name}</h2>
            <p>{website}</p>
            <p>{phone}</p>
            
        </div>
    );
};

export default UserDetails;