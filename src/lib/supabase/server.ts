import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
// import { Database } from '@/lib/types/supabase'

export const createSupabaseServer = () => {
  const cookieStore = cookies();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL! as string;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! as string;

  return createServerClient(url, key, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
    },
  });
};

// return createServerClient<Database>(url, key, {
