### Basics
- Multiple machines(real/virtual) combines to form cluster called `swarm`
- docker-machine is preinstalled in mac & windows
- Linux : see `install.sh`

- `config.json` , `certificates` , `data` etc for each *virtual machine* craated  by docker-machine
  -  stored in `~/.docker/machine/machines`
  -  modifiying them is NOT RECOMMENDED

##### Create cluster
- On local install `VirtualBox`
- On DigitalOcean, AWS, Azure etc. use respected drivers [https://docs.docker.com/machine/drivers/]

---
### Ingress Network : Why service is available on all myVM nodes `ip:port`
- swarm has nodes `myVM`
- nodes run services as per `YAML`
- services has `1-n` containers(replications) 
- a node may have `0-n containers` of this service (see docker visualizer)
- service is available on `<port>`of all nodes in swarm even if it has `0 container` for that service



---
### cheatsheet

    docker-machine create --driver <driver> <myVM>                                      # create virtual machine
    
    docker-machine ls                                                                   # list machines

    docker-machine ssh <myVM>                                                           # Open an SSH session with the VM; type "exit" to end    
    docker-machine ssh <myVM> "docker swarm init --advertise-addr <myVM-ip>"            # swarm init [manager node]
    docker-machine ssh <myVM> "docker swarm join --token <token> <manager-ip:2377>"     # swarm join [worker nodes]
    docker-machine ssh <myVM> "docker node ls"                                          # list nodes in swarm [run on manager only]
    docker-machine ssh <myVM> "docker node inspect <node ID>"                           # Inspect a node
    docker-machine ssh <myVM> "docker swarm join-token -q worker"                       # View join token
    docker-machine ssh <myVM> "docker stack deploy -c <file> <app>"                     # Deploy an app

    docker-machine env <myVM>                                                           # local shell talks to node & can use local files(docker-compose.yml) too without copying to <myVM>

    docker-machine scp docker-compose.yml <myVM>:~                                      # Copy file to node's home dir

    docker-machine start <myVM>                                                         # Start a VM that is currently not running
    docker-machine stop $(docker-machine ls -q)                                         # Stop all running VMs


    docker-machine ssh <myVM> "docker swarm leave"                                      # Make the worker leave the swarm
    docker-machine ssh <myVM> "docker swarm leave -f"                                   # Make only master leave, kill swarm
    
    docker-machine rm <myVM>                                                            # Remove 1 machine
    docker-machine rm $(docker-machine ls -q)                                           # Remove all VMs and their disk images
    
    






