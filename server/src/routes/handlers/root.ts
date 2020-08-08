import { Router } from 'express';
import Snip from '../../models/Snip';

export default class {
  path: string;

  constructor() {
    this.path = '/';
  }

  run() {
    const router = Router();

    router.get('/*', async (req, res) => {
      const url: any = await Snip.findOne({ id: req.url.slice(1) });
      if (url) {
        res.redirect(301, url.url);
      } else {
        res.redirect(301, 'https://snip.ml');
      }
    });

    router.use('*', (req, { boom }) => {
      boom.notFound();
    });

    return router;
  }
}