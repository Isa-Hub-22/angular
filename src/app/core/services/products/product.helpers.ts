import { ApiProduct } from "./api/api-product_model";
import { Product } from "./product.model";

export function transformProduct(apiProduct: ApiProduct): Product {
    delete apiProduct.createdAt;
    return apiProduct;
}