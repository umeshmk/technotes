# Docker Secrets
- swarm only 
- files like [<500kb only]
	- passwords
	- keys
	- ssl certificates
	- database name
	- .env configs 
	
- this files not be
	- transported over network
	- stored unencrypted
	- in source code

- docker secrets are 
	- send to correct containers only[running tasks only]
	- encrypted during transit & inside swarm
	- secrets[in swarm] & configs [mounted to container]

#### Managing secrets steps
- 1] add secret to swarm 
- 2] send to manager node by TLS
- 3] stored in `raft log` which is encrypted
- 4] raft log replicates to all managers for high availablity
- 5] new service is created(using secret) & running 
- 6] decrypted secret is mounted inside container to `/run/secrets/<secret_name>`
- 7] we can also provide target
	- `--secret source=site.conf,target=/etc/nginx/conf.d/site.conf`
- 8] [updating secrets is not possible] add or remove as we want without stopping container


# Cheatsheet

	docker secret create <secret-name>
		#eg: echo "This is a secret" | docker secret create my_secret_data -
	docker secret create <secret-name> <file>

	docker secret inspect
	docker secret ls
	docker secret rm
	
	--secret flag for docker service create
	--secret-add and --secret-rm flags for docker service update
 	--secret source=<config-name>,target=/path/<any-name>


