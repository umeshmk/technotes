- docker build -t friendlyhello .

> in local Docker image registry:

- docker images

- docker run -p 4000:80 friendlyhello

> 
- Python is serving your app at http://0.0.0.0:80. 
- But that message is coming from inside the container, which doesn’t know you mapped port 80 of that container to 4000, 
- making the correct URL http://localhost:4000.

>
- docker tag image username/repository:tag
 // For example:
- docker tag friendlyhello john/get-started:part2

docker push username/repository:tag

// Pull and run the image from the remote repository
- docker run -p 4000:80 username/repository:tag