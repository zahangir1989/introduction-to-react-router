import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetail = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const {id, title, body} = post;

    const handleGoBack = () =>{
    navigate(-1);
    }
    return (
        <div>
            <h3>Post Detail:{id}</h3>
            <p>Title:{title}</p>
            <p><smal>{body}</smal></p>
            <button onClick={handleGoBack}>go back</button>
            
        </div>
    );
};

export default PostDetail;