import { Context } from "oak"

const json = async (ctx: Context, next: Function) => {
    ctx.state.json = ctx.response.body
    // ctx.json = ctx.state.json
    await next()
}

export default json
