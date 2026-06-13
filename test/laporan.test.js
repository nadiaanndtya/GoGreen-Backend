const request = require("supertest");

jest.mock("../middleware/auth", () => {

  return (req, res, next) => {

    req.user = {
      id: 1
    };

    next();

  };

});

const app = require("../app");

describe("GET /", () => {

  test("API harus berjalan", async () => {

    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);

    expect(response.text)
      .toBe("API Sistem Pelaporan Sampah");

  });

});

describe("POST /api/laporan", () => {

  test("harus gagal jika semua field kosong", async () => {

    const response = await request(app)
      .post("/api/laporan");

    expect(response.statusCode).toBe(400);

    expect(response.body.message)
      .toBe("Semua field wajib diisi");

  });

  test("harus gagal jika foto kosong", async () => {

    const response = await request(app)
      .post("/api/laporan")
      .field("judul", "Sampah")
      .field("deskripsi", "Banyak sampah")
      .field("lokasi", "Jl. Bau Massepe")
      .field("kecamatan", "Ujung");

    expect(response.statusCode).toBe(400);

    expect(response.body.message)
      .toBe("Foto wajib diupload");

  });

});