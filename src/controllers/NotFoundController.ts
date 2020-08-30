import { Controller } from "../framework/Controller";
import { Request, Response } from 'express';

export class NotFoundController extends Controller {

    async respondNotFound(req: Request, res: Response) {
        res.status(404).json({
            error: "This route can not be found. 🔎"
        });
    }

    getRouter() {
        this.router.get('*', (req: Request, res: Response) => { this.respondNotFound(req, res) });
        this.router.post('*', (req: Request, res: Response) => { this.respondNotFound(req, res) });
        this.router.put('*', (req: Request, res: Response) => { this.respondNotFound(req, res) });
        this.router.patch('*', (req: Request, res: Response) => { this.respondNotFound(req, res) });
        this.router.delete('*', (req: Request, res: Response) => { this.respondNotFound(req, res) });

        return this.router;
    }
}