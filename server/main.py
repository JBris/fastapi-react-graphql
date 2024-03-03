from fastapi import FastAPI
from gql import graphql_app
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"], 
)

app.add_route("/", graphql_app)
app.add_websocket_route("/", graphql_app)

app.add_route("/graphql", graphql_app)
app.add_websocket_route("/graphql", graphql_app)