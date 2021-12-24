(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{408:function(e,t,s){"use strict";s.r(t);var a=s(45),n=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"getting-started"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" GETTING STARTED")]),e._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[e._v("Deprecated")]),e._v(" "),s("p",[e._v("This notes are for version 6. Current version is 8+ at the time of this editing.")]),e._v(" "),s("p",[e._v("Still most of the parts are relevent.")])]),e._v(" "),s("h2",{attrs:{id:"release-version-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#release-version-6"}},[e._v("#")]),e._v(" RELEASE (version 6)")]),e._v(" "),s("ul",[s("li",[e._v("Laravel Vapor")]),e._v(" "),s("li",[e._v("Improved authorization responses")]),e._v(" "),s("li",[e._v("Job middleware")]),e._v(" "),s("li",[e._v("Lazy collections")]),e._v(" "),s("li",[e._v("Sub-query improvements")]),e._v(" "),s("li",[e._v("Frontend scaffolding to the "),s("strong",[e._v("laravel/ui")])])]),e._v(" "),s("h2",{attrs:{id:"vagrant-box-homestead"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vagrant-box-homestead"}},[e._v("#")]),e._v(" VAGRANT BOX - HOMESTEAD")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Vagrant Boxes are virtual machines and so needs "),s("strong",[e._v("VirtualBox")])])]),e._v(" "),s("li",[s("p",[e._v("Completely disposable")])]),e._v(" "),s("li",[s("p",[e._v("Runs on Windows, Mac, Linux")])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Softwares")])]),e._v(" "),s("ul",[s("li",[e._v("Included - "),s("em",[e._v("Nginx, PHP, MySQL, PostgreSQL, Redis, Memcached, Node, etc")])]),e._v(" "),s("li",[e._v("Optional - "),s("em",[e._v("Docker, MongoDB, OhMyZsh, etc")])])])]),e._v(" "),s("li",[s("p",[s("a",{attrs:{href:"https://www.youtube.com/watch?v=b3HLNJvVzNo&list=PL41lfR-6DnOqzgYCAOIBTnMUFNdLtsKuW&index=1",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[e._v("Youtube Tutorial")]),s("OutboundLink")],1)])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Install Homestead")])]),e._v(" "),s("ul",[s("li",[s("em",[e._v("1] Multiple Projects")])])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# In ~/Laravel folder [This will serve all laravel projects]")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/laravel/homestead.git ~/Laravel/Homestead\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout release                  "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# select release branch")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("bash")]),e._v(" ~/Laravel/Homestead/init.sh      "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# This will gives homestead.yml , aliases, before.sh")]),e._v("\n")])])]),s("ul",[s("li",[s("em",[e._v("2] Single Project")])])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[e._v("  "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" require laravel/homestead --dev      "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Add Homestead to project")]),e._v("\n  php vendor/bin/homestead "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v("                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Creates YAML and Vagrantfile. Folder location and sitename are automatically configured..")]),e._v("\n")])])])])]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Vagrant Basics")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Install Homestead Box")]),e._v("\nvagrant box "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("add")]),e._v(" laravel/homestead\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Basics")]),e._v("\nvagrant up              "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Power ON")]),e._v("\nvagrant "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("halt")]),e._v("            "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Power OFF")]),e._v("\nvagrant reload          "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Restart")]),e._v("\nvagrant "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("suspend")]),e._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Hibernate")]),e._v("\nvagrant resume          "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Resume from suspension")]),e._v("\nvagrant destroy         "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Destroy")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# SSH - Needs RSA Key as in YAML")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v('# CREATE SSH KEY - "ssh-keygen -t rsa -b 4096"')]),e._v("\nvagrant "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("ssh")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Do this everytime we edit YAML file")]),e._v("\nvagrant reload --provision\n")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Folder Sharing")]),e._v(" - For high "),s("em",[e._v("Disk I/O performance")])]),e._v(" "),s("ul",[s("li",[e._v("Instead of "),s("code",[e._v("map: ~/code")]),e._v(" do "),s("code",[e._v("map:~/code/project1")]),e._v(" & "),s("code",[e._v("map:~/code/project2")])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Hostname resolution")])]),e._v(" "),s("ul",[s("li",[s("p",[s("em",[e._v("1] Single project")])]),e._v(" "),s("ul",[s("li",[e._v("Automatic hostname resolution - "),s("strong",[e._v("http://foo.local")])])]),e._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("sites")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" foo\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" /home/vagrant/code/project1/public\n")])])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("2] Multiple projects")])]),e._v(" "),s("ul",[s("li",[e._v("Needs to add in "),s("code",[e._v("etc/hosts")]),e._v(" with same "),s("em",[e._v("ip address")]),e._v(" as in YAML")])]),e._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("sites")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" foo.test\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" /home/vagrant/code/project1/public\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("-")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("map")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" bar.test\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[e._v("to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" /home/vagrant/code/project2/public\n")])])])])])])]),e._v(" "),s("ul",[s("li",[s("p",[s("strong",[e._v("Daily Usage")])]),e._v(" "),s("ul",[s("li",[s("p",[s("em",[e._v("Database admin client")])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Mysql")]),e._v(" - Use "),s("code",[e._v("127.0.0.1:33060")])]),e._v(" "),s("li",[s("strong",[e._v("Postgresql")]),e._v(" - Use "),s("code",[e._v("127.0.0.1:54320")])]),e._v(" "),s("li",[e._v("Credentials - "),s("code",[e._v("homestead/secret")])])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("Darabase Backups")])]),e._v(" "),s("ul",[s("li",[e._v("When "),s("code",[e._v("vagrant destroy")]),e._v(" is called the database must be backedup")]),e._v(" "),s("li",[e._v("In YAML add - "),s("code",[e._v("backup:true")])]),e._v(" "),s("li",[e._v("Folder\n"),s("ul",[s("li",[s("em",[e._v("Names")]),e._v(" - "),s("code",[e._v("mysql_backup")])]),e._v(" "),s("li",[s("em",[e._v("Location")]),e._v(" "),s("ul",[s("li",[e._v("Homestead folder if multiple projects")]),e._v(" "),s("li",[e._v("Project root folder if per project homestead is used")])])])])])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("Mailhog")])]),e._v(" "),s("ul",[s("li",[e._v("View outgoing mails - "),s("code",[e._v("http://localhost:8025")])]),e._v(" "),s("li",[e._v("Add this in "),s("code",[e._v(".env")])]),e._v(" "),s("li",[s("code",[e._v(".env")]),e._v(" "),s("a",{attrs:{href:"https://laravel.com/docs/6.x/homestead#configuring-mailhog",target:"_blank",rel:"noopener noreferrer"}},[e._v("Config"),s("OutboundLink")],1)])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("Minio")])]),e._v(" "),s("ul",[s("li",[e._v("Object storage server with Amazon S3 compatible API - "),s("code",[e._v("http://localhost:9600/")])]),e._v(" "),s("li",[s("code",[e._v(".env")]),e._v(" "),s("a",{attrs:{href:"https://laravel.com/docs/6.x/homestead#configuring-minio",target:"_blank",rel:"noopener noreferrer"}},[e._v("Config"),s("OutboundLink")],1)])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("Ports")])]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Host -> Virtual")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("2222")]),e._v(" -"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("22")]),e._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ssh")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("8000")]),e._v(" -"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("80")]),e._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# http")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("44300")]),e._v(" -"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("443")]),e._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# https")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("33060")]),e._v(" -"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("3306")]),e._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Mysql")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4040")]),e._v(" -"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("4040")]),e._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# ngrokUI")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[s("em",[e._v("Site sharing")])]),e._v(" "),s("ul",[s("li",[e._v("1] "),s("em",[e._v("Vagrant")]),e._v(" "),s("ul",[s("li",[e._v("Use command "),s("code",[e._v("vagrant share")])]),e._v(" "),s("li",[e._v("For single site only")])])]),e._v(" "),s("li",[e._v("2] "),s("em",[e._v("Ngrok")]),e._v(" "),s("ul",[s("li",[e._v("SSH in homestead and use command "),s("code",[e._v("share foo.test")])]),e._v(" "),s("li",[e._v("Can be used for multiple sites")])])])])])])]),e._v(" "),s("li",[s("p",[s("strong",[e._v("Debug & Profiling")])]),e._v(" "),s("ul",[s("li",[e._v("App - "),s("code",[e._v("XDebug")])]),e._v(" "),s("li",[e._v("CLI App - "),s("code",[e._v("Xphp")])]),e._v(" "),s("li",[e._v("Profiling\n"),s("ul",[s("li",[e._v("Use "),s("em",[e._v("Blackfire")]),e._v(" [Performance, quality & security checks]")]),e._v(" "),s("li",[e._v("Use "),s("em",[e._v("XHGUI")])])])])])])]),e._v(" "),s("h3",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" # INSTALLATION")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Create project")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("composer create-project --prefer-dist laravel/laravel blog")])]),e._v(" "),s("li",[e._v("Error (if json is not downloading) - "),s("code",[e._v("composer config -g repo.packagist composer https://repo.packagist.org")])])])])]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("Basic Configuration")]),e._v(" "),s("ul",[s("li",[s("em",[e._v("Entry point")]),e._v(" "),s("code",[e._v("“public/index.php”")])]),e._v(" "),s("li",[s("em",[e._v("Check config folder")])]),e._v(" "),s("li",[s("em",[e._v("Folder permissions")]),e._v(" (not required if Homestead) "),s("code",[e._v("[sh-start.sh]")]),e._v(" - https://github.com/umeshmk/laravel/blob/master/sh-start.sh")]),e._v(" "),s("li",[s("em",[e._v(".env file")])]),e._v(" "),s("li",[e._v("Do - "),s("code",[e._v("npm install")])])])])]),e._v(" "),s("h3",{attrs:{id:"configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[e._v("#")]),e._v(" # CONFIGURATION")]),e._v(" "),s("ul",[s("li",[e._v("Using "),s("strong",[e._v("DotEnv")]),e._v(" php library for "),s("em",[e._v(".env")]),e._v(" "),s("ul",[s("li",[e._v("Any variable in "),s("em",[e._v(".env")]),e._v(" can be overwritten by "),s("em",[e._v("server/system")]),e._v(" environment variables")]),e._v(" "),s("li",[s("code",[e._v("$_ENV (global php variable)")])]),e._v(" "),s("li",[s("em",[e._v("config files")]),e._v(" - "),s("code",[e._v("‘debug’ => env(“APP_DEBUG”, false)")])]),e._v(" "),s("li",[s("code",[e._v("$environment = App::environment()")])])])]),e._v(" "),s("li",[s("strong",[e._v("Access config")]),e._v(" :- "),s("code",[e._v("$a = config::(‘app.timezone’)")])]),e._v(" "),s("li",[s("strong",[e._v("Maintenance mode")]),e._v(" "),s("ul",[s("li",[s("em",[e._v("Down")]),e._v(" - "),s("code",[e._v("php artisan down")]),e._v(" (no queued jobs handled)")]),e._v(" "),s("li",[s("em",[e._v("Up")]),e._v(" - "),s("code",[e._v("php artisan up")]),e._v(" (queue resume)")]),e._v(" "),s("li",[s("em",[e._v("View file")]),e._v(" :- "),s("code",[e._v("/views/errors/503.blade.php")])]),e._v(" "),s("li",[s("strong",[e._v("Envoyer")]),e._v(" is alternative to maintenance mode with zero-downtime.")])])])]),e._v(" "),s("h3",{attrs:{id:"directory"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#directory"}},[e._v("#")]),e._v(" # DIRECTORY")]),e._v(" "),s("ul",[s("li",[s("em",[e._v("app, bootstrap, config, database, public, resources, routes, storage, test, vendor")])]),e._v(" "),s("li",[s("strong",[e._v("app")]),e._v(" "),s("ul",[s("li",[s("em",[e._v("Console, Exceptions, Http, Providers")]),e._v(" => Created by default")]),e._v(" "),s("li",[s("em",[e._v("Broadcast, Events, Jobs, Listeners, Mail, Notifications, Policies, Rules")]),e._v(" => created by artisan "),s("code",[e._v("make:xyz")]),e._v(" command")])])])]),e._v(" "),s("h3",{attrs:{id:"deployment"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[e._v("#")]),e._v(" # DEPLOYMENT:")]),e._v(" "),s("ul",[s("li",[s("p",[e._v("Nginx configuration")])]),e._v(" "),s("li",[s("p",[e._v("Optimizing")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("composer")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" --optimize-autoloader --no-dev\nphp artisan config:cache\nphp artisan route:cache\n")])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);