import Container from "@/components/Container";
import ProductImages from "@/components/DetailsPage/ProductImages";
import { getData } from "@/helpers";
import { ProductType } from "../../../../type";
import ProductPrice from "@/components/ProductCard/ProductPrice";
import { MdStar } from "react-icons/md";

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

            {/* Product details */}
            <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">{product?.title}</h2>
                <div className="flex items-center justify-between gap-5">
                    <ProductPrice product={product} />

                    <div className="flex items-center gap-1">
                        <div className="text-base text-lightText flex items-center">
                            {Array?.from({ length: 5 })?.map((_, index) => {
                                const filled = index + 1 <= Math.floor(product?.rating);
                                const halfFilled = index + 1 > Math.floor(product?.rating) &&  index < Math.ceil(product?.rating);

                                return (  <MdStar key={index} className={`${filled ? "text-[#fa8900]"  : halfFilled ? "text-[#f7ca00]"  : "text-gray-600"  }`} />   )
                            })}

                        </div>
                        <p className="text-base font-semibold">
                            {`(${product?.rating?.toFixed(1)} reviews)`}
                        </p>
                    </div>

                </div>
            </div>

            {/* Product Reviews */}

        </Container>

    )
}

export default SingleProductPage;
