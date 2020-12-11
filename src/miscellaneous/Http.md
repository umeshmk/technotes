# HTTP

- http - 80 TCP port
- https - 443 TCP port
- Stateless protocol
- Chunked transfers : If content to be sent by server is dynamic "content-length" cannot be
  identified. So send chunks of content. Last chunk is always empty with "content-length=0". This
  helps to close the connection between server & client.
- http/1.1
  - Only 1 connection at 1 time
- Google Spdy 2009
  - Aim - to reduce Latency
  - Merged with Http/2 in 2015

**HTTP/2 -. http2.github.io**

1. Binary protocol

   - Binary data ( v1.1 uses readable text)
   - Building blocks - Frames & Streams
   - Stream = collection of frames
   - HTTP message - 1 ….n frames
     - HEADERS - metadata
     - DATA - payload
     - RST_STREAM
     - SETTINGS, PRIORITY, etc

2. Multiplexing

- Only 1 tcp connection is open
- N streams can be sent asynchronously
- Both client & server streams are asynchronous

3. HPACK header compression

- Same as http/1.1 + pseudo headers (method, scheme, host, path)
- Request/response - uses gzip
- Headers - uses Hoffman's shared table
- Both client/server has same Header's table
- Hoffman code is index for header's tables

4. Server push

- Server predicts client's future request

5. Request prioritization

- Add prioritization details to stream in
  - HEADERS frame (opening time)
  - PRIORITY frame (open stream)
- Without this details server will process streams in async way
- More priority = more server resources

6. Security

- Encryption = TLS over http/2 = https
- TLS is option al

**HTTP/3** - In draft version. Coming soon.

- Previously known as HTTP-over-QUIC
- QUIC - Quick UDP internet connections

## DNS

---

1. Local cache

   - Browser cache
   - DNS cache
   - Host file

2. Recursive DNS servers
3. Root DNS servers
4. Top level domain TLD
5. Authoritative DNS servers (A record)
