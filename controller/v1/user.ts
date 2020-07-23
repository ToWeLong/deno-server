import { Router, RouterContext } from "oak"
// import UserModel from "../../model/User.ts"
// import { Success } from "../../core/HttpException.ts"

const router = new Router({
    prefix: "/v1/user",
})

router.get("/", (ctx: RouterContext) => {
    ctx.response.body = {
        ctx: "user",
    }
})

// router.post("/", async (ctx: RouterContext) => {
//     await UserModel.create([
//       {
//         username:'fu',
//         password:'12345'
//       }
//     ])
//     throw new Success()
// })

export default router
