import strawberry

@strawberry.type
class Iris:
    sepal_length: float | None
    sepal_width: float | None
    petal_length: float | None
    petal_width: float | None
    species: str | None

@strawberry.input
class PaginationInput:
    offset: int = 50
    limit: int = 100