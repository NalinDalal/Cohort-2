import { useNavigate } from "react-router-dom"
export default function Dashboard() {   // default keyword suggest that this should be exported
    const navigate = useNavigate();
    function handleClick(){
        navigate('/')
    };
    return <div>
        Dashboard
        <button onClick={handleClick}>Click to navigate</button>
    </div>
}