Run your app in production

# BASICS

#### 1] Install
    - see install.sh
#### 2] Docker Daemon (dockerd)
    - start manually use `dockerd`
    - `/etc/docker/daemon.json` for configuration
    - options reference - https://docs.docker.com/engine/reference/commandline/dockerd/
    
#### 3] Prometheus system monitoring

#### 4] Container restart policy

- if a container stops running ? Restart.
- Apply only containers not services.
- `docker-compose.yml` is better than direct `docker run`
- *docker run -dit --restart <flag> redis*
- `<flag>` 
    - `no` = Do not restart.(Default)
    - `on-failure` = restart if error, which manifests as a non-zero exit code.
    - `unless-stopped` = Restart unless explicitly stopped or Docker itself is stopped or restarted.
    - `always` = Always restart
- Stopped if manually stopped.

#### 5] Limit container's resources
    - perform test to check required resources for each containers
    - `memory`
        - use `zram` (`swap` is bad for disk)
    - `cpu`
    - `block I/O`
    
#### Labels naming 
- give label names to objects like:

        [static label for lifetime]
            Images
            Containers
            Local daemons
            Volumes
            Networks
        [dynamic label for lifetime]
            Swarm nodes
            Swarm services 

 - label is a `key-value` pair
 - can have multiple labels per objects. But unique labels.
 - same label key for a object then last value of key is taken
 - label naming => `. dot` ,`- dash` , `lower-case`, `alphanumeric` , 

 
#### Prune variou docker objects
- remove unued docker objects.
- if not removed then uses disk space



---







