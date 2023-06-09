import './shop.styles.scss'
import {Route, Routes} from "react-router-dom";
import CategoriesPreview from "../../routes/categories-preview/categories-preview.components";
import Category from "../../routes/category/category.components";

const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    );
};

export default Shop