"use server";

import dbConnect from "@/database/mongoose";
import { auth } from "@/lib/auth";
import { inngest } from "@/lib/inngest/client";
import { headers } from "next/headers";
import { signInType, signUpType } from "../schemas";

export async function SignUpAction({
  email,
  password,
  fullName,
  country,
  investmentGoals,
  riskTolerance,
  preferredIndustry,
}: signUpType) {
  try {
    const response = await auth.api.signUpEmail({
      body: {
        email,
        password,
        name: fullName,
      },
    });

    if (response) {
      await inngest.send({
        name: "app/user.created",
        data: {
          email,
          name: fullName,
          country,
          investmentGoals,
          riskTolerance,
          preferredIndustry,
        },
      });
    }

    return { success: true, data: response };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Sign up failed." };
  }
}

export async function signOutAction() {
  try {
    await auth.api.signOut({
      headers: await headers(),
    });
  } catch (error) {
    console.error(error);
    return { success: false, error: "Sign out failed." };
  }
}

export async function signInAction({ email, password }: signInType) {
  try {
    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
    });
    return { success: true, data: response };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Sign in failed." };
  }
}

export const getAllUsersForNewsEmail = async () => {
  try {
    const mongoose = await dbConnect();
    const db = mongoose.connection.db;
    if (!db) throw new Error("Mongoose connection not connected");

    const users = await db
      .collection("user")
      .find(
        { email: { $exists: true, $ne: null } },
        { projection: { _id: 1, id: 1, email: 1, name: 1, country: 1 } },
      )
      .toArray();

    return users
      .filter((user) => user.email && user.name)
      .map((user) => ({
        id: user.id || user._id?.toString() || "",
        email: user.email,
        name: user.name,
      }));
  } catch (e) {
    console.error("Error fetching users for news email:", e);
    return [];
  }
};
