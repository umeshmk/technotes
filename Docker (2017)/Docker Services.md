URL - https://docs.docker.com/engine/swarm/services/

- *scaling* and *load-balancing*
- eg : services like 
        - DB
        - Redis
        - front-end
        - back-end 

- Multiple machines(real/virtual) combines to form cluster called `swarm`
- Each machines is a `node`
- Each node has n tasks(replications)
- 1 task has 1 container
- Containers are `services` (in production)
- Service(container) run only 1 docker-image

- `docker-compose.yml` / `docker-stack.yml` defines multiple services
- version: 3 only supports swarm-mode
- *swarm* has *manager-node* & *worker-nodes*
- *swarm* starts *services* which has *tasks* which creates *containers* 
    - *`manager-node`*
        - only 1 per swarm
        - manages everything in swarm
        - we talk to manager
    - *`worker-nodes`*
        - multiple as we want
        - we do not, but manager talks to each node



## Service
*eg:*
    docker service create --name my_nginxservice nginx     # use docker--compose.yml file
    docker service update --publish-add 80 my_nginxservice # update    
    docker service remove my_nginxservice                  # remove service
    // configure
    --name <myname>
    --env <MYVAR>=<myvalue>                     # environment variable
    --workdir </tmp>     
    --user <my_user>
    // publish ports[service port -> to hostpc outside swarm]
    // 2 ways: 
        a] routing mesh
            # published <service port> is accessible at <target port> on every node even if that node has 0 tasks of this service.(eg nginx works on all node's <ip>)
            # less complex and right choice for many services.
            --publish <target post>:<service port>
        b] manually 
            # open port only on required node <ip> & not all nodes.
            # bypasses mesh routing 
            # flexible
            # managed manually
            --publish mode=host, <target post>:<service port>
    // Overlay network
        # connect 1 or n services *within* swarm
        # create on manager node
        docker network create --driver overlay <mynetwork>
        # all manager nodes have access to <mynetwork>
        docker service create --replicas 3 --network <mynetwork> --name my-web nginx
        # swarm extends <mynetwork> to each node running the service 
    
    // Scaling
        a] replicated 
            # n task on swarm's any or all nodes (n = 0..n)
            # default mode
            docker service create --replicas 3 nginx 
        b] global
            # 1 task per node 
            docker service create  --mode global nginx
    // volumes or bind mounts
        # create: use --mount for both types
        # update: use --mount-add or --mount-rm 
        # volumes
            # better than bind
            # remains even ofter container is removed
            docker create service --mount src=<myVol>,destination=<container-path> 
        # bind 
            # src is from host path
            docker service create --mount type=bind,src=<hostpath>,dst=<container-apth>,readonly --name myservice nginx


## Cheatsheet
    docker swarm init               # makes current machine a node-manager in swarm
    docker swarm init --advertise-addr <myVM-ip>  
    docker swarm join --token <token> <manager-ip>:<port>       # run this cmd on worker node to join swarm
    docker stack deploy -c <docker-compose.yml> <mystack>       # deploys or updates mystack
    
    docker service ls               # list services
    docker service ps <serviceID>   # list tasks in this service
    
    docker inspect --format='{{.Status.ContainerStatus.ContainerID}}' <task>    # Gives container-ID for this task
    docker inspect --format='{{index .Config.labels \"com.docker.swarm.task.id\"}}''<containerID>   # Gives taks-ID
    
    docker stack rm <mystack>       # stop & removes mystack from swarm
    docker swarm leave              # worker-nodes
    docker swarm leave --force      # manager-node