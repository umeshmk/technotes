http://www.sandtable.com/reduce-docker-image-sizes-using-alpine/

# Basic
- python:2.7-alpine image = 19MB 
- python:2.7 image = 260MB! 

- Here is our guideline on how to proceed.
        
        FROM ubuntu => FROM alpine
        FROM python:2.7 => FROM python:2.7-alpine

# APK instead of APT or YUM
- In your Dockerfile, replace:
    - `RUN apt-get update && apt-get install <package>`
    - with:
    - `RUN apk add --no-cache <package>` # The `--no-cache` not cache the index locally. 

- The packages in Alpine : 
    - `https://pkgs.alpinelinux.org/packages`

 
# How to add a user on Alpine?
- This will create a system user:
    - `RUN adduser -S <username>`
    - `adduser [OPTIONS] user_name`
        
        Options:
            -h DIR          Home directory
            -g GECOS        GECOS field
            -s SHELL        Login shell
            -G GRP          Add user to existing group
            -S              Create a system user
            -D              Do not assign a password
            -H              Do not create home directory
            -u UID          User id
 

# How to enter an Alpine container?
Alpine doesn’t come with bash, so to enter a container forget:

`docker run -ti my_image bash`

Simply use shell:

`docker run -ti my_image sh`


# ERROR - while building image         
        fetch http://dl-cdn.alpinelinux.org/alpine/v3.5/main/x86_64/APKINDEX.tar.gz
- Solution: `docker build --network host -t <any> .`