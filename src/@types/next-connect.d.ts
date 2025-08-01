declare module 'next-connect' {
    import { NextApiRequest, NextApiResponse } from 'next';
    import { Middleware } from 'next-connect';

    export interface NextConnectOptions {
        attachParams?: boolean;
    }

    export interface NextConnect<Req = NextApiRequest, Res = NextApiResponse> {
        use: (middleware: Middleware) => NextConnect<Req, Res>;
        get: (handler: (req: Req, res: Res) => void) => NextConnect<Req, Res>;
        post: (handler: (req: Req, res: Res) => void) => NextConnect<Req, Res>;
        put: (handler: (req: Req, res: Res) => void) => NextConnect<Req, Res>;
        delete: (handler: (req: Req, res: Res) => void) => NextConnect<Req, Res>;
    }

    export default function nc<Req = NextApiRequest, Res = NextApiResponse>(
        options?: NextConnectOptions
    ): NextConnect<Req, Res>;
}
