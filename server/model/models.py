from sqlalchemy import Column, String, Float, Integer
from .database import Base

class Iris(Base):
	__tablename__ = "iris"
	id = Column(Integer, primary_key = True)
	sepal_length = Column(Float)
	sepal_width = Column(Float)
	petal_length = Column(Float)
	petal_width = Column(Float)
	species = Column(String)
