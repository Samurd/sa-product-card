# SA-Product-Card

This is a tests package

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "sa-product-card";
```

```
<ProductCard
          product={product}
          initialValues={{
            count: 4,
          }}
        >
          {({ reset }) => (
            <>
              <ProductImage/>
              <ProductTitle/>
              <ProductButtons/>
            </>
          )}
</ProductCard>
```