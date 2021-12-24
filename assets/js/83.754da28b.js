(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{448:function(e,t,n){"use strict";n.r(t);var c=n(45),s=Object(c.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"docker-configs"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#docker-configs"}},[e._v("#")]),e._v(" Docker Configs")]),e._v(" "),n("p",[e._v("https://docs.docker.com/engine/swarm/configs/")]),e._v(" "),n("ul",[n("li",[e._v("used by swarm services only not standalone containers")]),e._v(" "),n("li",[e._v("store config files outside of service image, containers")]),e._v(" "),n("li",[e._v("mounted directly in container filesystem")]),e._v(" "),n("li",[e._v("added/removed anytime from service")]),e._v(" "),n("li",[e._v("services can share a config")]),e._v(" "),n("li",[e._v("can use with env and labels")])]),e._v(" "),n("h4",{attrs:{id:"how-to-manage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-to-manage"}},[e._v("#")]),e._v(" How to manage?")]),e._v(" "),n("ul",[n("li",[e._v("add config to swarm")]),e._v(" "),n("li",[e._v("docker sends to manager over TLS")]),e._v(" "),n("li",[e._v("stored in raft log which is encrypted")]),e._v(" "),n("li",[e._v("raft log is replicated on all managers")]),e._v(" "),n("li",[e._v("give access to service for this configs")]),e._v(" "),n("li",[e._v('config is mounted as a file in container (default path is "/'),n("config-name",[e._v('")')])],1),e._v(" "),n("li",[e._v("node can access config\n"),n("ul",[n("li",[e._v("only if manager not others")]),e._v(" "),n("li",[e._v("if running task has been granted access\n"),n("ul",[n("li",[e._v("if task is stopped then configs are unmounted from task container, and flushed from node memory")])])])])])]),e._v(" "),n("h4",{attrs:{id:"simple-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#simple-example"}},[e._v("#")]),e._v(" simple example")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v('echo "a simple config file" | docker config create <configname>\ndocker service create --name redis --config <configname> redis:alpine\n# get task container\'s id\ndocker ps --filter name=redis -q \t\t// 5c2d54f2d5\n# check and read config which is mounted inside container at "/<configname>"\ndocker exec $(docker ps --filter name=redis -q) ls -l /myconfig\ndocker exec $(docker ps --filter name=redis -q) cat /myconfig \n// o/p: a simple config file \n# list & remove\ndocker config ls\ndocker config rm <my-config>\n')])])]),n("h4",{attrs:{id:"advanced-example-nginx"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#advanced-example-nginx"}},[e._v("#")]),e._v(" advanced example - nginx")]),e._v(" "),n("p",[e._v("https://docs.docker.com/engine/swarm/configs/#advanced-example-use-configs-with-a-nginx-service")]),e._v(" "),n("p",[e._v("step 1 -> create certificates\n- use LetsEncrypt "),n("code",[e._v("certbot")]),e._v("\n- use "),n("code",[e._v(".key")]),e._v(" & "),n("code",[e._v(".crt")]),e._v("\n- save as docker "),n("code",[e._v("secrets")]),e._v(" (must be less than 500kb)")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("\tdocker secret create <secret-name> <secret-file>\n")])])]),n("p",[e._v('step 2 -> create configs\n- save "site.conf" in docker config command')]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("\tdocker config create <config-name> <config-file>\t\t\n\t\t\n- `site.conf` \n\t\n\tserver {\n\t    listen                443 ssl;\n\t    server_name           localhost;\n\t    ssl_certificate       /run/secrets/site.crt;\n\t    ssl_certificate_key   /run/secrets/site.key;\n\n\t    location / {\n\t        root   /usr/share/nginx/html;\n\t        index  index.html index.htm;\n\t    }\n\t}\n")])])]),n("p",[e._v("step 3 -> create service")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("\tdocker service create \\ \n\t--secret <secret.crt> \\\n\t--secret <secret.key> \\\n\t--config source=<config-name>,target=/etc/nginx/conf.d/site.conf \\\n\t--publish 3000:443 \\\n\t<image> \\\n\tsh -c \"exec nginx -g 'daemon off;'\"\n")])])]),n("p",[e._v("step 4  -> inside container check 3 files")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("\t/run/secrets/site.key\t\t\n\t/run/secrets/site.crt \n\t/etc/nginx/conf.d/site.conf\t\t\n")])])]),n("p",[e._v("step 5 -> Rotate config from host\n- make some changes in site.conf a `"),n("config-file",[e._v("``\n- new site-v2.conf\n- create new docker config using old site.conf")])],1),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("\t docker config create site-v2.conf site.conf\n\t docker config create <config-name-v2> <config-name-v1>\n\n- update\t \t\n\n\tdocker service update \\\n\t\t--config-rm <oldfile>\n\t\t--config-add source=<newfile>,target=<path/to/oldfile> \\\n\t\t<service-name>\n")])])]),n("h1",{attrs:{id:"cheatsheet"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#cheatsheet"}},[e._v("#")]),e._v(" Cheatsheet")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("\tdocker config create <config-name> <file>\t\n\tdocker config create <config-name-v2> <config-name-v1>\t\n\t\t\t#Usage eg:\n\t\t\t# docker service create --config <config-name> <image>\n\t\n\tdocker config ls\t\t\t\t\t# list all configs\n\tdocker config rm <configname>\t\t# remove config\n\n\tdocker secret create <secret-name> <secret-file>\t\t\n\t\t\t#Usage eg:\n\t\t\t# docker service create \\\n\t\t\t#   --secret <secret-name> \n\t\t\t#\t--config source=<config-name>,target=<path/to/hostconfig> \\\t\t\t\n\t\t\t#\t<image> \n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);