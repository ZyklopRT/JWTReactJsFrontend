import * as jose from "jose";
import { JWTPayload, JWTVerifyResult } from "jose";

const alg = "RS256";
const spki = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArdPa8cgWzeKnCd7fdtaH
q/JKjfB1h0aQCt9f7ZuBq0wWAPXzA6YuGz+6tZzKDQEbv6aYjpFm5e4FCYGCQ6XF
nRwDIl/P5XV8zHyvv4L+BtSNUADZsbLK5L3Ovq+Iz3tjLWtOV9ZLTe1AsoHHH+KO
2eMdJ7EPZQRaIHX7EcV5xFxjRQihGFOmnec7tPfdIIPJO2bEEgZoc0WigVxsLKqb
5ul8NtOs8Ntf9eLLDgQ6mfCioh5JLJ4fxwj384wAxs6gDGw46jOlqWExU7jjLQqy
OeGUL2ThEpm7gH8sGi3yrI3aT/u3ndfSyeEZ7ENOsu0XIVwFQTf2+Jcf28VF/riN
AQIDAQAB
-----END PUBLIC KEY-----`;
const publicKey = await jose.importSPKI(spki, alg);

interface Payload extends JWTPayload {
  username: string;
}

interface JWTResult extends JWTVerifyResult {
  payload: Payload;
}

class TokenService {
  decode = async (jwt: string): Promise<JWTResult> => {
    // @ts-ignore
    return await jose.jwtVerify(jwt, publicKey);
  };
}

export default new TokenService();
