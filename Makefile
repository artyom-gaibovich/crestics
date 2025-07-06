IMAGE_NAME=tic-tac-toe-app
CONTAINER_NAME=tic-tac-toe-container

start:
	npm install
	npm run dev

docker-build:
	docker build -t $(IMAGE_NAME) .

docker-run:
	docker run -d -p 3000:3000 --name $(CONTAINER_NAME) $(IMAGE_NAME)

docker-stop:
	docker stop $(CONTAINER_NAME) || true
	docker rm $(CONTAINER_NAME) || true

docker-rebuild: docker-stop docker-build docker-run

clean:
	rm -rf node_modules dist
