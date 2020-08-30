import express, { Router, Request, Response } from "express";

export class Controller {

    router: Router = express.Router();

    /**
     * Will respond with this when method won't be overriden.
     */
    private async notImplemented(req: Request, res: Response) {
        await res.status(501).json({
            error: `This route's ${req.method}-method has not been implemented. ❌`
        });
    }

    /**
     * Get all datasets from model
     */
    public async GET(req: Request, res: Response) {
        this.notImplemented(req, res);
    }

    /**
     * Add new dataset to model
     */
    async POST(req: Request, res: Response) {
        this.notImplemented(req, res);
    }

    /**
     * Update/Replace dataset by id from model
     */
    async PATCH(req: Request, res: Response) {
        this.notImplemented(req, res);
    }

    /**
     * Update/Replace dataset by id from model
     * @deprecated
     */
    async PUT(req: Request, res: Response) {
        this.notImplemented(req, res);
    }

    /**
     * Delete dataset by id from model
     */
    async DELETE(req: Request, res: Response) {
        this.notImplemented(req, res);
    }

    getRouter() {
        this.router.get('/', (req: Request, res: Response) => { this.GET(req, res) });
        this.router.post('/', (req: Request, res: Response) => { this.POST(req, res) });
        this.router.patch('/', (req: Request, res: Response) => { this.PATCH(req, res) });
        this.router.put('/', (req: Request, res: Response) => { this.PUT(req, res) });
        this.router.delete('/', (req: Request, res: Response) => { this.DELETE(req, res) });
        return this.router;
    }

}