import Banner from "@/components/Banner";
import ProductList from "@/components/ProductCard/ProductList";
import { getData } from "@/helpers";

export default async function Home() {
  const endpoint = "https://dummyjson.com/products";
  const { products } = await getData(endpoint);
  return (
    <main>
      <Banner />
      <ProductList products={products} />
    </main>
  );
}
