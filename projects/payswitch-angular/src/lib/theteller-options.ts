export  interface TheTellerOptions {

  // Amount to be charged
  amount: number;

  // Your merchant API key provided when you create an account. Use test key for testing
  // and live key for production.
  APIKey?: string;

  // Unique transaction 12 digit reference id.
  transid: string;

  // customer's email address
  customer_email: string;

  // Currency to charge customer in. Defaults to GHS.
  currency?: string;

  // URL to redirect to when transaction is completed.
  return_url: string;

  // Text to show on pay button
  pay_button_text?: string;

  // Text to be displayed as a short transaction narration.
  // Let the customer know what they are paying for.
  custom_description?: string;

  // Choose between card or mobile money payment.
  // e.g card, momo, both
  payment_method?: string;

  // Payment type. Whether it's a live or test transaction.
  transcation_type: string;
}
