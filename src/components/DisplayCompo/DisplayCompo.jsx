import './DisplayCompo.css';
export function DisplayCompo(props){
    const {name,age} = props;

    return(
        <div className="display-container">
            <h2>User Information</h2>
            <p className="user-name">Name:{name}</p>
            <p className='user-age'>Age:{age}</p>
        </div>
    );
}



