// src/app/api/auth/[...nextauth]/route.ts
import { handlers } from "@/auth";

// App Router ต้อง export แค่ GET และ POST
export const { GET, POST } = handlers;
