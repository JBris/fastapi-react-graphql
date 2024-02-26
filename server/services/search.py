from elasticsearch import Elasticsearch

class Search:
    def __init__(self, host="http://localhost:9200") -> None:
        self.indx = "iris"
        self.es = Elasticsearch(host)

    def index(self, index, document):
        return self.es.index(index=index, document=document)
    
    def get(self, index, id = 1):
        return self.es.get(index=index, id=id)
    
    def search(self, index, query):
        return self.es.search(index=index, query=query)

    def close(self):
        return self.es.transport.close()    
