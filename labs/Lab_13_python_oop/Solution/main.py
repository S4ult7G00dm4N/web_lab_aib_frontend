import json
from config import clientPath, paymentsPath, OUTPUT_FILE_NAME
from writer import XlsAnalyticPaymentWriter

if __name__ == "__main__":
    with open(clientPath, "r", encoding="utf-8") as f:
        data_clients = json.load(f)
    with open(paymentsPath, "r", encoding="utf-8") as f:
        data_payments = json.load(f)
    data = {"clients": data_clients["clients"], "payments": data_payments["payments"]}

    output = XlsAnalyticPaymentWriter(data)
    output.write_excel_report(OUTPUT_FILE_NAME)
