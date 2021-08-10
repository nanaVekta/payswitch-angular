import { PUBLIC_KEY_TOKEN } from './theteller-token';
import { Inject, Injectable } from '@angular/core';
import { TheTellerOptions } from './theteller-options';

interface MyWindow extends Window {
  PayswitchPopup: {
    setup(options: Partial<TheTellerOptions>): {
      openIframe(): any
    }
  }
}

declare var window: MyWindow;

@Injectable({
  providedIn: 'root'
})
export class PayswitchAngularService {

  constructor(
    @Inject(PUBLIC_KEY_TOKEN) private token: string
  ) { }

  loadScript(): Promise<void> {
    return new Promise(resolve => {
      if(window.PayswitchPopup && typeof window.PayswitchPopup.setup === 'function') {
        resolve();
        return;
      }

      const script = window.document.createElement('script');
      window.document.head.appendChild(script);
      const onLoadFunc = () => {
        script.removeEventListener('load', onLoadFunc);
        resolve();
      };
      script.addEventListener('load', onLoadFunc);
      script.setAttribute('src', 'https://test.theteller.net/checkout/resource/api/inline/theteller_inline.js');
    })
  }

  checkInput(obj: Partial<TheTellerOptions>): string {
    if(!obj.APIKey && !this.token) {
      return 'PAYSWITCH-ANGULAR: Add your public key'
    }
    if(!obj.amount) {
      return 'PAYSWITCH-ANGULAR: Add amount'
    }
    if(!obj.transid) {
      return 'PAYSWITCH-ANGULAR: Add transaction ID'
    }
    if(!obj.customer_email) {
      return 'PAYSWITCH-ANGULAR: Add customer email'
    }
    if(!obj.transcation_type) {
      return 'PAYSWITCH-ANGULAR: Add transaction type'
    }
    if(!obj.return_url) {
      return 'PAYSWITCH-ANGULAR: Add return URL'
    }
    return '';
  }

  getPayswitchOptions(obj: Partial<TheTellerOptions>): TheTellerOptions {
    const payswitchOtions: TheTellerOptions = {
      APIKey: obj.APIKey || this.token,
      amount: obj.amount,
      transid: obj.transid,
      customer_email: obj.customer_email,
      transcation_type: obj.transcation_type,
      return_url: obj.return_url,
      currency: obj.currency || 'GHS',
      pay_button_text: obj.pay_button_text || 'Pay Now',
      custom_description: obj.custom_description || 'Pay convieniently',
      payment_method: obj.payment_method || 'both'

    }
  }
}
