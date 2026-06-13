import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  vus: 50,
  duration: "1m",

  thresholds: {
    http_req_duration: ["p(95)<2000"],
    http_req_failed: ["rate<0.01"],
  },
};

export default function () {
  const url = "http://localhost:5000/api/login";

  const payload = JSON.stringify({
    email: "senalis@gmail.com",
    password: "12345678",
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    "login berhasil": (r) => r.status === 200,
  });

  sleep(1);
}

