# Docker-Compose
- url
    - `.yml`  https://docs.docker.com/compose
    - `Reference`  https://docs.docker.com/compose/compose-file
    - `Github`  https://github.com/docker/compose

- *3 steps*
    - `DockerFile`  app's environment (*eg: nginx/DockerFile*).  
    - `YAML` services file (*docker-compose.yml*)
    - `Swarm stacks` or `docker-compose up`

- *Feature*
    - Multiple isolated environment on single host (*foldername as projectname*)
    - preserve volume data when containers are created(*past data is not lost after restart*)
    - recreate only modified container
    - variables support in file (*${APPLICATION}*)

# Reference
`https://docs.docker.com/compose/compose-file/`
- `yml` or `.yaml` file defining services, networks, volumes
- *CMD, EXPOSE, VOLUME, ENV* are not needed in yml 
- *${VARIABLE}*  using Environment variables 
- *./docker-compose.yml* default file path
- `NOT SUPPORTED BY SWARM`
    -   [
            build
            cgroup_parent
            container_name
            devices
            depends_on
            dns
            dns_search
            tmpfs
            external_links
            links
            network_mode
            security_opt
            stop_signal
            sysctls
            userns_mode
        ]

- `build`[*Ignored by swarm*]    
    - path to build context
    - swarm accepts only images
    - `CONTEXT`     
    - `DockerFile`
    - `ARGS`
    - `CACHE_FROM`
    - `LABELS`

- `cap_add` & `cap_drop` [*Ignored by swarm*]

- `command`
    - override default command 
    - `command: bundle exec thin -p 3000`
    - `command: ["bundle", "exec", "thin", "-p", "3000"]`

- `configs`[version 3.3]
    - cannot be writable.(because its mounted in temporary filesystem)
    - *short syntax*
        - just name of `external` configs
        - Already defined from *other stacks* or command `docker config create`
        - mounts at `/<config_name>` within container 
        - source name & destination mountpoint are both set to config name
        - eg: 
        ```yml    
            version: "3.3"
            services:
                redis:
                    image: redis:latest
                    deploy:
                        replicas:1
                    configs:
                        - my_config
                        - my_other_config
            configs:
                my_config:
                    file: ./my_config.txt 
                my_other_config:
                    `external`: true        
        ```
    - *Long syntax*
        - `source`
        - `target`
        - `uid` & `pid` (linux only)
        - `mode` is permission. Format is octal notation. world readable code =`0444`
            - writable bit is ignored.
        - eg: [cannot access *my_other_config* ]
        ```yml 
            version: "3.3"
            services:
                redis:
                    image: redis:latest
                    deploy:
                        replicas: 1
                    configs:
                        - source: my_config
                          target: /redis_config
                          uid: 103
                          gid: 103
                          mode: 0440
            configs:
                my_config: 
                    file: ./my_config.txt 
                my_other_config:
                    external: true    
        ```

- `cgroup_parent`[*Ignored by swarm*]
- `container_name`[*Ignored by swarm*]
- `credential_spec`[version 3.3] [windows services only]

- `deploy`  [version 3] [swarm only] [docker-compose up *is ignored*]  
    
    - eg:
    ```yml 
        redis:
            image: redis:latest
            deploy:
                replicas: 6 
                update_config:
                    parallelism: 2 
                    delay: 10s
                restart_policy:
                    condition: on-failure
    ```

    - `ENDPOINT_MODE`
        - Methods of *service discovery* for external clients connecting to swarm
        - `endpoint_mode: vip`
            - IS DEFAULT
            - Docker gives service a virtual ip *(VIP)* as "frontend" for clients to reach on network
            - Docker routes requests between client & available worker node for service 
            - client do not know *number of nodes* or *IP* OR *PORTS*
        - `endpoint_mode: dnsrr`
            - DNS *RoundRobin* 
            - No single virtual IP
            - Docker sets *dns entries* for service 
            - DNS query for service name returns a *list of IP addresses*
            - clients connect *directly to anyone IP*
            - useful if using our own *load balancer*] or *Hybrid windows & Linux*

    - `LABELS`
        - For *services* only. Not for any *containers*
            - eg:
                web:
                    image: web 
                    deploy: 
                        labels:
                            mylabel: "any values"
        - For *containers* only. Not for any *service*
            - eg 
            ```yml 
                web: 
                    image: web 
                    labels: 
                        mylabel: "any value"
            ```
    - `MODE`
        - `replicated`
            - *0...n* containers (DEFAULT)
        - `global`
            - *1* container per swarm node.
    	- eg 
        ```yml 
           services:
            worker:
                image: dockersamples/examplevotingapp_worker 
                deploy:
                    mode: global
        ```

    - `PLACEMENT`
        - EG:
        ```yml 
            services:
                db:
                    image: postgres 
                    deploy:
                        placement: 
                            constraints:
                                - node.role == manager 
                                - engine.label.operatingsystem == ubuntu 14.04
        ```

    - `REPLICAS`
        - iF `replicated` mode then
        - number of container replicas running on same time 
        - eg:
        ```yml 
            services: 
                worker:
                    images: dockersamples/examplevotingapp_worker 
                    networks:
                        - frontend
                        - backend
                    deploy:
                        mode: replicated 
                        replicas: 6
        ```

    - `RESOURCES`[VERSION 3]
        - Replaces *[cpu_shares, cpu_quota, cpuset, mem_limit, memswap_limit, mem_swappiness]*
        - eg:
        ```yml 
            deploy:
                limits:
                    cpu: "0.001"
                    memory: 50M
                reservations:
                    cpu: "0.0001"
                    memory: 20M
        ```
    - `OOME-Out Of Memory exceptions`
    - `RESTART_POLICY`
        - Restart containers
        - `condition`
            - *none* , *on-failure*, *any*.
            - *any* is default
        - `delay`           # wait between restart attempts 
        - `max_attempts`    # maximum restart attempts
        - `window`          # time to wait before concluding restart is successful
        - eg:
        ```yml 
            deploy:
                restart_policy:
                    condition: on-failure
                    dealy: 5s
                    max_attempts: 3 
                    window: 120s
        ```

    - `UPDATE_CONFIG`
        - Config for how to update service
        - `parallelism` # n containers update at a time 
        - `delay`   # time between updating group of containers 
        - `failure_action` [*continue*, *rollback*, *pause(default)*] # action on update failure
        - `monitor`     # duration after each task update to monitor for failure
        - `max_failure_ratio`   # failure rate to tolerate
        - eg.
        ```yml 
            deploy:
                replicas: 2
                update_config:
                    parallelism: 2 
                    dealy: 10s

- `devices`  [*Ignored by swarm*]
- `depends_on` [*Ignored by swarm*]
- `dns` [*Ignored by swarm*]
- `dns_search` [*Ignored by swarm*]
- `tmpfs` [*Ignored by swarm*]
- `entrypoint`
    - override default entrypoint 
- `env_file`
    - *VAR=VAL*  environment variables from a file 
    - can be single value or list
    - file path is relative to 
    - `environment`(see below) variables override variables in `env_file`
    - *VAL* is same as mentioned including quotes 
    - Incase of same named variables.... last one is used
    - this variable can be used inside *container*
    - this variables cannot be used in *.yml*
    - eg: 
    ```yml 
        services:
            myservice:
                env_file:
                    - a.env 
                    - b.env
    ```
- `environment`
    - can use *array or dictionary*
    - *Boolean* values like *true false yes no* are inside qoutes
        - since yml parser makes them *True False*
    - if no value but *only key* then those values are taken from machine in which compose runs 
    - eg:
    ```yml
        environment:
            BACK_ENV: development
            SHOW: `true`
            SESSION_SECRET
    ```
    - eg:
    ```yml 
        environment:
            - BACK_ENV=development
            - SHOW=true 
            - SESSION_SECRET

- `expose`
    - expose but not published
    - access to linked services only 
    - only internal ports 
    - rg 
    ```yml
        expose: 
            - "3000"
            - "8000"
    ```
- `external_links`[*Ignored by swarm*]
    - use networks instead
    
- `extra_hosts`
- `healthcheck`
- `image`
    - eg : *image: redis*
    - eg : *image: ubuntu:14.04*
- `isolation`
- `labels`
    - adds metadata to containers
- `links`[*Ignored by swarm*]
- `logging`
    - logs for services
- `network_mode` [*Ignored by swarm*]
- `networks`
    - eg:
    ```yml 
        services:
            myservice:
                networks:
                    - myneta
                    - yournetb
    ```
    - `ALIASES`
        - alternative hostnames for this service on network
        - other containers on same network (to connect this service's container)
            - can use service *name* OR
            - can use *aliases*
        - *Scope* is limited to network 
        - eg:
        ```yml
            services:
                myservice:
                    networks:
                        aliases:
                            - alias1
                            - alias2
        ```

    - `IPV4_ADDRESS` / `IPV6_ADDRESS`
- `pid`
- `ports`
    - expose ports
    - a] *SHORT SYNTAX*
        - `HOST:CONTAINER` or just `CONTAINER` which will choose random host port
        - eg:
        ```yml 
            ports:
                - "3000"
                - "3000:3005"
                - "8000:8000"
                - "9090-9091:8080-8081"
                - "49100:22"
                - "127.0.0.1:8001:8001"
                - "127.0.0.1:5000-5010:5000-5010"
                - "6060:6060/udp"
        ```
    - b] *LONG SYNTAX* [version 3.2]
        - *target* , *published*, *protocol*, *mode*

- `secrets`
    - grant access to service to use *secrets*
    - *secrets* must be already defined in top level of yml in order to add to service in yml
    - *SHORT SYNTAX*
        - just secret name
        - container gets access to secrets
        - mounts at `/run/secrets/<secret_name>` within container 
        - *external* means already defined in docker by *docker secret create* OR *other stacks*
        - eg 
        ```yml 
            version: "3.1"
            services:
                redis:
                    image: redis:latest
                    deploy: 
                        replicas: 1 
                    secrets:
                        - my_secret
                        - my_other_secret
            secrets:
                my_secret:
                    file: ./my_secret.txt 
                my_other_secret:
                    external: true
        ```
    - *LONG SYNTAX*
        
- `security_opt`[*Ignored by swarm*]
- `stop_grace_period` [*Ignored by swarm*]
- `sysctls` [*Ignored by swarm*]
- `ulimits`     
- `userns_mode`[*Ignored by swarm*]
- `volumes` - (Reference)
    - *host paths* or *named volumes*
    - *host path* in single service without defining in top level `volumes` key
    - *named volumes* defined in top-level can be reused in many services
    - *named volumes* are better for swarms
    - eg:
    ```yml 
        version: "3.2"
        services:
            web:
                image: nginx:alpine
                volumes: 
                    - type: volume 
                      source: mydata
                      target: /data 
                      volume:
                        nocopy: true 
                    - type: bind 
                      source: ./static
                      target: /opt/app/static
            db:
                image: postgres  
                volumes: 
                     - "/var/run/postgres/postgres.sock:/var/run/postgres/postgres.sock"
                     - "dbdata:/var/lib/postgresql/data"
        volumes:
            mydata:
            dbdata:
    ```
    - `SHORT SYNTAX`
        - *HOST:CONTAINER* OR *HOST:CONTAINER:ro*
        - mount a host data using *yml* relative paths `.` & `..`
        - eg:
        ```yml 
            volumes:
                - /var/lib/mysql    # give path & engine will create volume
                - /opt/data:/var/lib/mysql  # absolute path
                - ./cache:/tmp/cache        # relative path to yml
                - ~/configs:/etc/configs/:ro    # relative path to home
                - myvolume:/var/lib/mysql       # named volumes
        ``` 
    - `LONG SYNTAX`

- `restart`
    - *no* , *always* , *on-failure* , *unless-stopped*
- `domainname, hostname, ipc, mac_address, privileged, read_only, shm_size, stdin_open, tty, user, working_dir`

- `networks` (Reference)
    - `driver`
        - *bridge* on single host 
        - *overlay* on swarm
    - `driver_opt`
        - driver dependent options
    - `attachable`
        - for *overlays* only
        - if *true* then standalone container can attach to this network 
        - And this container can connect with *service* & other *standalone containers* already attached to this network
        - eg:
        ```yml 
            networks:
                mynet:
                    driver: overlay
                    attachable: true
        ```
- `ipam` [version 2]








# keywords & notes & commands used in file
- no tabs. Only 2 space
- 
- version: "3"      # swarm mode


    docker stack deploy     # version 3 with swarm mode
    docker-compose up       # version 3 with Non-swarm mode
    docker-compose down     



