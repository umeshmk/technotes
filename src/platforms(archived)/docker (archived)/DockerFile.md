# Dockerfile

- [Reference](https://docs.docker.com/engine/reference/builder/)
- [Best practices](https://docs.docker.com/engine/userguide/eng-image/dockerfile_best-practices/)

- image is build using Dockerfile
  - `docker build -tag <name> .`
  - `docker build -tag <name> -f <path/Dockerfile> .`
- `.dockerignore`
  - build `context` dir is where `docker build ...` is executed
  - `Dockerfile` is somewhere in context. Default is current dir. Use `-f` flag for other path.
  - all files & folders are _sent to docker daemon_ as context [Regardless of Dockerfile path ]
  - some file & folders may not be used in build but still sent as build context.
  - So big context & big image size
  - can increase build,pull,push time & runtime size of containers
- clean apt cache by removing `/var/lib/apt/lists`
  - reduces the image size
- Use Single line -> each line creates a new image
  - use breakline `\` and sort alphabetically
  - `RUN apt-get update && apt-get install -y` update & install on 1 line
  - `LABEL a="5" c="2"`
  - `RUN wget -O - http://some.site | wc -l > /number` Use `|` pipes
  - Separate lines for COPY is better.
- `ENV PATH /usr/local/nginx/bin:$PATH` will ensure that _CMD [“nginx”]_ just works

---

# Description

- `INSTRUCTION argument` - not case-sensitive but UPPERCASE looks better
- `# directive=value`
  - Parser directive always at top even before `#comments`
  - not case-sensitive
  - a blank line after any directive
  - `\` for line continuation is WRONG
  - Same directive if more than 2 times is INVALID directive
  - invalid directive is treated as comment
- `#Comments`
- `FROM`
  - `FROM <image>:<tag> AS <name>`
  - `FROM <image>@<digest> AS <name>`
  - _1st line_
  - _Only `ARG` can come before this._
  - can appear multiple times in single Dockerfile
  - default tag is _latest_
- `Escape`
  - default is Backslash _ \ _
  - can use _backtick(useful for windows)_ using directive _[# escape=`]_
  - _[ \ ] or [ ` ]_ Escape _Backslash & Backtick_
  - not working in `RUN` except at end to break line
- `ENV`

  - environment variables
  - can be used by: _[ADD COPY ENV EXPOSE FROM LABEL STOPSIGNAL USER VOLUME WORKDIR]_
  - `ENV <key> <value>`
  - `ENV <key>=<value> ....`
  - `ENV v1="hello" v2=hello\ world\ hii`[preferred since single cache layer]
  - `$variable` or `${variable}` or `${foo}_bar`
  - `\$variable` result is literal only
  - `${variable:-defaultvalue}`
    - set: then `givenvalue`
    - not set: then value is `defaultvalue`
  - `${variable:+defaultvalue}`
    - set: then `defaultvalue`
    - not set: then value is `empty string`
      ENV abc=hello
      ENV abc=bye def=$abc    # hello
            ENV ghi=$abc # bye

- `.dockerignore file`

  - checked before docker build finds Dockerfile
  - during build prevents copying using `ADD` & `COPY`
  - _f context root = root & working directory_
    - `foo/bar` or `/foo/bar` is same folder for `.dockerignore`
  - matching is done using Go's filepath syntax
  - `. or ..` is removed by Go
  - `**` wildcard string
  - eg:
      
     # comment
    _/temp_ #files & folders names start with temp is ignored from context root
    _/_/temp* # /somedir/subdir/temporary.txt is ignored
    temp? # /tempa , /tempb is ignored
    \*\*/*.go # files ending with .go in all directories including root
    \*.md # all .md .....
    !Readme.md # ...... except this is ignored

- `ARG`
  - `ARG <varname>[=<default value>]`
  - user pass arg mentioned in Dockerfile
    - `docker build --build-arg <varname>=<value>`
  - user pass arg not mentioned in Dockerfile
    - a warning
  - 0...n args per Dockerfile
  - Must be defined before using
  - If same name then `ENV` overrides `ARG`
  - Persistance in image: `ARG` [NOT] `ENV` [YES]
  - predefined arguments
    - can be used without mentioning/defining it in Dockerfile
    - [`HTTP_PROXY`, `http_proxy`, `HTTPS_PROXY`, `https_proxy`, `FTP_PROXY`, `ftp_proxy`, `NO_PROXY`, `no_proxy`]
    - `--build-arg HTTP_PROXY=http://user:pass@proxy.lon.example.com`
    - passed using _--build-arg_
      - arg is _excluded in docker history_ & _not cached_
    - passed using _Dockerfile_
      - arg is _included in history_ & _cached_ which results in `cache miss` on first usage line
  - eg:
    ARG VERSION=latest
    FROM base:\${VERSION}
- `RUN`

  - run during build of image
  - `RUN <command>`
  - `RUN ["executable", "param1", "param2"]` # double quotes
  - `RUN ["echo", "$HOME"]` # \$HOME is not resolved to value
  - `RUN ["sh", "-c", "echo $HOME"]`# Shell resolves \$HOME nor Docker

- `CMD`

  - after build of image when container runs
  - Only 1 time in Dockerfile
  - If many times then last is used
    - can use _script.sh_ file
  - `CMD command param1 param2`
  - `CMD ["executable", "param1", "param2"]`
  - `CMD ["param1", "param2"]` # If ENTRYPOINT is mentioned

- `LABEL`

  - metadata for image
  - multiple labels for a image
  - `LABEL <key>=<value> <key>=<value> <key>=<value>`
  - to add space in between words use escape [ \ ] or quotes
  - `LABEL "com.example.vendor"="ACME"`
  - `LABEL version="2.1"`
  - `LABEL about="This is illustrates \ breaking lines"`

- `MAINTAINER`

  - DEPRECATED

- `EXPOSE`

  - `EXPOSE <port> [<port>/<protocol>.....]`
  - TCP or UDP. TCP is default.
  - Port is not published
  - `docker network` command creating network
    - for communication between containers
    - without expose or publish of special ports
    - because containers in same network can communicate using any port.
    - Conclusion: can expose or publish any port[not specific ports ]

- `ADD`

  - `COPY` is preferred
  - features like _tar extraction, URL_
  - use _wget_ or _curl_ to download files and not `ADD <url>`
  - 2 forms
    - `ADD <src>.... <dest>`
    - `ADD ["<src>",.... "<dest>"]` # If path has whitespace
  - copy files,folders,fileurls from <src> to image's filesystem at <dest>
    - `ADD hom* /mydir/` # adds all files starting with "hom"
    - `ADD hom?.txt /mydir/` # ? is any random single character. eg "home.txt"

- `COPY`

  - basic copying
  - 2 forms
    - `COPY <src>.... <dest>`
    - `COPY ["<src>",.... "<dest>"]` # If path has whitespace
  - copy files,folders from <src> to image's filesystem at <dest>
    - `COPY hom* /mydir/` # adds all files starting with "hom"
    - `COPY hom?.txt /mydir/` # ? is any random single character. eg "home.txt"

- `ENTRYPOINT`

  - makes container as an executable
  - `ENTRYPOINT ["executable", "param1", "param2"]` # exec-form is preferred
  - `ENTRYPOINT command param1 param2` # shell-form
  - last mention of this command is used

- `VOLUME`

  - Recommended
  - `VOLUME ["/data"]`
  - `VOLUME /var/log`
  - `VOLUME /var/log /var/db`
  - creates mount point
  - In Dockerfile if volume is declared(mentioned in Dockerfile)
    - & then any build steps changes data within volume
    - then this _changes are discarded_
    - so make changes before creating(mentioned) volume

- `USER`

  - `USER <user>[:<group>]`
  - `USER <UID>[:<GID>]`
  - used when running image or for any `RUN`, `CMD`, `ENTRYPOINT` that follows `user` command
  - if user does not have primary group then image or next instruction will use root group

- `WORKDIR`

  - `WORKDIR /path/workdir`
  - For `RUN`, `CMD`, `ENTRYPOINT`, `copy`, `ADD` that follows workdir
  - dir will be created if not found
  - can use only `ENV` declared in Dockerfile
    ENV DIRPATH /path
    WORKDIR $DIRPATH/$DIRNAME
    RUN pwd
    > o/p: /path/\$DIRNAME

- `ONBUILD`

  - `ONBUILD [INSTRUCTION]`
  - Used as trigger when image is used as base image for other builds
  - useful to build other images using this image base
  -

- `STOPSIGNAL`

  - `STOPSIGNAL signal`

- `HEALTHCHECK`

- `SHELL`
  - `SHELL ["executable", "parameters"]`
  - 0...n times per Dockerfile
  - default shell used in Linux `["/bin/sh", "-c"]`

### Cheatsheet

FROM
ARG
ENV
RUN
COPY
EXPOSE
CMD
