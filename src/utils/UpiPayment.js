import { Platform } from "react-native";
import UpiPayment from "one-react-native-upi";

class UpiPaymentService {
  static async handleUpiPayment(data) {
    try {
      const result = await UpiPayment.initializePayment({
        vpa: data.vpa,
        amount: data.amount,
        payeeName: data.payeeName,
        transactionRef: data.transactionRef,
        merchantCode: data.merchantCode,
        transactionNote: data.transactionNote,
      });

      if (result.Status === "SUCCESS") {
        return { success: true };
      } else {
        return { success: false, message: "Payment failed" };
      }
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  static async addMoney(vpa, amount) {
    try {
      const data = {
        vpa: vpa,
        amount: amount,
        payeeName: "Merchant",
        transactionRef: "Add Money",
        transactionNote: "Add Money to Wallet",
      };
      return await UpiPaymentService.handleUpiPayment(data);
    } catch (error) {
      return { success: false, message: error.message };
    }
  }

  static async withdrawMoney(vpa, amount) {
    try {
      const data = {
        vpa: vpa,
        amount: amount,
        payeeName: "Recipient",
        transactionRef: "Withdraw Money",
        transactionNote: "Withdraw Money from Wallet",
      };
      return await UpiPaymentService.handleUpiPayment(data);
    } catch (error) {
      return { success: false, message: error.message };
    }
  }
}

export default UpiPaymentService;
