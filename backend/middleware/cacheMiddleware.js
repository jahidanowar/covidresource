const cache = require('memory-cache');

// configure cache middleware
const memCache = new cache.Cache();
exports.cacheMiddleware = (duration) => {
    return (req, res, next) => {
        const key =  '__express__' + req.originalUrl || req.url
        const cacheContent = memCache.get(key);
        if(cacheContent){
            res.send( cacheContent );
            return
        }else{
            res.sendResponse = res.send
            res.send = (body) => {
                memCache.put(key,body,duration*1000);
                res.sendResponse(body)
            }
            next()
        }
    }
}