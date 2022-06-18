from locust import HttpUser, task

class HelloWorldUser(HttpUser):
    @task
    def hello_world(self):
        self.client.get("/blitz_buy__tab")
        self.client.get("")
        self.client.post("", json={"username":"megayo@mail.austral.edu.ar", "password":"wishtest"})
        