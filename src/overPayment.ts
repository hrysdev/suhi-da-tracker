class OverPayment {
  static readonly MIN_AMOUNT: number = 0;

  amount: number;

  constructor(amount: number) {
    if (amount < OverPayment.MIN_AMOUNT) {
      throw new Error("入力された過払金が負の数です。");
    }

    this.amount = amount;
  }
}
