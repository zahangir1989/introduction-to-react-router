import { Link, useNavigate } from "react-router-dom";


const Post = ({post}) => {
    const {id, title} = post;

    const navigate = useNavigate();

     const postStyle ={
        border:"2px solid blue",
        padding:"5px",
        borderRadius: '20px',
    }
    const handelDetails = () =>{
    navigate(`/post/${id}`)
    }

    return (
        <div style={postStyle}>
            <h2>{id}</h2>
            <p>{title}</p>
           <Link to={`/post/${id}`}>Post Detail</Link>
           <button onClick={handelDetails}>Click Details</button>
            
        </div>
    );
};

export default Post;