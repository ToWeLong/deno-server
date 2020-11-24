import { RouterContext } from "oak"
import { Application } from "oak"

const json = (app: Application, ctx: RouterContext) => {
    app.state.json = ctx.response.body
}

export default json
