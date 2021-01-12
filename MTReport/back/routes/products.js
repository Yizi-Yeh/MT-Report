import express from 'express'
import { file } from '../imgupload.js'
import { uploadProduct, editProduct, deleteeProduct, searchProduct, searchProductById } from '../controllers/products.js'

const router = express.Router()

router.post('/', uploadProduct)
router.put('/:id', editProduct)
router.delete('/:id', deleteeProduct)
router.get('/', searchProduct)
router.get('/:id', searchProductById)

// images
router.get('/file/:file', file)

export default router

// updateProduct() {
//   let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product`; // 'http://localhost:3000/api/casper/products';
//   let httpMethod = 'post';
//   const vm = this;
//   if (!vm.isNew) {
//     api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/product/${vm.tempProduct.id}`;
//     httpMethod = 'put';
//   }
//   console.log(process.env.APIPATH, process.env.CUSTOMPATH);
//   this.$http[httpMethod](api, { data: vm.tempProduct }).then((response) => {
//     console.log(response.data);
//     if (response.data.success) {
//       $('#productModal').modal('hide');
//       vm.getProducts();
//     } else {
//       $('#productModal').modal('hide');
//       vm.getProducts();
//       console.log('新增失敗');
//     }
//     // vm.products = response.data.products;
//   });
// },
