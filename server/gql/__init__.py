import strawberry
from strawberry.asgi import GraphQL
from typing import List

from .resolvers import QueryResolver
from .schemas import Iris

@strawberry.type
class Query:
	name: str = strawberry.field(resolver=QueryResolver.get_name)
	iris: List[Iris] = strawberry.field(resolver=QueryResolver.get_data)
	predictions: List[Iris] = strawberry.field(resolver=QueryResolver.get_predictions)

schema = strawberry.Schema(query=Query)
graphql_app = GraphQL(schema)