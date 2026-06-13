const request = require("supertest");
const app = require("../app");

describe("POST /api/login", () => {

  // =========================
  // EMAIL & PASSWORD KOSONG
  // =========================
  test("harus gagal jika email dan password kosong", async () => {

    const response = await request(app)
      .post("/api/login")
      .send({});

    expect(response.statusCode).toBe(400);

    expect(response.body.message)
      .toBe("Email dan password wajib diisi");

  });

  // =========================
  // EMAIL KOSONG
  // =========================
  test("harus gagal jika email kosong", async () => {

    const response = await request(app)
      .post("/api/login")
      .send({
        password: "12345678"
      });

    expect(response.statusCode).toBe(400);

    expect(response.body.message)
      .toBe("Email dan password wajib diisi");

  });

  // =========================
  // PASSWORD KOSONG
  // =========================
  test("harus gagal jika password kosong", async () => {

    const response = await request(app)
      .post("/api/login")
      .send({
        email: "budi@gmail.com"
      });

    expect(response.statusCode).toBe(400);

    expect(response.body.message)
      .toBe("Email dan password wajib diisi");

  });

  // =========================
  // AKUN TIDAK DITEMUKAN
  // =========================
  test("harus gagal jika akun tidak ditemukan", async () => {

    const response = await request(app)
      .post("/api/login")
      .send({
        email: "tidakada@gmail.com",
        password: "12345678"
      });

    expect(response.statusCode).toBe(401);

    expect(response.body.message)
      .toBe("Email atau password salah");

  });

  // =========================
  // PASSWORD SALAH
  // =========================
  test("harus gagal jika password salah", async () => {

    const response = await request(app)
      .post("/api/login")
      .send({
        email: "budi@gmail.com",
        password: "passwordsalah"
      });

    expect(response.statusCode).toBe(401);

    expect(response.body.message)
      .toBe("Email atau password salah");

  });

  // =========================
  // LOGIN BERHASIL
  // =========================
  test("harus berhasil login", async () => {

    const response = await request(app)
      .post("/api/login")
      .send({
        email: "budi@gmail.com",
        password: "12345678"
      });

    expect(response.statusCode).toBe(200);

    expect(response.body.message)
      .toBe("Login berhasil");

    expect(response.body.token)
      .toBeDefined();

  });

});

const sequelize = require("../config/db");

afterAll(async () => {
  await sequelize.close();
});