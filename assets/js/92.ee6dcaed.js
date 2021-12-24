(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{457:function(e,a,t){"use strict";t.r(a);var n=t(45),i=Object(n.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("http://www.sandtable.com/reduce-docker-image-sizes-using-alpine/")]),e._v(" "),t("h1",{attrs:{id:"basic"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic"}},[e._v("#")]),e._v(" Basic")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("python:2.7-alpine image = 19MB")])]),e._v(" "),t("li",[t("p",[e._v("python:2.7 image = 260MB!")])]),e._v(" "),t("li",[t("p",[e._v("Here is our guideline on how to proceed.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("  FROM ubuntu => FROM alpine\n  FROM python:2.7 => FROM python:2.7-alpine\n")])])])])]),e._v(" "),t("h1",{attrs:{id:"apk-instead-of-apt-or-yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#apk-instead-of-apt-or-yum"}},[e._v("#")]),e._v(" APK instead of APT or YUM")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("In your Dockerfile, replace:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("RUN apt-get update && apt-get install <package>")])]),e._v(" "),t("li",[e._v("with:")]),e._v(" "),t("li",[t("code",[e._v("RUN apk add --no-cache <package>")]),e._v(" # The "),t("code",[e._v("--no-cache")]),e._v(" not cache the index locally.")])])]),e._v(" "),t("li",[t("p",[e._v("The packages in Alpine :")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("https://pkgs.alpinelinux.org/packages")])])])])]),e._v(" "),t("h1",{attrs:{id:"how-to-add-a-user-on-alpine"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-add-a-user-on-alpine"}},[e._v("#")]),e._v(" How to add a user on Alpine?")]),e._v(" "),t("ul",[t("li",[e._v("This will create a system user:\n"),t("ul",[t("li",[t("p",[t("code",[e._v("RUN adduser -S <username>")])])]),e._v(" "),t("li",[t("p",[t("code",[e._v("adduser [OPTIONS] user_name")])]),e._v(" "),t("p",[e._v("Options:\n-h DIR          Home directory\n-g GECOS        GECOS field\n-s SHELL        Login shell\n-G GRP          Add user to existing group\n-S              Create a system user\n-D              Do not assign a password\n-H              Do not create home directory\n-u UID          User id")])])])])]),e._v(" "),t("h1",{attrs:{id:"how-to-enter-an-alpine-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-enter-an-alpine-container"}},[e._v("#")]),e._v(" How to enter an Alpine container?")]),e._v(" "),t("p",[e._v("Alpine doesn’t come with bash, so to enter a container forget:")]),e._v(" "),t("p",[t("code",[e._v("docker run -ti my_image bash")])]),e._v(" "),t("p",[e._v("Simply use shell:")]),e._v(" "),t("p",[t("code",[e._v("docker run -ti my_image sh")])]),e._v(" "),t("h1",{attrs:{id:"error-while-building-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#error-while-building-image"}},[e._v("#")]),e._v(" ERROR - while building image")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("    fetch http://dl-cdn.alpinelinux.org/alpine/v3.5/main/x86_64/APKINDEX.tar.gz\n")])])]),t("ul",[t("li",[e._v("Solution: "),t("code",[e._v("docker build --network host -t <any> .")])])])])}),[],!1,null,null,null);a.default=i.exports}}]);