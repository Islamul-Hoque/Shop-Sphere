import Container from "@/components/Container";
import ProductImages from "@/components/DetailsPage/ProductImages";
import { getData } from "@/helpers";
import { ProductType } from "../../../../type";

interface Props {
    params: {
        id: string;
    };
}

const SingleProductPage = async ({ params }: Props) => {
    const { id } = await params

    const endpoint = `https://dummyjson.com/products/${id}`
    const product: ProductType = await getData(endpoint)

    return (
        <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <ProductImages images={product.images} />
            {/* Product Details */}
            {/* Product Reviews */}
        </Container>

    )
}

export default SingleProductPage;