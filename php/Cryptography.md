
# BASIC CRYPTOGRAPHY

![](../images/crypto-categories.png?raw=1)

### **# Keyless** `[BLAKE2, SHA-1, SHA-256, MD5]`
- `TextMsg ---> Hash`  
- `Hash ---> TextMsg` NOT possible

- ```php
    hash("sha256", "The quick brown fox jumps over the lazy dog");
    // d7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592
    ```


### **# Secret Key** `[HMAC]`

- **1] Keyed hash functions**

    - Creates `MAC - Message Authentication Code`
    - `MAC = mesg + secret`
    - Send `mesg + MAC` . Then receiver will create `MAC` with the `secret` key known to both sender & receiver. If `MAC` matches then origin of `mesg` is authenticated.

    - ```php
        hash_hmac("sha256", "The quick brown fox jumps over the lazy dog", "secret key");
        // 4a513ac60b4f0253d95c2687fa104691c77c9ed77e884453c6a822b7b010d36f
        ```

- **2] Secret Key Encryption**

    - Reversible process
    - `PlainText + Secret = CipherText`
    - **Openssl** is a extension/library used to encrypt
    - `AES` algorithm is used  

- **3] Authenticated Secret Key Encryption**

    - `Encrypt` first then create `MAC`.
    - Two `secret`keys are used.

### **# Public Key**

- Generate key-pair `someMathsOn(private key) = public key`
- `public key ---> private` is almost Impossible.


- **1] Shared Secret Key Agreement [Diffie-Hellman]**

    - Share each other's public key `A ---> B` & `B ---> A`
    - `sharedkey = A(public) + B(private) = B(public) + A(private)`
    - Shared key generated is same because it uses `Diffie-Hellman`. Modular Arithmatic !!!


- **2] Digital Signatures [EdDSA (Edwards-curve Digital Signature Algorithm]**

    - `digitalSign = mesg + privateKey`
    - Anyone who has `public` key can authenticate the origin of `mesg`
    - Unlike the above mentioned `MAC` private keys are not shared.
    - *Minsign* or *GPG* signatures can be used.

- **Encoding** using `base64` & **compression** are NOT cryptographic.