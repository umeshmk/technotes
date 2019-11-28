# Docker swarm Network
- https://docs.docker.com/engine/swarm/networking/

#### *Traffic* - 2 types 
- 1] `control & management`
	- management msg like join/leave swarm, etc.
	- always encrypted	 
- 2] `application data`
	- between containers
	- to & from external clients


#### *Networks* - 3 types
- 1] `overlay`
	- uses overlay driver 
	- between *docker daemons* in swarm
	- created same way as in non-swarm standalone containers
	- attach a *service* with 
		- *1...n existing* overlay networks for `service to service` communications

- 2] `Ingress`
	- A *special* overlay network
	- *load balancing* among service's nodes
	- *created automatically* on swarm init or join 
	- mostly no need to customize manually
	- working
		- a request is received on any node's published *port*
		- request is send to *IPVS*
		- *IPVS* keeps track of `IP` addresses providing that service 
		- selects any 1 `IP` & sends request
		
- 3] `docker_gwbridge`
	- a bridge network 
	- connects `overlay` & `ingress` to an individual docker daemon's physical network.
	- *created automatically* on swarm init or join 
	- mostly no need to customize manually
	 

#### Firewall considerations
- All Docker daemons in a swarm communicates with each other on ports 
	- `2376` TCP 		#Docker Machine
	- `2377` TCP		#cluster management communications(only on manager node)
	- `7946` TCP/UDP	#container network discovery / communication among nodes
	- `4789` UDP 		#container overlay network traffic

#### Overlay Network - Cheatsheet

		docker network create --driver overlay <network-name>
		docker network create --driver overlay --subnet 10.0.9.0/24 --gateway 10.0.9.99 <network-name>

		docker service create --network <network-name>	#connect service to <network-name>
		docker network inspect <network-name>			#inspection



#### Configure Subnet & Gateway
- configured automatically on creating overlay network










