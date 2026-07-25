import { NextResponse } from "next/server";
import axios from "axios";

const BACKEND_URL =
  process.env.BACKEND_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5000/api/v1";

async function proxyRequest(req, { params }) {
  try {
    const resolvedParams = await params;
    const pathArray = resolvedParams?.path || [];
    const pathString = pathArray.join("/");
    const url = `${BACKEND_URL}/${pathString}`;

    const method = req.method;
    let data = undefined;
    if (["POST", "PUT", "PATCH"].includes(method)) {
      try {
        data = await req.json();
      } catch (e) {
        // Body might be empty or non-JSON
      }
    }

    const res = await axios({
      method,
      url,
      data,
      params: req.nextUrl.searchParams,
      headers: {
        "Content-Type": req.headers.get("content-type") || "application/json",
      },
    });

    return NextResponse.json(res.data, { status: res.status });
  } catch (err) {
    const status = err.response?.status || 500;
    const errorData = err.response?.data || {
      success: false,
      message: err.message || "SSR Proxy Error",
    };
    return NextResponse.json(errorData, { status });
  }
}

export const GET = proxyRequest;
export const POST = proxyRequest;
export const PUT = proxyRequest;
export const DELETE = proxyRequest;
export const PATCH = proxyRequest;
