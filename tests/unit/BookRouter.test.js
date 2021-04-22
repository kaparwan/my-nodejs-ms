const app = require("../../src/app");
const request = require("supertest");


test("listBooks Route ", async ()=>{
    const response = await request(app).get("/api/book/list").expect(200);
})

test("addBooks Route", async()=>{
    const response = await request(app).post("/api/book/add").send(
        {
            title:"Harry Potter",
            description:"Description",
            qty:10,
            price:10
        }
        ).expect(201);
})

test("deleteBooks Route", async()=>{
    const response = await request(app).delete("/api/book/delete/123").expect(200);
})