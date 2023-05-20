import ProductCard from "../../components/product-card/product-card.components";
import {useParams} from "react-router-dom";
import {Fragment, useContext, useEffect, useState} from "react";
import {ProductsContext} from "../../contexts/products.context";
import './category.styles.scss'

function Category() {
    const {category} = useParams()
    const {categoryMap} = useContext(ProductsContext)
    const [products, setProducts] = useState(categoryMap[category])
    useEffect(() => {
        setProducts(categoryMap[category])
    }, [category, categoryMap])
    return (<Fragment>
        <h2 className='category-title'>
            {category.toUpperCase()}
        </h2>
        <div className="category-container">
            {
                products && products
                    .map(product =>
                        <ProductCard key={product.id} product={product}/>
                    )
            }
        </div>
    </Fragment>)
}

export default Category