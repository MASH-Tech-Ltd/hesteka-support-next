"use server";
import axios from "axios";

const getBaseUrl = () => {
  return (
    process.env.BACKEND_API_URL ||
    process.env.NEXT_PUBLIC_API_URL ||
    "http://localhost:5000/api/v1"
  );
};

export async function initiateStripeDonation(payload) {
  try {
    const url = `${getBaseUrl()}/donations/stripe/initiate`;
    const res = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      success: true,
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    console.error("SSR initiateStripeDonation Error:", err?.response?.data || err?.message);
    return {
      success: false,
      message: err?.response?.data?.message || "Failed to initiate payment on server.",
      errorData: err?.response?.data || null,
    };
  }
}

export async function capturePayPalOrderAction(payload) {
  try {
    const url = `${getBaseUrl()}/payments/paypal/capture-order`;
    const res = await axios.post(url, payload, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      success: true,
      status: res.status,
      data: res.data,
    };
  } catch (err) {
    console.error("SSR capturePayPalOrderAction Error:", err?.response?.data || err?.message);
    return {
      success: false,
      message: err?.response?.data?.message || "PayPal encountered an error on server.",
      errorData: err?.response?.data || null,
    };
  }
}
