"use server";

import { saveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";

export const shareMeal = async (formData) => {
  console.log(formData);
  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await saveMeal(meal);
  redirect("/meals");
};
