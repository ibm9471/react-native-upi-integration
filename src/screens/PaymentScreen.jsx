import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import PaymentButton from "../components/PaymentButton";
import UpiPayment from "../utils/UpiPayment";

const PaymentScreen = () => {
  const [amount, setAmount] = useState("");

  const handleAddMoney = async () => {
    try {
      await UpiPayment.addMoney("merchant_upi_id", amount);
      console.log("add success");
      alert("add success");
    } catch (error) {
      console.log("add failed");
      alert("failed");
    }
  };

  const handleWithdrawMoney = async () => {
    try {
      await UpiPayment.withdrawMoney("recipient_upi_id", amount);
      console.log("withdraw success");
      alert("success");
    } catch (error) {
      console.log("withdraw failed");
      alert("failed");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        onChangeText={setAmount}
        value={amount}
        keyboardType="numeric"
      />
      <PaymentButton onPress={handleAddMoney} text="Add money" />
      <PaymentButton onPress={handleWithdrawMoney} text="Withdraw money" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});

export default PaymentScreen;
