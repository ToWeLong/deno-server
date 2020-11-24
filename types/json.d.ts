import { Context, RouteParams, RouterContext, State} from "oak"

type Body =
    | string
    | number
    | bigint
    | boolean
    | symbol
    | object
    | undefined
    | null
type BodyFunction = () => Body | Promise<Body>

declare module "oak" {
    export interface RouterContext{
        json: any
    }
    export interface Context{
        json: any
    }
}

