# JD-Product-Card

este es un paquete de pruebas de despliegue en NPM

### David Agámez

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jd-product-card';
```

```
<ProductCard
  product={product}
  initialValues={{
					count: 4,
					maxCount: 10,
				}}>
{
  ({ reset, increaseBy, count, maxCount, isMaxCountReached }) => (
      <>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
      </>
  )
}
</ProductCard>
```
