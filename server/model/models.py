from sqlalchemy import Column, String, Float
from .database import Base

class Iris(Base):
	__tablename__ = "iris"
	sepal_length = Column(Float)
	sepal_width = Column(Float)
	petal_length = Column(Float)
	petal_width = Column(Float)
	species = Column(String)

	def __repr__(self):
		return 
		f"""Iris(sepal_length={self.sepal_length}, 
		sepal_width={self.sepal_width}, petal_length={self.petal_length},
		petal_width={self.petal_width}, species={self.species})"""