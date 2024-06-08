# Endpoints utilizados 

A API consumida no projeto foi o Roboflow, uma plataforma para criação e hospedagem de modelos de Machine Learning.
``https://detect.roboflow.com/detection-of-aquatic-species/``
No endpoint é enviado a imagem em Base64 no body de uma requisição POST, e ele retornará um JSON com as classes idetificadas.