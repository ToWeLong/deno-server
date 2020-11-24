import { Application, green } from "./deps.ts"
import registerRouter from "./core/registerRouter.ts"

import logger from "./middleware/logger.ts"
import catchError from "./middleware/exception.ts"
import json from "./middleware/json.ts"


const app = new Application()

app.use(json)
app.use(logger)
app.use(catchError)
await registerRouter(app)

console.log(green("The server run with http://localhost:8000"))

await app.listen({ port: 8000 })
