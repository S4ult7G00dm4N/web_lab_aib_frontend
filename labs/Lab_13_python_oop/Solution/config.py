from pathlib import PurePath
from datetime import datetime

clientPath = PurePath('../clients.json')
paymentsPath = PurePath('../payments.json')

CLIENTS = 'clients'
FIO = 'fio'

FULL_DATE_FORMAT = "%Y-%m-%dT%H:%M:%S.%fZ"
DATE_FORMAT = '%Y-%m-%d'
OUTPUT_FILE_NAME = f'payments_analytics_{datetime.now().strftime(DATE_FORMAT)}.xlsx'
