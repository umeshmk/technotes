# Docker Configs
https://docs.docker.com/engine/swarm/configs/
- used by swarm services only not standalone containers
- store config files outside of service image, containers
- mounted directly in container filesystem
- added/removed anytime from service 
- services can share a config
- can use with env and labels

#### How to manage?
- add config to swarm 
- docker sends to manager over TLS
- stored in raft log which is encrypted
- raft log is replicated on all managers
- give access to service for this configs
- config is mounted as a file in container (default path is "/<config-name>")
- node can access config 
	- only if manager not others
	-  if running task has been granted access 
		-  if task is stopped then configs are unmounted from task container, and flushed from node memory

#### simple example
	echo "a simple config file" | docker config create <configname>
	docker service create --name redis --config <configname> redis:alpine
	# get task container's id
	docker ps --filter name=redis -q 		// 5c2d54f2d5
	# check and read config which is mounted inside container at "/<configname>"
	docker exec $(docker ps --filter name=redis -q) ls -l /myconfig
	docker exec $(docker ps --filter name=redis -q) cat /myconfig 
	// o/p: a simple config file 
	# list & remove
	docker config ls
	docker config rm <my-config>

#### advanced example - nginx
https://docs.docker.com/engine/swarm/configs/#advanced-example-use-configs-with-a-nginx-service

step 1 -> create certificates
	- use LetsEncrypt `certbot`
	- use `.key` & `.crt`
	- save as docker `secrets` (must be less than 500kb)
	
		docker secret create <secret-name> <secret-file>


step 2 -> create configs
	- save "site.conf" in docker config command
		
		docker config create <config-name> <config-file>		
			
	- `site.conf` 
		
		server {
		    listen                443 ssl;
		    server_name           localhost;
		    ssl_certificate       /run/secrets/site.crt;
		    ssl_certificate_key   /run/secrets/site.key;

		    location / {
		        root   /usr/share/nginx/html;
		        index  index.html index.htm;
		    }
		}

step 3 -> create service 

		docker service create \ 
		--secret <secret.crt> \
		--secret <secret.key> \
		--config source=<config-name>,target=/etc/nginx/conf.d/site.conf \
		--publish 3000:443 \
		<image> \
		sh -c "exec nginx -g 'daemon off;'"

step 4  -> inside container check 3 files

		/run/secrets/site.key		
		/run/secrets/site.crt 
		/etc/nginx/conf.d/site.conf		

step 5 -> Rotate config from host
	- make some changes in site.conf a `<config-file>``
	- new site-v2.conf
	- create new docker config using old site.conf
		 
		 docker config create site-v2.conf site.conf
		 docker config create <config-name-v2> <config-name-v1>
	
	- update	 	
	
		docker service update \
			--config-rm <oldfile>
			--config-add source=<newfile>,target=<path/to/oldfile> \
			<service-name>

# Cheatsheet
		
		docker config create <config-name> <file>	
		docker config create <config-name-v2> <config-name-v1>	
				#Usage eg:
				# docker service create --config <config-name> <image>
		
		docker config ls					# list all configs
		docker config rm <configname>		# remove config

		docker secret create <secret-name> <secret-file>		
				#Usage eg:
				# docker service create \
				#   --secret <secret-name> 
				#	--config source=<config-name>,target=<path/to/hostconfig> \			
				#	<image> 
			
