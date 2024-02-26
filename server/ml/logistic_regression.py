from decouple import config
from sklearn.model_selection import train_test_split
import pandas as pd
from services import Search
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import (
    accuracy_score, average_precision_score, f1_score, 
    precision_score, recall_score
)
from sklearn.preprocessing import LabelEncoder

estimator = LogisticRegression(
    penalty = None, solver = "newton-cg", max_iter = 250, multi_class = "ovr"
)

encoder = LabelEncoder()

def get_predictions(tasks, data_model):
    df = pd.DataFrame(tasks).drop(columns=["id"])
    resp = "species"
    X = df.drop(columns=resp)
    y = encoder.fit_transform(df[resp])
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.2
    )

    estimator.fit(X_train, y_train)
    preds = estimator.predict(X_test).reshape(-1, 1)
    document = {
        "accuracy": accuracy_score(y_test, preds),
        "average_precision": average_precision_score(y_test, preds),
        "f1": f1_score(y_test, preds, average="weighted"),
        "precision": precision_score(y_test, preds, average="weighted"),
        "recall": recall_score(y_test, preds, average="weighted"),
    }

    search_host = config("ELASTICSEARCH_HOST")
    search = Search(search_host)
    search.index(index=search.indx, document=document)
    search.close()

    preds = estimator.predict(X).reshape(-1, 1)
    pred_tasks = []
    for i, task_item in enumerate(tasks):
        task_item[resp] = preds[i]
        pred_task = data_model(**task_item)
        pred_tasks.append(pred_task)
    return pred_tasks
