import {BaseService} from 'dok-ts/base/BaseService';
import * as nodemailer from 'nodemailer';

export class EmailService extends BaseService {
  private sender;
  public static options = {
    transport: {}
  };

  public init() {
    super.init();
    this.sender = nodemailer.createTransport(this.config.transport);
  }

  public send(data) {
    return new Promise((resolve) => {
      this.sender.sendMail(data, (err, info) => {
        if (err) {
          throw new Error(JSON.stringify(err));
        }
        resolve(info);
      })
    })
  }
}