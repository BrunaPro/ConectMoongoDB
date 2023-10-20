import express from 'express'
    import ProductCtrl from '../controllers/user.controller.js' 
    const router = express.Router()
    router.route('/api/Product') 
    .get(ProductCtrl.list)
    .post(ProductCtrl.create)
    router.route('/api/Product/:ProductId') 
    .get(ProductCtrl.read)
    .put(ProductCtrl.update) 
    .delete(ProductCtrl.remove)
router.param('ProductId', ProductCtrl.ProductByID)
router.route('/api/Product').post(ProductCtrl.create) 
router.route('/api/Product').get(ProductCtrl.list)
router.param('ProductId', ProductCtrl.ProductByID)
router.route('/api/Product/:ProductId').get(ProductCtrl.read)
router.route('/api/Product/:ProductId').put(ProductCtrl.update)
router.route('/api/Product/:ProductId').delete(ProductCtrl.remove)
router.route('/api/Product').delete(ProductCtrl.remove)

export default router