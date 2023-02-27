import { ApiAuthor } from './api/api-product_model';
import { Author } from 'src/app/core/services/products/product.model';

export function transformAuthor(ApiAuthor: ApiAuthor): Author {
    return ApiAuthor;
  }