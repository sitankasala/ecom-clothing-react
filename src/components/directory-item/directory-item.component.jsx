import './directory-item.styles.scss';
import {Link, useNavigate} from "react-router-dom";

const DirectoryItem = ({category}) => {
    const {imageUrl, title} = category;
    const navigate = useNavigate()
    const navigateHandler = () => navigate(`shop/${title}`)
    return (
        <div className='directory-item-container' onClick={navigateHandler}>
                <div
                    className='background-image'
                    style={{
                        backgroundImage: `url(${imageUrl})`,
                    }}
                />
            <div className='body'>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    );
};

export default DirectoryItem;
