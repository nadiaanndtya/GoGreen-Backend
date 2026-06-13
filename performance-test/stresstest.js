import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
  stages: [
    { duration: "30s", target: 250 },
    { duration: "30s", target: 500 },
    { duration: "30s", target: 750 },
    { duration: "30s", target: 1000 },
  ],

  thresholds: {
    http_req_duration: ["p(95)<5000"],
    http_req_failed: ["rate<0.05"],
  },
};

export default function () {
  const url = "http://localhost:5000/api/laporan";

  const params = {
    headers: {
      Authorization: " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzAsImVtYWlsIjoic2VuYWxpc0BnbWFpbC5jb20iLCJyb2xlIjoid2FyZ2EiLCJpYXQiOjE3Nzk0NTE3NjUsImV4cCI6MTc3OTQ1NTM2NX0.c0pfFjY9-42KiP5C-wxtwpfrlJjLVi6WkPMehebyC54",
      "Content-Type": "application/json",
    },
  };

  const res = http.get(url, params);

  check(res, {
    "request berhasil": (r) => r.status === 200,
  });

  sleep(1);
}

