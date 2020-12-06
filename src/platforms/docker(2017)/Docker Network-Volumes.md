# Network
- *Isolate* containers from other containers using *networks*

- Network drivers
    - 1] bridge
        - all containers are always started in this network unless mentioned other
        - limited to single host 
        
    - 2] overlay
        - multiple hosts
        - advanced than bridge
    
- Docker Engine default networks 
    - `docker network ls`
    
            NETWORK ID          NAME                DRIVER
            18a2866682b8        none                null
            c288470c46f6        host                host
            7b369448dccb        bridge              bridge


- Inspect ( get Container's ip address)
    - `docker network inspect <my_network>`
- Remove container from bridge network
    - `docker network disconnect bridge <containerID> `
- can remove containers from network but NOT *bridge network* itself

- Create own network
    - `docker network create -d <driver> <my_network>`
- Inspect network
    - `docker network inspect <my_network>`
- new container connects to network
    - `docker run -d --net=<my_network> --name <mycontainer> <username/image>`
- containers can conect to `1 - n networks`
    - `docker network connect <my_network> <mycontainer> ...`
- 
---

# Volumes
- *bind mount* 
    - host data [folder,files] is mounted inside container
    - managed by host
    
- *volume* [Recommended]
    - container data is stored in *<myVol>* directory in host
    - managed by docker
    - not controlled by storage drivers
    
- *tmpfs mount* 
    - temporary container data in host's memory/swap
    - removed when container stop
    - not shared between containers
    - only on linux


- Advantages `Volume` over `bind mount`
    - volumes are managed by docker
    - easy to `backup`
    - can use docker `API`
    - works on both `windows & linux containers`
    - safe to `share` between many containers
    - volume `drivers` can store on cloud
    - can `encrypt` data
    - new volume can be prepopulated by container
    - better than persisting data in containers
    - using volume does not increase container `size`
    - volume exists `outside` of container's lifecycle


- `-v` or `--volume` [`--mount` is recommended & easy since v17.06][*No support for services*]
    - 3 fields `[name : path/in/container : option1,option2..]`
- `--mount` [*support for services*]
    - many `key=Value` pairs
    - `type` = *[bind or volume or tmpfs]*
    - `source/src` of mount
        - omitted for *anonymous* volumes
        - this is name for *named* volumes
    - `destination/dst/target` = *[path/inside/container]
    - `readonly` *option* makes readonly
    - `volume-opt` *option* 

#### Note
- running `container` 

        # will *create* <myVol> if not yet created else *just use* it.
        # *Prepopulate* ie.copy [/app/everything] to [myVol] if creating volume
        # other containers using <myVol> can also *use data* on <myVol>
        docker run -d  --name devtest \
          --mount source=myvol,target=/app \
          nginx:latest

- running `service` 
        
        # each service has *n* containers each having separate *<myVo1> <myVol2>....*
        docker service create -d --name devtest-service \
            --mount source=myvol,target=/app \
            nginx:latest





---

# Cheatsheet
docker volume create <myVol>
docker volume ls
docker volume inspect <myVol>
docker volume rm <mtVol>




