"use server";

import axios from "axios";

const BACKEND_URL =
  process.env.BACKEND_API_URL ||
  process.env.NEXT_PUBLIC_API_URL ||
  "http://localhost:5000/api/v1";

export async function initiateStripeDonationAction(payload) {
  try {
    const res = await axios.post(
      `${BACKEND_URL}/donations/stripe/initiate`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );
    return { success: true, status: res.status, data: res.data };
  } catch (err) {
    console.error("Server Action Error (Stripe Initiate):", err.response?.data || err.message);
    return {
      success: false,
      status: err.response?.status || 500,
      message: err.response?.data?.message || err.message || "Stripe initiation failed",
      data: err.response?.data || null,
    };
  }
}

export async function cancelStripeDonationAction(payload) {
  try {
    const res = await axios.post(
      `${BACKEND_URL}/donations/stripe/cancel`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );
    return { success: true, status: res.status, data: res.data };
  } catch (err) {
    console.error("Server Action Error (Stripe Cancel):", err.response?.data || err.message);
    return {
      success: false,
      status: err.response?.status || 500,
      message: err.response?.data?.message || err.message || "Stripe cancellation failed",
      data: err.response?.data || null,
    };
  }
}

export async function initiatePayPalDonationAction(payload) {
  try {
    const res = await axios.post(
      `${BACKEND_URL}/donations/paypal/initiate`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );
    return { success: true, status: res.status, data: res.data };
  } catch (err) {
    console.error("Server Action Error (PayPal Initiate):", err.response?.data || err.message);
    return {
      success: false,
      status: err.response?.status || 500,
      message: err.response?.data?.message || err.message || "PayPal initiation failed",
      data: err.response?.data || null,
    };
  }
}

export async function capturePayPalDonationAction(payload) {
  try {
    const res = await axios.post(
      `${BACKEND_URL}/donations/paypal/capture`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );
    return { success: true, status: res.status, data: res.data };
  } catch (err) {
    console.error("Server Action Error (PayPal Capture Donation):", err.response?.data || err.message);
    return {
      success: false,
      status: err.response?.status || 500,
      message: err.response?.data?.message || err.message || "PayPal capture failed",
      data: err.response?.data || null,
    };
  }
}

export async function cancelPayPalDonationAction(payload) {
  try {
    const res = await axios.post(
      `${BACKEND_URL}/donations/paypal/cancel`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );
    return { success: true, status: res.status, data: res.data };
  } catch (err) {
    console.error("Server Action Error (PayPal Cancel):", err.response?.data || err.message);
    return {
      success: false,
      status: err.response?.status || 500,
      message: err.response?.data?.message || err.message || "PayPal cancellation failed",
      data: err.response?.data || null,
    };
  }
}

export async function createPayPalOrderAction(payload) {
  try {
    const res = await axios.post(
      `${BACKEND_URL}/payments/paypal/create-order`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );
    return { success: true, status: res.status, data: res.data };
  } catch (err) {
    console.error("Server Action Error (PayPal Create Order):", err.response?.data || err.message);
    return {
      success: false,
      status: err.response?.status || 500,
      message: err.response?.data?.message || err.message || "PayPal order creation failed",
      data: err.response?.data || null,
    };
  }
}

export async function capturePayPalOrderAction(payload) {
  try {
    const res = await axios.post(
      `${BACKEND_URL}/payments/paypal/capture-order`,
      payload,
      { headers: { "Content-Type": "application/json" } }
    );
    return { success: true, status: res.status, data: res.data };
  } catch (err) {
    console.error("Server Action Error (PayPal Capture Order):", err.response?.data || err.message);
    return {
      success: false,
      status: err.response?.status || 500,
      message: err.response?.data?.message || err.message || "PayPal order capture failed",
      data: err.response?.data || null,
    };
  }
}
