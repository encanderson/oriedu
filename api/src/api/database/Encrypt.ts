import { KMS } from "aws-sdk";

import { config } from "../../config";

export class Crypto {
  kms: KMS;
  constructor() {
    this.kms = new KMS({
      accessKeyId: config.awsAccessKeyId,
      secretAccessKey: config.awsSecretAccessKey,
      region: config.awsRegion,
    });
  }

  async encrypt(source: string): Promise<string> {
    const params = {
      KeyId: config.kmsKeyId,
      Plaintext: source,
    };

    const { CiphertextBlob } = await this.kms.encrypt(params).promise();

    return CiphertextBlob.toString("base64");
  }

  async decrypt(source: string): Promise<string> {
    const params = {
      CiphertextBlob: Buffer.from(source, "base64"),
    };

    const { Plaintext } = await this.kms.decrypt(params).promise();

    return Plaintext.toString();
  }
}
