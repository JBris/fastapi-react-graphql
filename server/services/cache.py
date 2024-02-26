import redis

class Cache:
    def __init__(self, host='localhost', port=6379, db=0) -> None:
        self.r = redis.Redis()
        self.k = "iris"

    def get(self, k):
        return self.r.get(k)
    
    def set(self, k, v):
        return self.r.set(k, v)
          