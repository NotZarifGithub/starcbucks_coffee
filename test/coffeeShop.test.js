const request = require("supertest");
const app = require("../server"); // Update with your actual app file

describe("Coffee Shop API", () => {
  it("should fetch all coffee shops", async () => {
    const res = await request(app).get("/api/coffeeshops");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });

  it("should fetch a single coffee shop by ID", async () => {
    const res = await request(app).get("/api/coffeeshops/2");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("name");
  });

it("should create a new coffee shop", async () => {
  const res = await request(app)
    .post("/api/coffeeshops")
    .send({
      name: "Test Cafe",
      address: "123 Coffee Street",
      city: "Paris",
      state: "Île-de-France",
      postal_code: "75000",
      longitude: 2.3522,
      latitude: 48.8566,
      phone_number: "1234567890",
      email: "testcafe@example.com"
    });

  expect(res.statusCode).toBe(201);
  expect(res.body).toHaveProperty("id");
});

it("should update a coffee shop", async () => {
  const res = await request(app)
    .put("/api/coffeeshops/3")
    .send({
      name: "Updated Cafe",
      address: "456 New Street",
      city: "Berlin",
      state: "Berlin",
      postal_code: "10115",
      longitude: 13.405,
      latitude: 52.52,
      phone_number: "9876543210",
      email: "updatedcafe@example.com"
    });

  expect(res.statusCode).toBe(200);
  expect(res.body.name).toBe("Updated Cafe");
});
  
  it("should delete a coffee shop", async () => {
    const res = await request(app).delete("/api/coffeeshops/2");
    expect(res.statusCode).toBe(200);
  });
});
