from rest_framework.views import APIView, Request, Response, status
from .serializer import TransactionsSerializer
from datetime import datetime
from .models import Transaction


class TransactionsView(APIView):
    def post(self, request: Request):
        data = request.data
        data_list_str = data["data"].strip().split("\r\n")
        data_list_dicts = []
        for n in data_list_str:
            type = n[0:1]
            date = datetime.strptime(n[1:9], "%Y%m%d").date()
            value = n[9:19]
            cpf = n[19:30]
            card = n[30:42]
            time = datetime.strptime(n[42:48], "%H%M%S").time()
            owner = n[48:62].strip()
            store = n[62:81].strip()
            data_list_dicts.append(
                {
                    "type": type,
                    "date": date,
                    "value": value,
                    "cpf": cpf,
                    "card": card,
                    "time": time,
                    "owner": owner,
                    "store": store,
                }
            )

        serializer = TransactionsSerializer(data=data_list_dicts, many=True)
        serializer.is_valid()

        for transaction in serializer.data:
            Transaction.objects.create(**transaction)

        return Response(serializer.data, status.HTTP_200_OK)
