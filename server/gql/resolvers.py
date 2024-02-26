from model import models
from model.database import DBSession
from strawberry import ID
from .schemas import Iris, PaginationInput
from typing import List

class QueryResolver:
	@staticmethod
	def get_name() -> str:
		return "Iris"
 
	@staticmethod
	def get_data(pagination: PaginationInput) -> List[Iris]:
		db = DBSession()
		
		try:
			query = db.query(models.Iris)
			if pagination is not None:
				query = (
					query
                    .offset(pagination.offset)
                    .limit(pagination.limit)
				)
			tasks = query.all()
    	
		finally:
			db.close()
        
		return tasks
	
	@staticmethod
	def get_predictions(pagination: PaginationInput) -> List[Iris]:
		return []