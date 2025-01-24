import { rateLimit } from 'express-rate-limit';

const rateLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 500,
  standardHeaders: true,
  legacyHeaders: false
});

export default rateLimiter;
