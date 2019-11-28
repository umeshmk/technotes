## URL Docker
- hub.docker.com/explore/
- github.com/docker/labs
- docs.docker.com/get-started
- www.digitalocean.com/community/tutorials/the-docker-ecosystem-an-introduction-to-common-components
- www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04
- www.digitalocean.com/community/tutorials/how-to-install-docker-compose-on-ubuntu-16-04
- www.digitalocean.com/community/tutorials/how-to-configure-a-continuous-integration-testing-environment-with-docker-and-docker-compose-on-ubuntu-16-04



##### Basics
- Level
    - Stack (top)  
    - Services (middle)
    - Container (bottom)

##### Installation
see *install.sh*

##### Using the Docker Command
>
    - docker [option] [command] [arguments]    
    - docker docker-subcommand --help  
    - docker info  


##### Example `hello-world` `ubuntu`
> 
    - docker run hello-world 
    - docker run -it ubuntu       # -i and -t for cli(shell) access into container 


##### Save edits in *container* as new Docker *Image*

> 
  - docker commit -m "any mesg" -a "Author Name" <container-id> <repository/newImageName>   <br>
  
> // *eg:* = docker commit -m "added node.js" -a "umesh kadam" d9b100f2f636 finid/ubuntu-nodejs   <br>
  // new image is stored locally. need to push in docker hub repo


## Cheetsheet
    docker search <search>                                       # search Docker Hub 
    docker pull <username>/<image>                               # Copy image from cloud to local
    
    docker build -t <image> .                                    # Create image using this directory's[a dot] Dockerfile
    
    docker run -p 4000:80 <image>                                # Run "imagename" mapping port 4000 to 80
    docker run -d -p 4000:80 <image>                             # Same thing, but in detached mode
    docker run -d -P --name <myname> -e AUTHOR="<UK>" <image>    # P is random port, e is env variable
    
    docker container ls                                          # List all running containers
    docker ps
    docker container ls -a                                       # List all containers, even those not running
    docker ps -a

    docker exec -i -t <containerID> /bin/bash                    # bash command terminal inside container
    
    docker container stop <hash>                                 # Gracefully stop the specified container
    docker stop <hash>
    docker container kill <hash>                                 # Force shutdown of the specified container
    docker container rm <hash>                                   # Remove specified container from this machine
    docker rm <hash>
    docker container rm $(docker container ls -a -q)             # Remove all containers
    
    docker image ls -a                                           # List all images on this machine
    docker images
    
    docker image rm <image id>                                   # Remove specified image from this machine
    docker image rm $(docker image ls -a -q)                     # Remove all images from this machine
    
    docker login                                                 # Log in this CLI session using your Docker credentials
    docker tag <image> username/repository:tag                   # Tag <image> for upload to registry
    docker push username/repository:tag                          # Upload tagged image to registry
    docker run username/repository:tag                           # Run image from a registry






## Uninstall Docker
>
 - sudo apt-get purge docker-ce
 - sudo rm -rf /var/lib/docker




