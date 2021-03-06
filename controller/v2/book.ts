import { Router, RouterContext,Context } from "oak";
import Validator from "../../core/validator.ts";
import { NotFound } from "../../core/HttpException.ts";

const router = new Router({
  prefix: "/v2/book",
});

router.get("/", (ctx: RouterContext) => {
  const h:string = "hello2"
  const h1:string = ",world!!!"

  ctx.state.json = {
    success:"true"
  }

  console.log(ctx.state.json);
  
});

router.get("/hello", (ctx: RouterContext) => {
  // throw new NotFound()
  ctx.response.body = {
    ctx: ctx.state.json.success,
  };
});

router.get("/:id/search", async (ctx: RouterContext) => {

  const v = await new Validator().validate(ctx);
  // console.log(ctx.state.v.data);
  
  ctx.response.body = {
    "URL": v.get("path"),
    "queryId": v.get("query.id"),
    "queryName": v.get("query.name"),
    "bodyId": v.get("body.id"),
    "bodyBookName": v.get("body.book_name"),
    "pathParamsId": v.get("pathParams.id")
  }

});

router.get("/:id", (ctx: RouterContext) => {
  console.log(ctx);
  ctx.response.body = {
    book_id: ctx.params.id,
  };
});

router.post('/',async ctx=>{
  const v = await new Validator().validate(ctx);
  ctx.response.body = {
    id:v.get('body.bookId'),
    name:v.get("body.bookName")
  }
})

router.put('/',async ctx=>{
  const v = await new Validator().validate(ctx);
  ctx.response.body = {
    id:v.get('body.bookId'),
    name:v.get("body.bookName")
  }
})

export default router;
