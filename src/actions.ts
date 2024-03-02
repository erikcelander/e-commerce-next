"use server";

import { createSupabaseServer } from "@/lib/supabase/server";
import { Product } from "@/lib/types";

export const getProducts = async () => {
  const supabase = createSupabaseServer();

  const { data, error } = await supabase.from("products").select("*");

  if (error) {
    console.error("Error fetching products:", error.message);
    return null;
  }

  return data as Product[];
};

export const getProduct = async (id: string) => {
  const supabase = createSupabaseServer();

  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching product:", error.message);
    return null;
  }

  return data as Product;
};
