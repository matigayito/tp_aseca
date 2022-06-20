from locust import HttpUser, task

class HelloWorldUser(HttpUser):
    @task
    def hello_world(self):
        self.client.post("/user", json={
    "username": "String",
    "password": "String",
    "ageGroup": 1,
    "sex": False
})
        self.client.get("/user")
        self.client.get("/user/wishlist/1")
        #self.client.post("/products/discount", json={"username":"megayo@mail.austral.edu.ar", "password":"wishtest"})
        