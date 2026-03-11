import Container from "./Container";
import Image from "next/image";
import ProductCard from "./ProductCard";


const ProductList = ({ products }) => {
    return (
        <Container>
            {products?.map((item) => (
                <ProductCard key={item?.id} product={item} />
            ))}
        </Container>
    );
};

export default ProductList;
