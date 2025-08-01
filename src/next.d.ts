// next.d.ts
import { NextRequest } from 'next/server';

declare module 'next/server' {
    interface NextRequest {
        session: {
            userId: string; // Add other session properties if needed
        };
    }
}
