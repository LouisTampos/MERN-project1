import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
    try {
        const {success} = await ratelimit.limit("my-rate-limit"); //this should have `userid` in the future

        if (!success) {
            return res.status(429).json({
             message: "Too many request, please try again after 20 seconds"
            });
        }

        next();
    } catch (error) {
        console.log("Rate limit error", error);
        next(error);
    }
};

export default rateLimiter;