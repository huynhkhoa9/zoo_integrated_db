const controller = require('../controllers/auth.controller');
const router = require('express').Router()

router.post("/api/auth/signin", controller.signin)
router.post("/api/auth/signup", controller.signup)
router.post("/api/auth/employeesignin", controller.employeesignin)
router.post("/api/auth/addanimal", controller.addanimal)
router.post("/api/auth/addemployee", controller.addemployee)
router.post("/api/auth/addrevenue", controller.addrevenue)
router.post("/api/auth/getAnimals", controller.getAnimals)

router.post("/api/auth/animalReport", controller.animalReport)
router.post("/api/auth/employeeReport", controller.employeeReport)
router.post("/api/auth/getRevenue", controller.getRevenue)

router.post("/api/auth/checkEmail", controller.checkEmail)
router.post("/api/auth/checkIdEmployee", controller.checkIdEmployee)
router.post("/api/auth/checkIdAnimal", controller.checkIdAnimal)

router.post("/api/auth/updateAnimal", controller.updateAnimal)
router.post("/api/auth/deleteAnimal", controller.deleteAnimal)

router.post("/api/auth/updateEmployee", controller.updateEmployee)
router.post("/api/auth/deleteEmployee", controller.deleteEmployee)

router.get("/api/auth/showAnimals", controller.showAnimals)
module.exports = router;
