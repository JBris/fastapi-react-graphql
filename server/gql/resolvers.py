from decouple import config
import json
from ml import get_predictions
from model import models
from model.database import DBSession
from .schemas import Iris, PaginationInput
from services import Cache
from typing import List

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
		
class QueryResolver:
	@staticmethod
	def get_name() -> str:
		return "Iris"
 
	@staticmethod
	def get_data(pagination: PaginationInput) -> List[Iris]:
		return get_data(pagination)

	@staticmethod
	def get_predictions(pagination: PaginationInput) -> List[Iris]:
		tasks = get_data(pagination)
		
		cache_host = config("REDIS_INTERNAL_HOST")
		cache_port = config("REDIS_INTERNAL_PORT")
		cache = Cache(
			host=cache_host, port=cache_port
		)

		task_list = cache.get(cache.k)

		if task_list is None:
			task_list = []
			for task in tasks:
				task_dict = task.__dict__
				del task_dict["_sa_instance_state"]
				task_list.append(task_dict)

			cache.set(
				cache.k, json.dumps(task_list)
			)
		else:
			task_list = json.loads(task_list)

		pred_tasks = get_predictions(task_list, Iris)
		return pred_tasks